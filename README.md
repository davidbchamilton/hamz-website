# Producer Site

Official website and future private beat-pack portal for `[PRODUCER NAME]`, a Caribbean music producer.

This repository is being prepared for Codex-assisted development, GitHub source control, and Hostinger managed Node.js hosting.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Lucide React
- Node.js 22.x

Supabase, BeatStars integrations, email delivery, analytics, and abuse protection are planned for later phases.

## Prerequisites

- Node.js 22.x
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Quality

```bash
npm run lint
npm run build
```

## Directory Overview

- `src/app`: App Router pages and API route skeletons.
- `src/components`: Shared layout, navigation, section, UI, and media components.
- `src/data`: Typed placeholder content structures.
- `src/lib`: Future integration boundaries for Supabase, auth, and analytics.
- `src/types`: Shared TypeScript types.
- `public`: Public images, video, press, logo, and Open Graph assets.
- `docs`: Project source of truth for architecture, content, security, deployment, and QA.

## Documentation

Read `AGENTS.md` first, then the relevant files in `docs/` before making significant changes.

## Environment Variables

Copy `.env.example` to `.env.local` for local development secrets when integrations are introduced.

Do not commit `.env.local` or any other secret-bearing environment file.

For contact form email delivery, configure:

- `RESEND_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`

## Deployment

Production is intended for Hostinger managed Node.js hosting using Node.js 22.x. The expected flow is local/Codex development to Git, GitHub, Hostinger, and the production domain.

The project must remain compatible with standard Node.js hosting and must not depend on Vercel-specific runtime features.
