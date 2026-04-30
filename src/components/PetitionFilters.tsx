"use client";

import { useState } from "react";

export type FilterKey = "all" | "recognize" | "add" | "won";

const ORDER: FilterKey[] = ["all", "recognize", "add", "won"];

export default function PetitionFilters({
  labels,
  counts,
  targetId,
}: {
  labels: Record<FilterKey, string>;
  counts: Record<FilterKey, number>;
  targetId: string;
}) {
  const [active, setActive] = useState<FilterKey>("all");
  const onPick = (f: FilterKey) => {
    setActive(f);
    if (typeof document === "undefined") return;
    const target = document.getElementById(targetId);
    if (target) target.dataset.filter = f;
  };
  return (
    <div
      className="inline-flex border border-rule-strong rounded-full p-1"
      role="tablist"
      aria-label="Filter petitions"
    >
      {ORDER.map((f) => (
        <button
          key={f}
          type="button"
          role="tab"
          aria-selected={active === f}
          onClick={() => onPick(f)}
          className={`px-[18px] py-2 text-[12px] font-bold tracking-[0.06em] uppercase rounded-full transition-colors ${
            active === f ? "bg-paper text-black" : "text-grey-6 hover:text-paper"
          }`}
        >
          {labels[f]} · {counts[f]}
        </button>
      ))}
    </div>
  );
}
