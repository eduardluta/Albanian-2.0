/**
 * Static data for the Apple petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (2)" / apple-petition.jsx
 */

import type { Petition, FaqItem } from "./petition-shared";

export const APPLE_CHANGE_ORG_URL =
  "https://www.change.org/p/apple-list-kosovo-on-apple-id";

export const APPLE_SIGNATURES = 19455;
export const APPLE_TARGET = 100000;

export type CountryPickerRow = { n: string; flag: string; miss?: boolean };

/** The "K" section of the Apple ID country picker, real ordering. */
export const APPLE_PICKER_K: CountryPickerRow[] = [
  { n: "Kazakhstan", flag: "🇰🇿" },
  { n: "Kenya", flag: "🇰🇪" },
  { n: "Kosovo", flag: "🇽🇰", miss: true },
  { n: "Kuwait", flag: "🇰🇼" },
  { n: "Kyrgyzstan", flag: "🇰🇬" },
];

export type CounterCell = { v: string; l: string };

export const APPLE_COUNTER_CELLS: CounterCell[] = [
  { v: "175", l: "Countries on the picker" },
  { v: "1.8M", l: "iPhone users in Kosovo" },
  { v: "€0", l: "iCloud paid subscriptions possible" },
  { v: "0", l: "Apple Pay merchants" },
];

export type AppleReceiptRow = {
  c: string;
  pop: number;
  flag: string;
  id: boolean;
  pay: boolean;
  store: boolean;
  us?: boolean;
};

export const APPLE_RECEIPT_ROWS: AppleReceiptRow[] = [
  { c: "Vatican City", pop: 0.0008, flag: "🇻🇦", id: true, pay: true, store: true },
  { c: "Tuvalu", pop: 0.011, flag: "🇹🇻", id: true, pay: false, store: true },
  { c: "Andorra", pop: 0.08, flag: "🇦🇩", id: true, pay: true, store: true },
  { c: "Liechtenstein", pop: 0.04, flag: "🇱🇮", id: true, pay: true, store: true },
  { c: "Kosovo", pop: 1.8, flag: "🇽🇰", id: false, pay: false, store: false, us: true },
];

export const APPLE_QUOTES = [
  {
    q: "I bought my iPhone in Tirana and use it in Pristina with an Albanian Apple ID. The address on file is a friend's. This is the workaround for an entire country.",
    n: "Erza K.",
    c: "Pristina",
  },
  {
    q: "Apple Pay works at the bakery next door — if you tap with a Slovenian card. Mine is Kosovan. The terminal beeps. The app says: country not supported.",
    n: "Mergim S.",
    c: "Pristina",
  },
  {
    q: "Adding a country to the Apple ID picker is a backend config change with a tax ledger entry. We're not asking for hardware.",
    n: "Anonymous",
    c: "Industry insider",
  },
];

export const APPLE_FAQ: FaqItem[] = [
  {
    q: "Is this a Serbia/recognition issue?",
    a: "No. Apple already lists Taiwan, Hong Kong, Macau, and the Vatican — none uniformly recognized. The picker is operational, not diplomatic.",
  },
  {
    q: "Can't I just use an Albanian Apple ID?",
    a: "You can — and most of us do. It violates Apple's ToS, voids warranties on local purchases, and breaks Find My, Family Sharing, and tax invoicing.",
  },
  {
    q: "Has Apple responded?",
    a: "No public response. The petition has been live since Apr 2026.",
  },
  {
    q: "Where does my signature go?",
    a: "To change.org. Counted toward the 100,000 target. Delivered to Apple at threshold.",
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

export const APPLE_LETTER = {
  sentDate: "2026-04-20",
  sentDateDisplay: "April 20, 2026",
  to: {
    name: "Tim Cook",
    role: "CEO, Apple Inc.",
    company: "Apple Inc.",
    address: ["One Apple Park Way", "Cupertino, CA 95014", "United States"],
  },
  subject: "List Kosovo on Apple ID, enable Apple Pay, open the App Store storefront — by Q2 2027",
  salutation: "Dear Mr. Cook,",
  body: [
    "We are writing as 19,455 people in Kosovo who own an iPhone and cannot register an Apple ID with their actual country of residence. The Apple ID picker lists 175 countries today, including Vatican City (population 800), Tuvalu (11,000), Andorra (80,000), and Liechtenstein (40,000). Kosovo — population 1.8 million, with iPhones in nearly every household — is not on that list.",
    "Apple already serves territories whose UN status is contested or partial: Taiwan, Hong Kong, Macau, Vatican City. The Apple ID country dropdown is a registry, not a recognition statement; it tracks tax jurisdictions and fulfillment regions, both of which Kosovo independently administers.",
    "The current workaround — registering an Albanian or Macedonian Apple ID with a friend's address — violates your Terms of Service, voids warranties on locally-purchased devices, and breaks Find My, Family Sharing, and tax invoicing.",
  ],
  asks: [
    "Add Kosovo to the Apple ID country/region picker.",
    "Enable Apple Pay for Kosovo-issued cards and Kosovo-based merchants.",
    "Open an App Store storefront so Kosovo developers can publish under their actual country.",
  ],
  closing: [
    "We have audited the picker (appleid.apple.com), the Apple Pay availability map, and App Store Connect's country list. Kosovo is absent from all three. The block is operational, not political.",
    "Signatures are being collected at change.org/p/apple-list-kosovo-on-apple-id and will be delivered at 100,000.",
  ],
  replyByDisplay: "We would welcome a reply by July 1, 2026.",
  signOff: "Sincerely,",
  signedBy: {
    name: "Driton Bajraktari",
    role: "Founder & CEO, dua.com",
    behalfOf: "On behalf of Digital Albanian 2.0",
  },
  replies: [],
};

export const APPLE_PETITION: Petition = {
  target: "Apple",
  num: "04",
  slug: "apple",
  changeOrgUrl: APPLE_CHANGE_ORG_URL,
  signatures: APPLE_SIGNATURES,
  target_count: APPLE_TARGET,
  accent: "#C9CDD4",
  signers: SIGNERS,
  faq: APPLE_FAQ,
  letter: APPLE_LETTER,
};
