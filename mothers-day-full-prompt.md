# 🌸 MOTHER'S DAY INTERACTIVE WEBSITE
## Complete AI IDE Prompt — PRD + TRD + Design System + Implementation Guide

---

> **HOW TO USE THIS PROMPT:**
> Copy the entire contents of any section and paste it into your AI IDE (Cursor, Windsurf, Bolt, Lovable, v0, etc.) as your project prompt. Sections are modular — you can use all at once or individually.

---

# ═══════════════════════════════════════════
# PART 1 — MASTER PROMPT (Paste this first)
# ═══════════════════════════════════════════

```
You are a senior full-stack developer AND an award-winning UI/UX designer. Your task is to build a production-grade, emotionally resonant, interactive Mother's Day celebration website — a single HTML file with embedded CSS and JS. This is NOT a generic template. Every pixel, every animation, every interaction must feel handcrafted with love.

The website must be:
- Visually stunning with a soft pastel aesthetic (pinks, lavenders, peaches, mints, creams)
- Deeply interactive with layered animations
- Mobile-first, fully responsive
- Performant (no external libraries except Google Fonts)
- A single self-contained HTML file

Build it section by section, making each one perfect before moving to the next. Do not cut corners on animations or visuals.
```

---

# ═══════════════════════════════════════════
# PART 2 — PRODUCT REQUIREMENTS DOCUMENT (PRD)
# ═══════════════════════════════════════════

## 📋 PRD — Mother's Day Celebration Website

### 2.1 Product Overview

| Field | Details |
|---|---|
| **Product Name** | Mummy Ki Special Website |
| **Version** | 1.0.0 |
| **Type** | Single-page interactive celebration website |
| **Platform** | Web (all modern browsers) |
| **Delivery Format** | Single self-contained HTML file |
| **Primary User** | A child (any age) who wants to gift their mother a digital experience |
| **Target Recipient** | Mother / Mummy |
| **Occasion** | Mother's Day (May 2nd Sunday — International) |
| **Emotional Goal** | Make Mummy cry happy tears. She should feel seen, loved, and celebrated. |

---

### 2.2 User Stories

**US-001 — Opening Experience**
> As a visitor, when I first open the website, I want to immediately feel warmth and celebration so that I know this page was made with love.
- Acceptance: Page loads with animated hero title, floating petals auto-start within 500ms, hero badge pulses

**US-002 — Envelope Letter Interaction**
> As a visitor, I want to click on a letter envelope so that I can read a personal love letter to Mummy with a dramatic opening animation.
- Acceptance: Envelope has wax seal, flap opens on click, letter card rises from envelope, typewriter text plays, signature appears after typing completes

**US-003 — Balloon Celebration**
> As a visitor, when I open the envelope, I want balloons to fly up the screen so that the moment feels like a real celebration.
- Acceptance: Minimum 12 balloons, varied emojis, staggered launch, different speeds and paths

**US-004 — Magic Celebration Button**
> As a visitor, I want a button that launches a full confetti + balloon + emoji burst celebration so that I can trigger joy at any time.
- Acceptance: 80+ confetti pieces, 12+ balloons, 8+ large emoji bursts, all simultaneous

**US-005 — Cursor Delight**
> As a visitor, I want sparkle/flower effects to follow my cursor so that every movement feels magical.
- Acceptance: Custom flower cursor, sparkle emojis appear at cursor position on movement, removed after 1s

**US-006 — Ambient Atmosphere**
> As a visitor, I want petals/flowers to continuously fall from the top of the screen so that the page always feels alive.
- Acceptance: Petals fall at varying speeds (6–14s), sizes, and positions. New petal every 1.2 seconds.

**US-007 — Quality Cards Grid**
> As a visitor, I want to see a beautiful grid of cards describing why Mummy is special so that she feels recognised for specific traits.
- Acceptance: 6 cards minimum, each with icon + text, hover animation (tilt + lift), staggered entrance animation

**US-008 — Scroll Animations**
> As a visitor, as I scroll down, I want sections to animate into view so that the experience feels dynamic and progressive.
- Acceptance: All sections below the fold use IntersectionObserver, fade+slide-up on entry

**US-009 — Mobile Experience**
> As a visitor on mobile, I want the full experience including touch sparkles so that phone users get equal delight.
- Acceptance: Touch events fire sparkles, all layouts responsive at 320px+, no horizontal scroll

**US-010 — Photo Frame Placeholder**
> As a visitor, I want to see a decorative photo frame placeholder so that the website feels personal and warm.
- Acceptance: Frame has decorative border, hover tilt, inner dashed border, Mummy-themed emoji and caption

---

### 2.3 Feature Priority Matrix

| Feature | Priority | Complexity | Delight Factor |
|---|---|---|---|
| Animated hero title | P0 | Low | High |
| Falling petals | P0 | Medium | High |
| Envelope + letter | P0 | High | Very High |
| Balloon burst | P0 | Medium | Very High |
| Confetti celebration | P0 | Medium | Very High |
| Cursor sparkles | P1 | Low | High |
| Quality cards grid | P1 | Low | Medium |
| Scroll reveal | P1 | Low | Medium |
| Photo frame | P2 | Low | Medium |
| Heartbeat emojis | P2 | Low | Medium |
| Custom cursor | P2 | Low | High |

