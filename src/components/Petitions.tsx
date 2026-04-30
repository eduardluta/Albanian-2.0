import type { Messages } from "@/i18n/messages/en";
import { petitions, counts, type Petition } from "@/data/petitions";
import { rich } from "@/i18n/rich-text";
import type { Locale } from "@/i18n/config";
import PetitionFilters from "./PetitionFilters";

const GRID_ID = "petitions-grid";

export default function Petitions({ m, locale }: { m: Messages; locale: Locale }) {
  const f = m.petitions.filters;
  const filterLabels = {
    all: f.all,
    recognize: f.recognize,
    add: f.add,
    won: f.won,
  };

  return (
    <section id="petitions" className="py-22" style={{ background: "#050505", paddingTop: "88px", paddingBottom: "88px" }}>
      <div className="wrap">
        <div className="section-num">{m.petitions.sectionNum}</div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
          <h2 className="font-extrabold text-[clamp(40px,5.4vw,72px)] tracking-[-0.03em] leading-none">
            {rich(m.petitions.headline)}
          </h2>
          <p className="text-[18px] text-grey-6 max-w-[560px] leading-[1.5]">{m.petitions.lede}</p>
        </div>

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <PetitionFilters
            labels={filterLabels}
            counts={counts}
            targetId={GRID_ID}
          />
          <div className="text-[12px] text-grey-5 tracking-[0.04em]">
            {m.petitions.filterMeta.sortedBy}{" "}
            <b className="text-paper font-bold">{m.petitions.filterMeta.mostUrgent}</b> ·{" "}
            {m.petitions.filterMeta.updated}
          </div>
        </div>

        <div id={GRID_ID} className="pet-grid grid md:grid-cols-2 gap-6" data-filter="all">
          {petitions.map((p) => (
            <PetitionCard key={p.slug} petition={p} m={m} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PetitionCard({
  petition,
  m,
  locale,
}: {
  petition: Petition;
  m: Messages;
  locale: Locale;
}) {
  const card = m.petitions.cards[petition.slug];
  const filtersAttr = ["all", ...petition.filters].join(" ");
  const isActive = petition.status === "active";
  const isSoon = petition.status === "soon";
  const isWon = petition.status === "won";
  const cardHref = petition.page ? `/${locale}/${petition.page}/` : petition.href;

  return (
    <a
      href={cardHref}
      data-pet-filters={filtersAttr}
      data-pet-status={petition.status}
      className="card-hover relative flex flex-col justify-between p-9 bg-ink border border-grey-1 rounded-md min-h-[480px] overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-[11px] tracking-[0.16em] font-bold text-grey-5 uppercase">
            {m.petitions.petitionLabel} №&thinsp;{petition.num}
          </div>
          <div className="mt-1.5 font-extrabold text-[18px] tracking-[-0.01em] text-paper">
            {petition.target}
          </div>
        </div>
        <StatusPill status={petition.status} m={m} />
      </div>

      <h3 className="font-extrabold text-[clamp(38px,3.4vw,56px)] tracking-[-0.03em] leading-[0.95] text-paper mt-7 text-balance">
        {rich(card.ask)}
      </h3>

      <div className="grid grid-cols-2 mt-auto mb-6 border-y border-dashed border-white/10">
        <div className="py-4.5 pr-4.5 border-r border-dashed border-white/10">
          <div className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
            {card.compareLeftLabel}
          </div>
          <div className="font-extrabold text-[18px] tracking-[-0.01em] leading-[1.15] text-paper">
            {rich(card.compareLeftValue)}
          </div>
        </div>
        <div className="py-4.5 pl-4.5">
          <div className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-2">
            {card.compareRightLabel}
          </div>
          <div className="font-extrabold text-[18px] tracking-[-0.01em] leading-[1.15]">
            {rich(card.compareRightValue)}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-0.5">
          <div className="font-extrabold text-[22px] tracking-[-0.02em] leading-none num-tabular text-paper">
            {isSoon
              ? "statSigValue" in card
                ? card.statSigValue
                : "—"
              : petition.signatures != null
                ? petition.signatures.toLocaleString("en-US")
                : "—"}
          </div>
          <div className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
            {card.statSigLabel}
          </div>
        </div>
        <div className="flex flex-col gap-0.5 text-right">
          <div
            className={`font-extrabold text-[22px] tracking-[-0.02em] leading-none num-tabular ${
              isSoon || isWon ? "text-grey-5" : "text-paper"
            }`}
          >
            {isWon
              ? "statTimeValue" in card
                ? card.statTimeValue
                : "—"
              : isSoon
                ? "statTimeValue" in card
                  ? card.statTimeValue
                  : "—"
                : `${m.petitions.progress.day} ${petition.daysRunning}`}
          </div>
          <div className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
            {card.statTimeLabel}
          </div>
        </div>
      </div>

      {isActive && petition.progress != null ? (
        <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden mt-3.5">
          <span
            className="block h-full bg-red"
            style={{ width: `${petition.progress}%` }}
          />
        </div>
      ) : null}
    </a>
  );
}

function StatusPill({ status, m }: { status: Petition["status"]; m: Messages }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase bg-red/10 text-red-bright border border-red/35">
        <span className="w-1.5 h-1.5 rounded-full bg-red" style={{ animation: "var(--animate-dot-pulse)", boxShadow: "0 0 0 4px rgba(225,29,42,0.2)" }} />
        {m.petitions.statusLabels.active}
      </span>
    );
  }
  if (status === "soon") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase bg-white/5 text-grey-6 border border-rule-strong">
        {m.petitions.statusLabels.soon}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase bg-paper/[0.92] text-black">
      <span aria-hidden>✓</span>
      {m.petitions.statusLabels.won}
    </span>
  );
}
