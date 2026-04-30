# Digital Albanian 2.0

A movement to put Kosovo on every map and Albanian in every menu. One company. One petition. One signature at a time.

A dua.com initiative.

---

## Stack

- **Next.js 15** (App Router) with **TypeScript** — fully static export (`output: "export"`).
- **Tailwind CSS v4** — CSS-first config in `src/app/globals.css` via `@theme`.
- **No CMS, no database.** Content is TS in `src/i18n/messages/{sq,en,de}.ts`. Petition data is TS in `src/data/petitions.ts`.
- **No third-party analytics by default.** Plausible loads in production only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.
- **i18n** via three locales: `sq` (default, redirected from `/`), `en`, `de`. Each gets its own static HTML with the correct `<html lang>`.

---

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
```

The static export in `out/` is a complete, host-anywhere site. Drop it on Cloudflare Pages, Vercel, S3 + CloudFront, anywhere that serves files.

---

## Project layout

```
src/
  app/
    (redirect)/        ← root layout for /  →  meta-refresh to /sq/
    (home)/[locale]/   ← root layout for /sq, /en, /de
    fonts.ts           ← Manrope + Instrument Serif via next/font/google
    globals.css        ← Tailwind v4 + design tokens + custom utilities
    icon.svg           ← favicon (auto-served from /icon.svg)
    robots.ts          ← /robots.txt generator
    sitemap.ts         ← /sitemap.xml generator (with hreflang alternates)
  components/          ← server components by default, "use client" only where needed
  data/petitions.ts    ← list of petitions: target, status, signatures, days, progress
  i18n/
    config.ts          ← locales, default, type
    get-messages.ts    ← bundles all three locales for static export
    rich-text.tsx      ← parses {em:…}, {accent:…}, {red:…}, {strike:…} (supports nesting)
    messages/{sq,en,de}.ts
  lib/site.ts          ← siteUrl, siteName, plausibleDomain (env-overridable)
public/                ← static assets (logos, OG image, etc.)
```

---

## Design tokens

Defined as Tailwind v4 `@theme` variables in `src/app/globals.css`. Color palette:

| Token       | Hex     | Usage                                |
| ----------- | ------- | ------------------------------------ |
| `black`     | #0A0A0A | Page background                      |
| `ink`       | #0E0E10 | Card background                      |
| `paper`     | #FFFFFF | Primary text, logo                   |
| `red`       | #E11D2A | CTAs, accents, the flag              |
| `red-bright`| #FF1F30 | CTA hover                            |
| `grey-1…6`  |  …      | Borders, captions, secondary text    |

Fonts: **Manrope** (300–800) for sans, **Instrument Serif** (regular + italic) for editorial display. Both subset to `latin` + `latin-ext` so Albanian diacritics (`ë`, `ç`, `Ë`) render correctly.

---

## Adding / editing copy

All visible text lives in `src/i18n/messages/{sq,en,de}.ts`. Each file exports the same shape (TypeScript enforces it via `Messages = typeof en`).

Inline emphasis uses a tiny markup syntax handled by `rich()`:

- `{em:foo}` → italic serif (Instrument Serif)
- `{accent:foo}` or `{red:foo}` → red text
- `{strike:foo}` → red strikethrough
- Tokens nest: `{red:16M {em:speakers}}` works.
- `\n` inside a string becomes `<br>`.

> **Translation note:** The Albanian and German translations were authored alongside the English source. They are competent but not native-reviewed — please have a native speaker review `sq.ts` and `de.ts` before launch.

---

## Editing petitions

`src/data/petitions.ts` holds the static petition list (target, signatures, days, progress, status, filter membership). Card text per petition lives under `petitions.cards.<slug>` in each translation file.

Filter counts on the homepage are derived automatically from the `filters: ["recognize" | "add" | "won"]` array on each petition. The `Unicode` petition has `filters: []` so it appears under "All" but no filter button.

---

## SEO + performance

- Static export, every page pre-rendered.
- `<html lang>` is correct on every locale (multiple root layouts via route groups).
- Self-canonical + `hreflang` (sq/en/de/x-default) on every page.
- Sitemap includes all locales with `xhtml:link` alternates.
- `robots.txt` allows everything except `/_next/`.
- Open Graph + Twitter cards on every page (drop a `public/og-image.png` to complete).
- JSON-LD `Organization` schema embedded in the locale layout.
- Fonts preloaded via `next/font/google` (no FOIT/FOUT, no extra request to Google).
- Reduced-motion respected (counter, fade-up, pulse).

---

## Configuration via env

| Variable                       | Default                       | Purpose                                       |
| ------------------------------ | ----------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | `https://digitalkosovo.com`   | Used for canonical, OG, sitemap, hreflang     |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `digitalkosovo.com`           | Plausible `data-domain` (only in production)  |

Set these on the host before building:

```bash
NEXT_PUBLIC_SITE_URL=https://digitalkosovo.com \
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=digitalkosovo.com \
npm run build
```

---

## What's intentionally NOT in this v1

- Petition detail pages (`/p/<slug>`) — coming next, scaffold under `app/(home)/[locale]/p/[slug]/`.
- Real signup form backend — currently a visual stub. Wire to Resend / ConvertKit when ready.
- Live signature counters — currently static numbers. Embed Change.org count via API when petitions go live.
- Press logo links — outlets render as plain text; add real `href`s when the relationships are confirmed.

These are all isolated additions; the structure supports them without refactor.

---

## Reference

- Design source: `digital-kosovo-2-0/project/Digital Albanian 2.0.html` (Claude Design handoff).
- Brief: `digital-kosovo-2-0/project/uploads/Digital_Kosovo_2.0_Briefing.docx`.
