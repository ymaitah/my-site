# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Yousef Maitah (electrical engineer). A single-page React app — essentially all visible content lives in `src/routes/index.tsx` (~600 lines of sections: hero, about, experience, projects, resume, courses). It is built with **TanStack Start** (SSR + build-time prerendering) on Vite + Tailwind v4 + shadcn/ui, deployed to Cloudflare.

## Commands

Package manager is **Bun** (`bun.lockb`, `bunfig.toml`); a `package-lock.json` also exists but Bun is canonical.

```bash
bun install        # install deps
bun run dev        # TanStack Start dev server (SSR) on :5173
bun run build      # production build → SSR server (dist/server) + prerendered client (dist/client)
bun run lint       # eslint .
bun run format     # prettier --write . (NOTE: reformats the whole repo; the committed
                   # code is not Prettier-clean, so prefer `bunx prettier --write <file>` on touched files only)
bun run preview    # preview built output
```

There is no test setup in this repo. To verify SSR output, `curl -s localhost:5173/` (dev) or inspect `dist/client/index.html` after a build — both should contain fully-rendered content and meta tags, not an empty shell.

## Architecture

- **Framework**: TanStack Start (`tanstackStart()` plugin in `vite.config.ts`) gives SSR plus build-time prerendering (`prerender: { enabled, crawlLinks }`). There is **no `index.html` or `src/main.tsx`** — Start renders the whole HTML document from `__root.tsx`'s `shellComponent` (`<html>…<HeadContent/>…<Scripts/>`) and supplies the client/server entries itself. The router is discovered via the `getRouter` export in `src/router.tsx` (a Start convention — keep that export name).
- **Routing**: TanStack Router with file-based routes in `src/routes/`. `src/routeTree.gen.ts` is auto-generated — do not edit by hand. `src/routes/__root.tsx` is the root layout (site-wide `<head>` meta: favicon, theme-color, JSON-LD; plus the 404 `notFoundComponent`); `src/routes/index.tsx` is the home page, holds all portfolio content, and sets page-level meta (title, description, OG/Twitter, canonical) via its route `head()`. Because of SSR these tags render server-side, so social/crawler previews work.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin; global styles and CSS variables in `src/styles.css` (linked from `__root.tsx` via `?url`). Animations use `framer-motion` (see the `fadeUp` variant pattern in `index.tsx`).
- **UI components**: shadcn/ui ("new-york" style, slate base) under `src/components/ui/`. Configured in `components.json`; add components via the shadcn CLI rather than hand-writing them. Icons come from `lucide-react`.
- **Imports**: use the `@/` alias for `src/` (configured in both `vite.config.ts` and `tsconfig.json`). Utility `cn()` for class merging lives in `src/lib/utils.ts`.
- **Static assets / meta**: PDFs, favicons, and `og-image.png` live in `public/`. The production/canonical domain (`https://yousefmaitah.com`) is hardcoded as `SITE_URL` in `index.tsx` and in `__root.tsx`/the JSON-LD — update all of these if the domain changes.
- **Deployment**: **Vercel**, auto-deploying from the `master` branch (push to `master` → production build → live). Config is `vercel.json`: Vercel runs `bun run build` and serves the prerendered static output in `dist/client` (`framework: null`, so no Vite/SSR preset is applied — the prerendered HTML is fully self-contained). The `dist/server` SSR bundle is not used in this static-hosting setup. (There is no Cloudflare/`wrangler` deploy despite the `@cloudflare/vite-plugin` dependency left over from the original scaffold.)
