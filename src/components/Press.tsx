import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";

export default function Press({ m }: { m: Messages }) {
  const half = Math.ceil(m.press.outlets.length / 2);
  const row1 = m.press.outlets.slice(0, half);
  const row2 = m.press.outlets.slice(half);
  return (
    <section id="press" className="border-t border-rule" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <div className="wrap">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-grey-5">
            {m.press.eyebrow}
          </h3>
          <div className="text-[12px] text-grey-5 tracking-[0.04em]">{m.press.meta}</div>
        </div>
        <PressRow outlets={row1} top />
        <PressRow outlets={row2} />
      </div>
    </section>
  );
}

function PressRow({ outlets, top = false }: { outlets: string[]; top?: boolean }) {
  return (
    <div
      className={`grid grid-cols-3 md:grid-cols-6 ${
        top ? "border-t border-rule" : ""
      } border-b border-rule`}
    >
      {outlets.map((o, i) => (
        <div
          key={i}
          className={`p-8 flex items-center justify-center text-grey-5 font-extrabold text-[18px] tracking-[0.02em] text-center cursor-pointer transition-colors hover:text-paper ${
            i < outlets.length - 1 ? "border-r border-rule" : ""
          }`}
        >
          {rich(o)}
        </div>
      ))}
    </div>
  );
}
