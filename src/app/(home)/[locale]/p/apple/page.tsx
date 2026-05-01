import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import AppleHero from "@/components/petition/AppleHero";
import AppleAsk from "@/components/petition/AppleAsk";
import AppleReceipts from "@/components/petition/AppleReceipts";
import PetitionVoices from "@/components/petition/PetitionVoices";
import SignBlock from "@/components/petition/SignBlock";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";
import { APPLE_PETITION, APPLE_QUOTES } from "@/data/apple-petition";

const PETITION_TITLE = "List Kosovo on Apple ID";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "Apple's country picker lists 175 countries — including Vatican City, Tuvalu, and Andorra — but not Kosovo (1.8M residents). Sign the open letter to add Kosovo to Apple ID, enable Apple Pay, and open the App Store storefront by Q2 2027.";

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
  const url = `${siteUrl}/${locale}/p/apple/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/apple/`]),
  );
  languages["x-default"] = `${siteUrl}/p/apple/`;
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

export default async function ApplePetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <AppleHero />
      <AppleAsk locale={locale} />
      <SignBlock
        petition={APPLE_PETITION}
        scaleHook="One signature is a forum post. 1,000 is a Hacker News thread. 100,000 is an Apple Newsroom response."
      />
      <AppleReceipts />
      <PetitionVoices
        num="05"
        accent="#C9CDD4"
        headlineLines={["1.8M IPHONES.", "175 COUNTRIES.", "WE'RE NOT 176."]}
        quotes={APPLE_QUOTES}
      />
      <Faq items={APPLE_PETITION.faq} num="06" />
      <PetitionCta
        signatures={APPLE_PETITION.signatures}
        target={APPLE_PETITION.target_count}
        changeOrgUrl={APPLE_PETITION.changeOrgUrl}
        background="#C9CDD4"
      />
    </main>
  );
}
