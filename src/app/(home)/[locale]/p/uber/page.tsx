import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import UberHero from "@/components/petition/UberHero";
import UberAsk from "@/components/petition/UberAsk";
import UberReceipts from "@/components/petition/UberReceipts";
import PetitionVoices from "@/components/petition/PetitionVoices";
import SignBlock from "@/components/petition/SignBlock";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";
import { UBER_PETITION, UBER_QUOTES } from "@/data/uber-petition";

const PETITION_TITLE = "Bring Uber to Pristina";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "Uber operates in 8 of 9 Balkan capitals — Vienna, Budapest, Belgrade, Sofia, Bucharest, Tirana, Skopje, Athens. Pristina is the gap. Sign the open letter to launch UberX, Comfort, and Eats by Q1 2027.";

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
  const url = `${siteUrl}/${locale}/p/uber/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/uber/`]),
  );
  languages["x-default"] = `${siteUrl}/p/uber/`;
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

export default async function UberPetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <UberHero />
      <UberAsk locale={locale} />
      <SignBlock
        petition={UBER_PETITION}
        scaleHook="Local taxis are great. Visitors don't know that. Uber is the default tourist on-ramp — and we don't have one."
      />
      <UberReceipts />
      <PetitionVoices
        num="05"
        accent="#F6F600"
        headlineLines={["YOUNGEST CITY", "IN EUROPE.", "NO RIDESHARE."]}
        quotes={UBER_QUOTES}
      />
      <Faq items={UBER_PETITION.faq} num="06" />
      <PetitionCta
        signatures={UBER_PETITION.signatures}
        target={UBER_PETITION.target_count}
        changeOrgUrl={UBER_PETITION.changeOrgUrl}
        background="#F6F600"
      />
    </main>
  );
}
