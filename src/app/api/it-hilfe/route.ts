// Server-Route für die KI-IT-Soforthilfe. Läuft nur auf dem Server – der
// Gateway-Schlüssel ist hier sicher und gelangt nie in den Browser.
import { APICallError } from "ai";
import { beantworteFrage } from "@/lib/it-hilfe";
import { supabase } from "@/lib/supabase";

// Protokolliert die Frage in Supabase, damit im Admin-Bereich sichtbar wird,
// welche Themen die Anleitungen nicht abdecken. Fehler beim Loggen dürfen die
// Antwort an die Nutzer:in nie verhindern.
async function protokolliere(frage: string, gefunden: boolean, quelle: string | null) {
  try {
    const { error } = await supabase
      .from("it_hilfe_fragen")
      .insert({ frage, gefunden, quelle });
    if (error) {
      console.error("IT-Hilfe-Frage konnte nicht protokolliert werden:", error);
    }
  } catch (error) {
    console.error("IT-Hilfe-Frage konnte nicht protokolliert werden:", error);
  }
}

const MAX_FRAGE_LAENGE = 500;

export async function POST(request: Request) {
  const { frage } = await request.json();

  // Leere oder zu lange Fragen ohne teuren Modellaufruf abweisen.
  if (typeof frage !== "string" || frage.trim().length === 0) {
    return Response.json(
      { ok: false, grund: "Bitte geben Sie eine Frage ein." },
      { status: 400 }
    );
  }
  if (frage.length > MAX_FRAGE_LAENGE) {
    return Response.json(
      {
        ok: false,
        grund: `Die Frage darf höchstens ${MAX_FRAGE_LAENGE} Zeichen lang sein.`,
      },
      { status: 400 }
    );
  }

  try {
    const antwort = await beantworteFrage(frage);
    await protokolliere(frage, antwort.gefunden, antwort.quelle);
    return Response.json({ ok: true, ...antwort });
  } catch (error) {
    console.error("KI-IT-Hilfe fehlgeschlagen:", error);

    if (APICallError.isInstance(error)) {
      // Kostenlimit erreicht oder zu viele Anfragen: höflich abbrechen statt
      // eine ausgedachte Antwort zu riskieren.
      if (error.statusCode === 402 || error.statusCode === 429) {
        return Response.json(
          {
            ok: false,
            grund: "Der Dienst ist gerade ausgelastet. Bitte später erneut versuchen.",
          },
          { status: 503 }
        );
      }
    }

    return Response.json(
      { ok: false, grund: "Die Frage konnte gerade nicht beantwortet werden." },
      { status: 502 }
    );
  }
}
