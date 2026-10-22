# Aivora — React + Vite

Aivora has been migrated to a React component tree powered by Vite. The existing visual design and stylesheet rules are preserved, while the former HTML section fragments have been converted into JSX components.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `index.html` — Vite document shell
- `vite.config.js` — Vite React plugin setup
- `src/main.jsx` — React entry point and global stylesheet imports
- `src/App.jsx` — page composition and interactive behaviors
- `src/components/` — reusable navbar and button components
- `src/sections/` — JSX page sections and their original CSS
- `src/assets/` — images and the hero video

The contact and newsletter forms show local success feedback only. They are not connected to an email service or backend.
