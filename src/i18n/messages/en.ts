const en = {
  meta: {
    title: "Digital Albanian 2.0 — We are 16 million. Time the platforms acted like it.",
    description:
      "A movement to put Kosovo on every map and Albanian in every menu. One company. One petition. One signature at a time.",
    ogAlt: "Digital Albanian 2.0 — 16 million Albanians. One platform at a time.",
  },
  nav: {
    petitions: "Petitions",
    manifesto: "Manifesto",
    press: "Press",
    signNow: "Sign now",
  },
  hero: {
    eyebrow: "Live · April 2026",
    activePetitionsTag: "{n} active petitions",
    duaInitiativeTag: "A dua.com initiative",
    titleLine1: "16 million Albanians.",
    titleLine2: "Most platforms still {strike:don't see us}.",
    titleLine3: "{em:We change that} — {accent:one petition at a time.}",
    sub: "Each petition asks one major platform to recognize Kosovo or add Albanian. Show your support — sign the ones you believe in.",
    ctaPrimary: "See the petitions",
    ctaSecondary: "Read the manifesto",
    fineParts: ["Free. Takes 30 seconds.", "No newsletter spam", "Built by dua.com"],
    stats: [
      { v: "16", u: "M", l: "Albanians worldwide" },
      { v: "178", u: "", l: "Countries we live in" },
      { v: "10", u: "", l: "Petitions live now" },
    ],
  },
  counter: {
    items: [
      {
        target: 195869,
        prefix: "",
        label: "Signatures collected",
        sub: "Across all active petitions, updated live",
      },
      {
        target: 10,
        prefix: "",
        label: "Active petitions",
        sub: "A new petition every 3–4 weeks",
      },
      {
        target: 3,
        prefix: "+",
        label: "Platforms updated since launch",
        sub: "Google Pay (KS), YouTube +383, Apple Maps detail",
      },
    ],
  },
  manifesto: {
    eyebrow: "— The manifesto",
    ledeLine: "We are {accent:16 million} people.",
    body: [
      "We live in 178 countries. We speak Albanian. We are the largest diaspora per capita in Europe. We invented the modern double-headed eagle. We are the youngest population in the Balkans. {em:And the platforms we use every day still treat us like we don't exist.}",
      "Netflix has 33 subtitle languages. Albanian is not one of them. Spotify added Bosnian. They skipped Albanian. PayPal is in Mozambique. PayPal is not in Kosovo. Apple Pay does not work in Kosovo. Pristina is the only Western Balkans capital without Uber.",
      "These are not opinions. They are facts. Each one is documented on the platform's own website. Digital Albanian 2.0 is not a complaint — it is a list. A list of platforms that have a choice to make.",
    ],
    stats: [
      { v: "16M", l: "Albanians worldwide" },
      { v: "178", l: "Countries we live in" },
      { v: "#1", l: "Largest diaspora per capita in Europe" },
      { v: "2,000+", l: "Years of continuous language" },
    ],
  },
  petitions: {
    sectionNum: "— 01 The petitions",
    headline: "One company.\nOne ask.\n{em:One signature.}",
    lede:
      "Every gap is a comparison that writes itself. If Netflix offers Icelandic to 350,000 speakers, why not Albanian to 16 million? Each petition has a specific company, a specific ask, and a measurable definition of “won”.",
    filters: {
      all: "All",
      recognize: "Recognize Kosovo",
      add: "Add Albanian",
      won: "Won",
    },
    filterMeta: {
      sortedBy: "Sorted by",
      mostUrgent: "most urgent",
      updated: "Updated 2 hrs ago",
    },
    statusLabels: {
      active: "Active",
      soon: "Q3 2026",
      won: "Partial win",
    },
    petitionLabel: "Petition",
    cards: {
      netflix: {
        ask: "Netflix, {em:speak}\nAlbanian.",
        compareLeftLabel: "Icelandic — supported",
        compareLeftValue: "350K {em:speakers}",
        compareRightLabel: "Albanian — missing",
        compareRightValue: "{red:16M {em:speakers}}",
        statSigLabel: "of 50K signatures",
        statTimeLabel: "of campaign",
      },
      spotify: {
        ask: "Bosnian: {em:added.}\nAlbanian: {accent:skipped.}",
        compareLeftLabel: "Bosnian — added 2023",
        compareLeftValue: "~2.5M {em:speakers}",
        compareRightLabel: "Albanian — missing",
        compareRightValue: "{red:6× {em:larger}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      paypal: {
        ask: "In Mozambique.\n{em:Not} in {accent:Kosovo.}",
        compareLeftLabel: "PayPal countries",
        compareLeftValue: "200+ {em:incl. Senegal}",
        compareRightLabel: "Kosovo",
        compareRightValue: "{red:EU candidate · {em:missing}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      apple: {
        ask: "A country code.\n{accent:No} country.",
        compareLeftLabel: "Apple ID country list",
        compareLeftValue: "175 {em:incl. Andorra}",
        compareRightLabel: "Kosovo",
        compareRightValue: "{red:1.8M users · {em:not listed}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      elevenlabs: {
        ask: "A voice for Welsh.\nAlbanian, {em:silent.}",
        compareLeftLabel: "Eleven v3 — 70+ langs",
        compareLeftValue: "Cebuano, {em:Lingala}",
        compareRightLabel: "Albanian",
        compareRightValue: "{red:Indo-European · {em:none}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      streaming: {
        ask: "In our living rooms.\n{accent:Not} in our language.",
        compareLeftLabel: "Disney+ subtitle langs",
        compareLeftValue: "~22 {em:incl. Catalan}",
        compareRightLabel: "Albanian",
        compareRightValue: "{red:Diaspora kids · {em:locked out}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      uber: {
        ask: "Every Balkan capital.\nPristina, {accent:the gap.}",
        compareLeftLabel: "Europe — countries w/ Uber",
        compareLeftValue: "30 {em:incl. Tirana}",
        compareRightLabel: "Pristina",
        compareRightValue: "{red:Youngest pop · {em:none}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      amazon: {
        ask: "Amazon, {em:let us}\npublish.",
        compareLeftLabel: "KDP — 53 languages",
        compareLeftValue: "Manx, {em:Cornish}",
        compareRightLabel: "Albanian — missing",
        compareRightValue: "{red:16M {em:speakers}}",
        statSigLabel: "signatures",
        statTimeLabel: "of campaign",
      },
      unicode: {
        ask: "Tacos have a glyph.\n{em:The plisi} {accent:doesn't.}",
        compareLeftLabel: "Cultural emoji",
        compareLeftValue: "200+ {em:kimono, gondola}",
        compareRightLabel: "Albanian",
        compareRightValue: "{red:Plisi, qeleshe, {em:byrek}}",
        statSigValue: "Coming soon",
        statSigLabel: "Q3 launch window",
        statTimeValue: "Notify me",
        statTimeLabel: "on launch",
      },
      google: {
        ask: "2023: {em:we asked.}\n2026: {accent:we keep going.}",
        compareLeftLabel: "Wins since 2023",
        compareLeftValue: "3 {em:Pay, Maps, +383}",
        compareRightLabel: "Still missing",
        compareRightValue: "{red:Play, {em:YouTube monet.}}",
        statSigLabel: "original signatures",
        statTimeValue: "In progress",
        statTimeLabel: "since 2023",
      },
    },
    progress: {
      of: "of",
      day: "Day",
    },
  },
  how: {
    sectionNum: "— 02 How it works",
    headline: "Three steps.\n{em:That's the whole thing.}",
    lede:
      "Movement sites that try to be content sites die. We kept this small on purpose. Read the case in 60 seconds. Sign with two fields. Share with one tap.",
    steps: [
      {
        n: "01 / Pick a petition",
        h: "Read the case in 60 seconds.",
        p: "Every petition opens with one comparison hook, three numbers, and one ask. No essays. The numbers are the argument.",
      },
      {
        n: "02 / Sign",
        h: "Name and email. That's it.",
        p: "Country picker is optional, defaulted by IP. Your signature counts immediately. We will never share your data, sell your address, or send a newsletter.",
      },
      {
        n: "03 / Share",
        h: "The platforms listen when the noise gets loud enough.",
        p: "One tap copies the poster, the message, and the link. WhatsApp, Instagram Stories, X — pre-written in Albanian, English, and German.",
      },
    ],
  },
  quotes: {
    sectionNum: "— 03 Voices",
    headline: "From Pristina\nto {em:the diaspora}.",
    lede:
      "Writers, founders, and community leaders on why this matters now. We are not asking for special treatment — we are asking for what every other community gets by default.",
    items: [
      {
        text: "My daughter learns Spanish from Netflix. She can learn Icelandic from Netflix. She cannot learn the language her grandmother speaks.",
        author: "Anila Krasniqi",
        meta: "Diaspora · Zürich",
        initials: "A.K.",
      },
      {
        text: "I founded a startup in Pristina. I cannot accept a single Stripe payment. The infrastructure of the modern internet says: you do not exist.",
        author: "Fatos Bytyçi",
        meta: "Founder · Pristina",
        initials: "F.B.",
      },
      {
        text: "This isn't a complaint. It's a list. And every name on it is a company that has made a choice to draw the line short of us.",
        author: "Lirie Hoxha",
        meta: "Editor · Kosovo 2.0",
        initials: "L.H.",
      },
    ],
  },
  press: {
    eyebrow: "— As covered by",
    meta: "31 Albanian outlets · 12 international features · since 2023",
    outlets: [
      "Koha",
      "Telegrafi",
      "{em:Kallxo}",
      "Insajderi",
      "Balkan Insight",
      "EuroNews",
      "Kosovo 2.0",
      "{em:Exit.al}",
      "Bota Sot",
      "Reporteri",
      "Indeksonline",
      "Gazeta Express",
    ],
  },
  ctaBand: {
    headline:
      "Sixteen million\nvoices.\n{em:One platform} {accent:at a time.}",
    sub:
      "Sign the ones you care about. Share the ones that move you. Forward this to the cousin in Berlin and the friend in New York.",
    ctaPrimary: "Sign the next petition",
    ctaSecondary: "Read the manifesto",
  },
  signup: {
    headline: "One email. Per campaign launch. {em:That's it.}",
    sub:
      "No newsletter. No checkboxes. No “stay tuned” filler. We email you when there is a new platform to sign against — and only then. Roughly once every three to four weeks.",
    placeholder: "you@example.com",
    button: "Join",
    success: "✓ ON THE LIST",
    fine: "No spam. We will never share your data. Unsubscribe anytime.",
  },
  footer: {
    brandTagline:
      "A movement for the digital recognition of Kosovo and the Albanian language. A dua.com initiative for the Albanian community.",
    cols: {
      site: {
        title: "The site",
        items: [
          { label: "All petitions", href: "#petitions" },
          { label: "Manifesto", href: "#manifesto" },
          { label: "Press kit", href: "#press" },
        ],
      },
      involved: {
        title: "Get involved",
        items: [
          { label: "Start a petition", href: "#" },
          { label: "Translate", href: "#" },
          { label: "Volunteer", href: "#" },
          { label: "Press contact", href: "#" },
        ],
      },
      dua: {
        title: "By dua.com",
        items: [
          { label: "dua.com", href: "https://dua.com" },
          { label: "Our story", href: "https://dua.com" },
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    },
    cities:
      "Made in {em:Pristina, Tirana, Skopje, Zürich, Berlin, New York}. Wherever Albanians live.",
    copyright: "© 2026 Digital Albanian 2.0 · A dua.com initiative",
  },
};

export type Messages = typeof en;
export default en;
