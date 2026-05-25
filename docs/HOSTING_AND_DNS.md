# Run locally and host on GitHub Pages

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
   - From another device on the same Wi-Fi, use the "Network" URL printed in the terminal (e.g. `http://192.168.x.x:3000`).

### Useful commands

| Command | When to use |
|---------|-------------|
| `npm run dev` | Development server (no basePath, serves from `/`). |
| `npm run build` | Build the static export. With env vars (below) it produces files sized for the GitHub Pages project URL. |
| `npm run lint` | Check code style / common issues. |

To preview a production build locally that matches what GitHub Pages serves:

```bash
NEXT_PUBLIC_BASE_PATH=/varno-fitness-web \
  NEXT_PUBLIC_SITE_URL=https://mrugesh1989.github.io/varno-fitness-web \
  npm run build
npx serve out -l 3001
# visit http://localhost:3001/varno-fitness-web/
```

---

## Part B — Current deployment (GitHub Pages, project URL)

The repo `mrugesh1989/varno-fitness-web` is already wired up:

- **Public URL:** https://mrugesh1989.github.io/varno-fitness-web/
- **Workflow:** `.github/workflows/deploy.yml` runs on every push to `main` and on manual dispatch.
- **Pages source:** GitHub Actions.
- **HTTPS:** enforced.
- **Build-time env vars (set inside the workflow):**
  - `NEXT_PUBLIC_BASE_PATH=/varno-fitness-web`
  - `NEXT_PUBLIC_SITE_URL=https://mrugesh1989.github.io/varno-fitness-web`
  - `NEXT_PUBLIC_WEB3FORMS_KEY` — pulled from repo secret of the same name.

To redeploy after a change:

```bash
git add -A
git commit -m "your message"
git push
# or trigger manually:
./.gh-bin/gh workflow run "Deploy to GitHub Pages"
```

### Add or rotate the Web3Forms key

```bash
./.gh-bin/gh secret set NEXT_PUBLIC_WEB3FORMS_KEY --body 'your-access-key'
./.gh-bin/gh workflow run "Deploy to GitHub Pages"
```

---

## Part C — Moving to `varnofitness.com` later

When you are ready to point the custom domain at the site (no rebuild needed unless the URL changes):

### 1. Edit the workflow build-time vars

In `.github/workflows/deploy.yml`, either delete both env vars or set them to the custom domain:

```yaml
env:
  NEXT_PUBLIC_WEB3FORMS_KEY: ${{ secrets.NEXT_PUBLIC_WEB3FORMS_KEY }}
  # Both vars empty = build for an apex/root deployment.
  NEXT_PUBLIC_BASE_PATH: ""
  NEXT_PUBLIC_SITE_URL: https://varnofitness.com
```

### 2. Restore the `CNAME`

```bash
echo "varnofitness.com" > public/CNAME
git add public/CNAME
git commit -m "Bind GitHub Pages to varnofitness.com"
git push
```

### 3. Set the custom domain on Pages

```bash
./.gh-bin/gh api -X PUT repos/mrugesh1989/varno-fitness-web/pages -f cname=varnofitness.com
```

### 4. Update DNS at GoDaddy

- Remove old Website Builder / parking records.
- Apex `A` records (host: `@`, TTL: 600 s):
  ```text
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- `CNAME` on `www` → `mrugesh1989.github.io.` (trailing dot).
- Leave **MX** records alone so Gmail keeps working.

Propagation typically takes 10–60 minutes. GitHub auto-issues a Let's Encrypt cert once DNS resolves.

### 5. Confirm HTTPS

In the repo: **Settings → Pages → Enforce HTTPS** (tick once available).

---

## Quick troubleshooting

| Issue | What to check |
|-------|----------------|
| `localhost:3000` won't load | Terminal shows `Ready`; no other app on port 3000; correct folder. |
| Form says "not configured" | `NEXT_PUBLIC_WEB3FORMS_KEY` missing in `.env.local` (locally) or in GitHub Actions secrets (in production). |
| Form returns an error in production | Web3Forms dashboard → check submissions; verify the inbox is confirmed and not over the daily rate limit. |
| 404 on internal navigation at the github.io URL | `NEXT_PUBLIC_BASE_PATH` not set in the workflow, or stale build. Re-run the workflow. |
| Images appear broken on the github.io URL | `media.ts` `BASE_PATH` not prefixing — check `NEXT_PUBLIC_BASE_PATH` is `/varno-fitness-web` in the workflow. |
| Build fails on Actions | Look at the `Build (Next.js static export)` step log. |
| **`ENOENT` … `.next/server/vendor-chunks/...`** | Stale local cache. Stop `npm run dev`, run `rm -rf .next`, then `npm run dev` again. |
