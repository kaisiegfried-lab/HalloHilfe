"use client";

// Anfrageformular. "use client", weil wir Eingaben/Klicks (Interaktion)
// im Browser brauchen – z.B. das Einblenden des Felds für eine andere Person.
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

// Auswahl der Leistungen – passend zur Startseite.
const LEISTUNGEN = [
  "Einkauf",
  "Garten",
  "Technik",
  "Begleitung",
  "Kleine Erledigungen",
  "Sonstige Hilfe",
];

export default function AnfragePage() {
  const router = useRouter();
  // Merkt sich, ob die Hilfe für eine andere Person ist.
  const [fuerAndere, setFuerAndere] = useState(false);
  // Merkt sich, ob das Formular gerade abgeschickt wird (verhindert Doppelklick).
  const [sendet, setSendet] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendet(true);

    // Eingaben aus dem Formular einsammeln.
    const daten = Object.fromEntries(new FormData(e.currentTarget).entries());

    // Spam-Schutz (Honeypot): Das Feld "website" ist für Menschen unsichtbar.
    // Ist es ausgefüllt, war es ein Bot – wir speichern nichts und schicken
    // keine Mail, tun aber so, als hätte alles geklappt.
    if (daten.website) {
      router.push("/danke");
      return;
    }

    // Anfrage in der Supabase-Datenbank speichern (Tabelle "anfragen").
    const { error } = await supabase.from("anfragen").insert({
      name: daten.name,
      telefon: daten.telefon,
      email: daten.email,
      hilfe_fuer: daten.hilfe_fuer,
      senior_name: daten.senior_name,
      leistung: daten.leistung,
      ort: daten.ort,
      wunschdatum: daten.wunschdatum,
      beschreibung: daten.beschreibung,
    });

    if (error) {
      // Bei einem Fehler: Hinweis zeigen und auf der Seite bleiben.
      // .message ausgeben, weil Supabase-Fehler sonst nur als leeres {} erscheinen.
      console.error("Speichern fehlgeschlagen:", error.message);
      alert(
        "Es tut uns leid – das Absenden hat nicht geklappt. Bitte versuchen Sie es noch einmal."
      );
      setSendet(false);
      return;
    }

    // Den Anbieter per E-Mail über die neue Anfrage informieren.
    // Schlägt der Versand fehl, ist die Anfrage trotzdem gespeichert –
    // deshalb blockiert dieser Schritt den Ablauf nicht.
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(daten),
      });
    } catch (benachrichtigungsFehler) {
      console.error("Benachrichtigung fehlgeschlagen:", benachrichtigungsFehler);
    }

    // Erfolg: weiter zur Bestätigungsseite.
    router.push("/danke");
  }

  // Gemeinsame Stilklassen für Eingabefelder (große, klare Felder).
  const feldKlasse =
    "w-full rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg outline-none focus:border-burgund";
  const labelKlasse = "block text-lg font-semibold mb-1";

  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Hilfe anfragen</h1>
      <p className="mt-1 text-tinte-hell">
        Füllen Sie das Formular aus – ich melde mich persönlich bei Ihnen.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        {/* Spam-Falle (Honeypot): für Menschen unsichtbar – weit aus dem Bild
            geschoben und vor Screenreadern/Tab-Taste versteckt. Nur Bots
            füllen dieses Feld aus, echte Besucher sehen es nie. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
          <label htmlFor="website">Bitte dieses Feld leer lassen</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelKlasse}>
            Ihr Name
          </label>
          <input id="name" name="name" type="text" required className={feldKlasse} />
        </div>

        {/* Telefon */}
        <div>
          <label htmlFor="telefon" className={labelKlasse}>
            Telefonnummer
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            className={feldKlasse}
          />
        </div>

        {/* E-Mail (optional) */}
        <div>
          <label htmlFor="email" className={labelKlasse}>
            E-Mail <span className="font-normal text-tinte-hell">(freiwillig)</span>
          </label>
          <input id="email" name="email" type="email" className={feldKlasse} />
        </div>

        {/* Hilfe für wen? */}
        <fieldset>
          <legend className={labelKlasse}>Für wen ist die Hilfe?</legend>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg">
              <input
                type="radio"
                name="hilfe_fuer"
                value="selbst"
                defaultChecked
                onChange={() => setFuerAndere(false)}
                className="h-5 w-5"
              />
              Für mich selbst
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg">
              <input
                type="radio"
                name="hilfe_fuer"
                value="andere"
                onChange={() => setFuerAndere(true)}
                className="h-5 w-5"
              />
              Für eine andere Person
            </label>
          </div>
        </fieldset>

        {/* Name der hilfebedürftigen Person – nur bei "andere Person" */}
        {fuerAndere && (
          <div>
            <label htmlFor="senior_name" className={labelKlasse}>
              Name der Person, die Hilfe braucht
            </label>
            <input
              id="senior_name"
              name="senior_name"
              type="text"
              required
              className={feldKlasse}
            />
          </div>
        )}

        {/* Gewünschte Leistung */}
        <div>
          <label htmlFor="leistung" className={labelKlasse}>
            Womit können wir helfen?
          </label>
          <select id="leistung" name="leistung" required defaultValue="" className={feldKlasse}>
            <option value="" disabled>
              Bitte wählen …
            </option>
            {LEISTUNGEN.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Ort / Region */}
        <div>
          <label htmlFor="ort" className={labelKlasse}>
            Ort / Region
          </label>
          <input id="ort" name="ort" type="text" required className={feldKlasse} />
        </div>

        {/* Wunschdatum (optional) */}
        <div>
          <label htmlFor="wunschdatum" className={labelKlasse}>
            Wunschtermin{" "}
            <span className="font-normal text-tinte-hell">(freiwillig)</span>
          </label>
          <input
            id="wunschdatum"
            name="wunschdatum"
            type="text"
            placeholder="z.B. nächste Woche vormittags"
            className={feldKlasse}
          />
        </div>

        {/* Beschreibung */}
        <div>
          <label htmlFor="beschreibung" className={labelKlasse}>
            Beschreiben Sie Ihr Anliegen
          </label>
          <textarea
            id="beschreibung"
            name="beschreibung"
            required
            rows={4}
            className={feldKlasse}
          />
        </div>

        {/* Zustimmung Kontaktaufnahme + Datenschutzhinweis */}
        <label className="flex items-start gap-3 text-base">
          <input type="checkbox" name="zustimmung" required className="mt-1 h-5 w-5" />
          <span>
            Ich bin damit einverstanden, dass ich zwecks Rückmeldung kontaktiert
            werde. Meine Angaben werden gemäß{" "}
            <Link href="/datenschutz" className="text-burgund underline">
              Datenschutzerklärung
            </Link>{" "}
            verarbeitet.
          </span>
        </label>

        {/* Disclaimer */}
        <label className="flex items-start gap-3 text-base">
          <input type="checkbox" name="hinweis" required className="mt-1 h-5 w-5" />
          <span>
            Mir ist klar: HalloHilfe bietet <strong>keine Pflege</strong>, keine
            medizinischen Leistungen und keine Rechtsberatung.
          </span>
        </label>

        {/* Absenden */}
        <button
          type="submit"
          disabled={sendet}
          className="mt-2 rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sendet ? "Wird gesendet …" : "Anfrage absenden"}
        </button>
      </form>
    </main>
  );
}
