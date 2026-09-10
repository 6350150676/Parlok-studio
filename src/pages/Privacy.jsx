import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const EMAIL = 'lovenaruka514@gmail.com'
const SITE = 'https://parlok-studio.lovenaruka514.workers.dev'
const POLICY_URL = `${SITE}/privacy`

const EFFECTIVE = 'September 11, 2026'
const UPDATED = 'September 11, 2026'

const Section = ({ n, title, children }) => (
  <section className="mt-12">
    <h2 className="font-display text-lg font-semibold tracking-tight text-neutral-100">
      <span className="mr-2 text-neutral-600">{n}.</span>
      {title}
    </h2>
    <div className="mt-4 space-y-4">{children}</div>
  </section>
)

const Sub = ({ children }) => (
  <h3 className="mt-8 font-display text-sm font-semibold tracking-tight text-neutral-300">
    {children}
  </h3>
)

const P = ({ children }) => <p className="leading-relaxed text-neutral-400">{children}</p>

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed text-neutral-400">
        <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
        {item}
      </li>
    ))}
  </ul>
)

const Mail = () => (
  <a href={`mailto:${EMAIL}`} className="text-neutral-200 underline underline-offset-4 hover:text-white">
    {EMAIL}
  </a>
)

const Site = ({ href = SITE }) => (
  <a
    href={href}
    className="break-all text-neutral-200 underline underline-offset-4 hover:text-white"
  >
    {href}
  </a>
)

