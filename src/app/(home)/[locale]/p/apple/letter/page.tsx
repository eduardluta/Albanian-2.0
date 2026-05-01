import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import PetitionLetterPage from "@/components/petition/PetitionLetterPage";
import { APPLE_PETITION } from "@/data/apple-petition";

const META_TITLE = `Letter to Apple · Digital Albanian 2.0`;
const META_DESC = APPLE_PETITION.letter.subject;

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
  const url = `${siteUrl}/${locale}/p/apple/letter/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/apple/letter/`]),
  );
  languages["x-default"] = `${siteUrl}/p/apple/letter/`;
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

export default async function AppleLetterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PetitionLetterPage petition={APPLE_PETITION} locale={locale} />;
}
