import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";

export default function CtaBand({ m }: { m: Messages }) {
  return (
    <section className="border-t border-rule relative overflow-hidden cta-glow" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="wrap relative text-center">
        <h2 className="font-extrabold text-[clamp(48px,7vw,104px)] tracking-[-0.035em] leading-[0.95] mb-6">
          {rich(m.ctaBand.headline)}
        </h2>
        <p className="text-[18px] text-grey-6 max-w-[560px] mx-auto mb-9 leading-[1.5]">
          {m.ctaBand.sub}
        </p>
        <div className="inline-flex gap-3 flex-wrap justify-center">
          <a href="#petitions" className="btn btn-red btn-lg">
            {m.ctaBand.ctaPrimary} <span className="arrow">→</span>
          </a>
          <a href="#manifesto" className="btn btn-ghost btn-lg">
            {m.ctaBand.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
