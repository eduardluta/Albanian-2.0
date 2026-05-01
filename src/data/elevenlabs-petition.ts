/**
 * Static data for the ElevenLabs petition page.
 * Source: design handoff "Digital Kosovo 2.0-handoff (2)" / elevenlabs-petition.jsx
 */

import type { Petition, FaqItem } from "./petition-shared";

export const ELEVENLABS_CHANGE_ORG_URL =
  "https://www.change.org/p/elevenlabs-add-an-albanian-voice";

export const ELEVENLABS_SIGNATURES = 14228;
export const ELEVENLABS_TARGET = 100000;

/** Deterministic waveform pattern for a language sample card. */
export function waveform(seed: number, n = 42): number[] {
  const arr: number[] = [];
  let s = seed;
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    const env = Math.sin((i / n) * Math.PI) * 0.7 + 0.3;
    arr.push(Math.max(0.1, r * env));
  }
  return arr;
}

export type VoiceLang = {
  l: string;
  s: string;
  spk: string;
  added: string;
  flag: string;
  miss?: boolean;
  wave: number[];
};

export const ELEVENLABS_LANGS: VoiceLang[] = [
  { l: "Slovenian", s: "Govorim slovensko, in to že leta.", spk: "2.5M", added: "Mar 2024", flag: "🇸🇮", wave: waveform(13) },
  { l: "Croatian", s: "Pričam hrvatski svaki dan.", spk: "5.6M", added: "Jun 2023", flag: "🇭🇷", wave: waveform(27) },
  { l: "Serbian", s: "Govorim srpski sa porodicom.", spk: "9.0M", added: "Jun 2023", flag: "🇷🇸", wave: waveform(41) },
  { l: "Macedonian", s: "Зборувам македонски со пријатели.", spk: "2.0M", added: "Sep 2024", flag: "🇲🇰", wave: waveform(55) },
  { l: "Bulgarian", s: "Говоря български всеки ден.", spk: "8.0M", added: "Apr 2023", flag: "🇧🇬", wave: waveform(69) },
  { l: "Albanian", s: "Flas shqip me familjen time.", spk: "7.5M", added: "—", flag: "🇦🇱", miss: true, wave: waveform(83).map(() => 0.18) },
];

export type ElevenLabsScopeCell = { v: string; l: string };

export const ELEVENLABS_COUNTER_CELLS: ElevenLabsScopeCell[] = [
  { v: "7.5M", l: "Albanian speakers worldwide" },
  { v: "32", l: "Languages already supported" },
  { v: "0", l: "Albanian voices in the library" },
  { v: "€2.4B", l: "Albanian-language content market" },
];

export type TtsRow = {
  c: string;
  s: number;
  flag: string;
  tts: boolean;
  dub: boolean;
  clone: boolean;
  us?: boolean;
};

export const ELEVENLABS_TTS_ROWS: TtsRow[] = [
  { c: "Slovenian", s: 2.5, flag: "🇸🇮", tts: true, dub: true, clone: true },
  { c: "Macedonian", s: 2.0, flag: "🇲🇰", tts: true, dub: true, clone: true },
  { c: "Croatian", s: 5.6, flag: "🇭🇷", tts: true, dub: true, clone: true },
  { c: "Bulgarian", s: 8.0, flag: "🇧🇬", tts: true, dub: true, clone: true },
  { c: "Albanian", s: 7.5, flag: "🇦🇱", tts: false, dub: false, clone: false, us: true },
];

export type Quote = { q: string; n: string; c: string };

export const ELEVENLABS_QUOTES: Quote[] = [
  {
    q: "I produce audiobooks in Pristina. Every client asks for an Albanian narrator AI as a backup. I tell them it doesn't exist. They go to a Polish studio that fakes the accent.",
    n: "Donika L.",
    c: "Audiobook producer",
  },
  {
    q: "My grandmother is blind. There is no Albanian screen reader that doesn't sound like 1998. There is one for Maltese.",
    n: "Rinor M.",
    c: "Software engineer",
  },
  {
    q: "Albanian phonotactics aren't exotic. The model architecture handles Vietnamese tones. This is a prioritization gap, not a science gap.",
    n: "Anonymous",
    c: "ML researcher",
  },
];

export const ELEVENLABS_FAQ: FaqItem[] = [
  {
    q: "Why Albanian and not just Kosovan?",
    a: "Albanian is one language with two standards (Tosk and Gheg) and minor regional pronunciation. We're asking for both. Kosovo speaks both fluently.",
  },
  {
    q: "Is the data actually available?",
    a: "Yes. Open Subtitles, Common Voice (Mozilla), RTK and RTSH archives, plus university linguistic corpora from Pristina, Tirana, and Skopje.",
  },
  {
    q: "Has ElevenLabs responded?",
    a: "No formal response. The petition launched April 2026.",
  },
  {
    q: "What about Google/Azure/Amazon TTS?",
    a: "All three have basic Albanian — robotic and dated. ElevenLabs is the modern standard. Its absence shapes which podcasts, audiobooks, and accessibility tools get made in Albanian.",
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

export const ELEVENLABS_PETITION: Petition = {
  target: "ElevenLabs",
  num: "05",
  changeOrgUrl: ELEVENLABS_CHANGE_ORG_URL,
  signatures: ELEVENLABS_SIGNATURES,
  target_count: ELEVENLABS_TARGET,
  accent: "#A78BFA",
  signers: SIGNERS,
  faq: ELEVENLABS_FAQ,
};
