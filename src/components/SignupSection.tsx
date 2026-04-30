import type { Messages } from "@/i18n/messages/en";
import { rich } from "@/i18n/rich-text";
import Signup from "./Signup";

export default function SignupSection({ m }: { m: Messages }) {
  return (
    <section style={{ padding: "0 0 120px" }}>
      <div className="wrap">
        <div
          className="max-w-[880px] mx-auto p-12 border border-rule-strong rounded-md grid md:grid-cols-[1.2fr_1fr] gap-10 items-center"
          style={{ background: "linear-gradient(180deg, #0E0E10, #050505)" }}
        >
          <div>
            <h3 className="font-extrabold text-[32px] tracking-[-0.02em] leading-[1.05] mb-3">
              {rich(m.signup.headline)}
            </h3>
            <p className="text-[14px] text-grey-6 leading-[1.55]">{m.signup.sub}</p>
          </div>
          <div>
            <Signup
              placeholder={m.signup.placeholder}
              button={m.signup.button}
              success={m.signup.success}
            />
            <div className="mt-2 text-[11px] text-grey-5 tracking-[0.04em]">{m.signup.fine}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
