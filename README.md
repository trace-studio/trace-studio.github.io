# Trace Studio Homepage

Static homepage for the [Trace Studio](https://github.com/trace-studio) GitHub organization. Built with [Astro](https://astro.build/), TypeScript, and vanilla CSS.

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Add a Game

Create a markdown file at `src/content/games/en/<slug>.md`:

```markdown
---
title: "Game Name"
slug: "game-name"
status: "released"  # released | in-progress | planned
summary: "One-line description."
repoUrl: "https://github.com/trace-studio/game-name"
demoUrl: "https://game-name.trace-studio.github.io"
tags: ["strategy", "card-game"]
components: ["engine", "heuristic", "rl", "llm", "web-demo", "report"]
locale: "en"
publishDate: 2025-01-01
order: 1
---

Markdown body here.
```

### Add a Research Post

Create a markdown file at `src/content/research/en/<slug>.md`:

```markdown
---
title: "Post Title"
slug: "post-slug"
game: "game-name"  # optional — links to a game
summary: "One-line summary."
authors: ["Author Name"]
publishDate: 2025-01-15
tags: ["heuristic", "game-ai"]
locale: "en"
draft: false
---

Markdown body here.
```

## Locales

- English: `/` (active)
- Chinese: `/zh/` (stubbed — translation not yet populated)

All UI strings are in `src/i18n/en.json` and `src/i18n/zh.json`. The `zh.json` file has empty values that fall back to English.

## Project Structure

```
src/
├── components/     # Astro components (layout, ui, home, games, research)
├── content/        # Markdown content collections
├── i18n/           # Locale string files
├── lib/            # i18n helpers
├── pages/          # Route pages
└── styles/         # Global CSS, tokens, typography, prose
public/
├── assets/brand/   # Logo and banner images
└── favicon.svg
```

## Deployment

See [docs/deployment.md](docs/deployment.md) for GitHub Pages deployment options.
