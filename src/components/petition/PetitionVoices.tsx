/**
 * Reusable 3-column quotes section. Used by ElevenLabs, Spotify, Apple, Uber
 * petition pages. The headline is rich-text — its last line gets the accent color.
 */

export type PetitionQuote = { q: string; n: string; c: string };

export default function PetitionVoices({
  num,
  accent,
  headlineLines,
  accentLineIndex,
  quotes,
}: {
  num: string;
  accent: string;
  headlineLines: string[];
  /** Which 0-indexed line of headlineLines gets the accent color. Defaults to last line. */
  accentLineIndex?: number;
  quotes: PetitionQuote[];
}) {
  const accentIdx =
    accentLineIndex !== undefined ? accentLineIndex : headlineLines.length - 1;
  return (
    <section className="py-16 md:py-20 border-t border-rule bg-black">
      <div className="wrap">
        <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
          <span className="w-6 h-px" style={{ background: accent }} aria-hidden />
          {num} · Voices
        </div>
        <h2
          className="font-display leading-[0.85] tracking-[0.01em] mb-12"
          style={{ fontSize: "clamp(48px, 6.4vw, 96px)" }}
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              <span style={i === accentIdx ? { color: accent } : undefined}>{line}</span>
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <div className="grid md:grid-cols-3 gap-0 border-t border-rule">
          {quotes.map((q, i) => {
            const isLast = i === quotes.length - 1;
            return (
              <figure
                key={i}
                className={`flex flex-col py-10 md:py-12 ${
                  i === 0 ? "md:pl-0" : "md:pl-10"
                } ${isLast ? "md:pr-0" : "md:pr-10"} ${
                  !isLast ? "md:border-r border-rule" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
              >
                <div
                  className="font-serif text-[64px] sm:text-[72px] leading-none mb-4"
                  style={{ color: accent }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <blockquote className="font-serif italic text-[20px] sm:text-[22px] leading-[1.35] text-paper tracking-[-0.005em] mb-8">
                  {q.q}
                </blockquote>
                <figcaption className="mt-auto">
                  <div className="font-bold text-[14px] text-paper">{q.n}</div>
                  <div className="text-[12px] text-grey-5">{q.c}</div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
