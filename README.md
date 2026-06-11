# Varno Fitness — website

Modern marketing site for **Varno Fitness** (Atlantic Highlands, NJ), aligned with partner brand [Isabella Fitness](https://isabellafitness.com/). Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, exported as a fully static site, and hosted on **GitHub Pages**. Contact-form submissions are delivered to `varnofitness@gmail.com` via [Formsubmit.co](https://formsubmit.co), which also auto-emails the customer a confirmation.

**Live URL:** https://varnofitness.com (`www` redirects to it; HTTPS enforced)
**Repository:** https://github.com/mrugesh1989/varno-fitness-web

## Documentation (start here if you are new to this stack)

| Doc | What it is for |
|-----|----------------|
| [docs/LLM_CONTEXT.md](docs/LLM_CONTEXT.md) | **Single briefing for any AI assistant** — stack, routes, deploy matrix, conventions. |
| [docs/FOLDER_GUIDE.md](docs/FOLDER_GUIDE.md) | **What each folder/file does** — where to edit copy, images, nav, SEO, forms. |
| [docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) | **Project summary** — scope, stack, decisions, what is not built. |
| [docs/HOSTING_AND_DNS.md](docs/HOSTING_AND_DNS.md) | **Step-by-step:** run locally + host on **varnofitness.com** via GitHub Pages. |

## Run locally (short)

```bash
cd varno-fitness-web
npm install
npm run dev
```

No env vars or secrets needed for local development.

Open **http://localhost:3000** in your browser. For more detail and troubleshooting, see [docs/HOSTING_AND_DNS.md](docs/HOSTING_AND_DNS.md) (Part A).

## Scripts

| Command | Description |
| -------- | ----------- |
| `npm run dev` | Development server |
| `npm run build` | Production static export (output in `out/`) |
| `npm run start` | Not used — site is static; serve `out/` with any static server if needed |
| `npm run lint` | ESLint |

## Environment variables

See [`.env.example`](.env.example).

- **No secret env vars are required.** The contact form posts directly to `https://formsubmit.co/varnofitness@gmail.com` (already activated for the live domain). To hide the gym email from the public bundle later, swap the URL in `src/components/ContactForm.tsx` for the random hash Formsubmit issues after verification.
- The deploy workflow sets two build-time vars: `NEXT_PUBLIC_BASE_PATH=""` and `NEXT_PUBLIC_SITE_URL=https://varnofitness.com`.

## Deploy

Every push to `main` builds the static export and publishes it to **https://varnofitness.com** via the workflow at `.github/workflows/deploy.yml` (~1–2 min). There is a single production environment — preview locally before pushing. Domain binding, DNS details, and the full revert-to-GoDaddy runbook are in [docs/HOSTING_AND_DNS.md](docs/HOSTING_AND_DNS.md).

### Email note

If you keep using **Gmail** (`varnofitness@gmail.com`), changing web DNS does not affect mail. Formsubmit relays directly to that inbox. If you later use **Google Workspace** / **Microsoft 365** on `@varnofitness.com`, add **MX** records per their docs and avoid removing MX when editing **A** records.

## Content and images

- Copy and business facts: [`src/content/site.ts`](src/content/site.ts)
- Image paths: [`src/content/media.ts`](src/content/media.ts) and files under `public/images/`
