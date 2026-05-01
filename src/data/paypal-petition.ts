/**
 * Static data for the PayPal petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (2)" / paypal-petition-v2.jsx
 */

import type { Petition, FaqItem } from "./petition-shared";

export const PAYPAL_CHANGE_ORG_URL =
  "https://www.change.org/p/paypal-bring-paypal-to-kosovo";

export const PAYPAL_SIGNATURES = 36902;
export const PAYPAL_TARGET = 100000;

export type ScopeCell = { v: string; l: string; zero?: boolean; accent?: boolean };

export const PAYPAL_SCOPE: ScopeCell[] = [
  { v: "435M", l: "PayPal active accounts worldwide", accent: true },
  { v: "200+", l: "Countries & regions PayPal serves" },
  { v: "36M+", l: "Merchant accounts on the platform" },
  { v: "0", l: "Of the above are in Kosovo", zero: true },
];

export type CounterCell = { v: string; l: string };

export const PAYPAL_COUNTER_CELLS: CounterCell[] = [
  { v: "1.8M", l: "Population of Kosovo" },
  { v: "80%", l: "Smartphone penetration" },
  { v: "0", l: "Personal accounts available" },
];

export type CostCard = {
  tag: string;
  headline: string;
  body: string;
  quote: string;
  cite: string;
};

export const PAYPAL_COSTS: CostCard[] = [
  {
    tag: "Outcome A",
    headline: "Pay the\nmiddleman.\n*If you can find one.*",
    body: "The lucky ones know somebody abroad — a partner, a co-founder, a friend with a German or Albanian PayPal account — willing to receive on their behalf. **Whoever holds the account holds the relationship.** They take a percentage. They become a single point of failure. The income shows up on their tax return, not yours.",
    quote:
      "Half my fee goes through a friend's account in Berlin. He's family — but it's still his money first, mine second.",
    cite: "Designer · Pristina",
  },
  {
    tag: "Outcome B",
    headline: "Don't\ndo the work.\n*The job goes elsewhere.*",
    body: "For most people, there is no friend in Berlin. The international client asks \"PayPal?\" — the Kosovar answers \"no\" — and the conversation ends. **The contract goes to a freelancer in Skopje, Tirana, or Belgrade.** No invoice, no GDP entry, no tax. The opportunity simply leaves the country.",
    quote:
      "I lost three clients in one month for the same reason. They didn't want to fight the payment problem. They just hired someone else.",
    cite: "Translator · Pristina",
  },
];

export type CountryRow = {
  c: string;
  pop: number;
  flag: string;
  send: boolean;
  recv: boolean;
  biz: boolean;
  us?: boolean;
};

export const PAYPAL_COUNTRY_ROWS: CountryRow[] = [
  { c: "Montenegro", pop: 0.62, flag: "🇲🇪", send: true, recv: true, biz: true },
  { c: "North Macedonia", pop: 2.1, flag: "🇲🇰", send: true, recv: true, biz: true },
  { c: "Albania", pop: 2.8, flag: "🇦🇱", send: true, recv: true, biz: true },
  { c: "Bosnia & H.", pop: 3.3, flag: "🇧🇦", send: true, recv: true, biz: true },
  { c: "Serbia", pop: 6.6, flag: "🇷🇸", send: true, recv: true, biz: true },
  { c: "Kosovo", pop: 1.8, flag: "🇽🇰", send: false, recv: false, biz: false, us: true },
];

export const PAYPAL_FAQ: FaqItem[] = [
  {
    q: "Why only PayPal? Aren't other platforms also missing?",
    a: "Yes — Patreon, App Store developer payouts, and several others also exclude Kosovo. We start with PayPal because it's the most universal: the rail clients, agencies, and platforms expect by default. Fixing PayPal removes the single biggest blocker. The rest of the list comes after.",
  },
  {
    q: "Is this a regulatory issue?",
    a: "No. Kosovo is on FATF's standard list. Other PSPs (Wise, partial Revolut flows) operate. PayPal's decision is a corporate one — they have not publicly explained the criteria.",
  },
  {
    q: "What about Wise, Revolut, Stripe?",
    a: "Wise works partially. Revolut is limited. Stripe doesn't. None of them remove the core problem: international clients ask for PayPal first. Until that name is on the list, Kosovo stays an exception.",
  },
  {
    q: "Has PayPal responded?",
    a: 'Twice — in 2018 and 2021 — both citing "ongoing review." We\'re asking for a public timeline.',
  },
  {
    q: "Where does my signature go?",
    a: "Directly to change.org. Counted toward the 100,000 target. Delivered to PayPal at threshold.",
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

export const PAYPAL_PETITION: Petition = {
  target: "PayPal",
  num: "03",
  changeOrgUrl: PAYPAL_CHANGE_ORG_URL,
  signatures: PAYPAL_SIGNATURES,
  target_count: PAYPAL_TARGET,
  accent: "#1F6CFF",
  signers: SIGNERS,
  faq: PAYPAL_FAQ,
};
