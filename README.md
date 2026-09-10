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

## Privacy policies

Each game has its own policy at `/<slug>/privacy` — Cat Rescue's is at
`/cat-rescue/privacy`. That's the URL to give the Play Console listing, since
Google wants one policy per app rather than one per studio.

To add a policy for a new game:

1. Copy `src/policies/cat-rescue.jsx` to `src/policies/<slug>.jsx` and edit the text.
2. Register it in `src/policies/index.js`.

The page furniture (headings, bullets, the contents nav) comes from
`src/components/policy.jsx`, so a policy file is only its own words.

`/privacy` redirects to the first registered policy, so the older studio-level
URL keeps working.

## Hosting

Deployed to Cloudflare Workers, connected to this repo — every push to `main`
rebuilds and redeploys automatically. Build command `npm run build`, and
`wrangler.jsonc` tells the Worker to serve `dist`.

It's a single-page app, so the host must serve `index.html` for unknown paths or
`/cat-rescue` 404s on a hard refresh. On Cloudflare that's
`assets.not_found_handling: "single-page-application"` in `wrangler.jsonc`.

Moving to another host means bringing your own version of that rule:

- **Netlify** — add `public/_redirects` containing `/*    /index.html   200`.
  (Cloudflare Workers rejects that file as a redirect loop, which is why it isn't
  in the repo.)
- **Vercel** — `vercel.json` is already here and does it.
