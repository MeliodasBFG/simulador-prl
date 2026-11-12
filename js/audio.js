/**
 * PRL IMMERSIVE AUDIO ENGINE (HOST-ONLY AUDIO SYSTEM)
 * 
 * RESTRICCIÓN DE SEGURIDAD ESTRICTA:
 * Todo el audio (música de fondo y efectos) se reproduce EXCLUSIVAMENTE en el dispositivo
 * del Profesor (Host). Los dispositivos de los alumnos permanecen 100% en silencio
 * para evitar el caos sonoro en el aula.
 * 
 * 100% Web Audio API procedural: sin archivos externos, cero dependencias, carga instantánea.
 */

class PRLClassroomAudioEngine {
  constructor() {
    this.ctx = null;
    this.role = null; // 'host' | 'student'
    this.isMuted = localStorage.getItem('prl_host_muted') === 'true';
    this.volume = parseFloat(localStorage.getItem('prl_host_vol') || '0.7');

    // Nodos maestros
    this.masterGain = null;
    this.bgmGain = null;
    this.sfxGain = null;

    // Estado del secuenciador de música (BGM)
    this.currentTrack = null; // 'lobby' | 'thinking' | 'victory' | null
    this.timerId = null;
    this.stepIndex = 0;
    this.tempo = 120; // BPM
  }

  setRole(role) {
    this.role = role;
    if (this.role !== 'host') {
      this.stopAll();
    }
  }

