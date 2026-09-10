import { Link } from 'react-router-dom'
import { studio } from '../data/studio'
import { games } from '../data/games'
import useDocumentTitle from '../hooks/useDocumentTitle'
import InkMark from '../components/InkMark'
import StatusPill from '../components/StatusPill'

export default function Home() {
  useDocumentTitle(null)

  return (
    <div className="rise pt-16 sm:pt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
      {/* Who we are — stays put while the games list scrolls */}
      <div className="lg:sticky lg:top-28 lg:self-start">
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
      </div>

      {/* What we've made */}
      <div className="mt-20 lg:mt-2">
        <div className="flex items-center gap-4">
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
                className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/10 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <InkMark
                    accent={game.accent}
                    className="h-12 w-12 shrink-0 transition group-hover:scale-[1.04]"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold tracking-tight text-neutral-100">
                      {game.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{game.tagline}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {game.status ? (
                    <StatusPill accent={game.accent}>{game.status}</StatusPill>
                  ) : (
                    <span />
                  )}
                  <span className="font-display text-xs text-neutral-600 transition group-hover:text-neutral-300">
                    View <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
