Homepage color grading

Source files
- `client/pages/Index.tsx`
- `client/components/ScrollingTicker.tsx`
- `client/components/VirtualTourSection.tsx`
- `client/components/StoryboardSection.tsx`
- `client/components/CampusLocationsSection.tsx`
- `client/components/AdmissionsCTASection.tsx`
- `client/components/ApplicationPopup.tsx` 
- Shared UI tokens from `client/global.css`, `client/components/ui/button.tsx`, `client/components/ui/badge.tsx`

Theme tokens used on the homepage (from `client/global.css`)
- `bg-background` -> `hsl(220 13% 8%)` (dark default)
- `text-foreground` -> `hsl(0 0% 98%)`
- `bg-card` -> `hsl(220 13% 13%)`
- `text-card-foreground` -> `hsl(0 0% 98%)`
- `border-border` -> `hsl(220 13% 20%)`
- `bg-primary` / `bg-secondary` -> `hsl(32 100% 45%)` (`#e58a00`)
- `text-primary-foreground` -> `hsl(0 0% 2%)`
- `text-secondary-foreground` -> `hsl(0 0% 98%)`
- Brand colors:
  - `brand-magenta` -> `#e961ff`
  - `brand-orange` -> `#e58a00`
  - `brand-blue` -> `#008dcd`
  - `brand-yellow` -> `#fce529`
  - `brand-gray` -> `#4b5563`
  - `brand-off-white` -> `#fafafa`
- Brand gradients (defined in Tailwind config):
  - `bg-brand-gradient` -> `linear-gradient(135deg, #e961ff, #e58a00)`
  - `bg-brand-gradient-alt` -> `linear-gradient(135deg, #008dcd, #e961ff)`
  - `bg-brand-gradient-warm` -> `linear-gradient(45deg, #e58a00, #fce529)`

Global Tailwind color codes referenced on the homepage
- `white` -> `#ffffff`
- `black` -> `#000000`
- `brand-magenta` -> `#e961ff`
- `brand-orange` -> `#e58a00`
- `brand-blue` -> `#008dcd`

Sections and colors

1) Scrolling ticker (top bar)
- Background gradient: `bg-gradient-to-r from-black to-brand-orange`
  - `#000000` -> `#e58a00`
- Text: `text-white` -> `#ffffff`
- Hover: `hover:text-brand-orange/80` -> `#e58a00` at 80% alpha

2) Hero section (video + headline)
- Video overlay gradient: `bg-gradient-to-b from-transparent via-transparent to-black/30`
  - `black` at 30% (`rgba(0,0,0,0.3)`)
- Dark overlay: `bg-black/40` (`rgba(0,0,0,0.4)`)
- Location badge:
  - `bg-white/20` (`rgba(255,255,255,0.2)`)
  - `border-white/40` (`rgba(255,255,255,0.4)`)
  - `text-white` (`#ffffff`)
- Headline and taglines:
  - `text-white` (`#ffffff`)
  - `text-white/75` (`rgba(255,255,255,0.75)`)
  - `text-white/80` (`rgba(255,255,255,0.8)`)
- Primary CTA button:
  - `bg-white` (`#ffffff`)
  - `text-brand-orange` (`#e58a00`)
  - `hover:text-brand-orange/80` (`#e58a00` at 80% alpha)
- Secondary CTA button (outline):
  - `bg-transparent`
  - `border-white/70` (`rgba(255,255,255,0.7)`)
  - `text-white` (`#ffffff`)
  - `hover:bg-white/10` (`rgba(255,255,255,0.1)`)
- Link CTA:
  - `text-white` (`#ffffff`)
  - `hover:text-brand-orange/80` (`#e58a00` at 80% alpha)
- Mute button (inline styles):
  - `backgroundColor: rgba(0,0,0,0.6)`
  - `border: 1px solid rgba(255,255,255,0.3)`
  - `color: white` (`#ffffff`)

3) Recognized Excellence (Performance Indicators)
- Section background gradient: `from-brand-magenta/5 via-brand-orange/5 to-brand-blue/5`
  - `#e961ff`, `#e58a00`, `#008dcd` at 5% alpha
