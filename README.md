# Varno Fitness — website

Modern marketing site for **Varno Fitness** (Atlantic Highlands, NJ), aligned with partner brand [Isabella Fitness](https://isabellafitness.com/). Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, exported as a fully static site, and hosted on **GitHub Pages**. Contact-form submissions are delivered to `varnofitness@gmail.com` via [Web3Forms](https://web3forms.com).

**Live URL:** https://mrugesh1989.github.io/varno-fitness-web/
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
cp .env.example .env.local
# Edit .env.local: set NEXT_PUBLIC_WEB3FORMS_KEY so the form can deliver.
npm run dev
```

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

- **`NEXT_PUBLIC_WEB3FORMS_KEY`** — Access key from [Web3Forms](https://web3forms.com). The form POSTs directly to `https://api.web3forms.com/submit`; the key is rate-limited per inbox and is safe to ship in the client bundle. The key must also be added to GitHub Actions secrets so production builds receive it.

## Deploy

Every push to `main` builds the static export and publishes it via the workflow at `.github/workflows/deploy.yml`. The site currently serves from the GitHub project-page URL (`https://mrugesh1989.github.io/varno-fitness-web/`). To switch to the custom domain `varnofitness.com` later, follow [docs/HOSTING_AND_DNS.md](docs/HOSTING_AND_DNS.md).

### Email note

If you keep using **Gmail** (`varnofitness@gmail.com`), changing web DNS does not affect mail. Web3Forms delivers to that inbox directly via SMTP. If you later use **Google Workspace** / **Microsoft 365** on `@varnofitness.com`, add **MX** records per their docs and avoid removing MX when editing **A** records.

## Content and images

- Copy and business facts: [`src/content/site.ts`](src/content/site.ts)
- Image paths: [`src/content/media.ts`](src/content/media.ts) and files under `public/images/`
