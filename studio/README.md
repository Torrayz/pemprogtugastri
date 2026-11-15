# TORRAYZ / STUDIO - Professional Edition

A portfolio for **Tri Puji Antoro (Torrayz)**, designed as an independent creative/developer studio.

**Architecture:** Next.js 16 App Router, React 19, TypeScript, Motion for React, GSAP/ScrollTrigger, React Three Fiber / Three.js and plain custom CSS.

## Features

- Cinematic hero with an interactive WebGL chrome monogram. Static SVG fallback for mobile, reduced-motion preferences, and devices without WebGL.
- Responsive navbar and mobile menu, animated scroll progress, Motion reveals, and GSAP scroll-driven typography.
- Four selected case studies and six complete project detail pages.
- A live, filterable, searchable archive of **public** GitHub repositories for `Torrayz`.
- Real GitHub avatar shown without face replacement or alteration, plus a new contact form and private owner inbox.
- Contact form stores incoming requests in Supabase with RLS, basic per-email throttling, and browser spam honeypot.
- More cinematic Motion-powered letter reveals, magnetic buttons, cursor glow, and 3D tilting project cards.
- SEO metadata, sitemap, robots and accessibility considerations.

## Local start

Requires Node.js 22 or higher and npm.

```sh
npm install
npm run dev
npm run typecheck
npm run test
npm run build
```

Visit http://localhost:3000.

## GitHub public archive

`GET /api/github` uses the public, unauthenticated GitHub REST API, returns only public repositories owned by Torrayz, and caches for one hour. If GitHub is unavailable or rate-limited, the frontend displays a clearly marked curated fallback. No private repository details or server credentials are included.

## Hosting

Deploy on Vercel with **Root Directory** set to `studio` within `Torrayz/pemprogtugastri`. Framework `Next.js`, Node.js `22.x`, build command `npm run build`. Supabase project `torray-workspace` is used for private contact messages. The only client variables are public Supabase URL and publishable key; never place a service-role key in this website. Keep the older root-level portfolio untouched.

## Security / privacy

- This site is public and only aggregates public GitHub metadata.
- Do not add an authenticated GitHub API token to browser-side code.
- No NIM, private email address, or non-public repository contents are shown.
- Demo case-study cards are **art-directed UI illustrations**, not real application screenshots. Official repository and live links are provided where known.
- 3D rendering is disabled for reduced-motion settings and narrow devices.

## Design concept

Based on **TORRAYZ / STUDIO - Professional Edition**, the approved direction from the design collection: dark navy, polished chrome T, cool blue lighting, lime action buttons, large editorial type, and a technology-forward archive.


## Contact inbox and environment

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Vercel to the published project values. The database migration `006_torrayz_studio_contact_inbox` creates `portfolio_inquiries` and enables RLS. Public visitors can only insert four message fields; authenticated studio owners can read and mark messages reviewed. A trigger limits repeat submissions from the same email address.

- Public form: `/contact`
- Private reader: `/inbox` (Supabase email/password login; only accounts with `TORRAYZ_STUDIO` owner/admin membership can read)
- Form submission does **not** send email notifications; owners must check the inbox.

The site does not publish a private email address. The avatar is sourced from GitHub account ID 152534285 at `avatars.githubusercontent.com`, and remains a user-controlled GitHub image.