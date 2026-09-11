// A game's privacy policy lives at /<slug>/privacy. To add one for a new game,
// copy an existing file in this folder, edit the text, and register it here
// under the game's slug.

import SaveTheCatPolicy, { meta as saveTheCatMeta } from './save-the-cat-draw-puzzle.jsx'

export const policies = {
  'save-the-cat-draw-puzzle': { Body: SaveTheCatPolicy, meta: saveTheCatMeta },
}

export const getPolicy = (slug) => policies[slug]

// The first game that has one — used to keep the old /privacy URL working.
export const firstPolicySlug = Object.keys(policies)[0] ?? null
