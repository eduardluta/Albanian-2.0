/**
 * Shared shape every petition data file implements.
 * Keeps Faq, SignBlock, SignerMarquee, PetitionForm, PetitionCta generic.
 */

export type Signer = { name: string; city: string; time: string };
export type FaqItem = { q: string; a: string };

/** A reply we received from the company (or any update we want on the timeline). */
export type LetterReply = {
  /** ISO date "2026-04-25" */
  date: string;
  /** "Acknowledgment", "Partial response", "Full reply", "Update" */
  kind: string;
  from: string;
  subject?: string;
  body: string[];
  /** "received" — we got something back. "update" — we published a status update. */
  type: "received" | "update";
};

export type Letter = {
  /** ISO date the letter was sent */
  sentDate: string;
  /** Pretty date for display, e.g. "April 12, 2026" */
  sentDateDisplay: string;
  to: {
    name: string;
    role: string;
    company: string;
    address: string[];
  };
  subject: string;
  salutation: string;
  /** Each paragraph rendered as serif body text. Use plain string per paragraph. */
  body: string[];
  /** Bulleted asks (1./2./3. — rendered as numbered list). */
  asks?: string[];
  /** Trailing paragraphs (after the asks list) */
  closing: string[];
  signOff: string;
  signedBy: {
    name: string;
    role: string;
    behalfOf?: string;
  };
  /** Optional follow-up date phrasing, e.g. "We would welcome a reply by May 30, 2026." */
  replyByDisplay?: string;
  /** Replies received or status updates we've published. Most-recent-first. */
  replies: LetterReply[];
};

export type Petition = {
  /** "Netflix" | "PayPal" | "ElevenLabs" — used in trust copy ("delivered to {target}") */
  target: string;
  /** "01" / "03" / "05" — used in nav crumbs and footer */
  num: string;
  /** URL slug under /p/ — e.g. "netflix", "paypal", "elevenlabs" */
  slug: string;
  changeOrgUrl: string;
  signatures: number;
  target_count: number;
  /** Petition-specific accent color hex (red for Netflix, blue for PayPal, etc.) */
  accent: string;
  signers: Signer[];
  faq: FaqItem[];
  letter: Letter;
};
