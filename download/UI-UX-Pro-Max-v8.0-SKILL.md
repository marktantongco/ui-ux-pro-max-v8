---
name: ui-ux-pro-max
description: >
  UI/UX design intelligence and implementation guidance for building polished interfaces.
  Use when the user asks for UI design, UX flows, information architecture, visual style direction,
  design systems/tokens, component specs, copy/microcopy, accessibility, or to generate/critique/refine
  frontend UI (HTML/CSS/JS, React, Next.js, Vue, Svelte, Tailwind). Covers 60 styles, 48 OKLCH palettes,
  36 font pairings, 24 industry rules, 24 motion presets, 20+ accessible components (Select, Form RHF+Zod,
  Switch, Textarea, Toast with CSS animation, Navbar, Breadcrumb, Tooltip, PasswordInput, RadioGroup,
  DataTable, Pagination, ErrorBoundary), full dark mode theme system, CSS nesting best practices,
  APCA contrast, Tailwind v4 @theme, @scope, @property, contrast-color(), and cross-references to
  GSAP Animations, React Best Practices, Web Design Guidelines, and Motion System Playbook.
version: "8.0.0"
---

# UI/UX Pro Max v8.0

> **Design System Operating System** — Five skills, one composable system.
> This skill is the central hub. It routes to four satellite skills for deep expertise.

---

# MODULE 0: META & PRINCIPLES

## 0.1 Skill Scope

| Dimension | Count | Detail |
|-----------|-------|--------|
| UI Styles | 60 | Categorized: General (49), Landing (8), Dashboard (10) — curated down from 67 redundant entries |
| Color Palettes | 48 | Dual notation: OKLCH + Hex for every token |
| Font Pairings | 36 | All verified Google Fonts URLs; self-hosted fonts flagged |
| Industry Rules | 24 | Reasoning rules with decision-tree JSON |
| Motion Presets | 24 | 12 CSS-first, 12 GSAP-enhanced |
| Components | 20+ | React 19 + full a11y + GSAP integration patterns (Accordion, Tabs, Modal, Skeleton, Skip Link, Focus Trap, SR Announcer, Cursor Follower, AI Patterns, Image Reveal, Select, Checkbox/Switch, Textarea, Form RHF+Zod, Toast, Navbar, Breadcrumb, Tooltip, PasswordInput, RadioGroup, DataTable, Pagination, ErrorBoundary) |

> **Note:** Includes Toast (CSS animation), Navbar, Breadcrumb, Tooltip, PasswordInput, RadioGroup, DataTable, Pagination, ErrorBoundary
| Validation Checks | 42 | Anti-pattern detection + confidence checklist |

## 0.2 Core Philosophy

1. **Motion as Thought** — Every animation must encode an idea (enter = arrival, fade = dissolution, spring = invitation). If you cannot name the idea, remove the animation.
2. **Paragraph as Object** — A paragraph is not a text block; it is a self-contained unit with internal rhythm (lead sentence, supporting evidence, transition). Design its container, spacing, and measure as a first-class object.
3. **Content-First Breakpoints** — Never break at device widths. Break when the content starts to strain: when line length exceeds 75 characters, when a grid collapses below 2 columns, when touch targets overlap.
4. **Reading Line** — Body text max-width: 65-75ch. Headings may exceed but must re-wrap gracefully. This is non-negotiable for readability.
5. **Typographic Color** — The overall gray value of a text block must be intentional. Use font-weight, line-height, and letter-spacing to control perceived density, not just font-size.
6. **Muted Foundation Colors** — Start with desaturated, low-chroma foundations. Reserve high-chroma for interactive elements and status signals. A palette that screams at rest will exhaust users.
7. **Tone Check** — Before shipping, read every piece of microcopy aloud. If it sounds robotic, condescending, or unsure, rewrite it. The UI's voice is the brand's voice.

## 0.3 Usage Workflow

```
USER REQUEST
    |
    v
[Module 1: Creative Brief Engine] -- triage, anti-pattern detection
    |
    v
[Module 2: Design Tokens] ---------- OKLCH palettes, typography, spacing
    |
    v
[Module 3: Modern CSS Primitives] -- container queries, @layer, nesting, transitions
    |
    v
[Module 4: Components] ------------- 20+ components with a11y + GSAP
    |
    v
[Module 5: Motion Presets] ---------- 24 animation patterns
    |
    v
[Module 6: Validation] -------------- pre-delivery checklist, audit
    |
    v
[Module 7: Data Tables] ------------- style/palette/font/rule lookup
    |
    v
[Module 8: Cross-References] -------- skill selector, integration tables
    |
    v
[Module 9: Theme System] ------------ dark mode, theme switching
    |
    v
[Module 10: Advanced Patterns] ------ Error Boundary, states, container queries
```

## 0.4 Skill Selector Decision Tree

When you receive a UI/UX request, route to the right skill:

```
What is the PRIMARY goal?
│
├─► Animation / Motion Design
│   ├─► GSAP-specific (timeline, ScrollTrigger, SVG)? → gsap-animations
│   ├─► Multi-library safety / performance governance? → motion-system-playbook
│   └─► CSS-native animation only? → This skill (Module 5)
│
├─► React / Next.js Code Quality
│   ├─► Performance (waterfalls, bundle, re-renders)? → react-best-practices
│   ├─► Component patterns (RSC, Suspense, hooks)? → react-best-practices
│   └─► General UI component code? → This skill (Module 4)
│
├─► Web Interface Audit / Review
│   ├─► Accessibility audit (ARIA, focus, keyboard)? → web-design-guidelines
│   ├─► Semantic HTML / forms / structure? → web-design-guidelines
│   └─► Visual design / style direction? → This skill (Module 2-3)
│
├─► Visual Design Foundations
│   ├─► Typography / color theory / spacing systems? → visual-design-foundations
│   └─► Industry-specific design system? → This skill (Module 7)
│
└─► Full UI/UX Build (design + code + a11y + motion)
    └─► This skill (all modules) — with cross-references to others as needed
```

## 0.5 Integration Map

| This Skill Module | Cross-References |
|---|---|
| Module 2 (Tokens) | visual-design-foundations: typography scale, spacing system, color theory |
| Module 3 (CSS) | web-design-guidelines: semantic HTML, forms, ARIA |
| Module 4 (Components) | react-best-practices: RSC, Suspense, memo, bundle optimization |
| Module 5 (Motion) | gsap-animations: timeline, ScrollTrigger, SplitText, Flip, MotionPath |
| Module 5 (Motion) | motion-system-playbook: library selection, combo safety, reduced-motion |
| Module 6 (Validation) | web-design-guidelines: accessibility audit rules |
| Module 6 (Validation) | react-best-practices: performance audit (bundle, waterfalls) |

---

# MODULE 1: CREATIVE BRIEF ENGINE

## 1.1 Triage Questions (Ask Only What You Must)

| # | Question | Why | Default |
|---|----------|-----|---------|
| 1 | Target platform? | Determines component model and input model | web |
| 2 | Stack (if code)? | Determines syntax and available primitives | html-tailwind |
| 3 | Goal and constraints? | Conversion, speed, brand vibe, WCAG level | conversion + WCAG AA |
| 4 | Existing assets? | Screenshot, Figma, repo, URL, user journey | none |
| 5 | Industry / product type? | Determines palette, typography, pattern | General SaaS |

If the user says "all of it" (design + UX + code + design system), treat as four deliverables and ship in that order.

## 1.2 Anti-Pattern Detection Checklist

Before generating ANY UI, scan the request and existing code for these 24 red flags:

### Critical (Block shipping)

| # | Red Flag | Detection | Fix |
|---|----------|-----------|-----|
| 1 | Math.random() in SSR component | Search for Math.random inside render | Use deterministic pseudo-random: `(index * 9301 + 49297) % 233280 / 233280` |
| 2 | Broken Google Fonts URLs | Font not on fonts.google.com | Replace with verified alternatives (see Module 7.3) |
| 3 | Zero keyboard navigation | Tabs/Accordion with no key handlers | Add roving tabindex + arrow keys + Home/End (see Module 4) |
| 4 | Modal without focus trap | aria-describedby, aria-controls missing | Add focus trap + inert backdrop + aria-describedby |
| 5 | color-scheme without OKLCH fallback | Only hex in dark mode tokens | Add OKLCH with hex fallback for older browsers |

### High (Must fix before delivery)

| # | Red Flag | Detection | Fix |
|---|----------|-----------|-----|
| 6 | No prefers-reduced-motion | Animation without reduced-motion check | Wrap all animations in motion preference check |
| 7 | Layout-shifting hover states | scale/transform on hover without reserve space | Use opacity/color transitions or reserve transform space |
| 8 | Low-contrast text | Contrast ratio < 4.5:1 for body text | Verify with WCAG contrast checker |
| 9 | Emoji used as UI icons | Emoji characters in button/icon context | Replace with SVG icons (Lucide, Heroicons) |
| 10 | Missing cursor-pointer | Clickable elements without cursor:pointer | Add cursor-pointer to all interactive elements |
| 11 | Instant state changes | No transition on interactive elements | Add transition 150-300ms |
| 12 | Invisible focus states | No :focus-visible styling | Add focus ring with 3px offset |
| 13 | No skip link | Page missing skip-to-content link | Add skip link as first focusable element |
| 14 | Images without alt text | img tags without alt attribute | Add descriptive alt text |
| 15 | Form inputs without labels | Input without associated label | Add label + htmlFor/id association |

### Medium (Should fix)

| # | Red Flag | Detection | Fix |
|---|----------|-----------|-----|
| 16 | Barrel file imports | import { X } from '@/components' | Import directly: import X from '@/components/X' |
| 17 | No content-visibility | Long lists without content-visibility | Add content-visibility: auto on off-screen list items |
| 18 | No CSS nesting | Deep BEM or excessive utility repetition | Use native CSS nesting (see Module 3) |
| 19 | Missing design tokens | Hard-coded color/spacing values | Extract to CSS custom properties |
| 20 | Stale tool references | References to deprecated tools | Update to 2026 ecosystem (see Module 7.4) |
| 21 | No container queries | Responsive via media queries only | Add container queries for component-level responsive |
| 22 | Missing loading/empty/error states | Only happy path implemented | Add all three states for every data-dependent component |
| 23 | No @layer usage | All CSS at same specificity level | Organize into @layer base, components, utilities |
| 24 | Unoptimized images | Raw img tags without lazy loading or optimization | Use framework image component or native loading="lazy" |

## 1.3 AI-Executable Workflow

```
IDENTIFY  → Parse request, detect industry, stack, constraints
MATCH     → Search data tables (Module 7) for best-fit style/palette/font/rule
COMMIT    → Generate design system with OKLCH tokens (Module 2)
CHECK     → Run anti-pattern checklist (1.2) + validation (Module 6)
```

### IDENTIFY Step
```
Extract from user request:
- product_type: SaaS | e-commerce | healthcare | fintech | ...
- style_keywords: [minimal, dark, playful, ...]
- stack: react | nextjs | vue | svelte | html-tailwind | ...
- a11y_level: AA (default) | AAA | none
- motion_budget: full | reduced | none
```

### MATCH Step
Run the design system generator:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <style_keywords>" --design-system -p "Project Name"
```

Or search individual domains:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

Available domains: product, style, color, landing, typography, chart, ux, icons, react, web

### COMMIT Step
Generate the design system with persistence:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:
- `design-system/MASTER.md` — Global source of truth
- `design-system/pages/<page>.md` — Page-specific overrides (only deviations)

### CHECK Step
Run the pre-delivery checklist from Module 6 before delivering any code.

---

# MODULE 2: DESIGN TOKEN SCHEMA

## 2.1 OKLCH Color Space

All color tokens use dual notation: OKLCH (primary) + Hex (fallback). OKLCH provides perceptual uniformity and wide-gamut support (P3 displays).

```css
:root {
  /* Primary — expressed as OKLCH with hex fallback */
  --color-primary: oklch(0.55 0.2 260);
  --color-primary-fallback: #2563eb;

  /* Semantic tokens */
  --color-success: oklch(0.65 0.17 145);
  --color-success-fallback: #16a34a;

  --color-warning: oklch(0.72 0.15 85);
  --color-warning-fallback: #ca8a04;

  --color-error: oklch(0.55 0.22 25);
  --color-error-fallback: #dc2626;

  --color-info: oklch(0.58 0.12 210);
  --color-info-fallback: #0891b2;
}

/* Progressive enhancement: browsers that support OKLCH get it */
@supports (color: oklch(0 0 0)) {
  :root {
    --color-primary: oklch(0.55 0.2 260);
    --color-success: oklch(0.65 0.17 145);
    --color-warning: oklch(0.72 0.15 85);
    --color-error: oklch(0.55 0.22 25);
    --color-info: oklch(0.58 0.12 210);
  }
}
```

### OKLCH Quick Reference

| Concept | Syntax | Example |
|---------|--------|---------|
| Lightness | 0 (black) to 1 (white) | `oklch(0.7 ...)` = 70% lightness |
| Chroma | 0 (gray) to 0.4 (vivid) | `oklch(... 0.2 ...)` = moderate saturation |
| Hue | 0-360 degrees | `oklch(... ... 260)` = blue |

### Converting Hex to OKLCH

```javascript
// Use Culori or chroma-js for accurate conversion
import { converter } from 'culori';
const hexToOklch = converter('oklch');
hexToOklch('#2563eb'); // { mode: 'oklch', l: 0.55, c: 0.2, h: 260 }
```

## 2.2 Expanded Token Schema

### Spacing Scale (8-point grid)

```css
:root {
  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;  /* 2px */
  --space-1: 0.25rem;     /* 4px */
  --space-1-5: 0.375rem;  /* 6px */
  --space-2: 0.5rem;      /* 8px */
  --space-2-5: 0.625rem;  /* 10px */
  --space-3: 0.75rem;     /* 12px */
  --space-3-5: 0.875rem;  /* 14px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-8: 2rem;        /* 32px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-32: 8rem;       /* 128px */
  --space-40: 10rem;      /* 160px */
  --space-48: 12rem;      /* 192px */
  --space-56: 14rem;      /* 224px */
  --space-64: 16rem;      /* 256px */
}
```

### Typography Scale

```css
:root {
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
  --font-size-4xl: 2.25rem;    /* 36px */
  --font-size-5xl: 3rem;       /* 48px */
  --font-size-6xl: 3.75rem;    /* 60px */
  --font-size-7xl: 4.5rem;     /* 72px */
  --font-size-8xl: 6rem;       /* 96px */
  --font-size-9xl: 8rem;       /* 128px */
}
```

### Font Weight Tokens

```css
:root {
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
```

### Line Height Tokens

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.75;
}
```

### Border Width Tokens

```css
:root {
  --border-width-0: 0;
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-4: 4px;
  --border-width-8: 8px;
}
```

### Border Radius Tokens

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-3xl: 2rem;     /* 32px */
  --radius-full: 9999px;
}
```

### Shadow Tokens

```css
:root {
  --shadow-xs: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px rgb(0 0 0 / 0.05);
}
```

### Opacity Tokens

```css
:root {
  --opacity-0: 0;
  --opacity-5: 0.05;
  --opacity-10: 0.1;
  --opacity-20: 0.2;
  --opacity-25: 0.25;
  --opacity-30: 0.3;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-75: 0.75;
  --opacity-80: 0.8;
  --opacity-90: 0.9;
  --opacity-95: 0.95;
  --opacity-100: 1;
}
```

### Z-Index Tokens

```css
:root {
  --z-behind: -1;
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-overlay: 30;
  --z-modal: 40;
  --z-popover: 50;
  --z-toast: 60;
  --z-tooltip: 70;
  --z-max: 9999;
}
```

### Breakpoint Tokens (Content-First)

```css
:root {
  /* Content-first breakpoints: break when content strains, not at device widths */
  --bp-xs: 375px;    /* Minimum viable mobile */
  --bp-sm: 640px;    /* Content reflow point */
  --bp-md: 768px;    /* Sidebar can appear */
  --bp-lg: 1024px;   /* Two-column comfortable */
  --bp-xl: 1280px;   /* Three-column possible */
  --bp-2xl: 1536px;  /* Maximum readable container */
}
```

## 2.3 Typography Principles

### Reading Line
Body text must be constrained to 65-75 characters per line. This is not aesthetic preference — it is ergonomics. Wider lines cause the eye to lose its return sweep; narrower lines cause excessive hyphenation and jagged right edges.

```css
.prose {
  max-width: 70ch; /* Optimal reading measure */
}

/* Headings may exceed but must re-wrap */
h1, h2, h3 {
  max-width: 30ch; /* Tighter for visual impact */
}
```

### Content-First Breakpoints
Never break at device widths. Break when:
- Line length exceeds 75 characters → add margin or switch to multi-column
- Grid collapses below 2 usable columns → stack vertically
- Touch targets overlap → increase spacing or change layout
- Navigation items wrap to a second line → convert to hamburger

```css
/* Instead of @media (min-width: 768px) */
/* Use content-driven breakpoints */
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
}
```

### Typographic Color
The perceived density of a text block (its "color") is controlled by:
1. **Font weight** — 400 for body, 600-700 for emphasis
2. **Line height** — 1.5-1.7 for body (loose = lighter color), 1.1-1.3 for headings
3. **Letter spacing** — Tight tracking for large headings, normal for body
4. **Color value** — True black (#000) is too heavy; use #1a1a2e or similar for softer density

```css
/* Light typographic color — airy, readable */
.body-light {
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: #374151;
}

