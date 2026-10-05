/**
 * Pocket Akshat - Interactive Logic & Audio Engine
 * Made with love by Meha for Akshat (Akku) ❤️
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
    } catch (e) {}
  }

  // Gentle calming chime / singing bowl tone
  function playChime(freq = 528, duration = 1.6) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Cozy match strike / whoosh for candle
  function playFlameIgnite() {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
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
    "Akku, I'm so proud of how hard you work. Now take one slow breath!",
    "Drop your shoulders, unclench your jaw. You're doing amazing, my love.",
    "Hey handsome! Leave your curls alone for a bit—pet my digital curls instead! 🥰",
    "Hands off the nails! Your hands deserve rest and gentleness today. ✨",
    "You are 5'10 of pure brilliance, but even strong guys need a pause.",
    "Whenever everything feels overwhelming, remember: Meha loves you endlessly.",
    "Drink a sip of water, shake out your hands, and smile. You've got this.",
    "Is your mind racing? Check out the Feelings Wheel below to name what your body is feeling.",
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

  avatarStage.addEventListener('click', (e) => {
    initAudio();
    playChime(660);
    triggerHaptic(30);
    spawnHeart(e);
    showAkshatDialogue();
  });

  document.getElementById('patHeadBtn').addEventListener('click', () => {
    initAudio();
    playChime(780);
    triggerHaptic(40);
    spawnHeart();
    spawnHeart();
    showAkshatDialogue("Mmm, thank you for petting my curls! Keep your hands right here instead of rolling yours! 💆‍♂️❤️");
  });

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

  document.getElementById('sosHandsBtn').addEventListener('click', () => {
    initAudio();
    playChime(440);
    triggerHaptic(60);
    const busySection = document.getElementById('busyHandsSection');
    busySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showAkshatDialogue("I see that hand moving! Freeze right there! Let's pop some bubbles below instead. 🫧");
  });

  // ==========================================================================
  // 3. NEAR-HERO: "What Are You Anxious About Today?" (ADHD Proven Research)
  // ==========================================================================
  const adhdAnxietyData = {
    assignments: {
      icon: "📚",
      title: "Assignments & Executive Dysfunction Paralysis",
      citation: "Clinical Research: Dr. Russell Barkley (Executive Function Point-of-Performance Scaffolding)",
      neuro: "Your prefrontal cortex is experiencing low tonic dopamine, creating 'Task Initiation Paralysis'. The brain treats looking at the entire assignment as a cognitive threat, triggering avoidance (scrolling, hair-rolling).",
      steps: [
        {
          title: "1. The 2-Minute Micro-Step (Lower Activation Energy)",
          desc: "Do not try to finish the assignment. Open the document, write your name and the title, and format 1 heading. That's all. Breaking the activation threshold is 80% of the battle."
        },
        {
          title: "2. Stimulus Pairing / Dopamine Bridge",
          desc: "Pair this boring task with sensory pleasure: put on low-frequency brown noise or video game soundtracks, get an ice-cold beverage, and use a timer."
        },
        {
          title: "3. Body Doubling (Social Mirroring)",
          desc: "ADHD brains focus 400% better in the presence of another calm human. Mini Akshat is sitting right here with you as your digital body double."
        }
      ],
      actionHtml: `
        <button id="bodyDoubleBtn" class="pill-btn primary-pill">
          🧸 Start 15-Min Body-Double Study Session with Mini Akshat
        </button>
      `
    },
    tony: {
      icon: "💼",
      title: "Tony (Manager) & Workplace RSD Protocol",
      citation: "Clinical Research: Dr. William Dodson (Rejection Sensitive Dysphoria in Adult ADHD)",
      neuro: "Adults with ADHD possess an ultra-sensitive neurological response to perceived evaluation or criticism (RSD). Neutral messages like 'let's chat' trigger a flood of fight-or-flight adrenaline, misinterpreting ambiguity as danger.",
      steps: [
        {
          title: "1. Fact vs. Threat Reality Check (Cognitive Grounding)",
          desc: "Ask yourself: 'What verifiable facts do I have right now?' Tony sent a standard message. He has his own deadlines, stress, and communication habits that have nothing to do with your worth."
        },
        {
          title: "2. The 3-Minute Amygdala Cool-Down",
          desc: "Do not respond while your nervous system is in tachycardia. Drop your shoulders, unstick your tongue from the roof of your mouth, and do 2 physiological sighs."
        },
        {
          title: "3. Professional Low-Friction Scripting",
          desc: "Use a clear, concise, neutral response to regain control over the interaction without over-explaining."
        }
      ],
      actionHtml: `
        <div class="script-box">
          <strong>📋 Low-Stress Slack/Email Template for Tony:</strong>
          <p id="tonyScriptText">"Hi Tony, working through XYZ today. I'm wrapping up a section now—let's touch base at [time] or let me know what you need in bullets!"</p>
          <button id="copyScriptBtn" class="pill-btn">📋 Copy Script to Clipboard</button>
        </div>
      `
    },
    year_ending: {
      icon: "⏳",
      title: "2026 is Ending & ADHD 'Time Blindness'",
      citation: "Clinical Research: Dr. Thomas E. Brown (ADHD Temporal Discounting & Horizon Compression)",
      neuro: "ADHD brains experience time in only two modes: 'NOW' and 'NOT NOW'. As calendar milestones approach, 'NOT NOW' suddenly collapses into panic, creating existential grief about unfinished goals.",
      steps: [
        {
          title: "1. The Reverse Bucket List",
          desc: "Instead of obsessing over what you didn't finish, write down 3 massive challenges, projects, or personal obstacles you survived this year that your ADHD brain erased from memory."
        },
        {
          title: "2. Shrink Your Horizon to 24 Hours",
          desc: "You cannot live the rest of 2026 today. Focus only on what you need for the next 24 hours. Your nervous system only needs to carry today."
        },
        {
          title: "3. Non-Linear Growth Acceptance",
          desc: "Neurodivergent progress happens in bursts and creative leaps, not steady corporate lines. You are progressing even when you are resting."
        }
      ],
      actionHtml: `
        <button id="celebrateWinsBtn" class="pill-btn primary-pill">
          🎉 Celebrate 2026 Survival Wins (Click for Confetti!)
        </button>
      `
    },
    missing_girlfriend: {
      icon: "🥺",
      title: "Missing My Girlfriend (Meha) & Emotional Anchoring",
      citation: "Clinical Research: Dr. Kristin Neff (Co-Regulation & Mindful Self-Compassion)",
      neuro: "ADHD brains experience deep emotional hyperfocus and object-permanence longing when separated from their primary secure attachment. Physical touch and voice are your nervous system's regulatory anchors.",
      steps: [
        {
          title: "1. Somatic Co-Regulation",
          desc: "Place your right hand over your heart and your left hand on your belly. Imagine Meha's arms wrapped tightly around your broad shoulders. You are tethered and deeply loved."
        },
        {
          title: "2. The 30-Second Micro-Tether",
          desc: "You don't need an hour-long call to reconnect. Send a quick 10-second voice note, a cute picture of your coffee, or an emoji to feel tethered in real-time."
        },
        {
          title: "3. Meha's Love is Constant",
          desc: "Meha loves you unconditionally—when you're crushing work, when you're overwhelmed, and when you're just resting."
        }
      ],
      actionHtml: `
        <button id="sendLoveHeartbeatBtn" class="pill-btn urgent-btn">
          💓 Send Love Heartbeat to Meha
        </button>
      `
    },
    clean_house: {
      icon: "🧹",
      title: "House Cleaning Paralysis & Visual Working Memory Overwhelm",
      citation: "Clinical Research: Executive Function Research on Visual Working Memory Saturation",
      neuro: "When you look at a messy room, your ADHD visual working memory processes every single item as an open cognitive demand. 50 items = 50 simultaneous tasks = total shutdown.",
      steps: [
        {
          title: "1. 'Junebugging' Protocol (Stay at the Anchor)",
          desc: "Pick ONE tiny anchor zone (e.g. just your desk surface). Clean ONLY that spot. If you pick up a cup and walk into the kitchen, immediately return to the anchor. Do not start cleaning the kitchen!"
        },
        {
          title: "2. The 5-Minute Trash-Only Sprint",
          desc: "Do not organize. Grab a single trash bag, set a 5-minute timer, and ONLY throw away visible rubbish. When the timer dings, you are done."
        },
        {
          title: "3. The 1-Category Rule",
          desc: "Collect all cups and dishes first. Completely ignore laundry and papers until the dishes are in the sink."
        }
      ],
      actionHtml: `
        <button id="startJunebugBtn" class="pill-btn primary-pill">
          ⏱️ Start 5-Minute 'Trash Only' Sprint Timer
        </button>
      `
    }
  };

  const anxietyButtons = document.querySelectorAll('.anxiety-trigger-btn');
  const anxietyActionDrawer = document.getElementById('anxietyActionDrawer');
  const drawerIcon = document.getElementById('drawerIcon');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerResearchCitation = document.getElementById('drawerResearchCitation');
  const drawerNeuroExplanation = document.getElementById('drawerNeuroExplanation');
  const drawerStepsList = document.getElementById('drawerStepsList');
  const drawerInteractiveAction = document.getElementById('drawerInteractiveAction');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  anxietyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playChime(620);
      triggerHaptic(30);

      anxietyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const triggerKey = btn.dataset.trigger;
      const data = adhdAnxietyData[triggerKey];
      if (!data) return;

      drawerIcon.textContent = data.icon;
      drawerTitle.textContent = data.title;
      drawerResearchCitation.textContent = data.citation;
      drawerNeuroExplanation.textContent = data.neuro;

      drawerStepsList.innerHTML = data.steps.map(s => `
        <div class="step-card">
          <strong>${s.title}</strong>
          <p>${s.desc}</p>
        </div>
      `).join('');

      drawerInteractiveAction.innerHTML = data.actionHtml;
      anxietyActionDrawer.style.display = 'block';
      anxietyActionDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Attach internal action listeners
      if (triggerKey === 'assignments') {
        const bb = document.getElementById('bodyDoubleBtn');
        if (bb) {
          bb.addEventListener('click', () => {
            initAudio();
            playChime(720);
            triggerConfetti();
            showAkshatDialogue("I'm sitting right beside you, Akku. Pull up that doc, let's write 1 sentence together! 🧸📚");
          });
        }
      } else if (triggerKey === 'tony') {
        const cb = document.getElementById('copyScriptBtn');
        if (cb) {
          cb.addEventListener('click', () => {
            const script = document.getElementById('tonyScriptText').textContent;
            navigator.clipboard.writeText(script);
            cb.textContent = '✓ Copied to Clipboard!';
            playChime(800);
            triggerHaptic(40);
            showAkshatDialogue("Script copied! Paste it in, take a breath, and remember you're doing great.");
          });
        }
      } else if (triggerKey === 'year_ending') {
        const cwb = document.getElementById('celebrateWinsBtn');
        if (cwb) {
          cwb.addEventListener('click', () => {
            initAudio();
            playChime(880);
            triggerConfetti();
            showAkshatDialogue("Look at how much you overcame this year! You are stronger and smarter than any deadline. 🏆");
          });
        }
      } else if (triggerKey === 'missing_girlfriend') {
        const hb = document.getElementById('sendLoveHeartbeatBtn');
        if (hb) {
          hb.addEventListener('click', () => {
            initAudio();
            playChime(660);
            triggerHaptic(50);
            for (let i = 0; i < 5; i++) {
              setTimeout(spawnHeart, i * 120);
            }
            showAkshatDialogue("Heartbeat sent to Meha! She loves you with all her heart, Akku. ❤️");
          });
        }
      } else if (triggerKey === 'clean_house') {
        const jb = document.getElementById('startJunebugBtn');
        if (jb) {
          jb.addEventListener('click', () => {
            const timersSec = document.getElementById('calmingTimersSection');
            timersSec.scrollIntoView({ behavior: 'smooth' });
            showAkshatDialogue("Grab 1 bag, 5 minutes only! Let's do this! 🧹");
          });
        }
      }
    });
  });

  closeDrawerBtn.addEventListener('click', () => {
    anxietyActionDrawer.style.display = 'none';
    anxietyButtons.forEach(b => b.classList.remove('active'));
  });

  // ==========================================================================
  // 4. FEELINGS WHEEL: "Feel It, Don't Overthink It" (UCLA Affect Labeling)
  // ==========================================================================
  const feelingsWheelData = {
    anxious: {
      subEmotions: ["Imposter Syndrome", "Dread of Failing", "Hyper-Alert", "Pressured to Perform", "Fear of Letting People Down"],
      somaticAdvice: "Anxiety triggers sympathetic adrenaline. Focus on lengthening your exhales to activate your vagal brake."
    },
    overwhelmed: {
      subEmotions: ["Sensory Overload", "Too Many Choices", "Brain Fog", "Swamped by Details", "Executive Freeze"],
      somaticAdvice: "Overwhelm means working memory saturation. Stop analyzing thoughts—physically close 5 browser tabs or step outside for 60 seconds."
    },
    lonely: {
      subEmotions: ["Missing Meha's Hugs", "Emotionally Disconnected", "Isolated in My Head", "Unanchored", "Longing for Comfort"],
      somaticAdvice: "Loneliness activates physical pain receptors in the anterior cingulate cortex. Place a warm hand on your chest and wrap yourself in your cozy sweater."
    },
    depleted: {
      subEmotions: ["Low Dopamine Battery", "Burnout", "Physically Drained", "Emotionally Numb", "Needing Sleep"],
      somaticAdvice: "Depletion cannot be solved by willpower. Drink an electrolyte beverage, close your eyes for 10 minutes, and stop demanding perfection."
    },
    frustrated: {
      subEmotions: ["Stuck on a Problem", "Impatient with Myself", "Self-Critical", "Misunderstood", "Restless Physical Tension"],
      somaticAdvice: "Frustration is thwarted forward motion. Stand up, shake your hands out vigorously, and do 10 jumping jacks to metabolize the cortisol."
    },
    tender: {
      subEmotions: ["Needing Reassurance", "Quiet & Reflective", "Soft & Vulnerable", "Grateful but Tired", "Sensitive"],
      somaticAdvice: "Tenderness is a sign of your beautiful emotional depth. Give yourself unconditional permission to move slowly today."
    }
  };

  const coreFeelBtns = document.querySelectorAll('.core-feel-btn');
  const subFeelingsBox = document.getElementById('subFeelingsBox');
  const subFeelingsPills = document.getElementById('subFeelingsPills');
  const somaticBox = document.getElementById('somaticBox');
  const somaticPills = document.querySelectorAll('.somatic-pill');
  const somaticResultBox = document.getElementById('somaticResultBox');
  const somaticResultTitle = document.getElementById('somaticResultTitle');
  const somaticResultDesc = document.getElementById('somaticResultDesc');
  const jumpToTimerBtn = document.getElementById('jumpToTimerBtn');

  let selectedCore = null;
  let selectedSub = null;
  let selectedSomatic = null;

  coreFeelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudio();
      playChime(580);
      coreFeelBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      selectedCore = btn.dataset.core;
      selectedSub = null;
      selectedSomatic = null;
      somaticResultBox.style.display = 'none';

      const data = feelingsWheelData[selectedCore];
      if (!data) return;

      subFeelingsPills.innerHTML = data.subEmotions.map(sub => `
        <button class="sub-pill" data-sub="${sub}">${sub}</button>
      `).join('');

      subFeelingsBox.style.display = 'block';
      somaticBox.style.display = 'block';

      // Attach sub-pill listeners
      const pills = subFeelingsPills.querySelectorAll('.sub-pill');
      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          initAudio();
          playChime(660);
          pills.forEach(p => p.classList.remove('selected'));
          pill.classList.add('selected');
          selectedSub = pill.dataset.sub;
          updateSomaticPrescription();
        });
      });
    });
  });

  somaticPills.forEach(pill => {
    pill.addEventListener('click', () => {
      initAudio();
      playChime(640);
      triggerHaptic(20);
      somaticPills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      selectedSomatic = pill.textContent;
      updateSomaticPrescription();
    });
  });

  function updateSomaticPrescription() {
    if (!selectedCore) return;
    const coreData = feelingsWheelData[selectedCore];
    const subText = selectedSub || "intense emotion";
    const bodyText = selectedSomatic ? `held as "${selectedSomatic}"` : "in your body";

    somaticResultTitle.textContent = `You are feeling ${subText} ${bodyText}.`;
    somaticResultDesc.textContent = `${coreData.somaticAdvice} You don't have to figure out all your thoughts right now. Reset your physical state first!`;
    somaticResultBox.style.display = 'block';
    somaticResultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    showAkshatDialogue(`Named it! You're feeling ${subText}. Stop overthinking—let's do a 1-minute body reset.`);
  }

  jumpToTimerBtn.addEventListener('click', () => {
    const timersSec = document.getElementById('calmingTimersSection');
    timersSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    startSighTimer();
  });

  // ==========================================================================
  // 5. CALMING TIMERS HUB (1-Min Physiological Sigh, 3-Min Reset, 5-Min Meditation)
  // ==========================================================================
  const timerTabs = document.querySelectorAll('.timer-tab');
  const timerScienceCitation = document.getElementById('timerScienceCitation');
  const timerVisualCircle = document.getElementById('timerVisualCircle');
  const timerPhaseText = document.getElementById('timerPhaseText');
  const timerClockDigits = document.getElementById('timerClockDigits');
  const timerInstructionSubtitle = document.getElementById('timerInstructionSubtitle');
  const startCalmingTimerBtn = document.getElementById('startCalmingTimerBtn');
  const resetCalmingTimerBtn = document.getElementById('resetCalmingTimerBtn');

  let activeTimerMode = 'sigh';
  let activeTimerInterval = null;
  let activeTimerSeconds = 60;
  let cycleTimerTimeout = null;

  const timerModeConfigs = {
    sigh: {
      citation: "Stanford Medicine (Huberman / Spiegel): 2 Inhales + 1 Long Exhale",
      seconds: 60,
      subGuide: "Fastest proven physiological method to reduce autonomic arousal in real-time.",
      btnText: "Begin 1-Min Physiological Sigh 🫁"
    },
    adhd_reset: {
      citation: "Clinical ADHD Framework: 3-Min Sensory Shift & Prefrontal Reboot",
      seconds: 180,
      subGuide: "Reboots working memory by alternating physical movement, sensory grounding, and slow breath.",
      btnText: "Begin 3-Min ADHD Reboot ⏱️"
    },
    self_compassion: {
      citation: "Dr. Kristin Neff: Mindful Self-Compassion for Neurodivergent Burnout",
      seconds: 300,
      subGuide: "A gentle 5-minute break to soften inner self-criticism and rest without guilt.",
      btnText: "Begin 5-Min Compassion Break 🧘"
    }
  };

  timerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      initAudio();
      playChime(560);
      stopCalmingTimer();

      timerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      activeTimerMode = tab.dataset.timertype;
      const config = timerModeConfigs[activeTimerMode];
      timerScienceCitation.textContent = config.citation;
      timerInstructionSubtitle.textContent = config.subGuide;
      startCalmingTimerBtn.textContent = config.btnText;

      activeTimerSeconds = config.seconds;
      updateTimerDisplay(activeTimerSeconds);
      timerPhaseText.textContent = "Ready";
    });
  });

  function updateTimerDisplay(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    timerClockDigits.textContent = `${m}:${s}`;
  }

  function startSighTimer() {
    initAudio();
    stopCalmingTimer();
    activeTimerSeconds = 60;
    updateTimerDisplay(activeTimerSeconds);
    resetCalmingTimerBtn.style.display = 'inline-block';
    startCalmingTimerBtn.textContent = "Pause Reset";

    function runSighCycle() {
      // Inhale 1 (through nose) - 2s
      timerPhaseText.textContent = "Inhale Nose";
      timerVisualCircle.className = "timer-circle inhale-1";
      playChime(420, 1.2);

      cycleTimerTimeout = setTimeout(() => {
        // Inhale 2 (top-off through nose) - 1.5s
        timerPhaseText.textContent = "Top-off Inhale";
        timerVisualCircle.className = "timer-circle inhale-2";
        playChime(540, 1.0);

        cycleTimerTimeout = setTimeout(() => {
          // Long Exhale Sigh (through mouth) - 5s
          timerPhaseText.textContent = "Long Exhale Sigh...";
          timerVisualCircle.className = "timer-circle exhale-sigh";
          playChime(320, 3.0);

          cycleTimerTimeout = setTimeout(() => {
            if (activeTimerSeconds > 0) {
              runSighCycle();
            }
          }, 4500);
        }, 1500);
      }, 2000);
    }

    runSighCycle();

    activeTimerInterval = setInterval(() => {
      activeTimerSeconds--;
      updateTimerDisplay(activeTimerSeconds);

      if (activeTimerSeconds <= 0) {
        stopCalmingTimer();
        playChime(880, 2.5);
        triggerConfetti();
        showAkshatDialogue("1-minute physiological sigh complete! Your heart rate and nervous system are reset. 🫁✨");
      }
    }, 1000);
  }

  function startAdhdResetTimer() {
    initAudio();
    stopCalmingTimer();
    activeTimerSeconds = 180;
    updateTimerDisplay(activeTimerSeconds);
    resetCalmingTimerBtn.style.display = 'inline-block';
    startCalmingTimerBtn.textContent = "Pause Reset";

    activeTimerInterval = setInterval(() => {
      activeTimerSeconds--;
      updateTimerDisplay(activeTimerSeconds);

      if (activeTimerSeconds > 135) {
        timerPhaseText.textContent = "Physical Shakeout";
        timerVisualCircle.className = "timer-circle inhale-1";
      } else if (activeTimerSeconds > 90) {
        timerPhaseText.textContent = "Look Around (5 items)";
        timerVisualCircle.className = "timer-circle inhale-2";
      } else if (activeTimerSeconds > 45) {
        timerPhaseText.textContent = "Slow Box Breathing";
        timerVisualCircle.className = "timer-circle exhale-sigh";
      } else {
        timerPhaseText.textContent = "Rest & Affirmation";
      }

      if (activeTimerSeconds <= 0) {
        stopCalmingTimer();
        playChime(880, 2.5);
        triggerConfetti();
        showAkshatDialogue("3-minute ADHD reset complete! Prefrontal cortex rebooted. You're ready for 1 micro-task!");
      }
    }, 1000);
  }

  function startCompassionTimer() {
    initAudio();
    stopCalmingTimer();
    activeTimerSeconds = 300;
    updateTimerDisplay(activeTimerSeconds);
    resetCalmingTimerBtn.style.display = 'inline-block';
    startCalmingTimerBtn.textContent = "Pause Break";

    activeTimerInterval = setInterval(() => {
      activeTimerSeconds--;
      updateTimerDisplay(activeTimerSeconds);

      if (activeTimerSeconds % 8 === 0) {
        timerPhaseText.textContent = "Breathe In Kindness";
        timerVisualCircle.className = "timer-circle inhale-2";
        playChime(480, 1.8);
      } else if (activeTimerSeconds % 8 === 4) {
        timerPhaseText.textContent = "Exhale Self-Doubt";
        timerVisualCircle.className = "timer-circle exhale-sigh";
        playChime(360, 2.0);
      }

      if (activeTimerSeconds <= 0) {
        stopCalmingTimer();
        playChime(880, 2.5);
        triggerConfetti();
        showAkshatDialogue("5 minutes of pure self-compassion. You are worthy and loved, Akku.");
      }
    }, 1000);
  }

  function stopCalmingTimer() {
    clearInterval(activeTimerInterval);
    clearTimeout(cycleTimerTimeout);
    activeTimerInterval = null;
    timerVisualCircle.className = "timer-circle";
    timerPhaseText.textContent = "Ready";
    const config = timerModeConfigs[activeTimerMode];
    startCalmingTimerBtn.textContent = config.btnText;
    resetCalmingTimerBtn.style.display = 'none';
  }

  startCalmingTimerBtn.addEventListener('click', () => {
    if (activeTimerInterval) {
      stopCalmingTimer();
      return;
    }

    if (activeTimerMode === 'sigh') {
      startSighTimer();
    } else if (activeTimerMode === 'adhd_reset') {
      startAdhdResetTimer();
    } else {
      startCompassionTimer();
    }
  });

  resetCalmingTimerBtn.addEventListener('click', stopCalmingTimer);

  // Evidence-Based ADHD Affirmations Engine
  const adhdAffirmations = [
    {
      quote: "Executive dysfunction is a neurological dopamine shortage, not a lack of willpower or moral discipline. You are doing the best you can with the brain chemistry you have today.",
      author: "Dr. Russell Barkley, ADHD Clinical Neuropsychologist"
    },
    {
      quote: "You don't need to finish the whole project today; you only need to touch it for 2 minutes. Lowering the bar is the smartest cognitive strategy.",
      author: "Executive Function Behavioral Research"
    },
    {
      quote: "Tony is just another busy human in his own day. Neutral messages are not emergency sirens. Your nervous system is safe.",
      author: "Rejection Sensitive Dysphoria Protocol"
    },
    {
      quote: "Cleaning for 5 minutes is 100% better than cleaning for 0 minutes. Any progress is infinite progress compared to paralysis.",
      author: "Neurodivergent Behavioral Psychology"
    },
    {
      quote: "Meha loves you unconditionally—on your high-dopamine productive days and on your overwhelmed, tired days.",
      author: "Forever Yours, Meha ❤️"
    }
  ];

  let currentAffirmationIdx = 0;
  const affirmationQuote = document.getElementById('affirmationQuote');
  const affirmationAuthor = document.getElementById('affirmationAuthor');
  const nextAffirmationBtn = document.getElementById('nextAffirmationBtn');

  nextAffirmationBtn.addEventListener('click', () => {
    initAudio();
    playChime(640);
    currentAffirmationIdx = (currentAffirmationIdx + 1) % adhdAffirmations.length;
    const item = adhdAffirmations[currentAffirmationIdx];
    affirmationQuote.textContent = `"${item.quote}"`;
    affirmationAuthor.textContent = `— ${item.author}`;
  });

  // ==========================================================================
  // 6. BUSY HANDS SENSORY SANCTUARY (Bubble Wrap, Surfer, Worry Stone)
  // ==========================================================================
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
    { at: 0, title: "You surfed the urge! 🏆", desc: "Way to go, Akku! You successfully outlasted the urge. You kept your hands safe!" }
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

  function handleStoneRub() {
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
  // 7. COZY SELF-CARE QUESTS (Candle, Mom, Love Notes)
  // ==========================================================================

  // Virtual Candle
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

  // Call Mom
  const momDoneBtn = document.getElementById('momDoneBtn');
  momDoneBtn.addEventListener('click', () => {
    initAudio();
    playChime(660);
    momDoneBtn.classList.add('done');
    momDoneBtn.textContent = '✓ Called Mom ❤️';
    triggerConfetti();
    showAkshatDialogue("Moms always make everything a little softer. Proud of you for calling her! 📞");
  });

  // Secret Love Notes from Meha
  const loveNotes = [
    "Akku, you don't have to carry the whole world today. Take it one gentle step at a time. I love you so much and believe in you always! ❤️",
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
  // 8. Navigation Controls & Inspira UI Interactions
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
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    nightToggle.querySelector('.icon').textContent = isLight ? '☀️' : '✨';
  });

  // Inspira UI: Interactive Card Spotlight effect
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Inspira UI: Drifting Stardust & Particle Field
  const stardustCanvas = document.getElementById('stardustCanvas');
  if (stardustCanvas) {
    const sCtx = stardustCanvas.getContext('2d');
    let stars = [];

    function resizeStardust() {
      stardustCanvas.width = window.innerWidth;
      stardustCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeStardust);
    resizeStardust();

    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.65 + 0.25,
        speed: Math.random() * 0.3 + 0.08,
        drift: (Math.random() - 0.5) * 0.15
      });
    }

    function renderStardust() {
      sCtx.clearRect(0, 0, stardustCanvas.width, stardustCanvas.height);
      stars.forEach(star => {
        star.y -= star.speed;
        star.x += star.drift;
        if (star.y < 0) {
          star.y = stardustCanvas.height;
          star.x = Math.random() * stardustCanvas.width;
        }

        sCtx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        sCtx.beginPath();
        sCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        sCtx.fill();
      });
      requestAnimationFrame(renderStardust);
    }
    renderStardust();
  }

  // ==========================================================================
  // 9. Lightweight Canvas Confetti Engine
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
