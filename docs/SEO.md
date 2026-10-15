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
