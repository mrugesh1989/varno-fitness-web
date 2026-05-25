# Varno Fitness web — project context (for maintainers & AI)

Use this file to quickly understand **what exists** and **design decisions** without reading the whole repo.

## Product

- **Client:** Varno Fitness — hybrid gym in **Atlantic Highlands, NJ** (partnered with Isabella Fitness).
- **Goal:** Marketing site: programs, schedule link-out, about/location, contact / free assessment CTA.
- **Production URL (intended):** `https://varnofitness.com` (DNS points to GitHub Pages after deploy).

## Tech stack

- **Next.js 15** (App Router) compiled to a **static export** (`output: "export"`).
- **React 19** + **TypeScript**.
- **Tailwind CSS 3** — styling; custom `brand` palette in `tailwind.config.ts`.
- **Fonts:** Google `Oswald` (headings) + `DM_Sans` (body) via `next/font` in `layout.tsx`.
- **Contact form:** client-side POST → [Web3Forms](https://web3forms.com) → email to `varnofitness@gmail.com`. No backend / API routes in this repo.
- **SEO:** per-page `metadata`, `SiteJsonLd` (ExerciseGym schema), `sitemap.ts`, `robots.ts`, dynamic `opengraph-image.tsx`.

## What was built

1. **Pages:** `/`, `/programs`, `/schedule`, `/about`, `/contact`, plus `not-found` (404).
2. **Layout:** shared header/footer; dark “premium gym” aesthetic; orange accent.
3. **Content:** centralized in `src/content/site.ts`; image paths in `src/content/media.ts`.
4. **Assets:** `public/images/` — Varno mark/hero from legacy GoDaddy site; partner logo and program art from Isabella site for alignment (replaceable).
5. **Forms:** client `ContactForm` posts directly to Web3Forms with the `NEXT_PUBLIC_WEB3FORMS_KEY` access key, includes a hidden `botcheck` honeypot.
6. **No CMS:** edit TypeScript content files (Sanity/Contentful could be added later).

## Important files (by concern)

| Concern | File(s) |
|---------|---------|
| All copy & business facts | `src/content/site.ts` |
| Image file names / program image mapping | `src/content/media.ts` |
| Global SEO + icons + shell | `src/app/layout.tsx` |
| Home layout | `src/app/page.tsx` |
| Contact form (Web3Forms client) | `src/components/ContactForm.tsx` |
| Nav / logo | `src/components/Header.tsx` |
| Static export config | `next.config.ts` |
| Pages deploy workflow | `.github/workflows/deploy.yml` |
| Custom domain binding | `public/CNAME` |

## Out of scope (not implemented)

- Member login, scheduling inside this app (schedule links to Isabella-hosted page).
- Blog/CMS, payment, class booking.
- Plausible/GA4 (can add script via `layout.tsx` or third-party component).
- Server-side captcha (Turnstile removed when the API route was dropped; Web3Forms’ honeypot is the current spam control).

## Environment variables (production)

See `.env.example`. The only variable is `NEXT_PUBLIC_WEB3FORMS_KEY`, which must be set both in `.env.local` for development and in GitHub Actions secrets for production builds.

## Deploy shape

- **GitHub Pages** via `.github/workflows/deploy.yml`: `npm ci && npm run build` in `varno-fitness-web/`, upload `out/`, deploy.
- Custom domain **varnofitness.com**: enforced by `public/CNAME` and DNS pointing at GitHub Pages IPs.

## Related docs

- **AI / engineer briefing:** [LLM_CONTEXT.md](./LLM_CONTEXT.md)
- **Folder-by-folder:** [FOLDER_GUIDE.md](./FOLDER_GUIDE.md)
- **Human runbook:** [README.md](../README.md) (local run + hosting checklist)