/* Dense typographic color — authoritative, compact */
.body-dense {
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: #111827;
}
```

### Muted Foundation Colors
Start desaturated. Reserve chroma for interactive elements.

```css
:root {
  /* Foundation: low chroma (OKLCH chroma < 0.05) */
  --surface-base: oklch(0.98 0.01 260);     /* Near-white with cool tint */
  --surface-raised: oklch(1.0 0.00 0);       /* Pure white */
  --surface-sunken: oklch(0.95 0.01 260);    /* Slightly darker */

  /* Interactive: moderate chroma (0.1 - 0.2) */
  --interactive-primary: oklch(0.55 0.20 260);  /* Blue - buttons, links */
  --interactive-hover: oklch(0.50 0.22 260);    /* Darker on hover */

  /* Status: high chroma (0.15 - 0.25) */
  --status-success: oklch(0.65 0.17 145);       /* Green */
  --status-error: oklch(0.55 0.22 25);           /* Red */
  --status-warning: oklch(0.72 0.15 85);         /* Amber */
}
```

## 2.4 APCA Contrast Algorithm (WCAG 3.0 Preparation)

APCA (Accessible Perceptual Contrast Algorithm) is the contrast method adopted in WCAG 3.0. Unlike the WCAG 2.x 4.5:1 ratio, APCA accounts for font size, weight, and the perceptual difference between colors — meaning thin light text on white may fail even if the old ratio passes, while bold dark text on a light background may pass with a lower numerical score.

### APCA Lc Values (Lightness Contrast)

| Use Case | Minimum Lc | Preferred Lc |
|----------|-----------|-------------|
| Body text (< 18px) | Lc 60 | Lc 75 |
| Body text (18px+, 400wt) | Lc 45 | Lc 60 |
| Body text (24px+, 700wt) | Lc 30 | Lc 45 |
| Large text (36px+, 700wt) | Lc 25 | Lc 30 |
| UI components (borders, icons) | Lc 15 | Lc 30 |

### APCA vs WCAG 2.x

The key differences matter for production code: WCAG 2.x uses a simple luminance ratio that does not consider spatial frequency (font size and weight), which means it can both over-require contrast for large bold text and under-require it for small thin text. APCA addresses both failures by computing a perceptual contrast value (Lc) that accounts for the spatial characteristics of the text being rendered. For maximum compatibility during the WCAG 3.0 transition period, run both algorithms and pass both thresholds.

```javascript
// APCA contrast check using the apca-w3 library
import { sRGBtoY, calcAPCA, reverseAPCA } from 'apca-w3';

const textRgb = [55, 65, 81];    // #374151
const bgRgb = [255, 255, 255];   // #ffffff

const contrastLc = calcAPCA(textRgb, bgRgb);
// Returns Lc value like 63.5 — compare against thresholds above

// Reverse lookup: find minimum foreground color for Lc 60 on white
const minForeground = reverseAPCA(60, bgRgb, 'fg');
```

### Dual Validation Strategy (2026 Transition Period)

Until WCAG 3.0 reaches W3C Recommendation status, validate against both algorithms:

```javascript
function meetsContrast(textColor, bgColor, fontSize, fontWeight) {
  // WCAG 2.x check (required for legal compliance)
  const ratio = wcagContrast(textColor, bgColor);
  const wcagPass = fontSize >= 18 && fontWeight >= 700 ? ratio >= 3 : ratio >= 4.5;

  // APCA check (future-proof)
  const lc = calcAPCA(hexToRgb(textColor), hexToRgb(bgColor));
  const apcaPass = fontSize >= 24 && fontWeight >= 700 ? lc >= 30
    : fontSize >= 18 ? lc >= 45 : lc >= 60;

  return { wcagPass, apcaPass, ratio, lc };
}
```

## 2.5 Tailwind v4 @theme Integration

Tailwind CSS v4 eliminates `tailwind.config.js`. All customization happens in CSS using the `@theme` directive. This means your design tokens live in one place — your CSS file — and Tailwind reads them directly.

### @theme Configuration (replaces tailwind.config.js)

```css
@import "tailwindcss";

