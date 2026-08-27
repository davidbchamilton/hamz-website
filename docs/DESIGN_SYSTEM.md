# Design System

## Creative Direction

Approved homepage direction:

**Obsidian & Ivory: Industrial Precision**

- industrial avant-garde
- brutalist minimalism
- premium music-production environment
- technical powerhouse rather than luxury boutique
- high-fashion editorial structure
- recording-studio / engineering character
- aggressive but restrained
- confident
- raw
- precise

## Avoid

- generic SaaS layouts
- corporate blue
- excessive gradients
- overuse of cards
- childish graphics
- unnecessary animation
- overly busy backgrounds

## Photography

Prioritize genuine producer photography including:

- studio portraits
- recording studio photographs
- artist collaboration photography
- event photography
- professional portraits

Do not generate factual photography placeholders pretending to depict the producer.

Use generic placeholder blocks where actual photography has not yet been supplied.

Production raster images must be converted to `.webp` before being added to
the site. Keep dimensions appropriate for the largest rendered use case so
homepage, catalogue, press, and profile imagery do not ship oversized source
files or unnecessary bandwidth.

## Typography

Approved homepage typography:

- Display/headlines: Anton
- Body: Hanken Grotesk
- Technical labels and metadata: JetBrains Mono
- Accent/tagline: Permanent Marker

Headlines should generally be uppercase, condensed, bold in visual presence,
and editorial. Technical labels should use mono typography for items such as
section indexes, BPM/key metadata, navigation labels, and microcopy. Do not use
mono typography for large body-copy areas.

## Color Palette

Approved homepage palette:

- Surface: `#141313`
- Deep surface: `#0e0e0e`
- Low container: `#1c1b1b`
- Container: `#201f1f`
- Higher surface: `#2b2a2a`
- Primary ivory: `#e5e2e1`
- Muted secondary: `#c6c7c2`
- Muted text: `#c5c7c2`
- Studio border: `#444748`
- Accent gold: `#e9c176`

Use gold sparingly for active states, highlighted technical details, hover
states, and selected emphasis. Do not turn the whole site gold.

## Layout

- 12-column editorial grid on desktop
- strong edge alignment
- architectural spacing
- deliberate asymmetry
- large negative space
- content max width around `1440px`
- approximately `64px` desktop page margins where practical
- approximately `24px` mobile margins
- large section gaps around `160px` where the composition supports it

## Shape And Depth

- use sharp 0px geometry for buttons, inputs, cards, imagery, and panels
- avoid rounded cards, pill controls, glassmorphism, and soft shadows
- use 1px technical borders and tonal surface changes for depth
- use inverted ivory blocks for the strongest calls to action
- subtle grit/noise texture may be implemented with lightweight CSS only

## Motion

Motion should feel mechanical and precise: color inversion, border brightening,
small positional shifts, and technical underline movement. Avoid bouncy motion,
exaggerated scaling, heavy parallax, and animation libraries. Respect
`prefers-reduced-motion`.
