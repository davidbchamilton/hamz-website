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
