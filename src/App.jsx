import { Routes, Route, Link } from 'react-router-dom'
import { studio } from './data/studio'
import InkMark from './components/InkMark'
import Home from './pages/Home'
import Game from './pages/Game'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="bg-studio flex min-h-screen flex-col font-sans text-neutral-300">
      <header className="sticky top-0 z-10 border-b border-white/5 bg-[#08090a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link to="/" className="group flex items-center gap-2.5">
            <InkMark accent="#e5e5e5" className="h-7 w-7" />
            <span className="font-display text-sm font-semibold tracking-tight text-neutral-200 transition group-hover:text-white">
              {studio.name}
            </span>
          </Link>
          <a
            href={`mailto:${studio.email}`}
            className="text-sm text-neutral-500 transition hover:text-neutral-200"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-3 px-6 py-8">
          <p className="font-display text-xs tracking-wide text-neutral-600">
            © {new Date().getFullYear()} {studio.name}
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="text-xs text-neutral-600 transition hover:text-neutral-300"
          >
            {studio.email}
          </a>
        </div>
      </footer>
    </div>
  )
}
