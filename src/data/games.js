// Add a game here and it appears on the home page with its own page at /<slug>.
// Set playStore / appStore to null while a game is unreleased — the page then
// shows "Coming soon" instead of a dead link. icon, screenshots, steps, hazards
// and hook are optional; the game page only shows the sections a game has.
// Images live in public/games/<slug>/.
//
// Renaming a game: change its slug and move the old one into formerSlugs. Old
// URLs (including /<old>/privacy) then redirect instead of 404ing.

export const games = [
  {
    slug: 'save-the-cat-draw-puzzle',
    formerSlugs: ['cat-rescue'],
    title: 'Save the Cat: Draw Puzzle',
    tagline: 'One line. Real physics. Protect the cat from hazards and solve clever puzzles.',
    hook: 'Draw once. Then physics decides.',
    status: 'Out now on Google Play',
    genre: 'Physics puzzle',
    accent: '#ffd45c',
    // The game's own palette: the purple ink line, on a pale sky.
    ink: '#8b80f0',
    icon: '/games/save-the-cat-draw-puzzle/icon.jpg',
    screenshots: [
      { src: '/games/save-the-cat-draw-puzzle/shot-1.jpg', alt: 'Draw, protect, rescue — a purple line shields the cat from a falling boulder and a bee' },
      { src: '/games/save-the-cat-draw-puzzle/shot-2.jpg', alt: 'Draw your way to save the cat — a level with spikes and a green goal zone' },
      { src: '/games/save-the-cat-draw-puzzle/shot-3.jpg', alt: 'Daily challenge leaderboard ranked by ink used' },
      { src: '/games/save-the-cat-draw-puzzle/shot-4.jpg', alt: 'Level select — choose your next challenge' },
      { src: '/games/save-the-cat-draw-puzzle/shot-5.jpg', alt: 'Section 2 locked — collect stars to unlock more levels' },
      { src: '/games/save-the-cat-draw-puzzle/shot-6.jpg', alt: 'Level complete — the cat is safe, three stars' },
    ],
    about: [
      'Save the Cat is a one-stroke physics puzzle. Study the frozen scene, draw one ' +
      'continuous line, and let go. Your drawing becomes a real object — it can fall, ' +
      'tip, roll, get pushed, carry weight, and protect or guide the cat.',
      'The world waits while you think. There are no reflex moves once the simulation ' +
      'starts: release the line and physics takes over. Every success comes from ' +
      'understanding what your line will do after it becomes part of the world.',
    ],
    steps: [
      { title: 'Think', body: 'The scene is frozen. Take as long as you like to read the danger.' },
      { title: 'Draw', body: 'One continuous stroke — a roof, a ramp, a wedge, a wall, anything.' },
      { title: 'Watch', body: 'Let go. Your line gets weight and gravity, and physics decides.' },
    ],
    hazards: ['Bees', 'Falling rocks', 'Fire', 'Water', 'Spikes', 'Falling slabs', 'Rolling boulders'],
    features: [
      {
        title: '50 handcrafted puzzles',
        body: 'Designed levels with different environments, goals and physics ideas — then generated puzzles keep it going.',
      },
      {
        title: 'One line, many solutions',
        body: 'Brace, bridge, ramp, counterweight or something all your own. Ink is limited, so efficient answers earn more stars.',
      },
      {
        title: 'Daily challenge',
        body: 'Everyone gets the same puzzle and one attempt. Winners are ranked by how little ink they used.',
      },
      {
        title: 'Real physics',
        body: 'Nothing is scripted. Sometimes the smartest answer isn’t blocking the danger — it’s redirecting it.',
      },
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.parlok.savethecat',
    appStore: null,
  },
]

export const getGame = (slug) => games.find((g) => g.slug === slug)

// The game that used to live at this slug, if any.
export const getRenamedGame = (slug) => games.find((g) => g.formerSlugs?.includes(slug))
