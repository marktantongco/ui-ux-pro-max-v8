---
name: ui-ux-pro-max-infra
description: >
  UI/UX Pro Max v8.0 — Design System Infrastructure. Use this file when the query is about
  design tokens, color palettes, CSS primitives, theming, typography, spacing, or embedded data
  tables (styles, palettes, fonts, industry rules). Contains Module 0 (Meta & Principles),
  Module 2 (Design Token Schema), Module 3 (Modern CSS Primitives), Module 7 (Embedded Data Tables),
  and Module 9 (Theme System). For component implementations, motion presets, validation, and
  advanced patterns, see PART-B-COMPONENTS.md.
version: "8.0.0"
---

# UI/UX Pro Max v8.0 — Part A: Infrastructure

> **Design System Foundation** — Tokens, palettes, CSS primitives, data tables, and theming.
> Pair with Part B for component implementations and patterns.

## Cross-Reference: Part B Dependencies

This file provides the design system foundation. For component implementations that consume these tokens, see PART-B-COMPONENTS.md.
- Module 2 tokens → consumed by Part B Module 4 components
- Module 3 CSS primitives → used in Part B Module 4 component styles
- Module 7 data tables → queried by Part B Module 1 MATCH step
- Module 9 theme system → applied by Part B Module 4 dark: variants

---

# MODULE 0: META & PRINCIPLES

## 0.1 Skill Scope

| Dimension | Count | Detail |
|-----------|-------|--------|
| UI Styles | 60 | Categorized: General (42), Landing (8), Dashboard (10) — curated down from 67 redundant entries |
| Color Palettes | 48 | Dual notation: OKLCH + Hex for every token |
| Font Pairings | 36 | All verified Google Fonts URLs; self-hosted fonts flagged |
| Industry Rules | 21 | Reasoning rules with decision-tree JSON |
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

# MODULE 2: DESIGN TOKEN SCHEMA

## 2.1 OKLCH Color Space

All color tokens use hex-first declaration with OKLCH progressive enhancement via `@supports`. This ensures that browsers that do not understand OKLCH get a valid hex fallback, while browsers that support OKLCH get the perceptually uniform color.

```css
/* Hex fallbacks declared first — every browser understands these */
:root {
  --color-primary: #2563eb;
  --color-success: #16a34a;
  --color-warning: #ca8a04;
  --color-error: #dc2626;
  --color-info: #0891b2;
}

/* Progressive enhancement: browsers that support OKLCH override with perceptually uniform values */
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

> **Note:** The previous version declared OKLCH in `:root` and then duplicated it in `@supports`, making the `@supports` block a no-op. This version uses hex-first with OKLCH override, which is the correct progressive enhancement pattern. Orphan `--color-*-fallback` properties have been removed — the fallback is now the default value.

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

### Token Mapping: CSS Custom Properties ↔ Tailwind @theme

The design system uses two parallel naming conventions. CSS custom properties (`--space-*`, `--color-*`, `--radius-*`) are used in vanilla CSS and `var()` references. Tailwind v4's `@theme` directive uses a different namespace (`--spacing-*`, `--color-*`, `--radius-*`) that generates utility classes. This table maps between them:

| CSS Custom Property | Tailwind @theme Property | Utility Class Generated |
|---------------------|--------------------------|------------------------|
| `--space-1` (0.25rem) | `--spacing-1` | `p-1`, `m-1`, `gap-1` |
| `--space-2` (0.5rem) | `--spacing-2` | `p-2`, `m-2`, `gap-2` |
| `--space-4` (1rem) | `--spacing-4` | `p-4`, `m-4`, `gap-4` |
| `--space-6` (1.5rem) | `--spacing-6` | `p-6`, `m-6`, `gap-6` |
| `--space-8` (2rem) | `--spacing-8` | `p-8`, `m-8`, `gap-8` |
| `--color-primary` | `--color-primary` | `bg-primary`, `text-primary` |
| `--color-success` | `--color-success` | `bg-success`, `text-success` |
| `--radius-sm` (0.25rem) | `--radius-sm` | `rounded-sm` |
| `--radius-md` (0.5rem) | `--radius-md` | `rounded-md` |
| `--radius-lg` (0.75rem) | `--radius-lg` | `rounded-lg` |

> **Important:** When using both systems in the same project, define tokens in `:root` for CSS and mirror them in `@theme` for Tailwind utilities. The `@theme` values take precedence for Tailwind utility classes, while `:root` values are used when referencing `var(--space-*)` directly in custom CSS.

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
// APCA contrast check — pseudo-code showing the algorithm
// For production use, install the official apca-w3 package:
//   npm install apca-w3
// The library exports: calcAPCA(textColor, bgColor), reverseAPCA(lc, bgColor, direction)

// Pseudo-code example:
const textRgb = [55, 65, 81];    // #374151
const bgRgb = [255, 255, 255];   // #ffffff

const contrastLc = calcAPCA(textRgb, bgRgb);
// Returns Lc value like 63.5 — compare against thresholds above

// Reverse lookup: find minimum foreground color for Lc 60 on white background
// direction: 'fg' to find foreground, 'bg' to find background
const minForeground = reverseAPCA(60, bgRgb, 'fg');
```

