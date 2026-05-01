export type PetitionStatus = "active" | "soon" | "won";
export type PetitionFilter = "recognize" | "add" | "won";

export type Petition = {
  slug: "netflix" | "spotify" | "paypal" | "apple" | "elevenlabs" | "streaming" | "uber" | "amazon" | "unicode" | "google";
  num: string;
  target: string;
  status: PetitionStatus;
  filters: PetitionFilter[];
  signatures: number | null;
  signaturesGoal?: number;
  daysRunning: number | null;
  progress: number | null;
  /** Path under /[locale]/. Set when this petition has a real detail page;
   *  otherwise points at the home anchor. */
  page?: string;
  href: string;
};

export const petitions: Petition[] = [
  {
    slug: "netflix",
    num: "01",
    target: "Netflix",
    status: "active",
    filters: ["add"],
    signatures: 42318,
    signaturesGoal: 50000,
    daysRunning: 17,
    progress: 84.6,
    page: "p/netflix",
    href: "#netflix",
  },
  {
    slug: "spotify",
    num: "02",
    target: "Spotify",
    status: "active",
    filters: ["add"],
    signatures: 28140,
    signaturesGoal: 50000,
    daysRunning: 14,
    progress: 56.3,
    page: "p/spotify",
    href: "#spotify",
  },
  {
    slug: "paypal",
    num: "03",
    target: "PayPal",
    status: "active",
    filters: ["recognize"],
    signatures: 36902,
    signaturesGoal: 50000,
    daysRunning: 21,
    progress: 73.8,
    page: "p/paypal",
    href: "#paypal",
  },
  {
    slug: "apple",
    num: "04",
    target: "Apple",
    status: "active",
    filters: ["recognize"],
    signatures: 19455,
    signaturesGoal: 50000,
    daysRunning: 9,
    progress: 38.9,
    page: "p/apple",
    href: "#apple",
  },
  {
    slug: "elevenlabs",
    num: "05",
    target: "ElevenLabs",
    status: "active",
    filters: ["add"],
    signatures: 14221,
    signaturesGoal: 50000,
    daysRunning: 6,
    progress: 28.4,
    page: "p/elevenlabs",
    href: "#elevenlabs",
  },
  {
    slug: "streaming",
    num: "06",
    target: "Disney+ & Prime",
    status: "active",
    filters: ["add"],
    signatures: 11067,
    signaturesGoal: 50000,
    daysRunning: 12,
    progress: 22.1,
    href: "#streaming",
  },
  {
    slug: "uber",
    num: "07",
    target: "Uber",
    status: "active",
    filters: ["recognize"],
    signatures: 22710,
    signaturesGoal: 100000,
    daysRunning: 8,
    progress: 22.7,
    page: "p/uber",
    href: "#uber",
  },
  {
    slug: "amazon",
    num: "08",
    target: "Amazon KDP",
    status: "active",
    filters: ["add"],
    signatures: 8247,
    signaturesGoal: 50000,
    daysRunning: 5,
    progress: 16.5,
    href: "#amazon",
  },
  {
    slug: "unicode",
    num: "09",
    target: "Unicode",
    status: "soon",
    filters: [],
    signatures: null,
    daysRunning: null,
    progress: null,
    href: "#unicode",
  },
  {
    slug: "google",
    num: "10",
    target: "Google",
    status: "won",
    filters: ["recognize", "won"],
    signatures: 25635,
    daysRunning: null,
    progress: null,
    href: "#google",
  },
];

export const counts = {
  all: petitions.length,
  recognize: petitions.filter((p) => p.filters.includes("recognize")).length,
  add: petitions.filter((p) => p.filters.includes("add")).length,
  won: petitions.filter((p) => p.filters.includes("won")).length,
};
