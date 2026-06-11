# Varno Fitness web — project context (for maintainers & AI)

Use this file to quickly understand **what exists** and **design decisions** without reading the whole repo.

## Product

- **Client:** Varno Fitness — hybrid gym in **Atlantic Highlands, NJ** (partnered with Isabella Fitness).
- **Goal:** Marketing site: programs, schedule, gallery, about/location, contact / free assessment CTA, local SEO.
- **Live URL:** `https://varnofitness.com` (GitHub Pages, custom apex domain; `www` redirects to it; HTTPS enforced). DNS lives at GoDaddy. Revert runbook: `HOSTING_AND_DNS.md` → "Rolling back".

## Tech stack

- **Next.js 15** (App Router) compiled to a **static export** (`output: "export"`).
- **React 19** + **TypeScript**.
- **Tailwind CSS 3** — styling; custom `brand` palette in `tailwind.config.ts`.
- **Fonts:** Google `Oswald` (headings) + `DM_Sans` (body) via `next/font` in `layout.tsx`.
- **Contact form:** native form POST → [Formsubmit.co](https://formsubmit.co) → email to `varnofitness@gmail.com` + auto-confirmation back to the customer. Already activated for the live domain. No backend / API routes in this repo.
- **SEO:** per-page `metadata` + local keywords, `SiteJsonLd` (ExerciseGym schema), `FaqJsonLd` (FAQPage schema), `sitemap.ts`, `robots.ts`, `manifest.ts`, dynamic `opengraph-image.tsx`.

## What was built

1. **Pages:** `/`, `/programs`, `/schedule`, `/gallery`, `/about`, `/contact`, plus `not-found` (404).
2. **Layout:** shared header/footer; dark “premium gym” aesthetic; orange accent; sticky mobile CTA bar (`StickyMobileCta`).
3. **Content:** centralized in `src/content/site.ts` (incl. `seoKeywords`, `serviceAreas`, `faqs`); image paths in `src/content/media.ts`.
4. **Assets:** `public/images/` (logos, hero, program tiles) and `public/gallery/` (photos pre-optimized to ≤1600px JPEG — Next does not resize in static export).
5. **Forms:** `ContactForm` posts natively to `https://formsubmit.co/varnofitness@gmail.com`; `_next` redirects back to `/contact/?sent=1` for the success banner; `_autoresponse` confirms to the customer; hidden `_honey` field for spam control.
6. **Local SEO:** FAQ accordion + FAQPage schema on the home page, unique keyword-rich titles/descriptions per page, location-aware gallery alt text.
7. **No CMS:** edit TypeScript content files (Sanity/Contentful could be added later).

## Important files (by concern)

| Concern | File(s) |
|---------|---------|
| All copy & business facts (incl. FAQs, keywords) | `src/content/site.ts` |
| Image file names / gallery list / program image mapping | `src/content/media.ts` |
| Global SEO + icons + shell | `src/app/layout.tsx` |
| Home layout | `src/app/page.tsx` |
| Contact form (Formsubmit) | `src/components/ContactForm.tsx` |
| Structured data | `src/components/SiteJsonLd.tsx`, `src/components/FaqJsonLd.tsx` |
| Nav / logo | `src/components/Header.tsx` |
| Static export config | `next.config.ts` |
| Pages deploy workflow | `.github/workflows/deploy.yml` |
| Custom domain binding | `public/CNAME` (do not delete) |

## Out of scope (not implemented)

- Member login, class booking inside this app (schedule page renders the weekly grid from `site.ts` but has no live booking).
- Blog/CMS, payment, class booking.
- Plausible/GA4 (can add script via `layout.tsx` or third-party component).
- Server-side captcha (Turnstile removed when the API route was dropped; a Formsubmit `_honey` honeypot is the current spam control).

## Environment variables (production)

See `.env.example`. **No secrets.** The workflow sets two build-time vars: `NEXT_PUBLIC_BASE_PATH=""` and `NEXT_PUBLIC_SITE_URL=https://varnofitness.com`. Set `BASE_PATH=/varno-fitness-web` only when reverting to the github.io project URL.

## Deploy shape

- **GitHub Pages** via `.github/workflows/deploy.yml`: `npm ci && npm run build`, upload `out/`, deploy. Every push to `main` goes straight to production (~1–2 min).
- Custom domain **varnofitness.com**: enforced by `public/CNAME` + the Pages `cname` API setting, with GoDaddy DNS pointing at the four GitHub Pages IPs (`www` CNAME → `mrugesh1989.github.io`).
- Rollback: tag `pre-custom-domain-projecturl` + runbook in `HOSTING_AND_DNS.md`.

## Related docs

- **AI / engineer briefing:** [LLM_CONTEXT.md](./LLM_CONTEXT.md)
- **Folder-by-folder:** [FOLDER_GUIDE.md](./FOLDER_GUIDE.md)
- **Human runbook:** [README.md](../README.md) (local run + hosting checklist)
