import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Every petition slug that has a /p/<slug>/ detail page (and a /letter sub-page). */
const PETITION_SLUGS = ["netflix", "spotify", "paypal", "apple", "elevenlabs", "uber"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const localeAlts = (path = "") =>
    Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path ? `/${path}` : ""}/`]));

  const homePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: localeAlts() },
  }));

  const petitionPages: MetadataRoute.Sitemap = PETITION_SLUGS.flatMap((slug) => {
    const detailPath = `p/${slug}`;
    const letterPath = `p/${slug}/letter`;
    return locales.flatMap((locale) => [
      {
        url: `${siteUrl}/${locale}/${detailPath}/`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: { languages: localeAlts(detailPath) },
      },
      {
        url: `${siteUrl}/${locale}/${letterPath}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: localeAlts(letterPath) },
      },
    ]);
  });

  return [...homePages, ...petitionPages];
}
