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

  // Bestätigungs-Mail an den Kunden – nur, wenn er eine E-Mail-Adresse
  // angegeben hat (das Feld im Formular ist freiwillig). Schlägt sie fehl,
  // soll das die erfolgreiche Admin-Benachrichtigung NICHT zunichtemachen –
  // deshalb in try/catch und am Ende trotzdem { ok: true }.
  //
  // Hinweis: Solange Resend im Test-Modus läuft, kommt diese Mail nur bei
  // der verifizierten Adresse an. Echter Versand an Kunden erst nach
  // Domain-Verifizierung bei Resend.
  if (a.email) {
    const bestaetigungText = [
      `Hallo ${a.name ?? ""},`.trim(),
      "",
      "vielen Dank für Ihre Anfrage bei HalloHilfe! Ich habe sie erhalten und",
      "melde mich persönlich innerhalb von 24 Stunden bei Ihnen – telefonisch",
      "oder per E-Mail.",
      "",
      "Zur Erinnerung, das haben Sie uns geschrieben:",
      `– Gewünschte Hilfe: ${a.leistung ?? "—"}`,
      `– Ort: ${a.ort ?? "—"}`,
      "",
      "Herzliche Grüße",
      "Kai Siegfried von HalloHilfe",
      "",
      "Hinweis: Diese E-Mail wurde automatisch versendet. Bitte antworten Sie",
      "nicht direkt darauf.",
    ].join("\n");

    try {
      const bestaetigung = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "HalloHilfe <onboarding@resend.dev>",
          to: a.email,
          subject: "Ihre Anfrage bei HalloHilfe ist angekommen",
          text: bestaetigungText,
        }),
      });

      if (!bestaetigung.ok) {
        const fehlertext = await bestaetigung.text();
        console.error("Bestätigungs-Mail fehlgeschlagen:", fehlertext);
      }
    } catch (fehler) {
      console.error("Bestätigungs-Mail fehlgeschlagen:", fehler);
    }
  }

  return Response.json({ ok: true });
}
