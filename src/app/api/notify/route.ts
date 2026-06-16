// Server-Funktion: verschickt eine Benachrichtigungs-E-Mail, wenn eine
// neue Anfrage eingegangen ist. Läuft nur auf dem Server – der geheime
// Resend-Schlüssel ist hier sicher und gelangt nie in den Browser.

// Empfänger der Benachrichtigung (deine eigene Adresse, passt zum Test-Modus).
const EMPFAENGER = "kai.siegfried@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // Ohne Schlüssel können wir nichts versenden – sauber abbrechen.
  if (!apiKey) {
    return Response.json(
      { ok: false, grund: "Kein E-Mail-Schlüssel konfiguriert." },
      { status: 500 }
    );
  }

  // Die Anfrage-Daten aus dem Aufruf lesen.
  const a = await request.json();

  // Inhalt der E-Mail als einfacher, lesbarer Text.
  const text = [
    "Neue Anfrage über HalloHilfe:",
    "",
    `Name: ${a.name ?? "—"}`,
    `Telefon: ${a.telefon ?? "—"}`,
    `E-Mail: ${a.email || "—"}`,
    `Hilfe für: ${a.hilfe_fuer === "andere" ? "andere Person" : "sich selbst"}`,
    a.senior_name ? `Person: ${a.senior_name}` : null,
    `Leistung: ${a.leistung ?? "—"}`,
    `Ort: ${a.ort ?? "—"}`,
    `Wunschtermin: ${a.wunschdatum || "—"}`,
    "",
    "Anliegen:",
    a.beschreibung ?? "—",
  ]
    .filter((zeile) => zeile !== null)
    .join("\n");

  // E-Mail über die Resend-Schnittstelle verschicken.
  const antwort = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "HalloHilfe <onboarding@resend.dev>",
      to: EMPFAENGER,
      subject: `Neue Anfrage von ${a.name ?? "Unbekannt"}`,
      text,
    }),
  });

  if (!antwort.ok) {
    const fehlertext = await antwort.text();
    console.error("E-Mail-Versand fehlgeschlagen:", fehlertext);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
