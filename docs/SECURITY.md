# Security

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
