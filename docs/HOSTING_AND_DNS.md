# Run locally and host on `varnofitness.com`

## Part A — Run on your computer

### Prerequisites

- **Node.js** (includes `npm`). Install via [nodejs.org](https://nodejs.org/) or Homebrew: `brew install node`.
- A **Web3Forms** access key (free, https://web3forms.com) tied to `varnofitness@gmail.com`. Without it the form will display a configuration error.

### Steps

1. Open a terminal.
2. Go to the project folder:
   ```bash
   cd /path/to/varno-fitness-web
   ```
3. Install dependencies (first time, or after `package.json` changes):
   ```bash
   npm install
   ```
4. Copy env template and paste the Web3Forms key:
   ```bash
   cp .env.example .env.local
   # then edit .env.local:
   # NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
5. Start the dev server:
   ```bash
   npm run dev
   ```
6. In a browser, open **http://localhost:3000**.
   - From another device on the same Wi-Fi, use the “Network” URL printed in the terminal (e.g. `http://192.168.x.x:3000`).

### Useful commands

| Command | When to use |
|---------|-------------|
| `npm run dev` | Local development with hot reload. |
| `npm run build` | Build the static export (output in `out/`). |
| `npm run lint` | Check code style / common issues. |

To preview the production build locally:

```bash
npm run build
npx serve out
```

---

## Part B — Host on `varnofitness.com` via GitHub Pages

**Idea:** Site files are committed to GitHub. A GitHub Actions workflow builds the static export and publishes `out/` to Pages. Your registrar (GoDaddy) is updated to point DNS at GitHub.

### 1) Push code to GitHub

- Create a repository (public or private — Pages works on both with a Pro/Free account in 2026).
- Push this project. If the repo root is **not** `varno-fitness-web`, the workflow (`varno-fitness-web/.github/workflows/deploy.yml`) already accounts for the subfolder via `working-directory`.

### 2) Enable Pages with the GitHub Actions source

1. Repo → **Settings → Pages**.
2. **Build and deployment → Source: GitHub Actions**.

### 3) Add the Web3Forms key as a build secret

1. Repo → **Settings → Secrets and variables → Actions → New repository secret**.
2. Name: `NEXT_PUBLIC_WEB3FORMS_KEY`. Value: your Web3Forms access key.
3. The workflow injects it at build time so the static bundle can call the Web3Forms API in production.

### 4) Trigger the first deploy

- Push to `main` (or run the workflow manually from the **Actions** tab).
- The workflow runs `npm ci && npm run build` in `varno-fitness-web/`, uploads `out/`, and Pages publishes it.
- You will get a temporary URL like `https://<user>.github.io/<repo>/`.

### 5) Attach the custom domain

1. Repo → **Settings → Pages → Custom domain** → enter `varnofitness.com`.
2. The repo already contains `public/CNAME` with this value so Pages keeps the binding on every deploy.

### 6) Update DNS at the registrar

**Important:** Remove or disable anything that still points the domain to **GoDaddy Website Builder** or old parking/hosting.

1. Log in to GoDaddy → **DNS management** for `varnofitness.com`.
2. Apex `A` records (delete other apex `A`/`ALIAS` records first):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. `CNAME` for `www` → `<github-username>.github.io.` (note the trailing dot).
4. Save. Propagation usually finishes in under an hour but can take up to 48.

### 7) HTTPS

- After DNS propagates, GitHub issues a Let's Encrypt cert automatically.
- Repo → **Settings → Pages → Enforce HTTPS** (tick the box once it is available).

### 8) Email (Gmail) unchanged

- If you only use **varnofitness@gmail.com**, you typically **do not** change **MX** records when moving the website.
- If you later use **Google Workspace / Microsoft 365** on `@varnofitness.com`, follow **their** MX setup carefully so you do not break mail.

---

## Quick troubleshooting

| Issue | What to check |
|-------|----------------|
| `localhost:3000` won’t load | Terminal shows `Ready`; no other app on port 3000; correct folder. |
| Form says “not configured” | `NEXT_PUBLIC_WEB3FORMS_KEY` missing in `.env.local` (locally) or in GitHub Actions secrets (in production). |
| Form returns an error in production | Web3Forms dashboard → check submissions; verify the inbox is confirmed and not over the daily rate limit. |
| Domain still shows old GoDaddy site | DNS still points to GoDaddy / old A records; remove Website Builder DNS. |
| Domain shows GitHub Pages but “Page not found” | `public/CNAME` missing, or repo Settings → Pages still points to a different source. |
| Build fails on Actions | Look at the `Build (Next.js static export)` step log; common cause is missing `NEXT_PUBLIC_WEB3FORMS_KEY` secret or a syntax error in code. |
| **`ENOENT` … `.next/server/vendor-chunks/...`** | Stale or partial build cache. Stop `npm run dev`, run `rm -rf .next`, then `npm run dev` again. |
