import { Link } from 'react-router-dom'
import { studio } from '../data/studio'
import { games } from '../data/games'
import InkMark from '../components/InkMark'
import StatusPill from '../components/StatusPill'

export default function Home() {
  return (
    <div className="rise pt-16 sm:pt-24">
      <p className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
        Independent game studio
      </p>

      <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-neutral-50 sm:text-6xl">
        {studio.name}
      </h1>

      <p className="mt-5 font-display text-xl leading-snug text-neutral-300 sm:text-2xl">
        {studio.motto}
      </p>

      <p className="mt-7 max-w-prose leading-relaxed text-neutral-400">{studio.about}</p>

      <div className="mt-20 flex items-center gap-4">
        <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          Games
        </h2>
        <span className="h-px flex-1 bg-white/5" />
        <span className="font-display text-[11px] tracking-widest text-neutral-700">
          {String(games.length).padStart(2, '0')}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {games.map((game) => (
          <li key={game.slug}>
            <Link
              to={`/${game.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/10 hover:bg-white/[0.05]"
            >
              <InkMark
                accent={game.accent}
                className="h-12 w-12 shrink-0 transition group-hover:scale-[1.04]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <h3 className="font-display font-semibold tracking-tight text-neutral-100">
                    {game.title}
                  </h3>
                  {game.status && <StatusPill accent={game.accent}>{game.status}</StatusPill>}
                </div>
                <p className="mt-1 text-sm text-neutral-500">{game.tagline}</p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-neutral-700 transition group-hover:translate-x-0.5 group-hover:text-neutral-300"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
