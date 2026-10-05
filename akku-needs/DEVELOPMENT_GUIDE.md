# Akku Needs ADHD Sanctuary — Complete Development & Architecture Guide

This document preserves the complete architectural design, data pipelines, interactive systems, audio synthesis routines, section layouts, and strict guidelines for future maintenance and edits.

---

## 1. Project Purpose & Clinical Rationale
**Akku Needs ADHD Sanctuary** is an editorial, trauma-informed digital sanctuary crafted by Mehu for Akshat (Akku) to soothe adult ADHD, prefrontal cortex overload, sensory overwhelm, and Body-Focused Repetitive Behaviors (BFRB — nail biting, cuticle picking, front hairline hair pulling).

### Core Design Principles:
1. **Somatic Anchoring**: Moving cognitive distress into safe tactile grounding before self-harm or skin breakdown occurs.
2. **Cognitive Reframing (CBT)**: Breaking paralyzing overwhelm into micro-actions (5 minutes, first tiny piece, safe brain dump).
3. **Autonomic Nervous System Regulation**: Paced physiological breathing protocols to stimulate the vagus nerve and slow heart rate.
4. **BFRB Protection Safe Zone**: Providing high-resistance mechanical switch clicking and 24-bubble silicone popping as non-destructive sensory replacements.
5. **Dopamine Reinforcement**: Cute baby chimes, supportive avatar speech reassurance, and a structured **100-Task Reward System** where Akku earns a real-world reward of his choosing.

---

## 2. Directory Structure & Repositories

### Repositories:
- **Source Workspace**: `/Users/mehagupta/akku-needs/`
- **Deployment Repository (GitHub Pages)**:
  - Root: `/Users/mehagupta/mehagupta8.github.io/`
  - Subfolder: `/Users/mehagupta/mehagupta8.github.io/akku-needs/`
- **Live URL**: `https://mehagupta8.github.io/akku-needs/`

### File Layout:
```
akku-needs/
├── index.html              # Core application markup (Sections 01 - 06 + slide-over drawer)
├── style.css               # Editorial serif styling, responsive variables, animations
├── app.js                  # Complete application logic, audio synthesis, state & sync engines
├── DEVELOPMENT_GUIDE.md    # This master documentation
├── images/
│   ├── feelings-wheel.png  # High-resolution clinical reference wheel
│   ├── timer-sigh.png      # Minimalist line-art illustration for Physiological Sigh
│   ├── timer-brain-reset.png # Minimalist line-art illustration for ADHD Brain Reset
│   └── timer-compassion.png  # Minimalist line-art illustration for Self-Compassion Break
└── fonts/                  # Editorial typography assets (Fraunces, Recoleta, etc.)
```

---

## 3. Page Layout & Section Architecture (01 – 06)

The application flow is organized chronologically down the page:

### Section 01: Pocket Akku (`#heroSection`)
- **Companion Avatar**: Interactive vector avatar with glasses, soft expression, and voice/audio reassurance.
- **"Allow Meha to Eat You" Interaction**:
  - Clicking triggers apple-style bite marks carved into his avatar with synthesized `"nom nom nom"` biting sound.
  - Progresses into a glowing terracotta heart with the message: `"Love you so much, Akku"`.
  - Can be reset back to normal face anytime.
- **Pet Cursor**: Hovering/touching his cheeks triggers affectionate blushing and comforting feedback.
- **Quick Needs Shortcuts**: Tapping `Urge to bite` immediately scrolls and activates **Section 05: Preventing damage**.

### Section 02: What's on your mind? (`#anxietyWorksheetSection`)
- **5 ADHD Cognitive Stressors**:
  1. Assignments & Deadlines
  2. Tony (Manager) & Work Stress
  3. 2026 is Ending / Time Blindness
  4. Missing My Girlfriend (Mehu)
  5. Need to Clean House
