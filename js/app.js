/**
 * SIMULADOR PRL MULTIJUGADOR EN TIEMPO REAL (ESTILO KAHOOT PARA AULAS)
 * Control de roles (Profesor/Host vs Alumno), sincronización en tiempo real,
 * pantalla de revelación técnica y ranking general.
 */

class PRLClassroomApp {
  constructor() {
    this.scenarios = window.PRL_SCENARIOS || [];
    this.net = window.prlNet;
    
    // Estado del usuario actual
    this.role = null; // 'host' | 'student'
    this.myId = this.net.myId;
    this.myName = localStorage.getItem('prl_user_name') || '';
    this.roomCode = null;

    // Estado del Host
    this.hostParticipates = true;
    this.selectedScenario = null;
    this.students = new Map(); // studentId -> { id, name, isFinished, hits: Set(), misses: number, clicks: [] }

    // Estado del Alumno
    this.studentClicks = []; // [{ x, y, hitHazardId }]
    this.studentHasFinished = false;

    // Escenario actual de la ronda
    this.currentScenario = null;
    this.activeRevealedHazard = null;

    this.initDOM();
    this.bindNetworkEvents();
    this.bindUIEvents();
    this.restoreSessionOrShowRoleSelect();
  }

  initDOM() {
    this.dom = {
      // Pantallas
      screenRoleSelect: document.getElementById('screen-role-select'),
      screenHostSetup: document.getElementById('screen-host-setup'),
      screenStudentJoin: document.getElementById('screen-student-join'),
      screenHostLobby: document.getElementById('screen-host-lobby'),
      screenStudentLobby: document.getElementById('screen-student-lobby'),
      screenSimulation: document.getElementById('screen-simulation'),
      screenHostResults: document.getElementById('screen-host-results'),

      // Inputs de inicio
      hostNameInput: document.getElementById('host-name-input'),
      hostParticipatesCheck: document.getElementById('host-participates-check'),
      studentNameInput: document.getElementById('student-name-input'),
      roomCodeInput: document.getElementById('room-code-input'),

      // Lobbies
      hostLobbyPin: document.getElementById('host-lobby-pin'),
      hostLobbyCount: document.getElementById('host-lobby-count'),
      hostLobbyStudentsList: document.getElementById('host-lobby-students-list'),
      scenariosGallery: document.getElementById('scenarios-gallery'),
      btnStartScenario: document.getElementById('btn-start-scenario'),
      btnSimulateBots: document.getElementById('btn-simulate-bots'),

      studentLobbyPin: document.getElementById('student-lobby-pin'),
      studentLobbyName: document.getElementById('student-lobby-name'),

      // Simulación en juego
      hudScenarioBadge: document.getElementById('hud-scenario-badge'),
      hudRoomBadge: document.getElementById('hud-room-badge'),
      hudHostControls: document.getElementById('hud-host-controls'),
      hudStudentControls: document.getElementById('hud-student-controls'),
      hudResponsesCount: document.getElementById('hud-responses-count'),
      hudStudentsStatusList: document.getElementById('hud-students-status-list'),
      btnHostEndScenario: document.getElementById('btn-host-end-scenario'),
      btnStudentFinish: document.getElementById('btn-student-finish'),
      studentStatusBanner: document.getElementById('student-status-banner'),

      // Viewport interactivo
      sceneViewport: document.getElementById('scene-viewport'),
      sceneSvgContainer: document.getElementById('scene-svg-container'),
      hotspotLayer: document.getElementById('hotspot-layer'),
      studentPinsLayer: document.getElementById('student-pins-layer'),

      // Pantalla de Revelación del Host
      resultsSvgContainer: document.getElementById('results-svg-container'),
      resultsHotspotLayer: document.getElementById('results-hotspot-layer'),
      leaderboardTbody: document.getElementById('leaderboard-tbody'),
      podiumContainer: document.getElementById('podium-container'),
      hazardDetailDrawer: document.getElementById('hazard-detail-drawer'),
      hazardDetailContent: document.getElementById('hazard-detail-content'),
      btnNextScenario: document.getElementById('btn-next-scenario'),

      // Controles de Audio Exclusivos del Host
      hostAudioWidget: document.getElementById('host-audio-widget'),
      studentAudioBadge: document.getElementById('student-audio-badge'),
      btnHostMute: document.getElementById('btn-host-mute'),
      hostMuteIcon: document.getElementById('host-mute-icon'),
      hostMuteText: document.getElementById('host-mute-text'),
      hostVolumeSlider: document.getElementById('host-volume-slider'),
      hostTrackBadge: document.getElementById('host-track-badge')
    };

    if (this.dom.studentNameInput) this.dom.studentNameInput.value = this.myName;
  }

