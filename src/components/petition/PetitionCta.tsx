export default function PetitionCta({
  signatures,
  target,
  changeOrgUrl,
  background = "#E11D2A",
}: {
  signatures: number;
  target: number;
  changeOrgUrl: string;
  background?: string;
}) {
  const togo = (target - signatures).toLocaleString("en-US");
  return (
    <section
      className="py-24 md:py-28 text-center"
      style={{ background, color: "#fff" }}
    >
      <div className="wrap">
        <div className="text-[11px] tracking-[0.2em] uppercase font-bold mb-8 opacity-75">
          One signature · 30 seconds · hosted on change.org
        </div>
        <h2
          className="font-display leading-[0.85] tracking-[0.01em] mb-8"
          style={{ fontSize: "clamp(56px, 9vw, 152px)" }}
        >
          {togo} TO GO.
          <br />
          <em
            className="font-serif italic font-normal"
            style={{ fontSize: "0.7em", letterSpacing: "-0.02em", color: "#0a0a0a" }}
          >
            Add yours.
          </em>
        </h2>
        <a
          href={changeOrgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg"
          style={{ background: "#0a0a0a", color: "#fff", padding: "20px 36px", fontSize: "16px" }}
        >
          Sign on change.org <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
