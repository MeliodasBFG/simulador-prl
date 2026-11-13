/**
 * PRL UNIVERSAL MULTIPLAYER NETWORK LAYER (CONEXIÓN GLOBAL SIN MISMA WI-FI)
 * 
 * Permite jugar en tiempo real entre dispositivos situados en redes diferentes:
 * - El profesor en la Wi-Fi del aula / fibra de casa.
 * - Los alumnos con datos móviles 4G/5G, otra Wi-Fi o desde sus hogares.
 * 
 * Arquitectura de transporte triple:
 * 1. Global Cloud Broker (MQTT sobre WebSockets seguros WSS): Conexión mundial inmediata.
 * 2. BroadcastChannel: Sincronización instantánea inter-pestañas en el mismo equipo.
 * 3. LocalStorage fallback: Respaldo síncrono en el mismo navegador.
 */

class PRLNetwork {
  constructor() {
    this.busName = 'prl_classroom_multiplayer_v2';
    this.myId = 'user_' + Math.random().toString(36).substring(2, 9);
    this.myName = '';
    this.currentRoom = null;
    this.subscribedTopic = null;
    this.isHost = false;

    // Callbacks y deduplicación
    this.listeners = new Map();
    this.seenMessageIds = new Set();

    // Cola de mensajes pendientes por si el usuario interactúa antes de completar el handshake MQTT
    this.pendingCloudQueue = [];

    // Estado de conexión en la nube
    this.cloudStatus = 'connecting'; // 'connected' | 'connecting' | 'offline'
    this.mqttClient = null;
    this.currentBrokerIndex = 0;
    this.connectWatchdog = null;
    this.brokers = [
      'wss://broker.emqx.io:8084/mqtt',      // Broker público mundial de alta velocidad
      'wss://broker.hivemq.com:8884/mqtt'   // Broker secundario de respaldo
    ];

    // 1. Inicializar Canales Locales
    this.initBroadcastChannel();
    this.initStorageFallback();

    // 2. Inicializar Conexión Global en la Nube (Permite jugar sin la misma Wi-Fi)
    this.initCloudBroker();
  }

  // =========================================================================
  // 1. CONEXIÓN GLOBAL EN LA NUBE (MQTT WSS - CUALQUIER RED 4G/5G/WI-FI)
  // =========================================================================

  initCloudBroker() {
    if (typeof mqtt === 'undefined' || !mqtt.connect) {
      console.warn('Librería MQTT no cargada en el DOM, reintentando en 1s...');
      setTimeout(() => this.initCloudBroker(), 1000);
      return;
    }

    const brokerUrl = this.brokers[this.currentBrokerIndex];
    console.log(`🌐 Conectando a la red global en la nube: ${brokerUrl}`);

    clearTimeout(this.connectWatchdog);
    let hasConnectedOnce = false;

    try {
      this.mqttClient = mqtt.connect(brokerUrl, {
        clientId: `prl_${this.myId}_${Math.random().toString(16).slice(2, 7)}`,
        clean: true,
        connectTimeout: 6000,
        reconnectPeriod: 3000,
        keepalive: 30
      });

      // Si el primer broker tarda más de 6.5s sin conectar, cambiar automáticamente al respaldo
      this.connectWatchdog = setTimeout(() => {
        if (!hasConnectedOnce && (!this.mqttClient || !this.mqttClient.connected)) {
          console.warn(`⏱️ Timeout al conectar con ${brokerUrl}, probando broker de respaldo...`);
          this.switchBroker();
        }
      }, 6500);

      this.mqttClient.on('connect', () => {
        hasConnectedOnce = true;
        clearTimeout(this.connectWatchdog);
        console.log('✅ Conexión global en la nube establecida con éxito');
        this.cloudStatus = 'connected';
        this.notifyStatus();

        // Si ya tenemos una sala asignada, suscribirse a su tema y vaciar la cola pendiente
        if (this.currentRoom) {
          this.subscribeRoomTopic(this.currentRoom);
        }
        this.flushPendingCloudMessages();
      });

      this.mqttClient.on('message', (topic, payload) => {
        try {
          const message = JSON.parse(payload.toString());
          this.handleIncomingMessage(message);
        } catch (e) {
          console.error('Error al decodificar mensaje de la nube:', e);
        }
      });

      this.mqttClient.on('error', (err) => {
        console.warn('Aviso de conexión en broker:', err.message);
        if (!hasConnectedOnce) {
          this.switchBroker();
        }
      });

      this.mqttClient.on('close', () => {
        this.cloudStatus = 'connecting';
        this.notifyStatus();
      });

      this.mqttClient.on('offline', () => {
        this.cloudStatus = 'offline';
        this.notifyStatus();
      });

    } catch (e) {
      console.error('Error al inicializar cliente cloud:', e);
      this.switchBroker();
    }
  }

  switchBroker() {
    clearTimeout(this.connectWatchdog);
    if (this.mqttClient) {
      try { this.mqttClient.end(true); } catch (e) {}
      this.mqttClient = null;
    }
    this.subscribedTopic = null;
    this.currentBrokerIndex = (this.currentBrokerIndex + 1) % this.brokers.length;
    setTimeout(() => this.initCloudBroker(), 1500);
  }

