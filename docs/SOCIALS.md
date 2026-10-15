# Socials

## Scope and design

`/socials` is a public, statically rendered page linked from desktop/mobile
navigation, the footer, and a lightweight homepage prompt. It has its own
canonical URL, sharing metadata, and sitemap entry. It follows Obsidian & Ivory:
uppercase condensed headings, technical labels, sharp borders, restrained violet
accents, and a responsive editorial grid. No dependency or hosting change.

## Selected content — October 15, 2026

| Platform | Date | Title | Source |
| --- | --- | --- | --- |
| Instagram | October 7, 2026 | Honey & Lime Riddim | https://www.instagram.com/karthurm/reel/DeNZki9KW5H/ |
| Instagram | October 1, 2026 | Rude / Karthur M | https://www.instagram.com/chrystonfloyd/p/Dd9LlJXp6gV/ |
| Instagram | September 20, 2026 | Outside once in a while | https://www.instagram.com/hamzxl868/p/DdgmR7DkWNA/ |
| TikTok | Not verified | Selected video / 01 | https://www.tiktok.com/@hamzxl/video/7592730301005090104 |
| TikTok | Not verified | Selected video / 02 | https://www.tiktok.com/@hamzxl/video/7546992657847880965 |
| TikTok | Not verified | Selected video / 03 | https://www.tiktok.com/@hamzxl/video/7536322528248122630 |

Instagram posts were checked on the public HAMZXL profile and individual post
pages. The first two are collaboration content shown on that profile; the
October 1 post explicitly lists HAMZXL as coauthor. Dates came from accessible
image/video descriptions. Pinned posts were not assumed to be the newest.
Titles and local descriptions are editorial summaries, not copied captions.
This does not add placements, awards, or other claims elsewhere on the site.

The user supplied all three TikTok URLs in this chat. Their captions and dates
could not be independently read in this session, so dates are omitted and the
page uses neutral selection labels. TODO: replace these labels with descriptive
titles and add publication dates once verified. Do not infer dates from video
IDs. The six selected items are not a guaranteed mirror of the newest uploads.

All three supplied TikTok players were subsequently verified to initialize with
video covers, playback controls, and links identifying `@hamzxl`. This verifies
embed availability, without establishing publication dates or caption text.

## Implementation and maintenance

Content lives in `src/data/socials.ts`. Each record includes an ID, platform,
source URL, title, description, embed URL, and optional verified publication
date. Page rendering filters by platform and preserves source-array order.

1. Review recent posts periodically and around campaigns.
2. Replace records with verified public post URLs and concise descriptions.
   Keep dates only when verified. Keep approximately three posts per platform.
3. Use Instagram's post shortcode embed or TikTok's official player URL:
   `https://www.tiktok.com/player/v1/{post_id}?autoplay=0`.
4. Update the table here and `docs/CONTENT.md` with the source/review details.
5. Run lint/build and validate 375px, 768px, and 1440px, embed activation,
   keyboard controls, navigation, and external links. Deploy via Hostinger.

Official TikTok player reference:
https://developers.tiktok.com/docs/en/embed-player

There is no automatic refresh, profile feed widget, scraping, account
connection, social API credential, scheduled job, or paid service. Content
updates require editing the source and redeploying.

## Loading and availability

`SocialEmbed` is the small client boundary. Text, links, dates, and metadata
remain server rendered. Each official iframe is created only after visitor
activation. No Instagram/TikTok script is injected into the parent document.
No social vendor resource loads on the homepage or before preview activation.
Third-party requests and cookies may occur inside the loaded players.

Each preview reserves 640px of height. TikTok uses `autoplay=0`, and the iframe
allow policy does not grant autoplay. Media is not downloaded or rehosted.
Buttons support keyboard use, frames have descriptive titles, and visible focus
and reduced-motion behavior use the existing global styles.

Direct post/profile links remain outside embeds and work without JavaScript.
Where detectable, iframe errors show a fallback notice. Cross-origin login
walls, removed posts, and regional restrictions cannot always be detected;
the permanent source links remain the fallback. An iframe load is not proof
that the media is playable. Vendor accessibility and availability are externally
controlled.
