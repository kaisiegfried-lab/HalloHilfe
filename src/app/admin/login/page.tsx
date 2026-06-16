"use client";

// Login-Seite für den Admin-Bereich.
// "use client", weil wir Eingaben und Klicks im Browser brauchen.
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  // Merkt sich, ob gerade eingeloggt wird (verhindert Doppelklick).
  const [sendet, setSendet] = useState(false);
  // Fehlermeldung, falls der Login nicht klappt.
  const [fehler, setFehler] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendet(true);
    setFehler("");

    // E-Mail und Passwort aus dem Formular holen.
    const daten = Object.fromEntries(new FormData(e.currentTarget).entries());

    // Bei Supabase mit E-Mail + Passwort anmelden.
    const { error } = await supabase.auth.signInWithPassword({
      email: String(daten.email),
      password: String(daten.passwort),
    });

    if (error) {
      // Bei falschen Daten: freundlichen Hinweis zeigen und auf der Seite bleiben.
      setFehler("E-Mail oder Passwort ist nicht richtig. Bitte erneut versuchen.");
      setSendet(false);
      return;
    }

    // Erfolg: weiter zum Admin-Dashboard.
    router.push("/admin");
  }

  // Gleiche Stilklassen wie im Anfrageformular (große, klare Felder).
  const feldKlasse =
    "w-full rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg outline-none focus:border-burgund";
  const labelKlasse = "block text-lg font-semibold mb-1";

  return (
    <main className="mx-auto w-full max-w-md px-5 py-10">
      <h1 className="text-3xl font-bold">Admin-Anmeldung</h1>
      <p className="mt-1 text-tinte-hell">
        Bitte melden Sie sich an, um die Anfragen zu sehen.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {/* E-Mail */}
        <div>
          <label htmlFor="email" className={labelKlasse}>
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={feldKlasse}
          />
        </div>

        {/* Passwort */}
        <div>
          <label htmlFor="passwort" className={labelKlasse}>
            Passwort
          </label>
          <input
            id="passwort"
            name="passwort"
            type="password"
            required
            autoComplete="current-password"
            className={feldKlasse}
          />
        </div>

        {/* Fehlermeldung – nur sichtbar, wenn etwas schiefging. */}
        {fehler && (
          <p className="rounded-xl bg-burgund/10 px-4 py-3 text-burgund" role="alert">
            {fehler}
          </p>
        )}

        {/* Anmelde-Button */}
        <button
          type="submit"
          disabled={sendet}
          className="mt-2 rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sendet ? "Wird angemeldet …" : "Anmelden"}
        </button>
      </form>
    </main>
  );
}
