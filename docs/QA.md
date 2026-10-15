# QA

Before substantial work is considered complete:

- `npm run lint` passes
- `npm run build` passes
- no TypeScript errors
- no browser console errors attributable to the application
- no obvious broken links
- no horizontal overflow at mobile widths
- keyboard navigation remains usable
- visible focus states exist
- images have appropriate alt text
- forms have labels
- reduced-motion preferences are respected where animation exists

Validate representative widths:

- 375px
- 768px
- 1440px

Longer-term targets:

- Lighthouse Performance >= 90 where realistic
- Lighthouse Accessibility >= 90
- good Core Web Vitals

Security-sensitive functionality requires additional testing before production.

## Socials validation — October 15, 2026

- `npm run lint` and `npm run build` passed; `/socials` is prerendered.
- Browser checks at 375px, 768px, and 1440px found no horizontal overflow.
- Before activation, the page contained zero social iframes or vendor scripts.
- Instagram activation loaded the selected post's official iframe and content.
- TikTok uses the three individual URLs supplied by the user. Dates/captions were not independently verified and remain omitted; see `docs/SOCIALS.md`.
- All six official iframes initialized after activation. The three TikTok players
  exposed their video covers, playback controls, and the expected HAMZXL links.
- With all six embeds loaded, no horizontal overflow occurred at any of the
  three required widths. Keyboard activation loaded a TikTok player on mobile.
- The mobile menu opened by keyboard, highlighted Socials, and closed after
  selecting it. The homepage Socials link points to `/socials`.
- The page canonical was `https://hamzxl868.com/socials`.
- No application console errors or warnings were observed during initial checks.
- After activation, TikTok's scripts logged vendor warnings about its intl
  instance and `getInstalledRelatedApps` inside an iframe. These originate from
  TikTok assets; no first-party application errors were observed.
- Social post/profile links remain outside embeds and in server-rendered HTML.
