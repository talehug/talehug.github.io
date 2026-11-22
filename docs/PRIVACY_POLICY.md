# TaleHUG Privacy Policy

**Effective date:** 22 November 2026 · **Version:** 1.0

## 1. Who we are

TaleHUG ("**TaleHUG**", "**we**", "**us**") is a bedtime story app. It is an **independent hobby project run by one
individual**, not a company. For privacy questions or requests, use the single contact address below:

- **Contact:** talehug.stories@gmail.com

The individual who runs TaleHUG is the **controller** (the person who decides how and why personal data is used) for the
data described below. No Data Protection Officer or EU/UK representative has been appointed.

## 2. Plain-language summary

- TaleHUG is for **children aged 2 to 9**, but the **account belongs to a parent or guardian**. Children do not create
  accounts, profiles or share any information with us.
- We collect only what we need: your **email address**, your **subscription status**, and, **only if you choose to use
  the Family Voice feature**, a **voice recording and the voice model made from it**.
- **A voice is biometric-style personal data.** We treat it as sensitive. We only collect it with your **explicit,
  recorded consent**, only use it to read TaleHUG stories to your family, and delete it when you ask.
- To make a family voice, we send your recording to a **third-party AI voice provider (Cartesia)**. This section
  (7) explains exactly what is sent, what comes back, and what the provider keeps.
- We **do not** run advertising, ad networks, analytics, or behavioural tracking, and we **do not sell** personal data.
- You can **delete a voice** or your **whole account** inside the app at any time.

## 3. Children's privacy

TaleHUG is designed for the **Apple Kids Category**, **Google Play Families** policy, **COPPA** (US), the **UK
Children's Code**, and the **GDPR** rules on children's data.

- The app is directed at children, but we **do not knowingly collect personal information from children**. There are no
  child profiles, no child names, ages, photos, locations, or contact details, and no way for a child to type free text
  to us.
- Everything a child cannot safely do is behind a **parent gate** (hold a button, or type a number written in words):
  the Grown-up area, purchases, voice recording, conversions, external links, settings.
- We do not show prices or links in the child area.
- **If you believe a child has given us personal information**, write to talehug.stories@gmail.com and we will delete it.
- A voice recorded for the Family Voice feature must be a voice of a **consenting adult** (see section 7.2). Do not
  record a child's voice.

## 4. What personal data we collect, why, and our legal basis