---

### 2.4 Non-Functional Requirements

- **Performance:** Page must load in < 2s on 3G. No external JS libraries. Only Google Fonts CDN allowed.
- **Accessibility:** All interactive elements keyboard-accessible. Sufficient colour contrast (WCAG AA).
- **Compatibility:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, iOS Safari 14+, Android Chrome 90+
- **File Size:** Single HTML file < 80KB unminified
- **Offline:** Must work without internet after initial Google Fonts load (inline fonts optional)

---

# ═══════════════════════════════════════════
# PART 3 — TECHNICAL REQUIREMENTS DOCUMENT (TRD)
# ═══════════════════════════════════════════

## ⚙️ TRD — Mother's Day Website Technical Specification

### 3.1 Architecture

```
mothers-day.html
├── <head>
│   ├── Meta tags (charset, viewport, title, OG tags)
│   ├── Google Fonts (Dancing Script, Playfair Display, Lato)
│   └── <style> — All CSS (Design System tokens → Component styles → Animations)
├── <body>
│   ├── #balloonContainer     (fixed, pointer-events:none)
│   ├── .hero                 (Section 1)
│   ├── .envelope-section     (Section 2 — Main interaction)
│   ├── .photo-section        (Section 3)
│   ├── .qualities-section    (Section 4)
│   ├── .cta-section          (Section 5)
│   └── <footer>
└── <script> — All JavaScript (no external dependencies)
```

---

### 3.2 CSS Architecture

```css
/* Layer 1: Design Tokens */
:root {
  /* Colors */
  --rose: #f8b4c8;
  --peach: #ffd6b3;
  --lavender: #d4b8e0;
  --mint: #b8e0d2;
  --cream: #fff8f0;
  --gold: #e8c96e;
  --deep-rose: #c4607a;
  --soft-purple: #9b7bb5;
  --text-primary: #7a5060;
  --text-light: #8a6070;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 15px;
  --space-md: 20px;
  --space-lg: 30px;
  --space-xl: 40px;
  --space-2xl: 60px;
  
  /* Border radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-pill: 50px;
  
  /* Shadows */
  --shadow-soft: 0 8px 25px rgba(248, 180, 200, 0.25);
  --shadow-medium: 0 12px 40px rgba(248, 180, 200, 0.35);
  --shadow-large: 0 20px 60px rgba(248, 180, 200, 0.4);
  --shadow-glow: 0 0 30px rgba(248, 180, 200, 0.5);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-index scale */
  --z-background: 0;
  --z-content: 1;
  --z-envelope: 2;
  --z-letter: 3;
  --z-overlay: 100;
  --z-balloons: 100;
  --z-confetti: 200;
  --z-sparkles: 300;
  --z-celebrations: 500;
}

/* Layer 2: Reset & Base */
/* Layer 3: Background & Body */
/* Layer 4: Component Styles */
/* Layer 5: Animation Keyframes */
/* Layer 6: Responsive overrides */
```

---

### 3.3 Animation Specifications

#### 3.3.1 Petal System
```
- Trigger: Auto-start on load, repeat every 1200ms via setInterval
- Pre-load: 5 petals created at staggered 300ms intervals on load
- Emoji pool: ['🌸', '🌺', '🌷', '💮', '🍀', '✿', '❀']
- Position: Random left: 0–100vw
- Size: Random 0.8–2.3rem
- Duration: Random 6–14 seconds
- Keyframe: translateY(-60px → 110vh) + rotate(0 → 720deg) + translateX(60px)
- Easing: linear
- Opacity: 0 → 0.7 (10%) → 0.5 (90%) → 0 (100%)
- Cleanup: Element removed from DOM after 15000ms
```

#### 3.3.2 Envelope Opening Sequence
```
Timeline (ms):
0ms      → User clicks envelope
0ms      → wax-seal: scale(1) → scale(0), opacity 1→0 [transition: 0.3s]
300ms    → env-flap: rotateX(0deg) → rotateX(180deg) [transition: 0.8s cubic]
           transform-origin: top center
900ms    → letter-card: scale(0) opacity(0) → scale(1) opacity(1)
           translateY(0) → translateY(20px)
           [transition: 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)]
900ms    → typewriter starts (35ms per character)
~5500ms  → typewriter ends (depends on text length)
~5800ms  → letter signature fades in [transition: opacity 1s]
600ms    → balloons launch (12 staggered, 200ms apart)
```

#### 3.3.3 Typewriter Effect
```javascript
function typeText(elementId, text, index, callback) {
  if (index < text.length) {
    document.getElementById(elementId).textContent = text.slice(0, index + 1);
    setTimeout(() => typeText(elementId, text, index + 1, callback), 35);
  } else {
    // Remove cursor blink
    document.getElementById(elementId).style.borderRight = 'none';
    if (callback) setTimeout(callback, 300);
  }
}
// Cursor: border-right: 2px solid var(--deep-rose) on the span
```

