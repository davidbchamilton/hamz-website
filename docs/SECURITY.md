# Security

## Next.js ImageResponse Advisory

For GHSA-vcvr-r3jv-pc5j, Next.js 16.3.6 is the first patched 16.x release.
The project uses the 16.3.8 patch line with the resolved version recorded in
`package-lock.json`. Deploy the updated lockfile and rebuild on Hostinger.

The application currently does not use `next/og` or `ImageResponse`. If dynamic
social image generation is introduced, keep Next.js patched and do not pass
untrusted values into SVG content, attributes, or styles.

Advisory: https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j

## Application Requirements

Future implementation must follow these requirements:

- Never trust browser-side authorization.
- Validate access server-side.
- Never store invite codes in plaintext if they are intended to be secret.
- Hash secret invitation codes at rest.
- Never expose Supabase service-role credentials.
- Private ZIPs must not be placed in `/public`.
- Private storage must require authorization.
- Signed download URLs must expire quickly.
- Rate-limit invite-code attempts.
- Validate all form inputs server-side.
- Add anti-automation/spam controls where appropriate.
- Public forms should eventually use Cloudflare Turnstile or an approved equivalent.
- Authentication/session cookies should be HTTP-only.
- Production session cookies should be Secure.
- Use SameSite appropriately.
- Avoid exposing whether an unrelated email is registered.
- Avoid unnecessary collection of personal information.
- Marketing consent must be separately recorded and optional.
- Never commit secrets.
- Do not log secret invite codes.
- Avoid storing full IP addresses unless there is a documented need and privacy basis.
