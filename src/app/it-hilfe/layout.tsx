import type { Metadata } from "next";

// Die IT-Hilfe-Seite selbst ist interaktiv ("use client") und kann daher
// keinen eigenen Titel setzen. Dieses kleine Layout übernimmt das für sie.
export const metadata: Metadata = {
  title: "KI-IT-Soforthilfe – HalloHilfe",
  description:
    "Stellen Sie Ihre Technikfrage zu Handy, WhatsApp, E-Mail oder WLAN und bekommen Sie sofort eine Schritt-für-Schritt-Antwort in einfacher Sprache.",
};

export default function ItHilfeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
