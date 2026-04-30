import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";
import FadeUp from "./FadeUp";

export default function Manifesto({ m }: { m: Messages }) {
  return (
    <section id="manifesto" className="py-22 bg-black" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <FadeUp className="max-w-[920px] mx-auto px-8 sm:px-5">
        <div className="text-[11px] tracking-[0.2em] font-bold text-red uppercase mb-12">
          {m.manifesto.eyebrow}
        </div>
        <div className="font-serif text-[clamp(28px,3.4vw,46px)] leading-[1.18] tracking-[-0.01em] text-paper">
          <span className="block font-sans font-extrabold text-[clamp(56px,8vw,108px)] tracking-[-0.04em] leading-[0.95] mb-8">
            {rich(m.manifesto.ledeLine)}
          </span>
          {m.manifesto.body.map((p, i) => (
            <p key={i} className={i < m.manifesto.body.length - 1 ? "mb-7" : ""}>
              {rich(p)}
            </p>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-rule">
          {m.manifesto.stats.map((s, i) => (
            <div
              key={i}
              className={`p-7 ${i < m.manifesto.stats.length - 1 ? "border-r border-rule" : ""}`}
            >
              <div className="font-extrabold text-[34px] tracking-[-0.03em] leading-none">{s.v}</div>
              <div className="mt-2 text-[12px] text-grey-5 tracking-[0.04em] leading-[1.4]">{s.l}</div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
