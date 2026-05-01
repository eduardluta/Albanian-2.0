import { PAYPAL_COSTS } from "@/data/paypal-petition";
import { rich } from "@/i18n/rich-text";

const ACCENT = "#1F6CFF";

/**
 * Tiny markdown helper — renders **bold** and *italic* in body copy.
 * Returns ReactNodes so we can mix safely with text.
 */
function renderInline(text: string) {
  // Split on bold then italic, preserving structure.
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-paper">
          {p.slice(2, -2)}
        </strong>
      );
    }
    if (p.startsWith("*") && p.endsWith("*")) {
      return (
        <em key={i} className="font-serif italic font-normal">
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function PayPalCosts() {
  return (
    <section
      className="py-16 md:py-20 border-t border-rule"
      style={{ background: "#070707" }}
    >
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-end mb-14 lg:mb-[72px]">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
              <span className="w-6 h-px" style={{ background: ACCENT }} aria-hidden />
              03 · What it actually costs
            </div>
            <h2
              className="font-display leading-[0.85] tracking-[0.01em]"
              style={{ fontSize: "clamp(48px, 6.4vw, 96px)" }}
            >
              TWO OUTCOMES.
              <br />
              NEITHER OF THEM
              <br />
              <span style={{ color: ACCENT }}>IS NORMAL.</span>
            </h2>
          </div>
          <div className="text-[16px] sm:text-[17px] text-grey-6 leading-[1.55] space-y-4 max-w-[640px]">
            <p>
              When the rail isn&apos;t there, only two things can happen. Either someone in
              another country runs the transaction for you — and takes a cut — or{" "}
              <strong className="text-paper font-bold">the work doesn&apos;t happen at all</strong>.
            </p>
            <p>
              Both outcomes erase a Kosovar from the global economy. One does it loudly. One
              does it silently.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PAYPAL_COSTS.map((cost, i) => (
            <div
              key={i}
              className="p-7 lg:p-9 border border-rule rounded-md"
              style={{ background: "#0E0E10" }}
            >
              <div
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase mb-6"
                style={{
                  background: "rgba(31,108,255,0.12)",
                  color: ACCENT,
                  border: `1px solid rgba(31,108,255,0.35)`,
                }}
              >
                {cost.tag}
              </div>
              <h3
                className="font-display leading-[0.92] tracking-[0.005em] mb-6"
                style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}
              >
                {rich(cost.headline)}
              </h3>
              <p className="text-[15px] text-grey-6 leading-[1.6] mb-6">
                {renderInline(cost.body)}
              </p>
              <div
                className="font-serif italic text-[18px] sm:text-[20px] text-paper leading-[1.4] mb-3 pt-5 border-t border-rule"
                style={{ letterSpacing: "-0.005em" }}
              >
                &ldquo;{cost.quote}&rdquo;
              </div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-grey-5 font-bold">
                {cost.cite}
              </div>
            </div>
          ))}
        </div>

        {/* Side note about scope */}
        <div className="mt-12 grid grid-cols-[24px_1fr] gap-4 max-w-[920px]">
          <div className="text-grey-5 font-display text-[24px] leading-none">*</div>
          <p className="text-[14px] text-grey-6 leading-[1.6]">
            <strong className="text-paper font-bold">A note on scope.</strong> This page is about
            PayPal because PayPal is the most universal name on the wall — and the easiest
            concrete fix. But Kosovo&apos;s exclusion runs further: Patreon payouts, App Store
            developer accounts, and other monetization platforms are also unavailable to
            Kosovo-based creators. PayPal is where we start.
          </p>
        </div>
      </div>
    </section>
  );
}