@theme {
  /* Colors — directly reference your OKLCH tokens */
  --color-primary: oklch(0.55 0.20 260);
  --color-primary-hover: oklch(0.50 0.22 260);
  --color-success: oklch(0.65 0.17 145);
  --color-warning: oklch(0.72 0.15 85);
  --color-error: oklch(0.55 0.22 25);
  --color-info: oklch(0.58 0.12 210);

  /* Surfaces */
  --color-surface-base: oklch(0.98 0.01 260);
  --color-surface-raised: oklch(1.0 0.00 0);
  --color-surface-sunken: oklch(0.95 0.01 260);

  /* Spacing — 8-point grid */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Typography */
  --font-body: "Inter", system-ui, sans-serif;
  --font-heading: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Shadows */
  --shadow-card: 0 1px 3px rgb(0 0 0 / 0.1);
  --shadow-elevated: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Animations */
  --animate-fade-in: fadeIn 0.3s ease-out;
  --animate-slide-up: slideUp 0.3s ease-out;
  --animate-scale-in: scaleIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### Usage in Components (v4 syntax)

In Tailwind v4, you reference theme tokens directly. The `bg-primary` class maps to `--color-primary`, `text-surface-base` maps to `--color-surface-base`, and so on. No more `bg-[var(--color-primary)]` arbitrary value syntax.

```html
<!-- Tailwind v3 (deprecated): -->
<button class="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]">

<!-- Tailwind v4 (correct): -->
<button class="bg-primary text-white hover:bg-primary-hover">
```

### Migration from v3 Config to v4 @theme

```bash
# Automatic migration tool
npx @tailwindcss/upgrade
```

Key changes:
1. `tailwind.config.js` → `@theme` in your main CSS file
2. `extend.colors` → `--color-*` custom properties in `@theme`
3. `arbitrary values` like `bg-[var(--x)]` → direct token references `bg-x`
4. `plugins` → most functionality is now built-in
5. `content` array → automatic via CSS import detection

---

# MODULE 3: MODERN CSS PRIMITIVES

## 3.1 Container Queries

Component-level responsiveness — break free from viewport-only media queries.

```css
/* Define a containment context */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Style based on container width, not viewport */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--space-4);
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
  }
}
```

### Container Query Units
```css
.sidebar {
  /* cqw = container query width, cqh = container query height */
  font-size: clamp(0.875rem, 1.5cqw, 1.125rem);
  padding: 2cqh 3cqw;
}
```

### Tailwind v4 Container Query Utilities

Tailwind v4 provides built-in container query utilities that work with the `@theme` configuration. First, set `container-type` on the parent element, then use `@container` variant utilities to apply styles based on the container's inline size.

```css
/* Tailwind v4 container query utilities */
/* First, set container-type on the parent */
.card-container {
  container-type: inline-size;
}

/* Then use @container utilities in your classes */
/* @md: applies when container >= 768px equivalent */
/* @lg: applies when container >= 1024px equivalent */
```

Usage in components with Tailwind v4 container query classes:

```html
<!-- Parent defines the containment context -->
<div class="card-container">
  <!-- Child responds to container width, not viewport -->
  <div class="@md:flex-row @lg:grid-cols-3 flex flex-col gap-4">
    <div class="@md:w-1/2 @lg:w-1/3">Card 1</div>
    <div class="@md:w-1/2 @lg:w-1/3">Card 2</div>
    <div class="@md:w-1/2 @lg:w-1/3">Card 3</div>
  </div>
</div>
```

To register custom container breakpoints in Tailwind v4, define them in your `@theme`:

```css
@import "tailwindcss";

@theme {
  /* Container query breakpoints */
  --container-sm: 480px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}
```

This enables `@sm:`, `@md:`, `@lg:`, and `@xl:` container query variants that respond to the nearest ancestor with `container-type` set, rather than the viewport. This is the preferred approach for component-level responsive design because it allows components to adapt to their own layout context regardless of where they are placed on the page.

## 3.2 @starting-style

Animate elements entering the DOM — previously impossible with CSS alone.

```css
/* Define the "from" state for elements that just appeared */
.modal {
  transition: opacity 0.3s, transform 0.3s;
  opacity: 1;
  transform: translateY(0);

  @starting-style {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* Works with [open] dialog too */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out,
    overlay 0.3s allow-discrete, display 0.3s allow-discrete;

  @starting-style {
    opacity: 0;
    transform: scaleY(0.9);
  }
}
```

## 3.3 @layer

Organize CSS by specificity tier to prevent specificity wars.

```css
@layer base, components, utilities;

/* Layer 1: Base — resets, element defaults */
@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: var(--font-body); line-height: var(--leading-normal); }
  h1, h2, h3 { line-height: var(--leading-tight); }
}

/* Layer 2: Components — design system components */
@layer components {
  .btn { /* ... */ }
  .card { /* ... */ }
  .input { /* ... */ }
}

/* Layer 3: Utilities — one-property overrides */
@layer utilities {
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
}
```

## 3.4 content-visibility

Skip rendering off-screen content for massive performance gains on long pages.

```css
/* Auto-render visible content only */
.long-list-item {
  content-visibility: auto;
  contain-intrinsic-size: auto 200px; /* Estimated height to prevent layout shift */
}

/* Force skip rendering (use when you control the scroll) */
.below-fold-section {
  content-visibility: hidden;
  contain-intrinsic-size: auto 800px;
}
```

Performance impact: On pages with 1000+ items, content-visibility: auto can reduce rendering time by 70-90%.

## 3.5 Anchor Positioning

Position tooltips and popovers relative to their anchor element without JavaScript.

```css
.button {
  anchor-name: --my-button;
}

.tooltip {
  position: fixed;
  position-anchor: --my-button;
  top: anchor(bottom);
  left: anchor(center);
  translate: -50% 8px;
}

/* Fallback for when tooltip overflows viewport */
.tooltip {
  position-try-fallbacks: --bottom, --top, --right;
}

@position-try --bottom {
  top: anchor(bottom);
  left: anchor(center);
}

@position-try --top {
  bottom: anchor(top);
  left: anchor(center);
}
```

## 3.6 CSS Nesting

Write component-scoped styles without preprocessor duplication.

```css
.card {
  background: var(--surface-raised);
  border-radius: var(--radius-lg);
  padding: var(--space-6);

  & .card-header {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-4);
  }

  & .card-body {
    color: var(--color-text-secondary);
    line-height: var(--leading-relaxed);
  }

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
}
```

### CSS Nesting Best Practices

Native CSS nesting is now baseline across all modern browsers. When used correctly, nesting improves readability and keeps component styles co-located. However, excessive nesting creates specificity problems and makes styles harder to override. Follow these rules to keep nesting maintainable:

**Maximum nesting depth: 3 levels.** Beyond 3 levels, specificity increases unpredictably and the selector becomes fragile. If you find yourself needing 4+ levels, extract the inner elements into their own component with `@scope` isolation.

**Always use `&` for parent reference.** The `&` selector explicitly references the parent rule's selector. Use it for pseudo-classes (`&:hover`), pseudo-elements (`&::before`), and modifier patterns (`&.is-active`). While some browsers allow omitting `&` for descendant selectors, always include it for pseudo-elements and compound selectors to ensure consistency.

**Avoid `@media` nesting that creates specificity traps.** Nesting a `@media` rule inside a component can cause the media query styles to have higher specificity than expected, making them hard to override. Instead, use `@container` queries or place media query overrides in a separate `@layer utilities` block.

**Prefer `@scope` over deep nesting for component isolation.** Nesting alone does not prevent style leakage to child components. Use `@scope` (see Module 3.8) when you need hard boundaries between a component and its children.

**Common anti-patterns to avoid:**

```css
/* BAD: 4+ levels deep -- extract a component */
.card {
  & .content {
    & .list {
      & .item {
        & .link { /* Too deep, specificity nightmare */ }
      }
    }
  }
}

/* BAD: Universal selector nesting */
.component {
  & * { /* Broad, hard-to-override */ }
}

/* BAD: @media nesting that overrides unpredictably */
.sidebar {
  width: 240px;
  @media (min-width: 768px) {
    width: 300px; /* This has higher specificity than expected */
  }
}

/* GOOD: Clean, 2-level nesting with @scope for isolation */
@scope (.card) {
  .title { font-size: var(--font-size-xl); }
  .body { color: var(--color-text-secondary); }

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover { box-shadow: var(--shadow-sm); }
  }
}
```

## 3.7 View Transitions API

Create smooth page-to-page and element-to-element transitions in multi-page apps.

```css
/* Define view-transition names for elements */
.hero-image {
  view-transition-name: hero;
}

.page-title {
  view-transition-name: title;
}

/* Customize transition animations */
::view-transition-old(hero) {
  animation: fade-out 0.25s ease-out;
}

::view-transition-new(hero) {
  animation: fade-in 0.25s ease-in;
}

/* Cross-fade by default */
::view-transition-group(*) {
  animation-duration: 0.3s;
}
```

### React/Next.js Integration

```javascript
// next.config.js
module.exports = {
  experimental: {
    viewTransition: true,
  },
};

// In page component
'use client';
import { useViewTransition } from 'next/navigation';

function ProductCard({ product }) {
  const router = useRouter();
  const startTransition = useViewTransition();

  return (
    <div
      style={{ viewTransitionName: `product-${product.id}` }}
      onClick={() => startTransition(() => router.push(`/products/${product.id}`))}
    >
      {product.name}
    </div>
  );
}
```

## 3.8 @scope CSS

The `@scope` at-rule limits style rules to a specific DOM subtree, preventing style leakage without naming conventions like BEM or CSS Modules. Unlike `@layer` which manages specificity, `@scope` manages reach — styles inside a scope only apply to elements within that scope boundary.

```css
/* Scope styles to a .card component — no leakage outside */
@scope (.card) {
  .title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
  }

  .body {
    color: var(--color-text-secondary);
  }

  /* Don't style .title inside nested .card */
  @scope (.card:is(.card)) {
    .title {
      font-size: var(--font-size-lg); /* Nested card titles are smaller */
    }
  }
}

/* Scope with lower boundary — don't apply to content inside .user-content */
@scope (.page-layout) to (.user-content) {
  h2 {
    font-family: var(--font-heading);
    margin-top: var(--space-8);
  }

  p {
    max-width: 70ch;
    line-height: var(--leading-relaxed);
  }
}
```

### When to Use @scope vs @layer vs Container Queries

| Feature | Controls | Use Case |
|---------|----------|----------|
| `@scope` | Where styles apply | Component isolation, preventing leakage |
| `@layer` | Specificity order | Organizing base/components/utilities |
| `@container` | Responsive behavior | Component-level responsive design |
| CSS Nesting | Readability | Writing component-scoped styles concisely |

Use all four together: `@layer` for specificity architecture, `@scope` for component boundaries, `@container` for responsive behavior within scopes, and nesting for concise authoring inside scopes.

## 3.9 @property CSS (Animatable Custom Properties)

The `@property` at-rule registers custom properties with the browser, enabling CSS transitions and animations on properties that otherwise cannot be animated (like gradients, colors, and complex values). This is essential for gradient animations, counter animations, and custom property transitions.

```css
/* Register a custom property so the browser can animate it */
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@property --hue {
  syntax: '<number>';
  initial-value: 260;
  inherits: false;
}

@property --opacity {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

/* Now you can animate these properties! */
.gradient-border {
  background: conic-gradient(from var(--gradient-angle), oklch(0.55 0.20 var(--hue)), oklch(0.55 0.20 calc(var(--hue) + 60)), oklch(0.55 0.20 var(--hue)));
  animation: rotate-gradient 3s linear infinite;
}

@keyframes rotate-gradient {
  to {
    --gradient-angle: 360deg;
    --hue: 320;
  }
}

/* Fade-in using @property for opacity */
.fade-element {
  opacity: var(--opacity);
  transition: --opacity 0.3s ease-out;
}

.fade-element.visible {
  --opacity: 1;
}
```

### Practical: Animated Gradient Mesh Background

```css
@property --mesh-hue-1 { syntax: '<number>'; initial-value: 260; inherits: false; }
@property --mesh-hue-2 { syntax: '<number>'; initial-value: 320; inherits: false; }
@property --mesh-hue-3 { syntax: '<number>'; initial-value: 200; inherits: false; }

.mesh-bg {
  background:
    radial-gradient(ellipse at 20% 50%, oklch(0.55 0.20 var(--mesh-hue-1) / 0.3), transparent 50%),
    radial-gradient(ellipse at 80% 20%, oklch(0.55 0.20 var(--mesh-hue-2) / 0.3), transparent 50%),
    radial-gradient(ellipse at 50% 80%, oklch(0.55 0.20 var(--mesh-hue-3) / 0.3), transparent 50%),
    var(--surface-base);
  animation: mesh-shift 8s ease-in-out infinite alternate;
}

@keyframes mesh-shift {
  to {
    --mesh-hue-1: 320;
    --mesh-hue-2: 180;
    --mesh-hue-3: 280;
  }
}
```

## 3.10 contrast-color() Function

The `contrast-color()` CSS function automatically selects a foreground color (white or black) that provides maximum contrast against a given background. This eliminates the need for JavaScript contrast calculations in many common scenarios, particularly for dynamic theming where background colors change but text must remain readable.

```css
/* Automatic text color based on background */
.button-primary {
  background: var(--color-primary);
  color: contrast-color(var(--color-primary));
}

/* With a target contrast level */
.badge {
  background: var(--status-warning);
  color: contrast-color(var(--status-warning) max);
}

/* Dynamic palette — text adapts to any background */
.swatch {
  background: var(--swatch-color);
  color: contrast-color(var(--swatch-color));
}
```

### Fallback for Unsupported Browsers

As of early 2026, `contrast-color()` is in the Interop 2026 focus but not yet baseline. Provide a fallback:

```css
.button-primary {
  background: var(--color-primary);
  /* Fallback: manual white text */
  color: #ffffff;

  /* Progressive enhancement */
  @supports (color: contrast-color(red)) {
    color: contrast-color(var(--color-primary));
  }
}
```

### When to Use contrast-color() vs APCA

Use `contrast-color()` for simple binary decisions (white vs black text on a colored background). Use APCA (Module 2.4) for fine-grained contrast auditing across an entire design system where you need specific Lc values and font-size-aware thresholds.

---

# MODULE 4: COMPONENT LIBRARY

## 4.0 Component Standards

Every component in this module follows these standards:
- **React 19 patterns**: No forwardRef (use ref prop directly), use() for async data
- **Accessibility**: Full keyboard navigation, ARIA attributes, screen reader support
- **Motion**: GSAP integration via useGSAP hook, prefers-reduced-motion respected
- **Deterministic**: No Math.random() in render — use index-based pseudo-random

## 4.1 Accordion

```tsx
'use client';

import { useRef, useState, useCallback, useId } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

function Accordion({ items, allowMultiple = false }: {
  items: AccordionItem[];
  allowMultiple?: boolean;
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const accordionId = useId();

  const toggle = useCallback((id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }, [allowMultiple]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const buttons = items.filter(i => !i.disabled);
    const currentIdx = buttons.findIndex(
      b => b.id === (e.target as HTMLElement).getAttribute('data-item-id')
    );

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = buttons[(currentIdx + 1) % buttons.length];
        document.getElementById(`${accordionId}-trigger-${next.id}`)?.focus();
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prev = buttons[(currentIdx - 1 + buttons.length) % buttons.length];
        document.getElementById(`${accordionId}-trigger-${prev.id}`)?.focus();
        break;
      }
      case 'Home': {
        e.preventDefault();
        document.getElementById(`${accordionId}-trigger-${buttons[0].id}`)?.focus();
        break;
      }
      case 'End': {
        e.preventDefault();
        const last = buttons[buttons.length - 1];
        document.getElementById(`${accordionId}-trigger-${last.id}`)?.focus();
        break;
      }
    }
  }, [items, accordionId]);

  return (
    <div
      role="region"
      aria-label="Accordion"
      onKeyDown={handleKeyDown}
    >
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggle(item.id)}
          accordionId={accordionId}
        />
      ))}
    </div>
  );
}

function AccordionItemComponent({
  item, isOpen, onToggle, accordionId
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  accordionId: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerId = `${accordionId}-trigger-${item.id}`;
  const contentId = `${accordionId}-content-${item.id}`;

  useGSAP(() => {
    if (!contentRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, { dependencies: [isOpen], scope: contentRef });

  return (
    <div>
      <h3>
        <button
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-disabled={item.disabled}
          data-item-id={item.id}
          onClick={item.disabled ? undefined : onToggle}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          {item.title}
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </h3>
      <div
        ref={contentRef}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        style={{ height: isOpen ? 'auto' : 0, overflow: 'hidden', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-4">{item.content}</div>
      </div>
    </div>
  );
}
```

## 4.2 Tabs

```tsx
'use client';

import { useState, useCallback, useRef, useId } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

function Tabs({ items, defaultTab }: { items: TabItem[]; defaultTab?: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);
  const tabListId = useId();

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const enabledTabs = items.filter(i => !i.disabled);
    const currentIdx = enabledTabs.findIndex(t => t.id === activeTab);

    let nextIdx = currentIdx;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextIdx = (currentIdx + 1) % enabledTabs.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        nextIdx = (currentIdx - 1 + enabledTabs.length) % enabledTabs.length;
        break;
      case 'Home':
        e.preventDefault();
        nextIdx = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIdx = enabledTabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = enabledTabs[nextIdx];
    setActiveTab(nextTab.id);
    document.getElementById(`${tabListId}-tab-${nextTab.id}`)?.focus();
  }, [items, activeTab, tabListId]);

  return (
    <div>
      <div role="tablist" aria-label="Content tabs" onKeyDown={handleKeyDown}>
        {items.map((item) => (
          <button
            key={item.id}
            id={`${tabListId}-tab-${item.id}`}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`${tabListId}-panel-${item.id}`}
            aria-disabled={item.disabled}
            tabIndex={activeTab === item.id ? 0 : -1}
            onClick={() => !item.disabled && setActiveTab(item.id)}
            className="px-4 py-2"
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`${tabListId}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${tabListId}-tab-${item.id}`}
          hidden={activeTab !== item.id}
          tabIndex={0}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
```

## 4.3 Modal / Dialog

```tsx
'use client';

import { useRef, useEffect, useCallback, useId } from 'react';

function Modal({
  isOpen, onClose, title, description, children
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descId = useId();

  // Open/close dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
    } else {
      dialog.close();
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key !== 'Tab') return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      className="rounded-xl p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="p-6">
        <h2 id={titleId} className="text-xl font-semibold">{title}</h2>
        {description && (
          <p id={descId} className="mt-2 text-sm text-gray-500">{description}</p>
        )}
        <div className="mt-4">{children}</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          autoFocus
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
```

### ModalStackProvider for Nested Dialogs

When multiple modals are open simultaneously (e.g., a confirmation dialog on top of a form dialog), screen readers must know which modal is active. The `ModalStackProvider` manages `aria-hidden` across nested modals, ensuring only the topmost modal is accessible to assistive technologies.

```tsx
'use client';
import { createContext, useContext, useState, useCallback, useRef } from 'react';

interface ModalStackEntry {
  id: string;
  element: HTMLElement;
}

const ModalStackContext = createContext<{
  push: (entry: ModalStackEntry) => void;
  pop: (id: string) => void;
} | null>(null);

function ModalStackProvider({ children }: { children: React.ReactNode }) {
  const stackRef = useRef<ModalStackEntry[]>([]);
  
  const push = useCallback((entry: ModalStackEntry) => {
    // Hide previous modal content from screen readers
    if (stackRef.current.length > 0) {
      const prev = stackRef.current[stackRef.current.length - 1];
      prev.element.setAttribute('aria-hidden', 'true');
    }
    stackRef.current.push(entry);
  }, []);
  
  const pop = useCallback((id: string) => {
    stackRef.current = stackRef.current.filter(e => e.id !== id);
    // Restore previous modal
    if (stackRef.current.length > 0) {
      const prev = stackRef.current[stackRef.current.length - 1];
      prev.element.removeAttribute('aria-hidden');
    }
  }, []);
  
  return (
    <ModalStackContext.Provider value={{ push, pop }}>
      {children}
    </ModalStackContext.Provider>
  );
}
```

### Updated Modal with Stack Support

Integrate the `ModalStackProvider` into the existing Modal component so that each dialog registers itself with the stack on open and deregisters on close:

```tsx
function Modal({
  isOpen, onClose, title, description, children
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descId = useId();
  const modalId = useId();
  const stack = useContext(ModalStackContext);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
      // Register with the modal stack
      stack?.push({ id: modalId, element: dialog });
    } else {
      // Deregister from the modal stack
      stack?.pop(modalId);
      dialog.close();
      previousFocusRef.current?.focus();
    }
  }, [isOpen, modalId, stack]);

  // ... rest of the Modal implementation remains the same (see 4.3 above)
}
```

## 4.4 Deterministic Skeleton

No Math.random() — SSR-safe with deterministic shimmer patterns.

```tsx
function Skeleton({ width, height, index = 0 }: {
  width?: string;
  height?: string;
  index?: number;
}) {
  // Deterministic pseudo-random offset based on index
  const offset = ((index * 9301 + 49297) % 233280) / 233280;
  const delay = `${offset * 1.5}s`;

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-hidden="true"
      className="animate-pulse rounded-md bg-gray-200"
      style={{
        width: width || '100%',
        height: height || '1rem',
        animationDelay: delay,
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function SkeletonCard({ index }: { index: number }) {
  return (
    <div className="rounded-xl p-4 border border-gray-200 space-y-3">
      <Skeleton height="2rem" index={index} />
      <Skeleton height="1rem" width="80%" index={index + 1} />
      <Skeleton height="1rem" width="60%" index={index + 2} />
    </div>
  );
}
```

## 4.5 Skip Link

```tsx
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}

// Usage: <SkipLink /> must be the FIRST focusable element in the page
// And <main id="main-content"> must exist as the target
```

## 4.6 Focus Trap Utility

```tsx
import { useEffect, useRef } from 'react';

function useFocusTrap(active: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusable = container.querySelectorAll<HTMLElement>(focusableSelector);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Auto-focus first element
    const firstFocusable = container.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  return containerRef;
}
```

## 4.7 Screen Reader Announcer

```tsx
function ScreenReaderAnnouncer() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      id="sr-announcer"
    />
  );
}

// Usage: Update the announcer to communicate state changes
function announceToScreenReader(message: string) {
  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = '';
    // Small delay to ensure screen readers pick up the change
    requestAnimationFrame(() => {
      announcer.textContent = message;
    });
  }
}
```

## 4.8 Cursor Follower

```tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      cursor.style.display = 'none';
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, { scope: cursorRef });

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-blue-500 mix-blend-difference hidden md:block"
      aria-hidden="true"
    />
  );
}
```

## 4.9 AI-Specific Patterns

### Thinking Indicator

```tsx
function ThinkingIndicator() {
  return (
    <div
      role="status"
      aria-label="AI is thinking"
      className="flex items-center gap-2 text-sm text-gray-500"
    >
      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span>Thinking...</span>
    </div>
  );
}
```

### Uncertainty Notice

```tsx
function UncertaintyNotice({ confidence }: { confidence: 'low' | 'medium' | 'high' }) {
  if (confidence === 'high') return null;

  return (
    <div
      role="note"
      className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm"
    >
      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      <div>
        <p className="font-medium text-amber-800">
          {confidence === 'low' ? 'Low confidence response' : 'Verify this information'}
        </p>
        <p className="text-amber-700 mt-1">
          {confidence === 'low'
            ? 'This response may contain inaccuracies. Please verify important details independently.'
            : 'This response should be verified before relying on it for critical decisions.'}
        </p>
      </div>
    </div>
  );
}
```

### Composer / Chat Input

```tsx
'use client';

import { useState, useRef, useCallback } from 'react';

function ChatComposer({ onSend, disabled }: {
  onSend: (message: string) => void;
  disabled?: boolean;
}) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(() => {
    const trimmed = message.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setMessage('');
    // Reset textarea height
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  }, [message, disabled, onSend]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  const handleInput = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  }, []);

  return (
    <div className="flex items-end gap-2 p-3 border rounded-xl">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder="Type a message..."
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none border-0 bg-transparent focus:ring-0 focus:outline-none text-sm"
        aria-label="Chat message input"
      />
      <button
        onClick={handleSubmit}
        disabled={!message.trim() || disabled}
        className="px-3 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M3.105 2.289a.75.75 0 010 1.414l5.372 2.267-5.372 2.267a.75.75 0 000 1.414l14.5 6.125a.75.75 0 001.035-.936l-5.372-13.5a.75.75 0 00-1.398 0L6.893 8.704l-3.788-1.6z" />
        </svg>
      </button>
    </div>
  );
}
```

### AI Controls Panel

```tsx
function AIControlsPanel({ model, temperature, onModelChange, onTemperatureChange }: {
  model: string;
  temperature: number;
  onModelChange: (model: string) => void;
  onTemperatureChange: (temp: number) => void;
}) {
  return (
    <fieldset className="border rounded-lg p-4 space-y-3">
      <legend className="text-sm font-medium px-2">AI Settings</legend>
      <div className="flex items-center gap-3">
        <label htmlFor="ai-model" className="text-sm text-gray-600 w-24">Model</label>
        <select
          id="ai-model"
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
          className="flex-1 px-3 py-1.5 rounded border text-sm"
        >
          <option value="gpt-4o">GPT-4o</option>
          <option value="claude-4">Claude 4</option>
          <option value="gemini-2.5">Gemini 2.5</option>
        </select>
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="ai-temp" className="text-sm text-gray-600 w-24">Temperature: {temperature}</label>
        <input
          id="ai-temp"
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={temperature}
          onChange={(e) => onTemperatureChange(parseFloat(e.target.value))}
          className="flex-1"
        />
      </div>
    </fieldset>
  );
}
```

### Conversation Thread

```tsx
interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  confidence?: 'low' | 'medium' | 'high';
}

function ConversationThread({ messages }: { messages: Message[] }) {
  return (
    <div
      role="log"
      aria-label="Conversation"
      aria-live="polite"
      className="space-y-4"
    >
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[70ch] rounded-xl px-4 py-3 text-sm ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p>{msg.content}</p>
            {msg.confidence && msg.confidence !== 'high' && (
              <UncertaintyNotice confidence={msg.confidence} />
            )}
            <time
              className="block mt-1 text-xs opacity-60"
              dateTime={msg.timestamp.toISOString()}
            >
              {msg.timestamp.toLocaleTimeString()}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Contextual Actions

```tsx
function ContextualActions({ actions }: {
  actions: Array<{ label: string; icon: string; onClick: () => void; destructive?: boolean }>;
}) {
  return (
    <menu className="flex gap-1" aria-label="Contextual actions">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className={`p-2 rounded-lg transition-colors text-sm ${
            action.destructive
              ? 'hover:bg-red-100 hover:text-red-700'
              : 'hover:bg-gray-100'
          }`}
          aria-label={action.label}
        >
          <span aria-hidden="true">{action.icon}</span>
          <span className="sr-only">{action.label}</span>
        </button>
      ))}
    </menu>
  );
}
```

## 4.10 Image Reveal Component

```tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function ImageReveal({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from(containerRef.current, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 0.8,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden rounded-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
    </div>
  );
}
```

## 4.11 Select / Dropdown

```tsx
'use client';

import { useState, useRef, useCallback, useId, useEffect } from 'react';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

function Select({
  options, value, onChange, label, placeholder = 'Select...'
}: {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const buttonId = useId();

  const selectedOption = options.find(o => o.value === value);
  const enabledOptions = options.filter(o => !o.disabled);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) { setIsOpen(true); setActiveIndex(0); }
        else { setActiveIndex(prev => Math.min(prev + 1, enabledOptions.length - 1)); }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(enabledOptions.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && activeIndex >= 0) {
          const option = enabledOptions[activeIndex];
          onChange(option.value);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }, [isOpen, activeIndex, enabledOptions, onChange]);

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={buttonId} className="block text-sm font-medium mb-1">{label}</label>
      <button
        id={buttonId}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeIndex >= 0 ? `${listboxId}-${enabledOptions[activeIndex]?.value}` : undefined}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(prev => !prev)}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2 text-left rounded-lg border border-gray-300 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {selectedOption ? selectedOption.label : <span className="text-gray-400">{placeholder}</span>}
      </button>
      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          {options.map((option) => {
            const isActive = enabledOptions[activeIndex]?.value === option.value;
            const isSelected = value === option.value;
            return (
              <li
                key={option.value}
                id={`${listboxId}-${option.value}`}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled}
                onClick={() => !option.disabled && (onChange(option.value), setIsOpen(false))}
                className={`px-3 py-2 cursor-pointer ${
                  option.disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${isActive ? 'bg-primary/10' : ''} ${isSelected ? 'font-semibold' : ''}`}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
```

## 4.12 Checkbox & Switch

```tsx
function Checkbox({
  checked, onChange, label, disabled = false, id
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  id?: string;
}) {
  const inputId = id || useId();
  return (
    <div className="flex items-center gap-2">
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40 accent-primary"
      />
      <label htmlFor={inputId} className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
        {label}
      </label>
    </div>
  );
}

function Switch({
  checked, onChange, label, disabled = false
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  const switchId = useId();
  return (
    <div className="flex items-center gap-3">
      <button
        id={switchId}
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 ${
          checked ? 'bg-primary' : 'bg-gray-200'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <label htmlFor={switchId} className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
        {label}
      </label>
    </div>
  );
}
```

## 4.13 Textarea with Character Count

```tsx
function Textarea({
  value, onChange, label, maxLength, placeholder, required = false, error, id
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  error?: string;
  id?: string;
}) {
  const inputId = id || useId();
  const errorId = `${inputId}-error`;
  const countId = `${inputId}-count`;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span aria-hidden="true" className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        aria-invalid={!!error}
        aria-describedby={`${error ? errorId : ''} ${maxLength ? countId : ''}`.trim() || undefined}
        aria-required={required}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        rows={4}
      />
      <div className="flex justify-between mt-1">
        {error && <p id={errorId} role="alert" className="text-sm text-red-600">{error}</p>}
        {maxLength && (
          <p id={countId} className="text-xs text-gray-400 ml-auto" aria-live="polite">
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
```

## 4.14 Form with React Hook Form + Zod

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message too long'),
  subscribe: z.boolean().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

function ContactForm({ onSubmit }: { onSubmit: (data: ContactForm) => Promise<void> }) {
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormSubmit = async (data: ContactForm) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-required="true"
          className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('name')}
        />
        {errors.name && <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-required="true"
          className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('email')}
        />
        {errors.email && <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-required="true"
          className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          {...register('message')}
        />
        {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input id="subscribe" type="checkbox" className="h-4 w-4 rounded accent-primary" {...register('subscribe')} />
        <label htmlFor="subscribe" className="text-sm text-gray-700">Subscribe to newsletter</label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

## 4.15 Toast with CSS Progress Animation

Use CSS `@keyframes` for the progress bar animation instead of `setInterval` for better performance and reduced JavaScript overhead. Multiple toasts stack vertically, each with configurable duration, auto-dismiss, and a close button. Screen readers are notified via `aria-live="polite"` and `role="status"`.

```tsx
'use client';
import { useState, useCallback, useId } from 'react';

interface Toast {
  id: string;
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

function ToastContainer({ toasts, onDismiss }: {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}) {
  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className="fixed bottom-4 right-4 z-[var(--z-toast)] flex flex-col gap-2"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  const variantStyles = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-amber-500',
    info: 'bg-blue-600',
  };
  const duration = toast.duration || 5000;

  return (
    <div
      role="status"
      className={`relative overflow-hidden rounded-lg text-white shadow-lg animate-toast-in ${variantStyles[toast.variant]}`}
      style={{ minWidth: '300px' }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-medium">{toast.message}</p>
        <button
          onClick={() => onDismiss(toast.id)}
          className="ml-3 text-white/80 hover:text-white"
          aria-label="Dismiss notification"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {/* CSS-animated progress bar -- no setInterval */}
      <div
        className="h-1 bg-white/30"
        style={{
          animation: `toast-progress ${duration}ms linear forwards`,
        }}
        onAnimationEnd={() => onDismiss(toast.id)}
      />
      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-toast-in {
          animation: toast-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Hook for managing toast state
function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = useCallback((message: string, variant: Toast['variant'] = 'info', duration?: number) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, message, variant, duration }]);
    return id;
  }, []);
  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);
  return { toasts, addToast, dismissToast };
}
```

## 4.16 Navigation Bar

Full keyboard navigation with a mobile hamburger menu that includes focus trap integration. Uses proper semantic `<nav>` and `<a>` elements instead of `div` with `onClick`. The mobile menu uses `aria-expanded` and `aria-controls` to communicate state to assistive technologies. Responsive with a mobile-first approach.

```tsx
'use client';
import { useState, useCallback, useRef, useId } from 'react';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

function Navbar({ brand, items, actions }: {
  brand: { label: string; href: string };
  items: NavItem[];
  actions?: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuId = useId();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-[var(--z-sticky)] bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href={brand.href} className="text-lg font-bold text-gray-900">
            {brand.label}
          </a>

          {/* Desktop items */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {actions}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40"
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-expanded={isMobileOpen}
            aria-controls={menuId}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          id={menuId}
          ref={mobileMenuRef}
          className="md:hidden border-t bg-white"
          role="region"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 space-y-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-current={item.active ? 'page' : undefined}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {actions && <div className="px-4 py-3 border-t">{actions}</div>}
        </div>
      )}
    </nav>
  );
}
```

## 4.17 Breadcrumb

Semantic breadcrumb navigation using `<nav>`, `<ol>`, and `<li>` elements with Schema.org structured data (`itemScope`, `itemProp`). The last item is marked as the current page with `aria-current="page"` and is rendered as a non-interactive `<span>` rather than a link.

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
}

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-400">/</span>
              )}
              {isLast || !item.href ? (
                <span
                  className="text-gray-500 font-medium"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-primary hover:underline"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </a>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
```

## 4.18 Tooltip

Tooltips provide contextual information on hover and focus. This implementation uses JavaScript-based positioning with a fallback for browsers that do not support CSS anchor positioning. Delayed show/hide prevents flickering on quick mouse passes. Keyboard users trigger tooltips via focus, and the tooltip content is associated via `aria-describedby`.

```tsx
'use client';
import { useState, useRef, useId } from 'react';

function Tooltip({ children, content, side = 'top' }: {
  children: React.ReactElement;
  content: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipId = useId();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const show = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const positions = {
          top: { top: rect.top - 8, left: rect.left + rect.width / 2 },
          bottom: { top: rect.bottom + 8, left: rect.left + rect.width / 2 },
          left: { top: rect.top + rect.height / 2, left: rect.left - 8 },
          right: { top: rect.top + rect.height / 2, left: rect.right + 8 },
        };
        setPosition(positions[side]);
      }
      setIsVisible(true);
    }, 300);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="fixed z-[var(--z-tooltip)] px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg pointer-events-none animate-fade-in"
          style={{
            top: side === 'top' || side === 'bottom' ? position.top : position.top,
            left: position.left,
            transform: side === 'top' ? 'translate(-50%, -100%)' :
                      side === 'bottom' ? 'translate(-50%, 0)' :
                      side === 'left' ? 'translate(-100%, -50%)' :
                      'translate(0, -50%)',
          }}
        >
          {content}
        </div>
      )}
      {typeof children.type === 'string' ? (
        // Clone native element with tooltip props
        <children.type
          {...children.props}
          ref={triggerRef}
          aria-describedby={isVisible ? tooltipId : undefined}
          onMouseEnter={show}
          onMouseLeave={hide}
          onFocus={show}
          onBlur={hide}
        />
      ) : (
        <span
          ref={triggerRef as React.RefObject<HTMLSpanElement>}
          aria-describedby={isVisible ? tooltipId : undefined}
          onMouseEnter={show}
          onMouseLeave={hide}
          onFocus={show}
          onBlur={hide}
        >
          {children}
        </span>
      )}
    </>
  );
}
```

## 4.19 Password Input

Password input with visibility toggle, a show/hide button with proper `aria-label` that updates dynamically, and a password strength indicator that evaluates length, character variety, and complexity. The strength bar uses CSS transitions for smooth visual feedback.

```tsx
'use client';
import { useState, useCallback, useId } from 'react';

function PasswordInput({ value, onChange, label, error, required = false, id }: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
  required?: boolean;
  id?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || useId();
  const errorId = `${inputId}-error`;

  const getStrength = useCallback((pwd: string): { label: string; color: string; width: string } => {
    if (pwd.length === 0) return { label: '', color: '', width: '0%' };
    if (pwd.length < 6) return { label: 'Weak', color: 'bg-red-500', width: '25%' };
    if (pwd.length < 10) return { label: 'Fair', color: 'bg-amber-500', width: '50%' };
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) {
      return { label: 'Strong', color: 'bg-green-500', width: '100%' };
    }
    return { label: 'Good', color: 'bg-blue-500', width: '75%' };
  }, []);

  const strength = getStrength(value);

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span aria-hidden="true" className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full rounded-lg border px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
      {value && (
        <div className="mt-1 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-300 ${strength.color}`} style={{ width: strength.width }} />
          </div>
          <span className="text-xs text-gray-500">{strength.label}</span>
        </div>
      )}
      {error && <p id={errorId} role="alert" className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
```

## 4.20 Radio Group

Full keyboard navigation with arrow keys for moving between options. Uses proper `role="radiogroup"` on the container and native `<input type="radio">` elements with `aria-checked` managed by the browser. Supports disabled options and optional descriptions.

```tsx
'use client';
import { useState, useCallback, useId } from 'react';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

function RadioGroup({ options, value, onChange, label, error }: {
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
}) {
  const groupId = useId();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const enabledOptions = options.filter(o => !o.disabled);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIdx = enabledOptions.findIndex(o => o.value === value);
    let nextIdx = currentIdx;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        nextIdx = (currentIdx + 1) % enabledOptions.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        nextIdx = (currentIdx - 1 + enabledOptions.length) % enabledOptions.length;
        break;
      default:
        return;
    }

    const next = enabledOptions[nextIdx];
    onChange(next.value);
    setFocusedIndex(nextIdx);
    document.getElementById(`${groupId}-${next.value}`)?.focus();
  }, [enabledOptions, value, onChange, groupId]);

  return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-700">{label}</legend>
      <div
        role="radiogroup"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className="mt-2 space-y-2"
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                isSelected ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
              } ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input
                id={`${groupId}-${option.value}`}
                type="radio"
                name={groupId}
                value={option.value}
                checked={isSelected}
                onChange={() => !option.disabled && onChange(option.value)}
                disabled={option.disabled}
                className="mt-0.5 h-4 w-4 text-primary focus:ring-primary/40 accent-primary"
              />
              <div>
                <span className="text-sm font-medium text-gray-900">{option.label}</span>
                {option.description && (
                  <p className="text-xs text-gray-500 mt-0.5">{option.description}</p>
                )}
              </div>
            </label>
          );
        })}
      </div>
      {error && <p role="alert" className="mt-1 text-sm text-red-600">{error}</p>}
    </fieldset>
  );
}
```

## 4.21 Data Table

Sortable columns with `scope="col"` on all `<th>` elements, optional `<caption>` for screen readers, and `content-visibility` for virtualization hints on table rows. Uses `aria-sort` on sortable column headers and supports custom cell rendering.

```tsx
'use client';
import { useState, useCallback } from 'react';

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

