// Shared building blocks for a game's privacy policy. Each game supplies its own
// text in src/policies/<slug>.jsx; this is only the furniture.

export const Section = ({ n, title, children }) => (
  <section id={`s${n}`} className="mt-12 scroll-mt-28 first:mt-0">
    <h2 className="font-display text-lg font-semibold tracking-tight text-neutral-100">
      <span className="mr-2 text-neutral-600">{n}.</span>
      {title}
    </h2>
    <div className="mt-4 space-y-4">{children}</div>
  </section>
)

export const Sub = ({ children }) => (
  <h3 className="mt-8 font-display text-sm font-semibold tracking-tight text-neutral-300">
    {children}
  </h3>
)

export const P = ({ children }) => <p className="leading-relaxed text-neutral-400">{children}</p>

export const B = ({ children }) => <strong className="text-neutral-200">{children}</strong>

export const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed text-neutral-400">
        <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
        {item}
      </li>
    ))}
  </ul>
)

export const Link_ = ({ href, children }) => (
  <a
    href={href}
    className="break-all text-neutral-200 underline underline-offset-4 hover:text-white"
  >
    {children}
  </a>
)

export const Contents = ({ sections }) => (
  <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
    <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
      Contents
    </h2>
    <ol className="mt-4 space-y-1.5">
      {sections.map((title, i) => (
        <li key={title}>
          <a
            href={`#s${i + 1}`}
            className="flex gap-2.5 text-sm leading-snug text-neutral-500 transition hover:text-neutral-200"
          >
            <span className="w-4 shrink-0 text-right text-neutral-700">{i + 1}</span>
            {title}
          </a>
        </li>
      ))}
    </ol>
  </nav>
)
