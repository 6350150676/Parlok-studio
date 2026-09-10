export default function StatusPill({ children, accent = '#f4a261' }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-neutral-400">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: accent }}
      />
      {children}
    </span>
  )
}
