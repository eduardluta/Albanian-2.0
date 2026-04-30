import Link from "next/link";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        gap: "1rem",
        color: "#fff",
        background: "#0a0a0a",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.04em", margin: 0 }}>404</h1>
      <p style={{ fontSize: 16, color: "#b7b7bd", maxWidth: 420 }}>
        This page does not exist. Yet.
      </p>
      <Link
        href={`/${defaultLocale}/`}
        style={{
          marginTop: 8,
          padding: "12px 24px",
          background: "#E11D2A",
          color: "white",
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 14,
          textDecoration: "none",
        }}
      >
        Back home →
      </Link>
    </main>
  );
}
