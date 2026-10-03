import InkMark from './InkMark'

// The game's real store icon when it has one, the studio ink mark otherwise.
export default function GameIcon({ game, className = '' }) {
  if (!game.icon) return <InkMark accent={game.accent} className={className} />

  return (
    <img
      src={game.icon}
      alt=""
      width="512"
      height="512"
      className={`rounded-[22%] object-cover ring-1 ring-white/10 ${className}`}
    />
  )
}
