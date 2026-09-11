import { useParams, Link, Navigate } from 'react-router-dom'
import { getGame, getRenamedGame } from '../data/games'
import { getPolicy } from '../policies'
import useDocumentTitle from '../hooks/useDocumentTitle'
import InkMark from '../components/InkMark'
import StoreLinks from '../components/StoreLinks'
import NotFound from './NotFound'

export default function Game() {
  const { slug } = useParams()
  const game = getGame(slug)
  const renamed = game ? null : getRenamedGame(slug)
  const hasPolicy = Boolean(getPolicy(slug))
  useDocumentTitle(game?.title ?? null)

  if (renamed) return <Navigate to={`/${renamed.slug}`} replace />
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

      <div className="mt-10 lg:grid lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-16">
        {/* Identity and where to get it — held in view while the copy scrolls */}
        <header className="lg:sticky lg:top-28 lg:self-start">
          <InkMark accent={game.accent} className="h-20 w-20" />
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-neutral-50">
            {game.title}
          </h1>
          <p className="mt-3 font-display text-lg leading-snug text-neutral-400">{game.tagline}</p>
          <StoreLinks game={game} />

          {hasPolicy && (
            <Link
              to={`/${slug}/privacy`}
              className="mt-6 inline-block text-sm text-neutral-500 transition hover:text-neutral-200"
            >
              Privacy policy
            </Link>
          )}
        </header>

        <div className="mt-12 lg:mt-0">
          <div className="space-y-4 leading-relaxed text-neutral-400">
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
                  className="flex items-start gap-3 bg-[#0b0c0d] px-5 py-4 text-sm leading-relaxed text-neutral-400"
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
        </div>
      </div>
    </article>
  )
}