  showScreen(screenId) {
    const screens = [
      'role-select',
      'host-setup',
      'student-join',
      'host-lobby',
      'student-lobby',
      'simulation',
      'host-results'
    ];
    screens.forEach(s => {
      const el = document.getElementById(`screen-${s}`);
      if (el) {
        if (s === screenId) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  restoreSessionOrShowRoleSelect() {
    // Si el alumno abre un enlace con ?pin=XXXX o #pin=XXXX, autocompletar e ir directo a unirse
    const urlParams = new URLSearchParams(window.location.search);
    const pin = urlParams.get('pin') || (window.location.hash.startsWith('#pin=') ? window.location.hash.split('=')[1] : null);
    if (pin && pin.length === 4) {
      if (this.dom.roomCodeInput) this.dom.roomCodeInput.value = pin;
      this.showScreen('student-join');
      return;
    }
    this.showScreen('role-select');
  }

  bindUIEvents() {
    // Selección de rol
    document.getElementById('btn-role-host')?.addEventListener('click', () => {
      this.showScreen('host-setup');
    });

    document.getElementById('btn-role-student')?.addEventListener('click', () => {
      this.showScreen('student-join');
    });

    // Cancelar en formularios
    document.getElementById('btn-cancel-host')?.addEventListener('click', () => {
      this.showScreen('role-select');
    });

    document.getElementById('btn-cancel-student')?.addEventListener('click', () => {
      this.showScreen('role-select');
    });

    // Copiar enlace directo de invitación
    document.getElementById('btn-copy-link')?.addEventListener('click', () => {
      const inviteUrl = `${window.location.origin}${window.location.pathname}?pin=${this.roomCode}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(inviteUrl).then(() => {
          alert(`¡Enlace directo copiado al portapapeles!\n\n${inviteUrl}\n\nPuedes enviarlo por WhatsApp, Teams o chat. Los alumnos podrán unirse desde cualquier red 4G/5G o Wi-Fi con el PIN ya introducido.`);
        }).catch(() => {
          prompt('Copia este enlace para tus alumnos:', inviteUrl);
        });
      } else {
        prompt('Copia este enlace para tus alumnos:', inviteUrl);
      }
    });

    // Crear sala (Host)
    document.getElementById('btn-create-room')?.addEventListener('click', () => {
      this.handleCreateRoom();
    });

    // Unirse a sala (Alumno)
    document.getElementById('btn-join-room')?.addEventListener('click', () => {
      this.handleJoinRoom();
    });

    // Host: Simular Alumnos de prueba (Demo en 1 clic)
    this.dom.btnSimulateBots?.addEventListener('click', () => {
      this.simulateClassroomBots();
    });

    // Host: Iniciar Escenario con la clase
    this.dom.btnStartScenario?.addEventListener('click', () => {
      this.handleHostStartScenario();
    });

    // Host: Terminar escenario y mostrar resultados
    this.dom.btnHostEndScenario?.addEventListener('click', () => {
      this.handleHostEndScenario();
    });

    // Alumno: He terminado mi inspección
    this.dom.btnStudentFinish?.addEventListener('click', () => {
      this.handleStudentFinish();
    });

    // Host: Jugar otro escenario desde resultados
    this.dom.btnNextScenario?.addEventListener('click', () => {
      this.handleHostNextScenario();
    });

    // Controles de Audio del Host (Mute y Volumen)
    this.dom.btnHostMute?.addEventListener('click', () => {
      window.prlAudio?.toggleMute();
      this.updateHostAudioUI();
    });

    this.dom.hostVolumeSlider?.addEventListener('input', (e) => {
      const vol = parseFloat(e.target.value);
      window.prlAudio?.setVolume(vol);
      this.updateHostAudioUI();
    });

    // Clic/Toque en la escena de simulación
    this.dom.sceneViewport?.addEventListener('pointerdown', (e) => {
      this.handleSceneClick(e);
    });
  }

  updateHostAudioUI() {
    if (!this.dom.hostAudioWidget) return;
    if (this.role !== 'host') {
      this.dom.hostAudioWidget.classList.add('hidden');
      if (this.dom.studentAudioBadge) this.dom.studentAudioBadge.classList.remove('hidden');
      return;
    }

    this.dom.hostAudioWidget.classList.remove('hidden');
    if (this.dom.studentAudioBadge) this.dom.studentAudioBadge.classList.add('hidden');

    const isMuted = window.prlAudio?.isMuted;
    if (this.dom.hostMuteIcon) this.dom.hostMuteIcon.textContent = isMuted ? '🔇' : '🔊';
    if (this.dom.hostMuteText) this.dom.hostMuteText.textContent = isMuted ? 'Audio Silenciado' : 'Audio Aula ON';

    if (this.dom.hostVolumeSlider && window.prlAudio) {
      this.dom.hostVolumeSlider.value = window.prlAudio.volume;
    }

    if (this.dom.hostTrackBadge && window.prlAudio) {
      const trackNames = {
        lobby: '🎵 BGM: Espera (Lobby)',
        thinking: '🎵 BGM: Concentración',
        victory: '🎵 BGM: Celebración Final'
      };
      this.dom.hostTrackBadge.textContent = trackNames[window.prlAudio.currentTrack] || '🎵 BGM: Reposo';
    }
  }

  // =========================================================================
  // GESTIÓN DE SALA Y LOBBY (HOST & STUDENT)
  // =========================================================================

  handleCreateRoom() {
    const hostName = this.dom.hostNameInput.value.trim() || 'Profesor PRL';
    this.myName = hostName;
    this.hostParticipates = this.dom.hostParticipatesCheck.checked;
    this.role = 'host';
    this.roomCode = this.net.generateRoomCode();
    this.net.isHost = true;
    this.net.setRoom(this.roomCode);
    this.net.myName = this.myName;

    // Configurar y activar Audio EXCLUSIVO para el Host
    window.prlAudio?.setRole('host');
    window.prlAudio?.playLobbyMusic();
    this.updateHostAudioUI();

    // Actualizar vista del Lobby
    if (this.dom.hostLobbyPin) this.dom.hostLobbyPin.textContent = this.roomCode;
    this.students.clear();

    // Si el host participa, se añade a sí mismo como alumno elegible
    if (this.hostParticipates) {
      this.students.set(this.myId, {
        id: this.myId,
        name: `${this.myName} (Host)`,
        isFinished: false,
        hits: new Set(),
        misses: 0,
        clicks: []
      });
    }

    this.renderHostStudentsList();
    this.renderScenariosGallery();
    this.showScreen('host-lobby');

    // Emitir creación de sala
    this.net.emit('ROOM_CREATED', {
      roomCode: this.roomCode,
      hostName: this.myName
    });
  }

  handleJoinRoom() {
    const studentName = this.dom.studentNameInput.value.trim();
    const code = this.dom.roomCodeInput.value.trim().toUpperCase();

    if (!studentName) {
      alert('Por favor, introduce tu nombre.');
      this.dom.studentNameInput.focus();
      return;
    }
    if (!code || code.length !== 4) {
      alert('Por favor, introduce un código de sala válido de 4 dígitos.');
      this.dom.roomCodeInput.focus();
      return;
    }

    this.myName = studentName;
    this.roomCode = code;
    this.role = 'student';
    this.net.isHost = false;
    this.net.setRoom(this.roomCode);
    this.net.myName = this.myName;

    // EL ALUMNO DEBE PERMANECER 100% EN SILENCIO (Para evitar caos en el aula)
    window.prlAudio?.setRole('student');
    this.updateHostAudioUI();

    localStorage.setItem('prl_user_name', this.myName);

    if (this.dom.studentLobbyPin) this.dom.studentLobbyPin.textContent = this.roomCode;
    if (this.dom.studentLobbyName) this.dom.studentLobbyName.textContent = this.myName;

    this.showScreen('student-lobby');

    // Notificar al Host que nos hemos unido
    this.net.emit('STUDENT_JOIN', {
      studentId: this.myId,
      studentName: this.myName,
      roomCode: this.roomCode
    });
  }

  renderHostStudentsList() {
    if (!this.dom.hostLobbyStudentsList) return;
    const count = this.students.size;
    if (this.dom.hostLobbyCount) {
      this.dom.hostLobbyCount.textContent = `${count} ${count === 1 ? 'alumno conectado' : 'alumnos conectados'}`;
    }

    if (count === 0) {
      this.dom.hostLobbyStudentsList.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-500 text-sm">
          Esperando a que los alumnos ingresen el código en sus dispositivos...
        </div>
      `;
      return;
    }

    const html = Array.from(this.students.values()).map(st => `
      <div class="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 animate-[bounce-in_0.3s_ease-out]">
        <div class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs border border-amber-500/30">
          ${st.name.charAt(0).toUpperCase()}
        </div>
        <span class="text-xs font-bold text-white truncate max-w-[140px]">${st.name}</span>
      </div>
    `).join('');

    this.dom.hostLobbyStudentsList.innerHTML = html;
  }

  renderScenariosGallery() {
    if (!this.dom.scenariosGallery) return;

    this.dom.scenariosGallery.innerHTML = this.scenarios.map(sc => {
      const isSelected = this.selectedScenario && this.selectedScenario.id === sc.id;
      return `
        <div 
          onclick="window.prlApp.selectScenario('${sc.id}')"
          class="p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
            isSelected 
              ? 'bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/30 shadow-lg shadow-amber-500/20 -translate-y-1' 
              : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-500 hover:bg-slate-800'
          }"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xl">⚠️</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-900 text-amber-400 border border-slate-700">
                ${sc.hazards.length} Peligros
              </span>
            </div>
            <h4 class="font-extrabold text-white text-sm mb-1">${sc.name}</h4>
            <p class="text-[11px] text-slate-400 leading-snug line-clamp-2">${sc.subtitle}</p>
          </div>
          
          <div class="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px]">
            <span class="text-slate-400">Riesgos ocultos</span>
            <span class="font-bold ${isSelected ? 'text-amber-400 font-mono' : 'text-slate-300'}">
              ${isSelected ? '✓ SELECCIONADO' : 'Seleccionar'}
            </span>
          </div>
        </div>
      `;
    }).join('');

    // Habilitar botón de iniciar si hay escenario seleccionado
    if (this.dom.btnStartScenario) {
      if (this.selectedScenario) {
        this.dom.btnStartScenario.removeAttribute('disabled');
        this.dom.btnStartScenario.classList.remove('opacity-50', 'cursor-not-allowed');
      } else {
        this.dom.btnStartScenario.setAttribute('disabled', 'true');
        this.dom.btnStartScenario.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }
  }

  selectScenario(scenarioId) {
    this.selectedScenario = this.scenarios.find(s => s.id === scenarioId) || null;
    this.renderScenariosGallery();
  }

  simulateClassroomBots() {
    const botNames = ['Ana Martín', 'Carlos Ruiz', 'Elena Vega', 'David Sanz'];
    botNames.forEach((name, idx) => {
      const botId = `bot_${idx + 1}_${Math.random().toString(36).substring(2, 6)}`;
      this.students.set(botId, {
        id: botId,
        name: `🤖 ${name}`,
        isFinished: false,
        hits: new Set(),
        misses: 0,
        clicks: [],
        markedItemIds: new Set()
      });
    });

    this.renderHostStudentsList();
    window.prlAudio?.playStudentJoined();
  }

  // =========================================================================
  // CONTROL DEL ESCENARIO (EL HOST INICIA Y CIERRA)
  // =========================================================================

  handleHostStartScenario() {
    if (!this.selectedScenario) return;

    this.currentScenario = this.selectedScenario;

    // Resetear estado de respuestas de los alumnos
    this.students.forEach(st => {
      st.isFinished = false;
      st.hits = new Set();
      st.misses = 0;
      st.clicks = [];
      st.markedItemIds = new Set();
    });

    // Audio Host: Transición y música de concentración/suspense
    window.prlAudio?.playScenarioStart();
    window.prlAudio?.playThinkingMusic();
    this.updateHostAudioUI();

    // Emitir a toda el aula que la simulación comienza
    this.net.emit('SCENARIO_STARTED', {
      scenarioId: this.currentScenario.id,
      roomCode: this.roomCode
    });

    // Iniciar vista en el Host
    this.startSimulationView();
  }

  handleHostEndScenario() {
    if (!this.currentScenario) return;

    // Audio Host: Efecto dramático de parada y música de victoria final
    window.prlAudio?.playDramaticStop();
    setTimeout(() => {
      window.prlAudio?.playVictoryMusic();
      this.updateHostAudioUI();
    }, 600);

    // Emitir cierre de escenario a todos los alumnos
    this.net.emit('SCENARIO_ENDED', {
      roomCode: this.roomCode
    });

    // Mostrar pantalla de revelación en el Host
    this.showHostResultsScreen();
  }

  handleHostNextScenario() {
    this.selectedScenario = null;
    if (this.dom.resultsSvgContainer) this.dom.resultsSvgContainer.innerHTML = '';
    if (this.dom.sceneSvgContainer) this.dom.sceneSvgContainer.innerHTML = '';
    this.renderScenariosGallery();
    this.showScreen('host-lobby');

    // Volver a la música de espera del Lobby
    window.prlAudio?.playLobbyMusic();
    this.updateHostAudioUI();

    this.net.emit('RETURN_TO_LOBBY', {
      roomCode: this.roomCode
    });
  }

  // =========================================================================
  // MECÁNICA DEL ALUMNO (INSPECCIÓN SIN FEEDBACK INMEDIATO)
  // =========================================================================

  startSimulationView() {
    this.studentClicks = [];
    this.selectedItemIds = new Set();
    this.studentHasFinished = false;

    // Limpiar contenedor de resultados para que no haya SVGs duplicados en el DOM
    if (this.dom.resultsSvgContainer) {
      this.dom.resultsSvgContainer.innerHTML = '';
    }

    // Actualizar encabezados
    if (this.dom.hudScenarioBadge) this.dom.hudScenarioBadge.textContent = this.currentScenario.name;
    if (this.dom.hudRoomBadge) this.dom.hudRoomBadge.textContent = `Sala: ${this.roomCode}`;

    // Renderizar escena SVG
    if (this.dom.sceneSvgContainer) {
      this.dom.sceneSvgContainer.innerHTML = this.currentScenario.svgContent;
    }
    if (this.dom.studentPinsLayer) {
      this.dom.studentPinsLayer.innerHTML = '';
    }

    // Renderizar Hotspots Concretos Numerados con Etiquetas (Estilo Lámina Formativa de la imagen)
    this.renderScenarioInteractiveItems();
    this.updateStudentEvaluationCounter();

    // Configurar visibilidad según rol
    if (this.role === 'host') {
      this.dom.hudHostControls?.classList.remove('hidden');
      this.dom.hudStudentControls?.classList.add('hidden');
      this.dom.studentStatusBanner?.classList.add('hidden');
      this.updateHostResponseCounter();
    } else {
      this.dom.hudHostControls?.classList.add('hidden');
      this.dom.hudStudentControls?.classList.remove('hidden');
      this.dom.studentStatusBanner?.classList.add('hidden');
      this.dom.btnStudentFinish?.removeAttribute('disabled');
      this.dom.btnStudentFinish?.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    this.showScreen('simulation');

    // Si hay bots y somos host, activar respuestas simuladas progresivas
    if (this.role === 'host') {
      this.runBotSimulationResponses();
    }
  }

  // Renderizar los 10-12 objetos interactivos numerados con sus etiquetas
  renderScenarioInteractiveItems() {
    if (!this.dom.hotspotLayer || !this.currentScenario) return;

    const items = this.currentScenario.items || this.currentScenario.hazards.map((h, i) => ({
      ...h,
      num: i + 1,
      isHazard: true
    }));

    // 1. Renderizar en el SVG badges individuales tipo pin SIN cajas gigantes que se solapen
    this.dom.hotspotLayer.innerHTML = items.map(item => {
      const isSelected = this.selectedItemIds && this.selectedItemIds.has(item.id);
      const isHostObserving = (this.role === 'host' && !this.hostParticipates);

      return `
        <div 
          id="item-hotspot-${item.id}"
          onclick="window.prlApp.toggleItemSelection('${item.id}', event)"
          class="item-hotspot absolute z-20 select-none transition-all duration-150 ${
            isHostObserving ? 'cursor-default pointer-events-none' : 'cursor-pointer hover:scale-105 active:scale-95'
          }"
          style="left: ${item.rect.left}%; top: ${item.rect.top}%;"
          title="Toca para evaluar: ${item.name}"
        >
          <!-- Etiqueta compacta con letra más estilizada para no tapar elementos adyacentes -->
          <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg shadow-lg border backdrop-blur-md transition-all ${
            isSelected 
              ? 'bg-amber-950/95 border-amber-400 ring-2 ring-amber-400/50 text-amber-200 shadow-amber-500/30 scale-105' 
              : 'bg-slate-950/90 border-slate-700/80 hover:border-amber-400 hover:bg-slate-900 text-slate-100'
          }">
            <span class="w-5 h-5 rounded-md ${
              isSelected ? 'bg-amber-500 text-slate-950 font-black' : 'bg-red-600 text-white font-black'
            } text-[10px] flex items-center justify-center shrink-0 shadow">
              ${isSelected ? '⚠️' : item.num}
            </span>
            <span class="text-[9.5px] sm:text-[10.5px] font-semibold sm:font-bold leading-tight px-0.5 whitespace-normal max-w-[135px] sm:max-w-[170px]">
              ${item.name}
            </span>
          </div>
        </div>
      `;
    }).join('');

    // 2. Renderizar bandeja inferior interactiva de objetos con todos los nombres 100% visibles
    this.renderScenarioItemsTray(items);
  }

  renderScenarioItemsTray(items) {
    let tray = document.getElementById('simulation-items-tray');
    if (!tray) {
      tray = document.createElement('div');
      tray.id = 'simulation-items-tray';
      tray.className = 'w-full mt-4 glass-panel p-4 rounded-2xl border border-slate-700/80 shadow-xl';
      const container = this.dom.sceneViewport?.parentElement?.parentElement;
      if (container) {
        container.appendChild(tray);
      }
    }

    const count = this.selectedItemIds ? this.selectedItemIds.size : 0;
    const isHostObserving = (this.role === 'host' && !this.hostParticipates);

    tray.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <span class="text-sm">📋</span>
          <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
            Elementos a evaluar en este escenario
          </h4>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${
            count > 0 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400'
          }">
            ${count} marcados como riesgo
          </span>
        </div>
        <p class="text-[11px] text-slate-400 hidden sm:block">
          💡 Puedes marcar o desmarcar pulsando sobre la imagen o directamente en esta lista.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        ${items.map(item => {
          const isSelected = this.selectedItemIds && this.selectedItemIds.has(item.id);
          return `
            <div 
              onclick="window.prlApp.toggleItemSelection('${item.id}', event)"
              class="flex items-center justify-between gap-2.5 p-2.5 rounded-xl border transition-all ${
                isHostObserving ? 'cursor-default pointer-events-none' : 'cursor-pointer hover:border-amber-400'
              } ${
                isSelected 
                  ? 'bg-amber-950/70 border-amber-400/80 text-amber-200 ring-1 ring-amber-400/50 shadow-md shadow-amber-500/10' 
                  : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-200'
              }"
            >
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-6 h-6 rounded-md ${
                  isSelected ? 'bg-amber-500 text-slate-950 font-black' : 'bg-red-600 text-white font-black'
                } text-xs flex items-center justify-center shrink-0 shadow">
                  ${isSelected ? '⚠️' : item.num}
                </span>
                <div class="min-w-0">
                  <div class="text-xs font-bold leading-tight text-white whitespace-normal break-words" title="${item.name}">
                    ${item.name}
                  </div>
                  <div class="text-[10px] text-slate-400 font-mono">
                    ${item.category}
                  </div>
                </div>
              </div>

              <div class="shrink-0">
                <span class="px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider transition ${
                  isSelected 
                    ? 'bg-amber-500 text-slate-950 shadow' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }">
                  ${isSelected ? 'RIESGO ✓' : 'SEGURO'}
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  toggleItemSelection(itemId, event) {
    if (event) event.stopPropagation();
    if (this.role === 'host' && !this.hostParticipates) return;
    if (this.studentHasFinished) return;

    if (!this.selectedItemIds) this.selectedItemIds = new Set();

    const wasSelected = this.selectedItemIds.has(itemId);
    if (wasSelected) {
      this.selectedItemIds.delete(itemId);
    } else {
      this.selectedItemIds.add(itemId);
    }

    // Si el host participa, actualizar sus propias estadísticas
    if (this.role === 'host' && this.hostParticipates) {
      const hostSt = this.students.get(this.myId);
      if (hostSt) {
        if (!hostSt.markedItemIds) hostSt.markedItemIds = new Set();
        if (!wasSelected) {
          hostSt.markedItemIds.add(itemId);
        } else {
          hostSt.markedItemIds.delete(itemId);
        }
        this.recalculateStudentScore(hostSt);
        this.updateHostResponseCounter();
      }
    }

    // Refrescar el estado visual de los hotspots
    this.renderScenarioInteractiveItems();
    this.updateStudentEvaluationCounter();

    // Notificar al Host en tiempo real
    this.net.emit('STUDENT_TOGGLE_ITEM', {
      studentId: this.myId,
      studentName: this.myName,
      roomCode: this.roomCode,
      itemId,
      isSelected: !wasSelected,
      markedCount: this.selectedItemIds.size
    });
  }

  updateStudentEvaluationCounter() {
    const totalItems = this.currentScenario?.items?.length || 12;
    const count = this.selectedItemIds ? this.selectedItemIds.size : 0;
    
    // Si tenemos el banner o botón de alumno, actualizar texto descriptivo
    if (this.dom.btnStudentFinish && !this.studentHasFinished) {
      this.dom.btnStudentFinish.textContent = `He terminado (${count} peligros marcados) →`;
    }
  }

  handleSceneClick(event) {
    // Si se hizo clic directamente en un objeto interactivo, toggleItemSelection ya lo gestionó
    if (event.target.closest('.item-hotspot')) return;
    if (this.role === 'host' && !this.hostParticipates) return;
    if (this.studentHasFinished) return;

    // Clic en pared o suelo vacío: NO restar puntos ni añadir fallos; mostrar aviso didáctico
    this.showSceneToast('💡 Haz clic sobre uno de los objetos numerados (1 al 12) para evaluarlo.');
  }

  showSceneToast(msg) {
    let toast = document.getElementById('scene-click-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'scene-click-toast';
      toast.className = 'absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/95 border border-amber-500/60 text-amber-300 text-xs font-bold shadow-2xl pointer-events-none transition-opacity duration-300 z-40';
      this.dom.sceneViewport?.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.style.opacity = '0';
    }, 2200);
  }

  addStudentPin(xPercent, yPercent, number) {
    // Ya no se colocan pines ciegos en paredes vacías; la interacción se basa en los objetos numerados
  }

  handleStudentFinish() {
    this.studentHasFinished = true;

    if (this.dom.btnStudentFinish) {
      this.dom.btnStudentFinish.setAttribute('disabled', 'true');
      this.dom.btnStudentFinish.classList.add('opacity-50', 'cursor-not-allowed');
    }

    const count = this.selectedItemIds ? this.selectedItemIds.size : 0;

    if (this.dom.studentStatusBanner) {
      this.dom.studentStatusBanner.classList.remove('hidden');
      this.dom.studentStatusBanner.innerHTML = `
        <div class="p-3.5 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-center text-xs font-bold text-emerald-300 animate-pulse">
          ✓ Has completado tu inspección (${count} elementos marcados como peligros). Esperando a que el profesor cierre la ronda...
        </div>
      `;
    }

    // Notificar al Host con la lista completa de marcados
    this.net.emit('STUDENT_FINISHED', {
      studentId: this.myId,
      roomCode: this.roomCode,
      markedIds: Array.from(this.selectedItemIds || [])
    });
  }

  updateHostResponseCounter() {
    if (this.role !== 'host') return;

    const total = this.students.size;
    let finishedCount = 0;
    this.students.forEach(st => {
      if (st.isFinished) finishedCount++;
    });

    if (this.dom.hudResponsesCount) {
      this.dom.hudResponsesCount.textContent = `${finishedCount} / ${total} alumnos han respondido`;
    }

    if (this.dom.hudStudentsStatusList) {
      const html = Array.from(this.students.values()).map(st => {
        const markedCount = st.markedItemIds ? st.markedItemIds.size : (st.clicks ? st.clicks.length : 0);
        return `
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
            st.isFinished
              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
              : 'bg-slate-800 text-slate-300 border-slate-700'
          }">
            <span class="w-2 h-2 rounded-full ${st.isFinished ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}"></span>
            <span class="truncate max-w-[120px]">${st.name}</span>
            <span class="text-[10px] opacity-75 font-mono">(${markedCount} marcados)</span>
          </div>
        `;
      }).join('');
      this.dom.hudStudentsStatusList.innerHTML = html;
    }
  }

  recalculateStudentScore(st) {
    if (!st || !this.currentScenario) return;
    if (!st.markedItemIds) st.markedItemIds = new Set();
    if (!st.hits) st.hits = new Set();
    st.hits.clear();
    st.misses = 0;

    const items = this.currentScenario.items || [];
    st.markedItemIds.forEach(itemId => {
      const item = items.find(it => it.id === itemId);
      if (item) {
        if (item.isHazard) {
          st.hits.add(itemId);
        } else {
          st.misses++;
        }
      }
    });
  }

  runBotSimulationResponses() {
    const bots = Array.from(this.students.values()).filter(st => st.id.startsWith('bot_'));
    if (bots.length === 0 || !this.currentScenario) return;

    const items = this.currentScenario.items || [];
    const realHazards = items.filter(it => it.isHazard);
    const safeItems = items.filter(it => !it.isHazard);

    bots.forEach(bot => {
      if (!bot.markedItemIds) bot.markedItemIds = new Set();

      // Bot elige entre 3 y 6 elementos (algunos riesgos reales y opcionalmente 1 o 2 elementos seguros como distractor)
      const numHazards = Math.min(realHazards.length, Math.floor(2 + Math.random() * 4));
      const chosenHazards = [...realHazards].sort(() => 0.5 - Math.random()).slice(0, numHazards);

      const pickSafe = (Math.random() > 0.4 && safeItems.length > 0)
        ? [...safeItems].sort(() => 0.5 - Math.random()).slice(0, Math.floor(1 + Math.random() * 2))
        : [];

      const botChoices = [...chosenHazards, ...pickSafe];

      botChoices.forEach((item, i) => {
        setTimeout(() => {
          if (!this.currentScenario) return;
          bot.markedItemIds.add(item.id);
          this.recalculateStudentScore(bot);
          this.updateHostResponseCounter();
        }, (i + 1) * 2000 + Math.random() * 1200);
      });

      // Marcar al bot como finalizado tras completar su evaluación
      setTimeout(() => {
        bot.isFinished = true;
        this.updateHostResponseCounter();
      }, (botChoices.length + 1) * 2200 + 1000);
    });
  }

  // =========================================================================
  // PANTALLA DE REVELACIÓN Y RESULTADOS (PANTALLA DEL HOST)
  // =========================================================================

  showHostResultsScreen() {
    if (!this.currentScenario) return;

    // 1. Limpiar el contenedor SVG de simulación para evitar que Chrome anule los gradientes/estilos
    if (this.dom.sceneSvgContainer) {
      this.dom.sceneSvgContainer.innerHTML = '';
    }

    // 2. Renderizar escena del escenario en pantalla de resultados
    if (this.dom.resultsSvgContainer) {
      this.dom.resultsSvgContainer.innerHTML = this.currentScenario.svgContent;
    }

    const items = this.currentScenario.items || [];

    // Recalcular puntuación final de cada alumno
    this.students.forEach(st => this.recalculateStudentScore(st));

    // Renderizar pins compactos de revelación (SIN solapamientos de texto)
    if (this.dom.resultsHotspotLayer) {
      this.dom.resultsHotspotLayer.innerHTML = items.map(item => {
        const { left, top } = item.rect;
        const isHazard = item.isHazard;
        
        // Contar cuántos alumnos marcaron este objeto concreto
        let markedCount = 0;
        this.students.forEach(st => {
          if (st.markedItemIds && st.markedItemIds.has(item.id)) markedCount++;
        });

        return `
          <div 
            onclick="window.prlApp.revealHazardDetails('${item.id}')"
            class="absolute z-20 cursor-pointer select-none transition-all hover:scale-115 active:scale-95 group -translate-x-1/2 -translate-y-1/2"
            style="left: ${left}%; top: ${top}%;"
            title="${item.name} (${isHazard ? 'Riesgo Real' : 'Elemento Seguro'}) - Haz clic para ver detalles"
          >
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-2xl border backdrop-blur-md transition-all ${
              isHazard
                ? 'bg-red-950/95 border-red-500 text-red-100 ring-2 ring-red-500/40 shadow-red-500/40 hover:border-red-400'
                : 'bg-emerald-950/95 border-emerald-400 text-emerald-100 ring-2 ring-emerald-500/40 shadow-emerald-500/40 hover:border-emerald-300'
            }">
              <span class="w-5 h-5 rounded-full ${
                isHazard ? 'bg-red-600 text-white font-black' : 'bg-emerald-600 text-white font-black'
              } text-[10px] flex items-center justify-center shrink-0 shadow">
                ${isHazard ? '⚠️' : '🛡️'}
              </span>
              <span class="text-[11px] font-black font-mono">
                #${item.num}
              </span>
              <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                isHazard ? 'bg-red-900/90 text-red-200' : 'bg-emerald-900/90 text-emerald-200'
              }">
                ${markedCount}
              </span>
            </div>
          </div>
        `;
      }).join('');
    }

    // 3. Renderizar bandeja inferior de todos los elementos para acceso rápido del profesor
    this.renderHostResultsItemsTray(items);

    // 4. Renderizar Podio y Tabla de Clasificación de la Clase
    this.renderClassLeaderboard();

    // 5. Mostrar el primer elemento por defecto en el panel lateral de detalles
    if (items.length > 0) {
      this.revealHazardDetails(items[0].id);
    }

    this.showScreen('host-results');
    window.prlAudio?.playVictory();
    if (window.confetti) {
      window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  }

  renderHostResultsItemsTray(items) {
    let tray = document.getElementById('results-items-tray');
    if (!tray) {
      tray = document.createElement('div');
      tray.id = 'results-items-tray';
      tray.className = 'w-full mt-4 glass-panel p-4 rounded-2xl border border-slate-700/80 shadow-xl';
      const viewport = this.dom.resultsSvgContainer?.parentElement;
      if (viewport && viewport.parentElement) {
        viewport.parentElement.appendChild(tray);
      }
    }

    tray.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
        <h4 class="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
          <span>📋</span> Cuadro de Clasificación (Pulsa cualquier elemento para abrir su ficha)
        </h4>
        <div class="flex items-center gap-3 text-[11px] font-bold">
          <span class="text-red-400 flex items-center gap-1"><span>⚠️</span> Riesgo Real (+100)</span>
          <span class="text-emerald-400 flex items-center gap-1"><span>🛡️</span> Seguro (-50 si marcado)</span>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${items.map(item => {
          let markedCount = 0;
          this.students.forEach(st => {
            if (st.markedItemIds && st.markedItemIds.has(item.id)) markedCount++;
          });
          const isHazard = item.isHazard;

          return `
            <div 
              onclick="window.prlApp.revealHazardDetails('${item.id}')"
              class="flex items-center justify-between gap-2 p-2.5 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
                isHazard 
                  ? 'bg-red-950/40 border-red-500/30 hover:border-red-400 text-red-200' 
                  : 'bg-emerald-950/40 border-emerald-500/30 hover:border-emerald-400 text-emerald-200'
              }"
            >
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-6 h-6 rounded-md ${
                  isHazard ? 'bg-red-600 text-white font-black' : 'bg-emerald-600 text-white font-black'
                } text-xs flex items-center justify-center shrink-0 shadow">
                  #${item.num}
                </span>
                <div class="min-w-0">
                  <div class="text-xs font-bold text-white truncate" title="${item.name}">
                    ${item.name}
                  </div>
                  <div class="text-[10px] text-slate-400">
                    ${item.category}
                  </div>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-black font-mono shrink-0 ${
                isHazard ? 'bg-red-900/60 text-red-300 border border-red-500/30' : 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/30'
              }">
                ${markedCount} alumnos
              </span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  revealHazardDetails(itemId) {
    const items = this.currentScenario?.items || this.currentScenario?.hazards || [];
    const item = items.find(x => x.id === itemId);
    if (!item || !this.dom.hazardDetailContent) return;

    // Efecto de audio en el Host al examinar un peligro o elemento seguro
    window.prlAudio?.playHazardReveal();

    const isHazard = item.isHazard;

    // Alumnos que marcaron y alumnos que no marcaron
    const studentsWhoMarked = [];
    const studentsWhoDidNotMark = [];

    this.students.forEach(st => {
      if (st.markedItemIds && st.markedItemIds.has(item.id)) {
        studentsWhoMarked.push(st.name);
      } else {
        studentsWhoDidNotMark.push(st.name);
      }
    });

    const badgeStyle = isHazard
      ? 'bg-red-500/20 text-red-300 border-red-500/40'
      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

    this.dom.hazardDetailContent.innerHTML = `
      <div class="space-y-4 text-xs sm:text-sm">
        <div class="flex items-center justify-between gap-2 border-b border-slate-700 pb-3">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black border ${badgeStyle} flex items-center gap-1">
            ${isHazard ? '⚠️ RIESGO REAL VERDADERO (+100 PTS)' : '🛡️ ELEMENTO SEGURO / CONFORME A NORMA (-50 PTS SI MARCADO)'}
          </span>
          <span class="text-xs text-amber-400 font-mono font-bold">${item.category}</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg ${isHazard ? 'bg-red-600' : 'bg-emerald-600'} text-white font-black flex items-center justify-center text-sm shadow">
            #${item.num}
          </span>
          <h3 class="text-base sm:text-lg font-black text-white leading-tight">${item.name}</h3>
        </div>

        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">${item.description}</p>

        <!-- Consecuencias o Estado de Seguridad -->
        <div class="p-3 ${isHazard ? 'bg-red-950/30 border-red-500/30' : 'bg-emerald-950/30 border-emerald-500/30'} border rounded-xl text-xs">
          <span class="font-bold ${isHazard ? 'text-red-400' : 'text-emerald-400'} uppercase tracking-wider block mb-1">
            ${isHazard ? '⚠️ Consecuencias / Daños Potenciales:' : '🛡️ Condición de Seguridad / Estado Conforme:'}
          </span>
          <p class="${isHazard ? 'text-red-200' : 'text-emerald-200'}">${item.consequences}</p>
        </div>

        <!-- Normativa Oficial Aplicable -->
        <div class="p-3 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs">
          <span class="font-bold text-amber-400 uppercase tracking-wider block mb-1">⚖️ Normativa Legal / Marco Técnico:</span>
          <p class="text-amber-200 italic font-medium">${item.regulation}</p>
        </div>

        <!-- Medida Preventiva u Observación -->
        <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl text-xs">
          <span class="font-bold text-sky-400 uppercase tracking-wider block mb-1">
            ${isHazard ? '🛡️ Medida Preventiva Obligatoria:' : 'ℹ️ Justificación Formativa:'}
          </span>
          <p class="text-slate-300">${item.prevention}</p>
        </div>

        <!-- LISTA DE ALUMNOS QUE LO MARCARON -->
        <div class="p-3.5 bg-slate-900/90 border border-slate-700 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold ${isHazard ? 'text-emerald-400' : 'text-amber-400'} text-xs flex items-center gap-1.5">
              <span>${isHazard ? '✓ Alumnos que acertaron (+100 pts)' : '⚠️ Alumnos que lo marcaron erróneamente (-50 pts)'}:</span>
              <span>(${studentsWhoMarked.length}/${this.students.size})</span>
            </span>
          </div>
          ${
            studentsWhoMarked.length > 0
              ? `<div class="flex flex-wrap gap-1.5">${studentsWhoMarked.map(n => `<span class="px-2 py-0.5 ${isHazard ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' : 'bg-amber-950 text-amber-300 border-amber-500/40'} border rounded-md text-[11px] font-bold">${n}</span>`).join('')}</div>`
              : `<p class="text-slate-500 text-xs italic">${isHazard ? 'Ningún alumno localizó este peligro.' : 'Ningún alumno cayó en este distractor (¡excelente!).'}</p>`
          }
        </div>

        <!-- Alumnos que NO lo marcaron -->
        <div class="p-3 bg-slate-900/50 border border-slate-800 rounded-xl text-xs">
          <span class="font-bold text-slate-400 block mb-1">
            ${isHazard ? 'Alumnos que no detectaron el riesgo (0 pts):' : 'Alumnos que reconocieron que era seguro (0 penalización):'} (${studentsWhoDidNotMark.length})
          </span>
          ${
            studentsWhoDidNotMark.length > 0
              ? `<p class="text-slate-400 text-[11px]">${studentsWhoDidNotMark.join(', ')}</p>`
              : `<p class="text-slate-500 text-[11px] italic">Todos los alumnos respondieron.</p>`
          }
        </div>
      </div>
    `;
  }

  renderClassLeaderboard() {
    if (!this.dom.leaderboardTbody) return;

    // Calcular clasificación: Ordenar por Score = (Aciertos * 100) - (Fallos * 50)
    const ranking = Array.from(this.students.values()).map(st => {
      const hitsCount = st.hits ? st.hits.size : 0;
      const missesCount = st.misses || 0;
      const totalScore = Math.max(0, hitsCount * 100 - missesCount * 50);
      return {
        id: st.id,
        name: st.name,
        hits: hitsCount,
        misses: missesCount,
        score: totalScore,
        isFinished: st.isFinished
      };
    });

    ranking.sort((a, b) => b.score - a.score || b.hits - a.hits);

    // Podio visual para los 3 primeros
    if (this.dom.podiumContainer) {
      const top3 = ranking.slice(0, 3);
      const podiumBadges = ['🥇', '🥈', '🥉'];

      this.dom.podiumContainer.innerHTML = top3.map((st, i) => `
        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-center flex flex-col items-center justify-between">
          <div class="text-3xl mb-1">${podiumBadges[i]}</div>
          <span class="font-extrabold text-white text-sm truncate max-w-[150px] mb-1">${st.name}</span>
          <span class="text-lg font-black text-amber-400 font-mono">${st.score} pts</span>
          <span class="text-[11px] text-slate-400">${st.hits} aciertos / ${st.misses} fallos</span>
        </div>
      `).join('');
    }

    // Tabla completa
    this.dom.leaderboardTbody.innerHTML = ranking.map((st, i) => {
      const pos = i === 0 ? '🥇 1º' : i === 1 ? '🥈 2º' : i === 2 ? '🥉 3º' : `${i + 1}º`;
      return `
        <tr class="border-b border-slate-800/60 hover:bg-slate-800/30 transition text-xs sm:text-sm">
          <td class="py-3 px-4 font-black font-mono text-amber-400">${pos}</td>
          <td class="py-3 px-4 font-bold text-white">${st.name}</td>
          <td class="py-3 px-4 text-emerald-400 font-bold font-mono">${st.hits}</td>
          <td class="py-3 px-4 text-red-400 font-bold font-mono">${st.misses}</td>
          <td class="py-3 px-4 text-right font-black font-mono text-amber-400 text-base">${st.score} pts</td>
        </tr>
      `;
    }).join('');
  }

  // =========================================================================
  // GESTIÓN DE EVENTOS DE RED (BROADCASTCHANNEL / WEBSOCKETS)
  // =========================================================================

  bindNetworkEvents() {
    // Alumno se une a la sala (Audio Host: Campanilla pop)
    this.net.on('STUDENT_JOIN', (payload) => {
      if (this.role === 'host') {
        this.students.set(payload.studentId, {
          id: payload.studentId,
          name: payload.studentName,
          isFinished: false,
          markedItemIds: new Set(),
          hits: new Set(),
          misses: 0,
          clicks: []
        });
        this.renderHostStudentsList();
        window.prlAudio?.playStudentJoined();
      }
    });

    // Host inicia el escenario (El alumno lo recibe y se carga en SILENCIO)
    this.net.on('SCENARIO_STARTED', (payload) => {
      if (this.role === 'student') {
        const sc = this.scenarios.find(s => s.id === payload.scenarioId);
        if (sc) {
          this.currentScenario = sc;
          this.startSimulationView();
          // Dispositivo de alumno en riguroso silencio
        }
      }
    });

    // Alumno marca o desmarca un objeto interactivo concreto
    this.net.on('STUDENT_TOGGLE_ITEM', (payload) => {
      if (this.role === 'host') {
        const st = this.students.get(payload.studentId);
        if (st) {
          if (!st.markedItemIds) st.markedItemIds = new Set();
          if (payload.isSelected) {
            st.markedItemIds.add(payload.itemId);
          } else {
            st.markedItemIds.delete(payload.itemId);
          }
          this.recalculateStudentScore(st);
          this.updateHostResponseCounter();
        }
      }
    });

    // Clic antiguo compatible
    this.net.on('STUDENT_CLICK', (payload) => {
      if (this.role === 'host') {
        const st = this.students.get(payload.studentId);
        if (st && payload.hazardId) {
          if (!st.markedItemIds) st.markedItemIds = new Set();
          st.markedItemIds.add(payload.hazardId);
          this.recalculateStudentScore(st);
          this.updateHostResponseCounter();
        }
      }
    });

    // Alumno pulsa "He terminado" (Audio Host: Notificación ding)
    this.net.on('STUDENT_FINISHED', (payload) => {
      if (this.role === 'host') {
        const st = this.students.get(payload.studentId);
        if (st) {
          st.isFinished = true;
          if (Array.isArray(payload.markedIds)) {
            st.markedItemIds = new Set(payload.markedIds);
            this.recalculateStudentScore(st);
          }
          this.updateHostResponseCounter();
          window.prlAudio?.playStudentFinished();
        }
      }
    });

    // Host finaliza el escenario
    this.net.on('SCENARIO_ENDED', () => {
      if (this.role === 'student') {
        // Bloquear pantalla del alumno y mostrar mensaje de mirar al proyector
        this.studentHasFinished = true;
        alert('¡Tiempo finalizado por el profesor! 🛑 Mira la pantalla del aula para ver la resolución técnica y el ranking.');
        if (this.dom.studentStatusBanner) {
          this.dom.studentStatusBanner.classList.remove('hidden');
          this.dom.studentStatusBanner.innerHTML = `
            <div class="p-6 bg-amber-950/90 border-2 border-amber-500 rounded-2xl text-center text-sm font-extrabold text-amber-200 shadow-2xl">
              <span class="text-3xl block mb-2">🛑</span>
              ¡Ronda finalizada! Mira la pantalla del profesor para la explicación técnica de cada riesgo.
            </div>
          `;
        }
      }
    });

    // Host vuelve al Lobby
    this.net.on('RETURN_TO_LOBBY', () => {
      if (this.role === 'student') {
        this.showScreen('student-lobby');
      }
    });

    // Monitor de estado de conexión en la nube global (Permite jugar sin la misma Wi-Fi)
    this.net.on('NETWORK_STATUS', (payload) => {
      const badge = document.getElementById('cloud-network-badge');
      if (badge) {
        if (payload.status === 'connected') {
          badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold';
          badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>🌐 Red Global Nube Activa (4G/5G / Cualquier Wi-Fi)</span>';
        } else if (payload.status === 'connecting') {
          badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold';
          badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span><span>Conectando a la red global...</span>';
        } else {
          badge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 text-xs font-bold';
          badge.innerHTML = '<span>📡 Modo Red Local</span>';
        }
      }
    });
  }
}

// Inicialización global robusta
function initPRLApp() {
  if (!window.prlApp) {
    try {
      window.prlApp = new PRLClassroomApp();
    } catch (err) {
      console.error('Error al inicializar PRLClassroomApp:', err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPRLApp);
} else {
  initPRLApp();
}
