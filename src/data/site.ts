// Single source of truth for all TaleHUG facts. Items marked TBC need an owner decision.
export const site = {
  name: 'TaleHUG',
  tagline: 'Bedtime stories in the voice your child loves most.',
  shortDescription:
    'TaleHUG: little stories, big-hearted memories. Calm bedtime stories read in a voice they love. No ads, no tracking.',
  // [TBC: store links and launch date] Set to real URLs to switch the buttons on.
  appStoreUrl: '',
  playStoreUrl: '',
  // [TBC: support email, seller / company name]
  supportEmail: 'talehug.stories@gmail.com',
  sellerName: '',
  privacyUrl: '/privacy/',
  termsUrl: '/terms/',
  // Flip to true once plan names and prices are confirmed by the owner.
  plansConfirmed: false,
};

export const steps = [
  { n: '1', title: 'Pick a story', text: 'Browse a library of illustrated stories. New ones arrive without updating the app.' },
  { n: '2', title: 'Pick who reads it', text: 'Each story can be read by different narrators, shown as friendly round faces.' },
  { n: '3', title: 'Settle in', text: 'Pages turn with the voice while the word being read lights up. Sleep timer on, lights out.' },
];

export const features = [
  { title: 'Read-along words', text: 'The word being read lights up, so little ones can follow along.' },
  { title: 'Sleep timer', text: '10, 20 or 30 minutes, with a gentle fade-out at the end.' },
  { title: 'Lights-out mode', text: 'The screen goes dark after two minutes and only the story plays.' },
  { title: 'Soft background music', text: 'Under the voice, on or off, with three volume levels.' },
  { title: 'Works offline', text: 'Download stories and listen anywhere, with no internet.' },
  { title: 'Screen locked? Still plays', text: 'Lock-screen controls keep the story going.' },
  { title: 'More than one language', text: 'English first. Hindi, Tamil and Malayalam supported, Arabic planned.' },
  { title: 'Made for little hands', text: 'Covers, faces and big buttons that little fingers can find.' },
];

export const safety = [
  { title: 'No ads, no tracking', text: 'No third-party advertising or analytics. Crash reports carry no personal data.' },
  { title: 'A parent gate', text: 'Settings, downloads, subscription and every outside link sit behind a gate a child cannot pass.' },
  { title: 'No child data', text: 'The account belongs to the adult. Nothing about the child is asked for.' },
  { title: 'Consent and deletion', text: 'Family voices need recorded consent and can be deleted completely, along with everything made from them.' },
  { title: 'You are in control', text: 'Choose language, hide stories, set the timer default, and delete your account from inside the app.' },
  { title: 'Built for kids’ stores', text: 'Designed for the Apple Kids Category and Google Play Families, with COPPA, GDPR and UAE PDPL in mind.' },
];

export const plans = [
  {
    name: 'Little Explorer',
    price: 'Free',
    items: ['A starter set of free stories', '2 narrators'],
  },
  {
    name: 'Story Lover',
    price: 'AED 14.99 / month',
    note: 'AED 149.99 a year, with a 7-day free trial on the yearly plan',
    items: ['The full story library', 'All standard narrators', 'Favourites'],
    featured: true,
  },
  {
    name: 'My Family Voice',
    price: 'AED 29.99 / month',
    note: 'Coming soon',
    items: ['Everything in Story Lover', 'Your own family voices', 'A monthly number of own-voice stories'],
  },
];

export const faqs = [
  { q: 'What ages is TaleHUG for?', a: 'Children aged 2 to 9. Parents and grandparents manage the account.' },
  { q: 'Which languages are available?', a: 'English first. Hindi, Tamil and Malayalam stories are supported, with Arabic planned. The grown-up chooses the reading language.' },
  { q: 'Can we use it offline?', a: 'Yes. Download stories on Wi-Fi and listen anywhere. You can set downloads to Wi-Fi only.' },
  { q: 'How does the family voice work?', a: 'Record a short passage in the app, or upload a voice note such as one from a grandparent far away. The person’s consent is spoken at the start and confirmed by the parent. Then choose “Make stories in your voice” and the story is read in that voice, saved, and available offline.' },
  { q: 'How many family voices can I add?', a: 'Up to 2 per account, in English, Hindi, Tamil or Malayalam, with a monthly limit on own-voice stories.' },
  { q: 'How do I sign in?', a: 'By email link or Google. There is no password to remember.' },
  { q: 'How do I delete my account?', a: 'From inside the app, in the grown-up area. Deleting a voice deletes everything made from it.' },
  { q: 'Which devices?', a: 'Android and iOS phones and tablets. There is no web app.' },
];

// Google Forms connection for the feedback form.
// formId: the long id in the form's public link, docs.google.com/forms/d/e/<formId>/viewform
// entries: the Google field id ("entry.123456") for each question.
export const feedback = {
  formId: '1FAIpQLSfukj17E649d1DsGcEIiX6sx6ESgAjvPIoxBE4jDpzFuhjeiA',
  entries: {
    email: 'entry.1613493496',
    device: 'entry.1034529921',
    appRating: 'entry.682563265',
    storyRating: 'entry.1497230417',
    storySuggestion: 'entry.1417861262',
    feedback: 'entry.1345821187',
  },
  // Must match the dropdown options in the Google Form exactly.
  devices: ['iPhone', 'iPad', 'Android phone', 'Android tablet', 'Other'],
};
