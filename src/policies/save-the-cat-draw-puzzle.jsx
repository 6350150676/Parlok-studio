import { Section, Sub, P, B, Bullets, Link_ } from '../components/policy'

const EMAIL = 'lovenaruka514@gmail.com'
const SITE = 'https://parlok-studio.lovenaruka514.workers.dev'
const POLICY_URL = `${SITE}/save-the-cat-draw-puzzle/privacy`

export const meta = {
  effective: 'October 8, 2026',
  updated: 'October 8, 2026',
  // Drives the Request Data Deletion form at the top of the page.
  deletion: { email: EMAIL, within: '30 days' },
  intro: [
    <>
      This Privacy Policy explains how <B>Lav Naruka</B>, the developer of{' '}
      <B>Save the Cat: Draw Puzzle</B>, handles information when you use the Save the Cat: Draw
      Puzzle mobile game.
    </>,
    <>
      Save the Cat: Draw Puzzle is developed and published by Lav Naruka under the{' '}
      <B>Parlok Studio</B> name.
    </>,
  ],
  sections: [
    'Developer Information',
    'Information We Collect',
    'How We Use Information',
    'Advertising — Google AdMob',
    'Advertising — Unity Ads',
    'Advertising Frequency and Rewarded Ads',
    'Analytics and Crash Reporting',
    'In-App Purchases',
    'User Accounts',
    'Third-Party Service — Supabase',
    'Third-Party Service — Google AdMob',
    'Data Retention',
    'Data Deletion Requests',
    'Information We Do Not Collect for Core Game Functionality',
    'Security',
    "Children's Privacy",
    'Privacy Rights',
    'Changes to This Privacy Policy',
    'Contact',
  ],
}


const Mail = () => <Link_ href={`mailto:${EMAIL}`}>{EMAIL}</Link_>
const Site = ({ href = SITE }) => <Link_ href={href}>{href}</Link_>

const Field = ({ label, children }) => (
  <div className="flex flex-wrap gap-x-3">
    <dt className="w-40 shrink-0 text-neutral-600">{label}</dt>
    <dd className="text-neutral-300">{children}</dd>
  </div>
)