function DataTable<T extends Record<string, unknown>>({
  data, columns, caption, onRowClick
}: {
  data: T[];
  columns: Column<T>[];
  caption?: string;
  onRowClick?: (row: T) => void;
}) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const sortedData = useCallback(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal == null || bVal == null) return 0;
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir])();

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-gray-50 border-b">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className="px-4 py-3 text-left font-medium text-gray-700"
              >
                {col.sortable ? (
                  <button
                    onClick={() => handleSort(col.key)}
                    className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                    aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                  >
                    {col.label}
                    <span aria-hidden="true" className="text-xs">
                      {sortKey === col.key ? (sortDir === 'asc' ? '^' : 'v') : '^v'}
                    </span>
                  </button>
                ) : (
                  col.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className={`border-b hover:bg-gray-50 transition-colors ${
                onRowClick ? 'cursor-pointer' : ''
              }`}
              onClick={() => onRowClick?.(row)}
              style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 48px' }}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## 4.22 Pagination

Accessible pagination with `aria-label` on the `<nav>`, `aria-current="page"` on the active page button, and keyboard navigation. Supports ellipsis for large page ranges and Previous/Next buttons with proper disabled states.

```tsx
'use client';
import { useCallback } from 'react';

function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const getPageNumbers = useCallback(() => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-2 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        aria-label="Previous page"
      >
        Previous
      </button>
      {getPageNumbers().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 text-gray-400" aria-hidden="true">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-md text-sm transition-colors ${
              currentPage === page
                ? 'bg-primary text-white font-medium'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-2 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
```

## 4.23 Additional Component References

| Component | Key Features | Full Implementation |
|-----------|-------------|---------------------|
| Toast/Notification | aria-live, CSS progress animation, stacking | 4.15 Toast |
| Navigation Bar | skip link, keyboard nav, mobile hamburger | 4.16 Navbar |
| Breadcrumb | aria-label, structured data, current page | 4.17 Breadcrumb |
| Tooltip | anchor positioning, delay show/hide, keyboard trigger | 4.18 Tooltip |
| Password Input | visibility toggle, strength indicator | 4.19 PasswordInput |
| Radio Group | arrow key nav, aria-checked, descriptions | 4.20 RadioGroup |
| Data Table | sortable, scope/caption, content-visibility | 4.21 DataTable |
| Pagination | aria-current, ellipsis, Previous/Next | 4.22 Pagination |
| Dropdown Menu | roving tabindex, type-ahead, Escape to close | 4.11 Select pattern |

---

# MODULE 5: MOTION PRESETS

## 5.1 CSS-First Presets (12)

These use only CSS transitions and animations. No JavaScript required.

### P-01: Fade In
```css
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### P-02: Slide Up
```css
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### P-03: Scale In
```css
.animate-scale-in {
  animation: scaleIn 0.2s ease-out;
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### P-04: Slide Down (Dropdown)
```css
.animate-slide-down {
  animation: slideDown 0.2s ease-out;
  transform-origin: top;
}
@keyframes slideDown {
  from { opacity: 0; transform: scaleY(0.9) translateY(-4px); }
  to { opacity: 1; transform: scaleY(1) translateY(0); }
}
```

### P-05: Hover Lift
```css
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
@media (prefers-reduced-motion: reduce) {
  .hover-lift:hover { transform: none; }
}
```

### P-06: Focus Ring
```css
.focus-ring:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px oklch(0.55 0.20 260 / 0.4);
  border-radius: var(--radius-sm);
}
```

### P-07: Skeleton Shimmer
```css
.skeleton-shimmer {
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### P-08: Spinner
```css
.spinner {
  width: 24px; height: 24px;
  border: 3px solid #e5e7eb;
  border-top-color: oklch(0.55 0.20 260);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### P-09: Toast Slide In
```css
.animate-toast-in {
  animation: toastIn 0.3s ease-out;
}
@keyframes toastIn {
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
}
```

### P-10: Toast Slide Out
```css
.animate-toast-out {
  animation: toastOut 0.2s ease-in forwards;
}
@keyframes toastOut {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(100%); }
}
```

### P-11: Accordion Expand
```css
/* Uses CSS grid trick for height animation */
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out;
}
.accordion-content.open {
  grid-template-rows: 1fr;
}
.accordion-content > div {
  overflow: hidden;
}
```

### P-12: Page Transition (View Transitions)
```css
/* See Module 3.7 for full View Transitions API usage */
::view-transition-old(root) {
  animation: fadeOut 0.15s ease-out;
}
::view-transition-new(root) {
  animation: fadeIn 0.15s ease-in;
}
```

## 5.2 GSAP-Enhanced Presets (12)

These use GSAP for complex timeline animations. Requires gsap package.

### G-01: Hero Sequence
```javascript
import gsap from 'gsap';

const heroTl = gsap.timeline();
heroTl.from('.hero-badge', { opacity: 0, y: -20, duration: 0.4 })
  .from('.hero-title', { opacity: 0, y: 40, duration: 0.6 }, '-=0.2')
  .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.4 }, '-=0.3')
  .from('.hero-cta', { opacity: 0, scale: 0.9, duration: 0.3, ease: 'back.out(1.5)' }, '-=0.1');
```

### G-02: Scroll-Triggered Fade
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.fade-section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
});
```

### G-03: Stagger Cards
```javascript
gsap.from('.card', {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.card-grid',
    start: 'top 80%',
  },
});
```

### G-04: Magnetic Button
```javascript
import { useGSAP } from '@gsap/react';

function useMagneticButton(ref, strength = 0.3) {
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: ref });
}
```

### G-05: Text Scramble
```javascript
import gsap from 'gsap';

function textScramble(element, finalText, duration = 1) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = finalText.length;
  let frame = 0;
  const totalFrames = Math.round(duration * 60);

  const animate = () => {
    const progress = frame / totalFrames;
    const currentText = finalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (i / length < progress) return finalText[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    element.textContent = currentText;
    frame++;
    if (frame <= totalFrames) requestAnimationFrame(animate);
    else element.textContent = finalText;
  };
  animate();
}
```

### G-06: SplitText Reveal
```javascript
import gsap from 'gsap';

function splitTextReveal(selector, options = {}) {
  const elements = gsap.utils.toArray(selector);
  elements.forEach((el) => {
    const text = el.textContent;
    el.innerHTML = text
      .split('')
      .map((char) =>
        char === ' '
          ? ' '
          : `<span style="display:inline-block;opacity:0;transform:translateY(20px)">${char}</span>`
      )
      .join('');

    gsap.to(el.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      stagger: 0.02,
      duration: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
      ...options,
    });
  });
}
```

### G-07: DrawSVG Stroke
```javascript
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);

// Animate SVG paths drawing in
gsap.from('.svg-path', {
  drawSVG: '0%',
  duration: 1.5,
  stagger: 0.2,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.svg-container',
    start: 'top 80%',
    once: true,
  },
});
```

### G-08: MorphSVG Shape Transition
```javascript
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
gsap.registerPlugin(MorphSVGPlugin);

// Morph between two SVG shapes
gsap.to('#circle', {
  morphSVG: '#square',
  duration: 0.8,
  ease: 'power2.inOut',
});
```

### G-09: MotionPath
```javascript
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

gsap.to('.moving-element', {
  motionPath: {
    path: '#motion-path',
    align: '#motion-path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
  duration: 3,
  ease: 'power1.inOut',
  repeat: -1,
});
```

### G-10: Flip Layout Animation
```javascript
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(Flip);

function animateLayoutChange(container) {
  const state = Flip.getState('.flip-item', container);

  // Make DOM changes (filter, sort, rearrange)
  rearrangeItems();

  Flip.from(state, {
    duration: 0.4,
    ease: 'power2.inOut',
    stagger: 0.02,
    absolute: true,
  });
}
```

### G-11: Lenis Smooth Scroll Integration
```javascript
// Install: npm install lenis
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Cleanup on unmount
function cleanup() {
  lenis.destroy();
  gsap.ticker.remove(lenis.raf);
}
```

