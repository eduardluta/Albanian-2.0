import Link from "next/link";
import type { Petition, LetterReply } from "@/data/petition-shared";

function daysSince(iso: string): number {
  const sent = new Date(iso).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - sent) / (1000 * 60 * 60 * 24)));
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PetitionLetterPage({
  petition,
  locale,
}: {
  petition: Petition;
  locale: string;
}) {
  const { letter, target, num, slug, accent } = petition;
  const days = daysSince(letter.sentDate);
  const responded = letter.replies.some((r) => r.type === "received");
  const status = responded ? "RESPONDED" : "AWAITING RESPONSE";

  return (
    <main>
      {/* Header band */}
      <section className="relative pt-[96px] sm:pt-[112px] pb-12 bg-black border-b border-rule">
        <div className="wrap">
          <Link
            href={`/${locale}/p/${slug}/`}
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase font-bold text-grey-5 hover:text-paper transition-colors mb-8"
          >
            <span aria-hidden>←</span> Back to the {target} petition
          </Link>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
                <span className="w-6 h-px" style={{ background: accent }} aria-hidden />
                Open letter № {num}
              </div>
              <h1
                className="font-display leading-[0.88] tracking-[0.005em]"
                style={{ fontSize: "clamp(48px, 7vw, 112px)" }}
              >
                LETTER TO{" "}
                <span style={{ color: accent }}>{target.toUpperCase()}.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-3 text-[13px]">
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold w-20 shrink-0">
                  Status
                </span>
                <span
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase"
                  style={{
                    background: responded
                      ? "rgba(70,211,105,0.1)"
                      : "rgba(255,255,255,0.05)",
                    color: responded ? "#46d369" : "#B7B7BD",
                    border: `1px solid ${responded ? "rgba(70,211,105,0.35)" : "rgba(255,255,255,0.2)"}`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: responded ? "#46d369" : "#B7B7BD",
                      animation: responded ? undefined : "var(--animate-dot-pulse)",
                    }}
                    aria-hidden
                  />
                  {status}
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold w-20 shrink-0">
                  Sent
                </span>
                <span className="text-paper font-bold">{letter.sentDateDisplay}</span>
                <span className="text-grey-5">·</span>
                <span className="text-grey-6">
                  {days} {days === 1 ? "day" : "days"} ago
                </span>
              </div>
              {letter.replyByDisplay && (
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold w-20 shrink-0">
                    Reply by
                  </span>
                  <span className="text-grey-6">
                    {letter.replyByDisplay.replace(/^We would welcome a reply by /, "").replace(/\.$/, "")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Letter card */}
      <section className="py-16 md:py-20" style={{ background: "#070707" }}>
        <div className="wrap">
          <article
            className="max-w-[860px] mx-auto p-8 sm:p-12 lg:p-16 rounded-md border border-rule"
            style={{ background: "#0E0E10" }}
          >
            <header className="mb-10 pb-8 border-b border-rule">
              <div className="text-[10px] tracking-[0.18em] uppercase text-grey-5 font-bold mb-3">
                Sent · {letter.sentDateDisplay}
              </div>
              <div className="grid sm:grid-cols-[110px_1fr] gap-1 sm:gap-3 text-[14px] leading-[1.55]">
                <div className="text-grey-5 font-bold uppercase tracking-[0.06em] text-[11px] pt-1">To</div>
                <div className="text-paper">
                  <div className="font-bold">{letter.to.name}</div>
                  <div className="text-grey-6">{letter.to.role}</div>
                  {letter.to.address.map((line, i) => (
                    <div key={i} className="text-grey-6">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-[110px_1fr] gap-1 sm:gap-3 mt-4 text-[14px] leading-[1.55]">
                <div className="text-grey-5 font-bold uppercase tracking-[0.06em] text-[11px] pt-1">Subject</div>
                <div className="text-paper font-bold">{letter.subject}</div>
              </div>
            </header>

            <div className="font-serif text-[18px] sm:text-[20px] leading-[1.55] text-paper space-y-5">
              <p>{letter.salutation}</p>
              {letter.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {letter.asks && letter.asks.length > 0 && (
                <ol className="list-decimal pl-6 space-y-2">
                  {letter.asks.map((ask, i) => (
                    <li key={i}>{ask}</li>
                  ))}
                </ol>
              )}
              {letter.closing.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {letter.replyByDisplay && (
                <p className="text-grey-6">{letter.replyByDisplay}</p>
              )}
              <p>{letter.signOff}</p>
            </div>

            <footer className="mt-10 pt-8 border-t border-rule flex items-start gap-4">
              <span
                className="w-10 h-10 flex items-center justify-center bg-red rounded-[6px] text-paper font-display leading-none text-[24px] tracking-[0.05em] shrink-0"
                style={{ paddingTop: "2px" }}
                aria-hidden
              >
                DA
              </span>
              <div>
                <div className="font-extrabold text-[15px] text-paper">{letter.signedBy.name}</div>
                <div className="text-[13px] text-grey-6">{letter.signedBy.role}</div>
                {letter.signedBy.behalfOf && (
                  <div className="text-[12px] text-grey-5 mt-1 font-serif italic">
                    {letter.signedBy.behalfOf}
                  </div>
                )}
              </div>
            </footer>
          </article>
        </div>
      </section>

      {/* Replies timeline */}
      <section
        className="py-16 md:py-20 border-t border-rule"
        style={{ background: "#050505" }}
      >
        <div className="wrap">
          <div className="max-w-[860px] mx-auto">
            <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
              <span className="w-6 h-px" style={{ background: accent }} aria-hidden />
              Replies & updates
            </div>
            <h2
              className="font-display leading-[0.88] tracking-[0.01em] mb-10"
              style={{ fontSize: "clamp(36px, 4.4vw, 64px)" }}
            >
              EVERY REPLY
              <br />
              GETS PUBLISHED HERE.
            </h2>

            {letter.replies.length === 0 ? (
              <EmptyTimeline accent={accent} sentDateDisplay={letter.sentDateDisplay} />
            ) : (
              <ol className="space-y-6 border-l border-rule pl-6">
                {letter.replies.map((r, i) => (
                  <ReplyCard key={i} reply={r} accent={accent} />
                ))}
                <SentEntry accent={accent} sentDateDisplay={letter.sentDateDisplay} />
              </ol>
            )}

            <div className="mt-10 text-[12px] text-grey-5 leading-[1.6]">
              We commit to publishing every response we receive — partial or full, formal
              or informal. If you&apos;re a {target} employee with information to share, you can
              email{" "}
              <a
                href="mailto:hello@dua.com"
                className="text-paper underline decoration-grey-4 hover:decoration-paper transition-colors"
              >
                hello@dua.com
              </a>
              . Confidentiality respected.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function EmptyTimeline({
  accent,
  sentDateDisplay,
}: {
  accent: string;
  sentDateDisplay: string;
}) {
  return (
    <div className="border-l border-rule pl-6 space-y-8">
      <div className="relative">
        <span
          className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full border-2 bg-black"
          style={{ borderColor: "var(--color-grey-4)" }}
          aria-hidden
        />
        <div className="text-[10px] tracking-[0.18em] uppercase text-grey-5 font-bold mb-1">
          Awaiting response · checked daily
        </div>
        <div className="font-extrabold text-[18px] tracking-[-0.005em]">
          No reply yet.
        </div>
        <div className="text-[14px] text-grey-6 mt-1.5 leading-[1.5]">
          The first response — even an acknowledgment of receipt — will appear here.
        </div>
      </div>
      <SentEntry accent={accent} sentDateDisplay={sentDateDisplay} />
    </div>
  );
}

function SentEntry({
  accent,
  sentDateDisplay,
}: {
  accent: string;
  sentDateDisplay: string;
}) {
  return (
    <div className="relative">
      <span
        className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full"
        style={{ background: accent }}
        aria-hidden
      />
      <div className="text-[10px] tracking-[0.18em] uppercase text-grey-5 font-bold mb-1">
        Sent · {sentDateDisplay}
      </div>
      <div className="font-extrabold text-[18px] tracking-[-0.005em]">
        Open letter delivered.
      </div>
      <div className="text-[14px] text-grey-6 mt-1.5 leading-[1.5]">
        Sent by email and physical post to the addressee. Cc&apos;d to the press
        list and the change.org petition page.
      </div>
    </div>
  );
}

function ReplyCard({ reply, accent }: { reply: LetterReply; accent: string }) {
  const isReceived = reply.type === "received";
  return (
    <li className="relative">
      <span
        className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full"
        style={{ background: isReceived ? "#46d369" : accent }}
        aria-hidden
      />
      <div className="text-[10px] tracking-[0.18em] uppercase text-grey-5 font-bold mb-1">
        {isReceived ? "Received" : "Update"} · {formatDate(reply.date)}
      </div>
      <div className="font-extrabold text-[18px] tracking-[-0.005em]">
        {reply.kind} from {reply.from}
      </div>
      {reply.subject && (
        <div className="text-[13px] text-grey-6 mt-1 italic">{reply.subject}</div>
      )}
      <div className="font-serif text-[16px] text-grey-6 mt-3 space-y-3 leading-[1.55]">
        {reply.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </li>
  );
}
