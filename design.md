# Enragline AI/RAG SaaS Starter Kit — UI & Theming System (Dark & Light)

## 1. Brand Identity & Core Philosophy
**Enragline** is a production-focused foundation for developers and software teams building AI-powered, multi-tenant SaaS products.
The visual identity is defined by a deep dark architectural canvas with tactile 3D card elevation, vibrant multi-dimensional neon/electric status tones, and a signature high-energy fiery gradient ramp ("Foundation" text gradient, "Start Building" CTA glow, and glowing feature pips).

Every dashboard card is built as a single, cohesive container with an outer border, an outer black line (`ring-1 ring-black`), and `overflow-hidden`.
The card features a distinct top header bar and an elevated, tactile inner content area (`CardContent`) defined by a prominent multi-directional shadow that is **clearly visible on the inner top, left, and right** of the card content container, combined with physical top-edge highlight bevels, subtle gradient drops, and **NO inner borders** across both **Dark Theme** and **Light Theme**.

There is **zero outside padding around the card content** (`p-0` on outer `<Card>`). The inner content container extends flush to the outer left, right, and bottom borders, allowing the inner content padding (`p-4 sm:p-5`) to provide clean, uniform breathing room while the inner shadow (`.card-content-shadow`) defines its rich tactile depth.

---

## 2. Canonical Master Color Palette (100% Exact Match)

The entire design system strictly adheres to the 9 master color swatches:

| Color Name | HEX | RGB | CMYK | Role & System Application |
| :--- | :--- | :--- | :--- | :--- |
| **Pure Black** | `#000000` | `(0, 0, 0)` | `(0, 0, 0, 100)` | Deep canvas foundation, outer black framing line (`ring-1 ring-black`), text on light surfaces |
| **Pure White** | `#FFFFFF` | `(255, 255, 255)` | `(0, 0, 0, 0)` | Primary headings, logo wordmark, high-contrast badges & buttons, light mode surfaces |
| **Deep Cobalt Blue** | `#0E37AA` | `(14, 55, 170)` | `(92, 68, 0, 33)` | Dark base for electric blue gradient ramp, secondary blue depth accents |
| **Electric Sky Blue** | `#248EFB` | `(36, 142, 251)` | `(86, 43, 0, 2)` | Primary blue interactive element, GPT-3.5 model, Pro tier, Net Profit bar, IBM growth line |
| **Deep Indigo / Purple** | `#4F0EAA` | `(79, 14, 170)` | `(54, 92, 0, 33)` | Dark base for vivid purple gradient ramp, Llama model, Enterprise tier, Apple growth line |
| **Vivid Violet / Purple** | `#6F24FB` | `(111, 36, 251)` | `(56, 86, 0, 2)` | Primary electric purple accent, Claude model, Standard tier, Server Error rate, Intel growth line |
| **Vivid Red / Crimson** | `#FD1C20` | `(253, 28, 32)` | `(0, 89, 87, 1)` | Fiery gradient start, "Start Building" CTA glow, right ambient glow, feature indicator pip |
| **Vivid Amber / Orange** | `#FEA327` | `(254, 163, 39)` | `(0, 36, 85, 0)` | Fiery gradient midpoint, GPT-4 model, Community tier, Validation error rate, Total Profit, Oracle growth line |
| **Electric Neon Yellow** | `#FFF52F` | `(255, 245, 47)` | `(0, 4, 82, 0)` | Fiery gradient highlight end, Amazon growth line, radiant badge sparkle |

---

## 3. Signature Gradients & Lighting Effects

