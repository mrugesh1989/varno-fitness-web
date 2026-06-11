# Agent / assistant notes

When working on this codebase, read **`docs/LLM_CONTEXT.md`** first — it is the
single up-to-date briefing (stack, routes, content map, deploy, conventions).
Then: **`docs/FOLDER_GUIDE.md`** for per-file editing guidance,
**`docs/PROJECT_CONTEXT.md`** for scope and decisions, and
**`docs/HOSTING_AND_DNS.md`** for local run, deploy, and the
varnofitness.com DNS / rollback runbook.

Key invariants: site is a static Next.js export (no API routes, no secrets);
all copy lives in `src/content/site.ts`; never delete `public/CNAME`; images
must be pre-optimized before committing (Next does not resize them).
