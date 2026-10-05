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
      osc.frequency.setValueAtTime(180 + Math.random() * 40, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
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

  const patHeadBtn = document.getElementById('patHeadBtn');
  const hugBtn = document.getElementById('hugBtn');
  const sosHandsBtn = document.getElementById('sosHandsBtn');

  let isDistressed = false;
  let curlsTimer = null;
  let happyEyesTimer = null;

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
    if (normalEyebrows) normalEyebrows.style.display = 'block';
    if (sadEyebrows) sadEyebrows.style.display = 'none';
    if (avatarSadEyes) avatarSadEyes.style.display = 'none';
    if (avatarSadMouth) avatarSadMouth.style.display = 'none';
    if (avatarMouth) avatarMouth.style.display = 'block';
    showHappyEyes(2500);
  }

  function triggerSadDistressed() {
    isDistressed = true;
    if (avatarStage) avatarStage.classList.add('avatar-distressed');
    if (normalArms) normalArms.style.display = 'none';
    if (distressedArms) distressedArms.style.display = 'block';
    if (normalEyebrows) normalEyebrows.style.display = 'none';
    if (sadEyebrows) sadEyebrows.style.display = 'block';
    if (avatarEyes) avatarEyes.style.display = 'none';
    if (avatarHappyEyes) avatarHappyEyes.style.display = 'none';
    if (avatarSadEyes) avatarSadEyes.style.display = 'block';
    if (avatarMouth) avatarMouth.style.display = 'none';
    if (avatarSadMouth) avatarSadMouth.style.display = 'block';

    updateSpeech("I'm feeling really anxious and overwhelmed right now... I have such a strong urge to bite my nails and twirl my hair. Let's take a deep breath together and surf this wave.");
    playClick(600);
  }

  function triggerPetCurls(e) {
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
      triggerGiveHug(e);
    });

    avatarStage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerGiveHug();
      }
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

  if (sosHandsBtn) {
    sosHandsBtn.addEventListener('click', () => {
      triggerSadDistressed();
      const busySection = document.getElementById('busyHandsSection');
      if (busySection) {
        busySection.scrollIntoView({ behavior: 'smooth' });
        const surferTab = document.querySelector('.tactile-tab[data-tab="surfer"]');
        if (surferTab) {
          surferTab.click();
        }
      }
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
  // 4. Hoffman Institute Feelings Spectrum & Somatic Scan
  // Full 18 Primary Emotional Domains, Granular Sub-Emotions, and Body Sensations
  // Zero Emojis. Underline-only inputs. Longitudinal Emotional Ledger.
  // ==========================================================================
  const hoffmanFeelingsList = {
    'Accepting / Open': ['Calm', 'Centered', 'Content', 'Fulfilled', 'Patient', 'Peaceful', 'Present', 'Relaxed', 'Serene', 'Trusting'],
    'Aliveness / Joy': ['Amazed', 'Awe', 'Bliss', 'Delighted', 'Eager', 'Ecstatic', 'Enchanted', 'Energized', 'Engaged', 'Enthusiastic', 'Excited', 'Free', 'Happy', 'Inspired', 'Invigorated', 'Lively', 'Passionate', 'Playful', 'Radiant', 'Refreshed', 'Rejuvenated', 'Renewed', 'Satisfied', 'Thrilled', 'Vibrant'],
    'Angry / Annoyed': ['Agitated', 'Aggravated', 'Bitter', 'Contempt', 'Cynical', 'Disdain', 'Disgruntled', 'Disturbed', 'Edgy', 'Exasperated', 'Frustrated', 'Furious', 'Grouchy', 'Hostile', 'Impatient', 'Irritated', 'Irate', 'Moody', 'On edge', 'Outraged', 'Pissed', 'Resentful', 'Upset', 'Vindictive'],
    'Courageous / Powerful': ['Adventurous', 'Brave', 'Capable', 'Confident', 'Daring', 'Determined', 'Free', 'Grounded', 'Proud', 'Strong', 'Worthy', 'Valiant'],
    'Connected / Loving': ['Accepting', 'Affectionate', 'Caring', 'Compassion', 'Empathy', 'Fulfilled', 'Present', 'Safe', 'Warm', 'Worthy'],
    'Curious': ['Engaged', 'Exploring', 'Fascinated', 'Interested', 'Intrigued', 'Involved', 'Stimulated'],
    'Despair / Sad': ['Anguish', 'Depressed', 'Despondent', 'Disappointed', 'Discouraged', 'Forlorn', 'Gloomy', 'Grief', 'Heartbroken', 'Hopeless', 'Lonely', 'Longing', 'Melancholy', 'Sorrow', 'Teary', 'Unhappy', 'Upset', 'Weary', 'Yearning'],
    'Disconnected / Numb': ['Aloof', 'Bored', 'Confused', 'Distant', 'Empty', 'Indifferent', 'Isolated', 'Lethargic', 'Listless', 'Removed', 'Resistant', 'Shut Down', 'Uneasy', 'Withdrawn'],
    'Embarrassed / Shame': ['Ashamed', 'Humiliated', 'Inhibited', 'Mortified', 'Self-conscious', 'Useless', 'Weak', 'Worthless'],
    'Fear': ['Afraid', 'Anxious', 'Apprehensive', 'Frightened', 'Hesitant', 'Nervous', 'Panic', 'Paralyzed', 'Scared', 'Terrified', 'Worried'],
    'Fragile': ['Helpless', 'Sensitive'],
    'Grateful': ['Appreciative', 'Blessed', 'Delighted', 'Fortunate', 'Grace', 'Humbled', 'Lucky', 'Moved', 'Thankful', 'Touched'],
    'Guilt': ['Regret', 'Remorseful', 'Sorry'],
    'Hopeful': ['Encouraged', 'Expectant', 'Optimistic', 'Trusting'],
    'Powerless': ['Impotent', 'Incapable', 'Resigned', 'Trapped', 'Victim'],
    'Tender': ['Calm', 'Caring', 'Loving', 'Reflective', 'Self-loving', 'Serene', 'Vulnerable', 'Warm'],
    'Stressed / Tense': ['Anxious', 'Burned out', 'Cranky', 'Depleted', 'Edgy', 'Exhausted', 'Frazzled', 'Overwhelm', 'Rattled', 'Rejecting', 'Restless', 'Shaken', 'Tight', 'Weary', 'Worn out'],
    'Unsettled / Doubt': ['Apprehensive', 'Concerned', 'Dissatisfied', 'Disturbed', 'Grouchy', 'Hesitant', 'Inhibited', 'Perplexed', 'Questioning', 'Rejecting', 'Reluctant', 'Shocked', 'Skeptical', 'Suspicious', 'Ungrounded', 'Unsure', 'Worried']
  };

  const somaticSensationsList = [
    'Achy', 'Airy', 'Blocked', 'Breathless', 'Bruised', 'Burning', 'Buzzy', 'Clammy',
    'Clenched', 'Cold', 'Constricted', 'Contained', 'Contracted', 'Dizzy', 'Drained',
    'Dull', 'Electric', 'Empty', 'Faint', 'Fidgety', 'Flushed', 'Fluttery', 'Frozen',
    'Heavy', 'Hollow', 'Hot', 'Itchy', 'Jittery', 'Jumpy', 'Knotted', 'Light',
    'Nauseous', 'Numb', 'Pounding', 'Prickly', 'Pulsing', 'Queasy', 'Radiant',
    'Restless', 'Sensitive', 'Settled', 'Shaky', 'Shivery', 'Slow', 'Sore',
    'Spacey', 'Spastic', 'Stiff', 'Suffocating', 'Sweaty', 'Tender', 'Tense',
    'Throbbing', 'Tight', 'Tingling', 'Trembling', 'Twitchy', 'Vibrating', 'Warm', 'Wobbly'
  ];

  let selectedCoreDomain = null;
  let selectedSubEmotions = new Set();
  let selectedSomaticSensations = new Set();

  const coreDomainGrid = document.getElementById('coreDomainGrid');
  const subDomainStage = document.getElementById('subDomainStage');
  const subEmotionsWrap = document.getElementById('subEmotionsWrap');
  const somaticStage = document.getElementById('somaticStage');
  const somaticSensationsWrap = document.getElementById('somaticSensationsWrap');
  const journalCommitBlock = document.getElementById('journalCommitBlock');
  const journalEntryNote = document.getElementById('journalEntryNote');
  const submitProgressEntryBtn = document.getElementById('submitProgressEntryBtn');
  const selectedSummaryPreview = document.getElementById('selectedSummaryPreview');
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

  // Populate Core Domains Grid
  function initFeelingsWheel() {
    if (!coreDomainGrid) return;
    coreDomainGrid.innerHTML = '';

    Object.keys(hoffmanFeelingsList).forEach(domain => {
      const pill = document.createElement('button');
      pill.className = 'domain-pill';
      pill.textContent = domain;
      pill.addEventListener('click', () => {
        selectCoreDomain(domain, pill);
      });
      coreDomainGrid.appendChild(pill);
    });

    // Populate Somatic Sensations Grid (persistent)
    if (somaticSensationsWrap) {
      somaticSensationsWrap.innerHTML = '';
      somaticSensationsList.forEach(sensation => {
        const chip = document.createElement('button');
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
          updateSummaryPreview();
        });
        somaticSensationsWrap.appendChild(chip);
      });
    }

    renderArchiveLedger();
  }

  function selectCoreDomain(domain, pillElement) {
    playClick(1300);
    selectedCoreDomain = domain;
    selectedSubEmotions.clear();

    const allPills = coreDomainGrid.querySelectorAll('.domain-pill');
    allPills.forEach(p => p.classList.remove('active'));
    pillElement.classList.add('active');

    // Populate Sub-Emotions
    if (subEmotionsWrap) {
      subEmotionsWrap.innerHTML = '';
      const list = hoffmanFeelingsList[domain] || [];
      list.forEach(emotion => {
        const chip = document.createElement('button');
        chip.className = 'granularity-chip';
        chip.textContent = emotion;
        chip.addEventListener('click', () => {
          if (selectedSubEmotions.has(emotion)) {
            selectedSubEmotions.delete(emotion);
            chip.classList.remove('selected');
            playClick(850);
          } else {
            selectedSubEmotions.add(emotion);
            chip.classList.add('selected');
            playClick(1350);
          }
          updateSummaryPreview();
        });
        subEmotionsWrap.appendChild(chip);
      });
    }

    if (subDomainStage) subDomainStage.style.display = 'block';
    if (somaticStage) somaticStage.style.display = 'block';
    if (journalCommitBlock) journalCommitBlock.style.display = 'block';

    updateSummaryPreview();
  }

  function updateSummaryPreview() {
    if (!selectedSummaryPreview) return;
    if (!selectedCoreDomain) {
      selectedSummaryPreview.textContent = '';
      return;
    }

    const subCount = selectedSubEmotions.size;
    const somaticCount = selectedSomaticSensations.size;
    selectedSummaryPreview.textContent = `${selectedCoreDomain} [${subCount} Granular, ${somaticCount} Somatic Selected]`;
  }

  // Commit Entry into My Progress Ledger
  if (submitProgressEntryBtn) {
    submitProgressEntryBtn.addEventListener('click', () => {
      if (!selectedCoreDomain) {
        alert('Please select a primary emotional domain first.');
        return;
      }

      const noteText = journalEntryNote ? journalEntryNote.value.trim() : '';
      const now = new Date();
      const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
      const formattedDate = now.toLocaleDateString('en-US', options);

      const newEntry = {
        id: 'entry_' + Date.now(),
        timestamp: formattedDate,
        domain: selectedCoreDomain,
        subEmotions: Array.from(selectedSubEmotions),
        somaticSensations: Array.from(selectedSomaticSensations),
        note: noteText
      };

      const entries = getArchiveEntries();
      entries.unshift(newEntry);
      setArchiveEntries(entries);

      playChime(660, 1.4);

      // Reset form
      if (journalEntryNote) journalEntryNote.value = '';
      selectedSubEmotions.clear();
      selectedSomaticSensations.clear();
      if (subEmotionsWrap) {
        subEmotionsWrap.querySelectorAll('.granularity-chip').forEach(c => c.classList.remove('selected'));
      }
      if (somaticSensationsWrap) {
        somaticSensationsWrap.querySelectorAll('.somatic-chip').forEach(c => c.classList.remove('selected'));
      }
      updateSummaryPreview();

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

  initFeelingsWheel();

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
      playClick(1050);
    });
  });

  // Tool 1: 24 Tactile Matrix Plates
  const matrixGrid = document.getElementById('matrixGrid');
  const resetMatrixBtn = document.getElementById('resetMatrixBtn');

  if (matrixGrid) {
    matrixGrid.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const cell = document.createElement('div');
      cell.className = 'tactile-cell';
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('role', 'button');
      cell.setAttribute('aria-label', `Tactile plate ${i + 1}`);

      const handlePress = () => {
        if (!cell.classList.contains('depressed')) {
          cell.classList.add('depressed');
          playClick(1400 + (i % 6) * 60);
        } else {
          cell.classList.remove('depressed');
          playClick(900 + (i % 6) * 40);
        }
      };

      cell.addEventListener('click', handlePress);
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePress();
        }
      });

      matrixGrid.appendChild(cell);
    }
  }

  if (resetMatrixBtn && matrixGrid) {
    resetMatrixBtn.addEventListener('click', () => {
      const cells = matrixGrid.querySelectorAll('.tactile-cell');
      cells.forEach(c => c.classList.remove('depressed'));
      playChime(700, 0.6);
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
      surferBody.textContent = 'Keep hands flat against your thighs or desktop. Observe the physical impulse to twirl or pick without judging it. Breathe slowly.';
    } else if (seconds > 20) {
      surferTitle.textContent = 'Phase 02: Cresting the Amplitude';
      surferBody.textContent = 'The urge is at its peak neurological transmission. Remember that physical sensations cannot compel motor action. You are the observer, not the reaction.';
    } else if (seconds > 0) {
      surferTitle.textContent = 'Phase 03: Natural Dissolution';
      surferBody.textContent = 'The chemical urge is naturally dissipating. The prefrontal brake has successfully overridden the basal ganglia impulse.';
    } else {
      surferTitle.textContent = 'Protocol Complete: Urge Surfed';
      surferBody.textContent = 'You successfully allowed the physical impulse to peak and dissolve without harm. Your inhibitory neural circuits just strengthened.';
    }
  }

  function startUrgeSurfer() {
    isSurferActive = true;
    if (startSurferBtn) startSurferBtn.style.display = 'none';
    if (resetSurferBtn) resetSurferBtn.style.display = 'inline-flex';
    playChime(528, 1.0);

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
    surferRemaining = 60;
    if (surferSecs) surferSecs.textContent = '60';
    if (surferTitle) surferTitle.textContent = 'Urges Peak Within 60 to 90 Seconds';
    if (surferBody) surferBody.textContent = 'Place both hands flat against your thighs or desktop. Observe the physiological urge without acting on it. Ride the crest until it dissolves.';
    if (startSurferBtn) startSurferBtn.style.display = 'inline-flex';
    if (resetSurferBtn) resetSurferBtn.style.display = 'none';
    playClick(800);
  }

  function completeUrgeSurfer() {
    clearInterval(surferInterval);
    isSurferActive = false;
    playChime(660, 2.2);

    // Increment streak
    const newStreak = getStreak() + 1;
    setStreak(newStreak);

    // Comfort Akshat and return to happy/calm
    comfortAkshat();
    updateSpeech("We surfed the entire 60-second wave together! The urge is gone and my hands are completely calm.");

    if (startSurferBtn) {
      startSurferBtn.style.display = 'inline-flex';
      startSurferBtn.textContent = 'Commence Another Wave';
    }
    if (resetSurferBtn) resetSurferBtn.style.display = 'none';
  }

  if (startSurferBtn) {
    startSurferBtn.addEventListener('click', startUrgeSurfer);
  }

  if (resetSurferBtn) {
    resetSurferBtn.addEventListener('click', resetUrgeSurfer);
  }

  // Tool 3: Alabaster Worry Stone
  const alabasterStone = document.getElementById('alabasterStone');
  const stoneRubCount = document.getElementById('stoneRubCount');
  let rubsCount = 0;
  let lastRubTime = 0;

  if (alabasterStone) {
    const recordRub = () => {
      const now = Date.now();
      if (now - lastRubTime > 120) {
        lastRubTime = now;
        rubsCount++;
        if (stoneRubCount) stoneRubCount.textContent = String(rubsCount);
        playStoneFriction();
        alabasterStone.style.boxShadow = '0 12px 30px rgba(212, 175, 55, 0.2)';
        setTimeout(() => {
          alabasterStone.style.boxShadow = '0 8px 24px rgba(26, 26, 26, 0.06)';
        }, 200);
      }
    };

    alabasterStone.addEventListener('pointermove', (e) => {
      if (e.buttons > 0) {
        recordRub();
      }
    });

    alabasterStone.addEventListener('click', recordRub);
  }

})();

