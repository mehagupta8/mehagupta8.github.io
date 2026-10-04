/**
 * Pocket Akshat - Interactive Logic & Audio Engine
 * Made with love by Meha for Akshat ❤️
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Audio Engine (Web Audio API Synthesizer - Zero External Assets)
  // ==========================================================================
  let audioCtx = null;
  let isSoundEnabled = true;

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

  // Cute bubble pop sound (randomized pitch for tactile realism)
  function playBubblePop() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      const freq = 450 + Math.random() * 350;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.8, audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.06);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Gentle calming chime / singing bowl tone
  function playChime(freq = 528) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.6);
    } catch (e) {}
  }

  // Cozy match strike / whoosh for candle
  function playFlameIgnite() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      // Noise burst for whoosh
      const bufferSize = audioCtx.sampleRate * 0.2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, audioCtx.currentTime);
      filter.frequency.linearRampToValueAtTime(900, audioCtx.currentTime + 0.1);
      filter.frequency.linearRampToValueAtTime(200, audioCtx.currentTime + 0.2);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
    } catch (e) {}
  }

  // Haptic feedback for mobile phones
  function triggerHaptic(duration = 25) {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(duration);
      } catch (e) {}
    }
  }

  // ==========================================================================
  // 2. Mini Akshat Dialogues & Character Interactions
  // ==========================================================================
  const akshatDialogues = [
    "Akshat, I'm so proud of how hard you work. Now take one slow breath!",
    "Drop your shoulders, unclench your jaw. You're doing amazing, my love.",
    "Hey handsome! Leave your curls alone for a bit—pet my digital curls instead! 🥰",
    "Hands off the nails! Your hands deserve rest and gentleness today. ✨",
    "You are 5'10 of pure brilliance, but even strong guys need a pause.",
    "Whenever everything feels overwhelming, remember: Meha loves you endlessly.",
    "Drink a sip of water, shake out your hands, and smile. You've got this.",
    "Is your mind racing? Tap the '60s Urge Surfer' below and ride the wave with me.",
    "Don't carry the whole world on your broad shoulders today. One step at a time.",
    "You are safe, you are loved, and today's stress is only temporary."
  ];

  const speechBubble = document.getElementById('speechBubble');
  const speechText = document.getElementById('speechText');
  const avatarStage = document.getElementById('avatarStage');
  const avatarEyes = document.getElementById('avatarEyes');
  const avatarHappyEyes = document.getElementById('avatarHappyEyes');
  const leftBlush = document.getElementById('leftBlush');
  const rightBlush = document.getElementById('rightBlush');
  const floatingHearts = document.getElementById('floatingHearts');

  function showAkshatDialogue(customText) {
    const text = customText || akshatDialogues[Math.floor(Math.random() * akshatDialogues.length)];
    speechText.textContent = text;

    speechBubble.style.animation = 'none';
    speechBubble.offsetHeight; // trigger reflow
    speechBubble.style.animation = 'bubblePopIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    // Trigger happy face reaction
    avatarEyes.style.display = 'none';
    avatarHappyEyes.style.display = 'block';
    leftBlush.style.opacity = '0.85';
    rightBlush.style.opacity = '0.85';

    avatarStage.classList.add('happy-bounce');

    setTimeout(() => {
      avatarEyes.style.display = 'block';
      avatarHappyEyes.style.display = 'none';
      leftBlush.style.opacity = '0.45';
      rightBlush.style.opacity = '0.45';
      avatarStage.classList.remove('happy-bounce');
    }, 1800);
  }

  function spawnHeart(e) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    const hearts = ['❤️', '💖', '✨', '🧸', '🌸', '💫'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    const rect = avatarStage.getBoundingClientRect();
    const x = e ? (e.clientX - rect.left) : (rect.width / 2);
    const y = e ? (e.clientY - rect.top) : (rect.height / 2);

    heart.style.left = `${Math.max(20, Math.min(rect.width - 40, x + (Math.random() * 40 - 20)))}px`;
    heart.style.top = `${Math.max(20, Math.min(rect.height - 40, y + (Math.random() * 30 - 15)))}px`;

    floatingHearts.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }

  // Tapping Mini Akshat
  avatarStage.addEventListener('click', (e) => {
    initAudio();
    playChime(660);
    triggerHaptic(30);
    spawnHeart(e);
    showAkshatDialogue();
  });

  // Pet My Curls button
  document.getElementById('patHeadBtn').addEventListener('click', () => {
    initAudio();
    playChime(780);
    triggerHaptic(40);
    spawnHeart();
    spawnHeart();
    showAkshatDialogue("Mmm, thank you for petting my curls! Keep your hands right here instead of rolling yours! 💆‍♂️❤️");
  });

  // Hug Meha button
  document.getElementById('hugBtn').addEventListener('click', () => {
    initAudio();
    playChime(528);
    triggerHaptic(50);
    for (let i = 0; i < 4; i++) {
      setTimeout(spawnHeart, i * 150);
    }
    showAkshatDialogue("Big warm hug wrapped tightly around you! Feel your shoulders melt. Meha has got you. 🤗");
    triggerConfetti();
  });

  // SOS Hands Button
  document.getElementById('sosHandsBtn').addEventListener('click', () => {
    initAudio();
    playChime(440);
    triggerHaptic(60);
    const busySection = document.getElementById('busyHandsSection');
    busySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showAkshatDialogue("I see that hand moving! Freeze right there! Let's pop some bubbles below instead. 🫧");
  });

  // ==========================================================================
  // 3. Busy Hands Sensory Sanctuary (Tactile Bubble Wrap, Surfer, Worry Stone)
  // ==========================================================================
  
  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = {
    bubbleWrap: document.getElementById('tabBubbleWrap'),
    urgeSurfer: document.getElementById('tabUrgeSurfer'),
    worryStone: document.getElementById('tabWorryStone')
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      Object.values(tabContents).forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const target = btn.dataset.tab;
      if (tabContents[target]) {
        tabContents[target].classList.add('active');
      }
    });
  });

  // Urge Streak Management
  let urgeStreak = parseInt(localStorage.getItem('akshat_urge_streak') || '0', 10);
  const streakDisplay = document.getElementById('streakCount');
  streakDisplay.textContent = urgeStreak;

  function incrementStreak() {
    urgeStreak += 1;
    localStorage.setItem('akshat_urge_streak', urgeStreak);
    streakDisplay.textContent = urgeStreak;
    triggerConfetti();
  }

  // --- Feature A: Bubble Wrap Popper ---
  const bubbleGrid = document.getElementById('bubbleGrid');
  const resetBubblesBtn = document.getElementById('resetBubblesBtn');
  const TOTAL_BUBBLES = 24;

  function createBubbles() {
    bubbleGrid.innerHTML = '';
    for (let i = 0; i < TOTAL_BUBBLES; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble-item';
      bubble.setAttribute('role', 'button');
      bubble.setAttribute('aria-label', 'Pop bubble');

      bubble.addEventListener('click', () => {
        if (!bubble.classList.contains('popped')) {
          bubble.classList.add('popped');
          playBubblePop();
          triggerHaptic(20);

          // Check if all popped
          const popped = bubbleGrid.querySelectorAll('.bubble-item.popped').length;
          if (popped === TOTAL_BUBBLES) {
            playChime(587);
            showAkshatDialogue("All bubbles popped! Look at those safe, busy hands! Proud of you! 🎉");
            incrementStreak();
          }
        }
      });

      bubbleGrid.appendChild(bubble);
    }
  }

  resetBubblesBtn.addEventListener('click', () => {
    initAudio();
    playChime(660);
    createBubbles();
  });

  createBubbles();

  // --- Feature B: 60-Second Urge Surfer ---
  let surferTimer = null;
  let surferSecondsLeft = 60;
  const startSurferBtn = document.getElementById('startSurferBtn');
  const resetSurferBtn = document.getElementById('resetSurferBtn');
  const timerSecondsDisplay = document.getElementById('timerSeconds');
  const surferProgress = document.getElementById('surferProgress');
  const surferStepTitle = document.getElementById('surferStepTitle');
  const surferStepDesc = document.getElementById('surferStepDesc');

  const circleRadius = 68;
  const circleCircumference = 2 * Math.PI * circleRadius;
  surferProgress.style.strokeDasharray = `${circleCircumference} ${circleCircumference}`;
  surferProgress.style.strokeDashoffset = '0';

  function setSurferProgress(percent) {
    const offset = circleCircumference - (percent / 100) * circleCircumference;
    surferProgress.style.strokeDashoffset = offset;
  }

  const surferSteps = [
    { at: 55, title: "Urges only peak for 60 seconds.", desc: "Rest both hands flat on your thighs. Take a long, slow breath in through your nose..." },
    { at: 45, title: "The wave is rising 🌊", desc: "Notice the urge without acting on it. It’s just electricity in your brain looking for release. Let it pass through." },
    { at: 30, title: "Peak reached! Surfing down 🏄‍♂️", desc: "Halfway there! Your hands are doing incredible. Exhale fully, letting your chest soften." },
    { at: 15, title: "The wave is dissolving ✨", desc: "Almost finished. Your hair and nails are safe and untouched. You have total mastery over this moment." },
    { at: 0, title: "You surfed the urge! 🏆", desc: "Way to go, Akshat! You successfully outlasted the urge. You kept your hands safe!" }
  ];

  function updateSurferText(sec) {
    for (const step of surferSteps) {
      if (sec >= step.at || sec === 0) {
        surferStepTitle.textContent = step.title;
        surferStepDesc.textContent = step.desc;
        break;
      }
    }
  }

  startSurferBtn.addEventListener('click', () => {
    initAudio();
    if (surferTimer) {
      // Pause
      clearInterval(surferTimer);
      surferTimer = null;
      startSurferBtn.textContent = 'Resume Surfing 🌊';
      return;
    }

    startSurferBtn.textContent = 'Pause';
    resetSurferBtn.style.display = 'inline-block';

    surferTimer = setInterval(() => {
      surferSecondsLeft--;
      timerSecondsDisplay.textContent = surferSecondsLeft;
      const progressPercent = ((60 - surferSecondsLeft) / 60) * 100;
      setSurferProgress(progressPercent);
      updateSurferText(surferSecondsLeft);

      if (surferSecondsLeft % 15 === 0) {
        playChime(440 + (60 - surferSecondsLeft) * 5);
      }

      if (surferSecondsLeft <= 0) {
        clearInterval(surferTimer);
        surferTimer = null;
        startSurferBtn.textContent = 'Surfed! ✨';
        startSurferBtn.disabled = true;
        playChime(880);
        triggerHaptic(80);
        incrementStreak();
        showAkshatDialogue("You surfed the whole urge without touching your hair or nails! So proud of you! ❤️");
      }
    }, 1000);
  });

  resetSurferBtn.addEventListener('click', () => {
    clearInterval(surferTimer);
    surferTimer = null;
    surferSecondsLeft = 60;
    timerSecondsDisplay.textContent = '60';
    setSurferProgress(0);
    startSurferBtn.disabled = false;
    startSurferBtn.textContent = 'Ride the Urge Wave 🌊';
    resetSurferBtn.style.display = 'none';
    surferStepTitle.textContent = "Urges only peak for 60-90 seconds.";
    surferStepDesc.textContent = "Put both hands flat on your thighs or desk. Breathe deeply. Ride the wave like a surfer until it settles.";
  });

  // --- Feature C: Tactile Worry Stone ---
  const worryStone = document.getElementById('worryStone');
  const rubCountDisplay = document.getElementById('rubCount');
  let rubCount = 0;
  let lastRubTime = 0;

  function handleStoneRub(e) {
    const now = Date.now();
    if (now - lastRubTime > 180) {
      rubCount++;
      rubCountDisplay.textContent = rubCount;
      lastRubTime = now;
      triggerHaptic(12);

      if (rubCount % 20 === 0) {
        playChime(528);
        showAkshatDialogue("Feeling more grounded? Smooth, steady breaths with that stone. 🪨");
      }
    }
  }

  worryStone.addEventListener('pointermove', handleStoneRub);
  worryStone.addEventListener('touchmove', handleStoneRub, { passive: true });

  // ==========================================================================
  // 4. Gentle Therapy Check-In
  // ==========================================================================
  const moodResponses = {
    restless: {
      emoji: "🌪️",
      title: "Restless energy needs a gentle exit.",
      subtitle: "When your fingers want to twirl hair or pick, it's just stress trying to move.",
      prompt: "Can we let your hands do something kind right now? Pop 10 bubbles above, or rub the worry stone for 30 seconds."
    },
    overwhelmed: {
      emoji: "🌧️",
      title: "Everything feels urgent, but it doesn't have to be.",
      subtitle: "You're trying to solve 10 things at once. Let's make it 1.",
      prompt: "What is the single thing on your to-do list that actually matters today? The rest can wait until tomorrow."
    },
    tired: {
      emoji: "🔋",
      title: "Your battery is low, and that's okay.",
      subtitle: "You don't have to be 100% productive every hour of the day.",
      prompt: "Can you take a 10-minute horizontal break or close your eyes? Rest is productive too."
    },
    anxious: {
      emoji: "☁️",
      title: "Anxiety is living in the tomorrow. Let's come back to right now.",
      subtitle: "In this exact moment, in your chair, you are safe.",
      prompt: "Look around you right now: name 3 things that are completely stable and still."
    },
    good: {
      emoji: "☀️",
      title: "I'm so happy you're feeling good!",
      subtitle: "Take a moment to absorb this peaceful feeling.",
      prompt: "What was one sweet thing that happened today? Hold onto that warmth!"
    }
  };

  const moodButtons = document.querySelectorAll('.mood-btn');
  const therapyResponseCard = document.getElementById('therapyResponseCard');
  const responseMoodEmoji = document.getElementById('responseMoodEmoji');
  const responseTitle = document.getElementById('responseTitle');
  const responseSubtitle = document.getElementById('responseSubtitle');
  const responsePromptText = document.getElementById('responsePromptText');
  const reflectionInput = document.getElementById('reflectionInput');
  const releaseThoughtBtn = document.getElementById('releaseThoughtBtn');

  moodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playChime(580);
      moodButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      const moodKey = btn.dataset.mood;
      const data = moodResponses[moodKey];
      if (data) {
        responseMoodEmoji.textContent = data.emoji;
        responseTitle.textContent = data.title;
        responseSubtitle.textContent = data.subtitle;
        responsePromptText.textContent = data.prompt;
        therapyResponseCard.style.display = 'block';
        therapyResponseCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        showAkshatDialogue(`I'm listening, Akshat. Let's take care of this ${data.emoji} feeling together.`);
      }
    });
  });

  releaseThoughtBtn.addEventListener('click', () => {
    if (!reflectionInput.value.trim()) {
      showAkshatDialogue("Write something down first, even just one word, so we can let it go.");
      return;
    }
    initAudio();
    playChime(720);
    triggerHaptic(40);
    reflectionInput.style.transition = 'all 0.6s ease';
    reflectionInput.style.transform = 'translateY(-20px)';
    reflectionInput.style.opacity = '0';

    setTimeout(() => {
      reflectionInput.value = '';
      reflectionInput.style.transform = 'translateY(0)';
      reflectionInput.style.opacity = '1';
      showAkshatDialogue("Thought released into the air 🍃 You don't have to carry that anymore.");
      triggerConfetti();
    }, 600);
  });

  // ==========================================================================
  // 5. Cozy Self-Care Quests (Breathing, Candle, Mom, Love Notes)
  // ==========================================================================

  // --- Quest 1: 5-Min Calming Breathing ---
  const openBreathingBtn = document.getElementById('openBreathingBtn');
  const breathingModal = document.getElementById('breathingModal');
  const toggleBreatheBtn = document.getElementById('toggleBreatheBtn');
  const closeBreatheBtn = document.getElementById('closeBreatheBtn');
  const breatheCircle = document.getElementById('breatheCircle');
  const breatheInstruction = document.getElementById('breatheInstruction');
  const breatheCountdown = document.getElementById('breatheCountdown');

  let breatheActive = false;
  let breatheTimer = null;
  let breatheSeconds = 300; // 5 minutes
  let breathCycleTimer = null;

  openBreathingBtn.addEventListener('click', () => {
    breathingModal.style.display = 'flex';
    openBreathingBtn.style.display = 'none';
  });

  closeBreatheBtn.addEventListener('click', () => {
    stopBreathing();
    breathingModal.style.display = 'none';
    openBreathingBtn.style.display = 'inline-block';
  });

  function startBreathing() {
    breatheActive = true;
    toggleBreatheBtn.textContent = 'Pause Session';

    function runCycle() {
      if (!breatheActive) return;
      // Inhale 4s
      breatheInstruction.textContent = 'Inhale';
      breatheCircle.className = 'breathe-circle inhale';
      playChime(440);

      breathCycleTimer = setTimeout(() => {
        if (!breatheActive) return;
        // Hold 4s
        breatheInstruction.textContent = 'Hold';
        
        breathCycleTimer = setTimeout(() => {
          if (!breatheActive) return;
          // Exhale 4s
          breatheInstruction.textContent = 'Exhale';
          breatheCircle.className = 'breathe-circle exhale';
          playChime(380);

          breathCycleTimer = setTimeout(() => {
            if (!breatheActive) return;
            // Hold 2s
            breatheInstruction.textContent = 'Rest';
            breathCycleTimer = setTimeout(runCycle, 2000);
          }, 4000);
        }, 4000);
      }, 4000);
    }

    runCycle();

    breatheTimer = setInterval(() => {
      breatheSeconds--;
      const m = String(Math.floor(breatheSeconds / 60)).padStart(2, '0');
      const s = String(breatheSeconds % 60).padStart(2, '0');
      breatheCountdown.textContent = `${m}:${s}`;

      if (breatheSeconds <= 0) {
        stopBreathing();
        playChime(880);
        triggerConfetti();
        showAkshatDialogue("5 minutes of peaceful meditation complete! Your lungs and heart thank you. 🫁✨");
      }
    }, 1000);
  }

  function stopBreathing() {
    breatheActive = false;
    toggleBreatheBtn.textContent = 'Begin Breathwork';
    clearInterval(breatheTimer);
    clearTimeout(breathCycleTimer);
    breatheCircle.className = 'breathe-circle';
    breatheInstruction.textContent = 'Ready';
  }

  toggleBreatheBtn.addEventListener('click', () => {
    initAudio();
    if (breatheActive) {
      stopBreathing();
    } else {
      startBreathing();
    }
  });

  // --- Quest 2: Virtual Candle ---
  const lightCandleBtn = document.getElementById('lightCandleBtn');
  const candleFlame = document.getElementById('candleFlame');
  const candleGlow = document.getElementById('candleGlow');
  let isCandleLit = false;

  lightCandleBtn.addEventListener('click', () => {
    initAudio();
    isCandleLit = !isCandleLit;

    if (isCandleLit) {
      playFlameIgnite();
      candleFlame.classList.add('lit');
      candleGlow.classList.add('lit');
      lightCandleBtn.textContent = '🌬️ Tap to blow out';
      showAkshatDialogue("The candle is glowing. Let the warm flicker bring peace to your space. 🕯️");
    } else {
      playBubblePop();
      candleFlame.classList.remove('lit');
      candleGlow.classList.remove('lit');
      lightCandleBtn.textContent = '✨ Tap to light candle';
      showAkshatDialogue("Candle blown out with a peaceful wish.");
    }
  });

  // --- Quest 3: Call Mom ---
  const momDoneBtn = document.getElementById('momDoneBtn');
  momDoneBtn.addEventListener('click', () => {
    initAudio();
    playChime(660);
    momDoneBtn.classList.add('done');
    momDoneBtn.textContent = '✓ Called Mom ❤️';
    triggerConfetti();
    showAkshatDialogue("Moms always make everything a little softer. Proud of you for calling her! 📞");
  });

  // --- Quest 4: Secret Love Notes from Meha ---
  const loveNotes = [
    "Akshat, you don't have to carry the whole world today. Take it one gentle step at a time. I love you so much and believe in you always! ❤️",
    "You are the most resilient, hardworking, handsome human I know. Give your hair a break and give yourself some grace today!",
    "No matter how heavy today feels, it is just one chapter, not the whole book. I'm in your corner forever and ever.",
    "Whenever you want to bite your nails or twirl your hair, imagine my hand holding yours instead. You are doing so well, my love.",
    "Did you know how much your smile brightens my day? Take a breath, relax your jaw, and remember how cherished you are.",
    "Even on your hardest, most stressful days, you are more than enough. Proud to be your biggest cheerleader."
  ];

  const openLetterBtn = document.getElementById('openLetterBtn');
  const newNoteBtn = document.getElementById('newNoteBtn');
  const envelope = document.getElementById('envelope');
  const loveNoteText = document.getElementById('loveNoteText');

  openLetterBtn.addEventListener('click', () => {
    initAudio();
    playChime(620);
    envelope.classList.add('open');
    openLetterBtn.style.display = 'none';
    newNoteBtn.style.display = 'inline-block';
    triggerConfetti();
  });

  newNoteBtn.addEventListener('click', () => {
    initAudio();
    playChime(540);
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    loveNoteText.textContent = `"${randomNote}"`;
  });

  // ==========================================================================
  // 6. Navigation Controls (Sound Toggle & Night Mode)
  // ==========================================================================
  const soundToggle = document.getElementById('soundToggle');
  const nightToggle = document.getElementById('nightToggle');

  soundToggle.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    soundToggle.querySelector('.icon').textContent = isSoundEnabled ? '🔊' : '🔇';
    if (isSoundEnabled) {
      initAudio();
      playChime(700);
    }
  });

  nightToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    const isNight = document.body.classList.contains('night-mode');
    nightToggle.querySelector('.icon').textContent = isNight ? '☀️' : '🌙';
  });

  // ==========================================================================
  // 7. Lightweight Canvas Confetti Engine
  // ==========================================================================
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function triggerConfetti() {
    const colors = ['#E2847A', '#FCD5CE', '#5E8268', '#F6BD60', '#8E7CC3', '#FFFFFF'];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 200 - 100),
        y: canvas.height * 0.4 + (Math.random() * 100 - 50),
        r: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        vx: Math.random() * 6 - 3,
        vy: Math.random() * -5 - 3,
        gravity: 0.15,
        opacity: 1
      });
    }
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.opacity -= 0.012;

      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      if (p.opacity <= 0) {
        particles.splice(index, 1);
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(renderConfetti);
  }
  renderConfetti();

})();
