Color grading inventory

Scope
This inventory covers every file in the repo that contains color information, including:
- `client/global.css` and `tailwind.config.ts`
- `client/components/**/*.tsx` and `client/pages/**/*.tsx`
- `knowledge-base/dsu-knowledge-base.html`
- `public/placeholder.svg`

Color system overview
- Tailwind is the primary styling system.
- Semantic colors are defined in `client/global.css` as HSL CSS variables and mapped in `tailwind.config.ts`.
- Brand colors are exposed as `brand-*` tokens and used across pages.
- Many pages use Tailwind gradients (`bg-gradient-*` with `from/via/to` stops).

Summary counts
- Unique hex literals: 26
- Unique RGBA literals: 23
- HSL variables: 30+ (dark + light theme sets)
- Tailwind color tokens used: 100+ (including opacity variants)
- Explicit CSS gradients: 7
- Tailwind gradient combinations: 50+ unique combinations of direction + stops

1) Explicit literal colors found in files

Hex literals
- `#1a1a1a` (ChatWidget background)
- `#2a2a2a` (ChatWidget borders/quick replies)
- `#333` (ChatWidget borders)
- `#666` (ChatWidget text)
- `#999` (ChatWidget text)
- `#e5e5e5` (ChatWidget text)
- `#f97316` (ChatWidget primary)
- `#ea580c` (ChatWidget primary hover)
- `#f5f5f5` (knowledge-base HTML background)
- `#ff6b35` (knowledge-base HTML accents)
- `#004e89` (knowledge-base HTML headings)
- `#1a659e` (knowledge-base HTML headings)
- `#fff3cd` (knowledge-base HTML highlight box)
- `#6c757d` (knowledge-base HTML secondary text)
- `#e0e0e0` (knowledge-base HTML borders)
- `#eaeaea` (placeholder SVG background)
- `#fafafa` (placeholder SVG fill, brand off-white)
- `#c9c9c9` (placeholder SVG stroke)
- `#fff` (placeholder SVG fill)
- `#e961ff` (brand magenta, gradients)
- `#e58a00` (brand orange, gradients)
- `#008dcd` (brand blue, gradients)
- `#fce529` (brand yellow)
- `#4b5563` (brand gray)
- `#ff6b6b` (AdmissionCarouselNew gradient)
- `#ee5a6f` (AdmissionCarouselNew gradient)

RGBA literals
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

2) Theme variables (HSL) from `client/global.css`

Dark theme (root)
- `--background: 220 13% 8%`
- `--foreground: 0 0% 98%`
- `--card: 220 13% 13%`
- `--card-foreground: 0 0% 98%`
- `--popover: 220 13% 13%`
- `--popover-foreground: 0 0% 98%`
- `--primary: 32 100% 45%` (brand orange, `#e58a00`)
- `--primary-foreground: 0 0% 2%`
- `--secondary: 32 100% 45%`
- `--secondary-foreground: 0 0% 98%`
- `--muted: 220 11% 25%`
- `--muted-foreground: 0 0% 75%`
- `--accent: 32 100% 45%`
- `--accent-foreground: 0 0% 2%`
- `--destructive: 0 100% 65%`
- `--destructive-foreground: 0 0% 98%`
- `--border: 220 13% 20%`
- `--input: 220 13% 20%`
- `--ring: 32 100% 45%`
- `--sidebar-background: 0 0% 2%`
- `--sidebar-foreground: 0 0% 98%`
- `--sidebar-primary: 32 100% 45%`
- `--sidebar-primary-foreground: 0 0% 2%`
- `--sidebar-accent: 220 9% 29%`
- `--sidebar-accent-foreground: 0 0% 98%`
- `--sidebar-border: 220 9% 29%`
- `--sidebar-ring: 32 100% 45%`
- `--brand-magenta: 295 100% 69%` (`#e961ff`)
- `--brand-orange: 32 100% 45%` (`#e58a00`)
- `--brand-off-white: 0 0% 98%` (`#fafafa`)
- `--brand-blue: 201 100% 41%` (`#008dcd`)
- `--brand-yellow: 53 95% 57%` (`#fce529`)
- `--brand-gray: 220 9% 29%` (`#4b5563`)
- `--gradient-primary: linear-gradient(135deg, hsl(var(--brand-magenta)), hsl(var(--brand-orange)))`
- `--gradient-secondary: linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-magenta)))`

Light theme (class `light`)
- `--background: 210 40% 98%`
- `--foreground: 222 47% 11%`
- `--card: 0 0% 100%`
- `--card-foreground: 222 47% 11%`
- `--popover: 0 0% 100%`
- `--popover-foreground: 222 47% 11%`
- `--primary: 32 100% 50%`
- `--primary-foreground: 0 0% 98%`
- `--secondary: 32 94% 55%`
- `--secondary-foreground: 0 0% 100%`
- `--muted: 213 27% 92%`
- `--muted-foreground: 217 19% 35%`
- `--accent: 32 100% 50%`
- `--accent-foreground: 0 0% 100%`
- `--destructive: 0 73% 54%`
- `--destructive-foreground: 0 0% 98%`
- `--border: 214 32% 87%`
- `--input: 214 32% 87%`
- `--ring: 32 100% 50%`
- `--sidebar-background: 0 0% 100%`
- `--sidebar-foreground: 222 47% 11%`
- `--sidebar-primary: 32 100% 50%`
- `--sidebar-primary-foreground: 0 0% 100%`
- `--sidebar-accent: 213 27% 94%`
- `--sidebar-accent-foreground: 222 47% 11%`
- `--sidebar-border: 214 32% 87%`
- `--sidebar-ring: 32 100% 50%`

3) Tailwind palette tokens used (with hex codes)

