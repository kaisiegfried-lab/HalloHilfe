import Link from "next/link";
import { LEISTUNGEN } from "@/lib/leistungen";
import { KontaktButtons } from "@/components/KontaktButtons";

// Die 4 Hauptkacheln im Raster; "Kleine Erledigungen" bekommt eine eigene,
// volle Zeile weiter unten.
const RASTER_KACHELN = LEISTUNGEN.filter((l) => l.slug !== "kleine-erledigungen");
const KLEINE_ERLEDIGUNGEN = LEISTUNGEN.find((l) => l.slug === "kleine-erledigungen")!;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* 1. Große Wortmarke statt kleiner Kopfzeile */}
      <div className="text-center">
        <p className="font-serif text-[2.5rem] font-bold leading-none text-burgund">
          HalloHilfe
        </p>
        <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-gold" />
        <p className="mt-3 text-sm font-semibold text-tinte-hell">
          Konstanz · Mo–Sa · 8 bis 19 Uhr
        </p>
      </div>

      {/* 2. Überschrift */}
      <h1 className="mt-4 text-center text-xl font-bold leading-tight">
        Was kann ich für Sie tun?
      </h1>

      {/* 3. Drei klar getrennte Kontakt-Buttons: jeder Weg macht sofort klar,
          was beim Antippen passiert (anrufen, schreiben oder Formular). */}
      <div className="mt-5">
        <KontaktButtons />
      </div>

      {/* 4. Service-Karten – jede führt zur eigenen Leistungs-Unterseite */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {RASTER_KACHELN.map((l) => (
          <Link
            key={l.slug}
            href={`/leistungen/${l.slug}`}
            className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-creme-dunkel text-xl">
              <span aria-hidden>{l.icon}</span>
            </div>
            <h2 className="mt-3 text-lg font-bold">{l.name}</h2>
            <p className="mt-1 text-sm text-tinte-hell">{l.kurztext}</p>
          </Link>
        ))}
      </div>

      {/* Kleine Erledigungen – über volle Breite */}
      <Link
        href={`/leistungen/${KLEINE_ERLEDIGUNGEN.slug}`}
        className="mt-3 block rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-creme-dunkel text-xl">
          <span aria-hidden>{KLEINE_ERLEDIGUNGEN.icon}</span>
        </div>
        <h2 className="mt-3 text-lg font-bold">{KLEINE_ERLEDIGUNGEN.name}</h2>
        <p className="mt-1 text-sm text-tinte-hell">{KLEINE_ERLEDIGUNGEN.kurztext}</p>
      </Link>

      {/* Preise – Transparenz schafft Vertrauen, deshalb prominent verlinkt */}
      <Link
        href="/preise"
        className="mt-3 flex items-center gap-3 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-creme-dunkel text-xl">
          <span aria-hidden>💶</span>
        </div>
        <div>
          <h2 className="text-lg font-bold">Preise</h2>
          <p className="text-sm text-tinte-hell">
            Transparent und fair – alles auf einen Blick
          </p>
        </div>
      </Link>

      {/* 5. Anbieter-Karte – führt zur Über-mich-Seite (Vertrauen schaffen) */}
      <Link
        href="/ueber-mich"
        className="mt-3 flex items-center gap-3 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-tinte">
          KS
        </div>
        <div>
          <p className="font-bold">Kai Siegfried</p>
          <p className="text-sm text-tinte-hell">
            Hilft in Konstanz · Mo–Sa · 8 bis 19 Uhr
          </p>
        </div>
      </Link>

      {/* 6. Footer-Satz */}
      <p className="mt-8 text-center text-sm text-tinte-hell">
        Kein Pflegedienst. Kein Notruf. Ein Mensch, der kommt und macht.
      </p>
    </main>
  );
}