  initAudioContext() {
    // Si no es Host, nunca inicializar ni reproducir nada
    if (this.role !== 'host') return false;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        
        // Master Gain
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // BGM Gain
        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(0.55, this.ctx.currentTime);
        this.bgmGain.connect(this.masterGain);

        // SFX Gain
        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.85, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    return true;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    localStorage.setItem('prl_host_vol', this.volume.toString());
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('prl_host_muted', this.isMuted.toString());
    if (this.masterGain && this.ctx) {
      const targetGain = this.isMuted ? 0 : this.volume;
      this.masterGain.gain.setValueAtTime(targetGain, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  stopAll() {
    this.stopMusic();
    if (this.ctx && this.ctx.state === 'running') {
      // Dejar AudioContext en reposo
    }
  }

  // =========================================================================
  // 1. MÚSICA DE FONDO (BGM) PROCEDURAL PARA EL HOST
  // =========================================================================

  playLobbyMusic() {
    if (this.role !== 'host') return;
    if (this.currentTrack === 'lobby') return;
    this.initAudioContext();
    this.stopMusic();

    this.currentTrack = 'lobby';
    this.stepIndex = 0;
    this.tempo = 124; // 124 BPM alegre y dinámico estilo Kahoot

    // Progresión funk-pop alegre (Am - C - F - G)
    const bassline = [
      220.00, 0, 220.00, 261.63, 0, 293.66, 0, 329.63,
      174.61, 0, 174.61, 261.63, 0, 196.00, 0, 246.94
    ];

    const leadArp = [
      440.00, 523.25, 659.25, 523.25, 659.25, 783.99, 659.25, 523.25,
      349.23, 440.00, 523.25, 440.00, 392.00, 493.88, 587.33, 493.88
    ];

    const stepInterval = (60 / this.tempo / 4) * 1000; // semicorcheas

    this.timerId = setInterval(() => {
      if (!this.ctx || this.currentTrack !== 'lobby') return;

      const now = this.ctx.currentTime;
      const step = this.stepIndex % 16;

      // 1. Sintetizador de bajo
      const bassFreq = bassline[step];
      if (bassFreq > 0) {
        this.synthBassNote(bassFreq / 2, now, 0.12);
      }

      // 2. Teclado rítmico / Arpegio alegre
      if (step % 2 === 0) {
        const leadFreq = leadArp[step];
        this.synthPluckNote(leadFreq, now, 0.14, 'triangle');
      }

      // 3. Hi-hat sutil en semicorcheas impares
      if (step % 2 === 1) {
        this.synthHiHat(now, 0.03);
      }

      this.stepIndex++;
    }, stepInterval);
  }

  playThinkingMusic() {
    if (this.role !== 'host') return;
    if (this.currentTrack === 'thinking') return;
    this.initAudioContext();
    this.stopMusic();

    this.currentTrack = 'thinking';
    this.stepIndex = 0;
    this.tempo = 110; // 110 BPM concentración y suspense estilo Kahoot

    const bassD = [146.83, 0, 146.83, 0, 174.61, 0, 130.81, 0]; // Dm groove
    const marimbaNotes = [
      587.33, 0, 698.46, 0, 880.00, 0, 830.61, 0,
      587.33, 0, 659.25, 0, 698.46, 0, 783.99, 0
    ];

    const stepInterval = (60 / this.tempo / 4) * 1000;

    this.timerId = setInterval(() => {
      if (!this.ctx || this.currentTrack !== 'thinking') return;

      const now = this.ctx.currentTime;
      const step = this.stepIndex % 16;

      // Pulso de reloj de tensión (Tick - Tock en negras)
      if (step % 4 === 0) {
        this.synthWoodblock(800, now, 0.04);
      } else if (step % 4 === 2) {
        this.synthWoodblock(600, now, 0.04);
      }

      // Bajo pulsante de suspense
      const bassFreq = bassD[step % 8];
      if (bassFreq > 0) {
        this.synthBassNote(bassFreq, now, 0.18, 'sawtooth');
      }

      // Notas de marimba esporádicas de concentración
      const mFreq = marimbaNotes[step];
      if (mFreq > 0 && Math.random() > 0.3) {
        this.synthMarimba(mFreq, now, 0.2);
      }

      this.stepIndex++;
    }, stepInterval);
  }

  playVictoryMusic() {
    if (this.role !== 'host') return;
    if (this.currentTrack === 'victory') return;
    this.initAudioContext();
    this.stopMusic();

    this.currentTrack = 'victory';
    this.stepIndex = 0;
    this.tempo = 128;

    // Acordes alegres de celebración triunfal (C - G - Am - F)
    const chords = [
      [523.25, 659.25, 783.99], // C
      [392.00, 493.88, 587.33], // G
      [440.00, 523.25, 659.25], // Am
      [349.23, 440.00, 523.25]  // F
    ];

    const stepInterval = (60 / this.tempo / 4) * 1000;

    this.timerId = setInterval(() => {
      if (!this.ctx || this.currentTrack !== 'victory') return;

      const now = this.ctx.currentTime;
      const step = this.stepIndex % 16;
      const chordIndex = Math.floor(step / 4);
      const chord = chords[chordIndex];

      // Bajo enérgico
      if (step % 4 === 0) {
        this.synthBassNote(chord[0] / 4, now, 0.25, 'triangle');
      }

      // Arpegio festivo
      const note = chord[step % 3];
      this.synthPluckNote(note * 2, now, 0.15, 'triangle');

      // Campanilla rítmica
      if (step % 2 === 0) {
        this.synthBell(1200, now, 0.08);
      }

      this.stepIndex++;
    }, stepInterval);
  }

  stopMusic() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.currentTrack = null;
  }

  // =========================================================================
  // 2. EFECTOS DE SONIDO (SFX) EXCLUSIVOS DEL HOST
  // =========================================================================

  // A) Pop / campanilla cuando un alumno se une a la sala
  playStudentJoined() {
    if (this.role !== 'host') return;
    this.initAudioContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.17);
  }

  // B) Swoosh / gong de transición cuando el Host inicia el escenario
  playScenarioStart() {
    if (this.role !== 'host') return;
    this.initAudioContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    
    // Acorde de apertura enérgico (D4, A4, D5)
    [293.66, 440.00, 587.33, 880.00].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.35, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.8);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.85);
    });
  }

  // C) Notificación cuando un alumno pulsa "He terminado"
  playStudentFinished() {
    if (this.role !== 'host') return;
    this.initAudioContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1318.5, now); // E6

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.46);
  }

  // D) Sonido dramático (redoble / impacto sub-grave) cuando el Host pulsa "Terminar escenario"
  playDramaticStop() {
    if (this.role !== 'host') return;
    this.initAudioContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;

    // Golpe de sub-graves
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.6);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.61);

    // Campanilla dramática
    const gong = this.ctx.createOscillator();
    const gongGain = this.ctx.createGain();
    gong.type = 'triangle';
    gong.frequency.setValueAtTime(440, now);
    gongGain.gain.setValueAtTime(0.3, now);
    gongGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    gong.connect(gongGain);
    gongGain.connect(this.sfxGain);

    gong.start(now);
    gong.stop(now + 1.25);
  }

  // E) Efecto al hacer clic en un riesgo en la pantalla del Host (revelación técnica)
  playHazardReveal() {
    if (this.role !== 'host') return;
    this.initAudioContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    [659.25, 987.77].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);

      gain.gain.setValueAtTime(0.25, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.36);
    });
  }

  // =========================================================================
  // SINTETIZADORES MODULARES AUXILIARES
  // =========================================================================

  synthBassNote(freq, time, duration, wave = 'triangle') {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = wave;
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, time);
    filter.frequency.exponentialRampToValueAtTime(150, time + duration);

    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  synthPluckNote(freq, time, duration, wave = 'triangle') {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = wave;
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  synthHiHat(time, duration) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(3500, time);

    gain.gain.setValueAtTime(0.03, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  synthWoodblock(freq, time, duration) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  synthMarimba(freq, time, duration) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.09, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  synthBell(freq, time, duration) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.07, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.bgmGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }
}

// Instancia global
window.prlAudio = new PRLClassroomAudioEngine();