| # | Data | When | Purpose | Legal basis (GDPR / UK GDPR) |
|---|------|------|---------|------------------------------|
| 1 | **Email address** | When you sign in with an emailed link or code | Create and sign in to your account; send the sign-in email | Contract (providing the service) |
| 2 | **Google account identifier and email** | If you choose "Continue with Google" | Sign in. We receive an ID token with your Google user ID and email. We do not receive your Google password or contacts | Contract |
| 3 | **Family record and account ID** (random IDs) | On sign-up | Link your account to your subscription, favourites, voices and settings | Contract |
| 4 | **Subscription status** (plan, active/trial/expired, expiry date, store) | When subscriptions are on | Unlock paid stories and features | Contract |
| 5 | **Purchase identifier** (your random account ID shared with RevenueCat) | When you open plans or buy | Let RevenueCat tell us which account has paid and restore purchases. It is not your email and not about a child | Contract; legitimate interests (preventing fraud) |
| 6 | **Favourites** (list of story names you heart) | Paid plans | Show favourites first on every device | Contract |
| 7 | **Narrator names and pictures you choose** | If you rename or add a picture | Personalise narrators for your family | Contract / consent for any photo |
| 8 | **Family voice recording** (reference sample, includes a spoken consent statement) | Only if you use Family Voice | Create the voice (section 7) | **Explicit consent** (Art. 9(2)(a) where voice is biometric); UAE PDPL and India DPDP consent |
| 9 | **Voice model ("clone") held by our AI voice provider**, a code we assign (e.g. `tale-xxxxxxxx`), the language, the display name and photo you give it | Family Voice | Read stories in that voice | Explicit consent |
| 10 | **Generated story audio** in your family voice, with word timings | When you convert a story | Play and download your family's stories | Contract / consent |
| 11 | **Consent record** (the spoken consent in the recording, plus a timestamp `consented_at`) | Family Voice | Prove consent and honour withdrawal | Legal obligation / legitimate interests |
| 12 | **Usage counters** (conversions used this month) | Family Voice | Enforce the monthly allowance | Contract |
| 13 | **Settings** (sleep timer, speed, highlight, lights-out, Wi-Fi only, etc.) | Always | Remember your choices. Stored on your phone; some may sync with your profile | Contract |
| 14 | **Technical and security data** (IP address, device type, app version, request logs, error messages) | Always, automatically | Run, secure and rate-limit the service; prevent abuse | Legitimate interests |
| 15 | **Crash reports** | Only if enabled in the build | Find and fix bugs. No user ID, email, screen content or tap history; emails, keys and link tokens are scrubbed before sending | Legitimate interests |
| 16 | **Feature-switch values** (remote configuration) | Always | Turn features on or off safely. The service may use an installation identifier to deliver the values. It is not used for advertising or analytics | Legitimate interests |
| 17 | **Feedback you send us**: answers in the feedback form on our website (your email address, the type of device you use, ratings, and anything you choose to write; stored in **Google Forms** and a linked Google Sheet) and any emails you send to our contact address (held in the project's Gmail mailbox) | If you choose to | Improve the app and answer you | Consent / legitimate interests |
| 18 | **Downloaded stories** | When you download | Play offline | Stored **only on your phone**; we do not receive it |

**What we do not collect:** your child's name, age, photo, voice (unless a parent chooses otherwise, see section 3),
location, contacts, advertising ID, or what a child listens to for analytics or profiling. We do not use microphone
access except when you start a voice recording in the Grown-up area.

## 5. Where it lives: our service providers (processors)

We use the following providers to run TaleHUG. Each processes data only for us, under their terms and data-processing
terms. Regions and terms below were checked against each provider's published documents in November 2026.

| Provider | What they do | What data they see | Location |
|----------|--------------|--------------------|----------|
| **Supabase** | Database, sign-in, file storage (stories, voice recordings, photos, generated audio), server functions | Email, account IDs, subscription status, favourites, voice recordings, photos, generated audio, request logs | **Sydney, Australia (AWS ap-southeast-2)** |
| **Zuplo** | API gateway in front of our server | Request metadata (IP address, headers, routes), pass-through of requests | Global edge network (requests are handled at the location nearest the user) |
| **Cartesia** | **AI voice provider** (voice cloning and speech generation) | Your voice recording, the voice model, the story text we send for conversion, a code name for the voice (not your name) | United States (Cartesia states its services are provided from the US) |
| **RevenueCat** | Subscription management | Random account ID, purchase and entitlement data, store, device type | United States (AWS) |
| **Apple App Store / Google Play** | Take payment | Your payment and store account. We never see card numbers | Their own |
| **Google Forms / Google Workspace (feedback)** | Collects feedback form answers and holds the project mailbox | Whatever you type in the form or email us | Google data centres worldwide |
| **Google (Sign-In)** | Optional sign-in | Standard Google sign-in data | Their own |
| **Firebase Remote Config (Google)** | Delivers feature switches | An installation identifier and app/device basics; no analytics are enabled | Google Cloud locations worldwide (Google states Remote Config may be processed at any of its locations). Google deletes installation IDs within 180 days of a delete request |
| **Sentry** | Crash reports (only if enabled) | Scrubbed error data | EU (Frankfurt, Germany). Sentry keeps some account and settings data in the United States |
| **Resend (email delivery)** | Sends sign-in emails | Your email address and the sign-in message | **Resend** (United States, hosted on AWS) |
| **Text-to-speech engines used by our team to make *standard narrators*** | Content creation done offline by us | **No personal data** of users | Our systems |

We do not allow any provider to use your data for their own advertising. We do not sell or "share" personal data for
cross-context behavioural advertising.

## 6. Cookies and similar technologies

The mobile app does not use advertising cookies or tracking pixels. It stores your sign-in session, settings and
downloaded stories on your phone. Our website does not use cookies, advertising or analytics scripts. If you use the feedback form on the website, your answers are sent to Google Forms when you press send (see section 5).

## 7. Family Voices: AI voice cloning, in full detail

This section applies **only if you use Family Voice**. It is optional.

### 7.1 What it is

You (the parent or guardian) record a short sample of **your own voice** (or another adult's, with their consent). We use
a third-party AI service to create a **synthetic copy of that voice** (a "voice clone" or "voice model"). When you tap
"Convert", we send the story text to the same service, which generates the story read aloud in that voice. The result is
stored so you can play and download it.

### 7.2 Consent: who may record, and what you confirm

Before recording, the app shows a consent statement that you **read aloud as the first part of the recording**. By
recording you confirm that:

1. The voice is **yours**, or you have the **clear, informed permission of the adult whose voice it is** (for example a
   grandparent), who has heard how it will be used and may withdraw at any time.
2. The person is an **adult**.
3. You understand the voice will be copied by an AI service and used only to read TaleHUG stories to your household.
4. You will not use the voice to impersonate anyone, deceive, harass, or create content that is not a TaleHUG story.

We **save the spoken consent with the recording** and record the date and time (`consented_at`). You can withdraw consent
at any time by deleting the voice (section 7.7). Withdrawing does not affect lawful use before withdrawal.

**We do not allow cloning a voice of a person who has not consented, or of a public figure, or of a deceased
person without the permission of their legal representative.**

### 7.3 What we collect and where it goes (step by step)

| Step | What happens | Data | Where |
|------|--------------|------|-------|
| 1 | You choose a **language**, give the voice a **name** (and optionally a **photo**) | Display name, language, photo | Supabase (private storage) |
| 2 | You **record** about 30 to 55 seconds. The app checks length, volume and background noise on your phone | Audio recording (AAC `.m4a`) | Phone, then Supabase private storage |
| 3 | Our server checks length, size, format, language and consent, and the 2-voice limit | Metadata | Supabase |
| 4 | Our server **sends the recording to Cartesia** over an encrypted connection to create the voice model | Recording, plus a code name like `tale-xxxxxxxx`. **We never send your name, email or account ID** | Cartesia |
| 5 | Cartesia returns a **voice ID**. We store it; it is never sent to the app | Voice ID | Supabase |
| 6 | We generate a **short preview** and you approve or re-record | Generated audio | Supabase |
| 7 | When you tap **Convert** on a story, we send the **story's text** (page by page, from our own stories only) to Cartesia with your voice ID | Story text only. **Nothing you type is ever sent**; there is no free-text input | Cartesia |
| 8 | Cartesia returns audio and **word timings**. We assemble and store the story | Generated audio, timings | Supabase (private) |

### 7.4 What the AI provider does with the data

- Cartesia processes the recording **only to create the voice** and processes story text **only to generate speech** for
  that voice, on our instructions.
- **Training.** Cartesia's published terms say that, by default, content sent to it (inputs and outputs) **may be used by
  Cartesia to train and improve its models**, unless the customer opts out through Cartesia's data-controls form, and the
  opt-out only applies from the date it is made. **TaleHUG has opted out of this training through Cartesia's data-controls form.** With the opt-out in
  place, we instruct Cartesia not to use your recording, voice model, story text or generated audio to train its models.
  We cannot see inside Cartesia's systems, so this rests on Cartesia honouring the opt-out and its Data Processing
  Addendum.
- **Contract.** Cartesia's Data Processing Addendum applies to customer content, names Cartesia as our **processor**,
  includes EU Standard Contractual Clauses and the UK addendum, and says biometric data is processed only on our
  instructions. Cartesia's zero-data-retention option is **not** available for voice cloning, so we cannot switch off
  Cartesia's storage of the voice.
- **Retention at the provider:** Cartesia does not publish a fixed retention period for voice samples, voice models or
  generated audio. The voice model **stays with Cartesia until we delete it** with Cartesia's delete function, which we
  call when you delete the voice or your account. Under Cartesia's addendum, remaining copies are deleted within
  **180 days** after a customer's data is returned or the contract ends. We do not keep a copy of the audio we send to
  Cartesia beyond the storage described in section 9. If Cartesia holds anything longer than we ask, it is outside our
  control.
- **Rules Cartesia sets on us.** Cartesia only allows voices that are your own or recorded with the speaker's explicit
  consent, forbids impersonation, and requires users to be 18 or over. This is why we ask for consent (7.2) and why Family
  Voice is for adults' voices.
- We choose Cartesia because it offers a delete function for voice models. If we change provider (the app is built so it
  can be swapped) we will update this policy and, where the law requires, ask for your consent again.
- Because the provider is outside your country, your recording is **transferred internationally** (section 10).

### 7.5 Is a cloned voice "biometric data"?

A voice recording used to create a model that can reproduce a person's voice may count as **biometric data** or
**special-category / sensitive personal data** in some places (for example GDPR Art. 9 when used to identify a person,
the Illinois Biometric Information Privacy Act, Texas and Washington biometric laws, India's DPDP Act, and the UAE
PDPL). We therefore:

- ask for **explicit, separate consent** (the spoken statement plus an in-app confirmation, not bundled with the Terms);
- use the voice **only** for the purpose above, **never to identify or authenticate** anyone;
- **never sell, license, or share** the voice or recording with anyone other than the providers listed above acting for us;
- keep it in **private, access-controlled storage**; and
- delete it on request or when no longer needed (section 7.7).

### 7.6 Security of voices and generated audio

Private storage; access only through our server after sign-in; signed, expiring links; row-level security; encrypted in
transit. Voice IDs at the provider are never exposed to the app. Generated stories belong to **your family** and are only
available to your family account.

### 7.7 Retention and deletion of voices

| You do this | What is deleted | What is kept |
|-------------|-----------------|--------------|
| **Delete a voice** (Grown-up area → Family Voices) | The **reference recording and consent recording** (the consent statement is part of the recording), the **voice model at Cartesia**, and the voice **photo** | **Stories already converted in that voice** stay in your family library and keep playing (including saved copies on your phone) until you delete them under "Saved family stories". Deleting a story does not give back that month's conversion. |
| **Delete a family story** | That generated audio and its timings | Nothing else |
| **Delete your account** | **Everything**: all voices, models at Cartesia, recordings, photos, generated stories, favourites, family and subscription records | Limited records needed for law/accounting (see section 9) |

Deletion is performed immediately where possible and in any event within **30 days**. Supabase may keep daily database backups for up to **7 days**, which can briefly contain database rows
about a deleted item; stored files (recordings, audio, photos) are not part of those backups. Backups are encrypted and
expire on that cycle. If the provider is unreachable when you delete, the
request stays pending and is repeated until it succeeds.

### 7.8 Misuse and safety

We only send TaleHUG story text to the voice provider, and generated audio is only playable inside the app by your
family. We may suspend Family Voice and delete a voice if we reasonably believe it was recorded without consent, is a
child's voice, or is being misused. We may share information with authorities where the law requires.

### 7.9 AI disclosure

Voices created by Family Voice are **AI-generated (synthetic)**. The app labels them as such where required by law.
Standard narrators are either human recordings or AI-generated speech made by us; we label which where required.

## 8. How we use data (and what we never do)

We use personal data to: provide and secure the app; sign you in; process subscriptions; deliver Family Voice; respond to
support and legal requests; and fix bugs and abuse. We **never**: show ads; build advertising profiles; sell or rent data;
use a child's data for behavioural targeting; use voices to train our own AI models; or add third-party tracking SDKs.

**Automated decisions:** none that produce legal or similarly significant effects. The recording quality check is
automatic but only tells you to record again.

## 9. How long we keep data

| Data | Kept for |
|------|----------|
| Account, family record, favourites, settings | Until you delete the account |
| Subscription records | While active, plus up to 7 years for tax and accounting (stored without your email where possible) |
| Voice recordings and consent record | Until you delete the voice or account  |
| Voice model at Cartesia | Until we delete it on your request / account deletion |
| Generated family stories | Until you delete them or your account |
| Server and security logs | Up to **7 days** at Supabase; the gateway may keep request logs for a short period under its own settings |
| Crash reports | **30 days** (Sentry Developer plan; 90 days on paid plans) |
| Feedback form answers (Google Forms) and emails to our contact address | Up to 2 years, or until you ask us to delete them by emailing us |
| Sign-in emails at Resend | Kept by Resend under its terms while we have an account, and deleted within 90 days after we close it |
| Purchase records at RevenueCat | While we use the service; RevenueCat may keep records longer where the law requires |
| Sign-in sessions | Until you sign out or delete the account; expired sessions are removed within 24 hours |

## 10. International transfers

Our providers are in different countries (see section 5). When personal data leaves your country, we rely on legal
tools such as the **EU/UK Standard Contractual Clauses**, adequacy decisions, the **UAE PDPL** transfer rules, India's
DPDP rules, and your consent where required. The safeguards are: **Supabase** (Standard Contractual Clauses in its Data Processing Addendum; data stored in Australia),
**Cartesia, RevenueCat and Resend** (Standard Contractual Clauses and the UK addendum in their addenda; data processed in
the United States), **Sentry** (EU-US Data Privacy Framework, with Standard Contractual Clauses as a fallback), and **Google /
Firebase** (EU-US Data Privacy Framework and Google's data-processing terms). Australia and the United States are not
"adequate" for every country, so the contract-based tools above are the main safeguard. Ask us for a copy of the safeguards.

## 11. Your rights

Depending on where you live (including under **GDPR/UK GDPR**, **UAE Federal Decree-Law No. 45 of 2021 (PDPL)**,
**India's DPDP Act 2023**, and **CCPA/CPRA and similar US state laws**) you may have the right to:

- **access** the data we hold and get a copy;
- **correct** inaccurate data;
- **delete** your data ("erasure");
- **withdraw consent** at any time (delete the voice or account);
- **restrict or object** to processing based on legitimate interests;
- **data portability**;
- **complain** to a regulator (for example your local data protection authority, the UAE Data Office, the UK ICO, or
  your state attorney general).

**To exercise any right**, use the in-app controls (Settings → Delete account; Family Voices → Delete voice) or email
talehug.stories@gmail.com. We reply within **30 days** (45 for some US states). We may need to confirm you own the account
first. **We do not discriminate against you for using your rights.**

**US residents:** we do not "sell" or "share" personal information, and do not use sensitive personal information
(including voice) beyond providing the service you asked for.

## 12. Security

Encryption in transit; private storage buckets; row-level security on every table; signed and expiring links; sign-in
required for every function; webhook secrets verified; secrets held only on the server, never in the app; limited staff
access; rate limiting. No system is perfectly secure. If a breach is likely to harm you, we will tell you and regulators
as the law requires (for example within **72 hours** under GDPR).

## 13. Subscriptions and payments

Payments are handled entirely by Apple or Google. We never receive your card details. Deleting your TaleHUG account
**does not cancel** your store subscription; please cancel it in your store account. RevenueCat keeps purchase records
under its own retention rules; you can ask us to request their deletion.

## 14. Offline use and your phone

Downloaded stories and settings are on your phone only. Uninstalling the app or using Downloads → Delete removes them.

## 15. Third-party links

Links leaving the app are behind the parent gate. Other sites have their own policies.

## 16. Changes to this policy

If we change this policy materially (for example by adding a new provider, a new use of voice data, or a new country of
processing), we will tell you in the app and **ask for fresh consent where required** before the change affects your voice
data. The date at the top shows the latest version.

## 17. Contact

talehug.stories@gmail.com
