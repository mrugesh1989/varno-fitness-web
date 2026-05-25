# Folder and file guide

Short map of the **varno-fitness-web** project. Use this when you need to change copy, layout, images, SEO, or the contact form.

## Root (project root)

| Path | Purpose |
|------|---------|
| `package.json` | Dependencies and npm scripts (`dev`, `build`, `start`, `lint`). |
| `package-lock.json` | Locked dependency versions (commit this). |
| `next.config.ts` | Next.js settings (currently minimal). |
| `tsconfig.json` | TypeScript compiler options and `@/*` import alias → `src/*`. |
| `tailwind.config.ts` | Tailwind theme tokens (`brand.*` colors, font families). |
| `postcss.config.mjs` | Wires Tailwind into the CSS build. |
| `.eslintrc.json` | ESLint rules (`next/core-web-vitals`). |
| `.env.example` | Template for secrets (copy to `.env.local`; never commit real keys). |
| `.gitignore` | Ignores `node_modules`, `.next`, `.env*`, etc. |
| `README.md` | Quick start, env vars, hosting overview, links to deeper docs. |

## `public/` — static files

Files here are served as-is at the **root URL**. Example: `public/images/logo.png` → `https://yoursite.com/images/logo.png`.

| Path | Purpose |
|------|---------|
| `public/images/` | Logos and photos used by the UI. Primary Varno logo file: **`varno_fitness_logo.webp`** (referenced as `media.varnoMark` in code). Replace that file to rebrand; or change the path in `src/content/media.ts`. |

## `src/app/` — pages and routes (Next.js App Router)

Each `page.tsx` is a **route**. `layout.tsx` wraps all pages. Special files generate metadata or images. The site is exported as fully static (`output: "export"` in `next.config.ts`), so there are no API routes.

| Path | Purpose |
|------|---------|
| `layout.tsx` | Global HTML shell: fonts, default SEO metadata, favicon/icons, wraps every page with `Header` + `Footer` + `SiteJsonLd`. |
| `globals.css` | Global styles and Tailwind layers. |
| `page.tsx` | **Home** (`/`): hero, partner strip, mission, programs preview, testimonials, visit/hours. |
| `programs/page.tsx` | **Programs** (`/programs`): pricing and bullets per program. |
| `schedule/page.tsx` | **Schedule** (`/schedule`): link out to official calendar on Isabella’s site. |
| `about/page.tsx` | **About** (`/about`): mission, hours, Google Map embed. |
| `contact/page.tsx` | **Contact** (`/contact`): address/phone + `ContactForm`. |
| `not-found.tsx` | Custom **404** page. |
| `opengraph-image.tsx` | Generates the **social preview image** (OG) for shares; edit layout/colors/text there. |
| `sitemap.ts` | Machine-readable **sitemap** for search engines (`/sitemap.xml`). |
| `robots.ts` | **robots.txt** rules (`/robots.txt`). |

## `src/components/` — reusable UI

| File | Purpose |
|------|---------|
| `Header.tsx` | Top nav, mobile menu, logo + site name, “Free assessment” CTA. Client component (`"use client"`) for menu state. |
| `Footer.tsx` | Address, hours, partner line, links. |
| `ContactForm.tsx` | Client form: POSTs JSON directly to `https://api.web3forms.com/submit` using `NEXT_PUBLIC_WEB3FORMS_KEY`. Uses a hidden `botcheck` honeypot for spam control. |
| `SiteJsonLd.tsx` | Injects **JSON-LD** (structured data) for search engines (gym / local business). |

## `src/content/` — editable copy and asset paths

| File | Purpose |
|------|---------|
| `site.ts` | **Single source of truth** for business facts: name, tagline, address, phone, email, hours, partner URLs, program text, testimonials. **Start here** for wording or contact details. |
| `media.ts` | Paths to images under `/public/images` and helper `programCardImage(slug)` for program tiles. |

---

### Typical change checklist

| You want to… | Edit… |
|--------------|--------|
| Change phone, address, hours, tagline | `src/content/site.ts` |
| Change logos / hero / program images | Replace files in `public/images/` and/or paths in `src/content/media.ts` |
| Change home layout or sections | `src/app/page.tsx` |
| Change nav links or header | `src/components/Header.tsx` |
| Change footer | `src/components/Footer.tsx` |
| Change form fields or recipient | `src/components/ContactForm.tsx` — fields live in the JSX, and the recipient email is the address inside the Formsubmit URL at the top of the file. Changing the recipient requires confirming the new address by clicking the link Formsubmit emails on the first submission. |
| Change page titles for Google | `metadata` export in each `page.tsx` and/or `layout.tsx` |
| Change brand colors / fonts | `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx` (fonts) |
