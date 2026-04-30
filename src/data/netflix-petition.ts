/**
 * Static data for the Netflix petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (1)" / variation-b.jsx
 */

export const NETFLIX_CHANGE_ORG_URL =
  "https://www.change.org/p/netflix-add-albanian-language-support";

export const NETFLIX_SIGNATURES = 38420;
export const NETFLIX_TARGET = 100000;

/** TMDB image CDN — public, attribution-friendly. w342 size. */
const tmdb = (path: string) => `https://image.tmdb.org/t/p/w342${path}`;

export type NetflixTitle = {
  t: string;
  y: string;
  rt: string;
  meta: string;
  img: string;
};

export const NETFLIX_TITLES: NetflixTitle[] = [
  { t: "Wednesday", y: "2022", rt: "TV-14", meta: "2 Seasons", img: tmdb("/9PFonBhy4cQy7Jz20NpMygczOkv.jpg") },
  { t: "Money Heist", y: "2017", rt: "TV-MA", meta: "5 Parts", img: tmdb("/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg") },
  { t: "Stranger Things", y: "2016", rt: "TV-14", meta: "4 Seasons", img: tmdb("/49WJfeN0moxb9IPfGn8AIqMGskD.jpg") },
  { t: "The Crown", y: "2016", rt: "TV-MA", meta: "6 Seasons", img: tmdb("/1M876KPjulVwppEpldhdc8V4o68.jpg") },
  { t: "Squid Game", y: "2021", rt: "TV-MA", meta: "2 Seasons", img: tmdb("/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg") },
  { t: "Dark", y: "2017", rt: "TV-MA", meta: "3 Seasons", img: tmdb("/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg") },
];

export const POSTER_AUDIO_TAGS = [
  "EN", "ES", "FR", "DE", "IT", "PT", "PL", "TR", "AR", "HI", "JA", "KO", "NL", "SV",
];

export type Signer = { name: string; city: string; time: string };

export const NETFLIX_SIGNERS: Signer[] = [
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
  { name: "Edona Hoti", city: "Paris", time: "35 min" },
  { name: "Burim Rama", city: "Frankfurt", time: "38 min" },
  { name: "Albana Krasniqi", city: "Hamburg", time: "42 min" },
  { name: "Genti Berisha", city: "Helsinki", time: "45 min" },
  { name: "Vesa Thaqi", city: "Pristina", time: "48 min" },
  { name: "Bardh Lushaj", city: "Geneva", time: "52 min" },
  { name: "Diellza Morina", city: "Munich", time: "55 min" },
  { name: "Granit Ymeri", city: "Athens", time: "58 min" },
];

export type ReceiptRow = {
  lang: string;
  sp: number;
  flag: string;
  sub: boolean;
  ui: boolean;
  dub: number;
  us?: boolean;
};

export const RECEIPT_ROWS: ReceiptRow[] = [
  { lang: "Slovenian", sp: 2.5, flag: "🇸🇮", sub: true, ui: true, dub: 1 },
  { lang: "Finnish", sp: 5.4, flag: "🇫🇮", sub: true, ui: true, dub: 4 },
  { lang: "Croatian", sp: 5.6, flag: "🇭🇷", sub: true, ui: true, dub: 3 },
  { lang: "Hebrew", sp: 9.0, flag: "🇮🇱", sub: true, ui: true, dub: 8 },
  { lang: "Greek", sp: 13.5, flag: "🇬🇷", sub: true, ui: true, dub: 5 },
  { lang: "Albanian", sp: 16.0, flag: "🇦🇱", sub: false, ui: false, dub: 0, us: true },
];

export type Voice = { q: string; n: string; c: string };

export const VOICES: Voice[] = [
  {
    q: "I pay €13.99 a month to read English subtitles to my parents. They're 64. They shouldn't need a translator to watch a film.",
    n: "Lirie K.",
    c: "Pristina",
  },
  {
    q: "Croatian got dubs in 2019. We have more speakers and we still don't exist on the platform.",
    n: "Driton B.",
    c: "Tirana",
  },
  {
    q: "Adding Albanian subtitles to the full Netflix library is a 6-month project. They know.",
    n: "Anonymous",
    c: "Industry insider",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Why not just use English subtitles?",
    a: "Because half my family doesn't read English. Because Albanian is the 6th-most-spoken language in the EU. Because we pay full price and deserve full service.",
  },
  {
    q: "Is this anti-Netflix?",
    a: "No. We pay for Netflix. We want Netflix to add us to the list of languages they already serve. That's pro-Netflix.",
  },
  {
    q: "Has Netflix responded?",
    a: "Not yet. The petition has been live on change.org since March 2026. We will publish every response — partial or full — on the Updates timeline.",
  },
  {
    q: "Where does my signature go?",
    a: 'Directly to change.org\'s petition for "Netflix: add Albanian language support." It is counted toward the 100,000 target and delivered to Netflix when we hit the threshold.',
  },
  {
    q: "How is dua.com involved?",
    a: "Dua is the Albanian super-app. We started this petition because no one else was. dua.com pays the costs. The signatures belong to the community.",
  },
];

/* ---- Social wall data ---- */

export type SocialPost = {
  handle: string;
  name: string;
  verified?: boolean;
  body: string;
  time: string;
  stats: { likes: string; comments: string; shares?: string; reposts?: string };
  image?: { tone: string; glyph: string; label?: string };
};

export type SocialRow = {
  plat: "ig" | "li" | "fb";
  label: string;
  posts: SocialPost[];
};

