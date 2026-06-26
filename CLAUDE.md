# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Yousef Maitah (electrical engineer). A single-page React app — essentially all visible content lives in `src/routes/index.tsx` (~500 lines of sections: hero, experience, projects, resume, courses). It is built with TanStack Router + Vite + Tailwind v4 + shadcn/ui, deployed to Cloudflare.

## Commands

Package manager is **Bun** (`bun.lockb`, `bunfig.toml`); a `package-lock.json` also exists but Bun is canonical.

```bash
bun install        # install deps
bun run dev        # vite dev server
bun run build      # production build (vite build)
bun run lint       # eslint .
bun run format     # prettier --write .
bun run preview    # preview built output
```

There is no test setup in this repo.

## Architecture

- **Routing**: TanStack Router with file-based routes in `src/routes/`. `src/routeTree.gen.ts` is auto-generated from those files — do not edit it by hand. `src/routes/__root.tsx` is the root layout (also defines the 404 `notFoundComponent`); `src/routes/index.tsx` is the home page and holds the actual portfolio content.
- **Entry**: `index.html` → `src/main.tsx` mounts a client-side SPA (`RouterProvider`) into `#root`. Error UI lives in `src/router.tsx` (`DefaultErrorComponent`).
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin; global styles and CSS variables in `src/styles.css`. Animations use `framer-motion` (see the `fadeUp` variant pattern in `index.tsx`).
- **UI components**: shadcn/ui ("new-york" style, slate base) under `src/components/ui/`. Configured in `components.json`; add components via the shadcn CLI rather than hand-writing them. Icons come from `lucide-react`.
- **Imports**: use the `@/` alias for `src/` (configured in both `vite.config.ts` and `tsconfig.json`). Utility `cn()` for class merging lives in `src/lib/utils.ts`.
- **Deployment**: Cloudflare via `wrangler.jsonc`.

## Notable config mismatch

`package.json` (name `tanstack_start_ts`) and `__root.tsx` carry TanStack **Start** / SSR conventions (`shellComponent`, `HeadContent`, `Scripts`, `@tanstack/react-start`, `@cloudflare/vite-plugin`), but the active `vite.config.ts` only wires up `react` + `tailwindcss` and `main.tsx` boots a plain client-side SPA — the Start/SSR and router plugins are not enabled. Treat this as a client-rendered SPA in practice. If you intend to switch to true SSR/Start, the vite config and entry need updating to match.