#### 3.3.4 Balloon System
```javascript
// Launch: 12 balloons, 200ms apart
// Emoji pool: ['🎈', '🎀', '💕', '🌸', '⭐', '🎊', '💝', '🌺']
// Position: Random 5–95vw
// Size: Random 2–4rem
// Duration: Random 3–5s
// Keyframe: translateY(0) → translateY(-110vh)
//           with rotate oscillation: -5deg → 5deg → -3deg → 4deg → -2deg
// Easing: ease-out
// Cleanup: 5000ms after creation
```

#### 3.3.5 Confetti System
```javascript
// Count: 80 pieces, 30ms apart
// Shape: 50% circles (border-radius: 50%), 50% rectangles (border-radius: 2px)
// Colors: ['#f8b4c8', '#ffd6b3', '#d4b8e0', '#b8e0d2', '#e8c96e', '#c4607a']
// Size: Random 6–16px width, 6–16px height
// Position: Random 0–100vw, top: -10px
// Duration: Random 2–4s
// Delay: Random 0–1s
// Keyframe: translateY(-20px) rotate(0deg) → translateY(100vh) rotate(720deg)
// Easing: ease-in
// Cleanup: 4000ms after creation
```

#### 3.3.6 Cursor Sparkle System
```javascript
// Trigger: mousemove event (desktop), touchstart (mobile)
// Fire rate: Random — only when Math.random() > 0.92 (8% of move events)
// Emoji pool: ['✨', '⭐', '💫', '🌟', '💕']
// Position: clientX - 12, clientY - 12
// Animation: scale(0) rotate(0) → scale(1.5) rotate(180deg) → scale(0) rotate(360deg)
// Duration: 1000ms
// Easing: ease-out
// Cleanup: 1000ms after creation
```

#### 3.3.7 Scroll Reveal System
```javascript
// Method: IntersectionObserver API
// Threshold: 0.15 (element 15% visible triggers animation)
// Initial state: opacity: 0; transform: translateY(40px)
// Triggered state: opacity: 1; transform: translateY(0)
// Transition: all 0.8s ease
// Elements: All .reveal class elements
```

---

### 3.4 Envelope HTML Structure
```html
<div class="envelope-wrapper" id="envelopeWrapper" onclick="openEnvelope()">
  <div class="envelope">
    <!-- White/pink body of envelope -->
    <div class="env-body"></div>
    
    <!-- Triangle flap (top) — rotates on open -->
    <div class="env-flap" id="envFlap"></div>
    
    <!-- Left triangle (V-shape bottom) -->
    <div class="env-left"></div>
    
    <!-- Right triangle (V-shape bottom) -->
    <div class="env-right"></div>
    
    <!-- Wax seal (pops before flap opens) -->
    <div class="wax-seal" id="waxSeal">💌</div>
  </div>
</div>

<!-- Letter card — hidden below envelope, rises on open -->
<div class="letter-card" id="letterCard">
  <div class="letter-lines"></div>    <!-- ruled-line background -->
  <div class="letter-greeting">Meri Pyaari Mummy,</div>
  <p class="letter-body">
    <span id="typed-text"></span>     <!-- typewriter text goes here -->
  </p>
  <div class="letter-sign" id="letterSign">
    — Tumhara ❤️ bachha
  </div>
</div>
```

#### Envelope CSS (Triangle technique):
```css
/* Flap — top triangle using borders */
.env-flap {
  width: 0;
  height: 0;
  border-left: 142px solid transparent;
  border-right: 142px solid transparent;
  border-top: 110px solid #f8c8d8;
  position: absolute; top: 0; left: -2px;
  z-index: 3;
  transform-origin: top center;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.env-flap.open { transform: rotateX(180deg); }

/* Left bottom triangle */
.env-left {
  width: 0; height: 0;
  border-top: 110px solid transparent;
  border-bottom: 90px solid transparent;
  border-left: 142px solid #f5b8cc;
  position: absolute; left: -2px; bottom: -2px;
}

/* Right bottom triangle */
.env-right {
  width: 0; height: 0;
  border-top: 110px solid transparent;
  border-bottom: 90px solid transparent;
  border-right: 142px solid #f5b8cc;
  position: absolute; right: -2px; bottom: -2px;
}
```

---

### 3.5 JavaScript Module Structure

