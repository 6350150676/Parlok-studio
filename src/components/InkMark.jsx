// The studio motif, and literally the game: one drawn stroke over a round cat.
export default function InkMark({ accent = '#f4a261', className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill={accent} fillOpacity="0.12" />
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="11.5"
        fill="none"
        stroke={accent}
        strokeOpacity="0.3"
      />
      <path
        d="M11 29.5C15.5 18.5 32.5 18.5 37 29.5"
        fill="none"
        stroke={accent}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="34.5" r="4" fill={accent} fillOpacity="0.9" />
    </svg>
  )
}
