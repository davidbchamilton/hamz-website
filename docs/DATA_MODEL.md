# Data Model

This document describes the planned future schema. Do not create migrations yet.

Schema changes must eventually be made through version-controlled migrations.

## `invite_codes`

Suggested fields:

- id
- code_hash
- campaign
- expires_at
- max_uses
- use_count
- active
- created_at

## `contacts`

- id
- email
- artist_name
- marketing_consent
- created_at

## `pack_access`

- id
- contact_id
- invite_code_id
- accessed_at

## `beat_packs`

- id
- slug
- title
- description
- bpm_min
- bpm_max
- active
- release_date
- expires_at
- zip_storage_path

## `pack_tracks`

- id
- pack_id
- title
- bpm
- musical_key
- preview_url
- position

## `downloads`

- id
- contact_id
- pack_id
- invite_code_id
- downloaded_at
