import PosterCard from "./PosterCard";
import {
  NETFLIX_TITLES,
  NETFLIX_SIGNATURES,
  NETFLIX_TARGET,
} from "@/data/netflix-petition";

const COUNTER_CELLS: [string, string][] = [
  ["16M", "Albanian speakers worldwide"],
  ["1.4M", "Paying Netflix subscribers"],
  ["€220M", "Yearly revenue from us"],
  ["0", "Albanian subtitles on Netflix"],
];

export default function PetitionHero() {
  const pct = Math.round((NETFLIX_SIGNATURES / NETFLIX_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      {/* glow — full bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(229,9,20,0.18), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        {/* eyebrow row */}
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to Netflix · Petition № 01
            </span>
            <span
              className="tag"
              style={{ color: "#E50914", borderColor: "rgba(229,9,20,0.4)" }}
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
            NETFLIX SPEAKS
            <br />
            <span style={{ color: "#E11D2A" }}>33 LANGUAGES.</span>
            <br />
            <em
              className="font-serif italic font-normal text-paper inline-block pb-[0.06em]"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              Albanian isn&apos;t one of them.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            <strong className="text-paper font-bold">16 million Albanians</strong> speak the
            language.{" "}
            <strong className="text-paper font-bold">1.4 million pay for Netflix</strong>.
            Slovenian (2.5M speakers) gets the full library subtitled and the UI translated. We
            get nothing.{" "}
            <strong className="text-paper font-bold">
              One ask. One signature. Add Albanian.
            </strong>
          </p>
        </div>

        {/* trending row */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-5 flex-wrap gap-3">
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
                Trending Now · on Netflix today
              </div>
              <div className="font-extrabold text-[20px] sm:text-[24px] tracking-[-0.01em]">
                Every show below has 14+ language audio.{" "}
                <span className="text-red">None have Albanian.</span>
              </div>
            </div>
            <div className="text-[11px] text-grey-5 tracking-[0.04em]">
              Source: Netflix.com · Apr 2026
            </div>
          </div>
          <div className="flex gap-3.5 overflow-x-auto pb-2 [scrollbar-width:thin] -mx-8 px-8 sm:-mx-5 sm:px-5">
            {NETFLIX_TITLES.map((t) => (
              <PosterCard key={t.t} title={t} />
            ))}
          </div>
        </div>

        {/* counter strip */}
        <div className="pt-9 border-t border-rule grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-y-8 lg:gap-y-0 items-end">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <div
              className="font-display leading-[0.85] tracking-[0.01em] text-red"
              style={{ fontSize: "clamp(56px, 7vw, 88px)" }}
            >
              {NETFLIX_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {NETFLIX_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-red" style={{ width: `${pct}%` }} />
            </div>
          </div>
          {COUNTER_CELLS.map(([v, l], i) => (
            <div
              key={i}
              className={`px-4 lg:px-[22px] ${
                i === 0 ? "border-l-0 lg:border-l" : "border-l"
              } border-rule`}
            >
              <div
                className="font-display text-paper leading-[0.85] tracking-[0.01em]"
                style={{ fontSize: "clamp(32px, 3.6vw, 50px)" }}
              >
                {v}
              </div>
              <div className="mt-2.5 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