- **Interactive 4-Step Workbox**:
  - Option 1: Just 5 minutes
  - Option 2: Write down only the next physical action
  - Option 3: Worst-case scenario reality check
  - Option 4: Write a note to Meha
- **Action Button**: `Done! Add to reward basket` (`#submitStepWorkBtn`). Automatically records to the reward basket, updates streak and stats, and triggers a cute baby chime.

### Section 03: Feelings Wheel (`#feelingsWheelSection`)
- **Concentric Therapy Wheel SVG**:
  - Inner Core Ring: Happy, Sad, Disgusted, Angry, Fearful, Bad, Surprised.
  - Middle Secondary Ring.
  - Outer Tertiary Ring with granular clinical affect labels.
- **Somatic Body Check-In**:
  - Interactive chip selector: Chest tightness, Throat lump, Stomach flutter, Jaw tension, Shoulder heaviness, Restless fingers, Shallow breath, Warm face.
- **Reflection Input & Submission**:
  - Note input: `journalEntryNote`.
  - Button: `Add to reward basket` (`#submitProgressEntryBtn`).

### Section 04: Take a breather (`#calmingTimersSection`)
- **3 Evidence-Based Protocols**:
  1. **Physiological Sigh (1 min)**: Two quick inhales through the nose, long slow exhale through gently parted lips. Includes editorial illustration `timer-sigh.png`.
  2. **ADHD Brain Reset (3 mins)**: Somatic shakeout of wrists and grounded seating. Includes editorial illustration `timer-brain-reset.png`.
  3. **Self-Compassion Break (2 mins)**: Hand over heart, slow deep breathing. Includes editorial illustration `timer-compassion.png`.
- **Button**: `Complete & add to reward basket` (`#completeTimerEarlyBtn`).
- **30-Minute Reunion Journey**:
  - Akku (left) and Mehu (right) SVG figures walk across a baseline track toward each other as cumulative meditation minutes accrue.
  - At 30 minutes, they meet at the center with a glowing golden heart and a letter from Mehu.

### Section 05: Preventing damage (`#busyHandsSection`)
- **Safe Zone Empathy Banner**:
  - Custom SVG portrait of vulnerable Akku with bitten nails, bleeding red dots, front hairline balding, and teardrops.
  - Clear clinical instruction: *"Stop before the bleeding starts. Rest your hands here."*
- **Tool 1: Tactile Bubble Pop Matrix (`#panelMatrix`)**:
  - 24 3D glossy silicone bubbles with sound synthesis.
  - Buttons: `Add to reward basket` (`#addBubbleSetBtn`), `Pop all`, `Reset bubbles`.
  - Completion Card: `"Better than hurting your body, huh?"` with prominent `Add to reward basket` (`#addBubbleCompleteBtn`).
- **Tool 2: 60-Second Urge Surfer (`#panelSurfer`)**:
  - Visual animated ocean wave SVG canvas with ocean wave white/pink noise audio.
  - Countdown clock (60s to 0s) through 3 distinct urge swell phases.
  - Button: `Add to reward basket` (`#addSurferToBasketBtn`).
- **Tool 3: Haptic Switch Deck (`#panelSwitch`)**:
  - 4 mechanical keys: Blue Clicky (60g Snap), Heavy Jade (75g Clack), Bubble Thock (55g Hollow), Cream Linear (45g Butter).
  - Can be activated by mouse, touch, or keyboard keys `1, 2, 3, 4`.
  - Footer action: `Add to reward basket` (`#addSwitchSetToBasketBtn`).

### Section 06: Reward System (`#rewardSystemSection`)
- **Positioned as the very last box on the page** (clean separation from the feelings wheel).
- **100-Task Milestone Goal Tracker (`#inpageRewardTrackerCard`)**:
  - Real-time task counter (`X / 100 tasks completed`).
  - Dynamic gold gradient progress bar (0% to 100%) with tick markers (0, 25, 50, 75, 100 Goal).
  - Countdown: `Y tasks remaining to earn your next reward of your choice!`.
