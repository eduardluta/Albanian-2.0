import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";

export default function HowItWorks({ m }: { m: Messages }) {
  return (
    <section className="border-t border-rule" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <div className="wrap">
        <div className="section-num">{m.how.sectionNum}</div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
          <h2 className="font-extrabold text-[clamp(40px,5.4vw,72px)] tracking-[-0.03em] leading-none">
            {rich(m.how.headline)}
          </h2>
          <p className="text-[18px] text-grey-6 max-w-[560px] leading-[1.5]">{m.how.lede}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {m.how.steps.map((s, i) => (
            <div
              key={i}
              className={`px-0 py-12 md:pr-8 md:pl-0 ${
                i < m.how.steps.length - 1 ? "md:border-r border-rule" : ""
              }`}
            >
              <div className="font-extrabold text-[14px] text-red tracking-[0.04em] mb-8 flex items-center gap-3.5">
                {s.n}
                <span className="flex-1 h-px bg-rule" />
              </div>
              <h3 className="font-extrabold text-[32px] tracking-[-0.02em] leading-[1.05] mb-3.5">
                {s.h}
              </h3>
              <p className="text-[15px] text-grey-6 leading-[1.55] max-w-[280px]">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
