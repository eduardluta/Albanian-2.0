import { NETFLIX_SIGNERS, NETFLIX_SIGNATURES } from "@/data/netflix-petition";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function SignerMarquee() {
  // Duplicate the row in markup so the CSS marquee loops seamlessly.
  const list = [...NETFLIX_SIGNERS, ...NETFLIX_SIGNERS];
  return (
    <div className="mt-16 pt-9 border-t border-rule">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.16em] uppercase text-grey-5 font-bold">
          <span
            aria-hidden
            className="w-1.5 h-1.5 rounded-full bg-red"
            style={{ animation: "var(--animate-dot-pulse)" }}
          />
          Live · latest signatures from change.org
        </div>
        <div className="text-[11px] tracking-[0.06em] text-grey-6">
          {NETFLIX_SIGNATURES.toLocaleString("en-US")} names · 178 countries
        </div>
      </div>
      <div className="petition-marquee-track relative overflow-hidden">
        <div className="petition-marquee-row flex gap-2.5 w-max">
          {list.map((s, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 pr-4 pl-2.5 py-2.5 bg-[#15151a] border border-rule rounded-full shrink-0"
            >
              <span
                className={`inline-flex items-center justify-center w-[30px] h-[30px] rounded-full text-[10px] font-extrabold ${
                  i % 5 === 0 ? "bg-red text-paper" : "bg-[#222] text-grey-5"
                }`}
              >
                {initials(s.name)}
              </span>
              <span className="text-[13px] font-bold text-paper">{s.name}</span>
              <span className="text-[12px] text-grey-6">
                <span className="mr-1.5 text-grey-4" aria-hidden>
                  ·
                </span>
                {s.city}
              </span>
              <span className="text-[10px] tracking-[0.12em] uppercase text-grey-4 font-bold pl-2.5 border-l border-rule">
                {s.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
