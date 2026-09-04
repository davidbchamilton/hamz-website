# Performance

## Baseline

Source: Google PageSpeed Insights mobile report for `https://hamzxl868.com/`,
reported September 3, 2026 and supplied as a PDF on September 4, 2026.

- PageSpeed Performance: 38
- First Contentful Paint: 5.8s
- Largest Contentful Paint: 8.5s
- Total Blocking Time: 930ms
- Speed Index: 7.2s
- Cumulative Layout Shift: 0

CLS is already excellent and should remain a regression constraint.

## Major Reported Opportunities

- Use efficient cache lifetimes: approximately 1,302 KiB potential savings
- Improve image delivery: approximately 192 KiB potential savings
- Reduce JavaScript execution time: approximately 2.2s
- Minimize main-thread work: approximately 3.5s
- Reduce unused JavaScript: approximately 975 KiB potential savings
- Reduce unused CSS: approximately 158 KiB potential savings
- Avoid enormous network payloads: approximately 3,163 KiB total payload
- Legacy JavaScript: approximately 13 KiB potential savings
- Minify JavaScript: approximately 8 KiB potential savings
- Render-blocking requests, third-party activity, network dependency chains,
  and approximately 12 long main-thread tasks

## Baseline Investigation Notes

- The homepage and main marketing routes prerender as static App Router pages.
- Client components before optimization were limited to the primary navigation
  and contact form, but the client navigation imported the large shared
  `@/data/site` module.
- Because `@/data/site` imports Lucide icons and full site content, the
  navigation client bundle included placement records, service metadata, and
  icons unrelated to navigation.
- The homepage used `next/image` but several key images were marked
  `unoptimized`, so browsers downloaded the public image asset rather than
  size-appropriate optimized derivatives.
- The homepage hero image is the likely LCP image candidate on the PageSpeed
  screenshot. It should stay high quality and continue to preload.
- The BeatStars embed is required functionality, but third-party iframe assets,
  scripts, CSS, cookies, and cache headers are externally controlled.
- The first-party generated CSS bundle was about 28 KiB in the production
  build, so the larger unused-CSS report is likely mostly third-party player CSS
  after the embed loads.

## Changes Made

### Navigation Client Bundle

- Problem: `MainNavigation` imported the monolithic site data module from a
  Client Component.
- Implementation: moved navigation-only arrays to `src/data/navigation.ts` and
  updated navigation/footer imports.
- Expected benefit: less unused first-party data and fewer unused Lucide icon
  definitions in the browser bundle.
- Visual/functional risk: low. Navigation labels and links are unchanged.
- Resource type: first-party JavaScript.

### BeatStars Embed Loading

- Problem: the BeatStars iframe could participate in early network, script,
  cookie, CSS, and main-thread work even though the homepage player sits below
  the initial hero.
- Implementation: introduced a small client wrapper that reserves the exact
  player frame height, renders a lightweight branded placeholder, loads the
  iframe when it approaches the viewport, and also allows manual "Load Player"
  activation.
- Expected benefit: reduces initial third-party JavaScript/CSS/network work and
  should improve mobile TBT, main-thread work, unused JS, unused CSS, and total
  initial payload.
- Visual/functional risk: low to medium. BeatStars remains one tap away and
  auto-loads near the player section; the initial embedded player is deferred.
- Resource type: third-party resources gated by first-party code.

### Image Delivery

- Problem: hero/profile/logo images used `next/image` but bypassed optimization
  with `unoptimized`.
- Implementation: removed `unoptimized`, kept explicit dimensions and `sizes`,
  kept hero preloading, and set quality intent for editorial imagery and logos.
- Expected benefit: browsers receive responsive optimized image variants instead
  of full public assets. Local checks showed the homepage hero source
  `homepage-main.webp` is 257,878 bytes directly, while optimized WebP responses
  were about 47,400 bytes at 384w and 101,058 bytes at 640w.
- Visual/functional risk: low. Hero quality remains intentionally high at `82`;
  supporting imagery uses `80`.
- Resource type: first-party images.

### Next 16 Image Configuration

- Problem: Next.js 16 only allows image quality `75` by default, so custom
  `quality` props are coerced unless allowlisted.
- Implementation: added `images.qualities: [75, 80, 82]` in `next.config.ts`.
- Expected benefit: makes image quality settings explicit and predictable.
- Visual/functional risk: low.
- Resource type: first-party image optimizer configuration.

### Static Asset Cache Headers

- Problem: PageSpeed reported inefficient cache lifetimes, and first-party
  public image/icon assets otherwise receive conservative caching.
- Implementation: added one-year immutable `Cache-Control` headers for
  `/images/:path*` and `/icons/:path*`.
- Expected benefit: repeat visitors and PageSpeed should see better caching for
  first-party static media.
- Visual/functional risk: low, with an operational caveat: if an image changes,
  prefer changing the filename so already-cached browsers fetch the new asset.
- Resource type: first-party static assets.

## Remaining External Limitations

- BeatStars iframe scripts, styles, cookies, cache headers, execution time, and
  DevTools issues are controlled by BeatStars.
- Third-party cookie warnings should not be "fixed" by removing required
  BeatStars functionality.
- Do not proxy BeatStars assets purely to alter Lighthouse cache diagnostics
  unless there is a separate product or architecture reason.

## Validation Notes

- Production build before changes passed only after allowing network access for
  `next/font/google` font fetching. The sandboxed build failed because the
  sandbox blocked Google Fonts download at build time.
- Production build after changes passed.
- Lint after changes passed.
- Browser validation at 375px, 768px, and 1440px found no horizontal overflow.
- Local browser validation confirmed the homepage hero uses optimized
  `/_next/image` URLs and the correct fonts.
- Initial homepage validation found zero live BeatStars iframes before reaching
  the player section.
- Scrolling to the player section initialized one BeatStars iframe with the
  configured `https://player.beatstars.com/?storeId=152867` source.
- Contact page validation confirmed service preselection still works for
  `/contact?service=vocal-production`.
- No browser console warnings or errors attributable to the local application
  were observed during the checked homepage, beats, BeatStars-load, and contact
  flows.

## Follow-Up

Run a fresh mobile PageSpeed Insights test after deployment to production.
Expected biggest improvements should come from deferred BeatStars loading,
responsive hero image delivery, and first-party static asset cache headers.
