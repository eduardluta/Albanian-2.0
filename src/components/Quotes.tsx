import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";

export default function Quotes({ m }: { m: Messages }) {
  return (
    <section className="bg-black" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <div className="wrap">
        <div className="section-num">{m.quotes.sectionNum}</div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
          <h2 className="font-extrabold text-[clamp(40px,5.4vw,72px)] tracking-[-0.03em] leading-none">
            {rich(m.quotes.headline)}
          </h2>
          <p className="text-[18px] text-grey-6 max-w-[560px] leading-[1.5]">{m.quotes.lede}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
          {m.quotes.items.map((q, i) => {
            const isFirst = i === 0;
            const isLast = i === m.quotes.items.length - 1;
            return (
              <figure
                key={i}
                className={`flex flex-col py-10 md:py-12 ${
                  isFirst ? "md:pl-0" : "md:pl-10"
                } ${isLast ? "md:pr-0" : "md:pr-10"} ${
                  !isLast ? "md:border-r border-rule" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
              >
                <div
                  className="font-serif text-[64px] sm:text-[80px] leading-none text-red mb-4"
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="font-serif italic text-[22px] sm:text-[24px] leading-[1.3] text-paper tracking-[-0.005em] mb-8">
                  {q.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <span
                    aria-hidden
                    className="w-10 h-10 shrink-0 rounded-full bg-grey-1 border border-rule-strong flex items-center justify-center font-extrabold text-[13px] text-grey-5"
                  >
                    {q.initials}
                  </span>
                  <span className="min-w-0">
                    <b className="font-bold text-[14px] block truncate">{q.author}</b>
                    <span className="text-[12px] text-grey-5 block truncate">{q.meta}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
