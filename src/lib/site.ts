export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://digitalkosovo.com";

export const siteName = "Digital Albanian 2.0";

export const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "digitalkosovo.com";