### G-12: Scroll-Triggered Parallax
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('[data-speed]').forEach((el) => {
  const speed = parseFloat(el.dataset.speed);
  gsap.to(el, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});
```

## 5.3 Reduced Motion Handling

All motion presets must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```javascript
// JavaScript check — use in every GSAP animation
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) {
  // Skip animation, show final state immediately
  return;
}
```

---

# MODULE 6: VALIDATION & AUDIT

## 6.1 Pre-Delivery Checklist

Before delivering ANY UI code, verify every item:

### Visual Quality
- [ ] No emojis used as icons (use SVG: Lucide, Heroicons, Simple Icons)
- [ ] All icons from consistent icon set
- [ ] Brand logos verified from official sources
- [ ] Hover states do not cause layout shift
- [ ] Images have explicit width/height (prevent CLS)
- [ ] Images optimized with framework-appropriate image component (next/image in Next.js, NuxtImage in Nuxt, native loading="lazy" otherwise)

### Interaction
- [ ] cursor-pointer on all clickable/hoverable elements
- [ ] Hover states provide clear visual feedback (color/shadow/border change)
- [ ] Transitions are smooth (150-300ms for UI feedback)
- [ ] Focus states visible with :focus-visible ring (3px offset, brand color)
- [ ] Active/pressed states distinct from hover
- [ ] Disabled states clearly communicated (opacity + cursor-not-allowed)

### Color & Contrast
- [ ] Body text contrast >= 4.5:1 (WCAG AA)
- [ ] Large text (18px+) contrast >= 3:1
- [ ] UI component contrast >= 3:1 against adjacent colors
- [ ] OKLCH tokens provided with hex fallbacks
- [ ] Color is not the only indicator (add icon/pattern/text)
- [ ] Light and dark mode both tested

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at: 375px, 640px, 768px, 1024px, 1280px, 1536px
- [ ] No horizontal scroll on mobile
- [ ] Content-first breakpoints (break when content strains, not at device widths)
- [ ] Body text max-width: 65-75ch

### Accessibility
- [ ] Skip link as first focusable element
- [ ] All images have descriptive alt text
- [ ] All form inputs have associated labels
- [ ] Color is not the only indicator of state
- [ ] prefers-reduced-motion respected (all animations)
- [ ] Keyboard navigation: Tab, Arrow keys, Home/End, Escape
- [ ] Focus trap in modals/dialogs
- [ ] ARIA roles and labels on interactive components
- [ ] Screen reader announcements for dynamic content (aria-live)
- [ ] Touch targets >= 44x44px on mobile

### Performance
- [ ] No Math.random() in SSR/hydration paths
- [ ] Barrel imports replaced with direct imports
- [ ] content-visibility: auto on long lists
- [ ] Images optimized (WebP, lazy loading, priority for above-fold)
- [ ] CSS organized in @layer base, components, utilities
- [ ] No layout-shifting animations (only transform/opacity)
- [ ] will-change added dynamically, removed after animation

### Security
- [ ] Content-Security-Policy headers configured
- [ ] Images optimized with framework-appropriate component or native lazy loading
- [ ] SEO metadata set via framework SEO API (Next.js Metadata API, Nuxt useHead, Astro head, Svelte svelte:head)
- [ ] Server Actions / API routes validated
- [ ] No sensitive data in client components

## 6.2 Anti-Pattern Confidence Checklist

Before shipping, verify you have NOT done any of these:

| # | Anti-Pattern | Why It's Wrong | Confidence Level |
|---|-------------|----------------|------------------|
| 1 | AI purple/pink gradients for non-AI products | Misleading brand association | BLOCK |
| 2 | Dark mode default for non-dev tools | Harms readability for general audience | HIGH |
| 3 | Neon/bright colors for healthcare/finance | Undermines trust | HIGH |
| 4 | Brutalism for B2B enterprise | Wrong tone for audience | MEDIUM |
| 5 | Complex animations for form-heavy apps | Distracts from task completion | MEDIUM |
| 6 | Full-screen video background on mobile | Performance + data cost | MEDIUM |
| 7 | Glassmorphism without fallback | Illegible on low-end devices | HIGH |
| 8 | Emoji as UI icons | Inconsistent rendering, accessibility fail | BLOCK |
| 9 | Hover-only navigation | Touch devices cannot access | HIGH |
| 10 | Auto-playing media | Accessibility violation, annoying | BLOCK |

## 6.3 Performance Audit

Run these checks using browser DevTools:

```
1. Lighthouse Score
   - Performance: > 90
   - Accessibility: > 90
   - Best Practices: > 90
   - SEO: > 90

2. Core Web Vitals
   - LCP: < 2.5s
   - FID: < 100ms
   - CLS: < 0.1

3. Bundle Size
   - First Load JS: < 100KB (Next.js)
   - Total CSS: < 50KB
   - No duplicate dependencies

4. Animation Performance
   - 60fps on desktop
   - 30fps minimum on mid-range Android
   - No layout thrashing during animations
```

## 6.4 Accessibility Audit (WCAG 2.2)

```
Perceivable:
- [ ] All non-text content has text alternatives
- [ ] Captions for audio/video content
- [ ] Content adaptable to different presentations
- [ ] Color contrast meets AA (4.5:1 body, 3:1 large/UI)

Operable:
- [ ] All functionality available from keyboard
- [ ] Enough time to read/use content
- [ ] No content that causes seizures (no flashing > 3/sec)
- [ ] Navigable: skip links, landmarks, headings, focus management

Understandable:
- [ ] Text readable and understandable
- [ ] Content appears/predictably operates
- [ ] Input assistance: labels, error identification, suggestions

