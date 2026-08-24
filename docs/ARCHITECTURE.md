# Architecture

## Public Website

Next.js application
-> server/static rendered pages where practical
-> BeatStars embeds/links
-> contact endpoint

The public marketing site should avoid unnecessary client-side JavaScript and prefer static or server-rendered content where practical.

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
