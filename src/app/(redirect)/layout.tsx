import type { ReactNode } from "react";
import "../globals.css";
import { manrope, instrumentSerif } from "../fonts";
import { defaultLocale } from "@/i18n/config";

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLocale} className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
