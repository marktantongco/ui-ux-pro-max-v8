---
name: ui-ux-pro-max
description: >
  DEPRECATED — Use the v8.0 split skills instead. This skill has been superseded by
  three specialized skills: ui-ux-pro-max-v8-infra (Part A: Design & Style Infrastructure),
  ui-ux-pro-max-v8-components (Part B: Build & Code Components), and
  ui-ux-pro-max-v8-data (Part C: Data Lookup Engine). The skill router will
  automatically direct your query to the correct v8 part.
version: "8.0.0"
---

# UI/UX Pro Max — DEPRECATED

> **This skill has been superseded by UI/UX PRO MAX v8.0** — a three-part architecture
> that provides better query performance and more targeted results.

## Migration Guide

| Old Path (v7) | New Path (v8) | Purpose |
|----------------|---------------|---------|
| `skills/ui-ux-pro-max/` | `skills/ui-ux-pro-max-v8-infra/` | Design tokens, CSS primitives, theming, OKLCH, dark mode |
| `skills/ui-ux-pro-max/` | `skills/ui-ux-pro-max-v8-components/` | React components, a11y, motion, validation, anti-patterns |
| `skills/ui-ux-pro-max/scripts/` | `skills/ui-ux-pro-max-v8-data/scripts/` | Data lookups (palettes, fonts, styles, UX rules) |
| `skills/ui-ux-pro-max/assets/data/` | `skills/ui-ux-pro-max-v8-data/data/` | CSV data files (1,321 records across 24 files) |

## Routing

The skill router (`skills/skill-router/SKILL.md`) will automatically direct your query:

- **Design tokens, colors, CSS, theming** → `ui-ux-pro-max-v8-infra`
- **React components, a11y, motion, validation** → `ui-ux-pro-max-v8-components`
- **Data lookups (palette for industry, font pairing)** → `ui-ux-pro-max-v8-data`

## What Changed in v8.0

- **OKLCH color space** with hex fallback progressive enhancement
- **Tailwind v4 `@theme` integration** (no more `tailwind.config.js`)
- **React 19 patterns** (no forwardRef, ref as regular prop, useId fixes)
- **24 GSAP motion presets** (CSS-first + GSAP-enhanced)
- **42-check validation & audit system** (WCAG 2.2)
- **34-item anti-pattern detection** with copy-paste fixes
- **22+ accessible components** with full keyboard navigation and dark mode
- **Dark mode token architecture** with complete light/dark mapping
- **49% weighted token reduction** through selective skill loading
