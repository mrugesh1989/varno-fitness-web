# LLM context — `varno-fitness-web`

Single-file briefing for any AI assistant or new engineer. Read this first; then
[`FOLDER_GUIDE.md`](./FOLDER_GUIDE.md) for per-file detail and
[`HOSTING_AND_DNS.md`](./HOSTING_AND_DNS.md) for the production runbook.

## 1. One-paragraph summary

Marketing website for **Varno Fitness** (Atlantic Highlands, NJ — partnered
with Isabella Fitness). Five public pages, exported as a fully static Next.js
site, currently hosted on **GitHub Pages** at
`https://mrugesh1989.github.io/varno-fitness-web/` (custom domain
`varnofitness.com` is planned but DNS hasn't been switched yet). The contact
form posts directly from the browser to **Formsubmit.co**, which emails
submissions to `varnofitness@gmail.com` and sends an automatic confirmation
back to the customer via the `_autoresponse` field. There is no backend,
database, auth, CMS, or e-commerce in this repository.

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 15** (App Router) with `output: "export"` |
| UI | **React 19** + **TypeScript 5.7** |
| Styling | **Tailwind CSS 3** (custom `brand.*` palette in `tailwind.config.ts`) |
| Fonts | Google `Oswald` (display) + `DM_Sans` (body) via `next/font` |
| Contact form | **Formsubmit.co** (`https://formsubmit.co/ajax/varnofitness@gmail.com`, client-side `fetch`, auto-reply via `_autoresponse`) |
| Hosting | **GitHub Pages** via Actions workflow |
| SEO | per-page `metadata`, JSON-LD (`SiteJsonLd`), dynamic OG image, `sitemap.ts`, `robots.ts` |
| Lint | `eslint-config-next` (`next/core-web-vitals`) |
| Test | none committed |

Package manager: **npm** (lockfile committed).

## 3. Repository layout

```
varno-fitness-web/
├── .github/workflows/deploy.yml   build + deploy to GitHub Pages
├── public/
│   ├── CNAME                       binds Pages to varnofitness.com
│   └── images/                     static logos, hero, program tiles
├── src/
│   ├── app/
│   │   ├── layout.tsx              global shell, fonts, default SEO
│   │   ├── page.tsx                /
│   │   ├── programs/page.tsx       /programs
│   │   ├── schedule/page.tsx       /schedule (links to Isabella calendar)
│   │   ├── about/page.tsx          /about
│   │   ├── contact/page.tsx        /contact (renders ContactForm)
│   │   ├── not-found.tsx           custom 404
│   │   ├── opengraph-image.tsx     dynamic OG image
│   │   ├── sitemap.ts              /sitemap.xml
│   │   └── robots.ts               /robots.txt
│   ├── components/                 Header, Footer, ContactForm, SiteJsonLd
│   └── content/                    site.ts (copy/facts), media.ts (image paths)
├── docs/                           PROJECT_CONTEXT, FOLDER_GUIDE, HOSTING_AND_DNS, LLM_CONTEXT
├── next.config.ts                  static export + unoptimized images
├── tailwind.config.ts              brand colors and font families
├── tsconfig.json                   `@/*` alias → `src/*`
└── package.json
```

There are **no** `src/app/api/**` routes and **no** `src/lib/**` files in this
build — both were removed when the site moved to a static export.

## 4. Routes and runtime characteristics

| Route | Type | Runtime requirement |
|-------|------|---------------------|
| `/`, `/programs`, `/schedule`, `/about`, `/contact`, `/not-found` | Static React pages prerendered into HTML | None |
| `/sitemap.xml`, `/robots.txt` | Generated at build | None |
| `/opengraph-image` | Generated at build | None |
| Contact submission | Browser `POST` → `https://formsubmit.co/ajax/varnofitness@gmail.com` | Third-party (Formsubmit.co) |

Everything in `out/` after `npm run build` is plain HTML/CSS/JS/images — safe
for any static CDN.

## 5. Content editing map

| Want to change… | Edit |
|------------------|------|
| Phone, address, hours, tagline, partner URLs | `src/content/site.ts` |
| Program list and pricing | `programs` export in `src/content/site.ts` |
| Testimonials | `testimonials` export in `src/content/site.ts` |
| Image files / mapping | `public/images/*` and `src/content/media.ts` |
| Nav, CTA button | `src/components/Header.tsx` |
| Footer copy / links | `src/components/Footer.tsx` |
| Brand colors, fonts | `tailwind.config.ts`, `src/app/layout.tsx` |
| Per-page SEO | `metadata` export inside each `page.tsx` |
| Form fields | `src/components/ContactForm.tsx` |
| Email recipient | The email in the POST URL inside `src/components/ContactForm.tsx` (currently `varnofitness@gmail.com`). Confirmed once by clicking the link Formsubmit sends on the first submission. |

There is **no CMS** and **no database**. All copy ships in the bundle.

## 6. Environment variables

Read at build time, inlined into the static bundle. The workflow at
`.github/workflows/deploy.yml` sets them for production builds.

| Var | Required? | Purpose |
|-----|-----------|---------|
| `NEXT_PUBLIC_BASE_PATH` | yes for GitHub project-page URL | Currently `/varno-fitness-web`. Set empty (or unset) when serving from a root domain like `varnofitness.com`. Drives `next.config.ts` basePath + asset prefix + the prefix applied to `/images/*` in `src/content/media.ts`. |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical site URL; used for `<link rel="canonical">`, OG metadata, JSON-LD, sitemap, and robots. Default in code: the github.io URL. |

No form-related secrets exist. Formsubmit is keyless; the recipient email is
embedded in the POST URL inside `src/components/ContactForm.tsx`.

## 7. Local commands

```bash
npm install
cp .env.example .env.local
# fill in NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev                  # http://localhost:3000
npm run build                # produces ./out (static export)
npm run lint                 # eslint
npx serve out                # preview the production build
```

Stale build errors (`ENOENT … .next/server/...`) → `rm -rf .next && npm run dev`.

## 8. Deployment

GitHub Pages, automated by `.github/workflows/deploy.yml`:

1. Push to `main` (or trigger the workflow manually).
2. Workflow installs deps, runs `npm run build` with `NEXT_PUBLIC_BASE_PATH`,
   `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_WEB3FORMS_KEY` set, uploads `out/`
   as the Pages artifact, deploys.
3. Repo secret: `NEXT_PUBLIC_WEB3FORMS_KEY` (set via
   `gh secret set NEXT_PUBLIC_WEB3FORMS_KEY`).
4. Pages source: GitHub Actions; HTTPS enforced.

To move to the custom domain `varnofitness.com` later, follow
`HOSTING_AND_DNS.md` Part C — clear the two `NEXT_PUBLIC_BASE_PATH` /
`NEXT_PUBLIC_SITE_URL` env vars in the workflow, restore `public/CNAME`, set
the Pages `cname` via API, then update DNS at the registrar.

If GitHub Pages ever becomes unsuitable (need ISR, on-request server logic,
authenticated endpoints), the same `out/` artifact runs on any static CDN
(Cloudflare Pages, Netlify, S3 + CloudFront). Switching back to SSR means
removing `output: "export"` from `next.config.ts` and choosing a Node host
(Vercel, Netlify, AWS Amplify, Docker).

## 9. Constraints and out-of-scope

- No member login, scheduling, payments, or bookings inside the app.
- No CMS, blog, or analytics wired in.
- No tests; behavior is verified manually and via `npm run build` + `npm run lint`.
- Schedule page renders the weekly class grid inline from `src/content/site.ts` (still credits Isabella Fitness as the source of truth in a footer note).
- No server-side captcha. Spam control is a hidden `_honey` honeypot field
  (Formsubmit's built-in convention); add Formsubmit's reCAPTCHA / hCaptcha
  fields if spam becomes a problem.

## 10. Coding conventions

- TypeScript strict; functional React components; no class components.
- Tailwind utility classes; avoid ad-hoc CSS unless added to `globals.css`.
- Import alias `@/*` → `src/*`.
- Keep all copy in `src/content/site.ts`; do not hard-code strings in pages.
- Anything that needs a real secret must move to a separate service
  (Cloudflare Worker, etc.) — it cannot live in this repo because the site is
  static and shipped to the browser.