```javascript
// Module 1: Ambient Effects
function initPetalSystem() { ... }       // setInterval every 1200ms
function createPetal() { ... }           // DOM create + style + cleanup

// Module 2: Cursor Magic
function initCursorSparkles() { ... }    // mousemove + touchstart listeners
function createSparkle(x, y) { ... }     // DOM create + position + cleanup

// Module 3: Envelope Interaction
let letterOpened = false;               // Guard flag — prevent double-open
const letterText = "...";              // Customisable letter content
function openEnvelope() { ... }         // Orchestrates the full sequence
function typeText(id, text, i, cb) { } // Recursive typewriter

// Module 4: Balloon System
const balloonEmojis = [...];
function launchBalloons(count = 12) { } // Creates staggered balloons

// Module 5: Confetti System
const confettiColors = [...];
function launchConfetti(count = 80) { } // Creates confetti pieces

// Module 6: Celebration
function launchCelebration() {          // Combines balloons + confetti + emoji burst
  launchBalloons();
  launchConfetti();
  launchEmojiBurst();
}
function launchEmojiBurst() { ... }     // 8 large floating emojis

// Module 7: Scroll Reveal
function initScrollReveal() {           // IntersectionObserver setup
  const observer = new IntersectionObserver(...);
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Module 8: Init
window.addEventListener('DOMContentLoaded', () => {
  initPetalSystem();
  initCursorSparkles();
  initScrollReveal();
  // Pre-launch 5 petals immediately
  for (let i = 0; i < 5; i++) setTimeout(createPetal, i * 300);
});
```

---

### 3.6 Performance Constraints

| Asset | Constraint |
|---|---|
| Google Fonts | Max 3 font families, 1 CDN request |
| DOM elements | Dynamically created elements MUST be removed from DOM after animation completes |
| Event listeners | mousemove sparkle fires only 8% of the time (Math.random() > 0.92) |
| setInterval | Only 1 interval (petal system) — must be clearable |
| CSS animations | Prefer CSS @keyframes over JS-driven animation where possible |
| Images | Zero external images. All visuals via emoji + CSS shapes + gradients |

---

# ═══════════════════════════════════════════
# PART 4 — DESIGN SYSTEM
# ═══════════════════════════════════════════

## 🎨 Design System — Soft Pastel Romance

### 4.1 Design Philosophy

**Theme:** *Handwritten Love Letter in a Garden*
**Aesthetic Direction:** Soft Pastel Maximalism — warm, feminine, joyful, intimate
**Mood Board Keywords:** Cherry blossoms · Watercolour · Grandma's garden · Lace · Warm sunlight · First hug of the day

**The ONE unforgettable thing:** An envelope you click open that reveals a personal letter with animated handwriting — the digital equivalent of finding a love note under your pillow.

---

### 4.2 Colour Palette

```
╔══════════════════════════════════════════════════════════╗
║                 PRIMARY PALETTE                          ║
╠══════════════╦═══════════╦══════════════════════════════╣
║ Name         ║ Hex       ║ Usage                        ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Rose         ║ #f8b4c8   ║ Primary accent, borders,     ║
║              ║           ║ envelope, cards              ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Peach        ║ #ffd6b3   ║ Warm backgrounds, gradients  ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Lavender     ║ #d4b8e0   ║ Accents, badge, button grad  ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Mint         ║ #b8e0d2   ║ Confetti, quality card       ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Cream        ║ #fff8f0   ║ Body background base         ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Gold         ║ #e8c96e   ║ Confetti, shimmer details    ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Deep Rose    ║ #c4607a   ║ Headlines, CTAs, wax seal    ║
║ (Dark)       ║           ║ letter greeting              ║
╠══════════════╬═══════════╬══════════════════════════════╣
║ Soft Purple  ║ #9b7bb5   ║ Subheadings, footer, hints   ║
╚══════════════╩═══════════╩══════════════════════════════╝

BODY BACKGROUND GRADIENT:
linear-gradient(135deg, #ffeaf4 0%, #fff0f7 30%, #fdf0ff 60%, #f0f4ff 100%)

TEXT COLOURS:
- Primary body text:    #7a5060  (deep mauve)
- Secondary text:       #8a6070  (medium mauve)
- Heading text:         gradient (deep-rose → soft-purple)
- Hint text:            var(--soft-purple)
```

---

### 4.3 Typography System

```
╔══════════════════════════════════════════════════════════╗
║                 FONT STACK                               ║
╠══════════════╦═══════════════════════════════════════════╣
║ Role         ║ Font + Settings                          ║
╠══════════════╬═══════════════════════════════════════════╣
║ DISPLAY      ║ Dancing Script                           ║
║ (Hero,       ║ Weights: 600, 700                        ║
║  Headings,   ║ Character: Handwritten, warm, personal   ║
║  Signature)  ║ Sizes: 3rem–6rem (hero), 1.3–2rem (body)║
╠══════════════╬═══════════════════════════════════════════╣
║ SERIF        ║ Playfair Display                         ║
║ (Letter      ║ Weights: 400, 700; Italic: yes           ║
║  body, sub-  ║ Character: Elegant, literary, refined    ║
║  headings)   ║ Sizes: 0.95rem (letter), 1.3rem (sub)   ║
╠══════════════╬═══════════════════════════════════════════╣
║ BODY         ║ Lato                                     ║
║ (Cards,      ║ Weights: 300, 400                        ║
║  UI text)    ║ Character: Clean, readable, friendly     ║
║              ║ Sizes: 0.85rem (cards)                   ║
╚══════════════╩═══════════════════════════════════════════╝

GOOGLE FONTS IMPORT:
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@600;700&family=Lato:wght@300;400&display=swap');

TYPE SCALE:
- Hero title:        clamp(3rem, 8vw, 6rem)
- Section headings:  2rem
- Sub-headings:      1.3–1.6rem
- Badge/hint:        1.1–1.4rem
- Card text:         0.85rem
- Letter body:       0.95rem
- Line height:       1.1 (headings), 1.9 (letter), 1.4 (cards)
```

