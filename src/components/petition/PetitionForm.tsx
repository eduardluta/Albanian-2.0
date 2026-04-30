"use client";

import { useState, type FormEvent } from "react";
import { NETFLIX_CHANGE_ORG_URL, NETFLIX_SIGNATURES } from "@/data/netflix-petition";

export default function PetitionForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Hand off to change.org. Fields aren't sent — change.org owns the
    // signature collection (per the brief). Pre-filling fields server-side
    // would require their API; we redirect instead.
    setTimeout(() => {
      window.open(NETFLIX_CHANGE_ORG_URL, "_blank", "noopener");
      setSubmitting(false);
    }, 350);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-paper text-[#1f2937] p-8 md:p-9 rounded-lg shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="flex flex-col items-center gap-1.5 text-center pb-4.5">
        <div className="flex items-center gap-2.5">
          <span className="text-[34px] font-extrabold text-[#111827] tracking-[-0.01em]">
            {NETFLIX_SIGNATURES.toLocaleString("en-US")}
          </span>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-label="Verified by change.org"
          >
            <circle cx="12" cy="12" r="11" fill="#2962FF" />
            <path
              d="M7 12.5l3.5 3.5L17 9"
              stroke="#fff"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-[14px] text-[#374151] font-medium">
          Verified signatures{" "}
          <span className="text-[#6b7280] text-[11px] ml-px">▾</span>
        </div>
      </div>

      <div className="h-px bg-[#e5e7eb] -mx-9 mb-5" />

      <h3 className="text-[22px] font-extrabold text-[#111827] mb-4 tracking-[-0.01em]">
        Sign this petition
      </h3>

      <label className="text-[13px] text-[#374151] font-medium block mb-1.5">
        First name
      </label>
      <input
        type="text"
        autoComplete="given-name"
        required
        disabled={submitting}
        className="w-full bg-paper border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-[#111827] text-[15px] outline-none focus:border-[#2563eb] focus:ring-[3px] focus:ring-[#2563eb]/15 transition"
      />

      <label className="text-[13px] text-[#374151] font-medium block mb-1.5 mt-3.5">
        Last name
      </label>
      <input
        type="text"
        autoComplete="family-name"
        required
        disabled={submitting}
        className="w-full bg-paper border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-[#111827] text-[15px] outline-none focus:border-[#2563eb] focus:ring-[3px] focus:ring-[#2563eb]/15 transition"
      />

      <label className="text-[13px] text-[#374151] font-medium block mb-1.5 mt-3.5">
        Email
      </label>
      <input
        type="email"
        autoComplete="email"
        required
        disabled={submitting}
        className="w-full bg-paper border border-[#d1d5db] rounded-md px-3.5 py-2.5 text-[#111827] text-[15px] outline-none focus:border-[#2563eb] focus:ring-[3px] focus:ring-[#2563eb]/15 transition"
      />

      <label className="flex gap-2.5 items-start mt-4.5 text-[14px] text-[#374151] leading-snug cursor-pointer">
        <input
          type="checkbox"
          defaultChecked
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#2563eb]"
        />
        <span>Display my name and comment on this petition</span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4.5 py-3.5 text-[16px] font-extrabold text-[#1a1a1a] rounded-lg inline-flex items-center justify-center gap-2 hover:brightness-105 transition disabled:opacity-70 disabled:cursor-wait"
        style={{ background: "linear-gradient(180deg,#FBE94B 0%,#F4D900 100%)" }}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
        <span>{submitting ? "Redirecting…" : "Sign petition"}</span>
      </button>

      <p className="mt-4.5 text-[12px] text-[#6b7280] leading-[1.5]">
        By signing, you accept Change.org&apos;s{" "}
        <u className="text-[#374151] decoration-[#9ca3af]">Terms of Service</u> and{" "}
        <u className="text-[#374151] decoration-[#9ca3af]">Privacy Policy</u>, and agree to receive
        occasional emails about campaigns on Change.org. You can unsubscribe at any time.
      </p>
    </form>
  );
}
