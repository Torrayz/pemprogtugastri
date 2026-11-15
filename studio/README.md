# TORRAYZ / STUDIO - Professional Edition

A portfolio for **Tri Puji Antoro (Torrayz)**, designed as an independent creative/developer studio.

**Architecture:** Next.js 16 App Router, React 19, TypeScript, Motion for React, GSAP/ScrollTrigger, React Three Fiber / Three.js and plain custom CSS.

## Features

- Cinematic hero with an interactive WebGL chrome monogram. Static SVG fallback for mobile, reduced-motion preferences, and devices without WebGL.
- Responsive navbar and mobile menu, animated scroll progress, Motion reveals, and GSAP scroll-driven typography.
- Four selected case studies and six complete project detail pages.
- A live, filterable, searchable archive of **public** GitHub repositories for `Torrayz`.
- Developer background, experimental lab, and public GitHub contact links.
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

Deploy on Vercel with **Root Directory** set to `studio` within `Torrayz/pemprogtugastri`. Framework `Next.js`, Node.js `22.x`, build command `npm run build`. No Supabase or environment secrets are required for v1. Keep the older root-level portfolio untouched.

## Security / privacy

- This site is public and only aggregates public GitHub metadata.
- Do not add an authenticated GitHub API token to browser-side code.
- No NIM, private email address, or non-public repository contents are shown.
- Demo case-study cards are **art-directed UI illustrations**, not real application screenshots. Official repository and live links are provided where known.
- 3D rendering is disabled for reduced-motion settings and narrow devices.

## Design concept

Based on **TORRAYZ / STUDIO - Professional Edition**, the approved direction from the design collection: dark navy, polished chrome T, cool blue lighting, lime action buttons, large editorial type, and a technology-forward archive.