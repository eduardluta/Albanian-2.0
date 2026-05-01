import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { siteUrl, siteName } from "@/lib/site";

import PayPalHero from "@/components/petition/PayPalHero";
import PayPalAsk from "@/components/petition/PayPalAsk";
import PayPalCosts from "@/components/petition/PayPalCosts";
import PayPalReceipts from "@/components/petition/PayPalReceipts";
import SignBlock from "@/components/petition/SignBlock";
import Faq from "@/components/petition/Faq";
import PetitionCta from "@/components/petition/PetitionCta";
import { PAYPAL_PETITION } from "@/data/paypal-petition";

const PETITION_TITLE = "Bring PayPal to Kosovo";
const META_TITLE = `${PETITION_TITLE} · Digital Albanian 2.0`;
const META_DESC =
  "PayPal serves 200+ countries — every neighbour of Kosovo, no exceptions. 1.8 million Kosovars and zero Kosovo-registered businesses can open an account. Sign the open letter to add Kosovo by Q1 2027.";

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
  const url = `${siteUrl}/${locale}/p/paypal/`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/p/paypal/`]),
  );
  languages["x-default"] = `${siteUrl}/p/paypal/`;
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

export default async function PayPalPetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main>
      <PayPalHero />
      <PayPalAsk locale={locale} />
      <PayPalCosts />
      <PayPalReceipts />
      <SignBlock
        petition={PAYPAL_PETITION}
        num="05"
        scaleHook="One signature is a complaint email. 1,000 is a Reddit thread. 100,000 is a market-entry case PayPal can no longer ignore."
      />
      <Faq items={PAYPAL_PETITION.faq} num="06" />
      <PetitionCta
        signatures={PAYPAL_PETITION.signatures}
        target={PAYPAL_PETITION.target_count}
        changeOrgUrl={PAYPAL_PETITION.changeOrgUrl}
        background="#1F6CFF"
      />
    </main>
  );
}
