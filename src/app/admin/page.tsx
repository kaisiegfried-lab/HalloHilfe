"use client";

// Geschütztes Admin-Dashboard: zeigt alle Anfragen (neueste zuerst).
// "use client", weil wir den Login-Status im Browser prüfen und Daten laden.
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

// Form einer Anfrage, so wie sie in der Tabelle "anfragen" steht.
type Anfrage = {
  id: number;
  created_at: string;
  name: string;
  telefon: string;
  email: string | null;
  hilfe_fuer: string;
  senior_name: string | null;
  leistung: string;
  ort: string;
  wunschdatum: string | null;
  beschreibung: string;
  status: string;
  archiviert: boolean;
};

// Übersetzt den gespeicherten Status-Wert in einen lesbaren Text.
const STATUS_TEXT: Record<string, string> = {
  neu: "Neu",
  in_pruefung: "In Prüfung",
  bestaetigt: "Bestätigt",
  erledigt: "Erledigt",
  abgelehnt: "Abgelehnt",
};

// Knöpfe für den Filter: "alle" plus jeder Status.
const FILTER_OPTIONEN = [
  { wert: "alle", text: "Alle" },
  { wert: "neu", text: "Neu" },
  { wert: "in_pruefung", text: "In Prüfung" },
  { wert: "bestaetigt", text: "Bestätigt" },
  { wert: "erledigt", text: "Erledigt" },
  { wert: "abgelehnt", text: "Abgelehnt" },
  { wert: "archiv", text: "Archiv" },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  // Ladezustand: solange wir Login prüfen und Daten holen.
  const [laedt, setLaedt] = useState(true);
  // Die geladenen Anfragen.
  const [anfragen, setAnfragen] = useState<Anfrage[]>([]);
  // Fehlertext, falls das Laden nicht klappt.
  const [fehler, setFehler] = useState("");
  // Aktiver Filter ("alle" = alles anzeigen).
  const [filter, setFilter] = useState("alle");

  useEffect(() => {
    async function ladeDaten() {
      // 1) Login prüfen. Ohne gültige Sitzung zurück zum Login.
      const { data: sitzung } = await supabase.auth.getSession();
      if (!sitzung.session) {
        router.replace("/admin/login");
        return;
      }

      // 2) Anfragen laden, neueste zuerst.
      const { data, error } = await supabase
        .from("anfragen")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setFehler("Die Anfragen konnten nicht geladen werden.");
        setLaedt(false);
        return;
      }

      setAnfragen(data ?? []);
      setLaedt(false);
    }

    ladeDaten();
  }, [router]);

  // Abmelden und zurück zum Login.
  async function abmelden() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  // Datum hübsch auf Deutsch anzeigen (z.B. 16.06.2026).
  function datumFormat(iso: string) {
    return new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  // Nur die Anfragen, die zum aktiven Filter passen.
  // "Archiv" zeigt die archivierten; alle anderen Filter blenden archivierte aus.
  const gefiltert =
    filter === "archiv"
      ? anfragen.filter((a) => a.archiviert)
      : filter === "alle"
        ? anfragen.filter((a) => !a.archiviert)
        : anfragen.filter((a) => !a.archiviert && a.status === filter);

  if (laedt) {
    return (
      <main className="mx-auto w-full max-w-2xl px-5 py-10">
        <p className="text-lg text-tinte-hell">Wird geladen …</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-8">
      {/* Kopfzeile mit Titel und Abmelden-Button */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Anfragen</h1>
        <button
          onClick={abmelden}
          className="rounded-xl border border-creme-dunkel bg-white px-4 py-2 font-semibold text-burgund transition-colors hover:bg-creme"
        >
          Abmelden
        </button>
      </div>

      <Link href="/admin/it-hilfe-fragen" className="mt-3 inline-block text-burgund underline">
        IT-Hilfe: gestellte Fragen ansehen →
      </Link>

      {/* Filter-Knöpfe nach Status */}
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTER_OPTIONEN.map((f) => (
          <button
            key={f.wert}
            onClick={() => setFilter(f.wert)}
            className={
              filter === f.wert
                ? "rounded-full bg-burgund px-4 py-2 font-semibold text-white"
                : "rounded-full border border-creme-dunkel bg-white px-4 py-2 font-semibold text-tinte transition-colors hover:bg-creme"
            }
          >
            {f.text}
          </button>
        ))}
      </div>

      {/* Fehlerhinweis, falls das Laden scheiterte */}
      {fehler && (
        <p className="mt-6 rounded-xl bg-burgund/10 px-4 py-3 text-burgund" role="alert">
          {fehler}
        </p>
      )}

      {/* Hinweis, wenn es (für den Filter) keine Anfragen gibt */}
      {!fehler && gefiltert.length === 0 && (
        <p className="mt-6 text-lg text-tinte-hell">
          {filter === "archiv"
            ? "Das Archiv ist leer."
            : anfragen.length === 0
              ? "Es sind noch keine Anfragen vorhanden."
              : "Keine Anfragen mit diesem Status."}
        </p>
      )}

      {/* Liste der Anfragen */}
      <ul className="mt-6 flex flex-col gap-4">
        {gefiltert.map((a) => (
          <li key={a.id}>
            <Link
              href={`/admin/anfragen/${a.id}`}
              className="block rounded-xl border border-creme-dunkel bg-white p-4 transition-colors hover:border-burgund"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xl font-semibold">{a.name}</span>
                {/* Status-Schild */}
                <span className="rounded-full bg-creme px-3 py-1 text-sm font-semibold text-tinte">
                  {STATUS_TEXT[a.status] ?? a.status}
                </span>
              </div>
              <p className="text-sm text-tinte-hell">{datumFormat(a.created_at)}</p>
              <p className="mt-1 text-lg">{a.leistung}</p>
              <p className="text-tinte-hell">
                {a.ort} · {a.telefon}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
