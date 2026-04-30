import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../../globals.css";
import { manrope, instrumentSerif, bebasNeue } from "../../fonts";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";
import { siteUrl, siteName, plausibleDomain } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  const url = `${siteUrl}/${locale}/`;
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/`]),
  );
  languages["x-default"] = `${siteUrl}/`;
  return {
    metadataBase: new URL(siteUrl),
    title: m.meta.title,
    description: m.meta.description,
    applicationName: siteName,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: m.meta.title,
      description: m.meta.description,
      locale: locale === "sq" ? "sq_AL" : locale === "de" ? "de_DE" : "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: m.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title,
      description: m.meta.description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: { icon: "/icon-mark-red.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: `${siteUrl}/${locale}/`,
    logo: `${siteUrl}/icon-mark-red.svg`,
    parentOrganization: { "@type": "Organization", name: "dua.com", url: "https://dua.com" },
    sameAs: ["https://dua.com"],
    description:
      "A movement for the digital recognition of Kosovo and the Albanian language.",
  };

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${instrumentSerif.variable} ${bebasNeue.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </head>
      <body>
        <Nav m={m} locale={locale} />
        {children}
        <Footer m={m} locale={locale} />
        {process.env.NODE_ENV === "production" && plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}

export type LocaleParam = Locale;