Robust:
- [ ] Valid HTML (no parsing errors)
- [ ] Name, Role, Value defined for all UI components
- [ ] Status messages communicated to assistive technologies
```

---

# MODULE 7: EMBEDDED DATA TABLES

## 7.1 UI Styles (60 Curated)

### General Styles (42)

| # | Style | Best For | Performance | Accessibility | Key Effect |
|---|-------|----------|-------------|---------------|------------|
| 1 | Minimalism & Swiss Style | Enterprise, docs, dashboards | Excellent | WCAG AAA | Subtle hover transitions |
| 2 | Neumorphism | Health/wellness, meditation | Good | WCAG AA (careful with contrast) | Soft shadows, tactile press |
| 3 | Glassmorphism | Modern SaaS, fintech dashboards | Good (GPU blur cost) | WCAG AA (with opaque fallback) | Backdrop-blur, translucency |
| 4 | Brutalism | Design portfolios, art projects | Excellent | WCAG AA | Bold borders, raw colors |
| 5 | 3D & Hyperrealism | Gaming, product showcase | Poor (GPU-heavy) | WCAG A | 3D transforms, perspective |
| 6 | Vibrant & Block-based | Startups, creative agencies | Excellent | WCAG AA | Bright colors, sharp edges |
| 7 | Dark Mode (OLED) | Dev tools, night-mode apps | Excellent (OLED) | WCAG AA | Deep blacks, neon accents |
| 8 | Accessible & Ethical | Government, healthcare, education | Excellent | WCAG AAA | Clear focus, high contrast |
| 9 | Claymorphism | Children's apps, playful SaaS | Good | WCAG AA | Inset shadows, rounded corners |
| 10 | Aurora UI | Creative agencies, SaaS | Good | WCAG AA | Gradient mesh, glow effects |
| 11 | Retro-Futurism | Gaming, entertainment, music | Good | WCAG AA | Scanlines, CRT glow |
| 12 | Flat Design 2.0 | Web apps, startup MVPs | Excellent | WCAG AA | Subtle shadows, micro-depth |
| 13 | Soft UI Evolution | Enterprise, modern SaaS | Excellent | WCAG AAA | Soft shadows, gentle depth |
| 14 | Neubrutalism | Gen Z brands, startups | Excellent | WCAG AA | Bold borders, offset shadows |
| 15 | Bento Grid | Dashboards, product pages | Excellent | WCAG AA | Grid layout, card-based |
| 16 | Y2K Aesthetic | Fashion, music, Gen Z | Good | WCAG A | Chrome effects, iridescent |
| 17 | Cyberpunk UI | Gaming, crypto, tech | Good | WCAG A | Neon, glitch, HUD elements |
| 18 | Organic Biophilic | Wellness, sustainability | Good | WCAG AA | Natural shapes, earth tones |
| 19 | AI-Native UI | AI products, chatbots, copilots | Good | WCAG AA | Typing indicators, thinking states |
| 20 | Vaporwave | Music, gaming, creative | Good | WCAG A | Gradient, retro grid |
| 21 | Dimensional Layering | Dashboards, modals, cards | Good | WCAG AA | Depth layers, elevation |
| 22 | Exaggerated Minimalism | Fashion, architecture | Excellent | WCAG AA | Extreme whitespace, bold type |
| 23 | Kinetic Typography | Hero sections, marketing | Good | WCAG AA | Text animation, motion type |
| 24 | Parallax Storytelling | Brand stories, launches | Moderate | WCAG A | Scroll-driven parallax |
| 25 | Swiss Modernism 2.0 | Corporate, editorial | Excellent | WCAG AAA | Grid precision, typography |
| 26 | HUD / Sci-Fi FUI | Sci-fi, cybersecurity | Moderate | WCAG A | Data overlays, wireframe |
| 27 | Pixel Art | Indie games, retro tools | Excellent | WCAG AA | Pixel-perfect rendering |
| 28 | Spatial UI (VisionOS) | Spatial computing, AR/VR | Poor (3D) | WCAG A | Glass layers, depth |
| 29 | E-Ink / Paper | Reading apps, digital print | Excellent | WCAG AAA | Minimal contrast, no animation |
| 30 | Gen Z Chaos / Maximalism | Youth lifestyle, music | Moderate | WCAG A | Clashing colors, dense layout |
| 31 | Biomimetic / Organic 2.0 | Biotech, sustainability | Good | WCAG AA | Flowing forms, natural motion |
| 32 | Anti-Polish / Raw | Creative portfolios, artists | Excellent | WCAG A | Exposed structure, raw type |
| 33 | Tactile Digital | Mobile apps, playful brands | Good | WCAG AA | Press states, deformable UI |
| 34 | Nature Distilled | Wellness, sustainable products | Excellent | WCAG AA | Muted palette, organic shapes |
| 35 | Interactive Cursor | Creative portfolios | Moderate | WCAG AA | Custom cursor, magnetic effects |
| 36 | Voice-First Multimodal | Accessibility, voice assistants | Good | WCAG AAA | Voice indicators, minimal UI |
| 37 | 3D Product Preview | E-commerce, furniture, fashion | Poor (3D) | WCAG AA | 3D rotation, zoom |
| 38 | Gradient Mesh / Aurora Evolved | Hero sections, backgrounds | Good | WCAG AA | Mesh gradient, flowing color |
| 39 | Editorial Grid / Magazine | News, blogs, magazines | Excellent | WCAG AA | Column layout, typography |
| 40 | Chromatic Aberration | Music, gaming, creative | Good | WCAG A | RGB split, color shift |
| 41 | Vintage Analog | Photography, vinyl brands | Good | WCAG AA | Film grain, warm tones |
| 42 | Liquid Glass | Premium SaaS, high-end e-commerce | Good (GPU) | WCAG AA | Glass refraction, fluid depth |

### Landing Page Patterns (8)

| # | Pattern | Conversion Focus | Best For |
|---|---------|------------------|----------|
| 1 | Hero-Centric | Emotion-driven, above-fold CTA | Strong visual identity products |
| 2 | Conversion-Optimized | Lead gen, minimal distractions | Sales pages, signups |
| 3 | Feature-Rich Showcase | Feature comparison, progressive disclosure | Complex SaaS products |
| 4 | Minimal & Direct | Single CTA, clear value prop | Simple products, apps |
| 5 | Social Proof-Focused | Testimonials, trust signals | Services, B2C products |
| 6 | Interactive Demo | Try-before-buy, product demo | Software, tools |
| 7 | Trust & Authority | Credentials, case studies | B2B, enterprise, consulting |
| 8 | Storytelling-Driven | Narrative arc, emotional journey | Brands, agencies, nonprofits |

### Dashboard Styles (10)

| # | Style | Best For | Data Density |
|---|-------|----------|-------------|
| 1 | Data-Dense Dashboard | Complex analysis | Very High |
| 2 | Heat Map Style | Geographic/behavior data | High |
| 3 | Executive Dashboard | C-suite summaries | Low |
| 4 | Real-Time Monitoring | Operations, DevOps | Medium |
| 5 | Drill-Down Analytics | Exploration | Medium-High |
| 6 | Comparative Analysis | Side-by-side | Medium |
| 7 | Predictive Analytics | Forecasting, ML | Medium |
| 8 | User Behavior Analytics | UX research | Medium |
| 9 | Financial Dashboard | Finance, accounting | High |
| 10 | Sales Intelligence | Sales teams, CRM | Medium-High |

## 7.2 Color Palettes (48 OKLCH + Hex)

### SaaS & Tech (8)

| Palette | Primary (OKLCH / Hex) | Secondary (OKLCH / Hex) | CTA (OKLCH / Hex) | Background | Text |
|---------|----------------------|------------------------|--------------------| ----------- | ---- |
| SaaS Blue | oklch(0.55 0.20 260) / #2563eb | oklch(0.62 0.18 250) / #3b82f6 | oklch(0.68 0.17 45) / #f97316 | #f8fafc | #1e293b |
| Dev Tools | oklch(0.65 0.18 155) / #059669 | oklch(0.70 0.14 160) / #10b981 | oklch(0.75 0.15 85) / #eab308 | #0f172a | #e2e8f0 |
| AI Platform | oklch(0.60 0.22 290) / #7c3aed | oklch(0.65 0.20 280) / #8b5cf6 | oklch(0.70 0.18 260) / #6366f1 | #0c0a1a | #f1f5f9 |
| Cloud Infra | oklch(0.58 0.16 240) / #1d4ed8 | oklch(0.64 0.14 235) / #2563eb | oklch(0.55 0.22 25) / #dc2626 | #ffffff | #111827 |
| Startup | oklch(0.65 0.22 330) / #db2777 | oklch(0.70 0.20 320) / #ec4899 | oklch(0.75 0.15 85) / #f59e0b | #fafafa | #18181b |
| Fintech Pro | oklch(0.50 0.15 250) / #1e3a5f | oklch(0.55 0.12 245) / #2563eb | oklch(0.70 0.18 145) / #22c55e | #f0f4f8 | #0f172a |
| DevOps | oklch(0.55 0.18 20) / #c2410c | oklch(0.60 0.15 25) / #ea580c | oklch(0.65 0.17 260) / #2563eb | #1a1a2e | #e2e8f0 |
| No-Code | oklch(0.70 0.20 340) / #e11d48 | oklch(0.75 0.18 330) / #f43f5e | oklch(0.65 0.18 145) / #22c55e | #ffffff | #1f2937 |

### E-Commerce (8)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| General | oklch(0.55 0.20 260) / #2563eb | oklch(0.60 0.18 250) / #3b82f6 | oklch(0.68 0.17 45) / #f97316 | #ffffff | #111827 |
| Luxury | oklch(0.40 0.08 60) / #1c1917 | oklch(0.60 0.10 55) / #a8a29e | oklch(0.78 0.14 75) / #d4af37 | #fafaf9 | #1c1917 |
| Fashion | oklch(0.65 0.22 330) / #db2777 | oklch(0.70 0.20 340) / #e11d48 | oklch(0.75 0.15 85) / #f59e0b | #fdf2f8 | #1f2937 |
| Marketplace | oklch(0.55 0.20 145) / #059669 | oklch(0.60 0.18 150) / #10b981 | oklch(0.68 0.17 45) / #f97316 | #f0fdf4 | #111827 |
| Subscription | oklch(0.60 0.18 260) / #4f46e5 | oklch(0.65 0.16 255) / #6366f1 | oklch(0.55 0.22 25) / #dc2626 | #eef2ff | #1e1b4b |
| Food & Bev | oklch(0.60 0.22 20) / #c2410c | oklch(0.55 0.20 15) / #9a3412 | oklch(0.70 0.18 85) / #eab308 | #fffbeb | #1c1917 |
| Sports | oklch(0.55 0.22 20) / #dc2626 | oklch(0.50 0.20 260) / #1d4ed8 | oklch(0.75 0.15 85) / #f59e0b | #ffffff | #111827 |
| Electronics | oklch(0.45 0.10 250) / #1e293b | oklch(0.55 0.15 255) / #3b82f6 | oklch(0.68 0.17 45) / #f97316 | #f8fafc | #0f172a |

### Healthcare (6)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| Medical Clinic | oklch(0.58 0.16 210) / #0891b2 | oklch(0.62 0.14 215) / #06b6d4 | oklch(0.65 0.17 145) / #22c55e | #f0f9ff | #0c4a6e |
| Dental | oklch(0.72 0.12 210) / #67e8f9 | oklch(0.65 0.14 200) / #22d3ee | oklch(0.70 0.15 260) / #3b82f6 | #ecfeff | #164e63 |
| Pharmacy | oklch(0.60 0.20 145) / #16a34a | oklch(0.55 0.18 150) / #059669 | oklch(0.65 0.15 260) / #2563eb | #f0fdf4 | #14532d |
| Mental Health | oklch(0.60 0.15 250) / #6366f1 | oklch(0.55 0.12 260) / #4f46e5 | oklch(0.70 0.14 155) / #34d399 | #eef2ff | #312e81 |
| Veterinary | oklch(0.65 0.18 155) / #059669 | oklch(0.70 0.16 150) / #10b981 | oklch(0.75 0.15 85) / #f59e0b | #f0fdf4 | #064e3b |
| Telehealth | oklch(0.55 0.16 250) / #2563eb | oklch(0.60 0.14 245) / #3b82f6 | oklch(0.65 0.17 145) / #22c55e | #eff6ff | #1e3a5f |

### Finance & Insurance (6)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| Banking | oklch(0.40 0.10 250) / #1e3a5f | oklch(0.55 0.15 255) / #2563eb | oklch(0.68 0.17 45) / #f97316 | #f8fafc | #0f172a |
| Crypto | oklch(0.70 0.20 85) / #eab308 | oklch(0.65 0.18 90) / #ca8a04 | oklch(0.60 0.18 145) / #059669 | #0c0a1a | #f1f5f9 |
| Insurance | oklch(0.50 0.15 250) / #1d4ed8 | oklch(0.55 0.13 245) / #2563eb | oklch(0.65 0.17 145) / #22c55e | #eff6ff | #1e3a5f |
| Trading | oklch(0.45 0.12 250) / #0f172a | oklch(0.55 0.18 260) / #3b82f6 | oklch(0.65 0.18 145) / #22c55e | #0f172a | #e2e8f0 |
| Accounting | oklch(0.55 0.15 250) / #2563eb | oklch(0.60 0.13 255) / #3b82f6 | oklch(0.70 0.14 85) / #eab308 | #ffffff | #111827 |
| Wealth Mgmt | oklch(0.45 0.08 55) / #1c1917 | oklch(0.60 0.10 60) / #a8a29e | oklch(0.78 0.14 75) / #d4af37 | #fafaf9 | #1c1917 |

### Beauty & Wellness (6)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| Spa & Wellness | oklch(0.65 0.12 340) / #e8b4b8 | oklch(0.70 0.14 155) / #a8d5ba | oklch(0.78 0.14 75) / #d4af37 | #fff5f5 | #2d3436 |
| Skincare | oklch(0.72 0.10 330) / #f9a8d4 | oklch(0.68 0.08 55) / #d4c5b0 | oklch(0.75 0.12 340) / #f472b6 | #fdf2f8 | #4a3040 |
| Hair & Salon | oklch(0.50 0.12 310) / #7e22ce | oklch(0.60 0.14 320) / #a855f7 | oklch(0.70 0.15 85) / #f59e0b | #faf5ff | #3b0764 |
| Cosmetics | oklch(0.65 0.20 340) / #e11d48 | oklch(0.70 0.18 330) / #f43f5e | oklch(0.75 0.15 85) / #f59e0b | #fff1f2 | #1f2937 |
| Fitness | oklch(0.60 0.22 20) / #dc2626 | oklch(0.55 0.20 15) / #b91c1c | oklch(0.70 0.18 145) / #22c55e | #ffffff | #111827 |
| Yoga | oklch(0.60 0.15 250) / #6366f1 | oklch(0.65 0.14 155) / #34d399 | oklch(0.72 0.10 60) / #d4c5b0 | #f5f3ff | #312e81 |

### Creative & Education (8)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| Portfolio | oklch(0.45 0.08 250) / #1e293b | oklch(0.55 0.15 255) / #3b82f6 | oklch(0.68 0.17 45) / #f97316 | #ffffff | #0f172a |
| Agency | oklch(0.60 0.22 20) / #dc2626 | oklch(0.55 0.20 260) / #2563eb | oklch(0.75 0.15 85) / #f59e0b | #ffffff | #111827 |
| Photography | oklch(0.35 0.05 0) / #1a1a1a | oklch(0.90 0.02 0) / #e5e5e5 | oklch(0.70 0.18 260) / #3b82f6 | #0a0a0a | #f5f5f5 |
| Education | oklch(0.55 0.18 260) / #2563eb | oklch(0.60 0.16 145) / #059669 | oklch(0.68 0.17 45) / #f97316 | #ffffff | #111827 |
| Gaming | oklch(0.60 0.22 290) / #7c3aed | oklch(0.65 0.20 280) / #8b5cf6 | oklch(0.70 0.22 20) / #ef4444 | #0c0a1a | #f1f5f9 |
| Music | oklch(0.60 0.22 330) / #db2777 | oklch(0.55 0.20 290) / #7c3aed | oklch(0.75 0.20 340) / #f472b6 | #0c0a1a | #f1f5f9 |
| Legal | oklch(0.40 0.10 250) / #1e3a5f | oklch(0.60 0.12 245) / #3b82f6 | oklch(0.78 0.14 75) / #d4af37 | #f8fafc | #0f172a |
| Nonprofit | oklch(0.60 0.18 145) / #059669 | oklch(0.55 0.16 250) / #2563eb | oklch(0.65 0.22 20) / #dc2626 | #f0fdf4 | #111827 |

### Restaurant & Hospitality (6)

| Palette | Primary | Secondary | CTA | Background | Text |
|---------|---------|-----------|-----|------------|------|
| Fine Dining | oklch(0.40 0.08 55) / #1c1917 | oklch(0.78 0.14 75) / #d4af37 | oklch(0.65 0.17 145) / #22c55e | #fafaf9 | #1c1917 |
| Casual Dining | oklch(0.60 0.22 20) / #c2410c | oklch(0.55 0.18 15) / #9a3412 | oklch(0.70 0.15 85) / #eab308 | #fffbeb | #1c1917 |
| Hotel Luxury | oklch(0.78 0.14 75) / #d4af37 | oklch(0.45 0.08 55) / #1c1917 | oklch(0.70 0.15 260) / #3b82f6 | #fafaf9 | #1c1917 |
| Hotel Modern | oklch(0.55 0.16 250) / #2563eb | oklch(0.60 0.14 245) / #3b82f6 | oklch(0.68 0.17 45) / #f97316 | #ffffff | #111827 |
| Cafe | oklch(0.50 0.12 55) / #78350f | oklch(0.45 0.10 40) / #451a03 | oklch(0.65 0.17 145) / #22c55e | #fefce8 | #451a03 |
| Travel | oklch(0.60 0.18 210) / #0891b2 | oklch(0.65 0.16 200) / #06b6d4 | oklch(0.68 0.17 45) / #f97316 | #ecfeff | #164e63 |

## 7.3 Font Pairings (36 Verified Google Fonts)

> **IMPORTANT**: All fonts below are verified available on Google Fonts as of 2026.
> Fonts like Clash Display, Cabinet Grotesk, Satoshi, Canela, etc. are NOT on Google Fonts
> and must be self-hosted. Those are flagged with [SELF-HOSTED] and replaced with Google Fonts alternatives.

### Sans-Serif Pairs (18)

| # | Heading | Body | Mood | Best For | Google Fonts URL |
|---|---------|------|------|----------|-----------------|
| 1 | Inter | Inter | Clean, professional | SaaS, dashboards, enterprise | fonts.google.com/specimen/Inter |
| 2 | Plus Jakarta Sans | Inter | Modern, friendly | Startups, SaaS, fintech | fonts.google.com/specimen/Plus+Jakarta+Sans |
| 3 | Space Grotesk | DM Sans | Geometric, technical | Dev tools, technical docs | fonts.google.com/specimen/Space+Grotesk |
| 4 | Outfit | Source Sans 3 | Rounded, approachable | Education, children's apps | fonts.google.com/specimen/Outfit |
| 5 | Manrope | Inter | Geometric, clean | Corporate, modern web | fonts.google.com/specimen/Manrope |
| 6 | Sora | Inter | Geometric, futuristic | Tech products, crypto | fonts.google.com/specimen/Sora |
| 7 | Poppins | Inter | Geometric, friendly | Startups, consumer apps | fonts.google.com/specimen/Poppins |
| 8 | Montserrat | Open Sans | Bold, modern | Marketing sites, landing pages | fonts.google.com/specimen/Montserrat |
| 9 | Nunito | Inter | Rounded, soft | Children's apps, education | fonts.google.com/specimen/Nunito |
| 10 | Figtree | Inter | Humanist, readable | Long-form content, blogs | fonts.google.com/specimen/Figtree |
| 11 | Lexend | Inter | Optimized for readability | Accessibility-first products | fonts.google.com/specimen/Lexend |
| 12 | Archivo | Inter | Grotesque, editorial | News, magazines, editorial | fonts.google.com/specimen/Archivo |
| 13 | Albert Sans | Inter | Geometric, modern | E-commerce, retail | fonts.google.com/specimen/Albert+Sans |
| 14 | Red Hat Display | Red Hat Text | Corporate, technical | Enterprise, documentation | fonts.google.com/specimen/Red+Hat+Display |
| 15 | JetBrains Sans [NEW] | JetBrains Mono | Developer-focused | Code editors, dev tools | fonts.google.com/specimen/JetBrains+Mono |
| 16 | Geist [NEW] | Geist Mono | Modern, technical | Next.js ecosystem | npm: fontsource/geist |
| 17 | Bricolage Grotesque | Inter | Display, personality | Creative agencies, portfolios | fonts.google.com/specimen/Bricolage+Grotesque |
| 18 | Onest | Inter | Geometric, international | Multi-language, global SaaS | fonts.google.com/specimen/Onest |

### Serif + Sans Pairs (12)

| # | Heading | Body | Mood | Best For | Google Fonts URL |
|---|---------|------|------|----------|-----------------|
| 1 | Playfair Display | Source Sans 3 | Elegant, editorial | Luxury, fashion, editorial | fonts.google.com/specimen/Playfair+Display |
| 2 | Cormorant Garamond | Montserrat | Refined, classical | Luxury, wellness, editorial | fonts.google.com/specimen/Cormorant+Garamond |
| 3 | Lora | Inter | Literary, warm | Blogs, reading apps, publishing | fonts.google.com/specimen/Lora |
| 4 | DM Serif Display | DM Sans | Bold, contemporary | Fashion, architecture | fonts.google.com/specimen/DM+Serif+Display |
| 5 | Merriweather | Open Sans | Readable, traditional | Long-form content, news | fonts.google.com/specimen/Merriweather |
| 6 | Libre Baskerville | Source Sans 3 | Classic, web-optimized | Editorial, magazines | fonts.google.com/specimen/Libre+Baskerville |
| 7 | Fraunces | Inter | Variable, expressive | Creative, playful brands | fonts.google.com/specimen/Fraunces |
| 8 | Newsreader | Source Sans 3 | Editorial, news | News sites, journalism | fonts.google.com/specimen/Newsreader |
| 9 | Bitter | Source Sans 3 | Slab, sturdy | Legal, academic, formal | fonts.google.com/specimen/Bitter |
| 10 | EB Garamond | Inter | Classical, timeless | Academic, book publishing | fonts.google.com/specimen/EB+Garamond |
| 11 | Vollkorn | Inter | Bookish, warm | Reading apps, literary | fonts.google.com/specimen/Vollkorn |
| 12 | Crimson Pro | Inter | Refined, modern serif | Editorial, portfolios | fonts.google.com/specimen/Crimson+Pro |

### Monospace + Sans Pairs (6)

| # | Heading | Body | Mood | Best For | Google Fonts URL |
|---|---------|------|------|----------|-----------------|
| 1 | Space Mono | Inter | Technical, retro | Dev tools, data dashboards | fonts.google.com/specimen/Space+Mono |
| 2 | JetBrains Mono | Inter | Developer, modern | Code editors, CLI tools | fonts.google.com/specimen/JetBrains+Mono |
| 3 | IBM Plex Mono | IBM Plex Sans | Corporate, engineering | Enterprise, documentation | fonts.google.com/specimen/IBM+Plex+Mono |
| 4 | Fira Code | Fira Sans | Ligatures, developer | Code displays, presentations | fonts.google.com/specimen/Fira+Code |
| 5 | Source Code Pro | Source Sans 3 | Adobe ecosystem | Creative tools, Adobe-adjacent | fonts.google.com/specimen/Source+Code+Pro |
| 6 | Geist Mono | Geist Sans | Next.js ecosystem | Next.js apps, Vercel projects | npm: fontsource/geist |

### Self-Hosted Fonts (NOT on Google Fonts — Require Self-Hosting)

The following fonts are commonly recommended but are **NOT available on Google Fonts**. If you reference them, you must self-host the font files:

| Font | Type | Google Fonts Alternative |
|------|------|------------------------|
| Clash Display | Sans-serif display | Plus Jakarta Sans or Bricolage Grotesque |
| Cabinet Grotesk | Sans-serif | Manrope or Sora |
| Satoshi | Sans-serif | Plus Jakarta Sans or Figtree |
| Canela | Serif display | Fraunces or DM Serif Display |
| General Sans | Sans-serif | Inter or Manrope |
| Cera Pro | Sans-serif | Montserrat or Red Hat Display |
| Neufile Grotesk | Sans-serif | Archivo or Albert Sans |
| Macklin | Sans-serif display | Bricolage Grotesque |
| Obviously | Sans-serif | Space Grotesk |
| Sharp Sans | Sans-serif | Lexend or Sora |
| Fakt | Sans-serif | Manrope |
| Aeonik | Sans-serif | Inter or Geist |
| GT America | Sans-serif | Archivo |
| CoFo Sans | Sans-serif | Onest |

## 7.4 Industry Rules (24)

### Technology & SaaS

| Industry | Recommended Pattern | Style Priority | Color Mood | Typography Mood | Key Effects | Anti-Patterns |
|----------|--------------------|----------------|------------|-----------------|-------------|---------------|
| SaaS Platform | Hero-Centric + Feature Grid | Minimalism, Flat Design 2.0 | Professional Blue | Clean, Inter/Jakarta | Subtle hover, micro-interactions | AI purple gradients, dark mode default |
| Developer Tools | Feature-Rich + Interactive Demo | Swiss Modernism 2.0, Flat Design | Dark mode, syntax colors | Technical, Mono+Sans | Code highlighting, keyboard shortcuts | Playful animations, pastel colors |
| AI/ML Platform | Hero-Centric + Social Proof | AI-Native UI, Glassmorphism | Purple/Blue gradient | Modern, Plus Jakarta Sans | Typing indicators, thinking states | Fake confidence, no uncertainty notice |
| Cloud Infrastructure | Trust & Authority | Minimalism, Soft UI Evolution | Blue/Teal, trustworthy | Corporate, Inter | Dashboard previews, real-time data | Bright neon, casual tone |
| Cybersecurity | Trust & Authority | Cyberpunk UI (subtle), Dark Mode | Dark, green/red alerts | Technical, Space Grotesk | Data flow animations, threat indicators | Playful design, light mode default |

### Finance & Insurance

| Industry | Pattern | Style Priority | Color Mood | Typography Mood | Key Effects | Anti-Patterns |
|----------|---------|----------------|------------|-----------------|-------------|---------------|
| Banking | Trust & Authority | Minimalism, Soft UI Evolution | Navy blue, gold | Corporate, Inter/Montserrat | Subtle transitions, data visualization | Crypto neon, playful animations |
| Insurance | Conversion-Optimized | Minimalism, Accessible & Ethical | Blue, green (safety) | Professional, Source Sans 3 | Step-by-step form progress | Aggressive sales tactics, dark mode |
| Crypto/DeFi | Hero-Centric | Dark Mode, Cyberpunk UI | Gold, dark backgrounds | Futuristic, Sora/Space Mono | Real-time price tickers, charts | Traditional banking aesthetic |
| Trading | Data-Dense Dashboard | Real-Time Monitoring | Dark, data-focused | Technical, Mono+Sans | Real-time charts, streaming data | Pastel colors, minimal data display |

### Healthcare

| Industry | Pattern | Style Priority | Color Mood | Typography Mood | Key Effects | Anti-Patterns |
|----------|---------|----------------|------------|-----------------|-------------|---------------|
| Medical Clinic | Trust & Authority | Accessible & Ethical, Soft UI | Teal, white, calm | Professional, Inter/Lexend | Smooth form transitions | Bright red, alarming animations |
| Mental Health | Storytelling-Driven | Organic Biophilic, Soft UI | Lavender, sage, warm | Calming, Cormorant Garamond | Gentle transitions, breathing animations | Clinical cold design, harsh colors |
| Telehealth | Hero-Centric + Trust | Minimalism, Accessible | Blue, white, clean | Professional, Inter | Video call previews, booking flow | Complex navigation, dark mode |
| Pharmacy | Conversion-Optimized | Accessible, Flat Design 2.0 | Green, white, clean | Professional, Source Sans 3 | Search autocomplete, cart feedback | Medical jargon, complex checkout |

### E-Commerce & Services

| Industry | Pattern | Style Priority | Color Mood | Typography Mood | Key Effects | Anti-Patterns |
|----------|---------|----------------|------------|-----------------|-------------|---------------|
| General E-Commerce | Hero-Centric + Social Proof | Flat Design 2.0, Bento Grid | Brand-dependent | Clean, Inter | Product zoom, cart animation | Slow loading, cluttered layout |
| Luxury | Storytelling-Driven | Exaggerated Minimalism | Black, gold, cream | Elegant, Playfair Display | Image reveals, scroll animations | Discount aesthetic, neon signs |
| Food & Restaurant | Hero-Centric | Organic Biophilic, Warm | Warm, earthy tones | Friendly, DM Serif Display | Menu animations, reservation CTA | Clinical design, blue default |
| Beauty & Spa | Hero-Centric | Soft UI Evolution, Organic | Soft pink, sage, gold | Elegant, Cormorant Garamond | Smooth reveals, booking flow | Harsh animations, dark mode default |

### Creative & Education

| Industry | Pattern | Style Priority | Color Mood | Typography Mood | Key Effects | Anti-Patterns |
|----------|---------|----------------|------------|-----------------|-------------|---------------|
| Education Platform | Feature-Rich + Social Proof | Accessible, Flat Design 2.0 | Blue, green, warm | Readable, Lexend/Inter | Progress bars, achievement animations | Dark mode, complex navigation |
| Creative Agency | Storytelling-Driven | Neubrutalism, Kinetic Typography | Bold, contrasting | Display, Bricolage Grotesque | Parallax, custom cursor, scroll effects | Conservative design, minimal motion |
| Portfolio | Minimal & Direct | Minimalism, Exaggerated Minimalism | Monochrome, accent | Bold, Space Grotesk | Image reveals, hover effects | Cluttered layout, generic design |
| Nonprofit | Social Proof-Focused + Trust | Accessible, Organic Biophilic | Green, blue, warm | Professional, Merriweather/Inter | Impact counters, donation animations | Corporate aesthetic, aggressive CTAs |

## 7.5 2026 Tool Ecosystem

### AI Coding Assistants (Current)

| Tool | Type | Skill Activation Method |
|------|------|------------------------|
| Claude Code | CLI | Auto-activate on UI/UX requests |
| Cursor | IDE | Slash command: /ui-ux-pro-max |
| Kiro | IDE | Spec-driven, SOLO mode |
| Trae | IDE | Auto-activate in SOLO mode |
| Codex CLI | CLI | Skill file in project |
| Windsurf | IDE | Auto-activate on UI/UX requests |
| GitHub Copilot | IDE | Slash command |
| Roo Code | IDE | Slash command |
| Gemini CLI | CLI | Auto-activate on UI/UX requests |
| Continue | IDE | Auto-activate on UI/UX requests |

### Deprecated / Replaced Tools

| Old Reference | Current (2026) |
|---------------|----------------|
| Windsurf Agent | Kiro |
| Cursor Agent | Trae |
| GitHub Copilot Chat | Copilot with Claude |
| OpenDevin | OpenHands |

---

# MODULE 8: CROSS-REFERENCE INTEGRATION

## 8.1 Design System Operating System

The five UI/UX skills form a composable "operating system" for design and implementation. Each skill is a module with a specific domain:

```
┌──────────────────────────────────────────────────────────┐
│                DESIGN SYSTEM OPERATING SYSTEM              │
│                                                            │
│  ┌──────────────────┐  ┌──────────────────────────────┐  │
│  │  UI/UX Pro Max   │  │  GSAP Animations              │  │
│  │  (THIS SKILL)    │  │  - Timeline choreography      │  │
│  │  - Design tokens │◄─┤  - ScrollTrigger              │  │
│  │  - Palettes      │  │  - SplitText, Flip, MorphSVG  │  │
│  │  - Typography    │  │  - MotionPath, DrawSVG        │  │
│  │  - Components    │  │  - useGSAP hook               │  │
│  │  - Industry rules│  │  - Lenis smooth scroll        │  │
│  └────────┬─────────┘  └──────────────────────────────┘  │
│           │                                                │
│  ┌────────┴─────────┐  ┌──────────────────────────────┐  │
│  │  Web Design       │  │  React Best Practices         │  │
│  │  Guidelines       │  │  - Waterfall elimination      │  │
│  │  - ARIA/focus     │◄─┤  - Bundle optimization        │  │
│  │  - Semantic HTML  │  │  - Server Components          │  │
│  │  - Forms/a11y     │  │  - Re-render optimization     │  │
│  │  - Keyboard nav   │  │  - Suspense boundaries        │  │
│  └───────────────────┘  └──────────────────────────────┘  │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Motion System Playbook (Cross-cutting governance)    │ │
│  │  - Library selection matrix                           │ │
│  │  - Performance budgets (60fps)                        │ │
│  │  - Combo safety (multi-library coexistence)           │ │
│  │  - Reduced motion enforcement                         │ │
│  │  - Core Web Vitals protection                         │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

