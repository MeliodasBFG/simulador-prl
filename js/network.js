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
 * 3. Local WebSocket: Conexión con server.js si se ejecuta en local.
 */

class PRLNetwork {
  constructor() {
    this.busName = 'prl_classroom_multiplayer_v2';
    this.myId = 'user_' + Math.random().toString(36).substring(2, 9);
    this.myName = '';
    this.currentRoom = null;
    this.isHost = false;

    // Callbacks
    this.listeners = new Map();
    this.seenMessageIds = new Set();

    // Estado de conexión en la nube
    this.cloudStatus = 'connecting'; // 'connected' | 'connecting' | 'offline'
    this.mqttClient = null;
    this.currentBrokerIndex = 0;
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
    if (typeof mqtt === 'undefined') {
      console.warn('Librería MQTT no cargada en el DOM, reintentando en 1s...');
      setTimeout(() => this.initCloudBroker(), 1000);
      return;
    }

    const brokerUrl = this.brokers[this.currentBrokerIndex];
    console.log(`🌐 Conectando a la red global en la nube: ${brokerUrl}`);

    try {
      this.mqttClient = mqtt.connect(brokerUrl, {
        clientId: `prl_${this.myId}_${Math.random().toString(16).substr(2, 5)}`,
        clean: true,
        connectTimeout: 7000,
        reconnectPeriod: 3000,
        keepalive: 30
      });

      this.mqttClient.on('connect', () => {
        console.log('✅ Conexión global en la nube establecida con éxito');
        this.cloudStatus = 'connected';
        this.notifyStatus();

        // Si ya tenemos una sala asignada, suscribirse a su tema
        if (this.currentRoom) {
          this.subscribeRoomTopic(this.currentRoom);
        }
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
        this.switchBroker();
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
    if (this.mqttClient) {
      try { this.mqttClient.end(true); } catch (e) {}
      this.mqttClient = null;
    }
    // Probar el siguiente broker de respaldo
    this.currentBrokerIndex = (this.currentBrokerIndex + 1) % this.brokers.length;
    setTimeout(() => this.initCloudBroker(), 2000);
  }

  subscribeRoomTopic(roomCode) {
    if (this.mqttClient && this.mqttClient.connected) {
      const topic = `prl/classroom/v2/${roomCode}/#`;
      this.mqttClient.subscribe(topic, { qos: 0 }, (err) => {
        if (!err) {
          console.log(`📡 Suscrito al canal global del aula: ${topic}`);
        }
      });
    }
  }

  setRoom(roomCode) {
    this.currentRoom = roomCode;
    this.subscribeRoomTopic(roomCode);
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

    // 1. Enviar por Nube Global (Para cualquier red 4G/5G/Wi-Fi distinta)
    if (this.mqttClient && this.mqttClient.connected && this.currentRoom) {
      const topic = `prl/classroom/v2/${this.currentRoom}/events`;
      this.mqttClient.publish(topic, JSON.stringify(message), { qos: 0 });
    }

    // 2. Enviar por BroadcastChannel (Mismo ordenador / diferentes pestañas)
    if (this.channel) {
      this.channel.postMessage(message);
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

    // Deduplicación: Si ya hemos procesado este mensaje (por ejemplo vino por BroadcastChannel y luego por MQTT), ignorar
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
      handlers.forEach(fn => fn(message.payload, message));
    }
  }

  notifyStatus() {
    this.dispatch('NETWORK_STATUS', { status: this.cloudStatus });
  }

  generateRoomCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
}

window.prlNet = new PRLNetwork();
