// Add a game here and it appears on the home page with its own page at /<slug>.
// Set playStore / appStore to null while a game is unreleased — the page then
// shows "Coming soon" instead of a dead link.

export const games = [
  {
    slug: 'cat-rescue',
    title: 'Cat Rescue',
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
      'No ads mid-puzzle, no timers, no energy bars',
    ],
    playStore: null,
    appStore: null,
  },
]

export const getGame = (slug) => games.find((g) => g.slug === slug)
