import { RECEIPT_ROWS } from "@/data/netflix-petition";

const MAX = 16;

export default function Receipts() {
  return (
    <section
      id="receipts"
      className="py-16 md:py-20 border-t border-rule overflow-hidden"
      style={{ background: "#070707" }}
    >
      <div className="wrap">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-end mb-14 lg:mb-[72px]">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
            <span className="w-6 h-px bg-red" aria-hidden />
            04 · Receipts
          </div>
          <h2
            className="font-display leading-[0.95] tracking-[0.01em]"
            style={{ fontSize: "clamp(44px, 6.5vw, 80px)" }}
          >
            EVERY LANGUAGE
            <br />
            SMALLER THAN US
            <br />
            <span style={{ color: "#E11D2A" }}>GETS THE WHOLE LIBRARY.</span>
          </h2>
        </div>
        <div className="text-[15px] sm:text-[16px] text-grey-6 max-w-[560px] leading-[1.5]">
          <p className="mb-3.5">
            Netflix ships full localization for languages with as few as{" "}
            <strong className="text-paper font-bold">2.5M speakers</strong>. Albanian has{" "}
            <strong className="text-paper font-bold">16M</strong>.
          </p>
          <p>
            The pipeline is solved. The cost is a rounding error on Netflix&apos;s localization
            budget. We&apos;re asking for what every comparable language already has.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        {RECEIPT_ROWS.map((r, i) => (
          <div
            key={r.lang}
            className={`grid gap-4 sm:gap-6 items-center p-5 sm:p-6 rounded-lg ${
              r.us
                ? "border-2 border-red shadow-[0_0_0_6px_rgba(225,29,42,0.08)] bg-[linear-gradient(90deg,rgba(225,29,42,0.18)_0%,rgba(225,29,42,0.04)_100%)]"
                : "border border-rule bg-[#0f0f12]"
            }`}
            style={{
              gridTemplateColumns:
                "var(--receipts-cols, minmax(36px,48px) minmax(140px,220px) 1fr minmax(180px,220px))",
            }}
          >
            <div
              className={`font-display leading-none ${
                r.us ? "text-red" : "text-grey-4"
              }`}
              style={{ fontSize: "clamp(24px, 2.5vw, 32px)", letterSpacing: "0.04em" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex items-center gap-3">
              <span
                className="text-[24px] sm:text-[28px] leading-none"
                style={{ filter: "saturate(1.1)" }}
                aria-hidden
              >
                {r.flag}
              </span>
              <span
                className={`font-display leading-none ${
                  r.us ? "text-red" : "text-paper"
                }`}
                style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "0.01em" }}
              >
                {r.lang}
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <div
                className="h-3.5 rounded-sm transition-[width] min-w-[24px]"
                style={{
                  width: `${(r.sp / MAX) * 100}%`,
                  background: r.us ? "#E11D2A" : "#fff",
                }}
              />
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-display ${r.us ? "text-red" : "text-paper"}`}
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "0.01em" }}
                >
                  {r.sp.toFixed(1)}M
                </span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold">
                  speakers
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["Subs", r.sub, r.sub ? "✓" : "✕"],
                ["UI", r.ui, r.ui ? "✓" : "✕"],
                [r.dub === 1 ? "Dub" : "Dubs", r.dub > 0, r.dub > 0 ? r.dub : "0"],
              ].map(([label, ok, icon], j) => (
                <div
                  key={j}
                  className={`flex flex-col items-center justify-center gap-1 px-2 py-2.5 rounded-md border ${
                    ok
                      ? "bg-[rgba(70,211,105,0.08)] border-[rgba(70,211,105,0.3)]"
                      : "bg-red/[0.1] border-red/40"
                  }`}
                >
                  <span
                    className={`font-display leading-none ${
                      ok ? "text-[#46d369]" : "text-red"
                    }`}
                    style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
                  >
                    {icon}
                  </span>
                  <span className="text-[9px] tracking-[0.16em] uppercase text-grey-5 font-bold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            {r.us ? (
              <div
                className="col-span-full mt-2 p-3.5 px-5 border border-red/40 rounded-md flex flex-wrap items-center gap-3.5"
                style={{ background: "rgba(225,29,42,0.18)" }}
              >
                <span
                  className="font-display leading-none text-red"
                  style={{ fontSize: "24px" }}
                >
                  ←
                </span>
                <span className="font-extrabold text-[14px] text-paper tracking-[-0.005em]">
                  Largest speaker base. Zero support.
                </span>
                <span className="text-[14px] text-grey-6 ml-auto">
                  <strong className="text-red font-extrabold">This is us.</strong>
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 text-[11px] text-grey-5 tracking-[0.04em] flex items-center gap-2.5 flex-wrap">
        <span className="text-grey-4 text-[14px]" aria-hidden>
          ⌧
        </span>
        Speaker counts: Ethnologue (2024). Netflix language support:
        netflix.com/preferences/language, audited Apr 2026.
      </div>
      </div>
    </section>
  );
}
