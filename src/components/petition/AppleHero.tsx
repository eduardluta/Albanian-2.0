import {
  APPLE_SIGNATURES,
  APPLE_TARGET,
  APPLE_PICKER_K,
  APPLE_COUNTER_CELLS,
} from "@/data/apple-petition";

const ACCENT = "#C9CDD4";

export default function AppleHero() {
  const pct = Math.round((APPLE_SIGNATURES / APPLE_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(201,205,212,0.10), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to Apple · Petition № 04
            </span>
            <span
              className="tag"
              style={{ color: ACCENT, borderColor: "rgba(201,205,212,0.4)" }}
            >
              Hosted on change.org
            </span>
          </div>
          <div className="text-[11px] text-grey-5 tracking-[0.06em]">
            Live counter · refreshes every 60s
          </div>
        </div>

        <div className="mb-12">
          <h1
            className="font-display tracking-[0.005em] leading-[0.92] mb-9"
            style={{ fontSize: "clamp(56px, 10vw, 156px)" }}
          >
            175 COUNTRIES.
            <br />
            <span style={{ color: ACCENT }}>ANDORRA: YES.</span>
            <br />
            <em
              className="font-serif italic font-normal text-paper inline-block"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              Kosovo: missing.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            The Apple ID country picker lists 175 countries, including{" "}
            <strong className="text-paper font-bold">
              Vatican City, Liechtenstein, and Tuvalu
            </strong>
            . Kosovo — with{" "}
            <strong className="text-paper font-bold">
              1.8M users and an iPhone in nearly every household
            </strong>{" "}
            — is not on the list.{" "}
            <strong className="text-paper font-bold">
              One ask. One signature. Add Kosovo.
            </strong>
          </p>
        </div>

        {/* Country picker mockup */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5 flex-wrap gap-3">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
                Apple ID · Country / Region picker
              </div>
              <div className="font-extrabold text-[18px] sm:text-[22px] tracking-[-0.01em]">
                Scroll to K.{" "}
                <span style={{ color: ACCENT }}>There&apos;s nothing there.</span>
              </div>
            </div>
            <div className="text-[11px] text-grey-5 tracking-[0.04em]">
              Source: appleid.apple.com country picker · audited Apr 2026
            </div>
          </div>

          <div
            className="max-w-[640px] mx-auto p-6 sm:p-8 rounded-md border border-rule"
            style={{ background: "#0E0E10" }}
          >
            <div className="text-[11px] tracking-[0.14em] uppercase text-grey-5 font-bold mb-2">
              Country or Region
            </div>
            <div
              className="flex justify-between items-center px-4 py-3 rounded border border-rule mb-4 text-[13px] text-grey-5"
              style={{ background: "#15151a" }}
            >
              <span>Search countries…</span>
              <span aria-hidden>⌄</span>
            </div>
            <div className="border border-rule rounded overflow-hidden" style={{ background: "#15151a" }}>
              <div className="px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase text-grey-5 font-bold border-b border-rule">
                — K —
              </div>
              {APPLE_PICKER_K.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i < APPLE_PICKER_K.length - 1 ? "border-b border-rule" : ""
                  } ${row.miss ? "bg-[rgba(225,29,42,0.06)]" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[20px]" aria-hidden>
                      {row.flag}
                    </span>
                    <span
                      className={`text-[14px] font-bold ${
                        row.miss ? "text-grey-5" : "text-paper"
                      }`}
                      style={row.miss ? { textDecoration: "line-through" } : undefined}
                    >
                      {row.n}
                    </span>
                  </div>
                  {row.miss && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase"
                      style={{
                        background: "rgba(225,29,42,0.12)",
                        color: "#E11D2A",
                        border: "1px solid rgba(225,29,42,0.35)",
                      }}
                    >
                      ✕ Not in list
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counter strip */}
        <div className="pt-9 border-t border-rule grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-y-8 lg:gap-y-0 items-end">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <div
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(56px, 7vw, 88px)", color: ACCENT }}
            >
              {APPLE_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {APPLE_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full" style={{ width: `${pct}%`, background: ACCENT }} />
            </div>
          </div>
          {APPLE_COUNTER_CELLS.map((cell, i) => (
            <div
              key={i}
              className={`px-4 lg:px-[22px] ${
                i === 0 ? "border-l-0 lg:border-l" : "border-l"
              } border-rule`}
            >
              <div
                className="font-display text-paper leading-[0.85] tracking-[0.01em]"
                style={{ fontSize: "clamp(28px, 3.2vw, 44px)" }}
              >
                {cell.v}
              </div>
              <div className="mt-2.5 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
                {cell.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