---

### 4.4 Spacing System

```
Base unit: 8px

--space-xs:   8px   → Internal icon gap, tight pairs
--space-sm:   15px  → Card gap, hearts row gap
--space-md:   20px  → Standard padding, margin-bottom
--space-lg:   30px  → Section internal padding
--space-xl:   40px  → Section vertical padding
--space-2xl:  60px  → Hero padding-top, footer bottom
```

---

### 4.5 Component Specifications

#### COMPONENT: Hero Badge
```
Background:    linear-gradient(135deg, var(--rose), var(--lavender))
Text color:    white
Font:          Dancing Script 1.1rem
Padding:       8px 24px
Border-radius: 50px (pill)
Shadow:        0 4px 15px rgba(248, 180, 200, 0.4)
Animation:     pulse — scale 1 → 1.05 → 1, 2s infinite
```

#### COMPONENT: Hero Title
```
Font:          Dancing Script, clamp(3rem, 8vw, 6rem)
Color:         Gradient text (background-clip: text)
Gradient:      linear-gradient(135deg, #c4607a, #9b7bb5, #c4607a)
               background-size: 200% 200% for shimmer
Animation:     shimmer — background-position 0%→100%→0%, 3s infinite
Filter:        drop-shadow(0 2px 8px rgba(196, 96, 122, 0.2))
```

#### COMPONENT: Quality Card
```
Background:    white
Border-radius: 20px
Padding:       20px 15px
Border:        1.5px solid rgba(248, 180, 200, 0.3)
Shadow:        var(--shadow-soft)
Hover:         translateY(-8px) rotate(-2deg), shadow increases
Initial:       opacity: 0, translateY(30px)
Entrance:      cardReveal animation, staggered delay per card
Icon:          2rem emoji, margin-bottom 8px
Text:          Lato 300, 0.85rem, #8a6070, line-height 1.4
```

#### COMPONENT: Photo Frame
```
Size:          200px × 220px
Background:    linear-gradient(135deg, #fff, #fce8f0)
Border:        3px solid var(--rose)
Border-radius: 16px
Inner border:  inset — 1px dashed rgba(248,180,200,0.6), inset 8px
Shadow:        0 12px 40px rgba(248,180,200,0.35), inset 0 0 20px rgba(255,255,255,0.8)
Hover:         rotate(3deg) scale(1.05)
Content:       Emoji 3.5rem + caption in Dancing Script
```

#### COMPONENT: CTA Button (Magic Btn)
```
Background:    linear-gradient(135deg, var(--rose), var(--lavender))
Color:         white
Padding:       16px 40px
Border-radius: 50px
Font:          Dancing Script, 1.4rem
Shadow:        0 8px 25px rgba(248, 180, 200, 0.5)
Hover:         translateY(-4px) scale(1.05), shadow intensifies
Shine effect:  Pseudo-element ::before — white skewed stripe slides across on hover
Active:        scale(0.97)
```

#### COMPONENT: Envelope Wax Seal
```
Size:          50px × 50px
Background:    radial-gradient(circle, #f0a0b8, var(--deep-rose))
Border-radius: 50%
Shadow:        0 4px 12px rgba(196, 96, 122, 0.4)
Content:       💌 emoji, 1.4rem
Position:      absolute, bottom 35px, left 50%, translateX(-50%)
Z-index:       4 (above envelope triangles)
Hidden state:  scale(0), opacity 0 — transition 0.3s
```

---

### 4.6 Animation Library (Keyframe Reference)

```css
/* 1. Shimmer — gradient text */
@keyframes shimmer {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 2. Pulse — badge, hearts */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

/* 3. HeartBeat — heart emojis */
@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  14%       { transform: scale(1.3); }
  28%       { transform: scale(1); }
  42%       { transform: scale(1.2); }
  70%       { transform: scale(1); }
}

/* 4. FadeUp — on-load hero sub */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 5. FloatDown — petals */
@keyframes floatDown {
  0%   { transform: translateY(-60px) rotate(0deg) translateX(0); opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.5; }
  100% { transform: translateY(110vh) rotate(720deg) translateX(60px); opacity: 0; }
}

/* 6. FlyUp — balloons */
@keyframes flyUp {
  0%   { transform: translateY(0) rotate(-5deg); opacity: 1; }
  25%  { transform: translateY(-25vh) rotate(5deg); }
  50%  { transform: translateY(-50vh) rotate(-3deg); }
  75%  { transform: translateY(-75vh) rotate(4deg); }
  100% { transform: translateY(-110vh) rotate(-2deg); opacity: 0.3; }
}

/* 7. ConfettiFall — confetti */
@keyframes confettiFall {
  0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

/* 8. SparkleAnim — cursor sparkles */
@keyframes sparkleAnim {
  0%   { transform: scale(0) rotate(0deg); opacity: 1; }
  50%  { transform: scale(1.5) rotate(180deg); opacity: 1; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
}

/* 9. CardReveal — quality cards */
@keyframes cardReveal {
  to { opacity: 1; transform: translateY(0); }
}

/* 10. Bounce — hint text */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
```

