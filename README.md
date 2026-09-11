# Parlok Studio

The studio site. React + Vite + Tailwind.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Adding a game

Edit `src/data/games.js`. Each entry gets a card on the home page and its own page
at `/<slug>` — Save the Cat: Draw Puzzle is at `/save-the-cat-draw-puzzle`.

```js
{
  slug: 'save-the-cat-draw-puzzle',
  formerSlugs: ['cat-rescue'],   // old URLs redirect here
  title: 'Save the Cat: Draw Puzzle',
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

Each game has its own policy at `/<slug>/privacy` — Save the Cat: Draw Puzzle's is at
`/save-the-cat-draw-puzzle/privacy`. That's the URL to give the Play Console listing, since
Google wants one policy per app rather than one per studio.

To add a policy for a new game:

1. Copy `src/policies/save-the-cat-draw-puzzle.jsx` to `src/policies/<slug>.jsx` and edit the text.
2. Register it in `src/policies/index.js`.

The page furniture (headings, bullets, the contents nav) comes from
`src/components/policy.jsx`, so a policy file is only its own words.

### Data deletion requests

A policy whose `meta` has a `deletion` entry gets a **Request Data Deletion** form
at the top of its page — `/<slug>/privacy#delete-data`, which is also the URL for
the Play Console "Delete data URL" field. Submissions are emailed to
`deletion.email` through [FormSubmit](https://formsubmit.co); if that can't be
reached, the form falls back to a pre-filled email.

FormSubmit needs a one-time activation: after the first submission from a new
domain it emails an **Activate Form** link to that address, and nothing is
delivered until it's clicked. Moving to a custom domain means activating again.

`/privacy` redirects to the first registered policy, so the older studio-level
URL keeps working.

## Hosting

Deployed to Cloudflare Workers, connected to this repo — every push to `main`
rebuilds and redeploys automatically. Build command `npm run build`, and
`wrangler.jsonc` tells the Worker to serve `dist`.

It's a single-page app, so the host must serve `index.html` for unknown paths or
`/save-the-cat-draw-puzzle` 404s on a hard refresh. On Cloudflare that's
`assets.not_found_handling: "single-page-application"` in `wrangler.jsonc`.

Moving to another host means bringing your own version of that rule:

- **Netlify** — add `public/_redirects` containing `/*    /index.html   200`.
  (Cloudflare Workers rejects that file as a redirect loop, which is why it isn't
  in the repo.)
- **Vercel** — `vercel.json` is already here and does it.