> **Note:** The `reverseAPCA` function signature is `reverseAPCA(targetLc, baseColor, direction)` where `direction` is `'fg'` (find foreground) or `'bg'` (find background). The previous version showed `reverseAPCA(60, bgRgb, 'fg')` which is correct; the import of `sRGBtoY` is an internal function not needed in consumer code.

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

Animate elements entering the DOM — previously impossible with CSS alone. `@starting-style` defines the initial state before the element transitions to its final state. For a complete animation, define BOTH the entry animation (via `@starting-style` on the open/visible state) and the exit animation (via transitions on the closed/hidden state).

```css
/* Entry animation: dialog opening */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out,
    overlay 0.3s allow-discrete, display 0.3s allow-discrete;

  @starting-style {
    /* This is the "from" state when dialog transitions to [open] */
    opacity: 0;
    transform: scaleY(0.9);
  }
}

/* Exit animation: dialog closing */
dialog {
  opacity: 0;
  transform: scaleY(0.9);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in,
    overlay 0.2s allow-discrete, display 0.2s allow-discrete;
}
```

> **Note:** The exit animation requires `display: 0.2s allow-discrete` and `overlay: 0.2s allow-discrete` to allow CSS to animate properties before the element is removed from the DOM. Without these, the dialog disappears instantly on close.

### Non-dialog Example

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

**Avoid `@media` nesting that creates source-order override concerns.** Nesting a `@media` rule inside a component does NOT increase specificity — `@media` is a conditional rule, not a specificity modifier. However, nested `@media` rules can create source-order override concerns where later rules in the same specificity tier always win, making them hard to override with utility classes at the same specificity. Instead, use `@container` queries or place media query overrides in a separate `@layer utilities` block.

> **Correction:** A previous version of this skill incorrectly stated that `@media` nesting "increases specificity." This is factually wrong. `@media` is a conditional rule that applies based on a condition, not a specificity modifier. The real concern is source-order precedence — when nested `@media` rules appear later in source order than the base rule, they always win at the same specificity level, which can make overrides difficult.

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

