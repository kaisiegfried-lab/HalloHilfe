import type { Metadata } from "next";
import Link from "next/link";

// Eigener Seitentitel + Beschreibung für Browser-Tab und Suchmaschinen.
export const metadata: Metadata = {
  title: "Leistungen – HalloHilfe",
  description:
    "Womit ich helfe: Einkauf, Garten, Technik, Begleitung und kleine Erledigungen – persönliche Alltagshilfe in Konstanz.",
};

// Leistungsübersicht – erklärt jede Hilfe-Art verständlich.
// Daten als Array, damit wir sie leicht erweitern können.
const LEISTUNGEN = [
  {
    icon: "🛒",
    name: "Einkauf",
    text: "Hilfe beim Einkaufen oder Übernahme kleiner Einkäufe nach Absprache.",
  },
  {
    icon: "🌿",
    name: "Garten",
    text: "Einfache Gartenarbeiten wie Rasenmähen, Gießen oder leichte Unterstützung im Außenbereich.",
  },
  {
    icon: "💻",
    name: "Technik",
    text: "Unterstützung bei einfachen Fragen rund um Handy, Tablet, WhatsApp, E-Mail, WLAN oder Videoanrufe.",
  },
  {
    icon: "🚶",
    name: "Begleitung",
    text: "Begleitung zu Terminen und Behörden sowie organisatorische Unterstützung. Hinweis: keine Rechtsberatung.",
  },
  {
    icon: "📦",
    name: "Kleine Erledigungen",
    text: "Hilfe bei alltäglichen Aufgaben wie Post, Abholungen oder Botengängen.",
  },
  {
    icon: "💬",
    name: "Sonstige Hilfe",
    text: "Sie haben ein anderes Anliegen? Schreiben Sie es einfach ins Formular – wir schauen, ob wir helfen können.",
  },
];

export default function LeistungenPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Unsere Leistungen</h1>
      <p className="mt-1 text-tinte-hell">
        Persönliche Alltagshilfe – einfach und verständlich.
      </p>

      {/* Liste der Leistungen */}
      <div className="mt-6 flex flex-col gap-3">
        {LEISTUNGEN.map((l) => (
          <div
            key={l.name}
            className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-creme-dunkel text-xl">
                <span aria-hidden>{l.icon}</span>
              </div>
              <h2 className="text-xl font-bold">{l.name}</h2>
            </div>
            <p className="mt-2 text-tinte-hell">{l.text}</p>
            {l.name === "Technik" && (
              <Link
                href="/it-hilfe"
                className="mt-2 inline-block font-semibold text-burgund underline"
              >
                Jetzt Technikfrage stellen →
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Rechtliche Abgrenzung */}
      <p className="mt-6 rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
        HalloHilfe bietet praktische Alltagshilfe. Es werden <strong>keine
        Pflegeleistungen</strong>, keine medizinischen Leistungen und keine
        Rechtsberatung angeboten. Bei akuten Notfällen wenden Sie sich bitte
        direkt an die offizielle Notrufnummer.
      </p>

      {/* Haupt-Button zum Formular */}
      <Link
        href="/anfrage"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
      >
        <span aria-hidden>📞</span> Jetzt Hilfe holen
      </Link>
    </main>
  );
}
