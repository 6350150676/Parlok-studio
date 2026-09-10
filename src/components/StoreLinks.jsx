const AppleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.365 1.43c0 1.14-.42 2.2-1.26 3.06-.9.93-2 1.48-3.06 1.4-.13-1.1.44-2.24 1.24-3.02.87-.88 2.28-1.46 3.08-1.44zM20.9 17.13c-.5 1.16-.74 1.68-1.39 2.7-.9 1.43-2.17 3.2-3.74 3.22-1.4.01-1.76-.9-3.66-.9-1.9.01-2.3.92-3.7.9-1.57-.02-2.77-1.62-3.67-3.04-2.52-3.98-2.78-8.65-1.23-11.13 1.1-1.76 2.84-2.8 4.47-2.8 1.66 0 2.7.92 4.08.92 1.33 0 2.14-.92 4.06-.92 1.45 0 2.99.79 4.09 2.16-3.6 1.97-3.02 7.1.69 8.89z" />
  </svg>
)

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.29 12l2.408-2.491zM5.864 2.658 16.802 8.99l-2.302 2.302-8.636-8.635z" />
  </svg>
)

const stores = [
  { key: 'appStore', label: 'App Store', sub: 'Download on the', Icon: AppleIcon },
  { key: 'playStore', label: 'Google Play', sub: 'Get it on', Icon: PlayIcon },
]

export default function StoreLinks({ game }) {
  const live = stores.filter(({ key }) => game[key])

  if (live.length === 0) {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4">
        <span
          aria-hidden="true"
          className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: game.accent }}
        />
        <p className="text-sm text-neutral-400">
          <span className="text-neutral-200">{game.status ?? 'Coming soon'}</span> — releasing on
          the App Store and Google Play.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {live.map(({ key, label, sub, Icon }) => (
        <a
          key={key}
          href={game[key]}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 px-5 py-3 transition hover:border-neutral-600 hover:bg-neutral-800"
        >
          <Icon className="h-6 w-6 text-neutral-300 transition group-hover:text-white" />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-widest text-neutral-500">
              {sub}
            </span>
            <span className="block font-display font-medium text-neutral-100">{label}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