/* BAD: @media nesting that creates source-order override concerns */
.sidebar {
  width: 240px;
  @media (min-width: 768px) {
    width: 300px; /* Same specificity as base, but source-order wins — hard to override */
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

> **Aspirational Notice:** As of early 2026, `contrast-color()` is in the Interop 2026 focus but not yet baseline. The `max` keyword shown in some examples below is not part of any shipping specification and is aspirational. The current working syntax only accepts a single color argument.

```css
/* Automatic text color based on background */
.button-primary {
  background: var(--color-primary);
  color: contrast-color(var(--color-primary));
}

/* Dynamic palette — text adapts to any background */
.swatch {
  background: var(--swatch-color);
  color: contrast-color(var(--swatch-color));
}
```

### Fallback for Unsupported Browsers

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

## 3.11 Additional Modern CSS Features (2026)

### text-wrap: balance

Distribute text evenly across lines for headings and short blocks of text:

```css
h1, h2, h3 {
  text-wrap: balance;
}

/* For limited-width containers */
.card-title {
  text-wrap: balance;
  max-width: 30ch;
}
```

### Popover API

Native browser popovers without JavaScript positioning:

```html
<button popovertarget="menu">Open Menu</button>
<div id="menu" popover="auto">
  <ul>
    <li>Option 1</li>
    <li>Option 2</li>
  </ul>
</div>
```

```css
[popover] {
  /* Popover is hidden by default, shown when triggered */
  margin: auto;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-border);

  /* Animate with @starting-style */
  transition: opacity 0.2s, transform 0.2s,
    overlay 0.2s allow-discrete, display 0.2s allow-discrete;

  @starting-style {
    opacity: 0;
    transform: scale(0.95);
  }
}
```

### interpolate-size

Animate between `auto` and explicit sizes (replaces the grid-template-rows hack for height animations):

```css
.accordion-content {
  interpolate-size: allow-keywords;
  overflow: hidden;
  height: 0;
  transition: height 0.3s ease-out;
}

.accordion-content.open {
  height: auto;
}
```

### Scroll-Driven Animations

Animate elements based on scroll position without JavaScript:

```css
.parallax-element {
  animation: parallax linear both;
  animation-timeline: scroll();
  animation-range: entry 0% cover 30%;
}

@keyframes parallax {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* View Timeline: animate based on element's visibility in viewport */
.reveal-card {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
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
| 15 | Bricolage Grotesque | Inter | Display, personality | Creative agencies, portfolios | fonts.google.com/specimen/Bricolage+Grotesque |
| 16 | Onest | Inter | Geometric, international | Multi-language, global SaaS | fonts.google.com/specimen/Onest |

> **Note:** Entries 15 (JetBrains Sans) and 16 (Geist) from the original listing have been moved to the self-hosted section below, as they are not available on Google Fonts.

### Serif + Sans Pairs (12)

| # | Heading | Body | Mood | Best For | Google Fonts URL |
|---|---------|------|------|----------|-----------------|
| 1 | Playfair Display | Source Sans 3 | Elegant, editorial | Luxury, fashion, editorial | fonts.google.com/specimen/Playfair+Display |
| 2 | Cormorant Garamond | Montserrat | Refined, classical | Luxury, wellness, editorial | fonts.google.com/specimen/Cormorant+Garamond |
| 3 | Lora | Inter | Literary, warm | Blogs, reading apps, publishing | fonts.google.com/specimen/Lora |
| 4 | DM Serif Display | DM Sans | Bold, contemporary | Fashion, architecture | fonts.google.com/specimen/DM_Serif_Display |
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

> **Note:** Geist Mono pairing has been moved to self-hosted section (Geist is not on Google Fonts).

### Self-Hosted Fonts (NOT on Google Fonts — Require Self-Hosting)

The following fonts are commonly recommended but are **NOT available on Google Fonts**. If you reference them, you must self-host the font files:

| Font | Type | Google Fonts Alternative | Source |
|------|------|------------------------|--------|
| Geist | Sans-serif | Inter or Manrope | npm: fontsource/geist |
| Geist Mono | Monospace | JetBrains Mono | npm: fontsource/geist |
| JetBrains Mono pairing | Monospace + Sans | Use JetBrains Mono (Google Fonts) + Inter | fonts.google.com/specimen/JetBrains+Mono |
| Clash Display | Sans-serif display | Plus Jakarta Sans or Bricolage Grotesque | Self-host |
| Cabinet Grotesk | Sans-serif | Manrope or Sora | Self-host |
| Satoshi | Sans-serif | Plus Jakarta Sans or Figtree | Self-host |
| Canela | Serif display | Fraunces or DM Serif Display | Self-host |
| General Sans | Sans-serif | Inter or Manrope | Self-host |
| Cera Pro | Sans-serif | Montserrat or Red Hat Display | Self-host |
| Neufile Grotesk | Sans-serif | Archivo or Albert Sans | Self-host |
| Macklin | Sans-serif display | Bricolage Grotesque | Self-host |
| Obviously | Sans-serif | Space Grotesk | Self-host |
| Sharp Sans | Sans-serif | Lexend or Sora | Self-host |
| Fakt | Sans-serif | Manrope | Self-host |
| Aeonik | Sans-serif | Inter or Geist | Self-host |
| GT America | Sans-serif | Archivo | Self-host |
| CoFo Sans | Sans-serif | Onest | Self-host |

## 7.4 Industry Rules (21)

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

## Output Standards

- Default to ASCII-only tokens/variables unless the project already uses Unicode
- Include: spacing scale, type scale, 2-3 font pair options, color tokens (OKLCH + hex), component states
- Always cover: empty/loading/error, keyboard navigation, focus states, contrast
- Run anti-pattern checklist (Module 1.2 in Part B) before delivery
- Run pre-delivery checklist (Module 6.1 in Part B) before delivery
- Cross-reference other skills when the task exceeds this skill's scope

---

# MODULE 9: THEME SYSTEM

## 9.1 Dark Mode Implementation

Dark mode must be more than inverting colors. A proper dark theme reduces eye strain, maintains contrast, and preserves the visual hierarchy established in the light theme. Never simply swap white for black — adjust chroma, lightness, and shadow depth for the dark environment.

### CSS Custom Properties Strategy (Framework-Agnostic)

```css
/* Declare color-scheme for browser chrome theming */
:root {
  color-scheme: light dark;
}

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

  /* Unified dark mode elevation (lighter = higher) */
  --elevation-base: oklch(0.13 0.02 260);
  --elevation-raised: oklch(0.18 0.02 260);
  --elevation-overlay: oklch(0.22 0.02 260);
}

/* Dark theme */
[data-theme="dark"] {
  color-scheme: dark;
  --color-bg-primary: oklch(0.15 0.02 260);
  --color-bg-secondary: oklch(0.18 0.02 260);
  --color-bg-tertiary: oklch(0.22 0.02 260);
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

  /* Unified dark mode elevation (lighter = higher) */
  --elevation-base: oklch(0.13 0.02 260);
  --elevation-raised: oklch(0.18 0.02 260);
  --elevation-overlay: oklch(0.22 0.02 260);
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
    --color-bg-secondary: oklch(0.18 0.02 260);
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
  // Read initial theme from data-theme attribute to prevent SSR hydration mismatch
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    // Read from data-theme attribute set by FOUC prevention script
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark' || currentTheme === 'light') return currentTheme;
    return 'system';
  });
  const [resolved, setResolved] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    return currentTheme === 'dark' ? 'dark' : 'light';
  });

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

