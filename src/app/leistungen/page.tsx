import type { Metadata } from "next";
import Link from "next/link";
import { LEISTUNGEN } from "@/lib/leistungen";
import { KontaktButtons } from "@/components/KontaktButtons";

// Eigener Seitentitel + Beschreibung für Browser-Tab und Suchmaschinen.
export const metadata: Metadata = {
  title: "Leistungen – HalloHilfe",
  description:
    "Womit ich helfe: Einkauf, Garten, Technik, Begleitung und kleine Erledigungen – persönliche Alltagshilfe in Konstanz.",
};

export default function LeistungenPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Unsere Leistungen</h1>
      <p className="mt-1 text-tinte-hell">
        Persönliche Alltagshilfe – einfach und verständlich. Tippen Sie auf
        einen Bereich für mehr Infos.
      </p>

      {/* Liste der Leistungen – jede führt zu ihrer eigenen Unterseite */}
      <div className="mt-6 flex flex-col gap-3">
        {LEISTUNGEN.map((l) => (
          <Link
            key={l.slug}
            href={`/leistungen/${l.slug}`}
            className="flex items-center gap-3 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-creme-dunkel text-xl">
              <span aria-hidden>{l.icon}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">{l.name}</h2>
              <p className="text-tinte-hell">{l.kurztext}</p>
            </div>
          </Link>
        ))}

        {/* Sonstige Anliegen – kein eigener Bereich, direkt ins Formular */}
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-creme-dunkel text-xl">
              <span aria-hidden>💬</span>
            </div>
            <h2 className="text-xl font-bold">Sonstige Hilfe</h2>
          </div>
          <p className="mt-2 text-tinte-hell">
            Sie haben ein anderes Anliegen? Schreiben Sie es einfach ins
            Formular – wir schauen, ob wir helfen können.
          </p>
        </div>
      </div>

      {/* Hinweis auf die Preisseite – Transparenz direkt bei den Leistungen */}
      <Link
        href="/preise"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-burgund bg-white px-6 py-4 text-center text-lg font-bold text-burgund shadow-sm transition-colors hover:bg-burgund/5"
      >
        <span aria-hidden>💶</span> Was kostet das? Preise ansehen
      </Link>

      {/* Rechtliche Abgrenzung */}
      <p className="mt-6 rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
        HalloHilfe bietet praktische Alltagshilfe. Es werden <strong>keine
        Pflegeleistungen</strong>, keine medizinischen Leistungen und keine
        Rechtsberatung angeboten. Bei akuten Notfällen wenden Sie sich bitte
        direkt an die offizielle Notrufnummer.
      </p>

      {/* Kontaktwege */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tinte-hell">
          So erreichen Sie mich
        </p>
        <KontaktButtons />
      </div>
    </main>
  );
}
