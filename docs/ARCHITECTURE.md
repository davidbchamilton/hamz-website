# Architecture

## Public Website

Next.js application
-> server/static rendered pages where practical
-> BeatStars embeds/links
-> contact endpoint

The public marketing site should avoid unnecessary client-side JavaScript and prefer static or server-rendered content where practical.

## Social Content

`/socials` is statically rendered with curated content in `src/data/socials.ts`.
Only `SocialEmbed` is a client component. Visitor activation loads an Instagram
iframe or individual TikTok player iframe. No vendor script is injected in the parent document. No social API secrets, database, runtime feed request, or new hosting dependency is introduced. See `docs/SOCIALS.md` for sources and the update procedure.

## Private CMA System

Planned future flow:

`/cma`
-> email + invite code
-> server validation
-> secure session
-> `/cma/packs`
-> private Supabase storage
-> short-lived signed download URLs
-> download tracking

This bootstrap task does not implement Supabase, authentication, invite-code logic, signed downloads, download tracking, email sending, analytics, or BeatStars integration.

## Planned External Systems

- Hostinger: application hosting
- GitHub: source control/deployment
- Supabase PostgreSQL: future database
- Supabase Storage: private beat-pack ZIPs
- BeatStars: commercial beats
- Cloudflare Turnstile: form/invite abuse protection
- GA4 or another approved analytics solution

Supabase integration is planned but must not be implemented during repository bootstrap.
