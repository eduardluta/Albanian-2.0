import type { Messages } from "./en";

const de: Messages = {
  meta: {
    title: "Digital Kosovo 2.0 — Wir sind 16 Millionen. Zeit, dass die Plattformen es merken.",
    description:
      "Eine Bewegung, die das Kosovo auf jede Karte und Albanisch in jedes Menü bringt. Ein Unternehmen. Eine Petition. Eine Unterschrift nach der anderen.",
    ogAlt: "Digital Kosovo 2.0 — 16 Millionen Albaner. Eine Plattform nach der anderen.",
  },
  nav: {
    petitions: "Petitionen",
    manifesto: "Manifest",
    press: "Presse",
    signNow: "Jetzt unterzeichnen",
  },
  hero: {
    eyebrow: "Live · April 2026",
    activePetitionsTag: "{n} aktive Petitionen",
    duaInitiativeTag: "Eine Initiative von dua.com",
    titleLine1: "16 Millionen Albaner.",
    titleLine2: "Die meisten Plattformen {strike:sehen uns nicht}.",
    titleLine3: "{em:Wir ändern das} — {accent:eine Petition nach der anderen.}",
    sub: "Jede Petition fordert eine große Plattform auf, das Kosovo anzuerkennen oder Albanisch hinzuzufügen. Zeige deine Unterstützung — unterzeichne die, an die du glaubst.",
    ctaPrimary: "Petitionen ansehen",
    ctaSecondary: "Manifest lesen",
    fineParts: ["Kostenlos. Dauert 30 Sekunden.", "Kein Newsletter-Spam", "Gebaut von dua.com"],
    stats: [
      { v: "16", u: "M", l: "Albaner weltweit" },
      { v: "178", u: "", l: "Länder, in denen wir leben" },
      { v: "10", u: "", l: "Aktive Petitionen" },
    ],
  },
  counter: {
    items: [
      {
        target: 195869,
        prefix: "",
        label: "Gesammelte Unterschriften",
        sub: "Über alle aktiven Petitionen, live aktualisiert",
      },
      {
        target: 10,
        prefix: "",
        label: "Aktive Petitionen",
        sub: "Eine neue Petition alle 3–4 Wochen",
      },
      {
        target: 3,
        prefix: "+",
        label: "Plattformen aktualisiert seit Start",
        sub: "Google Pay (KS), YouTube +383, Apple Maps",
      },
    ],
  },
  manifesto: {
    eyebrow: "— Das Manifest",
    ledeLine: "Wir sind {accent:16 Millionen} Menschen.",
    body: [
      "Wir leben in 178 Ländern. Wir sprechen Albanisch. Wir sind die größte Diaspora pro Kopf in Europa. Wir haben den modernen Doppeladler erfunden. Wir sind die jüngste Bevölkerung des Balkans. {em:Und die Plattformen, die wir täglich nutzen, behandeln uns weiterhin so, als gäbe es uns nicht.}",
      "Netflix hat 33 Untertitelsprachen. Albanisch ist keine davon. Spotify hat Bosnisch hinzugefügt. Albanisch wurde übersprungen. PayPal ist in Mosambik. PayPal ist nicht im Kosovo. Apple Pay funktioniert nicht im Kosovo. Pristina ist die einzige Hauptstadt des Westbalkans ohne Uber.",
      "Das sind keine Meinungen. Das sind Fakten. Jeder einzelne ist auf der Website der Plattform selbst dokumentiert. Digital Kosovo 2.0 ist keine Beschwerde — es ist eine Liste. Eine Liste von Plattformen, die eine Wahl zu treffen haben.",
    ],
    stats: [
      { v: "16M", l: "Albaner weltweit" },
      { v: "178", l: "Länder, in denen wir leben" },
      { v: "#1", l: "Größte Diaspora pro Kopf in Europa" },
      { v: "2.000+", l: "Jahre durchgehende Sprache" },
    ],
  },
  petitions: {
    sectionNum: "— 01 Die Petitionen",
    headline: "Ein Unternehmen.\nEine Forderung.\n{em:Eine Unterschrift.}",
    lede:
      "Jede Lücke ist ein Vergleich, der sich von selbst schreibt. Wenn Netflix Isländisch für 350.000 Sprecher anbietet, warum nicht Albanisch für 16 Millionen? Jede Petition hat ein konkretes Unternehmen, eine konkrete Forderung und eine messbare Definition von „gewonnen“.",
    filters: {
      all: "Alle",
      recognize: "Kosovo anerkennen",
      add: "Albanisch hinzufügen",
      won: "Gewonnen",
    },
    filterMeta: {
      sortedBy: "Sortiert nach",
      mostUrgent: "dringlichste",
      updated: "Aktualisiert vor 2 Std.",
    },
    statusLabels: {
      active: "Aktiv",
      soon: "Q3 2026",
      won: "Teilerfolg",
    },
    petitionLabel: "Petition",
    cards: {
      netflix: {
        ask: "Netflix, {em:sprich}\nAlbanisch.",
        compareLeftLabel: "Isländisch — unterstützt",
        compareLeftValue: "350K {em:Sprecher}",
        compareRightLabel: "Albanisch — fehlt",
        compareRightValue: "{red:16M {em:Sprecher}}",
        statSigLabel: "von 50K Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      spotify: {
        ask: "Bosnisch: {em:hinzugefügt.}\nAlbanisch: {accent:übersprungen.}",
        compareLeftLabel: "Bosnisch — 2023 hinzugefügt",
        compareLeftValue: "~2,5M {em:Sprecher}",
        compareRightLabel: "Albanisch — fehlt",
        compareRightValue: "{red:6× {em:größer}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      paypal: {
        ask: "In Mosambik.\n{em:Nicht} im {accent:Kosovo.}",
        compareLeftLabel: "PayPal-Länder",
        compareLeftValue: "200+ {em:inkl. Senegal}",
        compareRightLabel: "Kosovo",
        compareRightValue: "{red:EU-Kandidat · {em:fehlt}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      apple: {
        ask: "Eine Ländervorwahl.\n{accent:Kein} Land.",
        compareLeftLabel: "Apple-ID-Länderliste",
        compareLeftValue: "175 {em:inkl. Andorra}",
        compareRightLabel: "Kosovo",
        compareRightValue: "{red:1,8M Nutzer · {em:nicht gelistet}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      elevenlabs: {
        ask: "Eine Stimme für Walisisch.\nAlbanisch, {em:still.}",
        compareLeftLabel: "Eleven v3 — 70+ Sprachen",
        compareLeftValue: "Cebuano, {em:Lingala}",
        compareRightLabel: "Albanisch",
        compareRightValue: "{red:Indogermanisch · {em:keine}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      streaming: {
        ask: "In unseren Wohnzimmern.\n{accent:Nicht} in unserer Sprache.",
        compareLeftLabel: "Disney+ Untertitelsprachen",
        compareLeftValue: "~22 {em:inkl. Katalanisch}",
        compareRightLabel: "Albanisch",
        compareRightValue: "{red:Diaspora-Kinder · {em:ausgesperrt}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      uber: {
        ask: "Jede Balkanhauptstadt.\nPristina, {accent:die Lücke.}",
        compareLeftLabel: "Europa — Länder mit Uber",
        compareLeftValue: "30 {em:inkl. Tirana}",
        compareRightLabel: "Pristina",
        compareRightValue: "{red:Jüngste Bevölkerung · {em:keines}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      amazon: {
        ask: "Amazon, {em:lass uns}\nveröffentlichen.",
        compareLeftLabel: "KDP — 53 Sprachen",
        compareLeftValue: "Manx, {em:Kornisch}",
        compareRightLabel: "Albanisch — fehlt",
        compareRightValue: "{red:16M {em:Sprecher}}",
        statSigLabel: "Unterschriften",
        statTimeLabel: "der Kampagne",
      },
      unicode: {
        ask: "Tacos haben ein Glyph.\n{em:Der Plisi} {accent:nicht.}",
        compareLeftLabel: "Kultur-Emojis",
        compareLeftValue: "200+ {em:Kimono, Gondel}",
        compareRightLabel: "Albanisch",
        compareRightValue: "{red:Plisi, qeleshe, {em:byrek}}",
        statSigValue: "Bald verfügbar",
        statSigLabel: "Q3 Launch-Fenster",
        statTimeValue: "Benachrichtige mich",
        statTimeLabel: "zum Launch",
      },
      google: {
        ask: "2023: {em:wir fragten.}\n2026: {accent:wir machen weiter.}",
        compareLeftLabel: "Erfolge seit 2023",
        compareLeftValue: "3 {em:Pay, Maps, +383}",
        compareRightLabel: "Fehlt noch",
        compareRightValue: "{red:Play, {em:YouTube-Monet.}}",
        statSigLabel: "ursprüngliche Unterschriften",
        statTimeValue: "Laufend",
        statTimeLabel: "seit 2023",
      },
    },
    progress: {
      of: "von",
      day: "Tag",
    },
  },
  how: {
    sectionNum: "— 02 So funktioniert's",
    headline: "Drei Schritte.\n{em:Mehr ist es nicht.}",
    lede:
      "Bewegungs-Websites, die Content-Sites sein wollen, sterben. Wir haben das absichtlich klein gehalten. Lies den Fall in 60 Sekunden. Unterzeichne mit zwei Feldern. Teile mit einem Tipp.",
    steps: [
      {
        n: "01 / Petition wählen",
        h: "Lies den Fall in 60 Sekunden.",
        p: "Jede Petition öffnet mit einem Vergleich, drei Zahlen und einer Forderung. Keine Essays. Die Zahlen sind das Argument.",
      },
      {
        n: "02 / Unterzeichnen",
        h: "Name und E-Mail. Mehr nicht.",
        p: "Land-Auswahl ist optional, per IP voreingestellt. Deine Unterschrift zählt sofort. Wir teilen deine Daten nie, verkaufen deine Adresse nicht und senden keinen Newsletter.",
      },
      {
        n: "03 / Teilen",
        h: "Die Plattformen hören zu, wenn der Lärm laut genug wird.",
        p: "Ein Tipp kopiert das Poster, die Nachricht und den Link. WhatsApp, Instagram Stories, X — vorgeschrieben auf Albanisch, Englisch und Deutsch.",
      },
    ],
  },
  quotes: {
    sectionNum: "— 03 Stimmen",
    headline: "Von Pristina\nbis zur {em:Diaspora}.",
    lede:
      "Schriftsteller, Gründer und Community-Leiter, warum dies jetzt zählt. Wir verlangen keine Sonderbehandlung — wir verlangen das, was jede andere Community standardmäßig bekommt.",
    items: [
      {
        text: "Meine Tochter lernt Spanisch von Netflix. Sie kann Isländisch von Netflix lernen. Sie kann nicht die Sprache lernen, die ihre Großmutter spricht.",
        author: "Anila Krasniqi",
        meta: "Diaspora · Zürich",
        initials: "A.K.",
      },
      {
        text: "Ich habe ein Startup in Pristina gegründet. Ich kann nicht eine einzige Stripe-Zahlung annehmen. Die Infrastruktur des modernen Internets sagt: Du existierst nicht.",
        author: "Fatos Bytyçi",
        meta: "Gründer · Pristina",
        initials: "F.B.",
      },
      {
        text: "Das ist keine Beschwerde. Es ist eine Liste. Und jeder Name darauf ist ein Unternehmen, das die Wahl getroffen hat, die Linie kurz vor uns zu ziehen.",
        author: "Lirie Hoxha",
        meta: "Redakteurin · Kosovo 2.0",
        initials: "L.H.",
      },
    ],
  },
  press: {
    eyebrow: "— Berichtet von",
    meta: "31 albanische Medien · 12 internationale Beiträge · seit 2023",
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
    headline: "Sechzehn Millionen\nStimmen.\n{em:Eine Plattform} {accent:nach der anderen.}",
    sub: "Unterzeichne die, die dir wichtig sind. Teile die, die dich bewegen. Leite das an die Cousine in Berlin und den Freund in New York weiter.",
    ctaPrimary: "Nächste Petition unterzeichnen",
    ctaSecondary: "Manifest lesen",
  },
  signup: {
    headline: "Eine E-Mail. Pro Kampagnen-Launch. {em:Mehr nicht.}",
    sub: "Kein Newsletter. Keine Checkboxen. Kein „bleib dran“-Füller. Wir mailen dich, wenn es eine neue Plattform zum Unterzeichnen gibt — und nur dann. Etwa alle drei bis vier Wochen.",
    placeholder: "du@beispiel.com",
    button: "Beitreten",
    success: "✓ AUF DER LISTE",
    fine: "Kein Spam. Wir teilen deine Daten nie. Jederzeit kündbar.",
  },
  footer: {
    brandTagline:
      "Eine Bewegung für die digitale Anerkennung des Kosovos und der albanischen Sprache. Eine Initiative von dua.com für die albanische Community.",
    cols: {
      site: {
        title: "Die Seite",
        items: [
          { label: "Alle Petitionen", href: "#petitions" },
          { label: "Manifest", href: "#manifesto" },
          { label: "Pressemappe", href: "#press" },
        ],
      },
      involved: {
        title: "Mitmachen",
        items: [
          { label: "Petition starten", href: "#" },
          { label: "Übersetzen", href: "#" },
          { label: "Freiwillig helfen", href: "#" },
          { label: "Pressekontakt", href: "#" },
        ],
      },
      dua: {
        title: "Von dua.com",
        items: [
          { label: "dua.com", href: "https://dua.com" },
          { label: "Unsere Geschichte", href: "https://dua.com" },
          { label: "Datenschutz", href: "#" },
          { label: "AGB", href: "#" },
        ],
      },
    },
    cities:
      "Gemacht in {em:Pristina, Tirana, Skopje, Zürich, Berlin, New York}. Wo immer Albaner leben.",
    copyright: "© 2026 Digital Kosovo 2.0 · Eine Initiative von dua.com",
  },
};

export default de;
