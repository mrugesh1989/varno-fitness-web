# Folder and file guide

Short map of the **varno-fitness-web** project. Use this when you need to change copy, layout, images, SEO, or the contact form.

## Root (project root)

| Path | Purpose |
|------|---------|
| `package.json` | Dependencies and npm scripts (`dev`, `build`, `start`, `lint`). |
| `package-lock.json` | Locked dependency versions (commit this). |
| `next.config.ts` | Next.js settings: `output: "export"`, unoptimized images, optional `basePath` from `NEXT_PUBLIC_BASE_PATH`. |
| `tsconfig.json` | TypeScript compiler options and `@/*` import alias → `src/*`. |
| `tailwind.config.ts` | Tailwind theme tokens (`brand.*` colors, font families). |
| `postcss.config.mjs` | Wires Tailwind into the CSS build. |
| `.eslintrc.json` | ESLint rules (`next/core-web-vitals`). |
| `.env.example` | Documents the (optional, non-secret) build-time vars and the Formsubmit setup. No secrets exist in this project. |
| `.gitignore` | Ignores `node_modules`, `.next`, `.env*`, etc. |
| `README.md` | Quick start, env vars, hosting overview, links to deeper docs. |

## `public/` — static files

Files here are served as-is at the **root URL**. Example: `public/images/logo.png` → `https://yoursite.com/images/logo.png`.

| Path | Purpose |
|------|---------|
| `public/CNAME` | Binds GitHub Pages to `varnofitness.com`. **Do not delete** unless reverting to the project URL. |
| `public/images/` | Logos and photos used by the UI. Primary Varno logo file: **`varno_fitness_logo.webp`** (referenced as `media.varnoMark` in code). Replace that file to rebrand; or change the path in `src/content/media.ts`. |
| `public/gallery/` | Gallery photos. Pre-optimize before committing (≤1600px JPEG q80, e.g. `sips -Z 1600 -s format jpeg -s formatOptions 80 file --out file`) — the static export does not resize images. Register each photo in the `gallery` array in `src/content/media.ts`. |

## `src/app/` — pages and routes (Next.js App Router)

Each `page.tsx` is a **route**. `layout.tsx` wraps all pages. Special files generate metadata or images. The site is exported as fully static (`output: "export"` in `next.config.ts`), so there are no API routes.

| Path | Purpose |
|------|---------|
| `layout.tsx` | Global HTML shell: fonts, default SEO metadata, favicon/icons, wraps every page with `Header` + `Footer` + `SiteJsonLd` + `StickyMobileCta`. |
| `globals.css` | Global styles and Tailwind layers. |
| `page.tsx` | **Home** (`/`): hero + slideshow, mission + service areas, getting started, programs preview, amenities, Google reviews, FAQ (+ schema), final CTA. |
| `programs/page.tsx` | **Programs** (`/programs`): pricing and bullets per program. |
| `schedule/page.tsx` | **Schedule** (`/schedule`): weekly class grid rendered from `schedule` in `src/content/site.ts`, plus kids-class info. |
| `gallery/page.tsx` | **Gallery** (`/gallery`): masonry grid of `public/gallery` photos from the `gallery` array in `src/content/media.ts`. |
| `about/page.tsx` | **About** (`/about`): mission, hours, Google Map embed. |
| `contact/page.tsx` | **Contact** (`/contact`): highlighted free-assessment form (`ContactForm variant="assessment"`) + direct contact sidebar. |
| `not-found.tsx` | Custom **404** page. |
| `opengraph-image.tsx` | Generates the **social preview image** (OG) for shares; edit layout/colors/text there. |
| `manifest.ts` | Web app **manifest** (`/manifest.webmanifest`): name, theme color, icon. |
| `sitemap.ts` | Machine-readable **sitemap** for search engines (`/sitemap.xml`). |
| `robots.ts` | **robots.txt** rules (`/robots.txt`). |

## `src/components/` — reusable UI

| File | Purpose |
|------|---------|
| `Header.tsx` | Top nav, mobile menu, logo + site name, “Free assessment” CTA. Client component (`"use client"`) for menu state. |
| `Footer.tsx` | Location & contact details, hours, service-area line, links. |
| `ContactForm.tsx` | Client form: native POST to `https://formsubmit.co/varnofitness@gmail.com` (recipient = `GYM_INBOX` constant). `_next` redirects back to `/contact/?sent=1` for the success banner; `_autoresponse` emails the customer; hidden `_honey` honeypot for spam. Supports `variant="default" | "assessment"`. |
| `SiteJsonLd.tsx` | **ExerciseGym JSON-LD**: geo, hours, reviews, areaServed — for local search. |
| `FaqSection.tsx` | Visible FAQ accordion (home page); reads `faqs` from `src/content/site.ts`. |
| `FaqJsonLd.tsx` | **FAQPage JSON-LD** matching `FaqSection` — keep both fed by the same `faqs` array. |
| `HeroSlideshow.tsx` | Rotating hero imagery on the home page. |
| `AmenitiesSection.tsx` | Facility cards with inline SVG icons. |
| `GettingStartedSection.tsx` | 3-step onboarding strip. |
| `GoogleReviewsSection.tsx` | Testimonials + rating display (uses `StarRating`). |
| `StarRating.tsx` | Star icon row. |
| `SocialLinks.tsx` | Facebook / Instagram links. |
| `StickyMobileCta.tsx` | Fixed bottom CTA bar on phones; hidden on `/contact` and md+ screens. |

## `src/content/` — editable copy and asset paths

| File | Purpose |
|------|---------|
| `site.ts` | **Single source of truth** for business facts: name, tagline, address, phone, email, hours, schedule, programs, amenities, FAQs, testimonials, `seoKeywords`, `serviceAreas`. **Start here** for wording or contact details. |
| `media.ts` | Paths to images under `/public/images`, the `gallery` array (photo + alt text), and helper `programCardImage(slug)`. Uses a BASE_PATH-aware `asset()` helper so images resolve under both root and project-URL deployments. |

---

### Typical change checklist

| You want to… | Edit… |
|--------------|--------|
| Change phone, address, hours, tagline | `src/content/site.ts` |
| Change FAQs (visible + schema) | `faqs` in `src/content/site.ts` |
| Add/remove gallery photos | `public/gallery/` (pre-optimized) + `gallery` in `src/content/media.ts` |
| Change logos / hero / program images | Replace files in `public/images/` and/or paths in `src/content/media.ts` |
| Change home layout or sections | `src/app/page.tsx` |
| Change nav links or header | `src/components/Header.tsx` |
| Change footer | `src/components/Footer.tsx` |
| Change form fields or recipient | `src/components/ContactForm.tsx` — fields live in the JSX, and the recipient email is the address inside the Formsubmit URL at the top of the file. Changing the recipient requires confirming the new address by clicking the link Formsubmit emails on the first submission. |
| Change page titles for Google | `metadata` export in each `page.tsx` and/or `layout.tsx` |
| Change brand colors / fonts | `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx` (fonts) |
