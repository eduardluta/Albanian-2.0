"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export default function LangToggle({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  // Replace the leading /<locale> segment with the target locale.
  const buildHref = (target: Locale) => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}/`;
    parts[0] = target;
    return `/${parts.join("/")}/`;
  };
  return (
    <div className="lang-toggle inline-flex rounded-full overflow-hidden border border-rule-strong" role="tablist" aria-label="Language">
      {locales.map((l) => (
        <Link
          key={l}
          href={buildHref(l)}
          aria-current={l === current ? "page" : undefined}
          className={`px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.06em] transition-colors ${
            l === current ? "bg-paper text-black" : "text-grey-5 hover:text-paper"
          }`}
        >
          {localeLabels[l]}
        </Link>
      ))}
    </div>
  );
}