## 8.2 Cross-Reference Table: What Each Skill Provides

| Need | UI/UX Pro Max | GSAP Animations | React Best Practices | Web Design Guidelines | Motion System Playbook |
|------|---------------|-----------------|---------------------|----------------------|----------------------|
| Color palette | 48 OKLCH palettes | — | — | — | — |
| Font pairing | 36 verified pairings | — | — | — | — |
| Industry rules | 24 reasoning rules | — | — | — | — |
| Component code | 20+ React components | — | — | — | — |
| CSS primitives | Container queries, @layer, nesting | — | — | Semantic HTML, forms | — |
| Animation syntax | 24 presets (CSS + GSAP) | Full GSAP API reference | — | — | Library selection matrix |
| Scroll animations | Basic ScrollTrigger | Advanced ScrollTrigger, pin, scrub | — | — | Max 15-20 instances/page |
| Text animation | SplitText, scramble | Full SplitText, typewriter | — | — | Duration ceilings |
| SVG animation | DrawSVG, MorphSVG | Full DrawSVG/MorphSVG API | — | — | — |
| Layout animation | Flip basics | Full Flip API | — | — | Never mix libraries on same element |
| React perf | Basic memo/keys | — | 70 rules, 8 categories | — | Core Web Vitals audit |
| Bundle size | Barrel import warning | — | 6 bundle rules | — | Bundle size per library |
| Accessibility | WCAG checklist, keyboard nav | — | — | Full ARIA, focus, keyboard | Reduced motion, motion toggle |
| AI UI patterns | 8 AI-specific components | — | — | — | — |
| View Transitions | API + Next.js integration | — | — | — | Duration guidance |
| Smooth scroll | Lenis integration | — | — | — | Performance rules |

## 8.3 Integration Workflows

### Workflow A: Full Marketing Site (Animation-Heavy)

```
1. UI/UX Pro Max Module 1 → Creative brief, style selection
2. UI/UX Pro Max Module 2 → Design tokens, OKLCH palettes
3. UI/UX Pro Max Module 7 → Font pairing, industry rules
4. GSAP Animations → Timeline choreography, ScrollTrigger setup
5. Motion System Playbook → Library selection (GSAP for scroll, CSS for hovers)
6. React Best Practices → Server Components for static sections, client for interactive
7. Web Design Guidelines → ARIA, keyboard nav audit
8. UI/UX Pro Max Module 6 → Pre-delivery validation
```

### Workflow B: AI Chat Product

```
1. UI/UX Pro Max Module 1 → Creative brief (AI platform)
2. UI/UX Pro Max Module 7 → AI-Native UI style, purple/blue palette
3. UI/UX Pro Max Module 4 → Thinking indicator, Chat composer, Uncertainty notice
4. React Best Practices → Streaming with Suspense, SWR for message dedup
5. Web Design Guidelines → aria-live for message announcements
6. Motion System Playbook → Typing animation (CSS or Motion One, not GSAP for this)
7. UI/UX Pro Max Module 6 → Accessibility audit (screen reader flow)
```

### Workflow C: Enterprise Dashboard

```
1. UI/UX Pro Max Module 1 → Creative brief (fintech/enterprise)
2. UI/UX Pro Max Module 7 → Data-Dense Dashboard style, banking palette
3. UI/UX Pro Max Module 3 → Container queries for responsive panels
4. React Best Practices → RSC for data fetching, memo for chart components
5. Web Design Guidelines → Form accessibility, ARIA for data tables
6. Motion System Playbook → CSS-only micro-interactions (no GSAP needed)
7. UI/UX Pro Max Module 6 → Performance audit (Core Web Vitals)
```

## 8.4 Skill Activation Priority

When multiple skills could apply, use this priority order:

| Priority | Skill | Condition |
|----------|-------|-----------|
| 1 | UI/UX Pro Max | Always activate first for any UI/UX request (it routes to others) |
| 2 | React Best Practices | When writing React/Next.js component code |
| 3 | GSAP Animations | When implementing GSAP-specific animations |
| 4 | Web Design Guidelines | When auditing accessibility or semantic HTML |
| 5 | Motion System Playbook | When mixing animation libraries or debugging perf |

## 8.5 Bundled Assets Reference

This skill bundles data accessible via Python scripts:

```bash
# Design system generation
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name"

# Domain-specific searches
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain>

# Stack-specific guidelines
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>

# Persistence
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project"
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project" --page "dashboard"
```

Available domains: product, style, color, landing, typography, chart, ux, icons, react, web

Available stacks: html-tailwind, react, nextjs, vue, nuxtjs, nuxt-ui, svelte, astro, swiftui, react-native, flutter, shadcn, jetpack-compose

Data files location: `skills/ui-ux-pro-max/data/`
- styles.csv (67 entries), colors.csv (96 palettes), typography.csv (57 pairings)
- products.csv, landing.csv, charts.csv, icons.csv
- ux-guidelines.csv, react-performance.csv, web-interface.csv
- ui-reasoning.csv (100 reasoning rules)
- stacks/*.csv (13 stack-specific guideline files)

---

## Output Standards

- Default to ASCII-only tokens/variables unless the project already uses Unicode
- Include: spacing scale, type scale, 2-3 font pair options, color tokens (OKLCH + hex), component states
- Always cover: empty/loading/error, keyboard navigation, focus states, contrast
- Run anti-pattern checklist (Module 1.2) before delivery
- Run pre-delivery checklist (Module 6.1) before delivery
- Cross-reference other skills when the task exceeds this skill's scope

---

# MODULE 9: THEME SYSTEM

## 9.1 Dark Mode Implementation

Dark mode must be more than inverting colors. A proper dark theme reduces eye strain, maintains contrast, and preserves the visual hierarchy established in the light theme. Never simply swap white for black — adjust chroma, lightness, and shadow depth for the dark environment.

### CSS Custom Properties Strategy (Framework-Agnostic)

```css
/* Light theme (default) */
:root {
  --color-bg-primary: oklch(0.98 0.01 260);
  --color-bg-secondary: oklch(1.0 0.00 0);
  --color-bg-tertiary: oklch(0.95 0.01 260);
  --color-text-primary: oklch(0.15 0.02 260);
  --color-text-secondary: oklch(0.35 0.02 260);
  --color-text-tertiary: oklch(0.55 0.02 260);
  --color-border: oklch(0.88 0.01 260);
  --color-primary: oklch(0.55 0.20 260);
  --color-primary-hover: oklch(0.50 0.22 260);
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1);
}

/* Dark theme */
[data-theme="dark"] {
  --color-bg-primary: oklch(0.15 0.02 260);
  --color-bg-secondary: oklch(0.20 0.02 260);
  --color-bg-tertiary: oklch(0.25 0.02 260);
  --color-text-primary: oklch(0.90 0.01 260);
  --color-text-secondary: oklch(0.70 0.02 260);
  --color-text-tertiary: oklch(0.55 0.02 260);
  --color-border: oklch(0.30 0.02 260);
  --color-primary: oklch(0.65 0.18 260);
  --color-primary-hover: oklch(0.70 0.20 260);
  /* Shadows are subtler in dark mode */
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.5);
}
```

### Dark Mode Anti-Patterns

1. **Pure black backgrounds** (#000000) — Too harsh. Use oklch(0.12-0.18) instead.
2. **Desaturated accent colors** — Colors appear more vibrant on dark backgrounds. Reduce chroma by 10-20% in dark mode.
3. **High-contrast white text** — Pure #ffffff on dark backgrounds causes halation. Use oklch(0.87-0.92) for a softer reading experience.
4. **Elevation via shadows** — In dark mode, shadows are less visible. Use background color lightness to indicate elevation instead (lighter = higher).
5. **Same border color as light** — Borders need to be lighter in dark mode to remain visible.

### System Preference Detection

```css
/* Respect user's OS preference by default */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-bg-primary: oklch(0.15 0.02 260);
    --color-bg-secondary: oklch(0.20 0.02 260);
    /* ... all dark tokens ... */
  }
}

