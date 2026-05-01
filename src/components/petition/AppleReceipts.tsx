import { APPLE_RECEIPT_ROWS } from "@/data/apple-petition";

const ACCENT = "#C9CDD4";

export default function AppleReceipts() {
  const max = Math.max(...APPLE_RECEIPT_ROWS.map((r) => r.pop));
  return (
    <section
      id="receipts"
      className="py-16 md:py-20 border-t border-rule"
      style={{ background: "#050505" }}
    >
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-end mb-14 lg:mb-[72px]">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
              <span className="w-6 h-px" style={{ background: ACCENT }} aria-hidden />
              04 · Receipts
            </div>
            <h2
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(48px, 6.4vw, 96px)" }}
            >
              EVERY MICRO-STATE.
              <br />
              EVERY ATOLL.
              <br />
              <span style={{ color: ACCENT }}>EVERY VATICAN.</span>
            </h2>
          </div>
          <div className="text-[16px] sm:text-[17px] text-grey-6 leading-[1.55] space-y-4 max-w-[640px]">
            <p>
              Apple lists countries with{" "}
              <strong className="text-paper font-bold">800 residents</strong>. Kosovo has{" "}
              <strong className="text-paper font-bold">1.8 million</strong>.
            </p>
            <p>
              The Apple ID country dropdown is a registry, not a recognition statement. Apple
              already handles UN-non-member territories (Taiwan, Hong Kong, Vatican). The block
              is operational, not political.
            </p>
          </div>
        </div>

        <div className="border-t border-rule">
          {APPLE_RECEIPT_ROWS.map((row, i) => {
            const pct = (row.pop / max) * 100;
            return (
              <div
                key={i}
                className={`relative grid grid-cols-[40px_1.2fr_2fr_auto] md:grid-cols-[60px_1.2fr_2.5fr_auto] gap-4 md:gap-6 items-center py-5 md:py-7 border-b border-rule ${
                  row.us ? "bg-[rgba(201,205,212,0.06)]" : ""
                }`}
              >
                <div
                  className="font-display leading-none tracking-[0.01em] text-grey-5"
                  style={{ fontSize: "20px" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[26px]" aria-hidden>
                    {row.flag}
                  </span>
                  <span className="font-extrabold text-[16px] sm:text-[18px] tracking-[-0.01em]">
                    {row.c}
                  </span>
                </div>
                <div className="relative h-9 flex items-center">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: row.us ? ACCENT : "rgba(255,255,255,0.6)",
                    }}
                  />
                  <div
                    className="absolute right-3 inline-flex items-baseline gap-1.5"
                    style={{ left: `calc(${pct}% + 12px)` }}
                  >
                    <span className="font-extrabold text-[15px]">
                      {row.pop < 1
                        ? `${(row.pop * 1000).toFixed(0)}K`
                        : `${row.pop.toFixed(1)}M`}
                    </span>
                    <span className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
                      population
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  {[
                    ["Apple ID", row.id],
                    ["Apple Pay", row.pay],
                    ["App Store", row.store],
                  ].map(([label, ok], j) => (
                    <div
                      key={j}
                      className="inline-flex flex-col items-center justify-center w-[58px] sm:w-[68px] py-2 rounded border"
                      style={{
                        background: ok
                          ? "rgba(70,211,105,0.06)"
                          : "rgba(225,29,42,0.06)",
                        borderColor: ok
                          ? "rgba(70,211,105,0.3)"
                          : "rgba(225,29,42,0.3)",
                        color: ok ? "#46d369" : "#E11D2A",
                      }}
                    >
                      <span className="text-[14px] font-extrabold">{ok ? "✓" : "✕"}</span>
                      <span className="text-[9px] tracking-[0.12em] uppercase font-bold mt-0.5">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                {row.us && (
                  <div className="col-span-4 text-[11px] tracking-[0.14em] uppercase text-grey-5 font-bold mt-2 inline-flex items-center gap-3">
                    <span style={{ color: ACCENT }}>← This is us.</span>
                    <span>Largest population. Zero Apple services.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
