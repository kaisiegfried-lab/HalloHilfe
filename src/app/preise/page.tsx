import type { Metadata } from "next";
import Link from "next/link";
import { KontaktButtons } from "@/components/KontaktButtons";

export const metadata: Metadata = {
  title: "Preise – HalloHilfe",
  description:
    "Transparente Preise für persönliche Alltagshilfe im Landkreis Konstanz: fester Stundenpreis, klare Anfahrtspauschalen, keine versteckten Kosten.",
};

// Anfahrts-Zonen: feste Pauschalen statt Kilometer-Abrechnung, damit jede:r
// vor der Buchung weiß, was die Anfahrt kostet ("kein Taxameter-Gefühl").
const ZONEN = [
  {
    name: "Zone 1 – Konstanz und direkte Umgebung",
    orte: "z. B. Konstanz, Allensbach, Reichenau",
    preis: "inklusive",
  },
  {
    name: "Zone 2 – mittlerer Landkreis",
    orte: "z. B. Radolfzell, Singen, Gottmadingen, Steißlingen",
    preis: "8 € pro Termin",
  },
  {
    name: "Zone 3 – übriger Landkreis",
    orte: "z. B. Stockach, Engen, Tengen und die Höri-Gemeinden",
    preis: "15 € pro Termin",
  },
];

export default function PreisePage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Preise</h1>
      <p className="mt-1 text-tinte-hell">
        Klar und ehrlich: Sie wissen vor jedem Termin, was er kostet.
        Keine versteckten Kosten, keine Vertragsbindung.
      </p>

      {/* Stundenpreise */}
      <h2 className="mt-6 text-xl font-bold">Stundenpreise</h2>
      <div className="mt-3 flex flex-col gap-3">
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-lg font-bold">Alltagshilfe</p>
            <p className="shrink-0 text-lg font-bold text-burgund">
              35 € / Stunde
            </p>
          </div>
          <p className="mt-1 text-sm text-tinte-hell">
            Einkauf, Begleitung, Technik-Hilfe vor Ort und kleine Erledigungen.
          </p>
        </div>
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-lg font-bold">Gartenhilfe</p>
            <p className="shrink-0 text-lg font-bold text-burgund">
              40 € / Stunde
            </p>
          </div>
          <p className="mt-1 text-sm text-tinte-hell">
            Rasenmähen, Gießen, Hecke, Laub – mit eigenem Werkzeug. Muss
            Grünschnitt entsorgt werden, sage ich Ihnen die Kosten vorher.
          </p>
        </div>
      </div>
      <p className="mt-3 rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
        Der erste Termin dauert mindestens eine Stunde. Danach rechne ich in
        halben Stunden ab – Sie zahlen nur die Zeit, die ich wirklich da bin.
      </p>

      {/* Anfahrt */}
      <h2 className="mt-8 text-xl font-bold">Anfahrt</h2>
      <p className="mt-1 text-tinte-hell">
        Ich bin im ganzen Landkreis Konstanz für Sie unterwegs. Die Anfahrt
        kostet eine feste Pauschale – je nachdem, wo Sie wohnen:
      </p>
      <div className="mt-3 flex flex-col gap-3">
        {ZONEN.map((zone) => (
          <div
            key={zone.name}
            className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-bold">{zone.name}</p>
              <p className="shrink-0 font-bold text-burgund">{zone.preis}</p>
            </div>
            <p className="mt-1 text-sm text-tinte-hell">{zone.orte}</p>
          </div>
        ))}
      </div>

      {/* Sparen: Pakete und feste Hilfe */}
      <h2 className="mt-8 text-xl font-bold">So sparen Sie</h2>
      <div className="mt-3 flex flex-col gap-3">
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <p className="text-lg font-bold">Stundenpakete</p>
          <p className="mt-1 text-sm text-tinte-hell">
            Stunden im Voraus kaufen und bei jedem Termin einlösen – auch ein
            schönes Geschenk von Angehörigen. Gilt für die Alltagshilfe,
            12 Monate gültig.
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <div className="flex items-baseline justify-between gap-3">
              <p>5 Stunden</p>
              <p className="shrink-0 font-bold text-burgund">
                165 € <span className="font-normal text-tinte-hell">statt 175 €</span>
              </p>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <p>10 Stunden</p>
              <p className="shrink-0 font-bold text-burgund">
                320 € <span className="font-normal text-tinte-hell">statt 350 €</span>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <p className="text-lg font-bold">Feste Hilfe jede Woche</p>
          <p className="mt-1 text-sm text-tinte-hell">
            Ein fester Termin pro Woche, immer zur gleichen Zeit – zum
            Beispiel jeden Dienstag 2 Stunden für{" "}
            <strong className="text-tinte">270 € im Monat</strong>. Die
            Anfahrt ist dabei kostenlos. Abrechnung monatlich,{" "}
            <strong className="text-tinte">jederzeit zum Monatsende kündbar</strong>.
          </p>
        </div>
        <div className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <p className="text-lg font-bold">IT-Hilfe-Chat: kostenlos</p>
          <p className="mt-1 text-sm text-tinte-hell">
            Für schnelle Technikfragen gibt es unseren{" "}
            <Link href="/it-hilfe" className="font-semibold text-burgund underline">
              IT-Hilfe-Chat
            </Link>{" "}
            – rund um die Uhr und ohne Kosten.
          </p>
        </div>
      </div>

      {/* Gut zu wissen: Pflegekasse + Steuer */}
      <h2 className="mt-8 text-xl font-bold">Gut zu wissen</h2>
      <div className="mt-3 flex flex-col gap-3">
        <div className="rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
          <p className="font-bold text-tinte">
            💶 Zuschuss der Pflegekasse möglich
          </p>
          <p className="mt-1">
            Wer einen Pflegegrad hat (schon ab Pflegegrad 1), bekommt von der
            Pflegekasse jeden Monat einen Entlastungsbetrag für
            Alltagsunterstützung. Sprechen Sie mich an – ich erkläre Ihnen
            gerne, ob und wie Sie ihn für meine Hilfe nutzen können.
          </p>
        </div>
        <div className="rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
          <p className="font-bold text-tinte">🧾 20 % von der Steuer zurück</p>
          <p className="mt-1">
            Hilfe im Haushalt und im Garten können Sie als „haushaltsnahe
            Dienstleistung“ in der Steuererklärung angeben: 20 % des
            Rechnungsbetrags gibt es zurück. Sie bekommen von mir immer eine
            ordentliche Rechnung.
          </p>
        </div>
      </div>

      {/* Kontaktwege */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tinte-hell">
          Fragen zu den Preisen? Rufen Sie einfach an
        </p>
        <KontaktButtons />
      </div>
    </main>
  );
}
