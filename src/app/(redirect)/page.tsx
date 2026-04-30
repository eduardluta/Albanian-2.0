import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: `${siteUrl}/${defaultLocale}/` },
};

export default function RootPage() {
  const target = `/${defaultLocale}/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <link rel="canonical" href={`${siteUrl}${target}`} />
      <p style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", color: "#fff" }}>
        Redirecting to <a href={target} style={{ color: "#FF1F30" }}>{target}</a>…
      </p>
      <script
        // Belt-and-braces JS redirect for clients that ignore meta refresh.
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
    </>
  );
}