---

### 4.7 Layout Structure

```
[FULL WIDTH — max-width: none]
  ├── #balloonContainer    position: fixed, full screen, pointer-events: none
  │
  ├── .hero                text-align: center, padding: 60px 20px 30px
  │   ├── .hero-badge      display: inline-block
  │   ├── h1               clamp font size
  │   ├── .hero-sub        font Playfair italic
  │   └── .hearts-row      flexbox, justify-content: center, gap: 15px
  │
  ├── .envelope-section    flexbox column, align-items: center, padding: 30px 20px
  │   ├── .envelope-hint   text-align: center
  │   ├── .envelope-wrapper  position: relative (contains .envelope)
  │   │   └── .envelope    position: relative, 280×200px
  │   └── .letter-card     position relative, z-index 2, 300px wide
  │
  ├── .photo-section       flexbox, justify-content: center, padding: 40px 20px
  │   └── .photo-frame     200×220px
  │
  ├── .qualities-section   padding: 30px 20px
  │   ├── .qualities-title  text-align: center
  │   └── .qualities-grid  CSS Grid, auto-fit, minmax(150px, 1fr), gap: 15px
  │                         max-width: 600px, margin: auto
  │
  ├── .cta-section         text-align: center, padding: 30px 20px 60px
  │   └── .magic-btn       display: inline-block
  │
  └── footer               text-align: center, padding: 20px

RESPONSIVE BREAKPOINTS:
@media (max-width: 480px)
  - Envelope: 280px → 240px width, 200px → 170px height
  - Adjust triangle border widths proportionally
  - Letter card: 300px → 260px
  - Grid: may collapse to 2 columns
```

---

# ═══════════════════════════════════════════
# PART 5 — FULL IMPLEMENTATION PROMPT
# (Copy-paste this into your AI IDE)
# ═══════════════════════════════════════════

