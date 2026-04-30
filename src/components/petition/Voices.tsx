import { VOICES } from "@/data/netflix-petition";

export default function Voices() {
  return (
    <section className="py-16 md:py-20 border-t border-rule">
      <div className="wrap">
      <div className="mb-9">
        <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
          <span className="w-6 h-px bg-red" aria-hidden />
          05 · Voices
        </div>
        <h2
          className="font-display leading-[0.9] tracking-[0.01em]"
          style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
        >
          1.4M PAYING
          <br />
          SUBSCRIBERS.
          <br />
          <span style={{ color: "#E11D2A" }}>€220M / YEAR.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 border-t border-rule">
        {VOICES.map((v, i) => (
          <figure
            key={i}
            className={`flex flex-col py-9 ${
              i === 0 ? "md:pl-0" : "md:pl-8"
            } ${i === VOICES.length - 1 ? "md:pr-0" : "md:pr-8"} ${
              i < VOICES.length - 1 ? "md:border-r border-rule" : ""
            } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
          >
            <div
              className="font-serif text-red leading-[0.6] mb-3.5"
              style={{ fontSize: "64px" }}
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote className="font-serif italic text-[20px] sm:text-[21px] leading-[1.3] mb-5 text-paper">
              {v.q}
            </blockquote>
            <figcaption className="mt-auto">
              <div className="text-[13px] font-bold">{v.n}</div>
              <div className="text-[11px] text-grey-5 tracking-[0.06em] mt-0.5">{v.c}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}
