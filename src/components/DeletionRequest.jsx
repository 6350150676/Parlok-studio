import { useState } from 'react'

// The site is static, so FormSubmit turns a submission into an email. If it can't
// be reached, the user gets a pre-filled mailto instead — the path never dead-ends.

const input =
  'w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-600 focus:border-white/30'

const Field = ({ label, hint, optional, children }) => (
  <label className="block">
    <span className="flex items-baseline justify-between gap-3 text-sm text-neutral-300">
      {label}
      <span className="text-xs text-neutral-600">{optional ? 'Optional' : 'Required'}</span>
    </span>
    <span className="mt-1.5 block">{children}</span>
    {hint && <span className="mt-1.5 block text-xs leading-relaxed text-neutral-600">{hint}</span>}
  </label>
)

const TrashIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)

const CheckIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export default function DeletionRequest({ gameTitle, email, within, accent }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', playerId: '', rank: '', contact: '', honey: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const name = form.name.trim()
  const contact = form.contact.trim()
  const subject = `Data deletion request — ${gameTitle}`
  const details = [
    ['Leaderboard name', name],
    ['Player ID', form.playerId.trim() || '—'],
    ['Rank / score', form.rank.trim() || '—'],
    ['Contact email', contact || '—'],
  ]
  const mailto =
    `mailto:${email}?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent([`Game: ${gameTitle}`, ...details.map(([k, v]) => `${k}: ${v}`)].join('\n'))}`

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending' || !name) return
    // The hidden field is invisible to people; only bots fill it in.
    if (form.honey) return setStatus('sent')

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          ...(contact && { _replyto: contact }),
          Game: gameTitle,
          ...Object.fromEntries(details),
          'Sent from': window.location.href,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || String(data.success) !== 'true') {
        throw new Error(data.message || `HTTP ${res.status}`)
      }
      setStatus('sent')
    } catch (err) {
      console.error('Deletion request failed:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="delete-data"
      aria-labelledby="delete-data-title"
      className="mt-10 scroll-mt-28 rounded-2xl border p-6 sm:p-8"
      style={{ borderColor: `${accent}40`, backgroundColor: `${accent}0a` }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}1f`, color: accent }}
        >
          <TrashIcon className="h-5 w-5" />
        </span>
        <h2
          id="delete-data-title"
          className="font-display text-xl font-semibold tracking-tight text-neutral-50"
        >
          Request Data Deletion
        </h2>
      </div>

      <p className="mt-4 max-w-3xl leading-relaxed text-neutral-400">
        {gameTitle} has no user accounts. If you&rsquo;ve submitted a score to the daily leaderboard
        and want that data removed, request it here and we&rsquo;ll delete it within {within}.
      </p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          'Enter the leaderboard name you used',
          'Add your Player ID or rank if you know it',
          `We delete the matching data within ${within}`,
        ].map((step, i) => (
          <li
            key={step}
            className="flex gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-sm leading-snug text-neutral-400"
          >
            <span className="font-display font-semibold" style={{ color: accent }}>
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-6 text-sm leading-relaxed sm:grid-cols-2">
        <div>
          <h3 className="font-display font-semibold text-neutral-200">What we delete</h3>
          <p className="mt-2 text-neutral-400">
            Every leaderboard entry matching your details: display name, player ID, scores, drawn
            strokes and submission times.
          </p>
        </div>
        <div>
          <h3 className="font-display font-semibold text-neutral-200">What we keep</h3>
          <p className="mt-2 text-neutral-400">
            Your request email, only as long as needed to handle it. Advertising data is held by
            Google AdMob, not by us — you can reset your advertising ID in your device&rsquo;s Google
            ad settings.
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-500">
        Data stored on your device is removed when you uninstall the game or clear its app data.
      </p>

      <div className="mt-8" aria-live="polite">
        {status === 'sent' ? (
          <div className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-5 sm:p-6">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accent}1f`, color: accent }}
            >
              <CheckIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-semibold text-neutral-100">Request received</p>
              <p className="mt-1.5 leading-relaxed text-neutral-400">
                We&rsquo;ll delete the leaderboard data{name && <> for &ldquo;{name}&rdquo;</>} within{' '}
                {within}
                {contact && <> and email you at {contact} when it&rsquo;s done</>}. Sorry for any
                inconvenience — and thank you for playing {gameTitle}.
              </p>
            </div>
          </div>
        ) : !open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold text-neutral-950 transition hover:brightness-110"
            style={{ backgroundColor: accent }}
          >
            <TrashIcon className="h-4 w-4" />
            Request Data Deletion
          </button>
        ) : (
          <form
            onSubmit={submit}
            className="space-y-5 rounded-2xl border border-white/5 bg-black/20 p-5 sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Leaderboard name" hint="Exactly as it appeared on the leaderboard.">
                <input
                  required
                  autoFocus
                  maxLength={12}
                  autoComplete="off"
                  value={form.name}
                  onChange={set('name')}
                  className={input}
                />
              </Field>
              <Field
                label="Player ID"
                optional
                hint="If the game shows it — it's the surest way to find your records."
              >
                <input
                  maxLength={64}
                  autoComplete="off"
                  value={form.playerId}
                  onChange={set('playerId')}
                  className={input}
                />
              </Field>
              <Field label="Rank or score" optional hint="And roughly which day, if you remember.">
                <input
                  maxLength={80}
                  autoComplete="off"
                  placeholder="e.g. #12 on 14 Sep"
                  value={form.rank}
                  onChange={set('rank')}
                  className={input}
                />
              </Field>
              <Field label="Email" optional hint="Only if you'd like us to confirm when it's done.">
                <input
                  type="email"
                  maxLength={120}
                  autoComplete="email"
                  value={form.contact}
                  onChange={set('contact')}
                  className={input}
                />
              </Field>
            </div>

            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.honey}
              onChange={set('honey')}
              className="hidden"
            />

            <p className="text-xs leading-relaxed text-neutral-500">
              We will use the information submitted in this form only to identify the applicable
              leaderboard data and process your deletion request. It reaches us by email through
              FormSubmit (formsubmit.co).
            </p>

            {status === 'error' && (
              <p
                role="alert"
                className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm leading-relaxed text-red-200/90"
              >
                We couldn&rsquo;t send that just now.{' '}
                <a href={mailto} className="underline underline-offset-4 hover:text-white">
                  Email your request instead
                </a>{' '}
                — it&rsquo;s already filled in.
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <button
                type="submit"
                disabled={status === 'sending' || !name}
                className="rounded-xl px-5 py-3 font-display text-sm font-semibold text-neutral-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: accent }}
              >
                {status === 'sending' ? 'Sending…' : 'Submit deletion request'}
              </button>
              <span className="text-xs text-neutral-600">
                or email{' '}
                <a
                  href={mailto}
                  className="text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
                >
                  {email}
                </a>
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
