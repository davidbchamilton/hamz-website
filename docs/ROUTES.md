# Routes

## `/`

Home.

Must eventually contain:

- hero image/video
- producer tagline
- Browse Beats CTA
- Exclusive Packs CTA where appropriate
- Contact CTA
- featured beat/player
- selected placements
- service inquiry prompts that route to contact
- concise about section
- CMA promotional section
- contact/social footer

## `/beats`

Eventually contain:

- BeatStars embed
- featured beats
- genre discovery/filter interface where technically practical
- purchase links to BeatStars

BeatStars remains the source of truth.

## Services

There is no standalone `/services` page in the current public route map.

Service inquiries are handled through:

`/contact?service=<service-slug>`

## `/about`

Eventually contain:

- concise producer biography
- artists worked with
- awards/nominations
- optional studio setup
- professional photography

## `/contact`

Eventually contain:

- name
- artist name
- email
- message
- optional service selection
- Instagram
- BeatStars
- WhatsApp
- email

Current phase:

- form posts to `/api/contact`
- server-side input validation is present
- email delivery uses Resend when `RESEND_API_KEY`, `EMAIL_FROM`, and
  `EMAIL_TO` are configured
- a honeypot field is present as a lightweight first spam screen
- `?service=<service-slug>` preselects the relevant service
- Cloudflare Turnstile or an approved equivalent is still recommended before
  high-traffic production use

## `/placements`

Released records using the producer's production.

## `/press`

Eventually contain:

- press photos
- logo assets
- electronic press kit
- media coverage where provided

## `/cma`

Private portal entry page.

Not part of main navigation.

Eventually requests:

- email
- invite code

Marketing consent must be separate from access authorization.

## `/cma/packs`

Protected route for authorized invited artists.

Eventually displays available beat packs.