  subscribeRoomTopic(roomCode) {
    if (!roomCode || !this.mqttClient || !this.mqttClient.connected) return;
    const newTopic = `prl/classroom/v2/${roomCode}/#`;

    if (this.subscribedTopic && this.subscribedTopic !== newTopic) {
      try {
        this.mqttClient.unsubscribe(this.subscribedTopic);
      } catch (e) {}
    }

    if (this.subscribedTopic === newTopic) return;

    this.mqttClient.subscribe(newTopic, { qos: 0 }, (err) => {
      if (!err) {
        this.subscribedTopic = newTopic;
        console.log(`📡 Suscrito al canal global del aula: ${newTopic}`);
      }
    });
  }

  setRoom(roomCode) {
    if (this.currentRoom !== roomCode) {
      // Al cambiar de sala descartamos la cola previa para evitar fugas entre salas
      this.pendingCloudQueue = this.pendingCloudQueue.filter(m => m.roomCode === roomCode);
    }
    this.currentRoom = roomCode;
    this.subscribeRoomTopic(roomCode);
  }

  flushPendingCloudMessages() {
    if (!this.mqttClient || !this.mqttClient.connected || this.pendingCloudQueue.length === 0) return;
    const queue = this.pendingCloudQueue.splice(0, this.pendingCloudQueue.length);
    queue.forEach(msg => {
      if (msg.roomCode) {
        const topic = `prl/classroom/v2/${msg.roomCode}/events`;
        this.mqttClient.publish(topic, JSON.stringify(msg), { qos: 0 });
      }
    });
  }

  // =========================================================================
  // 2. TRANSPORTE LOCAL (BROADCASTCHANNEL Y LOCALSTORAGE)
  // =========================================================================

  initBroadcastChannel() {
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.channel = new BroadcastChannel(this.busName);
        this.channel.onmessage = (event) => {
          this.handleIncomingMessage(event.data);
        };
      } catch (e) {
        console.warn('BroadcastChannel no disponible');
      }
    }
  }

  initStorageFallback() {
    window.addEventListener('storage', (e) => {
      if (e.key === this.busName && e.newValue) {
        try {
          const data = JSON.parse(e.newValue);
          this.handleIncomingMessage(data);
        } catch (err) {}
      }
    });
  }

  // =========================================================================
  // 3. ENVÍO Y RECEPCIÓN UNIFICADA CON DEDUPLICACIÓN
  // =========================================================================

  on(eventType, callback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType).push(callback);
  }

  emit(eventType, payload) {
    const msgId = `${this.myId}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const message = {
      id: msgId,
      type: eventType,
      senderId: this.myId,
      roomCode: this.currentRoom,
      timestamp: Date.now(),
      payload
    };

    // Marcar como visto localmente para evitar procesar el propio eco
    this.seenMessageIds.add(msgId);

    // 1. Enviar por Nube Global (o encolar si MQTT aún está conectando)
    if (this.currentRoom) {
      if (this.mqttClient && this.mqttClient.connected) {
        const topic = `prl/classroom/v2/${this.currentRoom}/events`;
        this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
      } else {
        this.pendingCloudQueue.push(message);
        if (this.pendingCloudQueue.length > 30) {
          this.pendingCloudQueue.shift();
        }
      }
    }

    // 2. Enviar por BroadcastChannel (Mismo ordenador / diferentes pestañas)
    if (this.channel) {
      try {
        this.channel.postMessage(message);
      } catch (e) {}
    }

    // 3. Respaldo LocalStorage
    try {
      localStorage.setItem(this.busName, JSON.stringify(message));
    } catch (e) {}

    // 4. Notificar a listeners locales inmediatos
    this.dispatch(eventType, message);
  }

  handleIncomingMessage(message) {
    if (!message || !message.type || !message.id) return;

    // Deduplicación: Si ya hemos procesado este mensaje, ignorar
    if (this.seenMessageIds.has(message.id)) {
      return;
    }
    this.seenMessageIds.add(message.id);

    // Limpiar caché de IDs antiguos si crece mucho
    if (this.seenMessageIds.size > 2000) {
      const ids = Array.from(this.seenMessageIds);
      this.seenMessageIds = new Set(ids.slice(1000));
    }

    // Comprobar sala
    if (this.currentRoom && message.roomCode && message.roomCode !== this.currentRoom) {
      return;
    }

    // Si el emisor es la misma pestaña, no duplicar
    if (message.senderId === this.myId) {
      return;
    }

    this.dispatch(message.type, message);
  }

  dispatch(eventType, message) {
    const handlers = this.listeners.get(eventType);
    if (handlers) {
      const payload = message && message.payload !== undefined ? message.payload : message;
      handlers.forEach(fn => {
        try {
          fn(payload, message);
        } catch (err) {
          console.error(`Error en listener de red (${eventType}):`, err);
        }
      });
    }
  }

  notifyStatus() {
    this.dispatch('NETWORK_STATUS', { payload: { status: this.cloudStatus } });
  }

  generateRoomCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
}

window.prlNet = new PRLNetwork();
