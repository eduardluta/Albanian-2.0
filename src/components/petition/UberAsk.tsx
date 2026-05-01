export default function UberAsk({ locale }: { locale: string }) {
  return (
    <section className="py-14" style={{ background: "#F6F600", color: "#0a0a0a" }}>
      <div className="wrap grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-9 items-center">
        <div
          className="font-display leading-none tracking-[0.01em] hidden md:block"
          style={{ fontSize: "80px", opacity: 0.35 }}
        >
          02
        </div>
        <div>
          <div className="text-[11px] tracking-[0.2em] font-bold uppercase mb-3.5 opacity-75">
            Open letter · what we want from Uber
          </div>
          <h2
            className="font-display tracking-[0.005em] leading-[0.92]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Launch Uber in Pristina.{" "}
            <em
              className="font-serif italic font-normal"
              style={{ letterSpacing: "-0.02em" }}
            >
              UberX, Comfort, and Eats.
            </em>{" "}
            <span>Driver onboarding by Q4 2026.</span>{" "}
            <em
              className="font-serif italic font-normal"
              style={{ letterSpacing: "-0.02em" }}
            >
              First rides Q1 2027.
            </em>
          </h2>
        </div>
        <a
          href={`/${locale}/p/uber/letter/`}
          className="btn btn-lg whitespace-nowrap"
          style={{ background: "#0a0a0a", color: "#fff" }}
        >
          Read full letter <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
