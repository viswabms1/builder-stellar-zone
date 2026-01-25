Color scan notes

This file captures the search results and sources used to build `color grading.md`.

Sources scanned
- `client/global.css` (theme variables, gradients, utility styles)
- `tailwind.config.ts` (theme extensions, brand colors, gradient utilities)
- `client/components/**/*.tsx` (component-level styles and inline CSS)
- `client/pages/**/*.tsx` (page-level styles and inline CSS)
- `knowledge-base/dsu-knowledge-base.html` (static HTML styling)
- `public/placeholder.svg` (SVG fills/strokes)

Search patterns used
- Hex literals: `#[0-9a-fA-F]{3,8}\b`
- RGBA/HSL: `rgba?\(`, `hsla?\(`, `hsl\(`
- Tailwind gradient usage: `bg-gradient`, `from-*`, `via-*`, `to-*`
- Brand tokens: `brand-*`

Explicit color literals (deduped)
- Hex: `#1a1a1a`, `#2a2a2a`, `#333`, `#666`, `#999`, `#e5e5e5`, `#f97316`, `#ea580c`
- Hex: `#f5f5f5`, `#ff6b35`, `#004e89`, `#1a659e`, `#fff3cd`, `#6c757d`, `#e0e0e0`
- Hex: `#eaeaea`, `#fafafa`, `#c9c9c9`, `#fff`
- Hex: `#e961ff`, `#e58a00`, `#008dcd`, `#fce529`, `#4b5563`
- Hex: `#ff6b6b`, `#ee5a6f`

RGBA literals (deduped)
- `rgba(249, 115, 22, 0.5)`
- `rgba(249, 115, 22, 0.1)`
- `rgba(255, 255, 255, 0.3)`
- `rgba(255, 255, 255, 0.1)`
- `rgba(0, 0, 0, 0.1)`
- `rgba(0, 0, 0, 0.6)`
- `rgba(0, 0, 0, 0.7)`
- `rgba(0, 0, 0, 0.8)`
- `rgba(0, 0, 0, 1)`
- `rgba(255, 255, 255, 0.03)`
- `rgba(233, 97, 255, 0.7)`
- `rgba(233, 97, 255, 0)`
- `rgba(233, 97, 255, 0.1)`
- `rgba(233, 97, 255, 0.4)`
- `rgba(229, 138, 0, 0)`
- `rgba(229, 138, 0, 0.3)`
- `rgba(229, 138, 0, 0.2)`
- `rgba(229, 138, 0, 0.4)`
- `rgba(16, 185, 129, 0.4)`
- `rgba(16, 185, 129, 0)`
- `rgba(7, 3, 17, 0.85)`
- `rgba(175, 80, 255, 0.65)`
- `rgba(248, 231, 28, 0.61)`

HSL variables
- All theme colors are defined as HSL variables in `client/global.css` (dark + light sets).

Tailwind tokens (deduped summary)
- Brand: `brand-magenta`, `brand-orange`, `brand-off-white`, `brand-blue`, `brand-yellow`, `brand-gray`
- Standard families used: orange, blue, slate, gray, red, purple, indigo, yellow, amber, green, emerald, pink, black, white, transparent
- Common opacity suffixes: `/5`, `/10`, `/15`, `/20`, `/30`, `/40`, `/50`, `/60`, `/70`, `/80`, `/90`, `/95`

Known unresolved tokens
- `brand-green` is referenced in multiple health-sciences pages but is not defined in `tailwind.config.ts` or `global.css`.
- `--neon-purple` is referenced in `tailwind.config.ts` keyframes but is not defined in `global.css`.
