import { ELEVENLABS_TTS_ROWS } from "@/data/elevenlabs-petition";

const ACCENT = "#A78BFA";

export default function ElevenLabsReceipts() {
  const max = Math.max(...ELEVENLABS_TTS_ROWS.map((r) => r.s));
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
              2.5M SLOVENES.
              <br />
              2M MACEDONIANS.
              <br />
              <span style={{ color: ACCENT }}>7.5M ALBANIANS.</span>
            </h2>
          </div>
          <div className="text-[16px] sm:text-[17px] text-grey-6 leading-[1.55] space-y-4 max-w-[640px]">
            <p>
              Albanian has{" "}
              <strong className="text-paper font-bold">3× the speakers of Slovenian</strong> and{" "}
              <strong className="text-paper font-bold">
                nearly the speakers of Bulgarian
              </strong>
              . Both languages are in the library. Albanian is not.
            </p>
            <p>
              This is a model-training prioritization decision. The data exists — we have the
              corpora, the speakers, and the funding partners ready.
            </p>
          </div>
        </div>

        <div className="border-t border-rule">
          {ELEVENLABS_TTS_ROWS.map((row, i) => {
            const pct = (row.s / max) * 100;
            return (
              <div
                key={i}
                className={`relative grid grid-cols-[40px_1.2fr_2fr_auto] md:grid-cols-[60px_1.2fr_2.5fr_auto] gap-4 md:gap-6 items-center py-5 md:py-7 border-b border-rule ${
                  row.us ? "bg-[rgba(167,139,250,0.05)]" : ""
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
                    <span className="font-extrabold text-[15px]">{row.s.toFixed(1)}M</span>
                    <span className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
                      native speakers
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  {[
                    ["TTS", row.tts],
                    ["Dubbing", row.dub],
                    ["Cloning", row.clone],
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
                    <span>2nd-largest speaker count. Zero coverage.</span>
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
