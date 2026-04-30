import type { Messages } from "./en";

const sq: Messages = {
  meta: {
    title: "Digital Albanian 2.0 — Jemi 16 milionë. Koha që platformat të veprojnë sikurse.",
    description:
      "Një lëvizje që e vendos Kosovën në çdo hartë dhe shqipen në çdo meny. Një kompani. Një peticion. Një nënshkrim në kohë.",
    ogAlt: "Digital Albanian 2.0 — 16 milionë shqiptarë. Një platformë në kohë.",
  },
  nav: {
    petitions: "Peticionet",
    manifesto: "Manifesti",
    press: "Shtypi",
    signNow: "Nënshkruaj tani",
  },
  hero: {
    eyebrow: "Drejtpërdrejt · Prill 2026",
    activePetitionsTag: "{n} peticione aktive",
    duaInitiativeTag: "Një iniciativë e dua.com",
    titleLine1: "16 milionë shqiptarë.",
    titleLine2: "Shumica e platformave ende {strike:nuk na shohin}.",
    titleLine3: "{em:Ne po e ndryshojmë këtë} — {accent:një peticion në kohë.}",
    sub: "Çdo peticion i kërkon një platforme të madhe të njohë Kosovën ose të shtojë shqipen. Trego mbështetjen tënde — nënshkruaj ato që beson.",
    ctaPrimary: "Shih peticionet",
    ctaSecondary: "Lexo manifestin",
    fineParts: ["Falas. Merr 30 sekonda.", "Pa spam", "Ndërtuar nga dua.com"],
    stats: [
      { v: "16", u: "M", l: "Shqiptarë në botë" },
      { v: "178", u: "", l: "Vende ku jetojmë" },
      { v: "10", u: "", l: "Peticione aktive" },
    ],
  },
  counter: {
    items: [
      {
        target: 195869,
        prefix: "",
        label: "Nënshkrime të mbledhura",
        sub: "Në të gjitha peticionet aktive, përditësohet drejtpërdrejt",
      },
      {
        target: 10,
        prefix: "",
        label: "Peticione aktive",
        sub: "Një peticion i ri çdo 3–4 javë",
      },
      {
        target: 3,
        prefix: "+",
        label: "Platforma të përditësuara që nga lansimi",
        sub: "Google Pay (KS), YouTube +383, Apple Maps",
      },
    ],
  },
  manifesto: {
    eyebrow: "— Manifesti",
    ledeLine: "Jemi {accent:16 milionë} njerëz.",
    body: [
      "Jetojmë në 178 vende. Flasim shqip. Jemi diaspora më e madhe për kokë banori në Evropë. Ne shpikëm shqiponjën moderne dykrenare. Jemi popullsia më e re në Ballkan. {em:Dhe platformat që përdorim çdo ditë vazhdojnë të na trajtojnë sikur nuk ekzistojmë.}",
      "Netflix ka 33 gjuhë titrash. Shqipja nuk është një prej tyre. Spotify shtoi boshnjakishten. Anashkaloi shqipen. PayPal është në Mozambik. PayPal nuk është në Kosovë. Apple Pay nuk funksionon në Kosovë. Prishtina është e vetmja kryeqytet i Ballkanit Perëndimor pa Uber.",
      "Këto nuk janë opinione. Janë fakte. Secila dokumentohet në faqen e vetë platformës. Digital Albanian 2.0 nuk është një ankesë — është një listë. Një listë e platformave që kanë një zgjedhje për të bërë.",
    ],
    stats: [
      { v: "16M", l: "Shqiptarë në botë" },
      { v: "178", l: "Vende ku jetojmë" },
      { v: "#1", l: "Diaspora më e madhe për kokë banori në Evropë" },
      { v: "2.000+", l: "Vite gjuhë të vazhdueshme" },
    ],
  },
  petitions: {
    sectionNum: "— 01 Peticionet",
    headline: "Një kompani.\nNjë kërkesë.\n{em:Një nënshkrim.}",
    lede:
      "Çdo hapësirë boshe është një krahasim që shkruan veten. Nëse Netflix ofron islandishten për 350.000 folës, pse jo shqipen për 16 milionë? Çdo peticion ka një kompani specifike, një kërkesë specifike dhe një përkufizim të matshëm të “fitores”.",
    filters: {
      all: "Të gjitha",
      recognize: "Njihni Kosovën",
      add: "Shtoni shqipen",
      won: "Fituar",
    },
    filterMeta: {
      sortedBy: "Renditur sipas",
      mostUrgent: "më urgjentes",
      updated: "Përditësuar 2 orë më parë",
    },
    statusLabels: {
      active: "Aktiv",
      soon: "T3 2026",
      won: "Fitore e pjesshme",
    },
    petitionLabel: "Peticioni",
    cards: {
      netflix: {
        ask: "Netflix, {em:fol}\nshqip.",
        compareLeftLabel: "Islandishtja — e mbështetur",
        compareLeftValue: "350K {em:folës}",
        compareRightLabel: "Shqipja — mungon",
        compareRightValue: "{red:16M {em:folës}}",
        statSigLabel: "nga 50K nënshkrime",
        statTimeLabel: "i fushatës",
      },
      spotify: {
        ask: "Boshnjakishtja: {em:shtuar.}\nShqipja: {accent:anashkaluar.}",
        compareLeftLabel: "Boshnjakishtja — shtuar 2023",
        compareLeftValue: "~2.5M {em:folës}",
        compareRightLabel: "Shqipja — mungon",
        compareRightValue: "{red:6× {em:më e madhe}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      paypal: {
        ask: "Në Mozambik.\n{em:Jo} në {accent:Kosovë.}",
        compareLeftLabel: "Vendet e PayPal",
        compareLeftValue: "200+ {em:përfshirë Senegalin}",
        compareRightLabel: "Kosova",
        compareRightValue: "{red:Kandidate e BE · {em:mungon}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      apple: {
        ask: "Një kod vendi.\n{accent:Asnjë} vend.",
        compareLeftLabel: "Lista e vendeve Apple ID",
        compareLeftValue: "175 {em:përfshirë Andorrën}",
        compareRightLabel: "Kosova",
        compareRightValue: "{red:1.8M përdorues · {em:pa listuar}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      elevenlabs: {
        ask: "Një zë për uellsishten.\nShqipja, {em:e heshtur.}",
        compareLeftLabel: "Eleven v3 — 70+ gjuhë",
        compareLeftValue: "Cebuano, {em:Lingala}",
        compareRightLabel: "Shqipja",
        compareRightValue: "{red:Indo-evropiane · {em:asnjë}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      streaming: {
        ask: "Në dhomat tona.\n{accent:Jo} në gjuhën tonë.",
        compareLeftLabel: "Gjuhët e titrave Disney+",
        compareLeftValue: "~22 {em:përfshirë katalanishten}",
        compareRightLabel: "Shqipja",
        compareRightValue: "{red:Fëmijët e diasporës · {em:të kyçur jashtë}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      uber: {
        ask: "Çdo kryeqytet ballkanik.\nPrishtina, {accent:hapësira boshe.}",
        compareLeftLabel: "Evropa — vendet me Uber",
        compareLeftValue: "30 {em:përfshirë Tiranën}",
        compareRightLabel: "Prishtina",
        compareRightValue: "{red:Popullsia më e re · {em:asnjë}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      amazon: {
        ask: "Amazon, {em:lejona}\ntë botojmë.",
        compareLeftLabel: "KDP — 53 gjuhë",
        compareLeftValue: "Manksh, {em:Korniks}",
        compareRightLabel: "Shqipja — mungon",
        compareRightValue: "{red:16M {em:folës}}",
        statSigLabel: "nënshkrime",
        statTimeLabel: "i fushatës",
      },
      unicode: {
        ask: "Tacot kanë një glif.\n{em:Plisi} {accent:nuk ka.}",
        compareLeftLabel: "Emoji kulturore",
        compareLeftValue: "200+ {em:kimono, gondola}",
        compareRightLabel: "Shqiptare",
        compareRightValue: "{red:Plisi, qeleshe, {em:byrek}}",
        statSigValue: "Së shpejti",
        statSigLabel: "Dritarja e lansimit T3",
        statTimeValue: "Më njofto",
        statTimeLabel: "në lansim",
      },
      google: {
        ask: "2023: {em:kërkuam.}\n2026: {accent:vazhdojmë.}",
        compareLeftLabel: "Fitore që nga 2023",
        compareLeftValue: "3 {em:Pay, Maps, +383}",
        compareRightLabel: "Ende mungojnë",
        compareRightValue: "{red:Play, {em:YouTube monet.}}",
        statSigLabel: "nënshkrime origjinale",
        statTimeValue: "Në vazhdim",
        statTimeLabel: "që nga 2023",
      },
    },
    progress: {
      of: "nga",
      day: "Dita",
    },
  },
  how: {
    sectionNum: "— 02 Si funksionon",
    headline: "Tre hapa.\n{em:Kjo është e gjitha.}",
    lede:
      "Faqet e lëvizjeve që përpiqen të jenë faqe përmbajtjeje, vdesin. E mbajtëm këtë të vogël me qëllim. Lexo rastin për 60 sekonda. Nënshkruaj me dy fusha. Shpërnda me një trokitje.",
    steps: [
      {
        n: "01 / Zgjidh një peticion",
        h: "Lexo rastin për 60 sekonda.",
        p: "Çdo peticion hapet me një krahasim, tre numra dhe një kërkesë. Pa ese. Numrat janë argumenti.",
      },
      {
        n: "02 / Nënshkruaj",
        h: "Emër dhe email. Aq.",
        p: "Përzgjedhësi i vendit është opsional, paracaktuar nga IP. Nënshkrimi yt llogaritet menjëherë. Nuk do t'i ndajmë kurrë të dhënat e tua, nuk do ta shesim adresën, nuk do të dërgojmë gazetë.",
      },
      {
        n: "03 / Shpërnda",
        h: "Platformat dëgjojnë kur zhurma bëhet mjaft e fortë.",
        p: "Një trokitje kopjon posterin, mesazhin dhe linkun. WhatsApp, Instagram Stories, X — të para-shkruara në shqip, anglisht dhe gjermanisht.",
      },
    ],
  },
  quotes: {
    sectionNum: "— 03 Zëra",
    headline: "Nga Prishtina\nte {em:diaspora}.",
    lede:
      "Shkrimtarë, themelues dhe udhëheqës të komunitetit pse kjo ka rëndësi tani. Nuk po kërkojmë trajtim të veçantë — po kërkojmë atë që çdo komunitet tjetër e merr si të mirëqenë.",
    items: [
      {
        text: "Vajza ime mëson spanjishten nga Netflix. Mund të mësojë islandishten nga Netflix. Nuk mund të mësojë gjuhën që flet gjyshja e saj.",
        author: "Anila Krasniqi",
        meta: "Diasporë · Cyrih",
        initials: "A.K.",
      },
      {
        text: "Themelova një startup në Prishtinë. Nuk mund të pranoj as një pagesë të vetme me Stripe. Infrastruktura e internetit modern thotë: ti nuk ekziston.",
        author: "Fatos Bytyçi",
        meta: "Themelues · Prishtinë",
        initials: "F.B.",
      },
      {
        text: "Kjo nuk është një ankesë. Është një listë. Dhe çdo emër në të është një kompani që ka bërë një zgjedhje për të na lënë jashtë.",
        author: "Lirie Hoxha",
        meta: "Redaktore · Kosovo 2.0",
        initials: "L.H.",
      },
    ],
  },
  press: {
    eyebrow: "— Të mbuluar nga",
    meta: "31 media shqiptare · 12 raportime ndërkombëtare · që nga 2023",
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
    headline: "Gjashtëmbëdhjetë\nmilionë zëra.\n{em:Një platformë} {accent:në kohë.}",
    sub: "Nënshkruaj ato që të interesojnë. Shpërnda ato që të prekin. Përcille te kushëriri në Berlin dhe shoqja në Nju Jork.",
    ctaPrimary: "Nënshkruaj peticionin tjetër",
    ctaSecondary: "Lexo manifestin",
  },
  signup: {
    headline: "Një email. Për çdo lansim fushate. {em:Aq.}",
    sub: "Pa gazetë. Pa kuti zgjedhjeje. Pa “qëndro me ne” mbushës. Të dërgojmë email kur ka një platformë të re për ta nënshkruar — dhe vetëm atëherë. Përafërsisht një herë në çdo tre deri në katër javë.",
    placeholder: "ti@shembull.com",
    button: "Bashkohu",
    success: "✓ NË LISTË",
    fine: "Pa spam. Nuk do t'i ndajmë kurrë të dhënat e tua. Mund të çregjistrohesh në çdo kohë.",
  },
  footer: {
    brandTagline:
      "Një lëvizje për njohjen digjitale të Kosovës dhe gjuhës shqipe. Një iniciativë e dua.com për komunitetin shqiptar.",
    cols: {
      site: {
        title: "Faqja",
        items: [
          { label: "Të gjitha peticionet", href: "#petitions" },
          { label: "Manifesti", href: "#manifesto" },
          { label: "Materialet për shtypin", href: "#press" },
        ],
      },
      involved: {
        title: "Përfshihu",
        items: [
          { label: "Fillo një peticion", href: "#" },
          { label: "Përkthe", href: "#" },
          { label: "Vullnetar", href: "#" },
          { label: "Kontakti për shtypin", href: "#" },
        ],
      },
      dua: {
        title: "Nga dua.com",
        items: [
          { label: "dua.com", href: "https://dua.com" },
          { label: "Historia jonë", href: "https://dua.com" },
          { label: "Privatësia", href: "#" },
          { label: "Kushtet", href: "#" },
        ],
      },
    },
    cities:
      "Bërë në {em:Prishtinë, Tiranë, Shkup, Cyrih, Berlin, Nju Jork}. Kudo ku jetojnë shqiptarët.",
    copyright: "© 2026 Digital Albanian 2.0 · Një iniciativë e dua.com",
  },
};

export default sq;
