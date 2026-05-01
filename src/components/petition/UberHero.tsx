import {
  UBER_SIGNATURES,
  UBER_TARGET,
  UBER_MAP_PINS,
  UBER_COUNTER_CELLS,
} from "@/data/uber-petition";

const ACCENT = "#F6F600";

export default function UberHero() {
  const pct = Math.round((UBER_SIGNATURES / UBER_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(246,246,0,0.10), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to Uber · Petition № 07
            </span>
            <span
              className="tag"
              style={{ color: ACCENT, borderColor: "rgba(246,246,0,0.4)" }}
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
            EVERY CAPITAL
            <br />
            <span style={{ color: ACCENT }}>WITHIN 300KM.</span>
            <br />
            <em
              className="font-serif italic font-normal text-paper inline-block"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              Except this one.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            Tirana — yes. Skopje — yes. Sofia, Belgrade, Bucharest, Athens — all yes. Pristina has
            the highest smartphone penetration in the region, the youngest median age, and an
            English-speaking driver pool.{" "}
            <strong className="text-paper font-bold">
              One ask. One signature. Open the city.
            </strong>
          </p>
        </div>

        {/* Balkans map with pins */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5 flex-wrap gap-3">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
                Uber availability map · Balkan capitals
              </div>
              <div className="font-extrabold text-[18px] sm:text-[22px] tracking-[-0.01em]">
                Drop a pin on Pristina.{" "}
                <span style={{ color: ACCENT }}>&ldquo;City not supported.&rdquo;</span>
              </div>
            </div>
            <div className="text-[11px] text-grey-5 tracking-[0.04em]">
              Source: uber.com/global/en/cities · Apr 2026
            </div>
          </div>

          <div
            className="relative w-full overflow-hidden rounded-md border border-rule"
            style={{
              aspectRatio: "1280 / 520",
              background:
                "linear-gradient(135deg, #0E0E10 0%, #050505 100%)",
            }}
          >
            {/* Grid backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
              aria-hidden
            />

            {/* Schematic outline of south-east Europe */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1280 520"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M 80 60 Q 240 30, 400 80 T 720 90 T 980 130 T 1180 200 Q 1240 280, 1180 360 Q 1100 460, 940 480 Q 760 510, 600 470 Q 440 430, 320 400 Q 200 360, 140 280 Q 80 200, 80 60 Z"
                fill="rgba(246,246,0,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <path
                d="M 240 200 Q 380 220, 560 240 T 880 260"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
              <path
                d="M 600 80 Q 580 200, 610 300 T 700 480"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            </svg>

            {/* Legend */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 text-[10px] tracking-[0.12em] uppercase font-bold text-grey-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: ACCENT,
                    boxShadow: "0 0 0 4px rgba(246,246,0,0.18)",
                  }}
                  aria-hidden
                />
                Available
              </div>
              <div className="inline-flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "#FF1F30",
                    boxShadow: "0 0 0 4px rgba(255,31,48,0.16)",
                  }}
                  aria-hidden
                />
                Not supported
              </div>
            </div>

            {/* Notes */}
            <div className="absolute top-4 right-4 text-[10px] tracking-[0.06em] text-grey-5 text-right z-10">
              <div className="font-serif italic mb-1">Schematic · for illustration only</div>
              <div>8 of 9 capitals · 88.9% covered · 11.1% missing</div>
            </div>

            {/* Pins */}
            {UBER_MAP_PINS.map((p, i) => (
              <div
                key={i}
                className="absolute z-20"
                style={{
                  left: `${(p.x / 1280) * 100}%`,
                  top: `${(p.y / 520) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{
                    background: p.us ? "#FF1F30" : ACCENT,
                    boxShadow: p.us
                      ? "0 0 0 6px rgba(255,31,48,0.18)"
                      : "0 0 0 4px rgba(246,246,0,0.18)",
                    animation: p.us ? "var(--animate-dot-pulse)" : undefined,
                  }}
                  aria-hidden
                />
                <div
                  className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                  style={{ pointerEvents: "none" }}
                >
                  <div
                    className={`text-[11px] font-extrabold tracking-[-0.005em] ${
                      p.us ? "text-paper" : "text-paper"
                    }`}
                  >
                    {p.c}
                  </div>
                  <div
                    className="text-[9px] tracking-[0.12em] uppercase font-bold"
                    style={{ color: p.us ? "#FF1F30" : "rgba(255,255,255,0.5)" }}
                  >
                    {p.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter strip */}
        <div className="pt-9 border-t border-rule grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-y-8 lg:gap-y-0 items-end">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <div
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(56px, 7vw, 88px)", color: ACCENT }}
            >
              {UBER_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {UBER_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full" style={{ width: `${pct}%`, background: ACCENT }} />
            </div>
          </div>
          {UBER_COUNTER_CELLS.map((cell, i) => (
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
