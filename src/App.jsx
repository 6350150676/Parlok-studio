import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { studio } from './data/studio'
import InkMark from './components/InkMark'
import Home from './pages/Home'
import Game from './pages/Game'
import GamePrivacy from './pages/GamePrivacy'
import { firstPolicySlug } from './policies'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="bg-studio flex min-h-screen flex-col font-sans text-neutral-300">
      <header className="sticky top-0 z-10 border-b border-white/5 bg-[#08090a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
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

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 sm:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* the studio-level URL predates per-game policies; keep it working */}
          <Route
            path="/privacy"
            element={
              firstPolicySlug ? <Navigate to={`/${firstPolicySlug}/privacy`} replace /> : <NotFound />
            }
          />
          <Route path="/:slug" element={<Game />} />
          <Route path="/:slug/privacy" element={<GamePrivacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 sm:px-8">
          <p className="font-display text-xs tracking-wide text-neutral-600">
            © {new Date().getFullYear()} {studio.name}
          </p>
          <div className="flex items-center gap-5">
            {firstPolicySlug && (
              <Link
                to={`/${firstPolicySlug}/privacy`}
                className="text-xs text-neutral-600 transition hover:text-neutral-300"
              >
                Privacy
              </Link>
            )}
            <a
              href={`mailto:${studio.email}`}
              className="text-xs text-neutral-600 transition hover:text-neutral-300"
            >
              {studio.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
