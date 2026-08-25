---
name: 'Obsidian & Ivory: Industrial Precision'
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c5c7c2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8f918d'
  outline-variant: '#454744'
  surface-tint: '#c9c6c5'
  primary: '#e5e2e1'
  on-primary: '#313030'
  primary-container: '#c9c6c5'
  on-primary-container: '#535252'
  inverse-primary: '#5f5e5d'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#e6e2e2'
  on-tertiary: '#313030'
  tertiary-container: '#cac6c6'
  on-tertiary-container: '#545252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#e6e1e1'
  tertiary-fixed-dim: '#c9c5c5'
  on-tertiary-fixed: '#1c1b1c'
  on-tertiary-fixed-variant: '#484646'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
  tertiary-gold: '#e9c176'
  charcoal-depth: '#121212'
  studio-outline: '#444748'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: 0.02em
  display-lg:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
  mono-ui:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  unit: 8px
  gutter: 32px
  margin-edge: 64px
  section-gap: 160px
  container-max: 1440px
---

## Brand & Style

The design system evolves from "Editorial Minimalist" to **Industrial Avant-Garde**. It targets the high-end music production space but shifts the emotional response from "luxury boutique" to "technical powerhouse." The brand persona is aggressive, confident, and raw, drawing inspiration from high-fidelity engineering and concrete studio architecture.

The aesthetic utilizes **Brutalism** and **Minimalism** in tandem. It retains the expansive whitespace and structured grids of high-fashion editorial but replaces the delicate serif flourishes with heavy, industrial-grade typography. The "Obsidian & Ivory" palette provides the premium foundation, while the new typographic direction introduces a sense of kinetic energy and "stencil" precision, mirroring the provided logo’s distressed, mechanical character.

## Colors

The "Obsidian & Ivory" palette remains the core of the design system. It creates a "low-light studio" environment that allows the aggressive typography and audio-visual elements to command attention.

- **Primary (Ivory/Off-White):** Used for headlines and critical technical data. It provides a sharp, high-contrast punch against the dark background.
- **Secondary (Muted Silver):** Used for secondary body text and supporting interface elements to create a tiered visual hierarchy.
- **Surface (Obsidian):** The deep charcoal base that mimics the non-reflective surfaces of a professional recording suite.
- **Named Colors:** `tertiary-gold` is reserved for "Active" states or "Master" level indicators, providing a hardware-inspired highlight.

## Typography

The typography is the most significant departure from the previous iteration, moving away from high-contrast serifs to bold, impactful, and industrial-aligned faces.

- **Headlines (Anton):** Chosen for its condensed, powerful, and modern-brutalist aesthetic. It captures the verticality and weight of the logo. All headlines should be set in **Uppercase** to reinforce the stencil-like, industrial feel.
- **Body (Hanken Grotesk):** A contemporary, sharp sans-serif that maintains high legibility. It feels engineered rather than drawn, fitting the technical nature of music production.
- **Labels & UI (JetBrains Mono):** Introduced to emphasize the "studio gear" and "technical documentation" aspect. Use for BPM, timestamps, and metadata to evoke the look of digital readouts and equipment etching.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** with a philosophy of "Architectural Tension." 

- **Grid Alignment:** Align text strictly to the grid edges to mimic the structured layout of sound mixing consoles.
- **Section Gaps:** Maintain massive vertical white space (`section-gap`) to allow the bold typography breathing room, preventing the "industrial" weight from becoming overwhelming.
- **Reflow:** On mobile, margins reduce to 24px, but typography remains large and impactful, often bleeding slightly off-edge or occupying 100% of the viewport width for a "poster" effect.

## Elevation & Depth

This design system rejects soft shadows and blurs. Depth is achieved through **High-Contrast Layering** and **Technical Line Work**.

- **Hard Borders:** Instead of shadows, use 1px solid borders (`studio-outline`) to define containers. This mimics the physical panels of rack-mounted studio hardware.
- **Tonal Stepping:** Surfaces move from `#141313` (Background) to `#1c1b1b` (Container) to `#2b2a2a` (Elevated/Hover).
- **Distressed Overlays:** To match the logo, use subtle, low-opacity "noise" or "grit" textures on large primary surfaces or image masks to break the digital perfection.
- **Inverted Blocks:** Use high-contrast "Inverted" blocks (Ivory backgrounds with Obsidian text) for the most critical calls to action to create a sense of immediate depth.

## Shapes

The shape language is strictly **Sharp (0px)**. 

All buttons, cards, images, and inputs must have hard 90-degree corners. This communicates precision, structural integrity, and a non-conforming industrial attitude. Any deviation into rounded corners would undermine the "stencil" and "hardware" narrative established by the logo.

## Components

- **Buttons:** Sharp-edged rectangles. Primary buttons utilize an "Inverted" style: Ivory background with black Anton text. Hover states should trigger a shift to `tertiary-gold`.
- **Input Fields:** Styled as a "Terminal" input. A solid 1px box outline on all sides. Focus state should change the border color to Ivory and perhaps introduce a block-style blinking cursor.
- **Chips/Tags:** Small, rectangular boxes with `label-caps` typography. They should look like physical labels taped onto a console.
- **Cards:** Defined by thin, high-contrast borders rather than fills. Hovering a card should fill it with a dark charcoal (`#201f1f`) and slightly brighten the border.
- **Lists:** High-density lists with JetBrains Mono for technical data. Use solid horizontal dividers to separate tracks or projects.
- **Progress Bars/Sliders:** Represented as thick, solid bars. The "filled" portion should be Ivory, and the "track" should be a dark gray, mimicking the sliders on a high-end mixing desk.