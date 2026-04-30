import en from "./messages/en";
import sq from "./messages/sq";
import de from "./messages/de";
import type { Locale } from "./config";
import type { Messages } from "./messages/en";

const all: Record<Locale, Messages> = { en, sq, de };

export function getMessages(locale: Locale): Messages {
  return all[locale];
}