### 3.1 Fiery Text Gradient ("Foundation")
Applied to the key brand wordmark / hero highlight:
```css
background: linear-gradient(90deg, #FD1C20 0%, #FEA327 50%, #FFF52F 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 3.2 Primary CTA Button ("Start Building")
Fiery gradient background with dual ambient glow:
```css
background: linear-gradient(135deg, #FD1C20 0%, #FEA327 100%);
color: #FFFFFF;
box-shadow: 0 4px 20px -2px rgba(253, 28, 32, 0.45), 0 0 35px -4px rgba(254, 163, 39, 0.25);
```

### 3.3 Electric Blue & Purple Gradients
- **Electric Blue Ramp**: `linear-gradient(135deg, #248EFB 0%, #0E37AA 100%)`
- **Vivid Purple Ramp**: `linear-gradient(135deg, #6F24FB 0%, #4F0EAA 100%)`

### 3.4 Ambient Mesh Lighting
Soft canvas backdrop glow creating subtle dimensionality behind the dashboard preview:
- Left atmospheric glow: `radial-gradient(circle at 10% 20%, rgba(111, 36, 251, 0.16) 0%, transparent 45%)`
- Right atmospheric glow: `radial-gradient(circle at 90% 25%, rgba(253, 28, 32, 0.14) 0%, transparent 45%)`

### 3.5 Glowing Feature Pips
Radial gradient dot with dual luminous drop shadow:
```css
width: 8px;
height: 8px;
border-radius: 50%;
background: radial-gradient(circle, #FFF52F 0%, #FEA327 50%, #FD1C20 100%);
box-shadow: 0 0 10px 2px rgba(254, 163, 39, 0.7), 0 0 4px 1px rgba(253, 28, 32, 0.9);
```

---

## 4. Landing Page & Hero Section Architecture

### 4.1 Header Bar & Navigation
- **Logo Lockup**:
  - Official Asset: `/brand/enragline-logo.png` (`.agents/skills/app-design/assets/enragline-logo.png`).
  - Render formula: `<Image src="/brand/enragline-logo.png" alt="ENRAGLINE" width={140} height={28} className="h-7 w-auto object-contain select-none" />`
  - Emblem Geometry: 4-quadrant rounded hexagon shield with central 4-point star cutout in pure white.
  - Wordmark: "Enragline" (`text-lg font-semibold tracking-tight text-white font-sans`).
- **Navigation Links**:
  - `Overview`, `Benefits`, `RAG Pipeline`, `SaaS Foundation`, `How It Works`, `FAQ`.
  - Styling: `text-sm font-normal text-muted-foreground hover:text-white transition-colors`.
- **Header Action Button**:
  - `Explore Enragline`: Rounded pill button (`rounded-full px-4 py-1.5 text-xs font-medium border border-white/20 text-white hover:bg-white/10 transition-all`).

### 4.2 Hero Section Elements
- **Category Badge**:
  - `[Sparkle/Diamond Icon] AI/RAG SAAS STARTER KIT`
  - Container: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white/80 mb-6`.
- **Main Hero Headline**:
  - "Build Your AI SaaS."
  - "Skip the <span className="bg-gradient-to-r from-[#FD1C20] via-[#FEA327] to-[#FFF52F] bg-clip-text text-transparent">Foundation</span> Work"
  - Typography: `text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]`.
- **Sub-headline**:
  - "Enragline gives developers and software teams a production-focused foundation for building AI-powered SaaS products."
  - Typography: `text-base sm:text-lg text-[#8E8E93] max-w-xl font-normal leading-relaxed mt-4 mb-8`.
- **Action Buttons**:
  - Primary: `<Button className="bg-gradient-to-r from-[#FD1C20] to-[#FEA327] text-white shadow-[0_4px_20px_-2px_rgba(253,28,32,0.45),0_0_35px_-4px_rgba(254,163,39,0.25)] hover:opacity-95 rounded-xl px-6 py-2.5 text-sm font-medium">Start Building</Button>`
  - Secondary: `<Button variant="outline" className="border-white/10 bg-[#111217] text-white hover:bg-[#1A1C24] hover:border-white/20 rounded-xl px-6 py-2.5 text-sm font-normal">Explore Platform</Button>`

### 4.3 Feature Cards Strip (Below Showcase Canvas)
Four responsive cards arranged horizontally:
1. `Multi-Tenant`
2. `Provider Flexible`
3. `Self-Hostable`
4. `Built for Developers`

**Card Architecture**:
```tsx
<div className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-[#111217] py-3.5 px-5 text-sm font-medium text-white shadow-xs">
  <span className="size-2 rounded-full bg-[radial-gradient(circle,#FFF52F_0%,#FEA327_50%,#FD1C20_100%)] shadow-[0_0_10px_2px_rgba(254,163,39,0.7),0_0_4px_1px_rgba(253,28,32,0.9)]" />
  <span>{featureTitle}</span>
</div>
```

---

## 5. Universal Unified 3D Tactile Card Architecture (Mandatory)

Every card in the dashboard **MUST** strictly follow the unified Shadcn container structure with **zero padding outside the card content**, **NO inner borders**, **rounded upper corners (`rounded-t-xl`)**, and **prominent inner shadow on the top, left, and right**:

```text
┌────────────────────────────────────────────────────────┐  ← Outer Card (<Card>): rounded-xl, border-card-outer-border, ring-1 ring-black, p-0, overflow-hidden
│  [icon] Card Header Title                              │  ← Header Bar (<CardHeader>): bg-card-outer, px-3.5 py-3, text-xs text-foreground
├───╭────────────────────────────────────────────────╮───┤  ← Top Inner Shadow (inset 0 12px 20px -4px) + Top Highlight (inset 0 1px)
│ ░ │                                                │ ░ │  ← Left Inner Shadow (inset 10px 0 16px -4px)
│ ░ │             Card Content & Visuals             │ ░ │  ← Right Inner Shadow (inset -10px 0 16px -4px)
│ ░ │               p-4 sm:p-5                       │ ░ │  ← 3D gradient, NO INNER BORDER, flush with outer edges
│ ░ │                                                │ ░ │
└───┴────────────────────────────────────────────────┴───┘
```

### 5.1 Card Structure & Exact Formula
- **Outer Card Container (`<Card>`)**: Uses `rounded-xl` with a single 1px outer border (`border border-[#22242D] dark:border-[#22242D]`), `bg-[#111217]`, `overflow-hidden`, and **zero outer padding** (`p-0`).
- **Outer Black Line Framing**: `ring-1 ring-black` (sharp `#000000` outer boundary separating the card from the canvas).
- **Header Bar (`<CardHeader>`)**: `flex items-center gap-2 px-3.5 py-3 text-xs font-normal text-foreground bg-[#111217] border-b border-white/5`.
- **NO Inner Border**: The inner card content has **NO border**. Depth, elevation, and boundary separation are achieved purely through tactile inner shadows and top-edge inset highlight.
- **Inner Elevation Shadow (`.card-content-shadow`)**:
  ```css
  .dark .card-content-shadow {
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
      0 -2px 6px color-mix(in srgb, var(--muted-foreground) 8%, transparent),
      inset 0 10px 16px -4px color-mix(in srgb, var(--muted-foreground) 10%, transparent),
      inset 8px 0 14px -4px color-mix(in srgb, var(--muted-foreground) 8%, transparent),
      inset -8px 0 14px -4px color-mix(in srgb, var(--muted-foreground) 8%, transparent);
  }
  ```
- **Inner Content Background**: `bg-white dark:bg-gradient-to-b dark:from-[#171821] dark:to-[#13141B]`

---

## 6. Dashboard Card Archetypes & Data Visualization Colors

### 6.1 Welcome Banner
- Glowing fiery top accent line: `h-1 w-full bg-gradient-to-r from-[#FD1C20] via-[#FEA327] to-[#FFF52F]`
- Headline: "Welcome to Enragline! Your AI/RAG SaaS Foundation - built for developers and teams shipping intelligent, multi-tenant products faster."
- Features: `Build Faster`, `RAG Ready`, `Production Focused`

### 6.2 AI Model Usage Card
- Header: `<Sparkles className="size-3.5" /> AI Model Usage`
- Subtitle: `5 Models - Requests shifted +18.7% across models over 1,200 calls`
- Color Mapping:
  - **GPT-4** (40% / 480 reqs): `#FEA327` (Amber Orange)
  - **GPT-3.5** (25% / 300 reqs): `#248EFB` (Electric Blue)
  - **Claude** (20% / 240 reqs): `#6F24FB` (Vivid Purple)
  - **Llama** (10% / 120 reqs): `#4F0EAA` (Deep Indigo)
  - **Other** (5% / 60 reqs): `#4A4D57` (Muted Slate)

### 6.3 Edition Usage Card
- Header: `<Layers className="size-3.5" /> Edition Usage`
- Controls: Period toggle pill (`7D`, `30D` active dark pill, `90D`)
- Multi-segment Donut Chart:
  - **Community** (45%): `#FEA327` (Amber Orange) — Most-used edition
  - **Standard** (20%): `#6F24FB` (Vivid Purple)
  - **Pro** (20%): `#248EFB` (Electric Blue)
  - **Enterprise** (15%): `#4F0EAA` (Deep Indigo)

### 6.4 Error Rates Card
- Header: `<AlertTriangle className="size-3.5" /> Error Rates`
- Category Progress Bars:
  - **Validation** (50%): `#FEA327` (Striped/hatched pattern)
  - **Authorization** (40%): `#00D26A` (Emerald Green)
  - **Not Found** (30%): `#248EFB` (Electric Blue)
  - **Server Error** (25%): `#6F24FB` (Vivid Purple)
  - **Others** (15%): `#4A4D57` (Muted Slate)

### 6.5 Top Sales Card
- Header: Two-bars chart icon with `Top Sales`
- Metric: `$123K` with `+12.4%` badge
- Dual-color Column Chart:
  - **Total profit**: `#FEA327` (Hatched amber column)
  - **Net profit**: `#248EFB` (Solid electric blue column)

### 6.6 Tech Companies Growth Card
- Header: Line chart icon with `Tech Companies Growth`
- Multi-series Line Graph:
  - **Oracle**: `#FEA327` (Amber Orange)
  - **IBM**: `#248EFB` (Electric Sky Blue)
  - **Intel**: `#6F24FB` (Vivid Violet)
  - **Amazon**: `#FFF52F` (Electric Neon Yellow)
  - **Samsung**: `#00D26A` (Emerald Green)
  - **Apple**: `#4F0EAA` (Deep Indigo)

---

## 7. Universal Page Title & Header Specification (Mandatory for Every Page)

Every page in the application MUST use the standardized, unified page title format:

```tsx
<h1 className="text-2xl font-normal tracking-tight text-foreground dark:text-white font-sans">
  {pageTitle}
</h1>
```

### 7.1 Universal Title Rules
1. **Typography Scale**: `text-2xl` (24px / 1.5rem) — standard scale across the entire application for top-level page headings.
2. **Font Weight**: `font-normal` (400 weight) — do NOT use `font-semibold` or `font-bold` for main page titles.
3. **Letter Spacing**: `tracking-tight` (-0.025em).
4. **Theme-Aware Colors**: `text-foreground dark:text-white`.

---

## 8. Authentication Pages (None Required)

- **Status**: No authentication pages (sign-in, sign-up, password reset, 2FA, etc.) are required or used in this application.
- **Navigation & CTAs**: Primary action buttons and hero links do not route to authentication walls or sign-up flows. They directly engage with product features, demo flows, or anchor sections.

---

## 9. UI Design & Prototyping Mode: Direct Strings (i18n Turned Off)

- **Mode Status**: Active for UI design and component prototyping.
- **Translations Rule**: Language translations (`next-intl`, translation verification, and dictionary checking) are **turned off**.
- **Direct Copy**: All UI text, headlines, descriptions, labels, button copy, and badges can be written directly as inline strings in JSX/TSX components without requiring namespace lookups or translation JSON updates.
- **Priority**: Rapid iteration on layout, typography, Tailwind classes, responsive structure, and visual design.

---

## 10. Pixel-Perfect Iterative Section Implementation Workflow

- **Methodology**: Add new sections iteratively, **one-by-one**.
- **Visual Precision**: Each section MUST match the reference images provided by the user **100% pixel-perfect**:
  - **Layout & Spacing**: Exact flex/grid structure, widths, aspect ratios, margins, and inner/outer paddings.
  - **Colors & Lighting**: Exact color tokens matching the master palette, continuous linear/radial gradients, tactile inner shadows, and neon glow effects.
  - **Typography**: Exact font sizes, weights, line heights (`leading`), tracking (`letter-spacing`), and sentence/title case.
  - **Architectural Details**: Precise border lines, hatched divider bands, corner anchor nodes, badge icons, and hover micro-interactions.
- **Iterative Process**:
  1. Receive reference screenshot/image for the section.
  2. Code the section with pixel-perfect fidelity.
  3. Verify against browser rendering to ensure 1:1 visual match.
  4. Proceed to the next section upon user review.

---

## 11. Architectural Section Anchor Nodes (Thin Rounded Hexagon Standard) & Section Framing

- **Corner Anchor Nodes (Thin Hexagon Standard)**:
  - Every architectural section boundary uses **thin 6-sided rounded regular hexagons** (`PentagonCornerNode`) located strictly at the **4 outer intersection corners** where horizontal divider lines meet the vertical container boundary lines.
  - **No intermediate column nodes**: Inner column dashed dividers connect directly to horizontal borders without intermediate nodes; only the 4 outer corner vertices have hexagons.
  - **Geometry**: 6-sided point-topped rounded hexagon with vertical left/right edges and smoothly rounded vertices:
    ```svg
    <svg viewBox="0 0 24 24" className="absolute size-[18px] -translate-x-1/2 -translate-y-1/2 fill-black stroke-[#585858] stroke-[1.5] overflow-visible pointer-events-none z-20">
      <path d="M 13.73 3.5 L 18.5 6.25 Q 20.23 7.25 20.23 9.25 L 20.23 14.75 Q 20.23 16.75 18.5 17.75 L 13.73 20.5 Q 12 21.5 10.27 20.5 L 5.5 17.75 Q 3.77 16.75 3.77 14.75 L 3.77 9.25 Q 3.77 7.25 5.5 6.25 L 10.27 3.5 Q 12 2.5 13.73 3.5 Z" />
    </svg>
    ```
  - **Stroke & Color**: Exact `#585858` stroke (`rgb(88, 88, 88)`), identical to the container border lines and hatched divider diagonal stripes (`#585858`), with solid pure black fill (`#000000`).
  - **Placement**: Centered precisely over the 4 outer corner vertices using `-translate-x-1/2 -translate-y-1/2`:
    - Top-left: `left-0 top-0`
    - Top-right: `left-full top-0`
    - Bottom-left: `left-0 bottom-0`
    - Bottom-right: `left-full bottom-0`
  - **Framing & Viewport Safety**: Central layout container wraps with `px-4 sm:px-6 lg:px-8` so vertical boundary lines always retain black space on both outer sides across all desktop and mobile viewports, preventing corner nodes from being clipped.

- **Unified Architectural Pillar Flow (Spacing & Order)**:
  1. Dashboard Card Container (flush bottom)
  2. 4-Feature Items Strip (`Multi-Tenant`, `Provider Flexible`, `Self-Hostable`, `Built for Developers`) with dashed dividers
  3. Continuous Architectural Hatched Band (`h-7 border-b border-[#585858]`)
  4. 3-Pillar Section (`Built for AI SaaS`, `RAG-First Architecture`, `Deploy Anywhere`) with crisp SVG vector illustrations (`rag3.svg`, `rag1.svg`, `rag2.svg`), dashed vertical column dividers (`divide-[#585858]`), and 4 corner hexagon nodes (`#585858`)
  5. Bottom Hatched Band (`h-7 border-b border-[#585858]`)