> **SSR Fix:** The previous version initialized state with `'system'` and `'light'`, causing a hydration mismatch when the FOUC prevention script had already set `data-theme="dark"`. This version reads the `data-theme` attribute and `localStorage` during initialization to ensure server and client states match.

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

In Tailwind v4, dark mode works differently from v3. Instead of configuring `darkMode: 'class'` in a config file, you use the `@custom-variant` directive:

```css
@import "tailwindcss";

/* Enable class-based dark mode (default is media query) */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

> **Note:** The correct Tailwind v4 directive is `@custom-variant`, not `@variant`. The `@variant` directive was renamed to `@custom-variant` in the stable release.

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

  /* Unified elevation — lighter = higher */
  --elevation-base: oklch(0.13 0.02 260);
  --elevation-raised: oklch(0.18 0.02 260);
  --elevation-overlay: oklch(0.22 0.02 260);
}

/* Dark theme -- complete token override */
.dark,
[data-theme="dark"] {
  /* Backgrounds — low lightness, slight cool tint */
  --color-bg-primary: oklch(0.15 0.02 260);
  --color-bg-secondary: oklch(0.18 0.02 260);
  --color-bg-tertiary: oklch(0.22 0.02 260);
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

  /* Unified elevation — lighter = higher (consistent with light mode) */
  --elevation-base: oklch(0.13 0.02 260);
  --elevation-raised: oklch(0.18 0.02 260);
  --elevation-overlay: oklch(0.22 0.02 260);
}
```

