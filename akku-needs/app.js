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
  let isSoundEnabled = false; // Default off for quiet editorial sanctuary, toggled by user

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

  // Subtle friction texture sound for stone rubbing
  function playStoneFriction() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180 + Math.random() * 50, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
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
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      if (isSoundEnabled) {
        initAudio();
        soundToggleBtn.classList.add('sound-on');
        soundStatusText.textContent = 'Sound: On';
        playChime(640, 0.8);
      } else {
        soundToggleBtn.classList.remove('sound-on');
        soundStatusText.textContent = 'Sound: Off';
      }
    });
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

      const entries = getArchiveEntries();
      const now = new Date();
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
      const formattedDate = now.toLocaleDateString('en-US', options);

      const newEntry = {
        id: 'work_' + Date.now(),
        timestamp: formattedDate,
        domain: `${data.title} - ${step.name}`,
        subEmotions: ['Completed Step'],
        somaticSensations: [],
        note: text || `Completed "${step.name}"`
      };
      entries.unshift(newEntry);
      setArchiveEntries(entries);
      renderArchiveLedger();

      const notice = document.getElementById('stepDoneNotice');
      if (notice) {
        notice.style.display = 'inline-block';
        notice.textContent = 'Saved to your progress ledger!';
        setTimeout(() => {
          notice.style.display = 'none';
        }, 3000);
      }

      playChime(660, 1.4);
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
      core: 'Joyful',
      colors: {
        core: '#E6C265',
        sec: ['#EDD38A', '#F0DC9C', '#F3E5AE', '#F6EEC0'],
        tert: ['#F7EBC6', '#FBF3D9', '#F8EDCD', '#FCF5DF', '#F9EFD3', '#FDF7E5', '#FAF1D9', '#FEF9EB']
      },
      textColor: '#2C2416',
      secondaries: [
        { name: 'Playful', tertiaries: ['Aroused', 'Cheeky'] },
        { name: 'Content', tertiaries: ['Free', 'Joyful'] },
        { name: 'Proud', tertiaries: ['Successful', 'Confident'] },
        { name: 'Peaceful', tertiaries: ['Loving', 'Thankful'] }
      ]
    },
    {
      core: 'Powerful',
      colors: {
        core: '#D99462',
        sec: ['#E4AD86', '#E9BA97', '#EEC7A8', '#F3D4B9'],
        tert: ['#EFC9AD', '#F5DCB7', '#F1D0B7', '#F7E2C3', '#F3D8C1', '#F8E8CF', '#F5E0CB', '#FAEFDC']
      },
      textColor: '#2E1E14',
      secondaries: [
        { name: 'Courageous', tertiaries: ['Adventurous', 'Brave'] },
        { name: 'Confident', tertiaries: ['Capable', 'Grounded'] },
        { name: 'Hopeful', tertiaries: ['Optimistic', 'Inspired'] },
        { name: 'Appreciated', tertiaries: ['Valued', 'Grateful'] }
      ]
    },
    {
      core: 'Peaceful',
      colors: {
        core: '#7EA47E',
        sec: ['#99BA99', '#A8C4A8', '#B7CEB7', '#C6D9C6'],
        tert: ['#B8CFB8', '#CADBCA', '#C1D6C1', '#D2E1D2', '#C9DCC9', '#D9E6D9', '#D2E2D2', '#E1ECE1']
      },
      textColor: '#1A281A',
      secondaries: [
        { name: 'Calm', tertiaries: ['Serene', 'Centered'] },
        { name: 'Relaxed', tertiaries: ['Present', 'Rested'] },
        { name: 'Loving', tertiaries: ['Gentle', 'Warm'] },
        { name: 'Trusting', tertiaries: ['Safe', 'Relieved'] }
      ]
    },
    {
      core: 'Sad',
      colors: {
        core: '#6B8CA8',
        sec: ['#8BA7BD', '#9BB3C7', '#ABBFD1', '#BBCEDB'],
        tert: ['#ACC1D3', '#C0D2E1', '#B6C9D9', '#C8D8E5', '#C0D1DF', '#D0DEE9', '#CAC9E5', '#D8E4ED']
      },
      textColor: '#15222E',
      secondaries: [
        { name: 'Lonely', tertiaries: ['Isolated', 'Abandoned'] },
        { name: 'Vulnerable', tertiaries: ['Fragile', 'Helpless'] },
        { name: 'Despair', tertiaries: ['Grief', 'Heartbroken'] },
        { name: 'Hurt', tertiaries: ['Disappointed', 'Embarrassed'] }
      ]
    },
    {
      core: 'Mad',
      colors: {
        core: '#C76E6E',
        sec: ['#D68E8E', '#DD9E9E', '#E4AEAE', '#EBBEBE'],
        tert: ['#E1A2A2', '#ECC0C0', '#E7AEAE', '#F0CACA', '#ECBABA', '#F3D4D4', '#F1C6C6', '#F7DEDE']
      },
      textColor: '#2E1414',
      secondaries: [
        { name: 'Frustrated', tertiaries: ['Annoyed', 'Agitated'] },
        { name: 'Aggressive', tertiaries: ['Hostile', 'Provocative'] },
        { name: 'Bitter', tertiaries: ['Resentful', 'Indignant'] },
        { name: 'Critical', tertiaries: ['Skeptical', 'Sarcastic'] }
      ]
    },
    {
      core: 'Scared',
      colors: {
        core: '#967FA6',
        sec: ['#AC99BB', '#B7A6C4', '#C3B4CE', '#CEC2D7'],
        tert: ['#BCACCA', '#D1C5DC', '#C4B5D1', '#D7CCE2', '#CCBFE7', '#DED4E8', '#D4C8DE', '#E5DCED']
      },
      textColor: '#221829',
      secondaries: [
        { name: 'Anxious', tertiaries: ['Overwhelmed', 'Worried'] },
        { name: 'Insecure', tertiaries: ['Inadequate', 'Inferior'] },
        { name: 'Helpless', tertiaries: ['Frightened', 'Paralyzed'] },
        { name: 'Threatened', tertiaries: ['Nervous', 'Exposed'] }
      ]
    }
  ];

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

  const PROGRESS_ARCHIVE_KEY = 'akku_progress_ledger_v2';

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
    const r0 = 55;
    const r1 = 125;
    const r2 = 210;
    const r3 = 300;

    const layerTert = createSvgEl('g', { id: 'layerTert' });
    const layerSec = createSvgEl('g', { id: 'layerSec' });
    const layerCore = createSvgEl('g', { id: 'layerCore' });
    const layerHub = createSvgEl('g', { id: 'layerHub', cursor: 'pointer' });

    svg.appendChild(layerTert);
    svg.appendChild(layerSec);
    svg.appendChild(layerCore);
    svg.appendChild(layerHub);

    feelingsWheelData.forEach((coreData, cIdx) => {
      const coreStart = -90 + cIdx * 60;
      const coreEnd = coreStart + 60;

      // 1. Core Wedge
      const corePath = createSvgEl('path', {
        d: describeArc(cx, cy, r0, r1, coreStart, coreEnd),
        fill: coreData.colors.core,
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

      // 2. Secondary Wedges
      coreData.secondaries.forEach((secData, sIdx) => {
        const secStart = coreStart + sIdx * 15;
        const secEnd = secStart + 15;

        const secPath = createSvgEl('path', {
          d: describeArc(cx, cy, r1, r2, secStart, secEnd),
          fill: coreData.colors.sec[sIdx],
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
          fill: coreData.textColor,
          class: 'wheel-text wheel-text-sec'
        });
        secText.textContent = secData.name;

        bindWedgeEvents(secPath, { core: coreData.core, sec: secData.name, tert: null });
        layerSec.appendChild(secPath);
        layerSec.appendChild(secText);

        // 3. Tertiary Wedges
        secData.tertiaries.forEach((tertName, tIdx) => {
          const tertStart = secStart + tIdx * 7.5;
          const tertEnd = tertStart + 7.5;
          const colorIdx = sIdx * 2 + tIdx;

          const tertPath = createSvgEl('path', {
            d: describeArc(cx, cy, r2, r3, tertStart, tertEnd),
            fill: coreData.colors.tert[colorIdx],
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
            fill: coreData.textColor,
            class: 'wheel-text wheel-text-tert'
          });
          tertText.textContent = tertName;

          bindWedgeEvents(tertPath, { core: coreData.core, sec: secData.name, tert: tertName });
          layerTert.appendChild(tertPath);
          layerTert.appendChild(tertText);
        });
      });
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

      const now = new Date();
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
      const formattedDate = now.toLocaleDateString('en-US', options);

      const pathArray = [selectedWheelEmotion.core];
      if (selectedWheelEmotion.sec) pathArray.push(selectedWheelEmotion.sec);
      if (selectedWheelEmotion.tert) pathArray.push(selectedWheelEmotion.tert);
      const fullPath = pathArray.join(' - ');

      const newEntry = {
        id: 'wheel_' + Date.now(),
        timestamp: formattedDate,
        domain: fullPath,
        subEmotions: ['Feelings Wheel'],
        somaticSensations: Array.from(selectedSomaticSensations),
        note: noteText || `Reflected on ${fullPath}`
      };

      const entries = getArchiveEntries();
      entries.unshift(newEntry);
      setArchiveEntries(entries);

      playChime(660, 1.4);

      if (noteInput) noteInput.value = '';
      selectedSomaticSensations.clear();
      const chips = document.querySelectorAll('.somatic-chip');
      chips.forEach(c => c.classList.remove('selected'));

      const notice = document.getElementById('journalDoneNotice');
      if (notice) {
        notice.style.display = 'inline-block';
        notice.textContent = 'Saved to your progress ledger!';
        setTimeout(() => {
          notice.style.display = 'none';
        }, 3000);
      }

      renderArchiveLedger();
    });
  }

  // Render My Progress Ledger
  function renderArchiveLedger() {
    if (!archiveEntriesList) return;
    const entries = getArchiveEntries();

    if (entries.length === 0) {
      archiveEntriesList.innerHTML = `
        <div class="empty-archive-msg">
          The ledger is awaiting your first reflection. Select a domain above to record an affective observation.
        </div>
      `;
      return;
    }

    archiveEntriesList.innerHTML = '';
    entries.forEach((entry, idx) => {
      const row = document.createElement('div');
      row.className = 'archive-entry-row';

      const subTagsHtml = entry.subEmotions.length > 0
        ? entry.subEmotions.map(sub => `<span class="entry-tag-item">${sub}</span>`).join('')
        : '<span class="entry-tag-item" style="color: var(--muted);">No granular states selected</span>';

      const somaticTagsHtml = entry.somaticSensations.length > 0
        ? `<div class="entry-somatic-item">Physical sensations: ${entry.somaticSensations.join(', ')}</div>`
        : '';

      const noteHtml = entry.note
        ? `<blockquote class="entry-note-quote">"${entry.note}"</blockquote>`
        : '';

      row.innerHTML = `
        <div class="entry-timestamp">${entry.timestamp}</div>
        <div class="entry-detail-group">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <strong style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--fg); font-weight: 500;">${entry.domain}</strong>
            <button class="archive-delete-btn" data-id="${entry.id}" style="background: none; border: none; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted); cursor: pointer;" title="Remove entry">Delete</button>
          </div>
          <div class="entry-tags-row">
            ${subTagsHtml}
          </div>
          ${somaticTagsHtml}
          ${noteHtml}
        </div>
      `;

      const deleteBtn = row.querySelector('.archive-delete-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          const updated = getArchiveEntries().filter(e => e.id !== entry.id);
          setArchiveEntries(updated);
          playClick(800);
          renderArchiveLedger();
        });
      }

      archiveEntriesList.appendChild(row);
    });
  }

  // Clear Ledger Button
  if (clearArchiveBtn) {
    clearArchiveBtn.addEventListener('click', () => {
      if (confirm('Reset entire archival emotional ledger?')) {
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
      desc: 'Two brief inhales through the nose followed by one long, slow, unforced exhalation through the mouth. Clinical research verifies this instantly resets carbon dioxide balance and triggers the parasympathetic vagal brake.',
      // Cycle: Inhale (2s), Top-off Inhale (1.5s), Slow Exhale (5s), Rest (1.5s) = 10s per cycle
      cyclePattern: [
        { phase: 'Inhale through nose', duration: 2.0, visualClass: 'inhale' },
        { phase: 'Top-off inhale', duration: 1.5, visualClass: 'inhale' },
        { phase: 'Slow mouth exhale', duration: 5.0, visualClass: 'exhale' },
        { phase: 'Natural pause', duration: 1.5, visualClass: 'hold' }
      ]
    },
    adhd_reset: {
      totalDuration: 180,
      name: 'Cognitive Working Memory Reset',
      desc: 'Physical shakeout, 5-point sensory scan, and calibrated box breath. Systematically clears working memory buffers to eliminate attentional tunneling.',
      cyclePattern: [
        { phase: 'Inhale smoothly', duration: 4.0, visualClass: 'inhale' },
        { phase: 'Stillness hold', duration: 4.0, visualClass: 'hold' },
        { phase: 'Even exhalation', duration: 4.0, visualClass: 'exhale' },
        { phase: 'Quiet baseline', duration: 4.0, visualClass: 'hold' }
      ]
    },
    self_compassion: {
      totalDuration: 300,
      name: 'Non-Judgmental Compassion Break',
      desc: 'Neurological pacing to soften harsh executive self-criticism. Places hands gently on chest or lap, acknowledging emotional discomfort without moral blame.',
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
        completeTimer();
        return;
      }

      remainingSeconds--;
      cycleTimeElapsed++;

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

  function completeTimer() {
    stopTimer();
    playChime(660, 2.5);
    if (timerPacingCue) timerPacingCue.textContent = 'Protocol Complete';
    if (timerClockDigits) timerClockDigits.textContent = '00:00';
    if (timerCircle) {
      timerCircle.className = 'hairline-timer-circle hold';
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

  timerSelectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playClick(1100);
      selectTimer(tab.dataset.timer);
    });
  });

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

  // Tool 1: 24 Tactile Silicone Bubble Pop Pad
  const matrixGrid = document.getElementById('matrixGrid');
  const matrixPopCounter = document.getElementById('matrixPopCounter');
  const popAllMatrixBtn = document.getElementById('popAllMatrixBtn');
  const resetMatrixBtn = document.getElementById('resetMatrixBtn');

  function updateMatrixPopCounter() {
    if (!matrixGrid || !matrixPopCounter) return;
    const poppedCount = matrixGrid.querySelectorAll('.tactile-cell.depressed').length;
    matrixPopCounter.textContent = `${poppedCount} / 24 popped`;
    if (poppedCount === 24) {
      playChime(660, 1.2);
      comfortAkshat();
      updateSpeech("All 24 bubbles popped! Your hands are doing great.");
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
      updateMatrixPopCounter();
      playChime(620, 0.7);
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
    playChime(660, 2.2);

    // Increment streak
    const newStreak = getStreak() + 1;
    setStreak(newStreak);

    // Comfort Akshat and return to happy/calm
    comfortAkshat();
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

  // Tool 3: Alabaster Worry Stone (Tactile Ergonomic Pebble)
  const alabasterStone = document.getElementById('alabasterStone');
  const stoneGlowPoint = document.getElementById('stoneGlowPoint');
  const stoneRubCount = document.getElementById('stoneRubCount');
  const stoneMilestoneCue = document.getElementById('stoneMilestoneCue');
  let rubsCount = 0;
  let lastRubTime = 0;

  const stoneMilestones = [
    { count: 10, cue: "Shoulders dropping into ease...", freq: 440 },
    { count: 20, cue: "Hands feeling safe and resting...", freq: 528 },
    { count: 30, cue: "Breathing deep, calm, and steady...", freq: 587 },
    { count: 40, cue: "You are completely safe right now...", freq: 659 },
    { count: 50, cue: "Gentle peace throughout your mind...", freq: 784 }
  ];

  if (alabasterStone) {
    const handleMove = (e) => {
      const rect = alabasterStone.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      if (stoneGlowPoint && clientX && clientY) {
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        stoneGlowPoint.style.left = `${x}px`;
        stoneGlowPoint.style.top = `${y}px`;
      }
    };

    const recordRub = (e) => {
      handleMove(e);
      const now = Date.now();
      if (now - lastRubTime > 120) {
        lastRubTime = now;
        rubsCount++;
        if (stoneRubCount) stoneRubCount.textContent = String(rubsCount);
        playStoneFriction();

        const milestone = stoneMilestones.find(m => m.count === rubsCount);
        if (milestone) {
          if (stoneMilestoneCue) stoneMilestoneCue.textContent = milestone.cue;
          playChime(milestone.freq, 1.4);
          if (rubsCount === 50) {
            comfortAkshat();
            updateSpeech("50 gentle strokes. Your mind is quiet and your hands are at rest.");
          }
        } else if (rubsCount > 50 && rubsCount % 15 === 0) {
          const extraCues = [
            "Stillness returning to your fingers...",
            "Quiet strength in this moment...",
            "Every breath softens your heart...",
            "You are doing wonderfully well..."
          ];
          const cueIdx = Math.floor(rubsCount / 15) % extraCues.length;
          if (stoneMilestoneCue) stoneMilestoneCue.textContent = extraCues[cueIdx];
          playChime(528, 1.0);
        }

        alabasterStone.style.boxShadow = '0 14px 34px rgba(212, 175, 55, 0.28)';
        setTimeout(() => {
          alabasterStone.style.boxShadow = '';
        }, 180);
      }
    };

    alabasterStone.addEventListener('pointermove', (e) => {
      handleMove(e);
      if (e.buttons > 0) {
        recordRub(e);
      }
    });

    alabasterStone.addEventListener('touchmove', (e) => {
      recordRub(e);
    }, { passive: true });

    alabasterStone.addEventListener('click', recordRub);
  }

})();

