---
name: app-design
description: Use this skill to generate well-branded interfaces, design tokens, and components for ENRAGLINE (AI/RAG SaaS Starter Kit & Production Foundation), 100% matched with the brand design specification, master color palette, and official logo/icon assets.
user-invocable: true
---

# ENRAGLINE App Design Skill

Read `DESIGN.md` and `colors_and_type.css` within this skill directory for complete technical specifications.
This skill defines the visual identity, design tokens, typography, component rules, card architecture, and brand assets for **ENRAGLINE** (AI/RAG SaaS Starter Kit).

---

## 1. Brand Identity & Official Assets

All official brand image assets are stored in `.agents/skills/app-design/assets/` and mirrored to `public/brand/`:

| Asset File | Preview / Type | Role & Application |
| :--- | :--- | :--- |
| **`enragline-icon.jpg`** | Multi-Color Gradient Icon | 4-quadrant rounded hexagon shield with central 4-point star cutout. Used for app icons, avatars, splash screens, and auth headers. |
| **`enragline-logo.png`** | Full Horizontal Logo Lockup | Crisp white emblem + clean geometric sans "Enragline" wordmark. Used for navigation bars, headers, and footers on dark surfaces. |
| **`palette-swatches.png`** | Master Color Palette Reference | Canonical breakdown of all 9 color swatches with HEX, RGB, and CMYK values. |
| **`design-mockup.png`** | Marketing & Dashboard Mockup | Full high-fidelity reference of the hero section, glowing CTAs, preview dashboard, and feature pills. |

**Paths**:
- In production Next.js app: `/brand/enragline-logo.png` and `/brand/enragline-icon.jpg`
- In skill directory: `.agents/skills/app-design/assets/enragline-logo.png` and `.agents/skills/app-design/assets/enragline-icon.jpg`

---

## 2. Canonical Master Color Palette (100% Exact Match)

Every color token is derived from the master palette swatches:

| Color Name | HEX | RGB | CMYK | Role & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Pure Black** | `#000000` | `(0, 0, 0)` | `(0, 0, 0, 100)` | Deep canvas foundation, outer black line (`ring-1 ring-black`), text on light surfaces |
| **Pure White** | `#FFFFFF` | `(255, 255, 255)` | `(0, 0, 0, 0)` | Primary headings, logo wordmark, high-contrast labels, light mode surfaces |
| **Deep Cobalt Blue** | `#0E37AA` | `(14, 55, 170)` | `(92, 68, 0, 33)` | Dark base for blue gradient, secondary blue accents |
| **Electric Sky Blue** | `#248EFB` | `(36, 142, 251)` | `(86, 43, 0, 2)` | Primary blue interactive element, GPT-3.5 model, Pro tier, Net Profit, IBM line |
| **Deep Indigo / Purple** | `#4F0EAA` | `(79, 14, 170)` | `(54, 92, 0, 33)` | Dark base for purple gradient, Llama model, Enterprise tier, Apple line |
| **Vivid Violet / Purple** | `#6F24FB` | `(111, 36, 251)` | `(56, 86, 0, 2)` | Claude model, Standard tier, Server Error rate, Intel line, left ambient glow |
| **Vivid Red / Crimson** | `#FD1C20` | `(253, 28, 32)` | `(0, 89, 87, 1)` | Fiery gradient start, "Start Building" CTA glow, right ambient glow, feature pip |
| **Vivid Amber / Orange** | `#FEA327` | `(254, 163, 39)` | `(0, 36, 85, 0)` | Fiery gradient middle, GPT-4 model, Community tier, Validation error, Total Profit, Oracle line |
| **Electric Neon Yellow** | `#FFF52F` | `(255, 245, 47)` | `(0, 4, 82, 0)` | Fiery gradient highlight end, Amazon line, radiant highlight spark |

---

## 3. Signature Gradients & Ambient Effects

1. **Fiery Text Gradient ("Foundation")**:
   - `linear-gradient(90deg, #FD1C20 0%, #FEA327 50%, #FFF52F 100%)`
   - Applied via `-webkit-background-clip: text; -webkit-text-fill-color: transparent;`
2. **Primary CTA "Start Building" Button**:
   - Background: `linear-gradient(135deg, #FD1C20 0%, #FEA327 100%)`
   - Shadow & Glow: `box-shadow: 0 4px 20px -2px rgba(253, 28, 32, 0.45), 0 0 35px -4px rgba(254, 163, 39, 0.25)`
   - Shape: `rounded-xl` or `rounded-lg`, white medium text.
