import {
  SPOTIFY_SIGNATURES,
  SPOTIFY_TARGET,
  SPOTIFY_TRACK_LIST,
  SPOTIFY_COUNTER_CELLS,
  type SpotifyTrackRow,
} from "@/data/spotify-petition";

const ACCENT = "#00C46A";

/** Tiny deterministic waveform — height percentages for 14 bars. */
function waveform(seed: number): number[] {
  const out: number[] = [];
  let x = seed;
  for (let i = 0; i < 14; i++) {
    x = (x * 9301 + 49297) % 233280;
    out.push(20 + (x / 233280) * 80);
  }
  return out;
}

function TrackRow({ row, idx }: { row: SpotifyTrackRow; idx: number }) {
  const wave = waveform(idx + 1);
  const isUs = !!row.us;
  return (
    <div
      className={`grid grid-cols-[40px_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_auto_72px] sm:grid-cols-[60px_minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_auto_84px] gap-3 sm:gap-5 items-center py-3.5 px-3 sm:px-4 border-b border-rule ${
        isUs ? "bg-[rgba(0,196,106,0.05)]" : ""
      }`}
    >
      <div
        className="font-display leading-none tracking-[0.01em] text-grey-5"
        style={{ fontSize: "18px" }}
      >
        {String(idx + 1).padStart(2, "0")}
      </div>
      <div className="flex items-center gap-3 min-w-0">
        <span
          className={`w-9 h-9 rounded shrink-0 inline-flex items-center justify-center text-[11px] font-extrabold tracking-[0.04em] ${
            isUs ? "text-paper" : "text-grey-6"
          }`}
          style={{
            background: isUs ? ACCENT : "rgba(255,255,255,0.06)",
            color: isUs ? "#0a0a0a" : undefined,
          }}
          aria-hidden
        >
          {row.cover}
        </span>
        <div className="min-w-0">
          <div className="font-extrabold text-[14px] sm:text-[15px] tracking-[-0.005em] truncate">
            {row.n}
          </div>
          <div className="font-serif italic text-[12px] text-grey-5 truncate">
            {row.native}
          </div>
        </div>
      </div>
      <div className="text-[14px]">
        <span className="font-extrabold">
          {row.speakers < 1
            ? `${(row.speakers * 1000).toFixed(0)}K`
            : `${row.speakers.toFixed(1)}M`}
        </span>{" "}
        <span className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
          speakers
        </span>
      </div>
      <div className="text-[13px] text-grey-6 font-bold">{row.added}</div>
      <div>
        <span
          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase"
          style={{
            background:
              row.status === "yes"
                ? "rgba(0,196,106,0.1)"
                : "rgba(225,29,42,0.1)",
            color: row.status === "yes" ? ACCENT : "#E11D2A",
            border:
              row.status === "yes"
                ? "1px solid rgba(0,196,106,0.35)"
                : "1px solid rgba(225,29,42,0.35)",
          }}
        >
          {row.status === "yes" ? "✓ Available" : "✕ Missing"}
        </span>
      </div>
      <div className="hidden sm:flex items-end gap-px h-9" aria-hidden>
        {wave.map((h, j) => (
          <span
            key={j}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: isUs ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)",
              minHeight: "2px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SpotifyHero() {
  const pct = Math.round((SPOTIFY_SIGNATURES / SPOTIFY_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(0,196,106,0.16), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to Spotify · Petition № 02
            </span>
            <span
              className="tag"
              style={{ color: ACCENT, borderColor: "rgba(0,196,106,0.4)" }}
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
            BOSNIAN <span style={{ color: ACCENT }}>ADDED.</span>
            <br />
            ALBANIAN <span style={{ color: ACCENT }}>SKIPPED.</span>
            <br />
            <em
              className="font-serif italic font-normal text-paper inline-block"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              We are six times larger.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            In 2023 Spotify rolled out{" "}
            <strong className="text-paper font-bold">Bosnian</strong> — 2.5M speakers. The same
            year, they added{" "}
            <strong className="text-paper font-bold">
              Slovenian, Latvian, Estonian, Icelandic.
            </strong>{" "}
            Albanian —{" "}
            <strong className="text-paper font-bold">
              16 million speakers, the 6th-largest language in the EU
            </strong>{" "}
            — was not on the list.{" "}
            <strong className="text-paper font-bold">
              One ask. One signature. Add Albanian.
            </strong>
          </p>
        </div>

        {/* Track-listing visualization */}
        <div className="mb-12 border border-rule rounded-md overflow-hidden" style={{ background: "#0E0E10" }}>
          <div className="flex justify-between items-end p-5 sm:p-7 border-b border-rule flex-wrap gap-3">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
                Languages added since 2021 · in order
              </div>
              <div className="font-extrabold text-[18px] sm:text-[22px] tracking-[-0.01em]">
                Five languages with fewer speakers got the app.{" "}
                <span style={{ color: ACCENT }}>We didn&apos;t.</span>
              </div>
            </div>
            <div className="text-[11px] text-grey-5 tracking-[0.04em]">
              Source: Spotify Newsroom · localisation announcements 2021–24
            </div>
          </div>
          <div>
            <div className="grid grid-cols-[40px_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_auto_72px] sm:grid-cols-[60px_minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,1fr)_auto_84px] gap-3 sm:gap-5 items-center py-3 px-3 sm:px-4 text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold border-b border-rule">
              <div>#</div>
              <div>Language</div>
              <div>Native speakers</div>
              <div>Added to Spotify</div>
              <div>Status</div>
              <div className="hidden sm:block">Audio</div>
            </div>
            {SPOTIFY_TRACK_LIST.map((row, i) => (
              <TrackRow key={i} row={row} idx={i} />
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
              {SPOTIFY_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {SPOTIFY_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full" style={{ width: `${pct}%`, background: ACCENT }} />
            </div>
          </div>
          {SPOTIFY_COUNTER_CELLS.map((cell, i) => (
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
