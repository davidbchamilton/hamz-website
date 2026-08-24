# AGENTS.md

## Project

This repository contains the official website and production portal for `[PRODUCER NAME]`.

The immediate launch target is promotion surrounding the Caribbean Music Awards.

The site serves two audiences:

1. Public visitors discovering the producer, beats, services, placements, media, and contact information.
2. Invited professional artists accessing private beat packs.

Before making significant changes, agents must read the relevant files in `/docs`.

The `/docs` directory is the project's source of truth.

## Required Technology

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase when database/storage functionality is introduced
- BeatStars for commercial beat playback and purchases

Production hosting:

- Hostinger managed Node.js hosting
- Node.js 22.x

Do not introduce another frontend or backend framework without explicit approval.

## Architecture

The public marketing website should use server rendering or static rendering where practical.

Client components should only be used when browser-side interactivity is genuinely necessary.

Sensitive operations must execute server-side.

This includes:

- invite-code validation
- privileged database operations
- signed private download generation
- contact email handling
- server-side secrets

Never expose secret credentials to browser JavaScript.

## BeatStars

BeatStars is the source of truth for commercial/public beat inventory.

Do not build a duplicate beat-commerce or inventory system.

Future BeatStars functionality should primarily use embeds and outbound purchase links.

## Private Beat Packs

Agents must read:

- `docs/BEAT_PACKS.md`
- `docs/SECURITY.md`
- `docs/DATA_MODEL.md`

before changing private beat-pack functionality.

Private ZIP files must NEVER be stored in `/public`.

Hiding a URL is not authentication.

Private downloads must eventually use authenticated server-side authorization and short-lived signed URLs.

## Content Integrity

Agents must read `docs/CONTENT.md`.

Never invent:

- production credits
- artist collaborations
- placements
- awards
- nominations
- chart achievements
- testimonials
- press coverage
- quotations

Use clearly marked TODO placeholders whenever factual information has not yet been provided.

## Design

Follow `docs/DESIGN_SYSTEM.md`.

The site should feel like a premium contemporary Caribbean music producer website.

Avoid:

- generic SaaS styling
- corporate website aesthetics
- excessive card layouts
- excessive gradients
- excessive animation
- stock imagery when authentic producer photography is intended
- unnecessary visual clutter

## Responsive Design

Mobile is first-class.

At minimum, validate layouts around:

- 375px
- 768px
- 1440px

## Accessibility

Use:

- semantic HTML
- descriptive alt text
- associated form labels
- keyboard navigation
- visible focus states
- sufficient contrast
- reduced-motion support

## Security

Never commit secrets.

Never expose:

- Supabase service-role credentials
- email credentials
- API secrets
- Turnstile secrets

Document required environment variables only in `.env.example`.

## Quality

Before considering significant work complete, run:

```bash
npm run lint
npm run build
```

Fix errors before completion.

## Deployment

Read `docs/DEPLOYMENT.md` before changing production/deployment behavior.

The site must remain deployable to Hostinger.

Do not add a hard dependency on Vercel, Netlify, AWS, Cloudflare Pages, or another hosting platform unless explicitly approved.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
