import Link from "next/link";
import LangToggle from "../LangToggle";
import type { Locale } from "@/i18n/config";
import { NETFLIX_CHANGE_ORG_URL, NETFLIX_SIGNATURES } from "@/data/netflix-petition";

export default function PetitionNav({
  locale,
  petitionTitle,
}: {
  locale: Locale;
  petitionTitle: string;
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 backdrop-blur-[14px] bg-black/85 border-b border-rule">
      <div className="h-full flex items-center justify-between gap-4 px-5 md:px-10">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/${locale}/`}
            aria-label="Digital Kosovo 2.0"
            className="w-[30px] h-[30px] inline-flex items-center justify-center bg-red rounded-[4px] text-paper font-serif italic font-bold text-[16px] tracking-[-0.04em] leading-none shrink-0"
          >
            dk
          </Link>
          <div className="text-[12px] text-grey-5 font-semibold truncate hidden sm:block">
            <Link href={`/${locale}/#petitions`} className="hover:text-paper transition-colors">
              Petitions
            </Link>
            <span className="mx-2.5 text-grey-3 not-italic" aria-hidden>
              /
            </span>
            <span className="text-paper">{petitionTitle}</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-7 text-[12px] text-grey-6 font-semibold">
          <a href="#case" className="hover:text-paper transition-colors">
            The case
          </a>
          <a href="#sign" className="hover:text-paper transition-colors">
            Sign
          </a>
          <a href="#receipts" className="hover:text-paper transition-colors">
            Receipts
          </a>
          <a href="#faq" className="hover:text-paper transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.06em] uppercase border border-nflx/40 rounded-full px-3 py-1.5 text-nflx">
            <span
              className="w-1.5 h-1.5 rounded-full bg-nflx"
              style={{ animation: "var(--animate-dot-pulse)" }}
              aria-hidden
            />
            {NETFLIX_SIGNATURES.toLocaleString("en-US")} signed · live
          </span>
          <LangToggle current={locale} />
          <a
            href={NETFLIX_CHANGE_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-red px-3 py-2 text-[12px] sm:px-[18px] sm:py-2.5 sm:text-[13px]"
          >
            <span className="hidden sm:inline">Sign on change.org</span>
            <span className="sm:hidden">Sign</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
