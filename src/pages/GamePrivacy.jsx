import { useParams, Link, Navigate } from 'react-router-dom'
import { getGame, getRenamedGame } from '../data/games'
import { getPolicy } from '../policies'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { Contents, P } from '../components/policy'
import NotFound from './NotFound'

export default function GamePrivacy() {
  const { slug } = useParams()
  const game = getGame(slug)
  const renamed = game ? null : getRenamedGame(slug)
  const policy = getPolicy(slug)
  useDocumentTitle(game ? `${game.title} Privacy Policy` : null)

  if (renamed) return <Navigate to={`/${renamed.slug}/privacy`} replace />
  if (!game || !policy) return <NotFound />

  const { Body, meta } = policy

  return (
    <article className="rise pt-12 sm:pt-16">
      <Link
        to={`/${slug}`}
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        {game.title}
      </Link>

      <p className="mt-10 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
        {game.title}
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-neutral-50">
        Privacy Policy
      </h1>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="text-neutral-600">Effective</dt>
          <dd className="text-neutral-400">{meta.effective}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-neutral-600">Last updated</dt>
          <dd className="text-neutral-400">{meta.updated}</dd>
        </div>
      </dl>

      <div className="mt-8 max-w-3xl space-y-4">
        {meta.intro.map((node, i) => (
          <P key={i}>{node}</P>
        ))}
      </div>

      <div className="mt-14 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
        <Contents sections={meta.sections} />
        <div className="mt-12 lg:mt-0">
          <Body />
        </div>
      </div>
    </article>
  )
}
