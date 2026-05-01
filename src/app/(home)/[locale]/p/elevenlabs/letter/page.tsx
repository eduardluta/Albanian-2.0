import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import PetitionLetterPage from "@/components/petition/PetitionLetterPage";
import { ELEVENLABS_PETITION } from "@/data/elevenlabs-petition";

const META_TITLE = `Letter to ElevenLabs · Digital Albanian 2.0`;
const META_DESC = ELEVENLABS_PETITION.letter.subject;

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
  const url = `${siteUrl}/${locale}/p/elevenlabs/letter/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/elevenlabs/letter/`]),
  );
  languages["x-default"] = `${siteUrl}/p/elevenlabs/letter/`;
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

export default async function ElevenLabsLetterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PetitionLetterPage petition={ELEVENLABS_PETITION} locale={locale} />;
}
