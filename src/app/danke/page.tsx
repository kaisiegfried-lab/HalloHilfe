import type { Metadata } from "next";
import Link from "next/link";

// Eigener Titel; "robots: index false", damit diese Bestätigungsseite
// nicht in Google-Suchergebnissen auftaucht.
export const metadata: Metadata = {
  title: "Danke – HalloHilfe",
  robots: { index: false },
};

// Bestätigungsseite nach dem Absenden einer Anfrage.
// Schafft Vertrauen: persönliche Rückmeldung statt automatischer Buchung.
export default function DankePage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-center px-5 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-3xl">
        ✓
      </div>

      <h1 className="mt-6 text-3xl font-bold">Vielen Dank!</h1>

      <p className="mt-4 text-lg text-tinte-hell">
        Ich prüfe Ihr Anliegen und melde mich persönlich bei Ihnen, um alles
        Weitere zu besprechen.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-burgund px-6 py-4 text-lg font-bold text-creme transition-colors hover:bg-burgund-dunkel"
      >
        Zurück zur Startseite
      </Link>
    </main>
  );
}