export default function SaveTheCatPolicy() {
  return (
    <>
      <Section n="1" title="Developer Information">
        <dl className="space-y-2">
          <Field label="Developer">Lav Naruka</Field>
          <Field label="Studio / Brand">Parlok Studio</Field>
          <Field label="Game">Save the Cat: Draw Puzzle</Field>
          <Field label="Privacy contact">
            <Mail />
          </Field>
          <Field label="Website">
            <Site />
          </Field>
        </dl>
        <P>
          If you have questions about this Privacy Policy or your information, you can contact us at{' '}
          <Mail />.
        </P>
      </Section>

      <Section n="2" title="Information We Collect">
        <P>
          Save the Cat: Draw Puzzle does not require you to create an account or provide an email
          address, phone number, password, or other contact information to play the game.
        </P>
        <P>However, the game may process limited information for the following purposes:</P>
        <Bullets
          items={[
            'Daily leaderboard functionality, if enabled and used by you',
            'Advertising through Google AdMob and Unity Ads',
            'Gameplay analytics and crash reporting through Firebase',
            'In-app purchases through Google Play',
            'Basic operation and security of third-party services used by the game',
          ]}
        />

        <Sub>Daily Leaderboard</Sub>
        <P>
          If you choose to submit a score to the game&rsquo;s daily leaderboard, the game may send
          certain information to the leaderboard service.
        </P>
        <P>The information submitted may include:</P>

        <Sub>Display Name</Sub>
        <P>You may choose a display name for your leaderboard entry.</P>
        <P>
          The display name is limited to <B>12 characters</B>.
        </P>
        <P>
          Please do not enter your real full name, email address, phone number, home address, or
          other sensitive or personal information as your display name.
        </P>

        <Sub>Player ID</Sub>
        <P>The game may generate a random identifier associated with the installation of the game.</P>
        <P>
          This identifier is used to distinguish leaderboard submissions from different
          installations.
        </P>
        <P>
          It is not intended to identify you by your real-world identity and is separate from the
          advertising identifiers used by advertising services.
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
          This information may be associated with the submitted leaderboard result and is used for
          leaderboard and related game functionality.
        </P>

        <Sub>Submission Time</Sub>
        <P>A server-side timestamp may be associated with a leaderboard submission.</P>
      </Section>

      <Section n="3" title="How We Use Information">
        <P>
          Information submitted through the daily leaderboard is used to operate the game&rsquo;s
          leaderboard and related functionality.
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
        <P>Information processed by advertising services is used for purposes such as:</P>
        <Bullets
          items={[
            'Serving advertisements',
            'Measuring advertising performance',
            'Limiting the frequency of advertisements',
            'Preventing fraud and abuse',
            'Providing personalized or non-personalized advertising, where applicable and permitted',
          ]}
        />
        <P>
          Google Play requires developers to disclose collection and sharing performed by third-party
          SDKs used in their apps.
        </P>
      </Section>

      <Section n="4" title="Advertising — Google AdMob">
        <P>
          Save the Cat: Draw Puzzle uses <B>Google AdMob</B> to display advertisements.
        </P>
        <P>The game may display:</P>
        <Bullets
          items={['Banner advertisements', 'Interstitial advertisements', 'Rewarded advertisements']}
        />
        <P>
          AdMob is a service provided by <B>Google LLC</B>.
        </P>
        <P>
          Advertising services may process information such as device and advertising identifiers,
          IP address, device information, app information, and information relating to ad delivery,
          measurement, fraud prevention, and advertising personalization, depending on the applicable
          settings, user choices, region, and Google&rsquo;s policies.
        </P>
        <P>
          Google&rsquo;s advertising technologies may use identifiers and other information to
          provide, measure, and protect advertising services. Google requires publishers to clearly
          disclose data collection and use associated with its advertising services.
        </P>
        <P>
          Advertising-related processing is performed through the advertising services integrated
          into the game.
        </P>

        <Sub>Personalized and Non-Personalized Advertising</Sub>
        <P>
          Depending on your location, applicable privacy requirements, device settings, and consent
          choices, advertisements may be personalized or non-personalized.
        </P>
        <P>
          You may have controls available through your device, Google, or applicable consent
          mechanisms to manage certain advertising preferences.
        </P>
        <P>
          For example, Google&rsquo;s advertising systems support non-personalized and limited
          advertising in applicable circumstances. Even when personalization is disabled, certain
          information such as an IP address may still be processed to deliver advertisements and
          prevent fraud or abuse.
        </P>
        <P>
          For more information about how Google uses information in connection with advertising,
          please refer to Google&rsquo;s privacy information and advertising policies.
        </P>
      </Section>

      <Section n="5" title="Advertising — Unity Ads">
        <P>
          Some advertisements in the game are served by <B>Unity Ads</B>, a service provided by{' '}
          <B>Unity Technologies</B>, through Google AdMob mediation.
        </P>
        <P>
          When Unity Ads serves an advertisement, Unity may process information such as device and
          advertising identifiers, IP address, device information, app information, and information
          relating to ad delivery, measurement, and fraud prevention, depending on the applicable
          settings, user choices, region, and Unity&rsquo;s policies.
        </P>
        <P>For more information, please refer to Unity&rsquo;s privacy policy.</P>
      </Section>

      <Section n="6" title="Advertising Frequency and Rewarded Ads">
        <P>
          Save the Cat: Draw Puzzle may use interstitial advertisements at natural breaks in
          gameplay.
        </P>
        <P>
          Interstitial advertisements are not intended to appear while you are actively drawing or in
          the middle of a puzzle.
        </P>
        <P>
          The game may also provide optional rewarded advertisements. For example, you may
          voluntarily choose to watch a rewarded advertisement in exchange for an in-game hint or
          other disclosed reward.
        </P>
        <P>
          Rewarded advertisements are optional. You can continue playing without accepting a rewarded
          advertisement.
        </P>
        <P>The game does not require users to click advertisements in order to play.</P>
      </Section>

      <Section n="7" title="Analytics and Crash Reporting">
        <P>
          Save the Cat: Draw Puzzle uses <B>Firebase Analytics</B> and <B>Firebase Crashlytics</B>,
          services provided by <B>Google LLC</B>, to understand how the game is played and to fix
          crashes.
        </P>

        <Sub>Firebase Analytics</Sub>
        <P>The game sends gameplay events to Firebase Analytics, such as:</P>
        <Bullets
          items={[
            'Levels started, completed, failed, or quit, with stars, time, and ink used',
            'Hints offered and used',
            'Advertisements shown and rewards earned',
            'In-game coins earned and spent, and items unlocked or equipped',
            'Screens opened',
          ]}
        />
        <P>
          Firebase Analytics also collects information such as an app-instance identifier, device
          model, operating system version, app version, approximate location derived from IP
          address, and session information.
        </P>

        <Sub>Firebase Crashlytics</Sub>
        <P>
          If the game crashes or hits an error, Firebase Crashlytics collects a crash report. This
          may include the error and stack trace, device model, operating system version, app
          version, the time of the crash, and a short log of the in-game actions leading up to it.
        </P>
        <P>
          This information is used to fix bugs, improve levels and gameplay, and understand how the
          game is used. It is not used to identify you by your real-world identity.
        </P>
        <P>
          Advertising services may also collect and process information necessary for advertising
          measurement, reporting, fraud prevention, and related advertising functionality as
          described in this Privacy Policy.
        </P>
      </Section>

      <Section n="8" title="In-App Purchases">
        <P>
          Save the Cat: Draw Puzzle offers optional in-app purchases. Purchases are processed by{' '}
          <B>Google Play Billing</B>, and the purchase flow inside the game is handled by{' '}
          <B>Unity IAP</B> (Unity Technologies).
        </P>
        <P>
          We never see or store your card number or other payment details. Payment information is
          handled by Google Play under Google&rsquo;s own terms and privacy policy.
        </P>
        <P>
          When you make a purchase, the game receives only the order ID and details of what was
          bought, which are used to deliver the item and confirm the purchase.
        </P>
      </Section>

      <Section n="9" title="User Accounts">
        <P>Save the Cat: Draw Puzzle does not require or provide traditional user accounts.</P>
        <P>
          You do not need to create an account, choose a password, or provide an email address to
          play the game.
        </P>
        <P>
          The daily leaderboard, where available, is separate from a traditional user account
          system.
        </P>
      </Section>

      <Section n="10" title="Third-Party Service — Supabase">
        <P>
          Save the Cat: Draw Puzzle may use <B>Supabase</B> to provide database infrastructure for
          its daily leaderboard.
        </P>
        <P>
          When you submit a daily leaderboard result, information described in this Privacy Policy
          may be transmitted to the game&rsquo;s Supabase project so that the leaderboard can store
          and retrieve the relevant information.
        </P>
        <P>
          Supabase processes this information as a service provider for the leaderboard
          infrastructure.
        </P>
        <P>
          The information sent to the leaderboard is limited to information necessary for the
          functionality described in this Privacy Policy.
        </P>
      </Section>

      <Section n="11" title="Third-Party Service — Google AdMob">
        <P>
          Save the Cat: Draw Puzzle uses the Google Mobile Ads SDK / Google AdMob to provide
          advertising functionality.
        </P>
        <P>
          Because the AdMob SDK is integrated into the game, Google and its advertising partners may
          process information generated through the SDK for advertising-related purposes.
        </P>
        <P>This may include information such as:</P>
        <Bullets
          items={[
            'Advertising or device identifiers',
            'Device type and model',
            'Operating system information',
            'App version',
            'IP address',
            'Approximate geographic information derived from network information, where applicable',
            'Advertising interaction and delivery information',
            'Information used to detect fraud, abuse, and invalid activity',
            'Information used for advertising measurement and reporting',
          ]}
        />
        <P>
          The exact information processed can depend on the user&rsquo;s device, region, consent
          choices, advertising settings, and the configuration of Google&rsquo;s services.
        </P>
        <P>
          Google&rsquo;s policies require publishers to disclose the collection, sharing, and use of
          information resulting from Google products and services.
        </P>
        <P>For more information, please refer to Google&rsquo;s applicable privacy documentation.</P>
      </Section>

      <Section n="12" title="Data Retention">
        <P>Daily leaderboard information is intended to support the game&rsquo;s daily leaderboard.</P>
        <P>
          Leaderboard records may be periodically removed or reset as part of the game&rsquo;s daily
          leaderboard system and are not intended to be retained indefinitely.
        </P>
        <P>
          Game-related information stored locally on your device may remain until you uninstall Save
          the Cat: Draw Puzzle or clear the game&rsquo;s application data.
        </P>
        <P>
          Information processed by third-party services such as Google AdMob, Unity Ads, Firebase,
          Google Play, or Supabase may be
          retained according to their respective policies and applicable legal requirements.
        </P>
      </Section>

      <Section n="13" title="Data Deletion Requests">
        <P>
          Save the Cat: Draw Puzzle does not use traditional user accounts, so there is no account
          profile that you need to delete.
        </P>
        <P>
          If you believe that a leaderboard record associated with you should be deleted, you can
          contact <Mail />.
        </P>
        <P>
          You can also use the{' '}
          <a
            href="#delete-data"
            className="text-neutral-200 underline underline-offset-4 hover:text-white"
          >
            Request Data Deletion
          </a>{' '}
          form at the top of this page.
        </P>
        <P>
          Please provide enough information to help identify the relevant record. Please do not send
          unnecessary personal or sensitive information.
        </P>
        <P>Requests will be handled in accordance with applicable privacy and data-protection laws.</P>
        <P>
          Please note that information processed independently by third-party providers such as
          Google or Unity may be subject to their own privacy policies and procedures.
        </P>
      </Section>

      <Section n="14" title="Information We Do Not Collect for Core Game Functionality">
        <P>
          Save the Cat: Draw Puzzle does not require or intentionally collect the following
          information for its core game functionality:
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
            'Traditional user accounts',
          ]}
        />
        <P>
          However, third-party advertising and analytics services integrated into the game may
          process device, advertising, network, and related information as described in the{' '}
          <B>Advertising</B> and <B>Analytics</B> sections of this Privacy Policy.
        </P>
        <P>
          In-app purchases are paid through Google Play, and the game never receives your payment
          details, as described in the <B>In-App Purchases</B> section.
        </P>
        <P>
          Save the Cat: Draw Puzzle does not sell personal information as an independent business
          practice.
        </P>
      </Section>

      <Section n="15" title="Security">
        <P>
          Reasonable technical measures are used to protect information processed through the
          game&rsquo;s services.
        </P>
        <P>
          Leaderboard data is transmitted to remote services using encrypted network communication
          where supported by the service.
        </P>
        <P>
          Advertising communication is handled through the security mechanisms provided by the
          Google Mobile Ads SDK and Google&rsquo;s services.
        </P>
        <P>
          However, no method of electronic transmission or storage can be guaranteed to be
          completely secure.
        </P>
      </Section>

      <Section n="16" title="Children's Privacy">
        <P>
          Save the Cat: Draw Puzzle does not require players to create an account or provide contact
          information in order to play.
        </P>
        <P>Players should not enter personal or sensitive information into a leaderboard display name.</P>
        <P>
          If the game is directed toward children or is otherwise subject to children&rsquo;s privacy
          requirements, advertising and data practices will be configured and handled in accordance
          with applicable laws and platform requirements.
        </P>
        <P>
          Google requires additional requirements for advertising and data handling when an app is
          directed toward children, including restrictions on personalized advertising and
          requirements concerning advertising SDKs.
        </P>
        <P>
          If the game&rsquo;s intended audience or data practices change, this Privacy Policy will be
          updated accordingly.
        </P>
      </Section>

      <Section n="17" title="Privacy Rights">
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

      <Section n="18" title="Changes to This Privacy Policy">
        <P>
          This Privacy Policy may be updated if the game&rsquo;s functionality, data practices,
          third-party services, advertising services, or applicable legal requirements change.
        </P>
        <P>
          When changes are made, the <B>Effective Date</B> and <B>Last Updated</B> date at the
          beginning of this policy will be updated.
        </P>
        <P>The latest version of this Privacy Policy will be available at:</P>
        <P>
          <Site href={POLICY_URL} />
        </P>
      </Section>

      <Section n="19" title="Contact">
        <P>
          If you have questions, concerns, or privacy requests regarding Save the Cat: Draw Puzzle,
          please contact:
        </P>
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 leading-relaxed">
          <p className="font-display font-semibold text-neutral-100">Lav Naruka</p>
          <p className="text-sm text-neutral-500">
            Developer of Save the Cat: Draw Puzzle · Parlok Studio
          </p>
          <p className="mt-2 text-sm">
            <Mail />
          </p>
          <p className="text-sm">
            <Site />
          </p>
        </div>
      </Section>

      <div className="mt-14 space-y-1 border-t border-white/5 pt-6 text-xs text-neutral-600">
        <p>© 2026 Lav Naruka. All rights reserved.</p>
        <p>© 2026 Parlok Studio</p>
      </div>
    </>
  )
}
