import { useParams, Link, Navigate } from 'react-router-dom'
import { getGame, getRenamedGame } from '../data/games'
import { getPolicy } from '../policies'
import useDocumentTitle from '../hooks/useDocumentTitle'
import GameIcon from '../components/GameIcon'
import StatusPill from '../components/StatusPill'
import StoreLinks from '../components/StoreLinks'
import Screenshots from '../components/Screenshots'
import NotFound from './NotFound'

export default function Game() {
  const { slug } = useParams()
  const game = getGame(slug)
  const renamed = game ? null : getRenamedGame(slug)
  const policy = getPolicy(slug)
  useDocumentTitle(game?.title ?? null)

  if (renamed) return <Navigate to={`/${renamed.slug}`} replace />
  if (!game) return <NotFound />

  const ink = game.ink ?? game.accent
  const hero = game.screenshots?.[0]

  return (
    <article className="rise pt-10 sm:pt-14">
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        All games
      </Link>

      {/* Hero: who the game is and where to get it */}
      <header
        className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-14"
        style={{
          background: `radial-gradient(40rem 26rem at 85% 10%, ${ink}33, transparent 70%),
            radial-gradient(30rem 20rem at 0% 100%, ${game.accent}1f, transparent 70%),
            #0d0e10`,
        }}
      >
        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div>
            <div className="flex items-center gap-5">
              <GameIcon game={game} className="h-24 w-24 shrink-0 shadow-2xl shadow-black/50 sm:h-28 sm:w-28" />
              <div className="flex flex-col items-start gap-2">
                {game.status && <StatusPill accent={game.accent}>{game.status}</StatusPill>}
                {game.genre && (
                  <span className="font-display text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    {game.genre}
                  </span>
                )}
              </div>
            </div>

            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-neutral-50 sm:text-5xl">
              {game.title}
            </h1>
            {game.hook && (
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight" style={{ color: game.accent }}>
                {game.hook}
              </p>
            )}
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-neutral-400">{game.tagline}</p>

            <StoreLinks game={game} />
          </div>

          {hero && (
            <div className="relative mx-auto hidden w-56 sm:block lg:w-full">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[3rem] opacity-60 blur-3xl"
                style={{ backgroundColor: ink }}
              />
              <img
                src={hero.src}
                alt={hero.alt}
                width="562"
                height="1000"
                className="relative w-full rotate-2 rounded-[1.75rem] shadow-2xl shadow-black/60 ring-1 ring-white/15"
              />
            </div>
          )}
        </div>
      </header>

      {game.screenshots?.length > 1 && (
        <Section title="Screenshots">
          <Screenshots shots={game.screenshots} />
        </Section>
      )}

      {game.steps?.length > 0 && (
        <Section title="How it plays">
          <ol className="grid gap-4 sm:grid-cols-3">
            {game.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full font-display text-sm font-bold text-neutral-950"
                  style={{ backgroundColor: i === 1 ? ink : game.accent }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-100">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section title="About the game">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-4 leading-relaxed text-neutral-400">
            {game.about.map((paragraph, i) => (
              <p key={i} className="max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>

          {game.hazards?.length > 0 && (
            <div>
              <h3 className="font-display text-sm font-medium text-neutral-300">Keep the cat safe from</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {game.hazards.map((hazard) => (
                  <li
                    key={hazard}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
                  >
                    {hazard}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {game.features?.length > 0 && (
        <Section title="Features">
          <ul className="grid gap-4 sm:grid-cols-2">
            {game.features.map((feature) => {
              const { title, body } = typeof feature === 'string' ? { title: feature } : feature
              return (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: game.accent }}
                  />
                  <div>
                    <h3 className="font-display font-semibold text-neutral-100">{title}</h3>
                    {body && <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{body}</p>}
                  </div>
                </li>
              )
            })}
          </ul>
        </Section>
      )}

      {/* Closing call to action, plus the small print */}
      <section className="mt-20 flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-12 text-center">
        <GameIcon game={game} className="h-16 w-16" />
        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-neutral-50">
          {game.hook ?? game.title}
        </h2>
        <p className="mt-2 text-neutral-400">
          {game.playStore || game.appStore ? 'Available now.' : 'Coming soon.'}
        </p>
        <div className="flex justify-center">
          <StoreLinks game={game} />
        </div>

        {policy && (
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <Link to={`/${slug}/privacy`} className="text-neutral-500 transition hover:text-neutral-200">
              Privacy policy
            </Link>
            {policy.meta.deletion && (
              <Link
                to={`/${slug}/privacy#delete-data`}
                className="text-neutral-500 transition hover:text-neutral-200"
              >
                Request data deletion
              </Link>
            )}
          </div>
        )}
      </section>
    </article>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-20">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          {title}
        </h2>
        <span className="h-px flex-1 bg-white/5" />
      </div>
      {children}
    </section>
  )
}
