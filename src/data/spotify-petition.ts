/**
 * Static data for the Spotify petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (2)" / spotify-petition.jsx
 */

import type { Petition, FaqItem } from "./petition-shared";

export const SPOTIFY_CHANGE_ORG_URL =
  "https://www.change.org/p/spotify-add-albanian-language-support";

export const SPOTIFY_SIGNATURES = 28140;
export const SPOTIFY_TARGET = 100000;

export type SpotifyTrackRow = {
  n: string;
  native: string;
  speakers: number;
  added: string;
  status: "yes" | "no";
  cover: string;
  us?: boolean;
};

export const SPOTIFY_TRACK_LIST: SpotifyTrackRow[] = [
  { n: "Bosnian", native: "Bosanski", speakers: 2.5, added: "2023", status: "yes", cover: "BS" },
  { n: "Slovenian", native: "Slovenščina", speakers: 2.5, added: "2022", status: "yes", cover: "SL" },
  { n: "Latvian", native: "Latviešu", speakers: 1.5, added: "2022", status: "yes", cover: "LV" },
  { n: "Estonian", native: "Eesti", speakers: 1.1, added: "2022", status: "yes", cover: "ET" },
  { n: "Icelandic", native: "Íslenska", speakers: 0.35, added: "2021", status: "yes", cover: "IS" },
  { n: "Albanian", native: "Shqip", speakers: 16.0, added: "—", status: "no", cover: "SQ", us: true },
];

export type CounterCell = { v: string; l: string };

export const SPOTIFY_COUNTER_CELLS: CounterCell[] = [
  { v: "16M", l: "Albanian speakers worldwide" },
  { v: "2.1M", l: "Estimated Spotify users" },
  { v: "€11/mo", l: "Premium price in Tirana" },
  { v: "0", l: "Albanian in the language picker" },
];

export type SpotifyReceiptRow = {
  lang: string;
  sp: number;
  flag: string;
  ui: boolean;
  pl: boolean;
  pod: boolean;
  us?: boolean;
};

export const SPOTIFY_RECEIPT_ROWS: SpotifyReceiptRow[] = [
  { lang: "Icelandic", sp: 0.35, flag: "🇮🇸", ui: true, pl: true, pod: true },
  { lang: "Estonian", sp: 1.1, flag: "🇪🇪", ui: true, pl: true, pod: true },
  { lang: "Latvian", sp: 1.5, flag: "🇱🇻", ui: true, pl: true, pod: true },
  { lang: "Bosnian", sp: 2.5, flag: "🇧🇦", ui: true, pl: true, pod: false },
  { lang: "Slovenian", sp: 2.5, flag: "🇸🇮", ui: true, pl: true, pod: true },
  { lang: "Albanian", sp: 16.0, flag: "🇦🇱", ui: false, pl: false, pod: false, us: true },
];

export const SPOTIFY_QUOTES = [
  {
    q: "My Wrapped came in English. I listen to 90% Albanian rap. The \"year in review\" didn't even know what country I was in.",
    n: "Lirie K.",
    c: "Pristina",
  },
  {
    q: "Bosnian got the UI in 2023. Same week. Same rollout. We have six times the speakers and we still scroll past Albanian-zero.",
    n: "Driton B.",
    c: "Tirana",
  },
  {
    q: "Localization is two engineers and a glossary. We know — we did it for our own product in 11 weeks.",
    n: "Anonymous",
    c: "Industry insider",
  },
];

