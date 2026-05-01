/**
 * Static data for the Uber petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (2)" / uber-petition.jsx
 */

import type { Petition, FaqItem } from "./petition-shared";

export const UBER_CHANGE_ORG_URL =
  "https://www.change.org/p/uber-bring-uber-to-pristina";

export const UBER_SIGNATURES = 22710;
export const UBER_TARGET = 100000;

export type MapPin = { c: string; x: number; y: number; status: string; us?: boolean };

/** Approximate positions on a stylized 1280×520 Balkans map. */
export const UBER_MAP_PINS: MapPin[] = [
  { c: "Vienna", x: 220, y: 90, status: "Available" },
  { c: "Budapest", x: 430, y: 120, status: "Available" },
  { c: "Belgrade", x: 560, y: 230, status: "Available" },
  { c: "Sofia", x: 780, y: 300, status: "Available" },
  { c: "Bucharest", x: 760, y: 170, status: "Available" },
  { c: "Tirana", x: 560, y: 380, status: "Available" },
  { c: "Skopje", x: 660, y: 340, status: "Available" },
  { c: "Athens", x: 790, y: 450, status: "Available" },
  { c: "Pristina", x: 610, y: 300, status: "Not available", us: true },
];

export type CounterCell = { v: string; l: string };

export const UBER_COUNTER_CELLS: CounterCell[] = [
  { v: "1.8M", l: "Population" },
  { v: "78%", l: "Smartphone penetration" },
  { v: "29", l: "Median age (lowest in EU region)" },
  { v: "0", l: "Working Uber rides ever" },
];

export type UberReceiptRow = {
  c: string;
  pop: number;
  flag: string;
  x: boolean;
  comf: boolean;
  eats: boolean;
  us?: boolean;
};

export const UBER_RECEIPT_ROWS: UberReceiptRow[] = [
  { c: "Tirana", pop: 0.55, flag: "🇦🇱", x: true, comf: true, eats: true },
  { c: "Skopje", pop: 0.55, flag: "🇲🇰", x: true, comf: true, eats: false },
  { c: "Belgrade", pop: 1.4, flag: "🇷🇸", x: true, comf: true, eats: true },
  { c: "Sofia", pop: 1.3, flag: "🇧🇬", x: true, comf: true, eats: true },
  { c: "Pristina", pop: 0.21, flag: "🇽🇰", x: false, comf: false, eats: false, us: true },
];

export const UBER_QUOTES = [
  {
    q: "Every guest I host wants Uber from the airport. I tell them about local taxis. They show up confused with cash they didn't have. The friction is real.",
    n: "Albulena H.",
    c: "Pristina",
  },
  {
    q: "I drive for a fleet that already runs on Uber tech in three countries. The drivers are here. The cars are here. The passengers are opening the app in vain.",
    n: "Festa B.",
    c: "Driver, Pristina",
  },
  {
    q: "Pristina has the youngest, most app-native population in Europe. There is no city better optimized for ride-hail to land in.",
    n: "Anonymous",
    c: "Mobility analyst",
  },
];

export const UBER_FAQ: FaqItem[] = [
  {
    q: "Don't local taxis already cover this?",
    a: "They do — and they're excellent for residents. But for tourists, conference attendees, and diaspora returnees, Uber is the default app. Its absence is felt every weekend at the airport.",
  },
  {
    q: "Is this a regulatory issue?",
    a: "No. Kosovo passed a ride-share framework in 2023. Bolt operates here. Uber is a market-entry decision.",
  },
  {
    q: "What about driver supply?",
    a: "We have it. Pristina has 4,200+ active commercial drivers and a driver-pool study with the Chamber of Commerce ready for review.",
  },
  {
    q: "Has Uber responded?",
    a: 'Two emails. Both citing "ongoing market evaluation." We\'re asking for a public timeline.',
  },
  {
    q: "How is dua.com involved?",
    a: "dua.com pays the costs. The signatures belong to the community.",
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

export const UBER_LETTER = {
  sentDate: "2026-04-25",
  sentDateDisplay: "April 25, 2026",
  to: {
    name: "Dara Khosrowshahi",
    role: "CEO, Uber Technologies, Inc.",
    company: "Uber Technologies, Inc.",
    address: ["1725 3rd Street", "San Francisco, CA 94158", "United States"],
  },
  subject: "Launch Uber in Pristina — UberX, Comfort, Eats — first rides Q1 2027",
  salutation: "Dear Mr. Khosrowshahi,",
  body: [
    "We are writing as 22,710 people who open the Uber app in Pristina every week and see the message \"city not supported.\" Uber operates in eight of nine Balkan capitals — Vienna, Budapest, Belgrade, Sofia, Bucharest, Tirana, Skopje, Athens. Pristina is the gap.",
    "Pristina has the youngest median age in the region (29), the highest smartphone penetration on the EU's southern border (78%), and a fully English-fluent driver pool. Kosovo passed a ride-share regulatory framework in 2023; Bolt has been operating here since. Uber's absence is a market-entry decision, not a technical or regulatory blocker.",
    "Demand is concrete and measurable: airport-to-city traffic from the Pristina International Airport, conference traffic when Pristina Tech Week and Kosovo IT Days run, and the diaspora summer surge between July and August every year.",
  ],
  asks: [
    "Driver onboarding for Pristina by Q4 2026.",
    "First rides in Pristina, including airport pickups, by Q1 2027.",
    "UberX, Comfort, and Uber Eats available within the first 12 months.",
  ],
  closing: [
    "Pristina has 4,200+ active commercial drivers; we have a driver-pool study with the Chamber of Commerce ready for your operations team's review. We can introduce you to the regulator the same week you decide to launch.",
    "Signatures are being collected at change.org/p/uber-bring-uber-to-pristina and will be delivered at 100,000.",
  ],
  replyByDisplay: "We would welcome a reply by July 15, 2026.",
  signOff: "Sincerely,",
  signedBy: {
    name: "Driton Bajraktari",
    role: "Founder & CEO, dua.com",
    behalfOf: "On behalf of Digital Albanian 2.0",
  },
  replies: [],
};

export const UBER_PETITION: Petition = {
  target: "Uber",
  num: "07",
  slug: "uber",
  changeOrgUrl: UBER_CHANGE_ORG_URL,
  signatures: UBER_SIGNATURES,
  target_count: UBER_TARGET,
  accent: "#F6F600",
  signers: SIGNERS,
  faq: UBER_FAQ,
  letter: UBER_LETTER,
};