The key principle in dark mode token design is that chroma should be reduced by approximately 10-20% compared to light mode equivalents, because colors appear more vibrant against dark backgrounds. Text should never be pure white (#ffffff / oklch(1 0 0)) as it causes halation -- a visual effect where bright text appears to bleed into the dark background. Instead, use oklch(0.87-0.92) for a softer, more readable result.

> **Unification Note:** Elevation values are now consistent across all dark mode declarations. Previously, Module 9.1 and Module 9.4 used different values (0.15/0.20/0.25 vs 0.13/0.18/0.22). This version uses the unified set 0.13/0.18/0.22 everywhere, which provides better contrast against the dark background.

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
      document.documentElement.removeEventListener('transitionend', cleanup);
    };

    // Listen on documentElement (not document) for transitionend
    document.documentElement.addEventListener('transitionend', cleanup);

    // Fallback timeout in case transitionend doesn't fire
    setTimeout(cleanup, 400);
  }, []);

  return toggleWithTransition;
}
```

> **Fix:** The previous version used `document.addEventListener('transitionend', cleanup)` which would not catch the transition on `documentElement`. This version correctly uses `document.documentElement.addEventListener('transitionend', cleanup)`.

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

## 9.7 Dark Mode Patterns for Common Elements

Beyond color tokens, several common UI elements require specific dark mode handling:

### Images in Dark Mode

```css
[data-theme="dark"] img:not([data-no-dark]) {
  /* Reduce brightness slightly to prevent jarring bright images */
  filter: brightness(0.9);
}

/* Photos should be slightly dimmed, but logos and icons should not */
[data-theme="dark"] img[data-dark-dim] {
  filter: brightness(0.85);
}
```

### Code Blocks in Dark Mode

```css
/* Code blocks already look good in dark — enhance contrast */
[data-theme="dark"] pre,
[data-theme="dark"] code {
  background: oklch(0.12 0.02 260);
  color: oklch(0.85 0.02 260);
  border-color: oklch(0.25 0.02 260);
}

/* Syntax highlighting colors need adjustment */
[data-theme="dark"] .token.keyword { color: oklch(0.75 0.18 290); }
[data-theme="dark"] .token.string { color: oklch(0.75 0.15 145); }
[data-theme="dark"] .token.comment { color: oklch(0.55 0.02 260); }
```

### Charts and Data Visualizations

```css
/* Charts need explicit dark mode color palettes */
[data-theme="dark"] .chart-grid-line {
  stroke: oklch(0.30 0.02 260);
}

[data-theme="dark"] .chart-text {
  fill: oklch(0.70 0.02 260);
}

/* Use slightly desaturated chart colors in dark mode */
[data-theme="dark"] .chart-series-1 { fill: oklch(0.65 0.15 260); }
[data-theme="dark"] .chart-series-2 { fill: oklch(0.65 0.15 145); }
[data-theme="dark"] .chart-series-3 { fill: oklch(0.70 0.12 85); }
```

### Tables in Dark Mode

```css
[data-theme="dark"] table {
  border-color: oklch(0.25 0.02 260);
}

[data-theme="dark"] thead {
  background: oklch(0.15 0.02 260);
}

[data-theme="dark"] tbody tr:nth-child(even) {
  background: oklch(0.16 0.02 260);
}

[data-theme="dark"] tbody tr:hover {
  background: oklch(0.20 0.02 260);
}
```