3. **Secondary CTA "Explore Platform" Button**:
   - Background: `#111217` with hairline border `border border-white/10` or `border-[#22242D]`
   - Hover: `hover:bg-[#1A1C24] hover:border-white/20`
4. **Electric Blue Ramp**:
   - `linear-gradient(135deg, #248EFB 0%, #0E37AA 100%)`
5. **Vivid Purple Ramp**:
   - `linear-gradient(135deg, #6F24FB 0%, #4F0EAA 100%)`
6. **Dual Ambient Mesh Glow**:
   - Radial gradients positioned in background: Purple (`rgba(111, 36, 251, 0.16)`) at top-left and Red/Amber (`rgba(253, 28, 32, 0.14)`) at top-right.

---

## 4. Brand & Marketing Hero Rules

- **Category Badge**:
  - `[Icon] AI/RAG SAAS STARTER KIT`
  - Pill container: `px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white/80`
- **Headline Architecture**:
  - `Build Your AI SaaS.`
  - `Skip the <span className="en-text-fire">Foundation</span> Work`
- **Sub-headline**:
  - `ENRAGLINE gives developers and software teams a production-focused foundation for building AI-powered SaaS products.`
- **Navigation Bar**:
  - Logo: Use `<Image src="/brand/enragline-logo.png" alt="ENRAGLINE" width={140} height={28} />` or the white 4-quadrant emblem with text.
  - Links: `Overview`, `Benefits`, `RAG Pipeline`, `SaaS Foundation`, `How It Works`, `FAQ`.
  - Right Action: `Explore Enragline` pill button (`rounded-full border border-white/20 text-sm px-4 py-2`).

---

## 5. Feature Cards Strip (Below Showcase)

4 horizontal feature cards:
1. `Multi-Tenant`
2. `Provider Flexible`
3. `Self-Hostable`
4. `Built for Developers`

**Structure**:
- Container: `rounded-xl border border-white/10 bg-[#111217] py-3 px-5 flex items-center justify-center gap-2.5`
- Indicator Pip: Glowing radial dot with `radial-gradient(circle, #FFF52F 0%, #FEA327 50%, #FD1C20 100%)` and `box-shadow: 0 0 10px 2px rgba(254, 163, 39, 0.7), 0 0 4px 1px rgba(253, 28, 32, 0.9)`

---

## 6. Dashboard Preview Data Mapping

When rendering dashboard charts and metric cards:
- **AI Model Usage**:
  - GPT-4 (40%): `#FEA327` (Amber Orange)
  - GPT-3.5 (25%): `#248EFB` (Electric Blue)
  - Claude (20%): `#6F24FB` (Vivid Purple)
  - Llama (10%): `#4F0EAA` (Deep Purple)
  - Other (5%): `#4A4D57` (Muted Slate)
- **Edition Usage Donut Chart**:
  - Community (45%): `#FEA327`
  - Standard (20%): `#6F24FB`
  - Pro (20%): `#248EFB`
  - Enterprise (15%): `#4F0EAA`
- **Error Rates Bar Chart**:
  - Validation (50%): `#FEA327` (Striped/hatched)
  - Authorization (40%): `#00D26A` (Green)
  - Not Found (30%): `#248EFB` (Electric Blue)
  - Server Error (25%): `#6F24FB` (Vivid Purple)
  - Others (15%): `#4A4D57`
- **Sales Chart**:
  - Total Profit: `#FEA327` (Hatched amber bar)
  - Net Profit: `#248EFB` (Electric blue solid bar)
- **Tech Companies Growth Multi-line Graph**:
  - Oracle: `#FEA327` | IBM: `#248EFB` | Intel: `#6F24FB` | Amazon: `#FFF52F` | Samsung: `#00D26A` | Apple: `#4F0EAA`

---

## 7. Enterprise 3D Tactile Card Rules

1. **Card Container**: `rounded-xl border border-card-outer-border bg-card-outer ring-1 ring-black p-0 overflow-hidden`
2. **Inner Content Area**: Flush with borders (zero outer padding), `p-4 sm:p-5`, `rounded-t-xl`, NO inner borders.
3. **Tactile Inner Shadow**: Prominent top, left, and right shadows casting inward from edges (`.card-content-shadow`) with top highlight bevel `inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`.
4. **Header Bar**: `px-3.5 py-3 text-xs text-foreground bg-card-outer`.
