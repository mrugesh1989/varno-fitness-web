# Run locally and host on GitHub Pages

## Part A — Run on your computer

### Prerequisites

- **Node.js** (includes `npm`). Install via [nodejs.org](https://nodejs.org/) or Homebrew: `brew install node`.
- A working inbox at `varnofitness@gmail.com`. The contact form posts to [Formsubmit.co](https://formsubmit.co), which delivers submissions there. On the very first submission Formsubmit emails the inbox a one-click "confirm this address" link — do it once and every later submission flows through.

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
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. In a browser, open **http://localhost:3000**.
   - From another device on the same Wi-Fi, use the "Network" URL printed in the terminal (e.g. `http://192.168.x.x:3000`).

### Useful commands

| Command | When to use |
|---------|-------------|
| `npm run dev` | Development server (no basePath, serves from `/`). |
| `npm run build` | Build the static export into `out/`. The production build (workflow) uses the env vars shown below. |
| `npm run lint` | Check code style / common issues. |

To preview a production build locally that matches what GitHub Pages serves
(the live site at varnofitness.com is built from the root, no base path):

```bash
NEXT_PUBLIC_BASE_PATH="" \
  NEXT_PUBLIC_SITE_URL=https://varnofitness.com \
  npm run build
npx serve out -l 3001
# visit http://localhost:3001/
```

---

## Part B — Current deployment (GitHub Pages, custom domain)

The repo `mrugesh1989/varno-fitness-web` is live on the apex domain:

- **Public URL:** https://varnofitness.com/ (`www` 301-redirects to the apex)
- **Workflow:** `.github/workflows/deploy.yml` runs on every push to `main` and on manual dispatch.
- **Pages source:** GitHub Actions; custom domain bound via `public/CNAME` + Pages `cname`.
- **HTTPS:** enforced.
- **Build-time env vars (set inside the workflow):**
  - `NEXT_PUBLIC_BASE_PATH=""` (assets served from `/`)
  - `NEXT_PUBLIC_SITE_URL=https://varnofitness.com`
- **No form-related secrets.** Formsubmit is keyless; the recipient address lives in `src/components/ContactForm.tsx`.

> The cutover steps that produced this state are in **Part C**. To go back to the
> old GoDaddy site, see **Part C → Rolling back**.

To redeploy after a change:

```bash
git add -A
git commit -m "your message"
git push
# or trigger manually:
./.gh-bin/gh workflow run "Deploy to GitHub Pages"
```

### Change the contact-form recipient

1. Edit the `GYM_INBOX` constant at the top of `src/components/ContactForm.tsx`.
2. Commit, push, and redeploy.
3. After the first submission to the new address, click the "confirm this email" link Formsubmit sends to that inbox. From that moment on, both the gym notification and the customer auto-response work for the new recipient.

---

## Part C — Moving to `varnofitness.com`

This swaps the live domain from the old GoDaddy-built site to this GitHub Pages
site. There are two halves: **C1 — repo changes** (in this codebase / GitHub) and
**C2 — DNS changes** (in the GoDaddy dashboard). Both are required.

### What breaks, what doesn't (read first)

- The public site at **`varnofitness.com` is controlled by GoDaddy DNS**, not by
  the repo. Repo changes (C1) alone are invisible to the public; the old site
  keeps serving until you change DNS (C2).
- Doing C1 **breaks the project preview URL** `https://mrugesh1989.github.io/varno-fitness-web/`
  (assets move to the root and Pages redirects to the apex domain). That is
  expected — the apex domain becomes the only working URL.

### Recommended order (minimal downtime)

1. Do **C2** (GoDaddy DNS) first so propagation can start.
2. Then do **C1** (repo) and push.
3. Within ~10–60 min the apex domain serves the new site over HTTPS. The preview
   URL only stops working right as the real domain takes over.

---

### C1 — Repo / GitHub side

#### 1. Flip the workflow build-time vars

In `.github/workflows/deploy.yml`, set both env vars for an apex/root deployment:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: ""
  NEXT_PUBLIC_SITE_URL: https://varnofitness.com
```

(Empty `NEXT_PUBLIC_BASE_PATH` = assets load from `/` instead of `/varno-fitness-web`.)

#### 2. Add the `CNAME` file

The static export must include a `CNAME` file so Pages keeps the custom domain
bound on every deploy. Putting it in `public/` copies it into `out/` at build.

```bash
echo "varnofitness.com" > public/CNAME
git add public/CNAME .github/workflows/deploy.yml
git commit -m "Bind GitHub Pages to varnofitness.com"
git push
```

#### 3. Tell GitHub Pages about the domain

```bash
gh api -X PUT repos/mrugesh1989/varno-fitness-web/pages -f cname=varnofitness.com
```

#### 4. (Recommended) Verify domain ownership

In GitHub: **Settings → Pages → Add a domain / Verify** (or
**Settings → Pages → custom domain**). Verifying prevents domain takeover. For an
apex domain GitHub may ask you to add a `TXT` record at GoDaddy — follow the
on-screen value.

---

### C2 — GoDaddy DNS side

Sign in to GoDaddy → **Domain Portfolio** → **varnofitness.com** → **DNS / Manage DNS**.

#### 1. Apex `A` records (host `@`)

GoDaddy usually has one `@` `A` record pointing at a parking/forwarding IP.

- **Edit** the existing `@` `A` record → value `185.199.108.153` → Save.
- **Add** three more `A` records, all host `@`:
  ```text
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- TTL: `600` seconds (or 1 hour).

End state: four `A` records at `@`, one per GitHub Pages IP.

#### 2. `www` subdomain

- Edit (or add) the `www` record:
  - **Type:** `CNAME`
  - **Name/Host:** `www`
  - **Value/Points to:** `mrugesh1989.github.io` (GoDaddy appends the trailing dot)
- Save.

#### 3. Remove conflicting records

- **Domain → Forwarding:** delete any domain forwarding — GoDaddy forwarding
  silently injects its own `A`/CNAME records that will fight these changes.
- If the current site uses **GoDaddy Websites + Marketing**, open that product and
  **unpublish / disconnect the domain** so it stops re-pointing DNS.

#### 4. Leave email records alone

Do **not** touch `MX` records or email `TXT` (SPF/DKIM). This keeps
`varnofitness@gmail.com` and the contact form working.

---

### C3 — Verify the cutover

```bash
# Should return the four 185.199.x.153 addresses:
dig varnofitness.com +short
# www should resolve via the github.io CNAME:
dig www.varnofitness.com +short
```

- In the repo: **Settings → Pages** shows the domain verified and auto-issues a
  Let's Encrypt cert. Once available, tick **Enforce HTTPS**.
- Load `https://varnofitness.com` and `https://www.varnofitness.com` — both should
  serve the new site.

### Future edits after cutover

There is only one environment (production): every push to `main` deploys straight
to `varnofitness.com` (~1 min). Preview changes locally before pushing:

```bash
npm run dev          # private preview at http://localhost:3000
# or production-accurate:
npm run build && npx serve out
```

### Rolling back — revert to the GoDaddy website

Use this to move the live site back from GitHub Pages to GoDaddy. As with the
cutover there are two halves: **repo/Pages** and **GoDaddy DNS**. The domain stays
registered at GoDaddy the whole time — this only changes where it points.

> Restore point: the tag `pre-custom-domain-projecturl` marks the last
> project-URL state of the repo. Inspect it with
> `git show pre-custom-domain-projecturl:.github/workflows/deploy.yml`.

#### 1. DNS first (GoDaddy) — fastest way back online

Sign in to GoDaddy → **varnofitness.com → DNS / Manage DNS**.

**Original records (the pre-cutover state to restore to):**

| Type  | Name            | Data                                      | TTL    |
|-------|-----------------|-------------------------------------------|--------|
| A     | `@`             | `WebsiteBuilder Site` (GoDaddy-managed)   | 1 Hour |
| CNAME | `www`           | `varnofitness.com.`                       | 1 Hour |
| CNAME | `pay`           | `paylinks.commerce.godaddy.com.`          | 1 Hour |
| CNAME | `_domainconnect`| `_domainconnect.gd.domaincontrol.com.`    | 1 Hour |
| NS    | `@`             | `ns09.domaincontrol.com.`                 | 1 Hour |
| NS    | `@`             | `ns10.domaincontrol.com.`                 | 1 Hour |
| SOA   | `@`             | `Primary nameserver: ns09.domaincontrol.com.` | 1 Hour |

**Current records (added during cutover — these are what you undo):**

| Type  | Name  | Data                  |
|-------|-------|-----------------------|
| A     | `@`   | `185.199.108.153`     |
| A     | `@`   | `185.199.109.153`     |
| A     | `@`   | `185.199.110.153`     |
| A     | `@`   | `185.199.111.153`     |
| CNAME | `www` | `mrugesh1989.github.io.` |

**Exact steps to revert:**

1. **Delete** three of the four `@` `A` records — `185.199.109.153`,
   `185.199.110.153`, and `185.199.111.153` (leave one `@` `A` row to edit in the
   next step).
2. **Restore the apex `A` record to `WebsiteBuilder Site`.** This value is not
   typed by hand — it is auto-managed by GoDaddy Websites + Marketing. Reconnect it:
   - GoDaddy → **Websites + Marketing** (or **My Products → Website Builder**) →
     open the `varnofitness.com` site → **Settings → Domain / Connect domain** →
     reconnect `varnofitness.com` and **Publish**.
   - Reconnecting/publishing rewrites the last `@` `A` record back to
     `WebsiteBuilder Site` automatically. If a leftover `185.199.108.153` `A` row
     remains, delete it after the WebsiteBuilder record appears.
3. **Edit the `www` CNAME** from `mrugesh1989.github.io.` back to
   **`varnofitness.com.`** (Type `CNAME`, Name `www`, Data `varnofitness.com.`,
   TTL 1 Hour).
4. **Leave these untouched** — they were never changed and must stay:
   `CNAME pay`, `CNAME _domainconnect`, both `NS @` records, the `SOA` record, and
   any `MX` / email `TXT` (SPF/DKIM) records so `varnofitness@gmail.com` keeps
   working.

End state = the "Original records" table above. DNS revert takes another
propagation cycle (~10–60 min). Once `@` no longer resolves to the
`185.199.x.153` IPs, the public domain serves the GoDaddy site again.

#### 2. Release the domain from GitHub Pages

```bash
# Clear the custom domain binding (turns off HTTPS enforcement too):
gh api -X PUT repos/mrugesh1989/varno-fitness-web/pages -f cname=""
```

In the UI this is **Settings → Pages → Custom domain → Remove**.

#### 3. Restore the repo to the project URL (optional but recommended)

Only needed if you want the github.io preview URL working again. In
`.github/workflows/deploy.yml` set the vars back:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /varno-fitness-web
  NEXT_PUBLIC_SITE_URL: https://mrugesh1989.github.io/varno-fitness-web
```

Then remove the `CNAME` file and redeploy:

```bash
git rm public/CNAME
git add .github/workflows/deploy.yml
git commit -m "Revert GitHub Pages to project URL"
git push
```

After the workflow runs, the preview URL
`https://mrugesh1989.github.io/varno-fitness-web/` works again.

#### 4. Verify the revert

```bash
dig varnofitness.com +short      # should NOT be the 185.199.x.153 IPs anymore
curl -sS -o /dev/null -w "%{http_code}\n" https://varnofitness.com/
```

Load `https://varnofitness.com` — it should serve the GoDaddy site again.

---

## Quick troubleshooting

| Issue | What to check |
|-------|----------------|
| `localhost:3000` won't load | Terminal shows `Ready`; no other app on port 3000; correct folder. |
| Form submits but no email arrives at the gym inbox | First submission requires the gym inbox owner to click the "confirm this email" link from Formsubmit. Check spam. |
| Form returns an error in production | Browser devtools → Network → look at the POST to `formsubmit.co`. Common causes: ad-blocker, rate limiting, or unverified recipient. |
| 404 on internal navigation at the github.io URL | `NEXT_PUBLIC_BASE_PATH` not set in the workflow, or stale build. Re-run the workflow. |
| Images appear broken on the github.io URL | `media.ts` `BASE_PATH` not prefixing — check `NEXT_PUBLIC_BASE_PATH` is `/varno-fitness-web` in the workflow. |
| Build fails on Actions | Look at the `Build (Next.js static export)` step log. |
| **`ENOENT` … `.next/server/vendor-chunks/...`** | Stale local cache. Stop `npm run dev`, run `rm -rf .next`, then `npm run dev` again. |
