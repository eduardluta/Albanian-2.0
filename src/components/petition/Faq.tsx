"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/petition-shared";

export default function Faq({
  items,
  num = "07",
}: {
  items: readonly FaqItem[];
  num?: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 md:py-20 border-t border-rule">
      <div className="wrap grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
            <span className="w-6 h-px bg-red" aria-hidden />
            {num} · FAQ
          </div>
          <h2
            className="font-display leading-[0.9] tracking-[0.01em]"
            style={{ fontSize: "clamp(48px, 6.5vw, 80px)" }}
          >
            WHAT WE
            <br />
            KEEP HEARING.
          </h2>
        </div>
        <div>
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="border-b border-rule py-6">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex justify-between items-center gap-6 text-left cursor-pointer"
                >
                  <h3 className="text-[16px] sm:text-[18px] font-bold tracking-[-0.01em]">
                    {item.q}
                  </h3>
                  <span
                    className="font-serif text-[24px] text-red shrink-0 transition-transform"
                    style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-2.5 text-grey-6 text-[14px] leading-[1.6] max-w-[760px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
