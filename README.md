# Admin

TypeScript + React + Bulma web app, built with Vite and configured for Netlify deployment.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build in `dist/`
- `npm run lint` - run ESLint

## Deploy to Netlify

This repository includes `netlify.toml` with:

- build command: `npm run build`
- publish directory: `dist`
- SPA redirect rule to `index.html`
