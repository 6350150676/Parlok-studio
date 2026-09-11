// Add a game here and it appears on the home page with its own page at /<slug>.
// Set playStore / appStore to null while a game is unreleased — the page then
// shows "Coming soon" instead of a dead link.
//
// Renaming a game: change its slug and move the old one into formerSlugs. Old
// URLs (including /<old>/privacy) then redirect instead of 404ing.

export const games = [
  {
    slug: 'save-the-cat-draw-puzzle',
    formerSlugs: ['cat-rescue'],
    title: 'Save the Cat: Draw Puzzle',
    tagline: 'A cat is in danger. You get one line.',
    status: 'Coming soon',
    accent: '#f4a261',
    about: [
      'A cat is stuck, and something is about to go wrong. You draw a single ' +
      'continuous stroke, then let go and watch physics decide.',
      'Your line is a real object — it falls, it tips, it has weight. A wall with no ' +
      'foot topples over. A roof with nothing under it drops. Every level is one ' +
      'question about how things hold up, and the answer is a shape you draw yourself.',
    ],
    features: [
      '50 hand-made levels, each one a different question',
      'Endless levels after that, generated fresh',
      'Real physics — nothing is scripted, nothing is faked',
      'A daily puzzle with its own leaderboard',
    ],
    playStore: null,
    appStore: null,
  },
]

export const getGame = (slug) => games.find((g) => g.slug === slug)

// The game that used to live at this slug, if any.
export const getRenamedGame = (slug) => games.find((g) => g.formerSlugs?.includes(slug))