export const SOCIAL_ROWS: SocialRow[] = [
  {
    plat: "ig",
    label: "Instagram",
    posts: [
      {
        handle: "@rita.ora",
        name: "Rita Ora",
        verified: true,
        body: "Signed. We deserve subtitles in our own language. ❤️ #NetflixShqip",
        time: "5h",
        stats: { likes: "92k", comments: "1.8k" },
        image: { tone: "linear-gradient(160deg,#1a1a2e,#16213e 50%,#E11D2A)", glyph: "✍" },
      },
      {
        handle: "@dardan.eats",
        name: "Dardan",
        body: "Squid Game with mom. She didn't understand a line. #NetflixShqip",
        time: "11h",
        stats: { likes: "38.6k", comments: "412" },
        image: { tone: "linear-gradient(160deg,#c98a3a,#5a3010)", glyph: "🍲" },
      },
      {
        handle: "@kushtetuta",
        name: "Kushtetuta",
        verified: true,
        body: "Cover story: the missing language. Link in bio.",
        time: "8h",
        stats: { likes: "14.2k", comments: "320" },
      },
      {
        handle: "@kosova.diaspora",
        name: "Kosova Diaspora",
        verified: true,
        body: "From Zürich to Bronx — we're all signing.",
        time: "4h",
        stats: { likes: "5.9k", comments: "180" },
        image: { tone: "linear-gradient(135deg,#0a0e27,#1a4d8c)", glyph: "🌐" },
      },
      {
        handle: "@vlora.b",
        name: "Vlora Berisha",
        body: "Sign it. Tag a cousin. Repeat. 🔗 in bio.",
        time: "1h",
        stats: { likes: "2.1k", comments: "94" },
      },
    ],
  },
  {
    plat: "li",
    label: "LinkedIn",
    posts: [
      {
        handle: "Mayor of Tirana · 1st",
        name: "Erion Veliaj",
        verified: true,
        body: "16M Europeans speak Albanian. Including us in Netflix's subtitle program isn't charity — it's market logic.",
        time: "4h",
        stats: { likes: "8.4k", comments: "420", reposts: "1.2k" },
      },
      {
        handle: "Product Lead at Spotify · 2nd",
        name: "Mira Hoxha",
        body: "We localized Spotify into Albanian in 2022. 4 engineers, 11 weeks. Netflix has 100x our budget.",
        time: "9h",
        stats: { likes: "3.1k", comments: "180", reposts: "612" },
        image: {
          tone: "linear-gradient(140deg,#1DB954,#0a3d23)",
          glyph: "♫",
          label: "Case study · spotify.design",
        },
      },
      {
        handle: "Founder & CEO, dua.com · 1st",
        name: "Driton Bajraktari",
        verified: true,
        body: 'When we built dua, the #1 user-research finding was: "my parents can\'t use the apps I work on." Same fix needed at Netflix.',
        time: "1d",
        stats: { likes: "12.7k", comments: "890", reposts: "2.4k" },
        image: {
          tone: "linear-gradient(135deg,#000,#E11D2A)",
          glyph: "dua",
          label: "dua.com · The Albanian super-app",
        },
      },
      {
        handle: "EU Parliament aide · 3rd",
        name: "Aida Hadžialić",
        body: "Netflix added Catalan (10M speakers) in 2022. Albanian has 16M speakers across 4 EU/EEA states. The precedent is set.",
        time: "1d",
        stats: { likes: "1.8k", comments: "92", reposts: "340" },
      },
      {
        handle: "Localization Lead at Disney+ · 2nd",
        name: "Lior Cohen",
        body: "I work in subs ops. Albanian is genuinely a 6-month project for a Tier-1 streamer. Not a hard problem. A choice.",
        time: "2d",
        stats: { likes: "4.2k", comments: "310", reposts: "780" },
      },
    ],
  },
  {
    plat: "fb",
    label: "Facebook",
    posts: [
      {
        handle: "Tirana, Albania",
        name: "Bashkim Hoxha",
        body: "Mami nuk mund të shikojë asgjë përveç telenovelave turke me titra. Faleminderit Netflix. 🙄 #NetflixShqip",
        time: "3h",
        stats: { likes: "2.3k", comments: "318", shares: "940" },
      },
      {
        handle: "Pristina, Kosovo",
        name: "Lule G.",
        body: "Përkthimi shqip i Stranger Things — ku është? Familja ime po pret.",
        time: "7h",
        stats: { likes: "1.1k", comments: "210", shares: "420" },
        image: {
          tone: "linear-gradient(135deg,#1a1a2e,#0a0a0a)",
          glyph: "📺",
          label: "Stranger Things · no Albanian audio/subs",
        },
      },
      {
        handle: "Zürich, Switzerland",
        name: "Festim Krasniqi",
        body: "Diaspora group: 47 cities organized. Sign + share. Get to 100k by Friday. 🔴 #NetflixShqip",
        time: "1d",
        stats: { likes: "5.4k", comments: "612", shares: "2.1k" },
      },
      {
        handle: "Skopje, North Macedonia",
        name: "Albulena B.",
        body: "I'm 17. I've never watched a Netflix show in my own language. Why is that normal?",
        time: "14h",
        stats: { likes: "8.9k", comments: "1.2k", shares: "3.4k" },
        image: {
          tone: "linear-gradient(160deg,#E11D2A,#7a0d16)",
          glyph: "17",
          label: "A whole generation. No subs.",
        },
      },
      {
        handle: "Bronx, NY",
        name: "Diaspora US",
        body: "My grandfather speaks 0 English. Pays $15.49/mo. Watches nothing. We pay anyway because of the kids. 💸",
        time: "2d",
        stats: { likes: "12.4k", comments: "1.8k", shares: "4.2k" },
      },
    ],
  },
];