```
Build a single HTML file called mothers-day.html — a beautiful, interactive Mother's Day celebration website. This is for someone to gift their Mummy (mother). Follow every specification below EXACTLY.

═══════════════════════════
TECH STACK
═══════════════════════════
- Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- Single file — ALL CSS in <style>, ALL JS in <script>
- Google Fonts: Dancing Script (600,700), Playfair Display (400,700,italic), Lato (300,400)
- Zero external JS libraries or frameworks
- Zero external images — emojis + CSS shapes only

═══════════════════════════
DESIGN SYSTEM (implement as CSS custom properties)
═══════════════════════════
Colors:
  --rose: #f8b4c8        (borders, accents, envelope)
  --peach: #ffd6b3       (warm gradient tones)
  --lavender: #d4b8e0    (badge, button, accents)
  --mint: #b8e0d2        (confetti, variety)
  --cream: #fff8f0       (card backgrounds)
  --gold: #e8c96e        (confetti gold pieces)
  --deep-rose: #c4607a   (headings, letter greeting, wax seal)
  --soft-purple: #9b7bb5 (subtext, footer, hints)

Body background: linear-gradient(135deg, #ffeaf4 0%, #fff0f7 30%, #fdf0ff 60%, #f0f4ff 100%)

Fonts:
  Display/Headings: 'Dancing Script' (handwritten feel)
  Letter/Serif: 'Playfair Display' (elegant, italic for sub-heading)
  Body/Cards: 'Lato' weight 300

Custom cursor: 🌸 flower emoji cursor using CSS cursor: url(svg) or just change pointer style

═══════════════════════════
SECTION 1: HERO
═══════════════════════════
- Animated badge pill: gradient background (rose→lavender), "✨ Aaj ka din sirf tumhara hai ✨", Dancing Script, pulse animation (scale 1→1.05 infinite)
- Main title: "Happy Mother's Day" in Dancing Script, clamp(3rem,8vw,6rem), gradient text animation (shimmer effect — background-position animates)
- Sub: "Meri pyaari Mummy ko" in Playfair Display italic, soft-purple, fadeUp animation on load (0.5s delay)
- Hearts row: 5 emojis [💗 🌸 💕 🌷 💝] in a flex row, each with heartbeat animation (staggered 0.2s delays)

═══════════════════════════
SECTION 2: ENVELOPE (Main hero interaction)
═══════════════════════════
Hint text above: "👇 Letter kholne ke liye click karo 👇" — Dancing Script, soft-purple, bounce animation

Build a CSS-only envelope (280px × 200px) using pure CSS triangles:
  - White/pink body (.env-body): full width×height, gradient fill, border
  - Top flap (.env-flap): CSS triangle (border technique), positioned top
    → On .open class: rotateX(180deg) with transform-origin: top center
  - Left triangle (.env-left): border triangle, bottom-left
  - Right triangle (.env-right): border triangle, bottom-right
  - Wax seal (.wax-seal): 50px circle, radial gradient (light→deep rose), 💌 emoji, absolute centered bottom
    → On .hidden class: scale(0) opacity(0)

Opening sequence on click (guard: only open once):
  1. t+0ms: wax seal scale→0, opacity→0
  2. t+300ms: flap rotateX(180deg) — transition 0.8s cubic-bezier(0.4,0,0.2,1)
  3. t+600ms: launch 12 balloons
  4. t+900ms: letter card appears (scale 0→1, opacity 0→1, translateY 0→20px, cubic-bezier spring)
  5. t+900ms: typewriter starts — 35ms per character
  6. After typing: signature fades in (opacity transition 1s)

Letter card (.letter-card, 300px wide):
  - White/cream gradient background
  - Decorative ruled lines (repeating-linear-gradient horizontal lines)
  - Decorative corner gradient circles (::before)
  - Corner 🌸 emoji watermark (::after, opacity 0.3)
  - Letter greeting: "Meri Pyaari Mummy," Dancing Script 1.6rem, deep-rose
  - Body: Playfair Display 0.95rem, line-height 1.9, colour #7a5060
  - Typewriter span (#typed-text): border-right 2px solid deep-rose (blinking cursor)
  - Signature: "— Tumhara ❤️ bachha" Dancing Script, soft-purple, right-aligned, fades in after typing

Letter text (customize as needed):
"Aap sirf meri Mummy nahi, aap meri best friend, meri teacher, aur meri sabse badi inspiration ho. Aapne jo pyaar, sacrifice aur mehnat se mujhe pal-posakr bada kiya — uska shukriya karne ke liye mere paas lafz nahi hain. Aaj aur hamesha — I love you Mummy! 🌸"

═══════════════════════════
SECTION 3: PHOTO FRAME
═══════════════════════════
- Decorative frame (200×220px): cream gradient bg, rose border 3px, border-radius 16px
- Double border: outer real border + inner inset dashed border (::before, inset 8px)
- Content: 👩‍👧‍👦 emoji (3.5rem) + "Mummy — meri duniya, meri jaan" (Dancing Script, deep-rose)
- Shadow: layered (outer soft + inner white glow)
- Hover: rotate(3deg) scale(1.05)
- Wrap in .reveal class (scroll-triggered)

═══════════════════════════
SECTION 4: QUALITIES GRID
═══════════════════════════
Title: "Mummy, aap ho meri..." — Dancing Script 2rem, deep-rose, centered

Grid: CSS Grid, auto-fit minmax(150px,1fr), gap 15px, max-width 600px centered

6 cards:
  1. 🌟 "Meri superhero, har mushkil mein sath"
  2. 🤗 "Sabse warm aur loving embrace"
  3. 🍳 "World's best cook — tera khana = ghar"
  4. 🧭 "Meri guide jab raasta bhatka hoon"
  5. 💪 "Meri sabse badi strength"
  6. 🌈 "Meri zindagi mein rang laane wali"

Each card:
  - White bg, border-radius 20px, padding 20px 15px
  - Border: 1.5px solid rgba(248,180,200,0.3)
  - Shadow: 0 8px 25px rgba(248,180,200,0.25)
  - Starts: opacity 0, translateY(30px)
  - Entrance animation: cardReveal, staggered 0.1s delays
  - Hover: translateY(-8px) rotate(-2deg), shadow intensifies

Wrap section in .reveal

═══════════════════════════
SECTION 5: CTA BUTTON
═══════════════════════════
Button: "🎉 Mummy ko Celebrate Karo! 🎉"
  - Gradient background: linear-gradient(135deg, rose, lavender)
  - White text, Dancing Script 1.4rem
  - Padding: 16px 40px, border-radius 50px (pill)
  - Shadow: 0 8px 25px rgba(248,180,200,0.5)
  - Hover: translateY(-4px) scale(1.05), glow shadow
  - Shine effect: ::before pseudo stripe slides across on hover
  - Active: scale(0.97)
  - onClick: launchCelebration() — fires balloons + confetti + emoji burst

Wrap section in .reveal

═══════════════════════════
FOOTER
═══════════════════════════
"Made with 💕 sirf aapke liye, Mummy"
Dancing Script 1.2rem, soft-purple, centered, padding 20px

═══════════════════════════
JAVASCRIPT SYSTEMS
═══════════════════════════

1. FALLING PETALS (ambient, auto-running):
   - setInterval every 1200ms → createPetal()
   - 5 petals pre-created on load (staggered 300ms)
   - Emojis: ['🌸','🌺','🌷','💮','🍀','✿','❀']
   - Random: left position (0-100vw), size (0.8-2.3rem), duration (6-14s), delay (0-5s)
   - Keyframe floatDown: Y from -60px to 110vh + rotate 720deg + X drift 60px
   - Remove from DOM after 15000ms

2. CURSOR SPARKLES:
   - mousemove: if Math.random() > 0.92, spawn sparkle at cursor position
   - touchstart: always spawn sparkle at touch position  
   - Emojis: ['✨','⭐','💫','🌟','💕']
   - Keyframe sparkleAnim: scale(0)→scale(1.5)→scale(0), rotate 0→360deg, 1000ms
   - Remove from DOM after 1000ms

3. BALLOON SYSTEM:
   - function launchBalloons(count=12)
   - Emojis: ['🎈','🎀','💕','🌸','⭐','🎊','💝','🌺']
   - Each balloon: random position (5-95vw), size (2-4rem), duration (3-5s)
   - Stagger: 200ms between each
   - Keyframe flyUp: float from bottom(-150px) to above screen, oscillating rotation
   - Remove after 5000ms

4. CONFETTI SYSTEM:
   - function launchConfetti(count=80)
   - 30ms stagger per piece, total 80 pieces
   - 50% circles, 50% rectangles
   - Colors: ['#f8b4c8','#ffd6b3','#d4b8e0','#b8e0d2','#e8c96e','#c4607a']
   - Size: 6-16px, position: random 0-100vw, top: -10px
   - Duration: 2-4s, delay: 0-1s
   - Keyframe confettiFall: Y(-20px)→Y(100vh), rotate(720deg), easing ease-in
   - Remove after 4000ms

5. SCROLL REVEAL:
   - IntersectionObserver, threshold: 0.15
   - Target: all .reveal elements
   - Initial state: opacity:0, transform:translateY(40px)
   - Active state: opacity:1, transform:translateY(0), transition: all 0.8s ease

═══════════════════════════
RESPONSIVE (mobile-first)
═══════════════════════════
@media (max-width: 480px):
  - Envelope: 240×170px (adjust all border widths proportionally)
  - Letter card: 260px
  - Hero font: clamp handles this automatically
  - Grid: may wrap to 2 columns naturally

═══════════════════════════
QUALITY CHECKLIST
═══════════════════════════
Before returning the code, verify:
✅ Envelope opens only ONCE (letterOpened guard)
✅ Typewriter text removes cursor blink after completion
✅ All dynamically created elements removed from DOM after animations
✅ No console errors
✅ Mobile touch events fire sparkles
✅ All .reveal sections animate on scroll
✅ Letter card rises with spring animation (cubic-bezier)
✅ Wax seal pops BEFORE flap opens
✅ Balloons launch from BOTTOM of screen, float UP
✅ Confetti falls from TOP, falls DOWN
✅ Button shine effect works on hover
✅ Photo frame tilts on hover
✅ Quality cards tilt on hover
✅ Heartbeat emojis pulse continuously
✅ Body background is gradient (not solid colour)
✅ All 3 Google Fonts loading and applied correctly
```

