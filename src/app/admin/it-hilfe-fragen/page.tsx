"use client";

// Geschützte Übersicht: zeigt alle Fragen an die KI-IT-Soforthilfe.
// Nicht gefundene Fragen stehen oben, damit Kai sieht, welche Anleitungen fehlen.
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type ItHilfeFrage = {
  id: number;
  created_at: string;
  frage: string;
  gefunden: boolean;
  quelle: string | null;
};

export default function ItHilfeFragenPage() {
  const router = useRouter();
  const [laedt, setLaedt] = useState(true);
  const [fragen, setFragen] = useState<ItHilfeFrage[]>([]);
  const [fehler, setFehler] = useState("");

  useEffect(() => {
    async function ladeDaten() {
      const { data: sitzung } = await supabase.auth.getSession();
      if (!sitzung.session) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("it_hilfe_fragen")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setFehler("Die Fragen konnten nicht geladen werden.");
        setLaedt(false);
        return;
      }

      setFragen(data ?? []);
      setLaedt(false);
    }

    ladeDaten();
  }, [router]);

  function datumFormat(iso: string) {
    return new Date(iso).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  // Nicht gefundene Fragen zuerst – das sind die Lücken in den Anleitungen.
  const sortiert = [...fragen].sort((a, b) => Number(a.gefunden) - Number(b.gefunden));
  const nichtGefundenAnzahl = fragen.filter((f) => !f.gefunden).length;

  if (laedt) {
    return (
      <main className="mx-auto w-full max-w-2xl px-5 py-10">
        <p className="text-lg text-tinte-hell">Wird geladen …</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-8">
      <Link href="/admin" className="text-burgund underline">
        ← Zurück zu den Anfragen
      </Link>

      <h1 className="mt-4 text-3xl font-bold">IT-Hilfe: gestellte Fragen</h1>
      <p className="mt-1 text-tinte-hell">
        {nichtGefundenAnzahl === 0
          ? "Für jede gestellte Frage gab es eine passende Anleitung."
          : `${nichtGefundenAnzahl} Frage(n) ohne passende Anleitung – Kandidaten für neue Anleitungen.`}
      </p>

      {fehler && (
        <p className="mt-6 rounded-xl bg-burgund/10 px-4 py-3 text-burgund" role="alert">
          {fehler}
        </p>
      )}

      {!fehler && sortiert.length === 0 && (
        <p className="mt-6 text-lg text-tinte-hell">
          Es wurden noch keine Fragen gestellt.
        </p>
      )}

      <ul className="mt-6 flex flex-col gap-4">
        {sortiert.map((f) => (
          <li
            key={f.id}
            className="rounded-xl border border-creme-dunkel bg-white p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={
                  f.gefunden
                    ? "rounded-full bg-creme px-3 py-1 text-sm font-semibold text-tinte"
                    : "rounded-full bg-burgund/10 px-3 py-1 text-sm font-semibold text-burgund"
                }
              >
                {f.gefunden ? "Beantwortet" : "Keine Anleitung gefunden"}
              </span>
              <span className="text-sm text-tinte-hell">{datumFormat(f.created_at)}</span>
            </div>
            <p className="mt-2 text-lg">{f.frage}</p>
            {f.quelle && (
              <p className="mt-1 text-sm text-tinte-hell">Quelle: {f.quelle}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
