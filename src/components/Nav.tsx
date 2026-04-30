import Link from "next/link";
import LangToggle from "./LangToggle";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages/en";

export default function Nav({ m, locale }: { m: Messages; locale: Locale }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-[14px] bg-black/65 border-b border-rule">
      <div className="wrap flex items-center justify-between gap-3 h-[68px]">
        <Link
          href={`/${locale}/`}
          className="flex items-center gap-3 shrink-0"
          aria-label="Digital Albanian 2.0"
        >
          <span className="w-8 h-8 flex items-center justify-center bg-red rounded-[6px] text-paper font-display leading-none text-[22px] tracking-[0.05em] pt-[2px]">
            DA
          </span>
          <span className="hidden min-[420px]:inline font-extrabold text-[14px] tracking-[0.02em]">
            Digital Albanian
            <span className="text-grey-5 font-medium ml-1.5">2.0</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-9 items-center">
          <Link
            href={`/${locale}/#petitions`}
            className="text-[13px] font-semibold text-grey-6 hover:text-paper transition-colors"
          >
            {m.nav.petitions}
          </Link>
          <Link
            href={`/${locale}/#manifesto`}
            className="text-[13px] font-semibold text-grey-6 hover:text-paper transition-colors"
          >
            {m.nav.manifesto}
          </Link>
          <Link
            href={`/${locale}/#press`}
            className="text-[13px] font-semibold text-grey-6 hover:text-paper transition-colors"
          >
            {m.nav.press}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <LangToggle current={locale} />
          <Link
            href={`/${locale}/#petitions`}
            className="btn btn-red px-3 py-2 text-[12px] sm:px-[18px] sm:py-2.5 sm:text-[13px]"
          >
            {m.nav.signNow}
            <span className="arrow hidden sm:inline">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
