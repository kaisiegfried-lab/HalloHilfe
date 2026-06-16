import type { Metadata } from "next";

// Die Anfrage-Seite selbst ist interaktiv ("use client") und kann daher
// keinen eigenen Titel setzen. Dieses kleine Layout übernimmt das für sie.
export const metadata: Metadata = {
  title: "Hilfe anfragen – HalloHilfe",
  description:
    "Stellen Sie unkompliziert eine Anfrage für persönliche Alltagshilfe in Konstanz. Ich melde mich persönlich bei Ihnen.",
};

export default function AnfrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