export const SPOTIFY_FAQ: FaqItem[] = [
  {
    q: "Doesn't Spotify already work in Albania?",
    a: "It works as a service — playback, payments, the catalog. What's missing is the language. The app interface, the email receipts, the editorial playlists, and Wrapped are all locked to one of 60+ other languages.",
  },
  {
    q: "Why Albanian and not English?",
    a: "Because half our parents and grandparents don't read English. Because Albanian is the 6th-most-spoken language in the EU. Because every other comparable European language already has it.",
  },
  {
    q: "Has Spotify responded?",
    a: "Not yet. The petition has been live on change.org since April 2026. We will publish every response — partial or full — on the Updates timeline.",
  },
  {
    q: "Where does my signature go?",
    a: 'Directly to change.org\'s petition for "Spotify: add Albanian language support." It is counted toward the 100,000 target and delivered to Spotify when we hit the threshold.',
  },
  {
    q: "How is dua.com involved?",
    a: "Dua is the Albanian super-app. We started this petition because no one else was. dua.com pays the costs. The signatures belong to the community.",
  },
];

const SIGNERS = [
  { name: "Albulena Hoxha", city: "Pristina", time: "3 min" },
  { name: "Driton Berisha", city: "Tirana", time: "5 min" },
  { name: "Erza Krasniqi", city: "Skopje", time: "7 min" },
  { name: "Mergim Shala", city: "Zürich", time: "9 min" },
  { name: "Vlora Gashi", city: "Berlin", time: "11 min" },
  { name: "Rinor Mehmeti", city: "New York", time: "14 min" },
  { name: "Blerta Imeri", city: "London", time: "16 min" },
  { name: "Arber Ferizi", city: "Stockholm", time: "19 min" },
  { name: "Donika Lleshi", city: "Vienna", time: "22 min" },
  { name: "Lirim Kelmendi", city: "Brussels", time: "25 min" },
  { name: "Festa Bytyqi", city: "Toronto", time: "28 min" },
  { name: "Adrian Spahija", city: "Milan", time: "32 min" },
];

export const SPOTIFY_LETTER = {
  sentDate: "2026-04-10",
  sentDateDisplay: "April 10, 2026",
  to: {
    name: "Daniel Ek",
    role: "CEO, Spotify Technology S.A.",
    company: "Spotify Technology S.A.",
    address: ["Regeringsgatan 19", "111 53 Stockholm", "Sweden"],
  },
  subject: "Add Albanian to the Spotify language picker by Q4 2026",
  salutation: "Dear Mr. Ek,",
  body: [
    "We are writing as 28,140 people who pay for Spotify and speak Albanian. Across Kosovo, Albania, North Macedonia, Montenegro, and the diaspora — 16 million of us — we make up the 6th-largest language community in the European Union, and we open the app every day in someone else's language.",
    "Between 2021 and 2023, Spotify shipped Icelandic (350,000 native speakers), Estonian (1.1M), Latvian (1.5M), Slovenian (2.5M), and Bosnian (2.5M). Each rollout was the right call. Albanian — six times the size of any of them — has been skipped in every cohort.",
  ],
  asks: [
    "Albanian as a selectable interface language across the app, web, and email receipts.",
    "Albanian-speaking editorial curation for at least four flagship playlists.",
    "Wrapped, year-end summaries, and DSP communications generated in Albanian for users with Albanian-locale devices.",
  ],
  closing: [
    "We have audited the Spotify Newsroom and the localisation announcements: Albanian appears nowhere on the public roadmap. We are asking that it appear on the next one.",
    "Signatures are being collected at change.org/p/spotify-add-albanian-language-support and will be delivered at 100,000.",
  ],
  replyByDisplay: "We would welcome a reply by June 1, 2026.",
  signOff: "Sincerely,",
  signedBy: {
    name: "Driton Bajraktari",
    role: "Founder & CEO, dua.com",
    behalfOf: "On behalf of Digital Albanian 2.0",
  },
  replies: [],
};

export const SPOTIFY_PETITION: Petition = {
  target: "Spotify",
  num: "02",
  slug: "spotify",
  changeOrgUrl: SPOTIFY_CHANGE_ORG_URL,
  signatures: SPOTIFY_SIGNATURES,
  target_count: SPOTIFY_TARGET,
  accent: "#00C46A",
  signers: SIGNERS,
  faq: SPOTIFY_FAQ,
  letter: SPOTIFY_LETTER,
};