- **Unlocked Reward Interface (At >= 100 Tasks)**:
  - Form appears: *"You earned a reward for yourself! What reward do you choose?"*.
  - Input field (`#rewardChoiceInput`) for custom rewards (e.g. massage, dinner, weekend trip, game).
  - Button: `Claim Reward` (`#claimRewardChoiceBtn`) -> saves to `claimedRewards` history, plays cute baby sound, updates avatar speech.
- **Claimed Rewards History**:
  - List of claimed reward cards with reward title, date/time, milestone pill (`100 Tasks`, `200 Tasks`), and delete control.
- **Analytics Ribbon (`#archiveStatsRibbon`)**:
  - Total Logged, Urges Surfed Streak, Phone Locked Focus Minutes, Love Notes Count.
- **Activity Basket Timeline (`#archiveEntriesList`)**:
  - Full reverse-chronological list of every completed task with timestamps, categories, and somatic notes.

---

## 4. Slide-Over Editorial Drawer

Accessible via the header navigation buttons or by calling `openDrawer(tabName)`:
1. **Reward System Tab (`data-tab="progress"`)**:
   - Header badge shows `${totalTasks} / 100`.
   - Contains a synchronized duplicate of the **100-Task Goal Tracker** (`#drawerRewardTrackerCard`).
   - Overall analytics dashboard with 4-up stat cards and proportional segmented balance bar.
   - Backup actions (`Export Backup`, `Restore Backup`) and `Clear Basket`.
2. **Notes to Meha Tab (`data-tab="notes"`)**:
   - Text composer to write and save notes for Mehu.
   - Archive list of all love notes with timestamps.
3. **Phone Lock Box Tab (`data-tab="lockbox"`)**:
   - Focus vault timer (15, 25, 45, 60 minutes or custom).
   - Rotating vault dial graphic and standby/locked states.
   - Button: `Add focus session to reward basket` (`#addLockboxToBasketBtn`).
4. **Device Sync Tab (`data-tab="sync"`)**:
   - Room code generator, QR code generator for instant mobile camera pairing, and live status.

---

## 5. Storage Keys & State Management

All state is persisted in `window.localStorage` with backwards-compatible schema keys:

| Storage Key | Type | Description |
|---|---|---|
| `akku_progress_archive_v2` | `Array<Object>` | The Reward Basket. Stores all logged tasks, feelings reflections, calm sessions, urge surfs, and switch sessions with unique IDs and timestamps. |
| `akku_claimed_rewards_v2` | `Array<Object>` | List of 100-task rewards chosen and claimed by Akku (`{ id, reward, timestamp, milestoneTag }`). |
| `akku_cbt_progress_v2` | `Object` | Map of completed CBT steps (e.g. `assignments_step_0: true`). |
| `akku_notes_to_meha_v2` | `Array<Object>` | List of saved love notes for Meha. |
| `akku_calm_goal_seconds_v2` | `Number` | Cumulative meditation seconds towards the 30-minute reunion journey (max 1800s). |
| `akku_mindful_streak_v2` | `Number` | Current streak of urges surfed / body protected. |
| `akku_sync_room_v2` | `String` | 6-character room token for cloud sync. |
| `akku_device_id_v2` | `String` | Unique client UUID to prevent echo feedback loops during sync. |

---

## 6. The Central Activity Pipeline

Every activity in sections 02, 03, 04, 05, and the lock box must route through:
```javascript
recordActivityCompleted(activityName, note, categories, somaticSensations);
```
### What this pipeline handles automatically:
1. **Increments Safe Streak**: Bumps `akku_mindful_streak_v2` and triggers digit animation.
2. **Plays Cute Baby Sound**: Calls `playCuteBabySound()` (synthesized acoustic giggling chime).
3. **Appends to Reward Basket**: Generates a timestamped record in `akku_progress_archive_v2`.
4. **Re-renders UI**: Calls `renderArchiveLedger()` which:
   - Updates `progressCountBadge` and `drawerProgressBadge` to `${totalTasks} / 100`.
   - Recomputes 4-up metric cards and today's count.
   - Recomputes category balance bar across CBT, Tactile, Calming, Feelings, Lock Box, and Notes.
   - Calls `renderRewardGoalTracker()` to update the 100-task progress bar and unlock status.
