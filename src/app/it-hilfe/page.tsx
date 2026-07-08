"use client";

// KI-IT-Soforthilfe: Nutzer:in stellt eine Technikfrage, die Server-Route
// /api/it-hilfe beantwortet sie anhand der hinterlegten Anleitungen.
import { useState, type FormEvent } from "react";
import Link from "next/link";

const MAX_FRAGE_LAENGE = 500;

type Antwort = {
  gefunden: boolean;
  antwort: string;
  quelle: string | null;
};

export default function ItHilfePage() {
  const [frage, setFrage] = useState("");
  const [sendet, setSendet] = useState(false);
  const [antwort, setAntwort] = useState<Antwort | null>(null);
  const [fehler, setFehler] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendet(true);
    setFehler(null);
    setAntwort(null);

    try {
      const res = await fetch("/api/it-hilfe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ frage }),
      });
      const daten = await res.json();

      if (!res.ok || !daten.ok) {
        setFehler(daten.grund ?? "Die Frage konnte gerade nicht beantwortet werden.");
        return;
      }

      setAntwort(daten);
    } catch {
      setFehler("Die Frage konnte gerade nicht beantwortet werden.");
    } finally {
      setSendet(false);
    }
  }

  const feldKlasse =
    "w-full rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg outline-none focus:border-burgund";
  const labelKlasse = "block text-lg font-semibold mb-1";

  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">IT-Soforthilfe</h1>
      <p className="mt-1 text-tinte-hell">
        Stellen Sie Ihre Technikfrage – zum Beispiel zu Handy, WhatsApp, E-Mail
        oder WLAN. Sie bekommen sofort eine Schritt-für-Schritt-Antwort.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="frage" className={labelKlasse}>
            Ihre Frage
          </label>
          <textarea
            id="frage"
            name="frage"
            required
            rows={4}
            maxLength={MAX_FRAGE_LAENGE}
            value={frage}
            onChange={(e) => setFrage(e.target.value)}
            placeholder="z. B. Wie sende ich ein Foto per WhatsApp?"
            className={feldKlasse}
          />
          <p className="mt-1 text-right text-sm text-tinte-hell">
            {frage.length}/{MAX_FRAGE_LAENGE} Zeichen
          </p>
        </div>

        <button
          type="submit"
          disabled={sendet || frage.trim().length === 0}
          className="rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sendet ? "Frage wird beantwortet …" : "Frage stellen"}
        </button>
      </form>

      {/* Antwort der KI, wenn eine passende Anleitung gefunden wurde. */}
      {antwort && antwort.gefunden && (
        <div className="mt-6 rounded-xl border border-creme-dunkel bg-white p-4 shadow-sm">
          <p className="whitespace-pre-wrap text-lg">{antwort.antwort}</p>
          {antwort.quelle && (
            <p className="mt-3 inline-block rounded-full bg-creme-dunkel px-3 py-1 text-sm font-semibold text-tinte">
              Quelle: {antwort.quelle}
            </p>
          )}
        </div>
      )}

      {/* Ehrlicher Rückfallweg: keine passende Anleitung gefunden ODER
          technischer Fehler. Bietet Telefon/WhatsApp wie im Anfrageformular. */}
      {((antwort && !antwort.gefunden) || fehler) && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-burgund bg-creme px-4 py-4 text-lg text-tinte"
        >
          <p className="font-semibold text-burgund">
            {antwort && !antwort.gefunden
              ? antwort.antwort
              : fehler}
          </p>
          <p className="mt-1">Melden Sie sich gerne direkt bei mir:</p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+4915112345678"
              className="rounded-xl bg-gold px-5 py-3 text-center text-lg font-bold text-tinte transition-colors hover:bg-gold-dunkel"
            >
              📞 Anrufen: +49 151 12345678
            </a>
            <a
              href="https://wa.me/4915112345678"
              className="rounded-xl border border-gold px-5 py-3 text-center text-lg font-bold text-burgund transition-colors hover:bg-gold/10"
            >
              💬 WhatsApp: +49 151 12345678
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
