import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const PETITION_PAGES = ["p/netflix"]; // add new petition slugs here as they ship

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

  const petitionPages: MetadataRoute.Sitemap = PETITION_PAGES.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/${path}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: { languages: localeAlts(path) },
    })),
  );

  return [...homePages, ...petitionPages];
}