- Section border: `border-border/30` -> `hsl(220 13% 20%)` at 30% alpha
- Text: `text-foreground` -> `hsl(0 0% 98%)`

4) Academic Excellence That Inspires (Academics)
- Section uses base `bg-background` and `text-foreground`
- School cards (rotating accent palette):
  - `bg-brand-orange/10` + `border-brand-orange/20` -> `#e58a00` at 10%/20%
  - `bg-brand-magenta/10` + `border-brand-magenta/20` -> `#e961ff` at 10%/20%
  - `bg-brand-blue/10` + `border-brand-blue/20` -> `#008dcd` at 10%/20%
- Image overlay gradient on cards:
  - `bg-gradient-to-t from-black/60 via-black/20 to-transparent`
    - black at 60% and 20% alpha
- Campus pill: `bg-foreground/10` + `text-foreground/70`

5) Research Excellence — DSU Research Publications
- Section background gradient: `bg-gradient-to-b from-white/5 via-white/10 to-transparent`
  - `#ffffff` at 5% and 10% alpha
- Section label lines: `bg-white` (`#ffffff`)
- Title highlight: `bg-brand-gradient` -> `linear-gradient(135deg, #e961ff, #e58a00)`
- Featured publication card:
  - `border-white/20` (`rgba(255,255,255,0.2)`)
  - `bg-gradient-to-br from-white/5 to-white/10`
  - progress bar track `bg-white/10`
  - progress bar fill `bg-gradient-to-r from-brand-magenta via-brand-blue to-brand-orange`
    - `#e961ff` -> `#008dcd` -> `#e58a00`
- Featured image container:
  - `bg-gradient-to-br from-foreground/5 to-white/5`
- Badges:
  - `bg-brand-blue/25` + `text-brand-blue` + `border-brand-blue/50`
- Buttons:
  - `bg-brand-blue` -> `#008dcd`
  - `hover:bg-brand-blue/80` -> `#008dcd` at 80% alpha
- Publication grid cards:
  - Background gradients:
    - `from-brand-blue/20 to-brand-blue/5`
    - `from-brand-orange/20 to-brand-orange/5`
    - `from-brand-magenta/20 to-brand-magenta/5`
  - Borders:
    - `border-brand-blue/30`
    - `border-brand-orange/30`
    - `border-brand-magenta/30`
  - Active card:
    - `border-brand-blue`
    - `bg-brand-blue/20`
    - `shadow-brand-blue/20`
  - Hover overlay:
    - `bg-gradient-to-t from-black/5 to-transparent`

6) Featured News and Events
- Section background gradient: `from-brand-blue/5 via-brand-magenta/5 to-brand-orange/5`
  - `#008dcd`, `#e961ff`, `#e58a00` at 5%
- Progress bar:
  - Track `bg-white/10`
  - Fill `bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-orange`
    - `#008dcd` -> `#e961ff` -> `#e58a00`
- Featured story card:
  - `border-brand-orange/20` + `bg-brand-orange/10`
  - `border` and `bg` use `#e58a00` at 20%/10%
- Featured badges:
  - `bg-brand-orange/20 text-brand-orange`
  - `bg-brand-magenta/20 text-brand-magenta`
  - `bg-brand-blue/20 text-brand-blue`
- Pulse indicator:
  - `bg-brand-blue` (`#008dcd`)
- Carousel dots:
  - Active `bg-brand-blue` (`#008dcd`)
  - Inactive `bg-foreground/30` and `hover:bg-foreground/50`
- Right column cards:
  - `border-brand-magenta/20`
  - `bg-brand-magenta/5`
  - hover `border-brand-magenta/40`
- News modal (opened from this section):
  - Backdrop `bg-black/80` (`rgba(0,0,0,0.8)`)
  - Close button `bg-black/40` -> `bg-black/60`
  - Card uses `bg-card` and `border-border/50`
  - Badges: `bg-brand-orange/20`, `bg-brand-magenta/20`, `bg-brand-blue/20`

