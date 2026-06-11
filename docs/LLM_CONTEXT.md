# LLM context — `varno-fitness-web`

Single-file briefing for any AI assistant or new engineer. Read this first; then
[`FOLDER_GUIDE.md`](./FOLDER_GUIDE.md) for per-file detail and
[`HOSTING_AND_DNS.md`](./HOSTING_AND_DNS.md) for the production runbook
(including the GoDaddy revert procedure).

## 1. One-paragraph summary

Marketing website for **Varno Fitness** (Atlantic Highlands, NJ — partnered
with Isabella Fitness). Six public pages, exported as a fully static Next.js
site, **live on the custom apex domain `https://varnofitness.com`**
(GitHub Pages; `www` 301-redirects to the apex; HTTPS enforced with an
auto-renewing Let's Encrypt cert). The contact form posts directly from the
browser to **Formsubmit.co**, which emails submissions to
`varnofitness@gmail.com` and sends an automatic confirmation back to the
customer via the `_autoresponse` field (form already activated for the live
domain). There is no backend, database, auth, CMS, or e-commerce in this
repository.

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 15** (App Router) with `output: "export"` |
| UI | **React 19** + **TypeScript 5** |
| Styling | **Tailwind CSS 3** (custom `brand.*` palette in `tailwind.config.ts`) |
| Fonts | Google `Oswald` (display) + `DM_Sans` (body) via `next/font` |
| Contact form | **Formsubmit.co** — native `<form action="https://formsubmit.co/varnofitness@gmail.com" method="POST">`, redirect back via `_next`, auto-reply via `_autoresponse`, honeypot `_honey` |
| Hosting | **GitHub Pages** on `varnofitness.com` via Actions workflow |
| SEO | per-page `metadata` + keywords, JSON-LD (`SiteJsonLd` ExerciseGym, `FaqJsonLd` FAQPage), dynamic OG image, `sitemap.ts`, `robots.ts`, `manifest.ts` |
| Lint | `eslint-config-next` (`next/core-web-vitals`) |
| Test | none committed |

Package manager: **npm** (lockfile committed).

## 3. Repository layout

```
varno-fitness-web/
├── .github/workflows/deploy.yml   build + deploy to GitHub Pages
├── public/
│   ├── CNAME                       binds Pages to varnofitness.com (do not delete)
│   ├── images/                     logos, hero, program tiles
│   └── gallery/                    gallery photos (pre-optimized: ≤1600px JPEG q80)
├── src/
│   ├── app/
│   │   ├── layout.tsx              global shell, fonts, default SEO, SiteJsonLd, StickyMobileCta
│   │   ├── page.tsx                /          (hero, mission, programs, amenities, reviews, FAQ, CTA)
│   │   ├── programs/page.tsx       /programs
│   │   ├── schedule/page.tsx       /schedule  (weekly class grid from site.ts)
│   │   ├── gallery/page.tsx        /gallery   (masonry grid of public/gallery)
│   │   ├── about/page.tsx          /about     (mission, hours, map embed)
│   │   ├── contact/page.tsx        /contact   (ContactForm variant="assessment")
│   │   ├── not-found.tsx           custom 404
│   │   ├── opengraph-image.tsx     dynamic OG image
│   │   ├── manifest.ts             /manifest.webmanifest
│   │   ├── sitemap.ts              /sitemap.xml
│   │   └── robots.ts               /robots.txt
│   ├── components/
│   │   ├── Header.tsx / Footer.tsx           shell
│   │   ├── ContactForm.tsx                   Formsubmit form (variants: default | assessment)
│   │   ├── SiteJsonLd.tsx                    ExerciseGym schema (geo, hours, reviews, areaServed)
│   │   ├── FaqSection.tsx / FaqJsonLd.tsx    visible FAQ accordion + FAQPage schema (home page)
│   │   ├── HeroSlideshow.tsx                 home hero imagery
│   │   ├── AmenitiesSection.tsx              facility cards w/ inline SVG icons
│   │   ├── GettingStartedSection.tsx         3-step onboarding
│   │   ├── GoogleReviewsSection.tsx          testimonials + rating (uses StarRating)
│   │   ├── StarRating.tsx                    star icons
│   │   ├── SocialLinks.tsx                   FB / IG links
│   │   └── StickyMobileCta.tsx               fixed bottom CTA bar, mobile only, hidden on /contact
│   └── content/
│       ├── site.ts                 ALL copy/facts: site info, seoKeywords, serviceAreas,
│       │                           hours, schedule, programs, amenities, faqs, testimonials
│       └── media.ts                image paths + gallery list (BASE_PATH-aware asset() helper)
├── docs/                           PROJECT_CONTEXT, FOLDER_GUIDE, HOSTING_AND_DNS, LLM_CONTEXT
├── next.config.ts                  static export + unoptimized images + optional basePath
├── tailwind.config.ts              brand colors and font families
├── tsconfig.json                   `@/*` alias → `src/*`
└── package.json
```

There are **no** `src/app/api/**` routes and **no** `src/lib/**` files — both
were removed when the site moved to a static export.

## 4. Routes and runtime characteristics

| Route | Type | Runtime requirement |
|-------|------|---------------------|
| `/`, `/programs`, `/schedule`, `/gallery`, `/about`, `/contact`, 404 | Static React pages prerendered into HTML | None |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | Generated at build | None |
| `/opengraph-image` | Generated at build | None |
| Contact submission | Native form `POST` → `https://formsubmit.co/varnofitness@gmail.com`, then redirect to `/contact/?sent=1` (success banner) | Third-party (Formsubmit.co) |

Everything in `out/` after `npm run build` is plain HTML/CSS/JS/images — safe
for any static CDN.

## 5. Content editing map

| Want to change… | Edit |
|------------------|------|
| Phone, address, hours, tagline, Google rating | `site` object in `src/content/site.ts` |
| SEO keywords / service areas | `seoKeywords`, `serviceAreas` in `src/content/site.ts` |
| Program list and pricing | `programs` in `src/content/site.ts` |
| Weekly class schedule | `schedule` in `src/content/site.ts` |
| FAQ questions/answers | `faqs` in `src/content/site.ts` (renders both the visible accordion AND the FAQPage schema — keep them as one source) |
| Testimonials | `testimonials` in `src/content/site.ts` |
| Gallery photos | Add file to `public/gallery/` (resize to ≤1600px first — see §9) and append to `gallery` in `src/content/media.ts` with a descriptive, location-aware `alt` |
| Other images | `public/images/*` and `media` in `src/content/media.ts` |
| Nav, CTA button | `src/components/Header.tsx` |
| Footer copy / links | `src/components/Footer.tsx` |
| Brand colors, fonts | `tailwind.config.ts`, `src/app/layout.tsx` |
| Per-page SEO | `metadata` export inside each `page.tsx` (each page has a unique local-SEO title/description; layout template appends `| Varno Fitness`) |
| Form fields / recipient | `src/components/ContactForm.tsx` (`GYM_INBOX` constant). Changing the recipient requires re-activating via the link Formsubmit emails on first submission. |

There is **no CMS** and **no database**. All copy ships in the bundle.

## 6. Environment variables

Read at build time, inlined into the static bundle. The workflow at
`.github/workflows/deploy.yml` sets them for production builds.

| Var | Production value | Purpose |
|-----|------------------|---------|
| `NEXT_PUBLIC_BASE_PATH` | `""` (empty — site serves from the apex root) | Drives `next.config.ts` basePath/assetPrefix and the `asset()` prefix in `src/content/media.ts`. Set to `/varno-fitness-web` only when reverting to the github.io project URL. |
| `NEXT_PUBLIC_SITE_URL` | `https://varnofitness.com` | Canonical URL; used for `<link rel="canonical">`, OG metadata, JSON-LD, sitemap, robots, and the form's `_next` redirect. |

No secrets exist in this repo. Formsubmit is keyless; the recipient email is
embedded in `src/components/ContactForm.tsx`.

## 7. Local commands

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build                # produces ./out (static export)
npm run lint                 # eslint
npx serve out                # preview the production build
```

Production-accurate local build:

```bash
NEXT_PUBLIC_BASE_PATH="" NEXT_PUBLIC_SITE_URL=https://varnofitness.com npm run build
```

Stale build errors (`ENOENT … .next/server/...`) → `rm -rf .next && npm run dev`.
Don't submit the contact form from localhost — Formsubmit validates against the
live site URL.

## 8. Deployment

GitHub Pages on the custom domain, automated by `.github/workflows/deploy.yml`:

1. Push to `main` (or trigger the workflow manually) → installs deps, builds
   with the env vars above, uploads `out/`, deploys. ~1–2 minutes.
2. **There is only one environment (production).** Every push to `main` goes
   straight to `varnofitness.com`. Preview locally before pushing.
3. Domain binding: `public/CNAME` (copied into `out/` at build) + the Pages
   `cname` set via API. **Never delete `public/CNAME`** unless intentionally
   reverting to the project URL.
4. HTTPS enforced; Let's Encrypt cert auto-renews. DNS lives at GoDaddy
   (apex `A` → four GitHub Pages IPs, `www` CNAME → `mrugesh1989.github.io`).
5. Rollback: git tag `pre-custom-domain-projecturl` marks the last
   project-URL state; full revert runbook (repo + Pages + exact GoDaddy DNS
   values) is in `HOSTING_AND_DNS.md` → "Rolling back".

If GitHub Pages ever becomes unsuitable (need ISR, server logic, auth), the
same `out/` artifact runs on any static CDN (Cloudflare Pages, Netlify,
S3 + CloudFront). Switching to SSR means removing `output: "export"` from
`next.config.ts` and choosing a Node host.

## 9. Constraints and gotchas

- No member login, scheduling, payments, or bookings inside the app.
- No CMS, blog, or analytics wired in.
- No tests; behavior is verified via `npm run lint` + `npm run build` and
  manual checks.
- **Images:** `images: { unoptimized: true }` (required for static export), so
  Next does NOT resize anything. Files must be pre-optimized before committing —
  gallery photos are resized to ≤1600px JPEG q80 (`sips -Z 1600 -s format jpeg
  -s formatOptions 80 file --out file`). Committing multi-MB originals tanks
  performance, especially Safari (slow huge-JPEG decode).
- Spam control is the hidden `_honey` honeypot plus Formsubmit's own
  reCAPTCHA challenge. No server-side captcha.
- Formsubmit dependency: if `formsubmit.co` is down (e.g. Cloudflare 521),
  the form fails but the site stays up; phone/email remain visible on
  /contact. Consider Web3Forms/Formspree only if outages become frequent.
- Schedule page renders the weekly grid inline from `src/content/site.ts`.

## 10. Coding conventions

- TypeScript strict; functional React components; no class components.
- Server components by default; `"use client"` only where needed
  (`ContactForm`, `StickyMobileCta`, slideshow/interactive bits).
- Tailwind utility classes; avoid ad-hoc CSS unless added to `globals.css`.
- Import alias `@/*` → `src/*`.
- Keep all copy in `src/content/site.ts`; do not hard-code strings in pages.
- Structured data lives in dedicated `*JsonLd.tsx` components; visible content
  and schema must stay in sync (both read from `src/content/site.ts`).
- Anything that needs a real secret must move to a separate service
  (Cloudflare Worker, etc.) — it cannot live in this repo because the site is
  static and shipped to the browser.