export default function Privacy() {
  useDocumentTitle('Privacy Policy')

  return (
    <article className="rise pt-12 sm:pt-16">
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-neutral-200"
      >
        <span aria-hidden="true" className="transition group-hover:-translate-x-0.5">
          ←
        </span>
        Parlok Studio
      </Link>

      <h1 className="mt-10 font-display text-4xl font-bold tracking-tight text-neutral-50">
        Privacy Policy
      </h1>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="text-neutral-600">Effective</dt>
          <dd className="text-neutral-400">{EFFECTIVE}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-neutral-600">Last updated</dt>
          <dd className="text-neutral-400">{UPDATED}</dd>
        </div>
      </dl>

      <div className="mt-8 space-y-4">
        <P>
          This Privacy Policy explains how <strong className="text-neutral-200">Lav Naruka</strong>,
          the developer of <strong className="text-neutral-200">Cat Rescue</strong>, handles
          information when you use the Cat Rescue mobile game.
        </P>
        <P>
          Cat Rescue is developed and published by Lav Naruka under the{' '}
          <strong className="text-neutral-200">Parlok Studio</strong> name.
        </P>
      </div>

      <Section n="1" title="Developer Information">
        <dl className="space-y-2 text-neutral-400">
          {[
            ['Developer', 'Lav Naruka'],
            ['Studio / Brand', 'Parlok Studio'],
            ['Game', 'Cat Rescue'],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-wrap gap-x-3">
              <dt className="w-40 shrink-0 text-neutral-600">{k}</dt>
              <dd className="text-neutral-300">{v}</dd>
            </div>
          ))}
          <div className="flex flex-wrap gap-x-3">
            <dt className="w-40 shrink-0 text-neutral-600">Privacy contact</dt>
            <dd>
              <Mail />
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-3">
            <dt className="w-40 shrink-0 text-neutral-600">Website</dt>
            <dd>
              <Site />
            </dd>
          </div>
        </dl>
        <P>
          If you have any questions about this Privacy Policy or your information, you can contact
          me at <Mail />.
        </P>
      </Section>

      <Section n="2" title="Information We Collect">
        <P>
          Cat Rescue does not require you to create an account or provide an email address, phone
          number, password, or other contact information to play the game.
        </P>
        <P>
          However, Cat Rescue includes a <strong className="text-neutral-200">daily leaderboard</strong>.
          If you choose to submit a score to the daily leaderboard, the game sends certain
          information to the leaderboard service.
        </P>
        <P>The information submitted may include:</P>

        <Sub>Display Name</Sub>
        <P>You may choose a display name for your leaderboard entry.</P>
        <P>
          The display name is limited to <strong className="text-neutral-200">12 characters</strong>.
        </P>
        <P>
          Please do not enter your real full name, email address, phone number, home address, or
          other sensitive or personal information as your display name.
        </P>

        <Sub>Player ID</Sub>
        <P>
          Cat Rescue generates a random identifier associated with the installation of the game.
        </P>
        <P>
          This identifier is used to distinguish leaderboard submissions from different
          installations.
        </P>
        <P>
          It is not intended to identify you by your real-world identity and is{' '}
          <strong className="text-neutral-200">not an advertising identifier</strong>.
        </P>

        <Sub>Game Score</Sub>
        <P>
          When you submit a daily leaderboard result, the game may send gameplay information
          associated with that result, including:
        </P>
        <Bullets
          items={['Ink used', 'Completion time', 'Other score information necessary for the leaderboard']}
        />

        <Sub>Drawn Stroke</Sub>
        <P>
          The game may send the coordinates representing the line or stroke that you drew during the
          relevant gameplay session.
        </P>
        <P>
          This information is associated with the submitted leaderboard result and is used as part
          of the game&rsquo;s leaderboard functionality.
        </P>

        <Sub>Submission Time</Sub>
        <P>A server-side timestamp may be associated with the leaderboard submission.</P>
      </Section>

      <Section n="3" title="How We Use This Information">
        <P>
          The information described above is used to operate the Cat Rescue daily leaderboard and
          related game functionality.
        </P>
        <P>It may be used to:</P>
        <Bullets
          items={[
            'Submit and display daily leaderboard scores',
            'Identify individual leaderboard submissions',
            'Record gameplay results',
            'Display leaderboard rankings',
            'Maintain the integrity of leaderboard records',
            'Operate and maintain the leaderboard system',
          ]}
        />
        <P>
          We do <strong className="text-neutral-200">not</strong> use this information for
          advertising or behavioral advertising.
        </P>
      </Section>

      <Section n="4" title="Advertising">
        <P>
          <strong className="text-neutral-200">Cat Rescue does not contain third-party advertising.</strong>
        </P>
        <P>
          The game does not use advertising networks such as Google AdMob, Unity Ads, AppLovin,
          ironSource, or similar advertising services.
        </P>
        <P>The random player ID used by the game is not an advertising ID.</P>
      </Section>

      <Section n="5" title="Analytics">
        <P>
          <strong className="text-neutral-200">Cat Rescue does not use third-party analytics services.</strong>
        </P>
        <P>
          The game does not use services such as Firebase Analytics or Unity Analytics to create
          analytics profiles about players.
        </P>
      </Section>

      <Section n="6" title="User Accounts">
        <P>Cat Rescue does not require or provide user accounts.</P>
        <P>
          You do not need to create an account, choose a password, or provide an email address to
          play the game or submit a daily leaderboard score.
        </P>
        <P>The daily leaderboard is separate from a user account system.</P>
      </Section>

      <Section n="7" title="Third-Party Service — Supabase">
        <P>
          Cat Rescue uses <strong className="text-neutral-200">Supabase</strong> to provide the
          database infrastructure for its daily leaderboard.
        </P>
        <P>
          When you submit a daily leaderboard result, the information described in this Privacy
          Policy is transmitted to our Supabase project so that the leaderboard can store and
          retrieve the relevant information.
        </P>
        <P>
          Supabase processes this information as a service provider for the leaderboard
          infrastructure.
        </P>
        <P>
          The information sent to the leaderboard is limited to the information necessary for the
          functionality described in this Privacy Policy.
        </P>
      </Section>

      <Section n="8" title="Data Retention">
        <P>
          Daily leaderboard information is intended to support the game&rsquo;s daily leaderboard.
        </P>
        <P>
          Leaderboard records are periodically removed or reset as part of the game&rsquo;s daily
          leaderboard system and are not intended to be retained indefinitely.
        </P>
        <P>
          Game-related information stored locally on your device may remain until you uninstall Cat
          Rescue or clear the game&rsquo;s application data.
        </P>
      </Section>

      <Section n="9" title="Data Deletion Requests">
        <P>
          Cat Rescue does not use user accounts, so there is no account profile to delete.
        </P>
        <P>
          If you believe that a leaderboard record associated with you should be deleted, you can
          contact <Mail />.
        </P>
        <P>
          Please provide enough information to help identify the relevant record. Please do not send
          unnecessary personal or sensitive information.
        </P>
        <P>Requests will be handled in accordance with applicable privacy and data-protection laws.</P>
      </Section>

      <Section n="10" title="Information We Do Not Collect">
        <P>
          Cat Rescue does not require or intentionally collect the following information for its
          core game functionality:
        </P>
        <Bullets
          items={[
            'Email addresses',
            'Telephone numbers',
            'Passwords',
            'Postal addresses',
            'Payment information',
            'Contacts',
            'Photos',
            'Videos',
            'Camera recordings',
            'Microphone recordings',
            'Precise location',
            'Health information',
            'Advertising profiles',
            'User accounts',
          ]}
        />
        <P>Cat Rescue does not sell personal information.</P>
        <P>
          The game does collect limited information associated with voluntary daily leaderboard
          submissions as described in Section 2.
        </P>
      </Section>

      <Section n="11" title="Security">
        <P>
          Reasonable technical measures are used to protect information processed through the Cat
          Rescue leaderboard.
        </P>
        <P>
          Leaderboard data is transmitted to the remote service using encrypted network
          communication where supported by the service.
        </P>
        <P>
          However, no method of electronic transmission or storage can be guaranteed to be
          completely secure.
        </P>
      </Section>

      <Section n="12" title="Children's Privacy">
        <P>
          Cat Rescue does not require players to create an account or provide contact information in
          order to play.
        </P>
        <P>
          Players should not enter personal or sensitive information into their leaderboard display
          name.
        </P>
        <P>
          The game&rsquo;s intended audience and content rating are provided through the applicable
          Google Play declarations.
        </P>
        <P>
          If the game&rsquo;s audience or data practices change, this Privacy Policy will be updated
          accordingly.
        </P>
      </Section>

      <Section n="13" title="Privacy Rights">
        <P>
          Depending on where you live and which privacy laws apply to you, you may have certain
          rights regarding information associated with you.
        </P>
        <P>These rights may include, where applicable:</P>
        <Bullets
          items={[
            'Requesting access to information associated with you',
            'Requesting correction of inaccurate information',
            'Requesting deletion of information',
            'Objecting to or restricting certain processing',
            'Requesting information about how your information is handled',
          ]}
        />
        <P>
          To make a privacy request, contact <Mail />.
        </P>
        <P>Nothing in this Privacy Policy limits any rights you may have under applicable law.</P>
      </Section>

      <Section n="14" title="Changes to This Privacy Policy">
        <P>
          This Privacy Policy may be updated if the game&rsquo;s functionality, data practices,
          third-party services, or applicable legal requirements change.
        </P>
        <P>
          When changes are made, the <strong className="text-neutral-200">Effective Date</strong> and{' '}
          <strong className="text-neutral-200">Last Updated</strong> date at the beginning of this
          policy will be updated.
        </P>
        <P>The latest version of this Privacy Policy will be available at:</P>
        <P>
          <Site href={POLICY_URL} />
        </P>
      </Section>

      <Section n="15" title="Contact">
        <P>
          If you have questions, concerns, or privacy requests regarding Cat Rescue, please contact:
        </P>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 leading-relaxed">
          <p className="font-display font-semibold text-neutral-100">Lav Naruka</p>
          <p className="text-sm text-neutral-500">Developer of Cat Rescue · Parlok Studio</p>
          <p className="mt-2 text-sm">
            <Mail />
          </p>
          <p className="text-sm">
            <Site />
          </p>
        </div>
      </Section>

      <p className="mt-14 border-t border-white/5 pt-6 text-xs text-neutral-600">
        © 2026 Lav Naruka. All rights reserved.
      </p>
    </article>
  )
}