Brand tokens (defined in `tailwind.config.ts`)
- `brand-magenta` -> `#e961ff`
- `brand-orange` -> `#e58a00`
- `brand-off-white` -> `#fafafa`
- `brand-blue` -> `#008dcd`
- `brand-yellow` -> `#fce529`
- `brand-gray` -> `#4b5563`

Standard Tailwind families used
Orange
- `orange-50` `#fff7ed`
- `orange-100` `#ffedd5`
- `orange-200` `#fed7aa`
- `orange-300` `#fdba74`
- `orange-400` `#fb923c`
- `orange-500` `#f97316`
- `orange-600` `#ea580c`
- `orange-700` `#c2410c`
- `orange-800` `#9a3412`
- `orange-900` `#7c2d12`
- `orange-950` `#431407`

Blue
- `blue-50` `#eff6ff`
- `blue-100` `#dbeafe`
- `blue-200` `#bfdbfe`
- `blue-300` `#93c5fd`
- `blue-400` `#60a5fa`
- `blue-500` `#3b82f6`
- `blue-600` `#2563eb`
- `blue-700` `#1d4ed8`
- `blue-800` `#1e40af`
- `blue-900` `#1e3a8a`

Indigo
- `indigo-500` `#6366f1`
- `indigo-600` `#4f46e5`

Purple
- `purple-50` `#faf5ff`
- `purple-100` `#f3e8ff`
- `purple-200` `#e9d5ff`
- `purple-300` `#d8b4fe`
- `purple-500` `#a855f7`
- `purple-600` `#9333ea`
- `purple-700` `#7e22ce`
- `purple-800` `#6b21a8`
- `purple-900` `#581c87`

Red
- `red-50` `#fef2f2`
- `red-100` `#fee2e2`
- `red-200` `#fecaca`
- `red-400` `#f87171`
- `red-500` `#ef4444`
- `red-600` `#dc2626`
- `red-700` `#b91c1c`
- `red-800` `#991b1b`
- `red-900` `#7f1d1d`

Yellow
- `yellow-50` `#fefce8`
- `yellow-100` `#fef9c3`
- `yellow-400` `#facc15`
- `yellow-500` `#eab308`
- `yellow-600` `#ca8a04`
- `yellow-950` `#422006`

Amber
- `amber-500` `#f59e0b`

Green
- `green-400` `#4ade80`
- `green-500` `#22c55e`
- `green-600` `#16a34a`

Emerald
- `emerald-50` `#ecfdf5`
- `emerald-100` `#d1fae5`
- `emerald-200` `#a7f3d0`
- `emerald-500` `#10b981`
- `emerald-600` `#059669`
- `emerald-900` `#064e3b`

Pink
- `pink-500` `#ec4899`

Slate
- `slate-50` `#f8fafc`
- `slate-100` `#f1f5f9`
- `slate-200` `#e2e8f0`
- `slate-300` `#cbd5e1`
- `slate-400` `#94a3b8`
- `slate-500` `#64748b`
- `slate-600` `#475569`
- `slate-700` `#334155`
- `slate-800` `#1e293b`
- `slate-900` `#0f172a`
- `slate-950` `#020617`

Gray
- `gray-50` `#f9fafb`
- `gray-100` `#f3f4f6`
- `gray-200` `#e5e7eb`
- `gray-300` `#d1d5db`
- `gray-400` `#9ca3af`
- `gray-500` `#6b7280`
- `gray-600` `#4b5563`
- `gray-700` `#374151`
- `gray-800` `#1f2937`
- `gray-900` `#111827`

Neutral helpers
- `white` `#ffffff`
- `black` `#000000`
- `transparent` `transparent`

Opacity variants
The codebase uses Tailwind alpha modifiers (e.g., `orange-500/10`). These are the base colors above multiplied by alpha. Common alpha values seen:
- `/5`, `/10`, `/15`, `/20`, `/30`, `/40`, `/50`, `/60`, `/70`, `/80`, `/90`, `/95`

4) Gradient definitions

CSS gradients (explicit strings)
- `linear-gradient(135deg, hsl(var(--brand-magenta)), hsl(var(--brand-orange)))` (brand primary)
- `linear-gradient(135deg, hsl(var(--brand-blue)), hsl(var(--brand-magenta)))` (brand secondary)
- `linear-gradient(45deg, hsl(var(--brand-orange)), hsl(var(--brand-yellow)))` (brand warm)
- `linear-gradient(90deg, #e961ff, #e58a00, #008dcd)` (rotation progress bar)
- `linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)` (AdmissionCarousel)
- `linear-gradient(rgba(7, 3, 17, 0.85), rgba(7, 3, 17, 0.85))` (Footer overlay)
- `repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 2px)` (page texture)

Tailwind gradient usage (directions + stop sets)
Directions used:
- `to-r`, `to-l`, `to-t`, `to-b`, `to-br`, `to-bl`, `to-tr`, `to-tl`

Common stop tokens used with from/via/to:
- Brand: `brand-magenta`, `brand-orange`, `brand-blue`, `brand-yellow`, `brand-gray`
- Standard: `orange-50..950`, `blue-50..900`, `purple-50..900`, `indigo-500..600`, `red-500..600`, `yellow-500..600`, `amber-500`, `green-500`, `emerald-500`, `pink-500`, `slate-800..950`, `black`, `transparent`

5) Known gaps or inconsistencies
- `brand-green` is referenced in multiple health-sciences pages but is not defined in `tailwind.config.ts` or `global.css`. Any usage of `brand-green` currently resolves to no actual color unless Tailwind is extended elsewhere.
- `--neon-purple` is referenced in `tailwind.config.ts` keyframes but is not defined in `global.css`.
