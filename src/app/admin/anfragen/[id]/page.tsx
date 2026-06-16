"use client";

// Detailansicht einer einzelnen Anfrage: alle Angaben sehen,
// Status ändern und eine interne Notiz speichern.
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

// Auswahl der Status-Stufen: gespeicherter Wert + Anzeigetext.
const STATUS_OPTIONEN = [
  { wert: "neu", text: "Neu" },
  { wert: "in_pruefung", text: "In Prüfung" },
  { wert: "bestaetigt", text: "Bestätigt" },
  { wert: "erledigt", text: "Erledigt" },
  { wert: "abgelehnt", text: "Abgelehnt" },
];

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
  notiz: string | null;
};

export default function AnfrageDetailPage() {
  const router = useRouter();
  // ID aus der Adresse, z.B. /admin/anfragen/12 -> "12".
  const params = useParams<{ id: string }>();

  const [laedt, setLaedt] = useState(true);
  const [anfrage, setAnfrage] = useState<Anfrage | null>(null);
  // Bearbeitbare Felder (Status + Notiz).
  const [status, setStatus] = useState("neu");
  const [notiz, setNotiz] = useState("");
  // Zustände fürs Speichern.
  const [speichert, setSpeichert] = useState(false);
  const [gespeichert, setGespeichert] = useState(false);
  const [fehler, setFehler] = useState("");

  useEffect(() => {
    async function ladeDaten() {
      // Login prüfen, sonst zurück zum Login.
      const { data: sitzung } = await supabase.auth.getSession();
      if (!sitzung.session) {
        router.replace("/admin/login");
        return;
      }

      // Genau diese eine Anfrage laden.
      const { data, error } = await supabase
        .from("anfragen")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error || !data) {
        setFehler("Diese Anfrage wurde nicht gefunden.");
        setLaedt(false);
        return;
      }

      setAnfrage(data);
      setStatus(data.status ?? "neu");
      setNotiz(data.notiz ?? "");
      setLaedt(false);
    }

    ladeDaten();
  }, [router, params.id]);

  // Status und Notiz in der Datenbank speichern.
  async function speichern() {
    setSpeichert(true);
    setGespeichert(false);
    setFehler("");

    const { error } = await supabase
      .from("anfragen")
      .update({ status, notiz })
      .eq("id", params.id);

    if (error) {
      setFehler("Speichern hat nicht geklappt. Bitte erneut versuchen.");
      setSpeichert(false);
      return;
    }

    setSpeichert(false);
    setGespeichert(true);
  }

  function datumFormat(iso: string) {
    return new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  const feldKlasse =
    "w-full rounded-xl border border-creme-dunkel bg-white px-4 py-3 text-lg outline-none focus:border-burgund";
  const labelKlasse = "block text-lg font-semibold mb-1";

  if (laedt) {
    return (
      <main className="mx-auto w-full max-w-2xl px-5 py-10">
        <p className="text-lg text-tinte-hell">Wird geladen …</p>
      </main>
    );
  }

  if (!anfrage) {
    return (
      <main className="mx-auto w-full max-w-2xl px-5 py-10">
        <Link href="/admin" className="text-burgund font-semibold">
          ← Zurück zur Übersicht
        </Link>
        <p className="mt-6 rounded-xl bg-burgund/10 px-4 py-3 text-burgund">
          {fehler || "Diese Anfrage wurde nicht gefunden."}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-8">
      <Link href="/admin" className="text-burgund font-semibold">
        ← Zurück zur Übersicht
      </Link>

      <h1 className="mt-3 text-3xl font-bold">{anfrage.name}</h1>
      <p className="mt-1 text-tinte-hell">Eingegangen am {datumFormat(anfrage.created_at)}</p>

      {/* Angaben aus der Anfrage (nur lesen) */}
      <dl className="mt-6 flex flex-col gap-3 rounded-xl border border-creme-dunkel bg-white p-5">
        <Zeile label="Telefon" wert={anfrage.telefon} />
        <Zeile label="E-Mail" wert={anfrage.email || "—"} />
        <Zeile
          label="Hilfe für"
          wert={anfrage.hilfe_fuer === "andere" ? "Eine andere Person" : "Sich selbst"}
        />
        {anfrage.senior_name && <Zeile label="Person" wert={anfrage.senior_name} />}
        <Zeile label="Leistung" wert={anfrage.leistung} />
        <Zeile label="Ort" wert={anfrage.ort} />
        <Zeile label="Wunschtermin" wert={anfrage.wunschdatum || "—"} />
        <div>
          <dt className="font-semibold text-tinte-hell">Anliegen</dt>
          <dd className="mt-1 whitespace-pre-wrap text-lg">{anfrage.beschreibung}</dd>
        </div>
      </dl>

      {/* Bearbeitung: Status und interne Notiz */}
      <div className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="status" className={labelKlasse}>
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={feldKlasse}
          >
            {STATUS_OPTIONEN.map((s) => (
              <option key={s.wert} value={s.wert}>
                {s.text}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notiz" className={labelKlasse}>
            Interne Notiz <span className="font-normal text-tinte-hell">(nur für Sie sichtbar)</span>
          </label>
          <textarea
            id="notiz"
            value={notiz}
            onChange={(e) => setNotiz(e.target.value)}
            rows={4}
            className={feldKlasse}
          />
        </div>

        {/* Fehler- oder Erfolgshinweis */}
        {fehler && (
          <p className="rounded-xl bg-burgund/10 px-4 py-3 text-burgund" role="alert">
            {fehler}
          </p>
        )}
        {gespeichert && (
          <p className="rounded-xl bg-gold/20 px-4 py-3 font-semibold text-tinte" role="status">
            Gespeichert ✓
          </p>
        )}

        <button
          onClick={speichern}
          disabled={speichert}
          className="rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel disabled:cursor-not-allowed disabled:opacity-60"
        >
          {speichert ? "Wird gespeichert …" : "Speichern"}
        </button>
      </div>
    </main>
  );
}

// Kleine Hilfskomponente für eine "Label: Wert"-Zeile.
function Zeile({ label, wert }: { label: string; wert: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="font-semibold text-tinte-hell">{label}</dt>
      <dd className="text-right text-lg">{wert}</dd>
    </div>
  );
}