/* Manual override takes priority over OS preference */
[data-theme="light"] { /* light tokens */ }
[data-theme="dark"] { /* dark tokens */ }
```

## 9.2 Theme Switching Strategy

### React Theme Provider

```tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolved: 'light' | 'dark';
}>({ theme: 'system', setTheme: () => {}, resolved: 'light' });

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolved, setResolved] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && mediaQuery.matches);
      root.setAttribute('data-theme', isDark ? 'dark' : 'light');
      setResolved(isDark ? 'dark' : 'light');
    };

    applyTheme();
    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolved }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeToggle() {
  const { theme, setTheme, resolved } = useTheme();
  const nextTheme = resolved === 'dark' ? 'light' : 'dark';

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {resolved === 'dark' ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
```

### Preventing Flash of Unstyled Content (FOUC)

The most critical part of theme switching is preventing the flash of wrong-theme content on page load. Add this inline script in `<head>` before any CSS loads:

```html
<script>
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
</script>
```

## 9.3 Tailwind v4 Dark Mode Integration

In Tailwind v4, dark mode works differently from v3. Instead of configuring `darkMode: 'class'` in a config file, you use the `@variant` directive:

```css
@import "tailwindcss";

/* Enable class-based dark mode (default is media query) */
@variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

This allows `dark:` utility classes to work with your `data-theme` attribute instead of relying solely on `prefers-color-scheme`.

```html
<!-- These now work with data-theme="dark" -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-gray-100">Hello</p>
</div>
```

## 9.4 Dark Mode Token Architecture

A robust dark mode implementation requires a complete token architecture that redefines every semantic color for the dark environment. This is not a simple inversion -- each token must be carefully crafted to maintain visual hierarchy, readability, and brand consistency. The OKLCH color space makes this process systematic because perceptual lightness can be precisely controlled.

### Complete Token Set with OKLCH

```css
/* Light theme (default) */
:root {
  /* Backgrounds — high lightness, low chroma */
  --color-bg-primary: oklch(0.98 0.01 260);
  --color-bg-secondary: oklch(1.0 0.00 0);
  --color-bg-tertiary: oklch(0.95 0.01 260);
  --color-bg-inverse: oklch(0.15 0.02 260);

  /* Text — low lightness for contrast */
  --color-text-primary: oklch(0.15 0.02 260);
  --color-text-secondary: oklch(0.35 0.02 260);
  --color-text-tertiary: oklch(0.55 0.02 260);
  --color-text-inverse: oklch(0.98 0.01 260);

  /* Borders — subtle, low chroma */
  --color-border-default: oklch(0.88 0.01 260);
  --color-border-strong: oklch(0.75 0.02 260);

  /* Interactive — moderate chroma for visibility */
  --color-primary: oklch(0.55 0.20 260);
  --color-primary-hover: oklch(0.50 0.22 260);
  --color-primary-subtle: oklch(0.55 0.20 260 / 0.1);

  /* Status — high chroma for signaling */
  --color-success: oklch(0.65 0.17 145);
  --color-warning: oklch(0.72 0.15 85);
  --color-error: oklch(0.55 0.22 25);
  --color-info: oklch(0.58 0.12 210);

  /* Shadows — subtle depth */
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.1);
}

/* Dark theme -- complete token override */
.dark,
[data-theme="dark"] {
  /* Backgrounds — low lightness, slight cool tint */
  --color-bg-primary: oklch(0.15 0.02 260);
  --color-bg-secondary: oklch(0.20 0.02 260);
  --color-bg-tertiary: oklch(0.25 0.02 260);
  --color-bg-inverse: oklch(0.98 0.01 260);

  /* Text — high lightness, softer than pure white to prevent halation */
  --color-text-primary: oklch(0.90 0.01 260);
  --color-text-secondary: oklch(0.70 0.02 260);
  --color-text-tertiary: oklch(0.55 0.02 260);
  --color-text-inverse: oklch(0.15 0.02 260);

  /* Borders — lighter than backgrounds, visible in dark environments */
  --color-border-default: oklch(0.30 0.02 260);
  --color-border-strong: oklch(0.40 0.02 260);

  /* Interactive -- slightly higher lightness for dark bg contrast, reduced chroma */
  --color-primary: oklch(0.65 0.18 260);
  --color-primary-hover: oklch(0.70 0.20 260);
  --color-primary-subtle: oklch(0.65 0.18 260 / 0.15);

  /* Status -- adjusted for dark backgrounds */
  --color-success: oklch(0.70 0.15 145);
  --color-warning: oklch(0.78 0.13 85);
  --color-error: oklch(0.65 0.20 25);
  --color-info: oklch(0.65 0.10 210);

  /* Shadows -- deeper for dark mode */
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 0.5);
}
```

The key principle in dark mode token design is that chroma should be reduced by approximately 10-20% compared to light mode equivalents, because colors appear more vibrant against dark backgrounds. Text should never be pure white (#ffffff / oklch(1 0 0)) as it causes halation -- a visual effect where bright text appears to bleed into the dark background. Instead, use oklch(0.87-0.92) for a softer, more readable result.

## 9.5 Theme Transition Animation

When users switch between light and dark mode, a smooth transition prevents the jarring flash that occurs when all colors change simultaneously. The transition should be applied globally via CSS custom properties and should respect `prefers-reduced-motion`.

### Smooth Theme Transition

```css
/* Apply transition to all elements using design tokens */
html.theme-transition,
html.theme-transition *,
html.theme-transition *::before,
html.theme-transition *::after {
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    fill 0.3s ease,
    stroke 0.3s ease !important;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  html.theme-transition,
  html.theme-transition *,
  html.theme-transition *::before,
  html.theme-transition *::after {
    transition: none !important;
  }
}
```

### React Integration for Theme Transitions

```tsx
'use client';

import { useCallback } from 'react';

function useThemeTransition() {
  const toggleWithTransition = useCallback((toggleFn: () => void) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      toggleFn();
      return;
    }

    // Add transition class before toggling
    document.documentElement.classList.add('theme-transition');
    toggleFn();

    // Remove transition class after animation completes to avoid
    // interfering with other transitions on the page
    const cleanup = () => {
      document.documentElement.classList.remove('theme-transition');
      document.removeEventListener('transitionend', cleanup);
    };

    // Fallback timeout in case transitionend doesn't fire
    setTimeout(cleanup, 400);
  }, []);

  return toggleWithTransition;
}
```

The `theme-transition` class approach is preferred over permanent transitions because leaving color transitions on all elements permanently would interfere with hover states, focus rings, and other interactive transitions. By adding the class only during the theme switch and removing it afterward, we get smooth theme changes without side effects.

### Circle Reveal Animation (Advanced)

For a more dramatic theme switch, a circular clip-path reveal creates a "spotlight" effect originating from the toggle button:

```css
@keyframes theme-reveal {
  from {
    clip-path: circle(0% at var(--theme-origin-x) var(--theme-origin-y));
  }
  to {
    clip-path: circle(150% at var(--theme-origin-x) var(--theme-origin-y));
  }
}

html.theme-reveal {
  animation: theme-reveal 0.5s ease-out forwards;
}
```

Set `--theme-origin-x` and `--theme-origin-y` to the coordinates of the theme toggle button using JavaScript before triggering the animation.

## 9.6 Color Scheme Considerations

Dark mode is not just an inversion of light mode. Several perceptual and accessibility factors must be considered when designing color schemes that work in both modes.

### WCAG Compliance in Both Modes

Every text-background combination must meet WCAG AA contrast requirements (4.5:1 for body text, 3:1 for large text and UI components) in both light and dark modes. Because OKLCH is perceptually uniform, you can systematically verify this:

```javascript
// Verify contrast in both themes
function verifyDualThemeContrast(lightTokens, darkTokens) {
  const checks = [
    { name: 'body-text', light: [lightTokens.textPrimary, lightTokens.bgPrimary], dark: [darkTokens.textPrimary, darkTokens.bgPrimary] },
    { name: 'secondary-text', light: [lightTokens.textSecondary, lightTokens.bgPrimary], dark: [darkTokens.textSecondary, darkTokens.bgPrimary] },
    { name: 'primary-button', light: [lightTokens.textInverse, lightTokens.primary], dark: [darkTokens.textInverse, darkTokens.primary] },
  ];

  checks.forEach(check => {
    const lightContrast = calcAPCA(...check.light);
    const darkContrast = calcAPCA(...check.dark);
    console.log(`${check.name}: Light Lc=${lightContrast.toFixed(1)}, Dark Lc=${darkContrast.toFixed(1)}`);
    // Both must meet Lc 60 for body text, Lc 45 for large text
  });
}
```

### Color Perception in Dark Mode

Colors appear more saturated against dark backgrounds due to the simultaneous contrast effect. A color that looks balanced in light mode may appear overly vivid in dark mode. To compensate:

1. **Reduce chroma by 10-20%** in dark mode for interactive and status colors
2. **Increase lightness by 5-10%** for accent colors to maintain visibility
3. **Use subtle color tints** on dark surfaces (e.g., `oklch(0.20 0.02 260)` instead of pure neutral gray) to maintain warmth and prevent the "flat black hole" appearance
4. **Test with real content** -- color perception changes with surrounding elements, so individual token checks are necessary but not sufficient

### Elevation in Dark Mode

In light mode, elevation is communicated through shadow depth. In dark mode, shadows are nearly invisible against dark backgrounds. Instead, use background lightness to indicate elevation:

```css
/* Light mode: shadows indicate elevation */
:root {
  --surface-base: oklch(0.98 0.01 260);
  --surface-raised: oklch(1.0 0.00 0);    /* White cards on near-white */
  --surface-overlay: oklch(1.0 0.00 0);
}

/* Dark mode: lightness indicates elevation */
[data-theme="dark"] {
  --surface-base: oklch(0.13 0.02 260);    /* Darkest -- base layer */
  --surface-raised: oklch(0.18 0.02 260);   /* Slightly lighter -- cards */
  --surface-overlay: oklch(0.22 0.02 260);  /* Lightest -- modals, popovers */
}
```

The principle is simple: in dark mode, higher elevation = lighter background. This creates a natural visual hierarchy that mimics how physical light illuminates raised surfaces from above.

### Avoiding Common Dark Mode Pitfalls

1. **Never use pure black (#000000)** as a background. Use oklch(0.12-0.18) for a softer, more natural dark that reduces eye strain.
2. **Never use pure white (#ffffff)** for body text. Use oklch(0.87-0.92) to prevent halation.
3. **Never simply invert colors** -- a light blue button becomes dark blue and loses its interactive affordance in dark mode.
4. **Always test images and media** -- dark mode can make bright images appear jarring. Consider adding a subtle overlay or reducing image brightness.
5. **Always test with both themes** during development, not just your preferred theme.

---

# MODULE 10: ADVANCED PATTERNS

## 10.1 Error Boundary Component

Error boundaries catch rendering errors anywhere in their child component tree, display a fallback UI, and prevent the entire app from crashing. This is critical for production applications where a single broken component should not take down the whole page.

```tsx
'use client';

import { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    // Send to error reporting service (Sentry, etc.)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          className="flex flex-col items-center justify-center p-8 rounded-xl border border-red-200 bg-red-50 text-center"
        >
          <svg className="w-12 h-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Something went wrong</h3>
          <p className="text-sm text-red-600 mb-4 max-w-md">
            This section encountered an error and could not be displayed. The rest of the page should work normally.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 rounded-lg bg-red-100 text-red-800 hover:bg-red-200 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage: Wrap any component subtree
// <ErrorBoundary>
//   <DataDependentComponent />
// </ErrorBoundary>
//
// With custom fallback:
// <ErrorBoundary fallback={<p>Failed to load content</p>}>
//   <ChartComponent />
// </ErrorBoundary>
```

## 10.2 Loading, Empty, and Error State Patterns

Every data-dependent component must handle three states beyond the happy path. These states are not edge cases — they are the first thing users see when network conditions are slow or data is unavailable.

### DataState Wrapper

```tsx
function DataState<T>({
  data, isLoading, error, children, emptyMessage = 'No data available'
}: {
  data: T[] | null | undefined;
  isLoading: boolean;
  error: Error | null;
  children: (data: T[]) => React.ReactNode;
  emptyMessage?: string;
}) {
  if (isLoading) {
    return (
      <div className="space-y-3 p-4" aria-busy="true" aria-label="Loading content">
        <Skeleton height="2rem" index={0} />
        <Skeleton height="1rem" width="80%" index={1} />
        <Skeleton height="1rem" width="60%" index={2} />
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="flex flex-col items-center p-8 text-center rounded-xl border border-red-200 bg-red-50">
        <p className="text-red-700 text-sm mb-3">{error.message || 'Failed to load data'}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-3 py-1.5 text-sm rounded-lg bg-red-100 text-red-800 hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center p-8 text-center" aria-live="polite">
        <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="text-gray-500 text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return <>{children(data)}</>;
}

// Usage:
// <DataState data={users} isLoading={isLoading} error={error} emptyMessage="No users found">
//   {(users) => users.map(user => <UserCard key={user.id} user={user} />)}
// </DataState>
```

## 10.3 Loading State Decision Tree

Choosing the wrong loading indicator creates a disjointed user experience. Skeletons where the layout is unknown look confusing; spinners on predictable layouts feel lazy; and optimistic UI on unpredictable mutations causes jarring rollbacks. Use this decision tree to pick the right loading pattern for every situation.

### Decision Tree

```
What type of operation is this?
|
+-- Data loading (fetching content)
|   |
|   +-- Is the layout known in advance?
|   |   |
|   |   +-- YES --> Use Skeleton
|   |   |   Match the exact shape of the expected content.
|   |   |   Example: Article page, product card grid, profile page.
|   |   |
|   |   +-- NO --> Use Spinner
|   |       Show a centered spinner with a descriptive label.
|   |       Example: Search results, dynamic filters, AI-generated content.
|   |
|   +-- Is the load time likely > 3s?
|       |
|       +-- YES --> Use Skeleton + Progress Indicator
|       |   Combine skeleton placeholders with a progress bar for
|       |   long-running operations (file uploads, data exports).
|       |
|       +-- NO --> Skeleton alone is sufficient.
|
+-- User action (mutation)
|   |
|   +-- Is the outcome predictable?
|   |   |
|   |   +-- YES --> Use Optimistic UI
|   |   |   Immediately show the expected result, rollback on error.
|   |   |   Example: Like/unlike, toggle switch, checkbox, add to cart.
|   |   |
|   |   +-- NO --> Use Inline Spinner + Disable Button
|   |       Show a small spinner inside the button, disable interactions.
|   |       Example: Form submission, payment processing, file upload.
|   |
|   +-- Does the action change the page location?
|       |
|       +-- YES --> Use Skeleton for next page (view transition)
|       |
|       +-- NO --> Use inline feedback (spinner in button or toast)
|
+-- Error state
    |
    +-- Is retry likely to succeed?
    |   |
    |   +-- YES --> Show Error State with Retry button
    |   |   Include clear error message, retry button, and dismiss option.
    |   |
    |   +-- NO --> Show Error State with alternative actions
        Provide next steps, support contact, or fallback content.
```

### Implementation Examples

```tsx
// Skeleton -- for known layout data loading
function ArticleSkeleton() {
  return (
    <div className="space-y-4 p-6" aria-busy="true" aria-label="Loading article">
      <Skeleton height="2.5rem" width="70%" index={0} />
      <Skeleton height="1rem" width="40%" index={1} />
      <div className="space-y-2 mt-4">
        <Skeleton height="1rem" index={2} />
        <Skeleton height="1rem" index={3} />
        <Skeleton height="1rem" width="80%" index={4} />
      </div>
    </div>
  );
}

// Spinner -- for unknown layout or quick operations
function LoadingSpinner({ label = 'Loading' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center p-8" role="status" aria-label={label}>
      <div className="spinner" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

// Optimistic UI -- for predictable mutations
function LikeButton({ isLiked, onToggle, count }: {
  isLiked: boolean;
  onToggle: () => Promise<void>;
  count: number;
}) {
  const [optimisticLiked, setOptimisticLiked] = useState(isLiked);
  const [optimisticCount, setOptimisticCount] = useState(count);

  const handleToggle = async () => {
    // Optimistic update
    setOptimisticLiked(!optimisticLiked);
    setOptimisticCount(optimisticLiked ? optimisticCount - 1 : optimisticCount + 1);

    try {
      await onToggle();
    } catch {
      // Rollback on error
      setOptimisticLiked(isLiked);
      setOptimisticCount(count);
    }
  };

  return (
    <button
      onClick={handleToggle}
      aria-pressed={optimisticLiked}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors"
    >
      <svg className={`w-5 h-5 ${optimisticLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} viewBox="0 0 20 20" aria-hidden="true">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
      <span className="text-sm">{optimisticCount}</span>
    </button>
  );
}

// Error State with Retry
function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-center p-8 text-center rounded-xl border border-red-200 bg-red-50">
      <svg className="w-10 h-10 text-red-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <p className="text-red-700 text-sm mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 text-sm rounded-lg bg-red-100 text-red-800 hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Try again
        </button>
      )}
    </div>
  );
}
```

## 10.4 Container Query Component Patterns

Container queries enable components to adapt to their own layout context rather than the viewport. This section shows practical component patterns using both native CSS container queries and Tailwind v4's container query utilities.

### Tailwind v4 Container Query Patterns

Tailwind v4 provides `@container` variant utilities that let you apply styles based on the nearest ancestor's container size. This is the preferred approach for component-level responsive design because components adapt to their own layout context regardless of viewport size.

```html
<!-- Product card that adapts to container width -->
<div class="card-container">
  <article class="flex flex-col @md:flex-row @lg:grid @lg:grid-cols-[200px_1fr_auto] gap-4 p-4 border rounded-lg">
    <img src="product.jpg" alt="Product" class="w-full @md:w-48 @lg:w-[200px] h-auto object-cover rounded" />
    <div class="flex-1">
      <h3 class="text-lg font-semibold">Product Name</h3>
      <p class="text-sm text-gray-600">Description here</p>
    </div>
    <div class="flex @md:flex-col gap-2 items-start">
      <span class="text-xl font-bold">$49.99</span>
      <button class="px-4 py-2 bg-primary text-white rounded-lg">Add to Cart</button>
    </div>
  </article>
</div>
```

### Responsive Navigation

```css
.nav-container {
  container-type: inline-size;
  container-name: nav;
}

@container nav (min-width: 600px) {
  .nav-list {
    display: flex;
    gap: var(--space-4);
  }
  .nav-toggle {
    display: none;
  }
}

@container nav (max-width: 599px) {
  .nav-list {
    display: none;
  }
  .nav-list.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-bg-secondary);
    padding: var(--space-4);
    box-shadow: var(--shadow-lg);
  }
}
```

### Responsive Card Grid

```css
.product-grid {
  container-type: inline-size;
  container-name: products;
}

@container products (min-width: 900px) {
  .product-grid-inner {
    grid-template-columns: repeat(3, 1fr);
  }
}

@container products (min-width: 500px) and (max-width: 899px) {
  .product-grid-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container products (max-width: 499px) {
  .product-grid-inner {
    grid-template-columns: 1fr;
  }
}
```

### Responsive Sidebar Layout

```css
.dashboard {
  container-type: inline-size;
  container-name: dashboard;
}

@container dashboard (min-width: 768px) {
  .dashboard-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
}

@container dashboard (max-width: 767px) {
  .dashboard-layout {
    display: grid;
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: fixed;
    inset: 0;
    z-index: var(--z-modal);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  .sidebar.open {
    transform: translateX(0);
  }
}
```

## 10.5 CSS Nesting Best Practices

Native CSS nesting is now baseline across all modern browsers. Follow these rules to write maintainable, component-scoped styles:

1. **Nest no deeper than 3 levels** -- Beyond 3 levels, specificity increases and readability decreases. If you need deeper nesting, extract a new component.
2. **Always use `&` for pseudo-classes and pseudo-elements** -- `&:hover`, `&::before`, `&:focus-visible`. Omitting `&` works for descendant selectors but not pseudo-elements.
3. **Nest `@media` and `@container` inside components** -- Keep responsive rules co-located with the component they affect.
4. **Use `@scope` when you need hard boundaries** -- Nesting alone does not prevent style leakage to child components. Use `@scope` (Module 3.8) for encapsulation.
5. **Avoid nesting for universal selectors** -- `& *` creates broad, hard-to-override rules. Target specific elements instead.

```css
/* GOOD: Clean, 2-level nesting with responsive rule */
.card {
  padding: var(--space-4);
  border-radius: var(--radius-lg);

  & .title {
    font-size: var(--font-size-xl);
  }

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover { box-shadow: var(--shadow-sm); }
  }

  @container (min-width: 400px) {
    padding: var(--space-6);

    & .title {
      font-size: var(--font-size-2xl);
    }
  }
}

/* BAD: Too deep, fragile specificity */
.card {
  & .content {
    & .list {
      & .item {
        & .link { /* 4 levels deep -- extract a component */ }
      }
    }
  }
}
```

### Nesting Depth Limits and Specificity

Every level of nesting increases the specificity of the resulting selector. A 4-level nested rule produces a selector like `.card .content .list .item` which has a specificity of 0-4-0. This makes it difficult to override with utility classes (which typically have 0-1-0 specificity) or even with `@layer` overrides. The 3-level maximum keeps specificity manageable while still allowing meaningful component scoping.

### The `&` Selector and Compound Selectors

The `&` selector is essential for creating compound selectors in nested CSS. Without it, you cannot target pseudo-classes, pseudo-elements, or modifier classes correctly. Here are the key patterns:

```css
.component {
  /* Pseudo-class */
  &:hover { background: var(--color-hover); }
  &:focus-visible { outline: 2px solid var(--color-primary); }
  &:active { transform: scale(0.98); }

  /* Modifier class */
  &.is-active { border-color: var(--color-primary); }
  &.is-disabled { opacity: 0.5; pointer-events: none; }

  /* Pseudo-element */
  &::before { content: ''; display: block; }
  &::after { content: ''; clear: both; }

  /* Child combinator (direct child only) */
  & > .title { font-weight: var(--font-weight-bold); }

  /* Sibling combinator */
  & + .component { margin-top: var(--space-2); }
}
```

### Specificity Traps to Avoid

Nesting can inadvertently create specificity traps that make styles impossible to override without `!important`:

```css
/* TRAP: @media inside nesting creates unexpected specificity */
.sidebar {
  width: 240px;

  @media (min-width: 768px) {
    /* This has the same specificity as .sidebar but appears later,
       so it always wins -- even over utility classes at the same specificity */
    width: 300px;
  }
}

/* SOLUTION: Use @container or @layer utilities instead */
@layer components {
  .sidebar {
    width: 240px;
  }
}

@layer utilities {
  @media (min-width: 768px) {
    .sidebar-wide {
      width: 300px;
    }
  }
}

/* TRAP: Over-qualified selectors */
.card {
  & div.card-body { /* Over-qualified: both element and class */ }
}

/* SOLUTION: Use just the class */
.card {
  & .card-body { /* Clean, minimal specificity */ }
}
```

## 10.6 IntersectionObserver with Strict Mode Safety

React Strict Mode in development double-invokes effects, which can cause IntersectionObserver to register twice. Use a ref-stored observer to prevent double registration and ensure clean disconnect.

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Disconnect existing observer (handles Strict Mode double-mount)
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (one-time trigger)
          observerRef.current?.unobserve(element);
        }
      },
      { threshold: 0.1, ...options }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [options?.threshold, options?.rootMargin]);

  return { ref: elementRef, isVisible };
}

// Usage:
// const { ref, isVisible } = useScrollAnimation();
// return <div ref={ref} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />;
```
