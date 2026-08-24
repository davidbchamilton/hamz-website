# Beat Packs

The public-facing CMA page should communicate:

"Exclusive Beat Packs are available to invited artists."

## Eventual Access Workflow

1. Artist opens `/cma`.
2. Artist enters email.
3. Artist supplies invite code if not embedded in the URL.
4. Server validates invitation.
5. Valid invitation creates a secure short-lived session.
6. Artist is redirected to `/cma/packs`.

## Pack Data

Each pack may eventually contain:

- title
- description
- number of beats
- BPM range
- individual preview tracks
- individual BPM
- musical key
- ZIP download
- license/usage agreement
- expiration date
- artwork

## Example Placeholder Packs

Summer Soca Pack

- 8 beats
- 140-155 BPM

Dancehall Vol. 2

- 10 beats

These are examples only, not factual content.

## Private File Requirement

PRIVATE ZIP FILES MUST NOT BE PLACED IN `/public`.

Private files will eventually live in a private Supabase Storage bucket.

Downloads will eventually require:

- authenticated server-side authorization
- database validation
- download logging
- short-lived signed storage URLs

Marketing consent must be optional and separate from pack access.
