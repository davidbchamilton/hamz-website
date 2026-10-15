# SEO

Future implementation should include:

- unique page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- social sharing images
- sitemap.xml
- robots.txt
- semantic HTML
- descriptive image alt text
- structured data where appropriate
- good Core Web Vitals
- fast mobile loading

## Potential Search Themes

- HAMZXL
- HAMZXL producer
- HAMZXL Caribbean producer
- Caribbean producer
- soca producer
- bouyon producer
- jab producer
- dancehall producer
- Afrobeats producer

Do not keyword-stuff.

SEO text should remain human-readable.

## Canonical URLs

Every indexable public page must declare its own canonical path in page metadata.
The root layout's homepage canonical is inherited unless a page overrides it.

`/contact` and all `/contact?service=<service-slug>` variants use `/contact` as
their canonical. The query parameter only preselects a form field; it does not
create a separate service landing page. Keep these links functional and include
only `/contact` in the sitemap.

Google Search Console may correctly report the service variants as "Alternate
page with proper canonical tag." They should not be indexed separately. After
deploying canonical changes, inspect `/contact` and `/placements` in Search
Console, confirm their declared canonicals match their URLs, and request indexing
for those canonical pages. Do not remove canonical tags or block service variants
in robots.txt to clear this informational report.

## Socials

`/socials` has its own title, description, canonical path, Open Graph URL, and
Twitter metadata, and is included in `sitemap.xml`. Selected post titles,
summaries, publication dates, and source links are present in server-rendered
HTML; indexing does not depend on vendor embeds loading.

## Font Assets

Generated WOFF2 fonts under `/_next/static/media/` return
`X-Robots-Tag: noindex`. These files are rendering resources, not search landing
pages. Keep them crawlable so Google can render the site and read the header.
Do not block `/_next/` in robots.txt or include font assets in the sitemap.

Search Console may list fonts as "Crawled - currently not indexed" or, after
recrawling the header, as excluded by `noindex`. Both are expected for fonts and
do not indicate that the pages using them cannot be indexed. After deploying,
verify that font responses retain the header through Hostinger's asset cache.
