import { useEffect, useState } from 'react'

// A swipeable strip of store screenshots; tapping one opens it full size.
export default function Screenshots({ shots }) {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % shots.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + shots.length) % shots.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, shots.length])

  return (
    <>
      <ul className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        {shots.map((shot, i) => (
          <li key={shot.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width="562"
                height="1000"
                className="h-80 w-auto transition duration-500 group-hover:scale-[1.03] sm:h-96"
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <img
            src={shots[open].src}
            alt={shots[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
          />
          {shots.length > 1 && (
            <>
              <LightboxButton
                label="Previous screenshot"
                className="left-3 top-1/2 -translate-y-1/2 sm:left-6"
                onClick={() => setOpen((open - 1 + shots.length) % shots.length)}
              >
                ←
              </LightboxButton>
              <LightboxButton
                label="Next screenshot"
                className="right-3 top-1/2 -translate-y-1/2 sm:right-6"
                onClick={() => setOpen((open + 1) % shots.length)}
              >
                →
              </LightboxButton>
            </>
          )}
          <LightboxButton label="Close" className="right-3 top-3 sm:right-6 sm:top-6" onClick={() => setOpen(null)}>
            ✕
          </LightboxButton>
        </div>
      )}
    </>
  )
}

function LightboxButton({ label, className, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={`absolute grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20 ${className}`}
    >
      {children}
    </button>
  )
}
