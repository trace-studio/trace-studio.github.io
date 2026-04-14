# Deployment

Two deployment paths for GitHub Pages.

## Option 1: Deploy from this repository

If the site is hosted from the `ts-homepage` repo (e.g., `trace-studio.github.io/ts-homepage`):

```js
// astro.config.mjs
export default defineConfig({
  site: "https://trace-studio.github.io",
  base: "/ts-homepage",
  // ...
});
```

## Option 2: Deploy as the organization site

If this repo is renamed to `trace-studio.github.io` (the org-level GitHub Pages repo):

```js
// astro.config.mjs
export default defineConfig({
  site: "https://trace-studio.github.io",
  // no base needed — serves from root
  // ...
});
```

## Build Command

```bash
npm run build
```

Output is in `dist/`. Point GitHub Pages to serve from the `dist/` directory (or use a GitHub Action to build and deploy).

## GitHub Actions (future)

A workflow file at `.github/workflows/deploy.yml` can automate builds on push to `main`. This is not included in v1 — add it when ready to deploy.
