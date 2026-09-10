// A game's privacy policy lives at /<slug>/privacy. To add one for a new game,
// copy src/policies/cat-rescue.jsx, edit the text, and register it here.

import CatRescuePolicy, { meta as catRescueMeta } from './cat-rescue.jsx'

export const policies = {
  'cat-rescue': { Body: CatRescuePolicy, meta: catRescueMeta },
}

export const getPolicy = (slug) => policies[slug]

// The first game that has one — used to keep the old /privacy URL working.
export const firstPolicySlug = Object.keys(policies)[0] ?? null
