import { Fragment } from "react";
import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";
import { petitions } from "@/data/petitions";

export default function Hero({ m }: { m: Messages }) {
  const totalCount = petitions.length;
  const activePetitionsRest = m.hero.activePetitionsTag.replace("{n}", "").trim();
  return (
    <header className="relative pt-[96px] pb-12 sm:pt-[104px] sm:pb-16 overflow-hidden hero-glow">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid" />
      </div>
      <div className="wrap relative w-full">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap">
          <span className="eyebrow"><span className="dot" />{m.hero.eyebrow}</span>
          <span className="tag">
            <span className="num">{totalCount}</span>
            {" "}
            {activePetitionsRest}
          </span>
          <span className="tag">{m.hero.duaInitiativeTag}</span>
        </div>

        <h1 className="font-extrabold tracking-[-0.035em] leading-[0.92] text-[clamp(40px,5.4vw,84px)] max-w-[1180px]">
          {m.hero.titleLine1}
          <br />
          {rich(m.hero.titleLine2)}
          <br />
          {rich(m.hero.titleLine3)}
        </h1>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-end border-t border-rule-strong pt-8 sm:pt-10">
          <div className="max-w-[560px]">
            <p className="font-serif text-[clamp(20px,1.5vw,24px)] leading-[1.32] text-paper/90 tracking-[-0.005em]">
              {m.hero.sub}
            </p>
            <div className="mt-7 flex items-center gap-3 flex-wrap">
              <a href="#petitions" className="btn btn-red btn-lg">
                {m.hero.ctaPrimary} <span className="arrow">→</span>
              </a>
              <a href="#manifesto" className="btn btn-ghost btn-lg">
                {m.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3 sm:gap-4 text-[10px] text-grey-5 tracking-[0.16em] uppercase font-bold flex-wrap">
              {m.hero.fineParts.map((part, i) => (
                <Fragment key={i}>
                  {i > 0 ? (
                    <span className="w-px h-3 bg-rule-strong shrink-0" aria-hidden />
                  ) : null}
                  <span>{part}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0">
            {m.hero.stats.map((s, i) => (
              <div
                key={i}
                className={`relative px-5 sm:px-7 ${
                  i === 0 ? "pl-0 border-l-0" : "border-l border-rule"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute top-0 w-6 h-px bg-red ${
                    i === 0 ? "left-0" : "left-5 sm:left-7"
                  }`}
                />
                <div className="pt-5 font-extrabold text-[clamp(36px,3.4vw,52px)] leading-none tracking-[-0.035em] text-paper num-tabular">
                  {s.v}
                  {s.u ? (
                    <span className="text-[0.45em] text-red font-bold ml-1 tracking-normal align-top inline-block translate-y-[0.15em]">
                      {s.u}
                    </span>
                  ) : null}
                </div>
                <div className="mt-3.5 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold leading-[1.4] max-w-[180px]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
