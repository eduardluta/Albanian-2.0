import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import SpotifyHero from "@/components/petition/SpotifyHero";
import SpotifyAsk from "@/components/petition/SpotifyAsk";
import SpotifyReceipts from "@/components/petition/SpotifyReceipts";
import PetitionVoices from "@/components/petition/PetitionVoices";
import SignBlock from "@/components/petition/SignBlock";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";
import { SPOTIFY_PETITION, SPOTIFY_QUOTES } from "@/data/spotify-petition";

const PETITION_TITLE = "Add Albanian to Spotify";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "Spotify added Bosnian (2.5M speakers) and four other Eastern European languages between 2021–23. Albanian — 16M speakers, 6× larger — was skipped. Sign the open letter to add Albanian to the language picker by Q4 2026.";

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
  const url = `${siteUrl}/${locale}/p/spotify/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/spotify/`]),
  );
  languages["x-default"] = `${siteUrl}/p/spotify/`;
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

export default async function SpotifyPetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <SpotifyHero />
      <SpotifyAsk locale={locale} />
      <SignBlock
        petition={SPOTIFY_PETITION}
        scaleHook="One signature is a comment thread. 1,000 is a press release. 100,000 is a localization roadmap line item. That's our target."
      />
      <SpotifyReceipts />
      <PetitionVoices
        num="05"
        accent="#00C46A"
        headlineLines={["2.1M ESTIMATED", "USERS.", "€180M / YEAR."]}
        quotes={SPOTIFY_QUOTES}
      />
      <Faq items={SPOTIFY_PETITION.faq} num="06" />
      <PetitionCta
        signatures={SPOTIFY_PETITION.signatures}
        target={SPOTIFY_PETITION.target_count}
        changeOrgUrl={SPOTIFY_PETITION.changeOrgUrl}
        background="#00C46A"
      />
    </main>
  );
}
