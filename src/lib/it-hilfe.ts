// Kernlogik der KI-IT-Soforthilfe: nimmt eine Frage entgegen, hängt alle
// Anleitungen als Kontext an ("Context Injection", bewusst kein RAG) und
// lässt das Modell strukturiert antworten. Wird sowohl von der API-Route
// als auch vom Eval-Skript genutzt, damit die Prompt-Logik nur einmal
// existiert.
import { generateObject } from "ai";
import { z } from "zod";
import { ladeAnleitungen } from "./it-anleitungen";

// Go-live-Modell über den Vercel AI Gateway. Das günstigere Gemini-Testmodell
// ist für Free-Tier-Konten gesperrt (auch mit Guthaben) – Haiku funktioniert.
export const MODELL = "anthropic/claude-haiku-4.5";

const ANTWORT_SCHEMA = z.object({
  gefunden: z
    .boolean()
    .describe("true, wenn eine der Anleitungen zur Frage passt"),
  antwort: z
    .string()
    .describe(
      "Schritt-für-Schritt-Antwort in einfacher Sprache, oder ein ehrlicher Hinweis, wenn nichts passt"
    ),
  quelle: z
    .string()
    .nullable()
    .describe("Titel der verwendeten Anleitung, oder null wenn keine passt"),
});

export type ItHilfeAntwort = z.infer<typeof ANTWORT_SCHEMA>;

const SYSTEM_PROMPT = `Du bist der IT-Hilfe-Assistent von HalloHilfe, einem persönlichen
Alltagshilfe-Dienst für Senior:innen. Du beantwortest einfache Technikfragen
(Handy, Tablet, WhatsApp, E-Mail, WLAN).

Regeln:
- Antworte NUR anhand der unten mitgegebenen Anleitungen. Erfinde keine Schritte.
- Die Fragen sind oft sehr kurz und ungenau formuliert (z. B. "mein WLAN geht
  nicht" oder "Foto verschicken"). Ordne die Frage GROSSZÜGIG der passenden
  Anleitung zu, solange das Thema übereinstimmt (Handy, Tablet, WhatsApp,
  E-Mail, WLAN/Internet). Im Zweifel lieber die thematisch passende Anleitung
  nehmen, als abzulehnen.
- Bei Internet-/Verbindungsproblemen unterscheide genau: Nur wenn ein kürzlicher
  Anschlusswechsel, Umzug oder Anbieterwechsel erwähnt wird (z. B. "1&1 geht nach
  dem Anschlusswechsel nicht"), nimm die Anleitung zum Anschlusswechsel. Sonst
  (allgemeines "Internet geht nicht" oder "WLAN geht nicht") nimm die WLAN-Anleitung.
- Setze "gefunden" nur dann auf false, wenn es wirklich um ein ANDERES Thema geht
  oder um ein ganz anderes, spezifisches Problem, das keine Anleitung behandelt.
  Dann "quelle" auf null und schreibe ehrlich in "antwort", dass du dazu keine
  Anleitung hast und sich die Person gerne für einen persönlichen Rückruf melden kann.
- Antworte in einfacher, freundlicher Sprache mit kurzen Sätzen, wie für jemanden,
  der wenig Erfahrung mit Technik hat.
- Fasse dich KURZ: nur die nötigen Schritte, keine Anrede, keine Grußformel,
  keine Signatur, keine Rückfragen wie "Wie kann ich noch helfen?". Halte dich
  eng an die Schritte der passenden Anleitung.
- Schreibe die Antwort als REINEN TEXT: keine Sternchen, KEINE Anführungszeichen,
  keine Markdown-Formatierung. Nummerierte Schritte (1. 2. 3.) sind erlaubt.
- Du gibst KEINE Pflege-, Medizin- oder Rechtsberatung. Geht die Frage in diese
  Richtung, setze "gefunden" auf false und verweise auf den persönlichen Rückruf.
- Ist eine Anleitung passend, setze "quelle" auf ihren genauen Titel.`;

function baueKontext(): string {
  const anleitungen = ladeAnleitungen();
  return anleitungen
    .map((a) => `--- Anleitung: ${a.titel} ---\n${a.inhalt}`)
    .join("\n\n");
}

export async function beantworteFrage(frage: string): Promise<ItHilfeAntwort> {
  const kontext = baueKontext();

  const { object } = await generateObject({
    model: MODELL,
    schema: ANTWORT_SCHEMA,
    system: SYSTEM_PROMPT,
    prompt: `Verfügbare Anleitungen:\n\n${kontext}\n\nFrage der Person: ${frage}`,
    // Großzügig bemessen: Bei 600 wurde die längste Antwort (WLAN) abgeschnitten,
    // das JSON war dann kaputt und ließ sich nicht parsen (der eigentliche WLAN-Bug).
    maxOutputTokens: 1200,
    // temperature: 0 → deterministische, verlässliche Zuordnung. Ohne diesen
    // Wert antwortete das Modell mal "gefunden", mal nicht (der WLAN-Bug).
    temperature: 0,
  });

  return object;
}
