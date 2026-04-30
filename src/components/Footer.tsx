import Link from "next/link";
import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";
import type { Locale } from "@/i18n/config";

export default function Footer({ m, locale }: { m: Messages; locale: Locale }) {
  const cols = [m.footer.cols.site, m.footer.cols.involved, m.footer.cols.dua];
  return (
    <footer className="border-t border-rule bg-black" style={{ paddingTop: "64px", paddingBottom: "32px" }}>
      <div className="wrap">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <Link href={`/${locale}/`} className="flex items-center gap-3" aria-label="Digital Albanian 2.0">
              <span className="w-8 h-8 flex items-center justify-center bg-red rounded-[6px] text-paper font-display leading-none text-[22px] tracking-[0.05em] pt-[2px]">
                DA
              </span>
              <span className="font-extrabold text-[14px] tracking-[0.02em]">
                Digital Albanian
                <span className="text-grey-5 font-medium ml-1.5">2.0</span>
              </span>
            </Link>
            <p className="text-[13px] text-grey-6 leading-[1.55] max-w-[280px] mt-6">
              {m.footer.brandTagline}
            </p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4.5">
                {col.title}
              </h4>
              <ul className="list-none flex flex-col gap-2.5">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-paper hover:text-red transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-rule pt-8 flex justify-between items-center flex-wrap gap-4">
          <div className="font-serif italic text-[14px] text-grey-6 max-w-[560px] leading-[1.5]">
            {rich(m.footer.cities)}
          </div>
          <div className="flex gap-2.5">
            <SocialIcon label="Instagram" href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 3h3l-7 8 8 10h-7l-5-7-6 7H1l8-9L1 3h7l4 6z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="TikTok" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 3v3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V3z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="#">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
                <path d="M9 9h4v2c.7-1.3 2.2-2 4-2 3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V21H9z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-[12px] text-grey-5">{m.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 border border-rule-strong rounded-full flex items-center justify-center text-grey-6 hover:bg-paper hover:text-black hover:border-paper transition-colors"
    >
      <span className="w-3.5 h-3.5">{children}</span>
    </a>
  );
}
