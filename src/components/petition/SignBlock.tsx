import PetitionForm from "./PetitionForm";
import SignerMarquee from "./SignerMarquee";
import type { Petition } from "@/data/petition-shared";

export default function SignBlock({
  petition,
  num = "03",
  scaleHook,
}: {
  petition: Petition;
  num?: string;
  /** Petition-specific scale framing — e.g. "100,000 is a problem Netflix has to put on the localization roadmap." */
  scaleHook: string;
}) {
  return (
    <section id="sign" className="py-16 md:py-20 border-t border-rule bg-black">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-start">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
              <span className="w-6 h-px bg-red" aria-hidden />
              {num} · Sign
            </div>
            <h2
              className="font-display leading-[0.85] tracking-[0.01em] mb-6"
              style={{ fontSize: "clamp(48px, 6.5vw, 88px)" }}
            >
              ADD YOUR
              <br />
              NAME TO THE
              <br />
              <span style={{ color: "#E11D2A" }}>OPEN LETTER.</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] text-grey-6 leading-[1.5] max-w-[520px] mb-7">
              {scaleHook}
            </p>
            <div className="flex gap-8 pt-6 border-t border-rule max-w-[520px] mb-7">
              {[
                ["Time to sign", "30 sec"],
                ["Hosted by", "change.org"],
                ["Cost", "€0"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold mb-1.5">
                    {k}
                  </div>
                  <div className="font-extrabold text-[22px]">{v}</div>
                </div>
              ))}
            </div>
            <div
              className="flex gap-3.5 items-start p-5 border border-rule rounded-md max-w-[520px]"
              style={{ background: "rgba(70,211,105,0.04)" }}
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-[#46d369] text-black inline-flex items-center justify-center font-extrabold text-[14px]">
                ✓
              </span>
              <div>
                <div className="text-[13px] font-bold text-paper mb-1">
                  Verified petition on change.org
                </div>
                <div className="text-[12px] text-grey-6 leading-[1.5]">
                  Your signature is recorded with change.org and counted toward the official total.
                  We never see your password — change.org handles delivery to {petition.target}.
                </div>
              </div>
            </div>
          </div>

          <PetitionForm
            changeOrgUrl={petition.changeOrgUrl}
            signatures={petition.signatures}
          />
        </div>

        <SignerMarquee signers={petition.signers} total={petition.signatures} />
      </div>
    </section>
  );
}