---

# ═══════════════════════════════════════════
# PART 6 — CUSTOMISATION GUIDE
# (For personalising the website after generation)
# ═══════════════════════════════════════════

## 6.1 Easy Customisations (change these values)

| Element | Where to find | What to change |
|---|---|---|
| Hero title | `.hero h1` text | Change "Happy Mother's Day" |
| Hero sub | `.hero-sub` text | Change "Meri pyaari Mummy ko" |
| Badge text | `.hero-badge` text | Change the tagline |
| Letter salutation | `.letter-greeting` | Change "Meri Pyaari Mummy," |
| Letter content | `const letterText = "..."` | Replace with your own letter |
| Signature | `#letterSign` | Change "Tumhara ❤️ bachha" to your name |
| Quality cards | Each `.quality-card` | Change emojis and descriptions |
| Photo frame caption | `.frame-text` | Change the caption |
| Footer | `<footer>` text | Change the footer message |
| Name in letter | Inside `letterText` | Add actual name |

## 6.2 Color Customisations

```css
/* For a blue/boy theme: */
--rose: #b4d4f8;
--deep-rose: #4a7ab8;
--soft-purple: #5b8ab5;

/* For a golden theme: */
--rose: #f8e4b4;
--deep-rose: #c4a060;
--soft-purple: #a07830;

/* For green/nature theme: */
--rose: #b4e0b4;
--deep-rose: #4a8a60;
--soft-purple: #5b7a50;
```

## 6.3 Adding Real Photo
Replace the `.photo-frame` content:
```html
<div class="photo-frame">
  <img src="mummy.jpg" alt="Mummy" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
</div>
```

## 6.4 Changing Letter Language
The `letterText` variable supports any language. Simply replace the string:
```javascript
const letterText = "Dear Mom, You are my world..."; // English
const letterText = "प्रिय माँ, आप मेरी दुनिया हैं..."; // Hindi
const letterText = "Chère Maman, Tu es mon monde..."; // French
```

---

*End of Prompt Document — Version 1.0.0*
*Generated for: Mother's Day Interactive Website*
*Sections: PRD + TRD + Design System + Implementation Prompt + Customisation Guide*
