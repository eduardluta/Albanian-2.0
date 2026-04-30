import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import PetitionHero from "@/components/petition/PetitionHero";
import AskBand from "@/components/petition/AskBand";
import SignBlock from "@/components/petition/SignBlock";
import Receipts from "@/components/petition/Receipts";
import Voices from "@/components/petition/Voices";
import SocialWall from "@/components/petition/SocialWall";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";

const PETITION_TITLE = "Add Albanian to Netflix";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "Netflix supports 33 languages. Albanian — spoken by 16 million people — is not one of them. Sign the open letter to add Albanian subtitles, dubs and UI by Q4 2026.";

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
  const url = `${siteUrl}/${locale}/p/netflix/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/netflix/`]),
  );
  languages["x-default"] = `${siteUrl}/p/netflix/`;
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

export default async function NetflixPetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <PetitionHero />
      <AskBand />
      <SignBlock />
      <Receipts />
      <Voices />
      <SocialWall />
      <Faq />
      <PetitionCta />
    </main>
  );
}
