# DW Portfolio

This repository is a production-oriented developer portfolio starter built with Next.js App Router, React, TypeScript, local SVG project artwork, dynamic case-study routes, accessible navigation, SEO metadata, and a contact endpoint.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize first

All portfolio content is centralized in [lib/data.ts](lib/data.ts).

Update these files before launch:

- [app/layout.tsx](app/layout.tsx) for metadata, canonical URLs, sitemap links, robots links, and structured data
- [app/sitemap.ts](app/sitemap.ts) for the sitemap route
- [app/robots.ts](app/robots.ts) for crawler instructions
- [public/projects/](public/projects) for project artwork
- [public/resume.pdf](public/resume.pdf) for the downloadable resume
- `.env.local` for Resend settings copied from `.env.example`

## Contact form

The contact route validates input and sends mail through the Resend REST API when configured. In development without mail credentials, the form falls back to a demo confirmation and logs the submission server-side.

## Deployment

Push the repository to GitHub, import it into Vercel, add the contact environment variables, update the production domain in metadata, and deploy.

## Build

```bash
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and configure the Resend variables before enabling live contact delivery.
