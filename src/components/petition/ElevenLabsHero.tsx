import {
  ELEVENLABS_LANGS,
  ELEVENLABS_SIGNATURES,
  ELEVENLABS_TARGET,
  ELEVENLABS_COUNTER_CELLS,
  type VoiceLang,
} from "@/data/elevenlabs-petition";

const ACCENT = "#A78BFA";

function VoiceCard({ L }: { L: VoiceLang }) {
  return (
    <div
      className={`p-5 lg:p-6 border rounded-md flex flex-col gap-4 ${
        L.miss ? "opacity-90" : ""
      }`}
      style={{
        background: L.miss ? "rgba(225,29,42,0.04)" : "#0E0E10",
        borderColor: L.miss ? "rgba(225,29,42,0.35)" : "var(--color-rule)",
      }}
    >
      <div className="flex justify-between items-start">
        <div className="text-[28px] leading-none" aria-hidden>
          {L.flag}
        </div>
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase"
          style={{
            background: L.miss ? "rgba(225,29,42,0.12)" : "rgba(70,211,105,0.1)",
            color: L.miss ? "#E11D2A" : "#46d369",
            border: L.miss
              ? "1px solid rgba(225,29,42,0.35)"
              : "1px solid rgba(70,211,105,0.35)",
          }}
        >
          {L.miss ? "✕ Not supported" : "✓ Voice available"}
        </span>
      </div>
      <div>
        <div className="font-extrabold text-[20px] tracking-[-0.01em]">{L.l}</div>
        <div className="text-[11px] tracking-[0.06em] text-grey-5 mt-1">
          <span className="text-grey-6 font-bold">{L.spk}</span> speakers · added{" "}
          <span className="text-grey-6 font-bold">{L.added}</span>
        </div>
      </div>
      <div
        className="font-serif italic text-[15px] leading-[1.3] min-h-[42px]"
        style={{ color: L.miss ? "var(--color-grey-5)" : "#fff" }}
      >
        {L.s}
      </div>
      <div className="flex items-end gap-px h-12 mt-1">
        {L.wave.map((h, j) => (
          <div
            key={j}
            className="flex-1 rounded-sm"
            style={{
              height: `${h * 100}%`,
              background: L.miss ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.6)",
              minHeight: "2px",
            }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-rule">
        <span
          className={`inline-flex items-center gap-2 text-[13px] font-bold ${
            L.miss ? "text-grey-5" : "text-paper"
          }`}
        >
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px]"
            style={{
              background: L.miss ? "rgba(255,255,255,0.05)" : ACCENT,
              color: L.miss ? "var(--color-grey-5)" : "#0a0a0a",
            }}
            aria-hidden
          >
            ▶
          </span>
          {L.miss ? "No sample available" : "Listen to sample"}
        </span>
        <span className="text-[11px] tracking-[0.06em] text-grey-5 font-bold">
          {L.miss ? "0:00 / 0:00" : "0:00 / 0:08"}
        </span>
      </div>
    </div>
  );
}

export default function ElevenLabsHero() {
  const pct = Math.round((ELEVENLABS_SIGNATURES / ELEVENLABS_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(167,139,250,0.16), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        {/* eyebrow row */}
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to ElevenLabs · Petition № 05
            </span>
            <span
              className="tag"
              style={{ color: ACCENT, borderColor: "rgba(167,139,250,0.4)" }}
            >
              Hosted on change.org
            </span>
          </div>
          <div className="text-[11px] text-grey-5 tracking-[0.06em]">
            Live counter · refreshes every 60s
          </div>
        </div>

        {/* headline + sub */}
        <div className="mb-12">
          <h1
            className="font-display tracking-[0.005em] leading-[0.92] mb-9"
            style={{ fontSize: "clamp(56px, 10vw, 156px)" }}
          >
            32 LANGUAGES.
            <br />
            <span style={{ color: ACCENT }}>EVERY BALKAN ONE</span>
            <br />
            <em
              className="font-serif italic font-normal text-paper inline-block"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              except ours.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            ElevenLabs supports Slovenian (2.5M), Croatian (5.6M), Macedonian (2M), Bulgarian
            (8M). Albanian —{" "}
            <strong className="text-paper font-bold">
              7.5M speakers across Kosovo, Albania, North Macedonia, and the diaspora
            </strong>{" "}
            — has zero voices, zero samples, zero TTS pipeline.{" "}
            <strong className="text-paper font-bold">
              One ask. One signature. Add Albanian.
            </strong>
          </p>
        </div>

        {/* voice library */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-5 flex-wrap gap-3">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
                ElevenLabs voice library · Balkan languages
              </div>
              <div className="font-extrabold text-[20px] sm:text-[24px] tracking-[-0.01em]">
                Press play.{" "}
                <span style={{ color: ACCENT }}>One won&apos;t make a sound.</span>
              </div>
            </div>
            <div className="text-[11px] text-grey-5 tracking-[0.04em]">
              Source: elevenlabs.io/docs/languages · Apr 2026
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ELEVENLABS_LANGS.map((L, i) => (
              <VoiceCard key={i} L={L} />
            ))}
          </div>
        </div>

        {/* counter strip */}
        <div className="pt-9 border-t border-rule grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-y-8 lg:gap-y-0 items-end">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <div
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(56px, 7vw, 88px)", color: ACCENT }}
            >
              {ELEVENLABS_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {ELEVENLABS_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full" style={{ width: `${pct}%`, background: ACCENT }} />
            </div>
          </div>
          {ELEVENLABS_COUNTER_CELLS.map((cell, i) => (
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