5. **Broadcasts Real-Time Sync**: Dispatches state to paired devices via ntfy cloud topic.

---

## 7. Web Audio API Synthesis Engine

Zero external MP3/WAV dependencies — all sounds are synthesized natively:
- **Cute Baby Sound (`playCuteBabySound()`)**: Dual-oscillator modulated sine burst (pitch drop 950Hz -> 680Hz -> 1100Hz with vibrato envelope).
- **Nom Nom Nom Bites (`playBiteSound()`)**: Triple resonant pop with white noise friction to simulate biting into crisp fruit.
- **Bubble Pop (`playBubblePop()`)**: Short sine blip with rapid downward pitch inflection (12ms).
- **Ocean Waves (`startOceanWaveAudio()`)**: Pink noise buffer passed through a modulated BiquadFilter (bandpass sweeping 180Hz - 650Hz).
- **Mechanical Switches (`playMechSwitchSound(profile)`)**:
  - `blue`: High click transient (2.8kHz) + metallic spring ping.
  - `jade`: Heavy tactile impact (1.2kHz) + solid bottom-out clack.
  - `thock`: Deep acoustic bass resonance (160Hz - 280Hz).
  - `cream`: Soft linear glide with dampening filter.
- **Vault Motor (`playVaultLockSound()`)**: Low rumble servo motor with metallic lock latch snap.

---

## 8. Cross-Device Sync & Backup Protocols

### Cloud Sync via Ntfy:
- **Topic**: `https://ntfy.sh/akku_sanctuary_${room}`
- **Payload**:
  ```json
  {
    "type": "AKKU_SANCTUARY_SYNC",
    "version": 2,
    "deviceId": "...",
    "timestamp": "...",
    "streak": 5,
    "calmGoalSeconds": 600,
    "progressLedger": [...],
    "notesToMeha": [...],
    "cbtProgress": {...},
    "claimedRewards": [...]
  }
  ```
- **Merge Strategy**: ID-based deduplication and timestamp sorting. Never deletes local data when merging remote data.

### Backup File Schema:
Exported as `akku-sanctuary-backup-YYYY-MM-DD.json`. Includes streak, progress ledger, notes, CBT progress, and claimed rewards. Fully restorable via file input.

---

## 9. Inviolable Constraints for Future Edits

When editing this codebase in the future, adhere to these rules:

1. **Strict Zero Emojis**:
   - **NEVER** use emoji characters (e.g. heart emoji, smiling face, checkmark emoji, etc.) anywhere in code, labels, markup, CSS, or comments.
   - Use clean typography, editorial tags, SVG vectors, or ASCII dividers instead.
2. **Laptop Web Layout Integrity**:
   - The desktop layout must remain wide, balanced, and editorial.
   - Any responsive mobile changes must be scoped inside `@media (max-width: 600px)` or `@media (max-width: 480px)`.
3. **Reward System as Section 06**:
   - Keep the in-page Reward System box as **Section 06** at the very bottom of the feed. Do not move it back under the feelings wheel.
4. **All Activities Must Offer "Add to reward basket"**:
   - Any new tool or activity added must provide an explicit button to add to the reward basket, routing through `recordActivityCompleted()`.
5. **Deployment Sync**:
   - Always copy modified files from `/Users/mehagupta/akku-needs/` to `/Users/mehagupta/mehagupta8.github.io/` (root and `/akku-needs/` subfolder), commit, and push both repositories.
   - Verify live build with `gh api repos/mehagupta8/mehagupta8.github.io/pages/builds/latest`.