7) Walk the DSU Smart Campus — 360° Virtually
- Section uses base `bg-background`
- Title gradient: `bg-brand-gradient` -> `linear-gradient(135deg, #e961ff, #e58a00)`
- Tour container:
  - `border-brand-orange/20`
  - `bg-background`

8) What Makes DSU Special (Storyboard)
- Section uses base `bg-background`
- Section label: `text-brand-orange` (`#e58a00`)
- Header lines: `bg-white` (`#ffffff`)
- Title gradient: `bg-brand-gradient` (`#e961ff` -> `#e58a00`)
- Story cards:
  - Card 1: `bg-brand-orange/10`, `border-brand-orange/30`, icon gradient `from-brand-orange to-brand-magenta`
  - Card 2: `bg-brand-blue/10`, `border-brand-blue/30`, icon gradient `from-brand-blue to-brand-magenta`
  - Card 3: `bg-brand-magenta/10`, `border-brand-magenta/30`, icon gradient `from-brand-magenta to-brand-orange`
  - Divider: `bg-gradient-to-r from-transparent via-foreground/20 to-transparent`
  - CTA button: `bg-gradient-to-r from-brand-orange to-brand-magenta`
- Bottom CTA banner:
  - `bg-gradient-to-r from-brand-orange/10 via-brand-blue/10 to-brand-magenta/10`
  - `border-brand-orange/20`
  - Button: `bg-brand-gradient` (`#e961ff` -> `#e58a00`)

9) Visit Our Campuses
- Section uses base `bg-background`
- Label: `text-brand-orange` (`#e58a00`) + header lines `bg-white`
- Tab bar: `border-foreground/10`
  - Active tab: `text-brand-orange` + `border-b-brand-orange`
  - Inactive: `text-foreground/60` -> `text-foreground/80` on hover
- Campus card:
  - `border-brand-orange/20`
  - `bg-gradient-to-br from-white/5 to-white/10`
  - Hover: `border-brand-orange/40`, `shadow-brand-orange/20`
- Map overlay: `bg-gradient-to-t from-black/30 via-transparent to-transparent`
- Accent rule: `bg-gradient-to-r from-brand-orange to-brand-blue`
- Text accents:
  - Icons and bullets: `text-brand-orange`
  - Hover background: `bg-foreground/5`
- CTA buttons:
  - Primary: `bg-brand-gradient` (`#e961ff` -> `#e58a00`)
  - Secondary outline: `border-brand-orange/30`, `hover:text-brand-orange`

10) Admissions CTA Section
- Section uses base `bg-background`
- Wrapper gradient: `from-brand-magenta/10 via-brand-orange/10 to-brand-blue/10`
- Border: `border-brand-magenta/20`
- Button:
  - `bg-brand-gradient` (`#e961ff` -> `#e58a00`)
  - `hover:shadow-brand-magenta/25`
- Badges use `variant="secondary"`:
  - `bg-secondary` -> `hsl(32 100% 45%)` (`#e58a00`)
  - `text-secondary-foreground` -> `hsl(0 0% 98%)`

11) Application Popup (fixed bottom-left)
- Container:
  - `bg-background` -> `hsl(220 13% 8%)`
  - `border-brand-orange/30`
  - `backdrop-blur-sm`
- Close button:
  - `bg-brand-orange/60` -> `#e58a00` at 60% alpha
  - `hover:bg-brand-orange/80`
  - `text-white` (`#ffffff`)
- Header gradient:
  - `bg-gradient-to-r from-brand-orange to-brand-blue`
    - `#e58a00` -> `#008dcd`
- Countdown area:
  - `bg-card/50` -> `hsl(220 13% 13%)` at 50% alpha
  - Each timer tile: `bg-background` + `border-brand-orange/20`
  - Numbers: `text-brand-orange` (`#e58a00`)
  - Labels: `text-foreground/60`
- CTA button:
  - `bg-gradient-to-r from-brand-orange to-brand-blue`
  - `hover:shadow-brand-orange/50`
  - `text-white` (`#ffffff`)
