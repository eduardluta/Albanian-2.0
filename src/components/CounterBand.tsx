import type { Messages } from "@/i18n/messages/en";
import AnimatedNumber from "./AnimatedNumber";

export default function CounterBand({ m }: { m: Messages }) {
  return (
    <section className="border-y border-rule py-12" style={{ background: "#070707" }}>
      <div className="wrap">
        <div className="grid sm:grid-cols-3">
          {m.counter.items.map((it, i) => (
            <div
              key={i}
              className={`px-8 py-2 ${
                i < m.counter.items.length - 1 ? "sm:border-r border-rule" : ""
              }`}
            >
              <div className="font-extrabold text-[clamp(44px,5.8vw,84px)] tracking-[-0.04em] leading-none">
                <AnimatedNumber target={it.target} prefix={it.prefix} />
              </div>
              <div className="mt-3.5 text-[12px] tracking-[0.18em] uppercase text-grey-5 font-bold">
                {it.label}
              </div>
              <div className="mt-1.5 text-[13px] text-grey-4">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
