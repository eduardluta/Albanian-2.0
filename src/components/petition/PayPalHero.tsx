import {
  PAYPAL_SIGNATURES,
  PAYPAL_TARGET,
  PAYPAL_SCOPE,
  PAYPAL_COUNTER_CELLS,
} from "@/data/paypal-petition";

const ACCENT = "#1F6CFF";

export default function PayPalHero() {
  const pct = Math.round((PAYPAL_SIGNATURES / PAYPAL_TARGET) * 100);
  return (
    <section
      id="case"
      className="relative pt-[96px] sm:pt-[104px] pb-16 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 80% 20%, rgba(31,108,255,0.18), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="wrap relative">
        {/* eyebrow row */}
        <div className="mb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow">
              <span className="dot" />
              Open letter to PayPal · Petition № 03
            </span>
            <span
              className="tag"
              style={{ color: ACCENT, borderColor: "rgba(31,108,255,0.4)" }}
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
            435 MILLION USERS.
            <br />
            <span style={{ color: ACCENT }}>NOT ONE OF THEM</span>
            <br />
            IS IN KOSOVO.{" "}
            <em
              className="font-serif italic font-normal text-paper inline-block"
              style={{ fontSize: "0.62em", letterSpacing: "-0.04em" }}
            >
              Not one Kosovar business either.
            </em>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-grey-6 max-w-[920px] leading-[1.45]">
            PayPal is the default rail for the global internet — the way freelancers get paid,
            the way creators take tips, the way small businesses sell across borders.{" "}
            <strong className="text-paper font-bold">
              1.8 million people in Kosovo cannot open a personal account. No Kosovo-registered
              business can open a business account.
            </strong>{" "}
            We are the only country in continental Europe still locked out.
          </p>
        </div>

        {/* scope cells */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 mb-12 border-y border-rule py-9">
          {PAYPAL_SCOPE.map((cell, i) => (
            <div
              key={i}
              className={`px-5 lg:px-7 ${i > 0 ? "md:border-l border-rule" : ""}`}
            >
              <div
                className="font-display leading-[0.9] tracking-[0.005em]"
                style={{
                  fontSize: "clamp(36px, 4.4vw, 64px)",
                  color: cell.zero
                    ? ACCENT
                    : cell.accent
                      ? ACCENT
                      : "#fff",
                }}
              >
                {cell.v}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold leading-[1.4]">
                {cell.l}
              </div>
            </div>
          ))}
        </div>

        {/* counter strip */}
        <div className="pt-9 border-t border-rule grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-y-8 lg:gap-y-0 items-end">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <div
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(56px, 7vw, 88px)", color: ACCENT }}
            >
              {PAYPAL_SIGNATURES.toLocaleString("en-US")}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
              Signatures · {pct}% to the {PAYPAL_TARGET.toLocaleString("en-US")} target
            </div>
            <div className="mt-3.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full" style={{ width: `${pct}%`, background: ACCENT }} />
            </div>
          </div>
          {PAYPAL_COUNTER_CELLS.map((cell, i) => (
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
