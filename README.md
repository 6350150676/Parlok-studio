# Parlok Studio

The studio site. React + Vite + Tailwind.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Adding a game

Edit `src/data/games.js`. Each entry gets a card on the home page and its own page
at `/<slug>` — Cat Rescue is at `/cat-rescue`.

```js
{
  slug: 'cat-rescue',
  title: 'Cat Rescue',
  tagline: '...',
  status: 'Coming soon',   // shown while both store links are null
  accent: '#f4a261',       // the colour block used as its icon
  about: ['paragraph', 'paragraph'],
  features: ['bullet', 'bullet'],
  playStore: null,         // paste the store URL here when it goes live
  appStore: null,
}
```

Studio name, motto and the home-page paragraph live in `src/data/studio.js`.

## Hosting

Static build, any host. Deploy `dist/` after `npm run build`.

It's a single-page app, so the host must serve `index.html` for unknown paths or
`/cat-rescue` 404s on refresh. Both configs are already in the repo:
`public/_redirects` (Netlify) and `vercel.json` (Vercel). On Cloudflare Pages set
the build command to `npm run build` and the output directory to `dist`.
