/**
 * Shared shape every petition data file implements.
 * Keeps Faq, SignBlock, SignerMarquee, PetitionForm, PetitionCta generic.
 */

export type Signer = { name: string; city: string; time: string };
export type FaqItem = { q: string; a: string };

export type Petition = {
  /** "Netflix" | "PayPal" | "ElevenLabs" — used in trust copy ("delivered to {target}") */
  target: string;
  /** "01" / "03" / "05" — used in nav crumbs and footer */
  num: string;
  changeOrgUrl: string;
  signatures: number;
  target_count: number;
  /** Petition-specific accent color hex (red for Netflix, blue for PayPal, etc.) */
  accent: string;
  signers: Signer[];
  faq: FaqItem[];
};
