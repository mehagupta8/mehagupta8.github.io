/**
 * Sanctuary for Akku - Luxury / Editorial Cognitive Space
 * Architecture & Behavioral Engine
 * Curated with love from Mehu for Akshat (Akku)
 * Strict Zero Emojis. Zero Border Radius. Research-Backed Clinical Protocols.
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Acoustic Synthesizer (Web Audio API - Minimalist, Deliberate, Restrained)
  // ==========================================================================
  let audioCtx = null;
  let isSoundEnabled = true; // Enabled by default so all baby sounds and clicks work immediately on user gesture

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Subtle acoustic micro-click for buttons and tactile plates
  function playClick(pitch = 1200) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.025);
    } catch (e) {}
  }

  // Warm metallic chime for transitions, affirmations, and completions
  function playChime(freq = 528, duration = 1.8) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Soft match ignition whoosh for candle anchor
  function playFlameIgnite() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const bufferSize = Math.floor(audioCtx.sampleRate * 0.25);
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(600, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(180, audioCtx.currentTime + 0.25);
      filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
      noise.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  // Mechanical switch acoustic synthesizer
  function playMechSwitchSound(profile = 'blue') {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;

      if (profile === 'blue') {
        // High-pitch crisp mechanical leaf click (2400Hz to 1400Hz snap + bottom out)
        const snapOsc = audioCtx.createOscillator();
        const snapGain = audioCtx.createGain();
        snapOsc.type = 'triangle';
        snapOsc.frequency.setValueAtTime(2400, now);
        snapOsc.frequency.exponentialRampToValueAtTime(1400, now + 0.018);

        snapGain.gain.setValueAtTime(0.26, now);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

        snapOsc.connect(snapGain);
        snapGain.connect(audioCtx.destination);
        snapOsc.start(now);
        snapOsc.stop(now + 0.022);

        const thudOsc = audioCtx.createOscillator();
        const thudGain = audioCtx.createGain();
        thudOsc.type = 'sine';
        thudOsc.frequency.setValueAtTime(480, now + 0.005);
        thudOsc.frequency.exponentialRampToValueAtTime(120, now + 0.045);

        thudGain.gain.setValueAtTime(0.2, now + 0.005);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        thudOsc.connect(thudGain);
        thudGain.connect(audioCtx.destination);
        thudOsc.start(now + 0.005);
        thudOsc.stop(now + 0.05);

      } else if (profile === 'jade') {
        // Heavy thick clickbar snap + stiff spring clack
        const barOsc = audioCtx.createOscillator();
        const barGain = audioCtx.createGain();
        barOsc.type = 'sawtooth';
        barOsc.frequency.setValueAtTime(1350, now);
        barOsc.frequency.exponentialRampToValueAtTime(600, now + 0.025);

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2800, now);

        barGain.gain.setValueAtTime(0.3, now);
        barGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

        barOsc.connect(filter);
        filter.connect(barGain);
        barGain.connect(audioCtx.destination);
        barOsc.start(now);
        barOsc.stop(now + 0.035);

      } else if (profile === 'thock') {
        // Hollow, deep acoustic thock (wooden/POM cavity resonance)
        const thockOsc = audioCtx.createOscillator();
        const thockGain = audioCtx.createGain();
        thockOsc.type = 'sine';
        thockOsc.frequency.setValueAtTime(360, now);
        thockOsc.frequency.exponentialRampToValueAtTime(75, now + 0.065);

        thockGain.gain.setValueAtTime(0.36, now);
        thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        thockOsc.connect(thockGain);
        thockGain.connect(audioCtx.destination);
        thockOsc.start(now);
        thockOsc.stop(now + 0.07);

      } else if (profile === 'cream') {
        // Cream linear: muted, butter-smooth cushioned slide and landing
        const creamOsc = audioCtx.createOscillator();
        const creamGain = audioCtx.createGain();
        creamOsc.type = 'sine';
        creamOsc.frequency.setValueAtTime(260, now);
        creamOsc.frequency.exponentialRampToValueAtTime(90, now + 0.04);

        creamGain.gain.setValueAtTime(0.2, now);
        creamGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        creamOsc.connect(creamGain);
        creamGain.connect(audioCtx.destination);
        creamOsc.start(now);
        creamOsc.stop(now + 0.045);
      }
    } catch (e) {}
  }

  // Heavy vault locking bolt sound (clunk - latch - bolt)
  function playVaultLockSound(isLocking = true) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isLocking ? 180 : 260, now);
      osc.frequency.exponentialRampToValueAtTime(isLocking ? 60 : 120, now + 0.09);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.1);

      const boltOsc = audioCtx.createOscillator();
      const boltGain = audioCtx.createGain();
      boltOsc.type = 'sine';
      boltOsc.frequency.setValueAtTime(isLocking ? 420 : 540, now + 0.06);
      boltOsc.frequency.exponentialRampToValueAtTime(isLocking ? 800 : 300, now + 0.14);

      boltGain.gain.setValueAtTime(0.22, now + 0.06);
      boltGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      boltOsc.connect(boltGain);
      boltGain.connect(audioCtx.destination);
      boltOsc.start(now + 0.06);
      boltOsc.stop(now + 0.15);
    } catch (e) {}
  }

  // Adorable, cheerful baby giggle / coo acoustic synthesizer
  function playCuteBabySound() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;

      // 3 bubbly, joyful, high-pitched baby giggles ("he-he-hee!")
      const giggles = [
        { start: 0.00, fStart: 580, fPeak: 840, fEnd: 680, dur: 0.12, vol: 0.24 },
        { start: 0.13, fStart: 660, fPeak: 940, fEnd: 740, dur: 0.13, vol: 0.26 },
        { start: 0.27, fStart: 740, fPeak: 1080, fEnd: 820, dur: 0.17, vol: 0.28 }
      ];

      giggles.forEach(g => {
        const t0 = now + g.start;
        const dur = g.dur;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Formant filter (vocal acoustic warmth)
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1750, t0);
        filter.Q.setValueAtTime(3.2, t0);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(g.fStart, t0);
        osc.frequency.linearRampToValueAtTime(g.fPeak, t0 + dur * 0.45);
        osc.frequency.exponentialRampToValueAtTime(g.fEnd, t0 + dur);

        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.linearRampToValueAtTime(g.vol, t0 + dur * 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

        // Subtle sweet vibrato for natural baby inflection
        const vib = audioCtx.createOscillator();
        const vibGain = audioCtx.createGain();
        vib.frequency.setValueAtTime(12, t0);
        vibGain.gain.setValueAtTime(20, t0);
        vib.connect(osc.frequency);
        vib.start(t0);
        vib.stop(t0 + dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t0);
        osc.stop(t0 + dur);
      });

      // Playful gentle sparkle chime underneath
      const chimeOsc = audioCtx.createOscillator();
      const chimeGain = audioCtx.createGain();
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(1174.66, now + 0.08); // D6
      chimeOsc.frequency.exponentialRampToValueAtTime(1760, now + 0.42); // A6
      chimeGain.gain.setValueAtTime(0.0001, now + 0.08);
      chimeGain.gain.linearRampToValueAtTime(0.12, now + 0.2);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(audioCtx.destination);
      chimeOsc.start(now + 0.08);
      chimeOsc.stop(now + 0.52);
    } catch (e) {}
  }

  // Multi-oscillator ASMR silicone bubble pop sound
  function playBubblePop(pitch = 380, isReverse = false) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const t = audioCtx.currentTime;

      if (!isReverse) {
        // Crisp air pop snap (high frequency burst)
        const snapOsc = audioCtx.createOscillator();
        const snapGain = audioCtx.createGain();
        snapOsc.type = 'triangle';
        snapOsc.frequency.setValueAtTime(pitch * 2.8, t);
        snapOsc.frequency.exponentialRampToValueAtTime(pitch * 0.9, t + 0.028);

        snapGain.gain.setValueAtTime(0.2, t);
        snapGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

        snapOsc.connect(snapGain);
        snapGain.connect(audioCtx.destination);
        snapOsc.start(t);
        snapOsc.stop(t + 0.035);

        // Cavity body pop (deep resonant thump)
        const bodyOsc = audioCtx.createOscillator();
        const bodyGain = audioCtx.createGain();
        bodyOsc.type = 'sine';
        bodyOsc.frequency.setValueAtTime(pitch, t);
        bodyOsc.frequency.exponentialRampToValueAtTime(60, t + 0.065);

        bodyGain.gain.setValueAtTime(0.26, t);
        bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

        bodyOsc.connect(bodyGain);
        bodyGain.connect(audioCtx.destination);
        bodyOsc.start(t);
        bodyOsc.stop(t + 0.07);
      } else {
        // Reverse suction snap for un-popping
        const unpopOsc = audioCtx.createOscillator();
        const unpopGain = audioCtx.createGain();
        unpopOsc.type = 'sine';
        unpopOsc.frequency.setValueAtTime(140, t);
        unpopOsc.frequency.exponentialRampToValueAtTime(pitch * 1.6, t + 0.03);

        unpopGain.gain.setValueAtTime(0.12, t);
        unpopGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

        unpopOsc.connect(unpopGain);
        unpopGain.connect(audioCtx.destination);
        unpopOsc.start(t);
        unpopOsc.stop(t + 0.035);
      }
    } catch (e) {}
  }

  // Ambient ocean wave swell audio for the 60-second urge surfer
  let oceanSourceNode = null;
  let oceanFilterNode = null;
  let oceanGainNode = null;

  function startOceanWaveAudio() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      stopOceanWaveAudio();

      const bufferSize = Math.floor(audioCtx.sampleRate * 2.5);
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.35;
      }

      oceanSourceNode = audioCtx.createBufferSource();
      oceanSourceNode.buffer = buffer;
      oceanSourceNode.loop = true;

      oceanFilterNode = audioCtx.createBiquadFilter();
      oceanFilterNode.type = 'lowpass';
      oceanFilterNode.frequency.setValueAtTime(320, audioCtx.currentTime);

      oceanGainNode = audioCtx.createGain();
      oceanGainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);

      oceanSourceNode.connect(oceanFilterNode);
      oceanFilterNode.connect(oceanGainNode);
      oceanGainNode.connect(audioCtx.destination);

      oceanSourceNode.start();
    } catch (e) {}
  }

  function stopOceanWaveAudio() {
    try {
      if (oceanSourceNode) {
        oceanSourceNode.stop();
        oceanSourceNode.disconnect();
        oceanSourceNode = null;
      }
    } catch (e) {}
  }

  // Playful apple-crunch & vocal "Nom nom nom" biting sound
  function playNomNomNom() {
    if (!isSoundEnabled) return;
    initAudio();

    // Cute vocal synthesis utterance if supported
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance('Nom, nom, nom!');
        utter.rate = 1.25;
        utter.pitch = 1.4;
        utter.volume = 0.9;
        window.speechSynthesis.speak(utter);
      }
    } catch (e) {}

    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    // 3 successive satisfying bites
    for (let b = 0; b < 3; b++) {
      const biteTime = now + b * 0.16;
      try {
        // Apple skin crisp crackle (filtered noise burst)
        const bufferSize = Math.floor(audioCtx.sampleRate * 0.04);
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1450 - b * 130, biteTime);
        filter.Q.setValueAtTime(2.2, biteTime);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.24, biteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, biteTime + 0.04);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start(biteTime);
        noise.stop(biteTime + 0.04);

        // Oral cavity chomp resonance ("nom" formant slide)
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450 - b * 35, biteTime);
        osc.frequency.exponentialRampToValueAtTime(170, biteTime + 0.085);

        oscGain.gain.setValueAtTime(0.18, biteTime);
        oscGain.gain.exponentialRampToValueAtTime(0.001, biteTime + 0.085);

        osc.connect(oscGain);
        oscGain.connect(audioCtx.destination);
        osc.start(biteTime);
        osc.stop(biteTime + 0.085);
      } catch (e) {}
    }
  }

  // Audio Toggle UI Binding
  const soundToggleBtn = document.getElementById('soundToggle');
  const soundStatusText = document.getElementById('soundStatusText');

  if (soundToggleBtn && soundStatusText) {
    if (isSoundEnabled) {
      soundToggleBtn.classList.add('sound-on');
      soundStatusText.textContent = 'Sound: On';
    }

    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      if (isSoundEnabled) {
        initAudio();
        soundToggleBtn.classList.add('sound-on');
        soundStatusText.textContent = 'Sound: On';
        playCuteBabySound();
      } else {
        soundToggleBtn.classList.remove('sound-on');
        soundStatusText.textContent = 'Sound: Off';
      }
    });

    window.addEventListener('pointerdown', () => {
      if (isSoundEnabled) initAudio();
    }, { once: true });
  }

  // ==========================================================================
  // 2. Hero Section: Interactive Akshat Avatar & Companion Engine
  // Curls bouncy animation, floating hearts on hugs, and sad urge state
  // ==========================================================================
  const avatarStage = document.getElementById('avatarStage');
  const akshatAvatar = document.getElementById('akshatAvatar');
  const speechText = document.getElementById('speechText');

  // Avatar facial & body elements
  const normalArms = document.getElementById('normalArms');
  const distressedArms = document.getElementById('distressedArms');
  const normalEyebrows = document.getElementById('normalEyebrows');
  const sadEyebrows = document.getElementById('sadEyebrows');
  const avatarEyes = document.getElementById('avatarEyes');
  const avatarHappyEyes = document.getElementById('avatarHappyEyes');
  const avatarSadEyes = document.getElementById('avatarSadEyes');
  const avatarMouth = document.getElementById('avatarMouth');
  const avatarSadMouth = document.getElementById('avatarSadMouth');
  const curlsGroup = document.getElementById('curlsGroup');
  const distressedHairGroup = document.getElementById('distressedHairGroup');

  // Apple-Bite Mask & Eaten Heart elements
  const biteCutouts = document.getElementById('biteCutouts');
  const biteVisualBorders = document.getElementById('biteVisualBorders');
  const eatenHeartStage = document.getElementById('eatenHeartStage');
  const heartPulseBox = document.getElementById('heartPulseBox');
  const restoreAkkuBtn = document.getElementById('restoreAkkuBtn');

  // Controls
  const patHeadBtn = document.getElementById('patHeadBtn');
  const hugBtn = document.getElementById('hugBtn');
  const urgeBiteBtn = document.getElementById('urgeBiteBtn');
  const urgeTwirlBtn = document.getElementById('urgeTwirlBtn');
  const eatAkkuBtn = document.getElementById('eatAkkuBtn');

  let isDistressed = false;
  let curlsTimer = null;
  let happyEyesTimer = null;
  let eatBiteStep = 0;

  // 5 progressive apple bite definitions
  const appleBites = [
    {
      speech: "Nom! You took a bite out of my curls! They taste like cinnamon.",
      cutoutSvg: '<circle cx="158" cy="38" r="14" fill="black" /><circle cx="174" cy="46" r="15" fill="black" /><circle cx="190" cy="52" r="15" fill="black" /><circle cx="206" cy="56" r="14" fill="black" /><circle cx="220" cy="58" r="13" fill="black" /><polygon points="160,0 240,0 240,65 190,52" fill="black" />',
      borderSvg: '<path d="M 146 32 Q 158 42 174 46 Q 190 52 206 56 Q 220 58 230 62" class="apple-bite-rim" />'
    },
    {
      speech: "Nom nom! Mehu, my left shoulder is gone! I'm so delicious.",
      cutoutSvg: '<circle cx="56" cy="164" r="14" fill="black" /><circle cx="46" cy="180" r="16" fill="black" /><circle cx="44" cy="198" r="16" fill="black" /><circle cx="48" cy="216" r="15" fill="black" /><circle cx="58" cy="230" r="14" fill="black" /><polygon points="0,150 56,164 44,198 0,240" fill="black" />',
      borderSvg: '<path d="M 66 154 Q 46 180 44 198 Q 48 216 66 238" class="apple-bite-rim" />'
    },
    {
      speech: "Nom nom nom... you're munching my cute cheek! Keep going...",
      cutoutSvg: '<circle cx="156" cy="106" r="14" fill="black" /><circle cx="166" cy="120" r="15" fill="black" /><circle cx="172" cy="136" r="16" fill="black" /><circle cx="168" cy="152" r="15" fill="black" /><circle cx="158" cy="164" r="14" fill="black" /><polygon points="240,95 166,120 172,136 240,175" fill="black" />',
      borderSvg: '<path d="M 148 98 Q 166 120 172 136 Q 168 152 148 172" class="apple-bite-rim" />'
    },
    {
      speech: "Nom nom! There's almost nothing left of me!",
      cutoutSvg: '<circle cx="92" cy="208" r="16" fill="black" /><circle cx="108" cy="218" r="17" fill="black" /><circle cx="124" cy="222" r="18" fill="black" /><circle cx="140" cy="218" r="17" fill="black" /><circle cx="156" cy="208" r="16" fill="black" /><polygon points="80,260 92,208 124,222 156,208 168,260" fill="black" />',
      borderSvg: '<path d="M 82 200 Q 108 218 124 222 Q 140 218 166 200" class="apple-bite-rim" />'
    },
    {
      speech: "You ate me all up! Love you forever, Mehu.",
      isFinal: true
    }
  ];

  function handleAllowMehaToEat() {
    if (eatBiteStep >= appleBites.length) {
      restoreAkkuWhole();
      return;
    }

    const bite = appleBites[eatBiteStep];
    eatBiteStep++;

    playNomNomNom();

    if (bite.isFinal) {
      if (akshatAvatar) akshatAvatar.style.display = 'none';
      if (eatenHeartStage) eatenHeartStage.style.display = 'flex';
      updateSpeech(bite.speech);
      playChime(660, 2.2);
      for (let i = 0; i < 5; i++) {
        setTimeout(() => spawnFloatingHeart(), i * 140);
      }
    } else {
      if (biteCutouts && bite.cutoutSvg) {
        biteCutouts.innerHTML += bite.cutoutSvg;
      }
      if (biteVisualBorders && bite.borderSvg) {
        biteVisualBorders.innerHTML += bite.borderSvg;
      }
      updateSpeech(bite.speech);
      spawnFloatingHeart();
    }
  }

  function restoreAkkuWhole(action = 'none', e = null) {
    eatBiteStep = 0;
    if (biteCutouts) biteCutouts.innerHTML = '';
    if (biteVisualBorders) biteVisualBorders.innerHTML = '';
    if (eatenHeartStage) eatenHeartStage.style.display = 'none';
    if (akshatAvatar) akshatAvatar.style.display = 'block';
    comfortAkshat();

    if (action === 'pet') {
      triggerPetCurls(e);
      return;
    }
    if (action === 'hug') {
      triggerGiveHug(e);
      return;
    }

    updateSpeech("I'm back together! Love you so much, Mehu. Tap my face to hug, or pet my curls.");
    playChime(784, 1.2);
    if (curlsGroup) {
      curlsGroup.classList.remove('curls-moving');
      void curlsGroup.offsetWidth;
      curlsGroup.classList.add('curls-moving');
      setTimeout(() => curlsGroup.classList.remove('curls-moving'), 1800);
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(() => spawnFloatingHeart(e), i * 140);
    }
  }

  function spawnFloatingHeart(e) {
    if (!avatarStage) return;
    const heart = document.createElement('div');
    heart.className = 'floating-heart-item';
    heart.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="#D4AF37"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    const rect = avatarStage.getBoundingClientRect();
    const x = e ? (e.clientX - rect.left) : (rect.width / 2);
    const y = e ? (e.clientY - rect.top) : (rect.height / 2);

    heart.style.left = `${Math.max(15, Math.min(rect.width - 35, x + (Math.random() * 40 - 20)))}px`;
    heart.style.top = `${Math.max(15, Math.min(rect.height - 35, y + (Math.random() * 30 - 15)))}px`;

    avatarStage.appendChild(heart);
    setTimeout(() => heart.remove(), 1300);
  }

  function updateSpeech(text) {
    if (!speechText) return;
    speechText.style.opacity = '0';
    setTimeout(() => {
      speechText.textContent = text;
      speechText.style.opacity = '1';
    }, 180);
  }

  function showHappyEyes(duration = 2400) {
    if (avatarEyes && avatarHappyEyes) {
      if (avatarSadEyes) avatarSadEyes.style.display = 'none';
      avatarEyes.style.display = 'none';
      avatarHappyEyes.style.display = 'block';
      clearTimeout(happyEyesTimer);
      happyEyesTimer = setTimeout(() => {
        if (!isDistressed) {
          avatarEyes.style.display = 'block';
          avatarHappyEyes.style.display = 'none';
        }
      }, duration);
    }
  }

  function comfortAkshat() {
    isDistressed = false;
    if (avatarStage) avatarStage.classList.remove('avatar-distressed');
    if (normalArms) normalArms.style.display = 'block';
    if (distressedArms) distressedArms.style.display = 'none';
    if (curlsGroup) curlsGroup.style.display = 'block';
    if (distressedHairGroup) distressedHairGroup.style.display = 'none';
    if (normalEyebrows) normalEyebrows.style.display = 'block';
    if (sadEyebrows) sadEyebrows.style.display = 'none';
    if (avatarSadEyes) avatarSadEyes.style.display = 'none';
    if (avatarSadMouth) avatarSadMouth.style.display = 'none';
    if (avatarMouth) avatarMouth.style.display = 'block';
    showHappyEyes(2500);
  }

  function triggerSadDistressed(mode = 'general') {
    // If eaten heart is visible or any bites taken, restore whole first
    if (eatBiteStep > 0 || (eatenHeartStage && eatenHeartStage.style.display === 'flex') || (akshatAvatar && akshatAvatar.style.display === 'none')) {
      eatBiteStep = 0;
      if (biteCutouts) biteCutouts.innerHTML = '';
      if (biteVisualBorders) biteVisualBorders.innerHTML = '';
      if (eatenHeartStage) eatenHeartStage.style.display = 'none';
      if (akshatAvatar) akshatAvatar.style.display = 'block';
    }

    isDistressed = true;
    if (avatarStage) avatarStage.classList.add('avatar-distressed');
    if (normalArms) normalArms.style.display = 'none';
    if (distressedArms) distressedArms.style.display = 'block';
    if (curlsGroup) curlsGroup.style.display = 'none';
    if (distressedHairGroup) distressedHairGroup.style.display = 'block';
    if (normalEyebrows) normalEyebrows.style.display = 'none';
    if (sadEyebrows) sadEyebrows.style.display = 'block';
    if (avatarEyes) avatarEyes.style.display = 'none';
    if (avatarHappyEyes) avatarHappyEyes.style.display = 'none';
    if (avatarSadEyes) avatarSadEyes.style.display = 'block';
    if (avatarMouth) avatarMouth.style.display = 'none';
    if (avatarSadMouth) avatarSadMouth.style.display = 'block';

    if (mode === 'bite') {
      updateSpeech("My nails are bitten down and bleeding... it hurts. Let's protect my hands right now.");
    } else if (mode === 'twirl') {
      updateSpeech("I've been pulling my hair from the front... my scalp is sore. Let's keep my hands busy here.");
    } else {
      updateSpeech("I'm feeling really anxious and overwhelmed right now... Let's protect my hands and surf this wave.");
    }
    playClick(600);
  }

  function triggerPetCurls(e) {
    // If eaten heart is visible or any bites taken, restore whole first!
    if (eatBiteStep > 0 || (eatenHeartStage && eatenHeartStage.style.display === 'flex') || (akshatAvatar && akshatAvatar.style.display === 'none')) {
      eatBiteStep = 0;
      if (biteCutouts) biteCutouts.innerHTML = '';
      if (biteVisualBorders) biteVisualBorders.innerHTML = '';
      if (eatenHeartStage) eatenHeartStage.style.display = 'none';
      if (akshatAvatar) akshatAvatar.style.display = 'block';
    }

    const wasSad = isDistressed;
    comfortAkshat();

    // Trigger curls movement animation
    if (curlsGroup) {
      curlsGroup.classList.remove('curls-moving');
      void curlsGroup.offsetWidth; // trigger reflow
      curlsGroup.classList.add('curls-moving');
      clearTimeout(curlsTimer);
      curlsTimer = setTimeout(() => {
        curlsGroup.classList.remove('curls-moving');
      }, 2500);
    }

    spawnFloatingHeart(e);
    spawnFloatingHeart(e);
    playChime(780, 1.4);

    if (wasSad) {
      updateSpeech("Mmm, thank you for comforting me and petting my curls. My hands feel safe and resting peacefully now.");
    } else {
      updateSpeech("Mmm, thank you for petting my curls! Keep your hands resting right here instead of twirling yours.");
    }
  }

  function triggerGiveHug(e) {
    // If eaten heart is visible or any bites taken, restore whole first!
    if (eatBiteStep > 0 || (eatenHeartStage && eatenHeartStage.style.display === 'flex') || (akshatAvatar && akshatAvatar.style.display === 'none')) {
      eatBiteStep = 0;
      if (biteCutouts) biteCutouts.innerHTML = '';
      if (biteVisualBorders) biteVisualBorders.innerHTML = '';
      if (eatenHeartStage) eatenHeartStage.style.display = 'none';
      if (akshatAvatar) akshatAvatar.style.display = 'block';
    }

    const wasSad = isDistressed;
    comfortAkshat();
    playChime(528, 1.6);

    for (let i = 0; i < 4; i++) {
      setTimeout(() => spawnFloatingHeart(e), i * 160);
    }

    if (wasSad) {
      updateSpeech("Thank you for the warm hug. Feeling you close melts the overwhelm away. I can let go of my hair and nails now.");
    } else {
      updateSpeech("Big warm hug wrapped tightly around you! Feel your shoulders melt. Meha has got you.");
    }
  }

  if (avatarStage) {
    avatarStage.addEventListener('click', (e) => {
      // If in heart state or partially bitten, clicking brings his face back!
      if (eatBiteStep > 0 || (eatenHeartStage && eatenHeartStage.style.display === 'flex') || (akshatAvatar && akshatAvatar.style.display === 'none')) {
        restoreAkkuWhole('restore', e);
      } else {
        triggerGiveHug(e);
      }
    });

    avatarStage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (eatBiteStep > 0 || (eatenHeartStage && eatenHeartStage.style.display === 'flex') || (akshatAvatar && akshatAvatar.style.display === 'none')) {
          restoreAkkuWhole('restore');
        } else {
          triggerGiveHug();
        }
      }
    });
  }

  if (eatenHeartStage) {
    eatenHeartStage.addEventListener('click', (e) => {
      e.stopPropagation();
      restoreAkkuWhole('restore', e);
    });
  }

  if (heartPulseBox) {
    heartPulseBox.addEventListener('click', (e) => {
      e.stopPropagation();
      restoreAkkuWhole('restore', e);
    });
  }

  if (restoreAkkuBtn) {
    restoreAkkuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      restoreAkkuWhole('restore', e);
    });
  }

  if (patHeadBtn) {
    patHeadBtn.addEventListener('click', (e) => {
      triggerPetCurls(e);
    });
  }

  if (hugBtn) {
    hugBtn.addEventListener('click', (e) => {
      triggerGiveHug(e);
    });
  }

  if (urgeBiteBtn) {
    urgeBiteBtn.addEventListener('click', () => {
      triggerSadDistressed('bite');
      const busySection = document.getElementById('busyHandsSection');
      if (busySection) {
        busySection.scrollIntoView({ behavior: 'smooth' });
        const matrixTab = document.querySelector('.tactile-tab[data-tab="matrix"]');
        if (matrixTab) matrixTab.click();
      }
    });
  }

  if (urgeTwirlBtn) {
    urgeTwirlBtn.addEventListener('click', () => {
      triggerSadDistressed('twirl');
      const busySection = document.getElementById('busyHandsSection');
      if (busySection) {
        busySection.scrollIntoView({ behavior: 'smooth' });
        const surferTab = document.querySelector('.tactile-tab[data-tab="surfer"]');
        if (surferTab) surferTab.click();
      }
    });
  }

  if (eatAkkuBtn) {
    eatAkkuBtn.addEventListener('click', () => {
      handleAllowMehaToEat();
    });
  }

  // ==========================================================================
  // 3. Problem Options & Action Steps (Short, colloquial, friendly)
  // 5 problems, 4 options each with interactive work box and progress logging
  // Zero Emojis.
  // ==========================================================================
  const problemOptionsData = {
    assignments: {
      title: 'Assignments',
      steps: [
        {
          id: 'step_1',
          name: 'Just 5 minutes',
          desc: 'Pick the tiniest part of your assignment and work on it for just 5 minutes. You have full permission to stop right after.',
          prompt: 'What is one tiny 5-minute action you can do right now? (e.g., open the doc, create a title, write one sentence)',
          placeholder: 'Type your 5-minute action here...'
        },
        {
          id: 'step_2',
          name: 'Brain dump',
          desc: 'Get everything floating in your head down on the page so you do not have to keep juggling thoughts.',
          prompt: 'Dump all your assignment requirements, doubts, or notes here to clear your mental bandwidth:',
          placeholder: 'Write down everything on your mind about this assignment...'
        },
        {
          id: 'step_3',
          name: 'Close extra tabs',
          desc: 'Keep only the one essential tab or file in front of you. Put your phone out of reach for a moment.',
          prompt: 'What is the single essential file or tab you need open right now?',
          placeholder: 'Name your single focus document or tab...'
        },
        {
          id: 'step_4',
          name: 'Permission to write messy',
          desc: 'Low standards create momentum. Type a rough, imperfect draft without fixing or judging anything yet.',
          prompt: 'Write your rough, messy draft or initial thoughts here without editing yourself:',
          placeholder: 'Start typing rough thoughts freely...'
        }
      ]
    },
    tony: {
      title: 'Tony (Manager)',
      steps: [
        {
          id: 'step_1',
          name: 'Reality check',
          desc: 'Write down what you are worried he thinks, then write what the actual facts are. Most of the time it is far simpler than our brain imagines.',
          prompt: 'What is your brain worrying about, and what are the actual facts of the situation?',
          placeholder: 'Worry: ... \nFacts: ...'
        },
        {
          id: 'step_2',
          name: 'Draft a simple update',
          desc: 'Draft a short, neutral 2-line check-in so you do not have to stress over wording.',
          prompt: 'Draft your simple, clear update here (keep it short and easy):',
          placeholder: 'Hi Tony, I am focusing on [deliverable] today and will share an update by 3pm. Let me know if that works!'
        },
        {
          id: 'step_3',
          name: 'Drop your shoulders',
          desc: 'Unclench your jaw, drop your shoulders, and exhale. Work is just work, not a measurement of your worth.',
          prompt: 'Take a slow deep breath. Write a gentle reminder to yourself:',
          placeholder: 'I unclenched my jaw, took a breath, and reminded myself: I am safe, capable, and doing fine.'
        },
        {
          id: 'step_4',
          name: 'Pick 2 talking points',
          desc: 'Pick just 2 bullet points to bring to your next check-in. That gives you clear structure and peace of mind.',
          prompt: 'What are 2 simple points you want to cover in your next conversation?',
          placeholder: '1. Update on ...\n2. Quick question about ...'
        }
      ]
    },
    year_ending: {
      title: '2026 is ending',
      steps: [
        {
          id: 'step_1',
          name: 'Focus on today only',
          desc: 'Forget about months and long-term deadlines. Focus only on what feels doable and kind to yourself before bedtime.',
          prompt: 'What is the single thing that actually matters for you today?',
          placeholder: 'Today, all I need to focus on is...'
        },
        {
          id: 'step_2',
          name: 'Plan the next 2 hours',
          desc: 'Instead of worrying about the whole week, just map out the next 2 hours with realistic room to breathe.',
          prompt: 'What does the next 2 hours look like? Keep it realistic and easy:',
          placeholder: 'Hour 1: [gentle focus] / Hour 2: [snack, stretch, wind down]'
        },
        {
          id: 'step_3',
          name: 'Celebrate 3 quiet wins',
          desc: 'Remind yourself of 3 things you finished or handled well recently, even if they felt small.',
          prompt: 'Write 3 things you handled well recently that you deserve credit for:',
          placeholder: '1. ...\n2. ...\n3. ...'
        },
        {
          id: 'step_4',
          name: 'Put one worry away',
          desc: 'Write down one future worry that you cannot solve tonight, and officially give yourself permission to set it down.',
          prompt: 'What worry can you officially file away until tomorrow or later?',
          placeholder: 'I am putting away worry about... until a later scheduled time.'
        }
      ]
    },
    missing_girlfriend: {
      title: 'Missing my girlfriend',
      steps: [
        {
          id: 'step_1',
          name: 'Hold a cozy memory',
          desc: 'Remember a sweet moment, laugh, or warm cuddle with Mehu. Close your eyes for 30 seconds and let yourself smile.',
          prompt: 'What is a warm memory or sweet thought of Mehu that makes you feel safe?',
          placeholder: 'A cozy memory with Mehu...'
        },
        {
          id: 'step_2',
          name: 'Plan when to connect',
          desc: 'Pick a sweet time today to text or call so you have something warm to look forward to.',
          prompt: 'When would be a cozy time to connect with Meha today?',
          placeholder: 'I would love to call or text Mehu around...'
        },
        {
          id: 'step_3',
          name: 'Deep breath & ground',
          desc: 'Put a hand over your chest, breathe in deeply for 4 seconds, and release. Distance is temporary; love is always steady.',
          prompt: 'Take 3 deep breaths and write a sweet reminder to yourself:',
          placeholder: 'Mehu loves me and is always in my corner. We are solid and together.'
        },
        {
          id: 'step_4',
          name: 'Leave a note for Mehu',
          desc: 'Write down a sweet thought or inside joke for Mehu to share when you talk next.',
          prompt: 'What is a sweet thought or cute note you want to leave for Mehu?',
          placeholder: 'Hey cutie, just wanted to share this with you...'
        }
      ]
    },
    clean_house: {
      title: 'Need to clean house',
      steps: [
        {
          id: 'step_1',
          name: 'Just one corner',
          desc: 'Ignore the rest of the room. Pick only one tiny spot—like one corner of your desk—and tidy just that.',
          prompt: 'Which tiny spot or single surface are you picking to tidy up right now?',
          placeholder: 'I am picking the left corner of my desk...'
        },
        {
          id: 'step_2',
          name: 'Toss 3 pieces of trash',
          desc: 'Walk around for 2 minutes looking only for obvious trash. No sorting or reorganizing, just toss.',
          prompt: 'What obvious trash can you toss into the bin in the next 2 minutes?',
          placeholder: 'Tossed empty cup, wrapper, old paper...'
        },
        {
          id: 'step_3',
          name: 'Put 5 things back home',
          desc: 'Pick up 5 items out of place and walk each one back to where it belongs, one at a time.',
          prompt: 'List the 5 items you are putting away right now:',
          placeholder: '1. Mug to sink\n2. Shirt to hamper\n3. Books on shelf\n4. Keys in bowl\n5. Shoes in closet'
        },
        {
          id: 'step_4',
          name: 'Put on good music',
          desc: 'Put on your favorite lofi beat, instrumental track, or upbeat playlist to make moving around feel effortless.',
          prompt: 'What music or playlist are you turning on to get your groove going?',
          placeholder: 'Playing: ...'
        }
      ]
    }
  };

  let activeProblemKey = null;
  let activeStepIdx = 0;

  // ==========================================================================
  // Global Helpers, Ledger & Notes to Meha Engine
  // Saves all progress with date & time, Notes to Meha drawer, and live badges
  // Strict Zero Emojis.
  // ==========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, function (m) {
      switch (m) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#039;';
        default: return m;
      }
    });
  }

  function getFormattedDateTime() {
    const now = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
    return now.toLocaleDateString('en-US', options);
  }

  const PROGRESS_ARCHIVE_KEY = 'akku_progress_ledger_v2';
  const NOTES_MEHA_KEY = 'akku_notes_to_meha_v1';
  const STREAK_KEY = 'akku_urge_streak_v2';
  const streakDigits = document.getElementById('streakDigits');

  function getStreak() {
    try {
      const val = localStorage.getItem(STREAK_KEY);
      return val ? parseInt(val, 10) : 0;
    } catch (e) {
      return 0;
    }
  }

  function setStreak(num) {
    try {
      localStorage.setItem(STREAK_KEY, String(num));
    } catch (e) {}
    if (streakDigits) streakDigits.textContent = String(num);
  }

  if (streakDigits) {
    streakDigits.textContent = String(getStreak());
  }

  function getArchiveEntries() {
    try {
      const data = localStorage.getItem(PROGRESS_ARCHIVE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setArchiveEntries(entries) {
    try {
      localStorage.setItem(PROGRESS_ARCHIVE_KEY, JSON.stringify(entries));
    } catch (e) {}
  }

  const CLAIMED_REWARDS_KEY = 'akku_claimed_rewards_v2';

  function getClaimedRewards() {
    try {
      const data = localStorage.getItem(CLAIMED_REWARDS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setClaimedRewards(rewards) {
    try {
      localStorage.setItem(CLAIMED_REWARDS_KEY, JSON.stringify(rewards));
      if (typeof broadcastSyncState === 'function') {
        broadcastSyncState();
      }
    } catch (e) {}
  }

  function logProgressEvent(domain, note = '', subEmotions = ['Completed'], somaticSensations = []) {
    const entries = getArchiveEntries();
    const formattedDate = getFormattedDateTime();

    const newEntry = {
      id: 'prog_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      timestamp: formattedDate,
      domain: domain,
      subEmotions: Array.isArray(subEmotions) ? subEmotions : [subEmotions],
      somaticSensations: Array.isArray(somaticSensations) ? somaticSensations : [],
      note: note
    };

    entries.unshift(newEntry);
    setArchiveEntries(entries);
    renderArchiveLedger();
    return newEntry;
  }

  // Central Completion Handler: Increments streak, animates streak counter, plays baby giggle chime, comforts Akku, and logs event
  function recordActivityCompleted(activityName, note = '', subEmotions = ['Accomplished'], somaticSensations = []) {
    // 1. Increment streak
    const newStreak = getStreak() + 1;
    setStreak(newStreak);

    // 2. Animate streak counter with pulse
    if (streakDigits) {
      streakDigits.classList.remove('streak-bump');
      void streakDigits.offsetWidth;
      streakDigits.classList.add('streak-bump');
      setTimeout(() => {
        if (streakDigits) streakDigits.classList.remove('streak-bump');
      }, 700);
    }

    // 3. Play cute cheerful baby giggle / coo
    playCuteBabySound();

    // 4. Comfort Akku if currently distressed
    comfortAkshat();

    // 5. Record to central ledger
    logProgressEvent(activityName, note, subEmotions, somaticSensations);

    // 6. Automatically sync across devices
    if (typeof broadcastSyncState === 'function') {
      broadcastSyncState();
    }

    return newStreak;
  }

  function getNotesToMeha() {
    try {
      const data = localStorage.getItem(NOTES_MEHA_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setNotesToMeha(notes) {
    try {
      localStorage.setItem(NOTES_MEHA_KEY, JSON.stringify(notes));
    } catch (e) {}
  }

  function addNoteToMeha(text) {
    if (!text || !text.trim()) return null;
    const notes = getNotesToMeha();
    const formattedDate = getFormattedDateTime();

    const newNote = {
      id: 'note_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      timestamp: formattedDate,
      text: text.trim()
    };

    notes.unshift(newNote);
    setNotesToMeha(notes);
    renderNotesList();

    // Also log event to the central progress ledger and increment streak
    recordActivityCompleted('Love Note to Meha', `"${text.trim()}"`, ['Dear Mehu']);
    return newNote;
  }

  function renderArchiveLedger() {
    const entries = getArchiveEntries();

    // 0. Compute Analytics & Statistics
    const totalCount = entries.length;
    const safeStreak = getStreak();
    const notesList = getNotesToMeha();
    const notesCount = notesList.length;

    // Today count
    const now = new Date();
    const todayStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const todayCount = entries.filter(e => e.timestamp && e.timestamp.startsWith(todayStr)).length;

    // Focus Lock Box calculations
    let totalFocusMins = 0;
    let lockboxSessionsCount = 0;
    entries.forEach(e => {
      if (e.domain && (e.domain.includes('Lock Box') || e.domain.includes('Phone in Lock Box'))) {
        lockboxSessionsCount++;
        const match = e.note && e.note.match(/(\d+)\s*minute/i);
        if (match) {
          totalFocusMins += parseInt(match[1], 10);
        } else {
          totalFocusMins += 15;
        }
      }
    });

    const formatMinsDisplay = (mins) => {
      if (mins >= 60) {
        const h = Math.floor(mins / 60);
        const rem = mins % 60;
        return rem > 0 ? `${h}h ${rem}m` : `${h}h`;
      }
      return `${mins}m`;
    };

    // Category breakdown
    const categories = {
      cbt: {
        name: 'CBT Action Steps',
        color: '#C98E58',
        count: entries.filter(e =>
          (e.subEmotions && e.subEmotions.includes('CBT Action Step')) ||
          ['Assignments', 'Tony (Manager)', '2026 is Ending', 'Missing My Girlfriend', 'Need to Clean House'].some(k => e.domain.startsWith(k))
        ).length
      },
      tactile: {
        name: 'Tactile Anchoring',
        color: '#2FB896',
        count: entries.filter(e =>
          e.domain.includes('Preventing Damage') ||
          e.domain.includes('Mechanical Switch') ||
          e.domain.includes('Urge Surfer') ||
          e.domain.includes('Bubble Pop') ||
          (e.subEmotions && (e.subEmotions.includes('Tactile Calming') || e.subEmotions.includes('Impulse Surfing') || e.subEmotions.includes('Physical Anchoring')))
        ).length
      },
      calming: {
        name: 'Autonomic Regulation',
        color: '#00A5B5',
        count: entries.filter(e =>
          e.domain.startsWith('Calming Timer') ||
          (e.subEmotions && e.subEmotions.includes('Autonomic Regulation'))
        ).length
      },
      feelings: {
        name: 'Feelings Reflections',
        color: '#8F6E9F',
        count: entries.filter(e =>
          (e.subEmotions && e.subEmotions.includes('Feelings Wheel')) ||
          (feelingsWheelData.some(f => e.domain.startsWith(f.core)) && !(e.subEmotions && e.subEmotions.includes('CBT Action Step')))
        ).length
      },
      lockbox: {
        name: 'Phone Lock Box',
        color: '#686DAE',
        count: entries.filter(e =>
          (e.domain && (e.domain.includes('Lock Box') || e.domain.includes('Phone in Lock Box'))) ||
          (e.subEmotions && e.subEmotions.includes('Phone Lock Box'))
        ).length
      },
      notes: {
        name: 'Notes to Meha',
        color: '#BC6379',
        count: entries.filter(e => e.domain === 'Love Note to Meha' || (e.subEmotions && e.subEmotions.includes('Dear Mehu'))).length
      }
    };

    // Update Top-Right Drawer Metric Cards
    const statTotalLogged = document.getElementById('statTotalLogged');
    const statTodayCount = document.getElementById('statTodayCount');
    const statSafeStreak = document.getElementById('statSafeStreak');
    const statFocusTime = document.getElementById('statFocusTime');
    const statLockboxSessions = document.getElementById('statLockboxSessions');
    const statNotesCount = document.getElementById('statNotesCount');
    const statsLastUpdated = document.getElementById('statsLastUpdated');

    if (statTotalLogged) statTotalLogged.textContent = String(totalCount);
    if (statTodayCount) statTodayCount.textContent = `${todayCount} recorded today`;
    if (statSafeStreak) statSafeStreak.textContent = String(safeStreak);
    if (statFocusTime) statFocusTime.textContent = formatMinsDisplay(totalFocusMins);
    if (statLockboxSessions) statLockboxSessions.textContent = `${lockboxSessionsCount} sessions`;
    if (statNotesCount) statNotesCount.textContent = String(notesCount);
    if (statsLastUpdated) statsLastUpdated.textContent = totalCount > 0 ? `${totalCount} events logged` : 'Live tracking';

    // Update Section 04 Archive Ribbon
    const archStatTotal = document.getElementById('archStatTotal');
    const archStatStreak = document.getElementById('archStatStreak');
    const archStatFocus = document.getElementById('archStatFocus');
    const archStatNotes = document.getElementById('archStatNotes');
    if (archStatTotal) archStatTotal.textContent = String(totalCount);
    if (archStatStreak) archStatStreak.textContent = String(safeStreak);
    if (archStatFocus) archStatFocus.textContent = formatMinsDisplay(totalFocusMins);
    if (archStatNotes) archStatNotes.textContent = String(notesCount);

    // Update Segmented Distribution Bar & Legend
    const statsSegmentedBar = document.getElementById('statsSegmentedBar');
    const statsLegendGrid = document.getElementById('statsLegendGrid');
    const statsDominantCategory = document.getElementById('statsDominantCategory');

    const catSum = Object.values(categories).reduce((sum, c) => sum + c.count, 0);

    if (statsSegmentedBar && statsLegendGrid) {
      statsSegmentedBar.innerHTML = '';
      statsLegendGrid.innerHTML = '';

      if (catSum === 0) {
        if (statsDominantCategory) statsDominantCategory.textContent = 'Awaiting entries';
        const emptySeg = document.createElement('div');
        emptySeg.className = 'stats-bar-segment';
        emptySeg.style.width = '100%';
        emptySeg.style.background = 'rgba(26, 26, 26, 0.08)';
        statsSegmentedBar.appendChild(emptySeg);
      } else {
        let maxCat = null;
        Object.values(categories).forEach(cat => {
          if (!maxCat || cat.count > maxCat.count) maxCat = cat;
        });
        if (statsDominantCategory && maxCat && maxCat.count > 0) {
          statsDominantCategory.textContent = `Most active: ${maxCat.name}`;
        }

        Object.values(categories).forEach(cat => {
          if (cat.count > 0) {
            const pct = ((cat.count / catSum) * 100).toFixed(1);

            const seg = document.createElement('div');
            seg.className = 'stats-bar-segment';
            seg.style.width = `${pct}%`;
            seg.style.backgroundColor = cat.color;
            seg.title = `${cat.name}: ${cat.count} (${pct}%)`;
            statsSegmentedBar.appendChild(seg);

            const chip = document.createElement('div');
            chip.className = 'stats-legend-chip';
            chip.innerHTML = `
              <span class="stats-legend-dot" style="background-color: ${cat.color};"></span>
              <span>${escapeHtml(cat.name)}</span>
              <span class="stats-chip-count">${cat.count} (${pct}%)</span>
            `;
            statsLegendGrid.appendChild(chip);
          }
        });
      }
    }

    // Update top nav badge and drawer badge to 100-goal progress
    const progressCountBadge = document.getElementById('progressCountBadge');
    const drawerProgressBadge = document.getElementById('drawerProgressBadge');
    const badgeText = `${entries.length} / 100`;
    if (progressCountBadge) progressCountBadge.textContent = badgeText;
    if (drawerProgressBadge) drawerProgressBadge.textContent = badgeText;

    // 1. Render in Section 04 Feelings Wheel Ledger
    const archiveList = document.getElementById('archiveEntriesList');
    if (archiveList) {
      if (entries.length === 0) {
        archiveList.innerHTML = `
          <div class="empty-archive-msg">
            The ledger is awaiting your first reflection. Select a domain above to record an affective observation.
          </div>
        `;
      } else {
        archiveList.innerHTML = '';
        entries.forEach(entry => {
          const row = document.createElement('div');
          row.className = 'archive-entry-row';

          const subTagsHtml = entry.subEmotions && entry.subEmotions.length > 0
            ? entry.subEmotions.map(sub => `<span class="entry-tag-item">${escapeHtml(sub)}</span>`).join('')
            : '<span class="entry-tag-item" style="color: var(--muted);">Completed</span>';

          const somaticTagsHtml = entry.somaticSensations && entry.somaticSensations.length > 0
            ? `<div class="entry-somatic-item">Physical sensations: ${escapeHtml(entry.somaticSensations.join(', '))}</div>`
            : '';

          const noteHtml = entry.note
            ? `<blockquote class="entry-note-quote">"${escapeHtml(entry.note)}"</blockquote>`
            : '';

          row.innerHTML = `
            <div class="entry-timestamp">${escapeHtml(entry.timestamp)}</div>
            <div class="entry-detail-group">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <strong style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--fg); font-weight: 500;">${escapeHtml(entry.domain)}</strong>
                <button class="archive-delete-btn" data-id="${entry.id}" style="background: none; border: none; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted); cursor: pointer;" title="Remove entry">Delete</button>
              </div>
              <div class="entry-tags-row">
                ${subTagsHtml}
              </div>
              ${somaticTagsHtml}
              ${noteHtml}
            </div>
          `;

          const delBtn = row.querySelector('.archive-delete-btn');
          if (delBtn) {
            delBtn.addEventListener('click', () => {
              const updated = getArchiveEntries().filter(e => e.id !== entry.id);
              setArchiveEntries(updated);
              playClick(800);
              renderArchiveLedger();
            });
          }

          archiveList.appendChild(row);
        });
      }
    }

    // 2. Render in Top-Right Slide-Over Drawer Progress Ledger
    const drawerList = document.getElementById('drawerProgressList');
    if (drawerList) {
      if (entries.length === 0) {
        drawerList.innerHTML = `
          <div class="empty-archive-msg">
            No activities recorded yet. When you complete action steps, surf urges, pop bubbles, or take mindful breaths, they are automatically logged here with exact dates and times.
          </div>
        `;
      } else {
        drawerList.innerHTML = '';
        entries.forEach(entry => {
          const card = document.createElement('div');
          card.className = 'drawer-entry-card';

          const tag = (entry.subEmotions && entry.subEmotions[0]) ? entry.subEmotions[0] : 'Progress';
          const somaticHtml = (entry.somaticSensations && entry.somaticSensations.length > 0)
            ? `<div style="font-size: 11.5px; color: var(--muted); margin-top: 0.4rem; font-style: italic;">Sensations: ${escapeHtml(entry.somaticSensations.join(', '))}</div>`
            : '';

          card.innerHTML = `
            <div class="drawer-entry-meta">
              <span class="drawer-entry-time">${escapeHtml(entry.timestamp)}</span>
              <span class="drawer-entry-badge">${escapeHtml(tag)}</span>
            </div>
            <h5 class="drawer-entry-title">${escapeHtml(entry.domain)}</h5>
            ${entry.note ? `<p class="drawer-entry-note">${escapeHtml(entry.note)}</p>` : ''}
            ${somaticHtml}
            <button class="drawer-entry-delete" data-id="${entry.id}">Remove</button>
          `;

          const delBtn = card.querySelector('.drawer-entry-delete');
          if (delBtn) {
            delBtn.addEventListener('click', () => {
              const updated = getArchiveEntries().filter(e => e.id !== entry.id);
              setArchiveEntries(updated);
              playClick(800);
              renderArchiveLedger();
            });
          }

          drawerList.appendChild(card);
        });
      }
    }

    // 3. Render 100-Task Reward Goal Trackers
    renderRewardGoalTracker();
  }

  // 100-Task Reward System & Milestone Goal Engine
  function renderRewardGoalTracker() {
    const entries = getArchiveEntries();
    const totalTasks = entries.length;
    const claimedRewards = getClaimedRewards();

    // 100-Task Milestone computations
    const totalMilestonesEarned = Math.floor(totalTasks / 100);
    const unclaimedCount = Math.max(0, totalMilestonesEarned - claimedRewards.length);

    // Current cycle progress (0-99 tasks, or 100 when exactly at a milestone)
    let cycleTasks = totalTasks % 100;
    if (totalTasks > 0 && cycleTasks === 0) {
      cycleTasks = 100;
    }
    const percent = Math.min(100, Math.round((cycleTasks / 100) * 100));
    const tasksRemaining = Math.max(0, 100 - cycleTasks);

    const containers = [
      document.getElementById('drawerRewardTrackerCard'),
      document.getElementById('inpageRewardTrackerCard')
    ].filter(Boolean);

    if (containers.length === 0) return;

    containers.forEach(container => {
      let subText = '';
      let statusLeft = '';
      if (totalTasks >= 100) {
        if (unclaimedCount > 0) {
          subText = `Milestone reached! You completed ${totalTasks} mindful tasks and earned a reward for yourself of your choosing.`;
          statusLeft = `<span class="reward-remaining-cue" style="color: var(--gold); font-weight: 600;">Reward ready to claim!</span>`;
        } else {
          subText = `${claimedRewards.length} reward${claimedRewards.length > 1 ? 's' : ''} earned! Working toward Reward #${claimedRewards.length + 1}: ${tasksRemaining} task${tasksRemaining === 1 ? '' : 's'} remaining.`;
          statusLeft = `<span class="reward-remaining-cue">${tasksRemaining} more task${tasksRemaining === 1 ? '' : 's'} to next reward</span>`;
        }
      } else {
        subText = `Complete 100 mindful tasks across your sanctuary to earn a reward for yourself of your choosing.`;
        statusLeft = `<span class="reward-remaining-cue">${tasksRemaining} task${tasksRemaining === 1 ? '' : 's'} remaining to earn your reward</span>`;
      }

      const showClaimCard = (totalTasks >= 100 || unclaimedCount > 0);
      const unlockedCardHtml = showClaimCard ? `
        <div class="reward-unlocked-card">
          <div class="reward-unlocked-pill">Milestone Unlocked</div>
          <h4 class="reward-unlocked-title">You earned a reward for yourself!</h4>
          <p class="reward-unlocked-desc">You completed 100 mindful tasks across your sanctuary. What reward do you choose for yourself (e.g. favorite dinner, relaxing massage, weekend trip, new game)?</p>
          <div class="reward-claim-row">
            <input type="text" class="reward-choice-input" placeholder="Type your chosen reward..." />
            <button class="luxury-action-btn claim-reward-btn">Claim Reward</button>
          </div>
          <div class="reward-claim-feedback" style="display: none;"></div>
        </div>
      ` : '';

      const claimedListHtml = `
        <div class="claimed-rewards-box">
          <div class="claimed-rewards-header">
            <span class="claimed-rewards-label">Claimed Rewards</span>
            <span class="claimed-rewards-count">${claimedRewards.length} earned</span>
          </div>
          <div class="claimed-rewards-list">
            ${claimedRewards.length === 0 ? `
              <div style="font-size: 11.5px; color: var(--muted); font-style: italic; padding: 0.4rem 0;">
                Reach 100 tasks in your reward basket to claim your first reward!
              </div>
            ` : claimedRewards.map(r => `
              <div class="claimed-reward-item">
                <div class="claimed-reward-item-left">
                  <span class="claimed-reward-name">${escapeHtml(r.reward)}</span>
                  <span class="claimed-reward-time">${escapeHtml(r.timestamp)}</span>
                </div>
                <div class="claimed-reward-item-right">
                  <span class="claimed-reward-milestone-pill">${escapeHtml(r.milestoneTag || '100 Tasks')}</span>
                  <button class="claimed-reward-del-btn" data-id="${r.id}" title="Remove reward entry">Delete</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      container.innerHTML = `
        <div class="reward-tracker-header">
          <span class="reward-tracker-tag">100-Task Milestone Goal</span>
          <span class="reward-badge-chip">${totalTasks} / 100 tasks completed</span>
        </div>
        <h3 class="reward-tracker-title">Earn a reward of your choice</h3>
        <p class="reward-tracker-sub">${subText}</p>

        <div class="reward-progress-track">
          <div class="reward-progress-fill" style="width: ${percent}%;"></div>
        </div>
        <div class="reward-milestones-row">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100 Goal</span>
        </div>

        <div class="reward-status-summary">
          ${statusLeft}
          <span style="font-size: 11px; color: var(--muted); font-family: var(--font-sans);">${percent}% completed</span>
        </div>

        ${unlockedCardHtml}
        ${claimedListHtml}
      `;

      // Wire Claim Button
      const claimBtn = container.querySelector('.claim-reward-btn');
      const claimInput = container.querySelector('.reward-choice-input');
      const claimFeedback = container.querySelector('.reward-claim-feedback');
      if (claimBtn && claimInput) {
        claimBtn.addEventListener('click', () => {
          const val = claimInput.value.trim();
          if (!val) {
            claimInput.focus();
            return;
          }
          const currentClaimed = getClaimedRewards();
          const milestoneNum = (currentClaimed.length + 1) * 100;
          const newClaim = {
            id: 'reward_' + Date.now(),
            reward: val,
            timestamp: getFormattedDateTime(),
            milestoneTag: `${milestoneNum} Tasks`
          };
          setClaimedRewards([...currentClaimed, newClaim]);
          playCuteBabySound();
          updateSpeech(`You earned your reward: "${val}"! Akku, I am so deeply proud of you for completing 100 mindful tasks!`);
          if (claimFeedback) {
            claimFeedback.textContent = `Reward claimed: "${val}"! Enjoy your treat!`;
            claimFeedback.style.display = 'block';
          }
          renderRewardGoalTracker();
        });

        claimInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            claimBtn.click();
          }
        });
      }

      // Wire Delete buttons
      const delBtns = container.querySelectorAll('.claimed-reward-del-btn');
      delBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const rId = btn.dataset.id;
          const currentClaimed = getClaimedRewards();
          const updated = currentClaimed.filter(r => r.id !== rId);
          setClaimedRewards(updated);
          playClick(800);
          renderRewardGoalTracker();
        });
      });
    });
  }

  function renderNotesList() {
    const notes = getNotesToMeha();
    const notesCountBadge = document.getElementById('notesCountBadge');
    const drawerNotesBadge = document.getElementById('drawerNotesBadge');
    if (notesCountBadge) notesCountBadge.textContent = String(notes.length);
    if (drawerNotesBadge) drawerNotesBadge.textContent = String(notes.length);

    const notesList = document.getElementById('drawerNotesList');
    if (!notesList) return;

    if (notes.length === 0) {
      notesList.innerHTML = `
        <div class="empty-archive-msg">
          No love notes saved yet. Write your first sweet thought or reminder for Mehu above, and it will be preserved here with exact timestamps.
        </div>
      `;
      return;
    }

    notesList.innerHTML = '';
    notes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'drawer-entry-card';

      card.innerHTML = `
        <div class="drawer-entry-meta">
          <span class="drawer-entry-time">${escapeHtml(note.timestamp)}</span>
          <span class="drawer-entry-badge">Dear Mehu</span>
        </div>
        <p class="drawer-entry-note">${escapeHtml(note.text)}</p>
        <button class="drawer-entry-delete" data-id="${note.id}">Remove</button>
      `;

      const delBtn = card.querySelector('.drawer-entry-delete');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          const updated = getNotesToMeha().filter(n => n.id !== note.id);
          setNotesToMeha(updated);
          playClick(800);
          renderNotesList();
        });
      }

      notesList.appendChild(card);
    });
  }

  // Slide-Over Drawer Navigation
  const topProgressBtn = document.getElementById('topProgressBtn');
  const topNotesBtn = document.getElementById('topNotesBtn');
  const topLockboxBtn = document.getElementById('topLockboxBtn');
  const topSyncBtn = document.getElementById('topSyncBtn');
  const inpageSyncDeviceBtn = document.getElementById('inpageSyncDeviceBtn');
  const lockboxStatusBadge = document.getElementById('lockboxStatusBadge');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerTabProgress = document.getElementById('drawerTabProgress');
  const drawerTabNotes = document.getElementById('drawerTabNotes');
  const drawerTabLockbox = document.getElementById('drawerTabLockbox');
  const drawerTabSync = document.getElementById('drawerTabSync');
  const drawerPanelProgress = document.getElementById('drawerPanelProgress');
  const drawerPanelNotes = document.getElementById('drawerPanelNotes');
  const drawerPanelLockbox = document.getElementById('drawerPanelLockbox');
  const drawerPanelSync = document.getElementById('drawerPanelSync');
  const drawerNoteInput = document.getElementById('drawerNoteInput');
  const saveDrawerNoteBtn = document.getElementById('saveDrawerNoteBtn');
  const drawerNoteSavedNotice = document.getElementById('drawerNoteSavedNotice');
  const drawerClearProgressBtn = document.getElementById('drawerClearProgressBtn');
  const drawerClearNotesBtn = document.getElementById('drawerClearNotesBtn');

  function openDrawer(tabName = 'progress') {
    if (!drawerOverlay) return;
    drawerOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    switchDrawerTab(tabName);
    playClick(1000);
  }

  function closeDrawer() {
    if (!drawerOverlay) return;
    drawerOverlay.style.display = 'none';
    document.body.style.overflow = '';
    playClick(800);
  }

  function switchDrawerTab(tabName) {
    if (tabName === 'progress') {
      if (drawerTabProgress) drawerTabProgress.classList.add('active');
      if (drawerTabNotes) drawerTabNotes.classList.remove('active');
      if (drawerTabLockbox) drawerTabLockbox.classList.remove('active');
      if (drawerTabSync) drawerTabSync.classList.remove('active');
      if (drawerPanelProgress) drawerPanelProgress.classList.add('active');
      if (drawerPanelNotes) drawerPanelNotes.classList.remove('active');
      if (drawerPanelLockbox) drawerPanelLockbox.classList.remove('active');
      if (drawerPanelSync) drawerPanelSync.classList.remove('active');
      renderArchiveLedger();
    } else if (tabName === 'notes') {
      if (drawerTabProgress) drawerTabProgress.classList.remove('active');
      if (drawerTabNotes) drawerTabNotes.classList.add('active');
      if (drawerTabLockbox) drawerTabLockbox.classList.remove('active');
      if (drawerTabSync) drawerTabSync.classList.remove('active');
      if (drawerPanelProgress) drawerPanelProgress.classList.remove('active');
      if (drawerPanelNotes) drawerPanelNotes.classList.add('active');
      if (drawerPanelLockbox) drawerPanelLockbox.classList.remove('active');
      if (drawerPanelSync) drawerPanelSync.classList.remove('active');
      renderNotesList();
      if (drawerNoteInput) {
        setTimeout(() => drawerNoteInput.focus(), 150);
      }
    } else if (tabName === 'lockbox') {
      if (drawerTabProgress) drawerTabProgress.classList.remove('active');
      if (drawerTabNotes) drawerTabNotes.classList.remove('active');
      if (drawerTabLockbox) drawerTabLockbox.classList.add('active');
      if (drawerTabSync) drawerTabSync.classList.remove('active');
      if (drawerPanelProgress) drawerPanelProgress.classList.remove('active');
      if (drawerPanelNotes) drawerPanelNotes.classList.remove('active');
      if (drawerPanelLockbox) drawerPanelLockbox.classList.add('active');
      if (drawerPanelSync) drawerPanelSync.classList.remove('active');
      updateLockboxDisplay();
    } else if (tabName === 'sync') {
      if (drawerTabProgress) drawerTabProgress.classList.remove('active');
      if (drawerTabNotes) drawerTabNotes.classList.remove('active');
      if (drawerTabLockbox) drawerTabLockbox.classList.remove('active');
      if (drawerTabSync) drawerTabSync.classList.add('active');
      if (drawerPanelProgress) drawerPanelProgress.classList.remove('active');
      if (drawerPanelNotes) drawerPanelNotes.classList.remove('active');
      if (drawerPanelLockbox) drawerPanelLockbox.classList.remove('active');
      if (drawerPanelSync) drawerPanelSync.classList.add('active');
      if (typeof renderSyncPanel === 'function') {
        renderSyncPanel();
      }
    }
  }

  if (topProgressBtn) {
    topProgressBtn.addEventListener('click', () => openDrawer('progress'));
  }

  if (topNotesBtn) {
    topNotesBtn.addEventListener('click', () => openDrawer('notes'));
  }

  if (topLockboxBtn) {
    topLockboxBtn.addEventListener('click', () => openDrawer('lockbox'));
  }

  if (topSyncBtn) {
    topSyncBtn.addEventListener('click', () => openDrawer('sync'));
  }

  if (inpageSyncDeviceBtn) {
    inpageSyncDeviceBtn.addEventListener('click', () => openDrawer('sync'));
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOverlay && drawerOverlay.style.display !== 'none') {
      closeDrawer();
    }
  });

  if (drawerTabProgress) {
    drawerTabProgress.addEventListener('click', () => {
      switchDrawerTab('progress');
      playClick(1100);
    });
  }

  if (drawerTabNotes) {
    drawerTabNotes.addEventListener('click', () => {
      switchDrawerTab('notes');
      playClick(1100);
    });
  }

  if (drawerTabLockbox) {
    drawerTabLockbox.addEventListener('click', () => {
      switchDrawerTab('lockbox');
      playClick(1100);
    });
  }

  if (drawerTabSync) {
    drawerTabSync.addEventListener('click', () => {
      switchDrawerTab('sync');
      playClick(1100);
    });
  }

  if (saveDrawerNoteBtn && drawerNoteInput) {
    saveDrawerNoteBtn.addEventListener('click', () => {
      const text = drawerNoteInput.value.trim();
      if (!text) {
        drawerNoteInput.focus();
        return;
      }
      addNoteToMeha(text);
      drawerNoteInput.value = '';
      if (drawerNoteSavedNotice) {
        drawerNoteSavedNotice.style.display = 'inline-block';
        setTimeout(() => {
          drawerNoteSavedNotice.style.display = 'none';
        }, 2500);
      }
    });
  }

  if (drawerClearProgressBtn) {
    drawerClearProgressBtn.addEventListener('click', () => {
      if (confirm('Clear all entries from your reward basket?')) {
        setArchiveEntries([]);
        playClick(700);
        renderArchiveLedger();
      }
    });
  }

  if (drawerClearNotesBtn) {
    drawerClearNotesBtn.addEventListener('click', () => {
      if (confirm('Clear all saved love notes to Meha?')) {
        setNotesToMeha([]);
        playClick(700);
        renderNotesList();
      }
    });
  }

  // Data Resilience: Export & Restore Backup Engine
  const exportBackupBtn = document.getElementById('exportBackupBtn');
  const inpageExportBackupBtn = document.getElementById('inpageExportBackupBtn');
  const importBackupBtn = document.getElementById('importBackupBtn');
  const backupFileInput = document.getElementById('backupFileInput');

  if (exportBackupBtn) {
    exportBackupBtn.addEventListener('click', () => {
      const backupData = {
        app: 'Akku Needs ADHD Sanctuary',
        version: 2,
        exportedAt: new Date().toISOString(),
        streak: getStreak(),
        progressLedger: getArchiveEntries(),
        notesToMeha: getNotesToMeha(),
        cbtProgress: getCbtProgress(),
        claimedRewards: getClaimedRewards()
      };

      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateTag = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `akku-sanctuary-backup-${dateTag}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      playCuteBabySound();
      updateSpeech("Backup exported safely! Keep that file safe.");
    });
  }

  if (inpageExportBackupBtn && exportBackupBtn) {
    inpageExportBackupBtn.addEventListener('click', () => {
      exportBackupBtn.click();
    });
  }

  if (importBackupBtn && backupFileInput) {
    importBackupBtn.addEventListener('click', () => {
      backupFileInput.click();
    });

    backupFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (!parsed || (!parsed.progressLedger && !parsed.notesToMeha)) {
            alert('Invalid backup file format.');
            return;
          }

          if (confirm('Restore progress and notes from this backup file? Existing entries will be combined safely.')) {
            // Restore streak
            if (typeof parsed.streak === 'number') {
              setStreak(Math.max(getStreak(), parsed.streak));
            }

            // Restore progress entries (merge without duplicate IDs)
            if (Array.isArray(parsed.progressLedger)) {
              const current = getArchiveEntries();
              const existingIds = new Set(current.map(item => item.id));
              parsed.progressLedger.forEach(item => {
                if (!existingIds.has(item.id)) {
                  current.push(item);
                }
              });
              setArchiveEntries(current);
            }

            // Restore notes to Meha
            if (Array.isArray(parsed.notesToMeha)) {
              const currentNotes = getNotesToMeha();
              const existingNoteIds = new Set(currentNotes.map(n => n.id));
              parsed.notesToMeha.forEach(item => {
                if (!existingNoteIds.has(item.id)) {
                  currentNotes.push(item);
                }
              });
              setNotesToMeha(currentNotes);
            }

            // Restore CBT progress
            if (parsed.cbtProgress && typeof parsed.cbtProgress === 'object') {
              const curCbt = getCbtProgress();
              const mergedCbt = Object.assign({}, curCbt, parsed.cbtProgress);
              setCbtProgress(mergedCbt);
            }

            // Restore claimed rewards
            if (Array.isArray(parsed.claimedRewards)) {
              const currentClaimed = getClaimedRewards();
              const existingClaimedIds = new Set(currentClaimed.map(r => r.id));
              parsed.claimedRewards.forEach(item => {
                if (!existingClaimedIds.has(item.id)) {
                  currentClaimed.push(item);
                }
              });
              setClaimedRewards(currentClaimed);
            }

            renderArchiveLedger();
            renderNotesList();
            playCuteBabySound();
            updateSpeech("Backup restored successfully! All your progress and notes are back.");
          }
        } catch (err) {
          alert('Could not read the backup file: ' + err.message);
        }
        backupFileInput.value = '';
      };
      reader.readAsText(file);
    });
  }

  // Request persistent browser storage if supported
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }

  // ==========================================================================
  // Phone Lock Box Timer Engine (Cognitive RAM Protection)
  // ==========================================================================
  const vaultDial = document.getElementById('vaultDial');
  const vaultStatusDot = document.getElementById('vaultStatusDot');
  const vaultStatusLabel = document.getElementById('vaultStatusLabel');
  const vaultTimerDisplay = document.getElementById('vaultTimerDisplay');
  const vaultSubcue = document.getElementById('vaultSubcue');
  const drawerLockboxBadge = document.getElementById('drawerLockboxBadge');
  const startLockboxBtn = document.getElementById('startLockboxBtn');
  const cancelLockboxBtn = document.getElementById('cancelLockboxBtn');
  const lockboxPresetBtns = document.querySelectorAll('.lockbox-preset-btn');
  const customMinsInput = document.getElementById('customMinsInput');
  const setCustomMinsBtn = document.getElementById('setCustomMinsBtn');

  let lockboxDurationMins = 15;
  let lockboxRemainingSecs = 15 * 60;
  let lockboxInterval = null;
  let isLockboxRunning = false;

  function formatLockboxTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateLockboxDisplay() {
    if (vaultTimerDisplay) {
      vaultTimerDisplay.textContent = formatLockboxTime(lockboxRemainingSecs);
    }
    if (isLockboxRunning) {
      const timeStr = formatLockboxTime(lockboxRemainingSecs);
      if (lockboxStatusBadge) {
        lockboxStatusBadge.textContent = timeStr;
        lockboxStatusBadge.style.color = 'var(--gold)';
      }
      if (drawerLockboxBadge) {
        drawerLockboxBadge.textContent = timeStr;
        drawerLockboxBadge.style.color = 'var(--gold)';
      }
    }
  }

  function setLockboxDuration(mins) {
    if (isLockboxRunning) return;
    mins = Math.max(1, Math.min(180, parseInt(mins, 10) || 15));
    lockboxDurationMins = mins;
    lockboxRemainingSecs = mins * 60;
    updateLockboxDisplay();

    lockboxPresetBtns.forEach(btn => {
      const bMins = parseInt(btn.dataset.mins, 10);
      if (bMins === mins) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (vaultStatusLabel) vaultStatusLabel.textContent = 'VAULT UNLOCKED // STANDBY';
    if (vaultStatusDot) vaultStatusDot.classList.remove('active');
    if (vaultSubcue) vaultSubcue.textContent = 'Select duration and seal phone away';
    if (startLockboxBtn) startLockboxBtn.textContent = 'Lock Phone in Vault';
    if (cancelLockboxBtn) cancelLockboxBtn.style.display = 'none';
  }

  function startLockboxTimer() {
    if (isLockboxRunning) {
      pauseLockboxTimer();
      return;
    }

    if (lockboxRemainingSecs <= 0) {
      lockboxRemainingSecs = lockboxDurationMins * 60;
    }

    isLockboxRunning = true;
    playVaultLockSound(true);

    if (vaultDial) {
      vaultDial.style.transform = 'rotate(180deg)';
    }
    if (vaultStatusDot) {
      vaultStatusDot.classList.add('active');
    }
    if (vaultStatusLabel) {
      vaultStatusLabel.textContent = 'VAULT SEALED // DISTRACTIONS BLOCKED';
    }
    if (vaultSubcue) {
      vaultSubcue.textContent = 'Phone is locked in vault. Cognitive focus active.';
    }
    if (startLockboxBtn) {
      startLockboxBtn.textContent = 'Pause Focus Timer';
    }
    if (cancelLockboxBtn) {
      cancelLockboxBtn.style.display = 'block';
    }

    updateLockboxDisplay();

    lockboxInterval = setInterval(() => {
      if (lockboxRemainingSecs <= 1) {
        completeLockboxTimer();
        return;
      }
      lockboxRemainingSecs--;
      updateLockboxDisplay();
    }, 1000);
  }

  function pauseLockboxTimer() {
    isLockboxRunning = false;
    clearInterval(lockboxInterval);
    if (startLockboxBtn) {
      startLockboxBtn.textContent = 'Resume Focus Timer';
    }
    if (vaultStatusLabel) {
      vaultStatusLabel.textContent = 'VAULT SEALED // TIMER PAUSED';
    }
    if (lockboxStatusBadge) {
      lockboxStatusBadge.textContent = 'Paused';
    }
    if (drawerLockboxBadge) {
      drawerLockboxBadge.textContent = 'Paused';
    }
    playClick(900);
  }

  function resetLockboxStandby() {
    isLockboxRunning = false;
    clearInterval(lockboxInterval);
    lockboxRemainingSecs = lockboxDurationMins * 60;
    updateLockboxDisplay();

    if (vaultDial) {
      vaultDial.style.transform = 'rotate(0deg)';
    }
    if (vaultStatusDot) {
      vaultStatusDot.classList.remove('active');
    }
    if (vaultStatusLabel) {
      vaultStatusLabel.textContent = 'VAULT UNLOCKED // STANDBY';
    }
    if (vaultSubcue) {
      vaultSubcue.textContent = 'Select duration and seal phone away';
    }
    if (startLockboxBtn) {
      startLockboxBtn.textContent = 'Lock Phone in Vault';
    }
    if (cancelLockboxBtn) {
      cancelLockboxBtn.style.display = 'none';
    }
    if (lockboxStatusBadge) {
      lockboxStatusBadge.textContent = 'Safe';
      lockboxStatusBadge.style.color = '';
    }
    if (drawerLockboxBadge) {
      drawerLockboxBadge.textContent = 'Ready';
      drawerLockboxBadge.style.color = '';
    }
    playVaultLockSound(false);
  }

  function completeLockboxTimer() {
    isLockboxRunning = false;
    clearInterval(lockboxInterval);
    lockboxRemainingSecs = 0;
    updateLockboxDisplay();

    if (vaultDial) {
      vaultDial.style.transform = 'rotate(0deg)';
    }
    if (vaultStatusDot) {
      vaultStatusDot.classList.remove('active');
    }
    if (vaultStatusLabel) {
      vaultStatusLabel.textContent = 'VAULT UNLOCKED // SESSION COMPLETE';
    }
    if (vaultSubcue) {
      vaultSubcue.textContent = 'Congratulations! Prefrontal bandwidth protected.';
    }
    if (startLockboxBtn) {
      startLockboxBtn.textContent = 'Lock Phone Again';
    }
    if (cancelLockboxBtn) {
      cancelLockboxBtn.style.display = 'none';
    }
    if (lockboxStatusBadge) {
      lockboxStatusBadge.textContent = 'Done!';
      lockboxStatusBadge.style.color = 'var(--gold)';
    }
    if (drawerLockboxBadge) {
      drawerLockboxBadge.textContent = 'Done';
      drawerLockboxBadge.style.color = 'var(--gold)';
    }

    playVaultLockSound(false);
    recordActivityCompleted('Phone in Lock Box', `Protected ${lockboxDurationMins} minutes of cognitive focus`);
    updateSpeech(`Phone safely locked away for ${lockboxDurationMins} minutes! Your cognitive focus is thriving.`);
  }

  lockboxPresetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.mins, 10);
      setLockboxDuration(mins);
      playClick(1000);
    });
  });

  if (setCustomMinsBtn && customMinsInput) {
    const handleCustom = () => {
      const val = parseInt(customMinsInput.value, 10);
      if (val > 0) {
        setLockboxDuration(val);
        customMinsInput.value = '';
        playClick(1000);
      }
    };
    setCustomMinsBtn.addEventListener('click', handleCustom);
    customMinsInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCustom();
      }
    });
  }

  if (startLockboxBtn) {
    startLockboxBtn.addEventListener('click', startLockboxTimer);
  }

  if (cancelLockboxBtn) {
    cancelLockboxBtn.addEventListener('click', resetLockboxStandby);
  }

  const addLockboxToBasketBtn = document.getElementById('addLockboxToBasketBtn');
  const lockboxCompletionNotice = document.getElementById('lockboxCompletionNotice');
  if (addLockboxToBasketBtn) {
    addLockboxToBasketBtn.addEventListener('click', () => {
      recordActivityCompleted(
        'Phone in Lock Box',
        `Protected ${lockboxDurationMins || 15} minutes of cognitive focus in vault.`,
        ['Phone Lock Box']
      );
      playClick(1000);
      if (lockboxCompletionNotice) {
        lockboxCompletionNotice.style.display = 'block';
        setTimeout(() => {
          lockboxCompletionNotice.style.display = 'none';
        }, 3000);
      }
    });
  }

  // Persistence keys
  const CBT_STORAGE_KEY = 'akku_cbt_progress_v2';
  const STEP_WORK_STORAGE_PREFIX = 'akku_step_work_v2_';

  function getCbtProgress() {
    try {
      const data = localStorage.getItem(CBT_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function setCbtProgress(progress) {
    try {
      localStorage.setItem(CBT_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {}
  }

  function getStepWork(problemKey, stepIdx) {
    try {
      return localStorage.getItem(`${STEP_WORK_STORAGE_PREFIX}${problemKey}_${stepIdx}`) || '';
    } catch (e) {
      return '';
    }
  }

  function setStepWork(problemKey, stepIdx, text) {
    try {
      localStorage.setItem(`${STEP_WORK_STORAGE_PREFIX}${problemKey}_${stepIdx}`, text);
    } catch (e) {}
  }

  function renderProblemWorkspace(key, selectedStepIdx = 0) {
    const data = problemOptionsData[key];
    if (!data) return;

    activeProblemKey = key;
    activeStepIdx = selectedStepIdx;

    const workspace = document.getElementById('cbtWorkspace');
    const indexLabel = document.getElementById('worksheetIndexLabel');
    const title = document.getElementById('worksheetTitle');
    const stepsContainer = document.getElementById('cbtStepsList');
    const progressCount = document.getElementById('cbtCompletedCount');

    if (workspace) workspace.style.display = 'block';
    if (indexLabel) indexLabel.textContent = 'Try to do this:';
    if (title) title.textContent = data.title;

    const progress = getCbtProgress();
    let completedCount = 0;

    data.steps.forEach((step, idx) => {
      if (progress[`${key}_step_${idx}`]) completedCount++;
    });

    if (progressCount) {
      progressCount.textContent = `${completedCount} / 4`;
    }

    if (stepsContainer) {
      stepsContainer.innerHTML = '';
      data.steps.forEach((step, idx) => {
        const stepKey = `${key}_step_${idx}`;
        const isDone = Boolean(progress[stepKey]);
        const isSelected = (idx === activeStepIdx);

        const card = document.createElement('div');
        card.className = `cbt-step-card ${isDone ? 'completed' : ''} ${isSelected ? 'selected-step' : ''}`;
        card.dataset.stepIndex = idx;

        card.innerHTML = `
          <div class="cbt-step-top">
            <span class="step-num-overline">Option 0${idx + 1}</span>
            <span class="step-status-chip">${isDone ? 'Completed' : 'To Do'}</span>
          </div>
          <h4 class="step-title-text">${step.name}</h4>
          <p class="step-body-desc">${step.desc}</p>
        `;

        card.addEventListener('click', () => {
          activeStepIdx = idx;
          stepsContainer.querySelectorAll('.cbt-step-card').forEach((c, i) => {
            if (i === activeStepIdx) {
              c.classList.add('selected-step');
            } else {
              c.classList.remove('selected-step');
            }
          });
          playClick(1000);
          renderStepWorkBox(key, activeStepIdx);
        });

        stepsContainer.appendChild(card);
      });
    }

    renderStepWorkBox(key, activeStepIdx);
  }

  function renderStepWorkBox(problemKey, idx) {
    const data = problemOptionsData[problemKey];
    if (!data || !data.steps[idx]) return;
    const step = data.steps[idx];

    const stepWorkBox = document.getElementById('stepWorkBox');
    const badge = document.getElementById('stepWorkBadge');
    const title = document.getElementById('stepWorkTitle');
    const prompt = document.getElementById('stepWorkPrompt');
    const input = document.getElementById('stepWorkInput');
    const notice = document.getElementById('stepDoneNotice');

    if (stepWorkBox) stepWorkBox.style.display = 'block';
    if (badge) badge.textContent = `Option 0${idx + 1}`;
    if (title) title.textContent = step.name;
    if (prompt) prompt.textContent = step.prompt;
    if (input) {
      input.placeholder = step.placeholder;
      input.value = getStepWork(problemKey, idx);
    }
    if (notice) notice.style.display = 'none';
  }

  // Auto-save input while typing
  const stepWorkInput = document.getElementById('stepWorkInput');
  if (stepWorkInput) {
    stepWorkInput.addEventListener('input', (e) => {
      if (activeProblemKey !== null) {
        setStepWork(activeProblemKey, activeStepIdx, e.target.value);
      }
    });
  }

  // Submit button in Step Work Box
  const submitStepWorkBtn = document.getElementById('submitStepWorkBtn');
  if (submitStepWorkBtn) {
    submitStepWorkBtn.addEventListener('click', () => {
      if (!activeProblemKey) return;
      const data = problemOptionsData[activeProblemKey];
      if (!data || !data.steps[activeStepIdx]) return;
      const step = data.steps[activeStepIdx];

      const input = document.getElementById('stepWorkInput');
      const text = input ? input.value.trim() : '';

      setStepWork(activeProblemKey, activeStepIdx, text);

      const progress = getCbtProgress();
      progress[`${activeProblemKey}_step_${activeStepIdx}`] = true;
      setCbtProgress(progress);

      // If this was writing a note to Meha in Missing My Girlfriend, also save to Notes to Meha (which calls recordActivityCompleted)!
      if (activeProblemKey === 'missing_girlfriend' && activeStepIdx === 3 && text) {
        addNoteToMeha(text);
      } else {
        // Track activity in central progress ledger and increment streak
        recordActivityCompleted(
          `${data.title} - ${step.name}`,
          text || `Completed "${step.name}"`,
          ['CBT Action Step']
        );
      }

      const notice = document.getElementById('stepDoneNotice');
      if (notice) {
        notice.style.display = 'inline-block';
        notice.textContent = 'Added to your reward basket!';
        setTimeout(() => {
          notice.style.display = 'none';
        }, 3000);
      }

      renderProblemWorkspace(activeProblemKey, activeStepIdx);
    });
  }

  // Problem Selector Tabs Binding
  const stressorTabs = document.querySelectorAll('.stressor-tab');
  stressorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      stressorTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.stressor;
      playClick(1100);
      renderProblemWorkspace(key, 0);
    });
  });

  // ==========================================================================
  // 4. Therapy Feelings Wheel (Circular Concentric Sunburst)
  // Exact circular clinical feelings wheel used in psychotherapy (Gloria Willcox)
  // 6 Core Emotions, 24 Secondary Emotions, 48 Tertiary Emotions
  // Strict Zero Emojis. Full SVG Vector Geometry & Interactive State.
  // ==========================================================================
  const feelingsWheelData = [
    {
      core: 'Fearful',
      color: '#00A5B5',
      secColor: '#17BACB',
      tertColor: '#38D1E0',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Scared', tertiaries: ['Helpless', 'Frightened'] },
        { name: 'Anxious', tertiaries: ['Overwhelmed', 'Worried'] },
        { name: 'Insecure', tertiaries: ['Inadequate', 'Inferior'] },
        { name: 'Weak', tertiaries: ['Worthless', 'Insignificant'] },
        { name: 'Rejected', tertiaries: ['Excluded', 'Persecuted'] },
        { name: 'Threatened', tertiaries: ['Nervous', 'Exposed'] }
      ]
    },
    {
      core: 'Angry',
      color: '#686DAE',
      secColor: '#7D82C4',
      tertColor: '#959ADB',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Let down', tertiaries: ['Betrayed', 'Disrespected'] },
        { name: 'Humiliated', tertiaries: ['Disrespected', 'Ridiculed'] },
        { name: 'Bitter', tertiaries: ['Indignant', 'Violated'] },
        { name: 'Mad', tertiaries: ['Furious', 'Jealous'] },
        { name: 'Aggressive', tertiaries: ['Provoked', 'Hostile'] },
        { name: 'Frustrated', tertiaries: ['Infuriated', 'Annoyed'] },
        { name: 'Distant', tertiaries: ['Withdrawn', 'Numb'] },
        { name: 'Critical', tertiaries: ['Sceptical', 'Dismissive'] }
      ]
    },
    {
      core: 'Disgusted',
      color: '#8F6E9F',
      secColor: '#A482B4',
      tertColor: '#BC9BCB',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Disapproving', tertiaries: ['Judgmental', 'Embarrassed'] },
        { name: 'Disappointed', tertiaries: ['Appalled', 'Revolted'] },
        { name: 'Awful', tertiaries: ['Nauseated', 'Detestable'] },
        { name: 'Repelled', tertiaries: ['Horrified', 'Hesitant'] }
      ]
    },
    {
      core: 'Sad',
      color: '#BC6379',
      secColor: '#CF778D',
      tertColor: '#E68FA4',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Hurt', tertiaries: ['Embarrassed', 'Disappointed'] },
        { name: 'Depressed', tertiaries: ['Inferior', 'Empty'] },
        { name: 'Guilty', tertiaries: ['Remorseful', 'Ashamed'] },
        { name: 'Despair', tertiaries: ['Powerless', 'Grief'] },
        { name: 'Vulnerable', tertiaries: ['Fragile', 'Victimised'] },
        { name: 'Lonely', tertiaries: ['Abandoned', 'Isolated'] }
      ]
    },
    {
      core: 'Happy',
      color: '#E26D5C',
      secColor: '#F28373',
      tertColor: '#FA9E90',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Optimistic', tertiaries: ['Inspired', 'Hopeful'] },
        { name: 'Trusting', tertiaries: ['Intimate', 'Sensitive'] },
        { name: 'Peaceful', tertiaries: ['Thankful', 'Loving'] },
        { name: 'Powerful', tertiaries: ['Creative', 'Courageous'] },
        { name: 'Accepted', tertiaries: ['Valued', 'Respected'] },
        { name: 'Proud', tertiaries: ['Confident', 'Successful'] },
        { name: 'Interested', tertiaries: ['Inquisitive', 'Curious'] },
        { name: 'Content', tertiaries: ['Joyful', 'Free'] },
        { name: 'Playful', tertiaries: ['Cheeky', 'Aroused'] }
      ]
    },
    {
      core: 'Surprised',
      color: '#E79E38',
      secColor: '#F2B052',
      tertColor: '#FCC87A',
      textColor: '#2D1F00',
      secondaries: [
        { name: 'Excited', tertiaries: ['Energetic', 'Eager'] },
        { name: 'Amazed', tertiaries: ['Awe', 'Astonished'] },
        { name: 'Confused', tertiaries: ['Perplexed', 'Disillusioned'] },
        { name: 'Startled', tertiaries: ['Dismayed', 'Shocked'] }
      ]
    },
    {
      core: 'Bad',
      color: '#27B08B',
      secColor: '#3DC29D',
      tertColor: '#58DAB6',
      textColor: '#FFFFFF',
      secondaries: [
        { name: 'Tired', tertiaries: ['Unfocused', 'Sleepy'] },
        { name: 'Stressed', tertiaries: ['Out of control', 'Overwhelmed'] },
        { name: 'Busy', tertiaries: ['Rushed', 'Pressured'] },
        { name: 'Bored', tertiaries: ['Apathetic', 'Indifferent'] }
      ]
    }
  ];

  function adjustColorBrightness(hex, percent) {
    let num = parseInt(hex.replace('#', ''), 16);
    let amt = Math.round(2.55 * percent);
    let R = (num >> 16) + amt;
    let G = (num >> 8 & 0x00FF) + amt;
    let B = (num & 0x0000FF) + amt;
    R = Math.max(0, Math.min(255, R));
    G = Math.max(0, Math.min(255, G));
    B = Math.max(0, Math.min(255, B));
    return '#' + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
  }

  const somaticSensationsList = [
    'Tense jaw', 'Tight shoulders', 'Shallow breath', 'Heavy chest',
    'Knot in stomach', 'Restless hands', 'Shaky', 'Hollow',
    'Warm flush', 'Chills', 'Drained', 'Fidgety',
    'Clenched', 'Numb', 'Pounding heart', 'Tender'
  ];

  let selectedWheelEmotion = null;
  let selectedSomaticSensations = new Set();

  const archiveEntriesList = document.getElementById('archiveEntriesList');
  const clearArchiveBtn = document.getElementById('clearArchiveBtn');

  const SVG_NS = 'http://www.w3.org/2000/svg';
  function createSvgEl(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
    return el;
  }

  function describeArc(cx, cy, rIn, rOut, startAngle, endAngle) {
    const radStart = (startAngle * Math.PI) / 180;
    const radEnd = (endAngle * Math.PI) / 180;
    const x1 = cx + rOut * Math.cos(radStart);
    const y1 = cy + rOut * Math.sin(radStart);
    const x2 = cx + rOut * Math.cos(radEnd);
    const y2 = cy + rOut * Math.sin(radEnd);
    const x3 = cx + rIn * Math.cos(radEnd);
    const y3 = cy + rIn * Math.sin(radEnd);
    const x4 = cx + rIn * Math.cos(radStart);
    const y4 = cy + rIn * Math.sin(radStart);
    const largeArc = (endAngle - startAngle > 180) ? 1 : 0;
    return [
      `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
      `A ${rOut} ${rOut} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
      `L ${x3.toFixed(2)} ${y3.toFixed(2)}`,
      `A ${rIn} ${rIn} 0 ${largeArc} 0 ${x4.toFixed(2)} ${y4.toFixed(2)}`,
      'Z'
    ].join(' ');
  }

  function initTherapyFeelingsWheel() {
    const svg = document.getElementById('therapyWheelSvg');
    if (!svg) return;

    svg.innerHTML = '';

    const cx = 320;
    const cy = 320;
    const r0 = 48;
    const r1 = 118;
    const r2 = 205;
    const r3 = 305;

    const layerTert = createSvgEl('g', { id: 'layerTert' });
    const layerSec = createSvgEl('g', { id: 'layerSec' });
    const layerCore = createSvgEl('g', { id: 'layerCore' });
    const layerHub = createSvgEl('g', { id: 'layerHub', cursor: 'pointer' });

    svg.appendChild(layerTert);
    svg.appendChild(layerSec);
    svg.appendChild(layerCore);
    svg.appendChild(layerHub);

    // Total 82 tertiaries across 7 core emotions
    const TOTAL_TERTIARIES = 82;
    const degPerTert = 360 / TOTAL_TERTIARIES; // ~4.3902 deg per wedge

    let currentAngle = -90; // Start at 12 o'clock (boundary between Bad and Fearful)

    feelingsWheelData.forEach((coreData) => {
      const coreTertCount = coreData.secondaries.reduce((sum, s) => sum + s.tertiaries.length, 0);
      const coreStart = currentAngle;
      const coreEnd = coreStart + coreTertCount * degPerTert;

      // 1. Core Wedge
      const corePath = createSvgEl('path', {
        d: describeArc(cx, cy, r0, r1, coreStart, coreEnd),
        fill: coreData.color,
        class: 'wheel-wedge wheel-wedge-core',
        'data-core': coreData.core,
        'data-tier': 'core'
      });

      const coreMidAngle = (coreStart + coreEnd) / 2;
      const coreRad = (coreMidAngle * Math.PI) / 180;
      const coreMidR = (r0 + r1) / 2;
      const coreTx = cx + coreMidR * Math.cos(coreRad);
      const coreTy = cy + coreMidR * Math.sin(coreRad);

      let coreRot = coreMidAngle;
      let coreNormRot = ((coreRot % 360) + 360) % 360;
      if (coreNormRot > 90 && coreNormRot < 270) coreRot += 180;

      const coreText = createSvgEl('text', {
        x: coreTx.toFixed(1),
        y: coreTy.toFixed(1),
        transform: `rotate(${coreRot.toFixed(1)}, ${coreTx.toFixed(1)}, ${coreTy.toFixed(1)})`,
        fill: coreData.textColor,
        class: 'wheel-text wheel-text-core'
      });
      coreText.textContent = coreData.core.toUpperCase();

      bindWedgeEvents(corePath, { core: coreData.core, sec: null, tert: null });
      layerCore.appendChild(corePath);
      layerCore.appendChild(coreText);

      // 2. Secondary & Tertiary Wedges
      let secCurrentAngle = coreStart;

      coreData.secondaries.forEach((secData, sIdx) => {
        const secTertCount = secData.tertiaries.length; // exactly 2
        const secStart = secCurrentAngle;
        const secEnd = secStart + secTertCount * degPerTert;

        const secFill = (sIdx % 2 === 0) ? coreData.secColor : adjustColorBrightness(coreData.secColor, -7);

        const secPath = createSvgEl('path', {
          d: describeArc(cx, cy, r1, r2, secStart, secEnd),
          fill: secFill,
          class: 'wheel-wedge wheel-wedge-sec',
          'data-core': coreData.core,
          'data-sec': secData.name,
          'data-tier': 'sec'
        });

        const secMidAngle = (secStart + secEnd) / 2;
        const secRad = (secMidAngle * Math.PI) / 180;
        const secMidR = (r1 + r2) / 2;
        const secTx = cx + secMidR * Math.cos(secRad);
        const secTy = cy + secMidR * Math.sin(secRad);

        let secRot = secMidAngle;
        let secNormRot = ((secRot % 360) + 360) % 360;
        if (secNormRot > 90 && secNormRot < 270) secRot += 180;

        const secText = createSvgEl('text', {
          x: secTx.toFixed(1),
          y: secTy.toFixed(1),
          transform: `rotate(${secRot.toFixed(1)}, ${secTx.toFixed(1)}, ${secTy.toFixed(1)})`,
          fill: coreData.textColor === '#2D1F00' ? '#2D1F00' : '#FFFFFF',
          class: 'wheel-text wheel-text-sec'
        });
        secText.textContent = secData.name;

        bindWedgeEvents(secPath, { core: coreData.core, sec: secData.name, tert: null });
        layerSec.appendChild(secPath);
        layerSec.appendChild(secText);

        // 3. Tertiary Wedges
        secData.tertiaries.forEach((tertName, tIdx) => {
          const tertStart = secStart + tIdx * degPerTert;
          const tertEnd = tertStart + degPerTert;
          const tertFill = (tIdx % 2 === 0) ? coreData.tertColor : adjustColorBrightness(coreData.tertColor, -7);

          const tertPath = createSvgEl('path', {
            d: describeArc(cx, cy, r2, r3, tertStart, tertEnd),
            fill: tertFill,
            class: 'wheel-wedge wheel-wedge-tert',
            'data-core': coreData.core,
            'data-sec': secData.name,
            'data-tert': tertName,
            'data-tier': 'tert'
          });

          const tertMidAngle = (tertStart + tertEnd) / 2;
          const tertRad = (tertMidAngle * Math.PI) / 180;
          const tertMidR = (r2 + r3) / 2;
          const tertTx = cx + tertMidR * Math.cos(tertRad);
          const tertTy = cy + tertMidR * Math.sin(tertRad);

          let tertRot = tertMidAngle;
          let tertNormRot = ((tertRot % 360) + 360) % 360;
          if (tertNormRot > 90 && tertNormRot < 270) tertRot += 180;

          const tertText = createSvgEl('text', {
            x: tertTx.toFixed(1),
            y: tertTy.toFixed(1),
            transform: `rotate(${tertRot.toFixed(1)}, ${tertTx.toFixed(1)}, ${tertTy.toFixed(1)})`,
            fill: coreData.textColor === '#2D1F00' ? '#2D1F00' : '#FFFFFF',
            class: 'wheel-text wheel-text-tert'
          });
          tertText.textContent = tertName;

          bindWedgeEvents(tertPath, { core: coreData.core, sec: secData.name, tert: tertName });
          layerTert.appendChild(tertPath);
          layerTert.appendChild(tertText);
        });

        secCurrentAngle = secEnd;
      });

      currentAngle = coreEnd;
    });

    // 4. Center Hub Group
    const hubCircle = createSvgEl('circle', {
      cx: cx,
      cy: cy,
      r: r0 - 1,
      class: 'wheel-hub-circle',
      id: 'wheelHubCircle'
    });

    const hubTopText = createSvgEl('text', {
      x: cx,
      y: cy - 7,
      class: 'wheel-text',
      id: 'wheelHubTop',
      'font-family': "'Recoleta', 'Fraunces', serif",
      'font-size': '11px',
      'font-weight': '600',
      fill: '#1A1A1A'
    });
    hubTopText.textContent = 'FEELINGS';

    const hubBottomText = createSvgEl('text', {
      x: cx,
      y: cy + 11,
      class: 'wheel-text',
      id: 'wheelHubBottom',
      'font-family': "'Inter', sans-serif",
      'font-size': '8.5px',
      'font-weight': '600',
      'letter-spacing': '0.18em',
      fill: '#D4AF37'
    });
    hubBottomText.textContent = 'WHEEL';

    layerHub.appendChild(hubCircle);
    layerHub.appendChild(hubTopText);
    layerHub.appendChild(hubBottomText);

    layerHub.addEventListener('click', () => {
      resetWheelSelection();
      playClick(700);
    });

    initSomaticChips();
    renderArchiveLedger();
  }

  function bindWedgeEvents(wedgeEl, emotionObj) {
    wedgeEl.addEventListener('mouseenter', () => {
      const hubTop = document.getElementById('wheelHubTop');
      const hubBottom = document.getElementById('wheelHubBottom');
      if (hubTop && hubBottom) {
        hubTop.textContent = emotionObj.core.toUpperCase();
        hubBottom.textContent = emotionObj.tert || emotionObj.sec || emotionObj.core;
      }
    });

    wedgeEl.addEventListener('mouseleave', () => {
      updateHubDisplay();
    });

    wedgeEl.addEventListener('click', (e) => {
      e.stopPropagation();
      selectWheelEmotion(emotionObj, wedgeEl);
    });
  }

  function updateHubDisplay() {
    const hubTop = document.getElementById('wheelHubTop');
    const hubBottom = document.getElementById('wheelHubBottom');
    if (!hubTop || !hubBottom) return;

    if (selectedWheelEmotion) {
      hubTop.textContent = selectedWheelEmotion.core.toUpperCase();
      hubBottom.textContent = selectedWheelEmotion.tert || selectedWheelEmotion.sec || selectedWheelEmotion.core;
    } else {
      hubTop.textContent = 'FEELINGS';
      hubBottom.textContent = 'WHEEL';
    }
  }

  function selectWheelEmotion(emotionObj, wedgeEl) {
    selectedWheelEmotion = emotionObj;
    playClick(1200);

    const allWedges = document.querySelectorAll('.wheel-wedge');
    allWedges.forEach(w => w.classList.remove('active-wedge'));

    if (wedgeEl) {
      wedgeEl.classList.add('active-wedge');
    }

    updateHubDisplay();

    const card = document.getElementById('wheelSelectionCard');
    const breadcrumb = document.getElementById('wheelBreadcrumb');

    if (card) card.style.display = 'block';

    if (breadcrumb) {
      if (emotionObj.tert) {
        breadcrumb.innerHTML = `<span>${emotionObj.core}</span><span class="wheel-breadcrumb-sep">&rarr;</span><span>${emotionObj.sec}</span><span class="wheel-breadcrumb-sep">&rarr;</span><strong style="color: var(--gold);">${emotionObj.tert}</strong>`;
      } else if (emotionObj.sec) {
        breadcrumb.innerHTML = `<span>${emotionObj.core}</span><span class="wheel-breadcrumb-sep">&rarr;</span><strong style="color: var(--gold);">${emotionObj.sec}</strong>`;
      } else {
        breadcrumb.innerHTML = `<strong style="color: var(--gold);">${emotionObj.core}</strong>`;
      }
    }
  }

  function resetWheelSelection() {
    selectedWheelEmotion = null;
    const allWedges = document.querySelectorAll('.wheel-wedge');
    allWedges.forEach(w => w.classList.remove('active-wedge'));
    updateHubDisplay();
    const card = document.getElementById('wheelSelectionCard');
    if (card) card.style.display = 'none';
  }

  function initSomaticChips() {
    const container = document.getElementById('somaticChipsWrap');
    if (!container) return;
    container.innerHTML = '';

    somaticSensationsList.forEach(sensation => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'somatic-chip';
      chip.textContent = sensation;

      chip.addEventListener('click', () => {
        if (selectedSomaticSensations.has(sensation)) {
          selectedSomaticSensations.delete(sensation);
          chip.classList.remove('selected');
          playClick(800);
        } else {
          selectedSomaticSensations.add(sensation);
          chip.classList.add('selected');
          playClick(1200);
        }
      });

      container.appendChild(chip);
    });
  }

  const submitProgressEntryBtn = document.getElementById('submitProgressEntryBtn');
  if (submitProgressEntryBtn) {
    submitProgressEntryBtn.addEventListener('click', () => {
      if (!selectedWheelEmotion) {
        alert('Please tap a feeling on the wheel first.');
        return;
      }

      const noteInput = document.getElementById('journalEntryNote');
      const noteText = noteInput ? noteInput.value.trim() : '';

      const pathArray = [selectedWheelEmotion.core];
      if (selectedWheelEmotion.sec) pathArray.push(selectedWheelEmotion.sec);
      if (selectedWheelEmotion.tert) pathArray.push(selectedWheelEmotion.tert);
      const fullPath = pathArray.join(' - ');

      // Track activity in central progress ledger, increment streak, and play baby sound
      recordActivityCompleted(
        fullPath,
        noteText || `Reflected on ${fullPath}`,
        ['Feelings Wheel'],
        Array.from(selectedSomaticSensations)
      );

      if (noteInput) noteInput.value = '';
      selectedSomaticSensations.clear();
      const chips = document.querySelectorAll('.somatic-chip');
      chips.forEach(c => c.classList.remove('selected'));

      const notice = document.getElementById('journalDoneNotice');
      if (notice) {
        notice.style.display = 'inline-block';
        notice.textContent = 'Added to your reward basket!';
        setTimeout(() => {
          notice.style.display = 'none';
        }, 3000);
      }
    });
  }

  // Clear Ledger Button in Section 04
  if (clearArchiveBtn) {
    clearArchiveBtn.addEventListener('click', () => {
      if (confirm('Clear all entries from your reward basket?')) {
        setArchiveEntries([]);
        playClick(700);
        renderArchiveLedger();
      }
    });
  }

  initTherapyFeelingsWheel();

  // ==========================================================================
  // 5. Autonomic Nervous System Regulation & Paced Calming Timers
  // 1-Min Physiological Sigh, 3-Min ADHD Reset, 5-Min Compassion Break
  // Zero Emojis. Visual Pacing Ring. Subtle Acoustic Chimes.
  // ==========================================================================
  const timerProtocols = {
    sigh: {
      totalDuration: 60,
      name: 'Physiological Sigh',
      title: 'The Physiological Sigh',
      image: 'images/timer-sigh.jpg',
      desc: 'Two quick inhales through your nose, then a long, slow sigh out your mouth. Resets carbon dioxide balance and calms your nervous system.',
      coaching: 'Sit with dropped shoulders. Inhale deeply through your nose, take a second quick sharp inhale to expand your lungs fully, then release a slow, soothing unforced sigh through your mouth.',
      cyclePattern: [
        { phase: 'Inhale through nose', duration: 2.0, visualClass: 'inhale' },
        { phase: 'Top-off inhale', duration: 1.5, visualClass: 'inhale' },
        { phase: 'Slow mouth exhale', duration: 5.0, visualClass: 'exhale' },
        { phase: 'Natural pause', duration: 1.5, visualClass: 'hold' }
      ]
    },
    adhd_reset: {
      totalDuration: 180,
      name: 'ADHD Brain Reset',
      title: 'ADHD Brain Reset & Grounding',
      image: 'images/timer-brain-reset.jpg',
      desc: 'Shake out your hands and wrists, plant your feet flat, and take steady grounding breaths to clear mental fog.',
      coaching: 'Plant your feet flat on the floor. Shake out your hands and wrists gently to release physical restlessness. Look gently around the room and breathe in a calm 4-4-4 rhythm.',
      cyclePattern: [
        { phase: 'Inhale smoothly', duration: 4.0, visualClass: 'inhale' },
        { phase: 'Stillness hold', duration: 4.0, visualClass: 'hold' },
        { phase: 'Even exhalation', duration: 4.0, visualClass: 'exhale' },
        { phase: 'Quiet baseline', duration: 4.0, visualClass: 'hold' }
      ]
    },
    self_compassion: {
      totalDuration: 300,
      name: 'Be Kind to Yourself',
      title: 'Self-Compassion Break',
      image: 'images/timer-compassion.jpg',
      desc: 'Place a warm hand tenderly on your chest, soften your face, and breathe slowly. Give yourself permission to be human.',
      coaching: 'Rest a warm hand flat over the center of your chest. Close your eyes or soften your gaze downward. Remind yourself that this moment is hard, and you deserve gentle patience.',
      cyclePattern: [
        { phase: 'Gentle inhale', duration: 5.0, visualClass: 'inhale' },
        { phase: 'Soft presence', duration: 3.0, visualClass: 'hold' },
        { phase: 'Unforced release', duration: 6.0, visualClass: 'exhale' },
        { phase: 'Rest in stillness', duration: 2.0, visualClass: 'hold' }
      ]
    }
  };

  let activeTimerKey = 'sigh';
  let timerInterval = null;
  let remainingSeconds = 60;
  let isTimerRunning = false;
  let cycleTimeElapsed = 0;

  const timerCircle = document.getElementById('timerCircle');
  const timerPacingCue = document.getElementById('timerPacingCue');
  const timerClockDigits = document.getElementById('timerClockDigits');
  const timerProtocolDesc = document.getElementById('timerProtocolDesc');
  const toggleTimerBtn = document.getElementById('toggleTimerBtn');
  const timerBtnText = document.getElementById('timerBtnText');
  const cancelTimerBtn = document.getElementById('cancelTimerBtn');
  const completeTimerEarlyBtn = document.getElementById('completeTimerEarlyBtn');
  const calmSavedNotice = document.getElementById('calmSavedNotice');
  const activeProtocolHeroImg = document.getElementById('activeProtocolHeroImg');
  const activeCoachingTitle = document.getElementById('activeCoachingTitle');
  const activeCoachingDesc = document.getElementById('activeCoachingDesc');
  const timerSelectTabs = document.querySelectorAll('.timer-select-tab');

  function formatTime(secs) {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function selectTimer(key) {
    stopTimer();
    activeTimerKey = key;
    const protocol = timerProtocols[key];
    remainingSeconds = protocol.totalDuration;
    cycleTimeElapsed = 0;

    if (timerClockDigits) timerClockDigits.textContent = formatTime(remainingSeconds);
    if (timerProtocolDesc) timerProtocolDesc.textContent = protocol.desc;
    if (timerPacingCue) timerPacingCue.textContent = 'Standby';

    if (activeProtocolHeroImg && protocol.image) {
      activeProtocolHeroImg.src = protocol.image;
      activeProtocolHeroImg.alt = protocol.title;
    }
    if (activeCoachingTitle && protocol.title) {
      activeCoachingTitle.textContent = protocol.title;
    }
    if (activeCoachingDesc && protocol.coaching) {
      activeCoachingDesc.textContent = protocol.coaching;
    }

    if (timerCircle) {
      timerCircle.className = 'hairline-timer-circle';
    }

    timerSelectTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.timer === key);
    });
  }

  function startTimer() {
    isTimerRunning = true;
    if (timerBtnText) timerBtnText.textContent = 'Pause Protocol';
    if (cancelTimerBtn) cancelTimerBtn.style.display = 'inline-flex';

    playChime(528, 1.0);

    const protocol = timerProtocols[activeTimerKey];
    const pattern = protocol.cyclePattern;
    const cycleTotal = pattern.reduce((acc, step) => acc + step.duration, 0);

    timerInterval = setInterval(() => {
      if (remainingSeconds <= 0) {
        completeTimer(false);
        return;
      }

      remainingSeconds--;
      cycleTimeElapsed++;

      // Advance 30-minute calm goal live with every second of meditation
      if (typeof addCalmGoalSeconds === 'function') {
        addCalmGoalSeconds(1);
      }

      if (timerClockDigits) {
        timerClockDigits.textContent = formatTime(remainingSeconds);
      }

      // Calculate current cycle step
      const currentCycleOffset = cycleTimeElapsed % cycleTotal;
      let accumulated = 0;
      let currentStep = pattern[0];

      for (let i = 0; i < pattern.length; i++) {
        accumulated += pattern[i].duration;
        if (currentCycleOffset < accumulated) {
          currentStep = pattern[i];
          break;
        }
      }

      if (timerPacingCue) {
        timerPacingCue.textContent = currentStep.phase;
      }

      if (timerCircle) {
        timerCircle.className = `hairline-timer-circle ${currentStep.visualClass}`;
      }

    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    if (timerBtnText) timerBtnText.textContent = 'Resume Protocol';
    if (timerPacingCue) timerPacingCue.textContent = 'Paused';
    if (timerCircle) timerCircle.className = 'hairline-timer-circle';
  }

  function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    cycleTimeElapsed = 0;
    if (toggleTimerBtn && timerBtnText) {
      timerBtnText.textContent = 'Initiate Protocol';
    }
    if (cancelTimerBtn) cancelTimerBtn.style.display = 'none';
    if (timerPacingCue) timerPacingCue.textContent = 'Standby';
    if (timerCircle) timerCircle.className = 'hairline-timer-circle';
  }

  function completeTimer(isManual = false) {
    stopTimer();
    if (timerPacingCue) timerPacingCue.textContent = isManual ? 'Session Saved' : 'Protocol Complete';
    if (timerClockDigits) timerClockDigits.textContent = '00:00';
    if (timerCircle) {
      timerCircle.className = 'hairline-timer-circle hold';
    }

    const protocol = timerProtocols[activeTimerKey];
    const protoName = protocol ? protocol.name : 'Breathing Session';
    const protoDur = protocol ? protocol.totalDuration : 60;
    
    // If completed manually without running ticks, credit the session duration
    if (isManual && cycleTimeElapsed === 0 && typeof addCalmGoalSeconds === 'function') {
      addCalmGoalSeconds(protoDur);
    }

    recordActivityCompleted(
      `Calming Timer - ${protoName}`,
      isManual 
        ? `Completed early calming session. Grounded nervous system and prevented body damage.`
        : `Completed full ${formatTime(protoDur)} pacing cycle. Nervous system regulated.`,
      ['Autonomic Regulation']
    );

    updateSpeech("Proud of you for taking a breath Akku! Your body and mind thank you.");

    if (calmSavedNotice) {
      calmSavedNotice.style.display = 'block';
      setTimeout(() => {
        calmSavedNotice.style.display = 'none';
      }, 4000);
    }

    setTimeout(() => {
      selectTimer(activeTimerKey);
    }, 4000);
  }

  if (toggleTimerBtn) {
    toggleTimerBtn.addEventListener('click', () => {
      if (!isTimerRunning) {
        startTimer();
      } else {
        pauseTimer();
      }
    });
  }

  if (cancelTimerBtn) {
    cancelTimerBtn.addEventListener('click', () => {
      stopTimer();
      const protocol = timerProtocols[activeTimerKey];
      remainingSeconds = protocol.totalDuration;
      if (timerClockDigits) timerClockDigits.textContent = formatTime(remainingSeconds);
      playClick(800);
    });
  }

  if (completeTimerEarlyBtn) {
    completeTimerEarlyBtn.addEventListener('click', () => {
      playClick(1200);
      completeTimer(true);
    });
  }

  timerSelectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playClick(1100);
      selectTimer(tab.dataset.timer);
    });
  });

  // Initialize active timer state
  selectTimer('sigh');

  // ==========================================================================
  // 30-Minute Calm Goal: The Reunion Journey (Akku & Mehu)
  // Shows a boy and girl coming close across a line slowly as he calms.
  // When he reaches 30 minutes, they finally meet with a glowing gold heart.
  // Strict Zero Emojis. Full cross-device sync and local persistence.
  // ==========================================================================
  const CALM_GOAL_SECONDS = 1800; // 30 minutes
  const CALM_GOAL_STORAGE_KEY = 'akku_calm_goal_seconds_v2';

  const journeyMinsDigits = document.getElementById('journeyMinsDigits');
  const journeyRemainingSub = document.getElementById('journeyRemainingSub');
  const journeyLineLeft = document.getElementById('journeyLineLeft');
  const journeyLineRight = document.getElementById('journeyLineRight');
  const journeyBoyCharacter = document.getElementById('journeyBoyCharacter');
  const journeyGirlCharacter = document.getElementById('journeyGirlCharacter');
  const journeyReunionHeart = document.getElementById('journeyReunionHeart');
  const journeyCelebrationCard = document.getElementById('journeyCelebrationCard');
  const resetJourneyCycleBtn = document.getElementById('resetJourneyCycleBtn');

  function getCalmGoalSeconds() {
    try {
      const saved = localStorage.getItem(CALM_GOAL_STORAGE_KEY);
      if (saved !== null) {
        return Math.max(0, parseInt(saved, 10) || 0);
      }
      // Initial seed from existing progress ledger calm sessions
      const entries = getArchiveEntries();
      let totalSecs = 0;
      entries.forEach(e => {
        if (e && e.activity && e.activity.includes('Calming Timer')) {
          if (e.activity.includes('Physiological Sigh')) totalSecs += 60;
          else if (e.activity.includes('Brain Reset')) totalSecs += 180;
          else if (e.activity.includes('Compassion') || e.activity.includes('Be Kind')) totalSecs += 300;
          else totalSecs += 60;
        }
      });
      localStorage.setItem(CALM_GOAL_STORAGE_KEY, String(totalSecs));
      return totalSecs;
    } catch (e) {
      return 0;
    }
  }

  function setCalmGoalSeconds(secs) {
    try {
      localStorage.setItem(CALM_GOAL_STORAGE_KEY, String(Math.max(0, Math.floor(secs))));
    } catch (e) {}
  }

  function addCalmGoalSeconds(deltaSecs) {
    const current = getCalmGoalSeconds();
    const updated = current + deltaSecs;
    setCalmGoalSeconds(updated);
    updateCalmJourneyDisplay();
    return updated;
  }

  function updateCalmJourneyDisplay() {
    const totalSecs = getCalmGoalSeconds();
    const fraction = Math.min(1.0, totalSecs / CALM_GOAL_SECONDS);

    const completedMins = Math.floor(totalSecs / 60);
    const remainingMins = Math.max(0, Math.ceil((CALM_GOAL_SECONDS - totalSecs) / 60));

    if (journeyMinsDigits) {
      journeyMinsDigits.textContent = `${completedMins} / 30m`;
    }

    if (journeyRemainingSub) {
      if (fraction >= 1.0) {
        journeyRemainingSub.textContent = 'Reunited in calm!';
      } else {
        journeyRemainingSub.textContent = `${remainingMins} mins to reunion`;
      }
    }

    // Proportional positioning: 0% to ~44% so their fronts meet at 50%
    const maxOffsetPercent = 44;
    const offsetPercent = fraction * maxOffsetPercent;
    const linePercent = fraction * 48;

    if (journeyBoyCharacter) {
      if (fraction >= 1.0) {
        journeyBoyCharacter.style.left = 'calc(50% - 28px)';
      } else {
        journeyBoyCharacter.style.left = `${offsetPercent}%`;
      }
    }

    if (journeyGirlCharacter) {
      if (fraction >= 1.0) {
        journeyGirlCharacter.style.right = 'calc(50% - 28px)';
      } else {
        journeyGirlCharacter.style.right = `${offsetPercent}%`;
      }
    }

    if (journeyLineLeft) {
      if (fraction >= 1.0) {
        journeyLineLeft.style.width = 'calc(50% - 20px)';
      } else {
        journeyLineLeft.style.width = `${linePercent}%`;
      }
    }

    if (journeyLineRight) {
      if (fraction >= 1.0) {
        journeyLineRight.style.width = 'calc(50% - 20px)';
      } else {
        journeyLineRight.style.width = `${linePercent}%`;
      }
    }

    if (fraction >= 1.0) {
      if (journeyReunionHeart) journeyReunionHeart.style.display = 'block';
      if (journeyCelebrationCard) journeyCelebrationCard.style.display = 'block';
    } else {
      if (journeyReunionHeart) journeyReunionHeart.style.display = 'none';
      if (journeyCelebrationCard) journeyCelebrationCard.style.display = 'none';
    }
  }

  if (resetJourneyCycleBtn) {
    resetJourneyCycleBtn.addEventListener('click', () => {
      setCalmGoalSeconds(0);
      updateCalmJourneyDisplay();
      playCuteBabySound();
      updateSpeech("Beginning a new 30-minute calm journey together! Let us take it one breath at a time.");
      if (typeof broadcastSyncState === 'function') {
        broadcastSyncState();
      }
    });
  }

  updateCalmJourneyDisplay();

  // Affirmation Ledger (Non-Toxic, Research-Backed Reframings - Strict Zero Emojis)
  const affirmationsList = [
    'Executive dysfunction is a neurological shortage of chemical transmission, never a moral failing or character flaw. You are navigating reality with the neurotransmitters available to you today.',
    'Rest is not a reward earned by total exhaustion; it is an biological prerequisite for sustainable prefrontal function.',
    'Initiation resistance dissolves once the physical task boundary is made microscopic. Give yourself permission to write one flawed line.',
    'Your partner loves you deeply and unconditionally. Distance does not diminish emotional fidelity or steady partnership.',
    'Professional feedback from management is a transactional workplace calibration, entirely decoupled from your personal dignity and intelligence.',
    'Time is not running away from you. This single present hour contains all the room you need to take one quiet, grounded step.',
    'When visual saturation overwhelms your mind, shrink your focal world down to one tabletop corner and let the rest wait.'
  ];

  let currentAffirmationIdx = 0;
  const affirmationQuote = document.getElementById('affirmationQuote');
  const nextAffirmationBtn = document.getElementById('nextAffirmationBtn');

  if (nextAffirmationBtn && affirmationQuote) {
    nextAffirmationBtn.addEventListener('click', () => {
      playClick(1200);
      currentAffirmationIdx = (currentAffirmationIdx + 1) % affirmationsList.length;
      affirmationQuote.style.opacity = '0';
      setTimeout(() => {
        affirmationQuote.textContent = `"${affirmationsList[currentAffirmationIdx]}"`;
        affirmationQuote.style.opacity = '1';
      }, 250);
    });
  }

  // ==========================================================================
  // 6. Tactile Redirection Suite (Urge Surfer & Physical Anchoring)
  // Replaces Hair Twirling & Nail Biting impulses with Non-Damaging Tactile Inputs
  // Strict Zero Emojis. Streak Counter. 24 Tactile Plates. Alabaster Stone.
  // ==========================================================================
  if (streakDigits) {
    streakDigits.textContent = String(getStreak());
  }

  // Tactile Tabs Handling
  const tactileTabs = document.querySelectorAll('.tactile-tab');
  const tactilePanels = document.querySelectorAll('.tactile-panel');

  tactileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tactileTabs.forEach(t => t.classList.remove('active'));
      tactilePanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanelId = `panel${tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)}`;
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      // If switching away from surfer, halt ocean sound
      if (tab.dataset.tab !== 'surfer') {
        stopOceanWaveAudio();
      } else if (isSurferActive) {
        startOceanWaveAudio();
      }
      playClick(1050);
    });
  });

  // Tool 1: 24 Tactile Silicone Bubble Pop Pad (Round & Glossy)
  const matrixGrid = document.getElementById('matrixGrid');
  const matrixPopCounter = document.getElementById('matrixPopCounter');
  const popAllMatrixBtn = document.getElementById('popAllMatrixBtn');
  const resetMatrixBtn = document.getElementById('resetMatrixBtn');
  const matrixCompletionCard = document.getElementById('matrixCompletionCard');
  const resetAfterCompleteBtn = document.getElementById('resetAfterCompleteBtn');

  function updateMatrixPopCounter() {
    if (!matrixGrid || !matrixPopCounter) return;
    const poppedCount = matrixGrid.querySelectorAll('.tactile-cell.depressed').length;
    matrixPopCounter.textContent = `${poppedCount} / 24 popped`;

    if (poppedCount === 24) {
      updateSpeech("Better than hurting your body, huh?");
      if (matrixCompletionCard) {
        matrixCompletionCard.style.display = 'block';
      }
      recordActivityCompleted('Preventing Damage', 'Popped all 24 bubbles safely. Better than hurting your body!', ['Tactile Calming']);
    } else {
      if (matrixCompletionCard && poppedCount < 24) {
        matrixCompletionCard.style.display = 'none';
      }
    }
  }

  if (matrixGrid) {
    matrixGrid.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const cell = document.createElement('div');
      cell.className = 'tactile-cell';
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('role', 'button');
      cell.setAttribute('aria-label', `Tactile bubble ${i + 1}`);

      const handlePop = () => {
        const isDepressed = cell.classList.contains('depressed');
        if (!isDepressed) {
          cell.classList.add('depressed');
          // Harmonic pitch shift across the 24 cells for ASMR satisfaction
          const pitch = 320 + (i % 8) * 35;
          playBubblePop(pitch, false);
        } else {
          cell.classList.remove('depressed');
          const pitch = 260 + (i % 8) * 25;
          playBubblePop(pitch, true);
        }
        updateMatrixPopCounter();
      };

      cell.addEventListener('click', handlePop);
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePop();
        }
      });

      matrixGrid.appendChild(cell);
    }
  }

  if (popAllMatrixBtn && matrixGrid) {
    popAllMatrixBtn.addEventListener('click', () => {
      const unpopped = Array.from(matrixGrid.querySelectorAll('.tactile-cell:not(.depressed)'));
      if (unpopped.length === 0) return;
      unpopped.forEach((cell, idx) => {
        setTimeout(() => {
          cell.classList.add('depressed');
          playBubblePop(300 + (idx % 8) * 40, false);
          updateMatrixPopCounter();
          if (idx === unpopped.length - 1) {
            playChime(580, 1.0);
          }
        }, idx * 45);
      });
    });
  }

  if (resetMatrixBtn && matrixGrid) {
    resetMatrixBtn.addEventListener('click', () => {
      const cells = matrixGrid.querySelectorAll('.tactile-cell');
      cells.forEach(c => c.classList.remove('depressed'));
      if (matrixCompletionCard) {
        matrixCompletionCard.style.display = 'none';
      }
      updateMatrixPopCounter();
      playChime(620, 0.7);
    });
  }

  if (resetAfterCompleteBtn && matrixGrid) {
    resetAfterCompleteBtn.addEventListener('click', () => {
      const cells = matrixGrid.querySelectorAll('.tactile-cell');
      cells.forEach(c => c.classList.remove('depressed'));
      if (matrixCompletionCard) {
        matrixCompletionCard.style.display = 'none';
      }
      updateMatrixPopCounter();
      playChime(620, 0.8);
      updateSpeech("Ready to pop again! Whenever you feel an urge to bite or twirl, use these bubbles instead.");
    });
  }

  const addBubbleSetBtn = document.getElementById('addBubbleSetBtn');
  const bubbleMatrixNotice = document.getElementById('bubbleMatrixNotice');
  if (addBubbleSetBtn && matrixGrid) {
    addBubbleSetBtn.addEventListener('click', () => {
      const poppedCount = matrixGrid.querySelectorAll('.tactile-cell.depressed').length;
      recordActivityCompleted(
        'Preventing Damage - Bubble Pop',
        `Popped ${poppedCount > 0 ? poppedCount : 24} tactile silicone bubbles safely. Protected hands and fingers.`,
        ['Tactile Calming']
      );
      playClick(1000);
      if (bubbleMatrixNotice) {
        bubbleMatrixNotice.style.display = 'block';
        setTimeout(() => {
          bubbleMatrixNotice.style.display = 'none';
        }, 3000);
      }
    });
  }

  const addBubbleCompleteBtn = document.getElementById('addBubbleCompleteBtn');
  const bubbleBasketNotice = document.getElementById('bubbleBasketNotice');
  if (addBubbleCompleteBtn) {
    addBubbleCompleteBtn.addEventListener('click', () => {
      recordActivityCompleted(
        'Preventing Damage - Bubble Pop',
        'Popped all 24 bubbles safely. Better than hurting your body!',
        ['Tactile Calming']
      );
      playClick(1000);
      if (bubbleBasketNotice) {
        bubbleBasketNotice.style.display = 'block';
        setTimeout(() => {
          bubbleBasketNotice.style.display = 'none';
        }, 3000);
      }
    });
  }

  // Tool 2: 60-Second Urge Surfer
  const surferSecs = document.getElementById('surferSecs');
  const surferTitle = document.getElementById('surferTitle');
  const surferBody = document.getElementById('surferBody');
  const startSurferBtn = document.getElementById('startSurferBtn');
  const resetSurferBtn = document.getElementById('resetSurferBtn');

  let surferInterval = null;
  let surferRemaining = 60;
  let isSurferActive = false;

  function updateSurferPhaseText(seconds) {
    if (!surferTitle || !surferBody) return;

    if (seconds > 45) {
      surferTitle.textContent = 'Phase 01: The Initial Urge Swell';
      surferBody.textContent = 'Keep hands flat on your lap or table. Watch the urge without judging it. Breathe in gently and exhale slowly.';
    } else if (seconds > 20) {
      surferTitle.textContent = 'Phase 02: Cresting the Amplitude';
      surferBody.textContent = 'The urge is at its peak intensity. Sensation is not an instruction. You are the observer, not the impulse.';
    } else if (seconds > 0) {
      surferTitle.textContent = 'Phase 03: Natural Dissolution';
      surferBody.textContent = 'The wave is settling down. Your nervous system is naturally easing. You have full command of your hands.';
    } else {
      surferTitle.textContent = 'Wave Surfed: You Did It';
      surferBody.textContent = 'You allowed the impulse to crest and melt away without harm. Your mind and hands are safe and at ease.';
    }
  }

  function startUrgeSurfer() {
    isSurferActive = true;
    if (startSurferBtn) startSurferBtn.style.display = 'none';
    if (resetSurferBtn) resetSurferBtn.style.display = 'inline-flex';
    playChime(528, 1.2);
    startOceanWaveAudio();

    surferInterval = setInterval(() => {
      if (surferRemaining <= 0) {
        completeUrgeSurfer();
        return;
      }
      surferRemaining--;
      if (surferSecs) surferSecs.textContent = String(surferRemaining);
      updateSurferPhaseText(surferRemaining);
    }, 1000);
  }

  function resetUrgeSurfer() {
    isSurferActive = false;
    clearInterval(surferInterval);
    stopOceanWaveAudio();
    surferRemaining = 60;
    if (surferSecs) surferSecs.textContent = '60';
    if (surferTitle) surferTitle.textContent = 'Urges peak and pass in 60 seconds';
    if (surferBody) surferBody.textContent = 'Place both hands flat on your lap or table. Watch the physical impulse without acting on it. Ride the wave until it melts away.';
    if (startSurferBtn) startSurferBtn.style.display = 'inline-flex';
    if (resetSurferBtn) resetSurferBtn.style.display = 'none';
    playClick(800);
  }

  function completeUrgeSurfer() {
    clearInterval(surferInterval);
    isSurferActive = false;
    stopOceanWaveAudio();

    // Track in central ledger, increment streak, play baby sound
    recordActivityCompleted('Urge Surfer', 'Successfully surfed full 60-second urge wave without harm.', ['Impulse Surfing']);
    updateSpeech("We surfed the entire 60-second wave together! The urge is gone and my hands are completely calm.");

    if (startSurferBtn) {
      startSurferBtn.style.display = 'inline-flex';
      startSurferBtn.textContent = 'Start another wave';
    }
    if (resetSurferBtn) resetSurferBtn.style.display = 'none';
  }

  if (startSurferBtn) {
    startSurferBtn.addEventListener('click', startUrgeSurfer);
  }

  if (resetSurferBtn) {
    resetSurferBtn.addEventListener('click', resetUrgeSurfer);
  }

  const addSurferToBasketBtn = document.getElementById('addSurferToBasketBtn');
  const surferBasketNotice = document.getElementById('surferBasketNotice');
  if (addSurferToBasketBtn) {
    addSurferToBasketBtn.addEventListener('click', () => {
      recordActivityCompleted(
        'Preventing Damage - Urge Surfer',
        'Surfed an impulse wave safely. Watched physical sensation crest and pass without body harm.',
        ['Impulse Surfing']
      );
      playClick(1000);
      if (surferBasketNotice) {
        surferBasketNotice.style.display = 'block';
        setTimeout(() => {
          surferBasketNotice.style.display = 'none';
        }, 3000);
      }
    });
  }

  // Tool 3: Mechanical Haptic Switch Deck
  const switchClickDigits = document.getElementById('switchClickDigits');
  const switchResetBtn = document.getElementById('switchResetBtn');
  const switchMilestoneCue = document.getElementById('switchMilestoneCue');

  const mechKeys = [
    { el: document.getElementById('mechKey0'), profile: 'blue', name: 'Blue Clicky', force: '60g' },
    { el: document.getElementById('mechKey1'), profile: 'jade', name: 'Heavy Jade', force: '75g' },
    { el: document.getElementById('mechKey2'), profile: 'thock', name: 'Bubble Thock', force: '55g' },
    { el: document.getElementById('mechKey3'), profile: 'cream', name: 'Cream Linear', force: '45g' }
  ];

  let switchClicksCount = 0;

  function handleMechKeyPress(idx) {
    const item = mechKeys[idx];
    if (!item || !item.el) return;

    item.el.classList.add('depressed');
    setTimeout(() => {
      item.el.classList.remove('depressed');
    }, 120);

    playMechSwitchSound(item.profile);

    switchClicksCount++;
    if (switchClickDigits) {
      switchClickDigits.textContent = String(switchClicksCount);
    }

    if (switchClicksCount % 50 === 0) {
      recordActivityCompleted(
        'Mechanical Switch Deck',
        `Conquered ${switchClicksCount} tactile impulses with haptic switch resistance.`
      );
      if (switchMilestoneCue) {
        switchMilestoneCue.textContent = `${switchClicksCount} tactile clicks surfed! Hands safe, mind calm and grounded.`;
      }
      updateSpeech("Awesome job clicking the switch deck instead of biting or twirling! Hands are safe.");
    } else if (switchClicksCount % 10 === 0) {
      const cues = [
        "Tactile resistance conquering the urge...",
        "Hands busy and safe, prefrontal cortex resting...",
        "Physical energy safely redirected...",
        "Feel the mechanical snap instead of picking..."
      ];
      const cue = cues[Math.floor((switchClicksCount / 10) % cues.length)];
      if (switchMilestoneCue) switchMilestoneCue.textContent = cue;
    }
  }

  mechKeys.forEach((item, idx) => {
    if (item.el) {
      item.el.addEventListener('click', () => handleMechKeyPress(idx));
      item.el.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'touch') {
          handleMechKeyPress(idx);
        }
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea') return;

    if (e.key === '1') {
      handleMechKeyPress(0);
    } else if (e.key === '2') {
      handleMechKeyPress(1);
    } else if (e.key === '3') {
      handleMechKeyPress(2);
    } else if (e.key === '4') {
      handleMechKeyPress(3);
    }
  });

  if (switchResetBtn) {
    switchResetBtn.addEventListener('click', () => {
      switchClicksCount = 0;
      if (switchClickDigits) switchClickDigits.textContent = '0';
      if (switchMilestoneCue) {
        switchMilestoneCue.textContent = 'Press keys repeatedly whenever you feel the urge to bite or twirl...';
      }
      playClick(800);
    });
  }

  const addSwitchSetToBasketBtn = document.getElementById('addSwitchSetToBasketBtn');
  const switchBasketNotice = document.getElementById('switchBasketNotice');
  if (addSwitchSetToBasketBtn) {
    addSwitchSetToBasketBtn.addEventListener('click', () => {
      const clicks = switchClicksCount > 0 ? switchClicksCount : 10;
      recordActivityCompleted(
        'Preventing Damage - Haptic Switches',
        `Conquered ${clicks} tactile impulses with haptic mechanical switch resistance.`,
        ['Tactile Calming']
      );
      playClick(1000);
      if (switchBasketNotice) {
        switchBasketNotice.style.display = 'block';
        setTimeout(() => {
          switchBasketNotice.style.display = 'none';
        }, 3000);
      }
    });
  }

  // ==========================================================================
  // Mobile Navigation: Menu Toggle & Scroll Down Auto-Toggle
  // Leaves desktop / laptop version 100% untouched
  // ==========================================================================
  const editorialNav = document.getElementById('editorialNav');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navRightActions = document.getElementById('navRightActions');

  if (mobileMenuToggle && editorialNav) {
    mobileMenuToggle.addEventListener('click', () => {
      playClick(1000);
      editorialNav.classList.toggle('mobile-menu-open');
      const isOpen = editorialNav.classList.contains('mobile-menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  if (navRightActions && editorialNav) {
    navRightActions.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          editorialNav.classList.remove('mobile-menu-open');
          if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  let lastMobileScrollY = window.scrollY;
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (window.innerWidth <= 768 && editorialNav) {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastMobileScrollY + 8 && currentScrollY > 60) {
            editorialNav.classList.add('nav-scrolled-down');
            editorialNav.classList.remove('mobile-menu-open');
            if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
          } else if (currentScrollY < lastMobileScrollY - 8 || currentScrollY <= 20) {
            editorialNav.classList.remove('nav-scrolled-down');
          }
          lastMobileScrollY = currentScrollY;
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // ==========================================================================
  // Cross-Device Progress Synchronization Engine
  // Real-time bidirectional sync across laptop and mobile phones via ntfy.sh
  // Zero Emojis. Preserves all history, streaks, notes, and CBT worksheets.
  // ==========================================================================

  const SYNC_ROOM_STORAGE_KEY = 'akku_sanctuary_sync_room_v2';
  const SYNC_DEVICE_ID_KEY = 'akku_sanctuary_device_id_v2';
  const DEFAULT_SYNC_ROOM = 'akku-mehu-sanctuary';

  const syncRoomTitle = document.getElementById('syncRoomTitle');
  const syncQrCodeImg = document.getElementById('syncQrCodeImg');
  const copySyncLinkBtn = document.getElementById('copySyncLinkBtn');
  const forceSyncNowBtn = document.getElementById('forceSyncNowBtn');
  const syncNotice = document.getElementById('syncNotice');
  const syncRoomInput = document.getElementById('syncRoomInput');
  const saveSyncRoomBtn = document.getElementById('saveSyncRoomBtn');
  const syncToastNotification = document.getElementById('syncToastNotification');
  const syncToastText = document.getElementById('syncToastText');

  function getSyncRoom() {
    return localStorage.getItem(SYNC_ROOM_STORAGE_KEY) || DEFAULT_SYNC_ROOM;
  }

  function setSyncRoom(code) {
    const clean = (code || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '') || DEFAULT_SYNC_ROOM;
    localStorage.setItem(SYNC_ROOM_STORAGE_KEY, clean);
    return clean;
  }

  function getDeviceId() {
    let id = localStorage.getItem(SYNC_DEVICE_ID_KEY);
    if (!id) {
      id = 'dev_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
      localStorage.setItem(SYNC_DEVICE_ID_KEY, id);
    }
    return id;
  }

  function getMobileSyncUrl() {
    const room = getSyncRoom();
    return `${window.location.origin}${window.location.pathname}#room=${encodeURIComponent(room)}`;
  }

  let syncEventSource = null;
  let isBroadcasting = false;

  function showSyncToast(message) {
    if (!syncToastNotification) return;
    if (syncToastText) syncToastText.textContent = message;
    syncToastNotification.style.display = 'flex';
    setTimeout(() => {
      if (syncToastNotification) syncToastNotification.style.display = 'none';
    }, 4000);
  }

  function renderSyncPanel() {
    const room = getSyncRoom();
    if (syncRoomTitle) syncRoomTitle.textContent = `Sync Room: ${room}`;
    if (syncRoomInput) syncRoomInput.value = room;

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(getMobileSyncUrl())}`;
    if (syncQrCodeImg) {
      syncQrCodeImg.src = qrUrl;
    }
  }

  // Broadcast current state to cloud room
  async function broadcastSyncState() {
    if (isBroadcasting) return;
    isBroadcasting = true;
    const room = getSyncRoom();
    const payload = {
      type: 'AKKU_SANCTUARY_SYNC',
      version: 2,
      deviceId: getDeviceId(),
      timestamp: new Date().toISOString(),
      streak: getStreak(),
      calmGoalSeconds: typeof getCalmGoalSeconds === 'function' ? getCalmGoalSeconds() : 0,
      progressLedger: getArchiveEntries(),
      notesToMeha: getNotesToMeha(),
      cbtProgress: getCbtProgress(),
      claimedRewards: getClaimedRewards()
    };

    try {
      await fetch(`https://ntfy.sh/akku_sanctuary_${room}`, {
        method: 'POST',
        headers: {
          'Title': 'Sync',
          'Priority': '3',
          'Tags': 'cloud'
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      // Offline fallback: data is already safely stored in localStorage
    } finally {
      isBroadcasting = false;
    }
  }

  // Merge incoming remote state safely without overwriting or losing records
  function mergeRemoteSyncData(remote) {
    if (!remote || remote.deviceId === getDeviceId()) return false;
    let hasChanges = false;

    // 1. Merge Streak
    if (typeof remote.streak === 'number') {
      const currentStreak = getStreak();
      if (remote.streak > currentStreak) {
        setStreak(remote.streak);
        hasChanges = true;
      }
    }

    // 2. Merge 30-Minute Calm Goal Seconds
    if (typeof remote.calmGoalSeconds === 'number' && typeof getCalmGoalSeconds === 'function') {
      const currentCalm = getCalmGoalSeconds();
      if (remote.calmGoalSeconds > currentCalm) {
        setCalmGoalSeconds(remote.calmGoalSeconds);
        if (typeof updateCalmJourneyDisplay === 'function') {
          updateCalmJourneyDisplay();
        }
        hasChanges = true;
      }
    }

    // 2. Merge Progress Ledger entries by ID
    if (Array.isArray(remote.progressLedger)) {
      const currentEntries = getArchiveEntries();
      const existingIds = new Set(currentEntries.map(e => e.id));
      let added = false;
      remote.progressLedger.forEach(item => {
        if (item && item.id && !existingIds.has(item.id)) {
          currentEntries.push(item);
          existingIds.add(item.id);
          added = true;
        }
      });
      if (added) {
        currentEntries.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
        setArchiveEntries(currentEntries);
        hasChanges = true;
      }
    }

    // 3. Merge Notes to Meha by ID
    if (Array.isArray(remote.notesToMeha)) {
      const currentNotes = getNotesToMeha();
      const existingIds = new Set(currentNotes.map(n => n.id));
      let addedNotes = false;
      remote.notesToMeha.forEach(item => {
        if (item && item.id && !existingIds.has(item.id)) {
          currentNotes.push(item);
          existingIds.add(item.id);
          addedNotes = true;
        }
      });
      if (addedNotes) {
        currentNotes.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
        setNotesToMeha(currentNotes);
        hasChanges = true;
      }
    }

    // 4. Merge CBT progress
    if (remote.cbtProgress && typeof remote.cbtProgress === 'object') {
      const currentCbt = getCbtProgress();
      let cbtChanged = false;
      Object.keys(remote.cbtProgress).forEach(problemKey => {
        if (!currentCbt[problemKey]) {
          currentCbt[problemKey] = remote.cbtProgress[problemKey];
          cbtChanged = true;
        } else {
          Object.keys(remote.cbtProgress[problemKey]).forEach(stepKey => {
            if (!currentCbt[problemKey][stepKey]) {
              currentCbt[problemKey][stepKey] = remote.cbtProgress[problemKey][stepKey];
              cbtChanged = true;
            }
          });
        }
      });
      if (cbtChanged) {
        setCbtProgress(currentCbt);
        hasChanges = true;
      }
    }

    // 5. Merge Claimed Rewards
    if (Array.isArray(remote.claimedRewards)) {
      const currentClaimed = getClaimedRewards();
      const existingClaimedIds = new Set(currentClaimed.map(r => r.id));
      let addedRewards = false;
      remote.claimedRewards.forEach(item => {
        if (item && item.id && !existingClaimedIds.has(item.id)) {
          currentClaimed.push(item);
          existingClaimedIds.add(item.id);
          addedRewards = true;
        }
      });
      if (addedRewards) {
        setClaimedRewards(currentClaimed);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      renderArchiveLedger();
      renderNotesList();
      showSyncToast("Progress synced with your other device");
      playChime(528, 0.4);
    }

    return hasChanges;
  }

  // Poll cloud room for latest records
  async function pollSyncState() {
    const room = getSyncRoom();
    try {
      const res = await fetch(`https://ntfy.sh/akku_sanctuary_${room}/json?poll=1`);
      if (!res.ok) return;
      const text = await res.text();
      const lines = text.trim().split('\n').filter(Boolean);
      for (const line of lines) {
        try {
          const envelope = JSON.parse(line);
          if (envelope && envelope.message) {
            const parsed = JSON.parse(envelope.message);
            mergeRemoteSyncData(parsed);
          }
        } catch (err) {}
      }
    } catch (e) {}
  }

  // Connect SSE real-time listener
  function initSyncConnection() {
    if (syncEventSource) {
      syncEventSource.close();
      syncEventSource = null;
    }
    const room = getSyncRoom();
    try {
      syncEventSource = new EventSource(`https://ntfy.sh/akku_sanctuary_${room}/sse`);
      syncEventSource.onmessage = (event) => {
        try {
          const envelope = JSON.parse(event.data);
          if (envelope && envelope.message) {
            const parsed = JSON.parse(envelope.message);
            mergeRemoteSyncData(parsed);
          }
        } catch (e) {}
      };
      syncEventSource.onerror = () => {
        // SSE will reconnect automatically
      };
    } catch (e) {}
  }

  // Check URL hash for pairing link e.g. #room=akku-mehu-sanctuary
  function checkUrlHashPairing() {
    const hash = window.location.hash;
    if (hash && hash.includes('room=')) {
      const match = hash.match(/room=([^&]+)/);
      if (match && match[1]) {
        const newRoom = decodeURIComponent(match[1]);
        setSyncRoom(newRoom);
        try {
          history.replaceState(null, '', window.location.pathname);
        } catch (e) {}
        initSyncConnection();
        pollSyncState();
        updateSpeech("Paired successfully with your laptop! Progress is now live.");
        showSyncToast("Paired with other device");
      }
    }
  }

  if (copySyncLinkBtn) {
    copySyncLinkBtn.addEventListener('click', () => {
      const link = getMobileSyncUrl();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(link).then(() => {
          if (syncNotice) {
            syncNotice.style.display = 'inline-block';
            syncNotice.textContent = 'Link copied to clipboard! Paste into Messages on your phone.';
            setTimeout(() => { syncNotice.style.display = 'none'; }, 4000);
          }
        }).catch(() => {
          prompt('Copy this link to open on your phone:', link);
        });
      } else {
        prompt('Copy this link to open on your phone:', link);
      }
      playCuteBabySound();
    });
  }

  if (forceSyncNowBtn) {
    forceSyncNowBtn.addEventListener('click', async () => {
      playClick(1100);
      forceSyncNowBtn.textContent = 'Syncing...';
      await broadcastSyncState();
      await pollSyncState();
      forceSyncNowBtn.textContent = 'Sync Now';
      showSyncToast("Sync completed");
      playCuteBabySound();
    });
  }

  if (saveSyncRoomBtn && syncRoomInput) {
    saveSyncRoomBtn.addEventListener('click', () => {
      const val = syncRoomInput.value.trim();
      if (val) {
        const updated = setSyncRoom(val);
        renderSyncPanel();
        initSyncConnection();
        pollSyncState();
        broadcastSyncState();
        if (syncNotice) {
          syncNotice.style.display = 'inline-block';
          syncNotice.textContent = `Sync code updated to "${updated}"!`;
          setTimeout(() => { syncNotice.style.display = 'none'; }, 4000);
        }
        playClick(1000);
      }
    });
  }

  // Poll cloud room whenever window regains focus or visibility
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      pollSyncState();
    }
  });

  window.addEventListener('focus', () => {
    pollSyncState();
  });

  // ==========================================================================
  // 7. Initial Bootstrap
  // ==========================================================================
  renderArchiveLedger();
  renderNotesList();
  renderSyncPanel();
  checkUrlHashPairing();
  initSyncConnection();
  pollSyncState();

})();

