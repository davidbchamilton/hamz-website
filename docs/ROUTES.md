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
- services preview
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

## `/services`

Services:

- Custom Beats
- Exclusive Production
- Mixing & Mastering
- Vocal Production
- Sync Licensing

Each service eventually gets a Request Quote CTA.

Quote links should support:

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

- form UI is present
- `?service=<service-slug>` preselects the relevant service
- form submission remains disabled until an approved email backend, validation,
  and anti-spam controls are implemented

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
