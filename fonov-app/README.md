# FonovTest — Developer Guide

Free iPhone pre-purchase diagnostic web app.

## Requirements

- Node.js 20 LTS (see `.nvmrc`)
- npm 10+

## Quick Start

```bash
cd fonov-app
npm install
npm run dev
```

Open http://localhost:5173

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run Vitest unit tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check |

## Architecture

- **Vite + React 18 + TypeScript** — frontend
- **Zustand** — client state
- **React Router v6** — routing
- **i18next** — localization (EN, RU, UK, DE, TR)
- **Tailwind CSS** — styling + dark mode
- **PWA** — offline via vite-plugin-pwa

### Key directories

```
src/
  data/models/     # iPhone model database (JSON + Zod)
  data/schemeOfTests.ts  # Per-model test schemes
  pages/           # Route pages
  components/      # Shared UI
  store/           # Zustand store
  i18n/            # Translations
```

## iPhone Model Database

Models are stored in JSON files under `src/data/models/`:

- `legacy.json` — iPhone through iPhone X
- `modern.json` — iPhone XS through iPhone 17
- `iphone-18.placeholder.json` — future iPhone 18 (feature flag)
- `iphone-fold.placeholder.json` — future iPhone Fold (feature flag)

Enable placeholders in `src/data/models/featureFlags.ts`.

## Deployment

GitHub Actions workflow builds and deploys to GitHub Pages on push to `master`.

Manual deploy:

```bash
npm run build
# Upload dist/ to static hosting
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SENTRY_DSN` | Sentry error tracking DSN |
| `VITE_WHITELABEL_NAME` | B2B white-label app name |
