# Deployment

## Hosting

Hostinger managed Node.js Web App.

Production domain:

`https://hamzxl868.com`

## Runtime

Node.js 22.x.

## Source Control

GitHub.

Production branch:

`main`

## Expected Deployment Workflow

Codex/local development
-> Git
-> GitHub
-> Hostinger
-> production domain

Production application must support:

```bash
npm install
npm run build
```

Environment variables must be configured in Hostinger rather than committed.

The project must not rely on Vercel-specific runtime features.

## Future Deployment Checklist

- application builds
- domain connected
- HTTPS active
- canonical domain configured
- www/non-www behavior configured
- environment variables configured
- home page works
- navigation works
- CMA route works
- BeatStars embeds work
- contact form works
- private storage works
- signed downloads work
- analytics works
- 404 works
- sitemap works
- robots.txt works
- social preview image works
