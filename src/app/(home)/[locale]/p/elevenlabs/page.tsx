import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import ElevenLabsHero from "@/components/petition/ElevenLabsHero";
import ElevenLabsAsk from "@/components/petition/ElevenLabsAsk";
import ElevenLabsReceipts from "@/components/petition/ElevenLabsReceipts";
import ElevenLabsVoices from "@/components/petition/ElevenLabsVoices";
import SignBlock from "@/components/petition/SignBlock";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";
import { ELEVENLABS_PETITION } from "@/data/elevenlabs-petition";

const PETITION_TITLE = "An Albanian Voice on ElevenLabs";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "ElevenLabs supports 32 languages — every Balkan one except ours. Albanian has 7.5M speakers and zero TTS, dubbing, or voice cloning. Sign the open letter to add Albanian by Q3 2026.";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const url = `${siteUrl}/${locale}/p/elevenlabs/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/elevenlabs/`]),
  );
  languages["x-default"] = `${siteUrl}/p/elevenlabs/`;
  return {
    title: META_TITLE,
    description: META_DESC,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      url,
      siteName,
      title: META_TITLE,
      description: META_DESC,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: META_TITLE }],
    },
    twitter: {
      card: "summary_large_image",
      title: META_TITLE,
      description: META_DESC,
      images: ["/og-image.png"],
    },
  };
}

export default async function ElevenLabsPetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <ElevenLabsHero />
      <ElevenLabsAsk />
      <SignBlock
        petition={ELEVENLABS_PETITION}
        num="03"
        scaleHook="A signature isn't a feature request. 100,000 signatures is a roadmap line item."
      />
      <ElevenLabsReceipts />
      <ElevenLabsVoices />
      <Faq items={ELEVENLABS_PETITION.faq} num="06" />
      <PetitionCta
        signatures={ELEVENLABS_PETITION.signatures}
        target={ELEVENLABS_PETITION.target_count}
        changeOrgUrl={ELEVENLABS_PETITION.changeOrgUrl}
        background="#A78BFA"
      />
    </main>
  );
}
