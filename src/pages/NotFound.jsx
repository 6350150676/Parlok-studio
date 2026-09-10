import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rise pt-24">
      <p className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-50">
        Nothing here
      </h1>
      <p className="mt-3 text-neutral-400">That page does not exist.</p>
      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        Back home
      </Link>
    </div>
  )
}
