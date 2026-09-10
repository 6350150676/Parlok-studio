import { useParams, Link } from 'react-router-dom'
import { getGame } from '../data/games'
import useDocumentTitle from '../hooks/useDocumentTitle'
import InkMark from '../components/InkMark'
import StoreLinks from '../components/StoreLinks'
import NotFound from './NotFound'

export default function Game() {
  const { slug } = useParams()
  const game = getGame(slug)
  useDocumentTitle(game?.title ?? null)

  if (!game) return <NotFound />

  return (
    <article className="rise pt-12 sm:pt-16">
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        All games
      </Link>

      <header className="mt-10 flex items-start gap-5">
        <InkMark accent={game.accent} className="h-16 w-16 shrink-0" />
        <div className="min-w-0 pt-1">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-50">
            {game.title}
          </h1>
          <p className="mt-2 font-display text-lg leading-snug text-neutral-400">{game.tagline}</p>
        </div>
      </header>

      <div className="mt-10 space-y-4 leading-relaxed text-neutral-400">
        {game.about.map((paragraph, i) => (
          <p key={i} className="max-w-prose">
            {paragraph}
          </p>
        ))}
      </div>

      {game.features?.length > 0 && (
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-2">
          {game.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 bg-[#0b0c0d] px-5 py-4 text-sm text-neutral-400"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: game.accent }}
              />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <StoreLinks game={game} />
    </article>
  )
}
