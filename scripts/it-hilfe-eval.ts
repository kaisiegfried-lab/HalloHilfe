// Prüft die KI-IT-Hilfe gegen ein paar Testfragen, ohne dass ein Server
// laufen muss – ruft beantworteFrage() direkt auf. Ausführen mit:
//   npm run eval:it-hilfe
import { beantworteFrage } from "../src/lib/it-hilfe";

type Testfall = {
  frage: string;
  erwartetGefunden: boolean;
  erwarteteQuelle?: string;
};

const TESTFAELLE: Testfall[] = [
  // Klar abgedeckt – erwartete Quelle muss stimmen.
  {
    frage: "Wie schicke ich meiner Tochter ein Foto über WhatsApp?",
    erwartetGefunden: true,
    erwarteteQuelle: "Ein Foto per WhatsApp verschicken",
  },
  {
    frage: "Mein Internet zu Hause geht nicht mehr, was mache ich?",
    erwartetGefunden: true,
    erwarteteQuelle: "WLAN am Handy oder Tablet neu verbinden",
  },
  // Regressionstest: kurze, vage Formulierungen müssen trotzdem zuordnen.
  // Genau diese Frage lieferte live fälschlich den Rückfallweg (WLAN-Bug).
  {
    frage: "mein WLAN funktioniert nicht",
    erwartetGefunden: true,
    erwarteteQuelle: "WLAN am Handy oder Tablet neu verbinden",
  },
  {
    frage: "Internet geht nicht",
    erwartetGefunden: true,
    erwarteteQuelle: "WLAN am Handy oder Tablet neu verbinden",
  },
  {
    frage: "Ich habe eine E-Mail mit einem PDF bekommen, wie öffne ich das?",
    erwartetGefunden: true,
    erwarteteQuelle: "Einen Anhang in einer E-Mail öffnen",
  },
  // Nicht abgedeckt – Modell soll ehrlich ablehnen statt zu erfinden.
  {
    frage: "Wie installiere ich ein komplett neues Betriebssystem auf meinem PC?",
    erwartetGefunden: false,
  },
  {
    frage: "Wie richte ich ein Online-Banking-Konto neu ein?",
    erwartetGefunden: false,
  },
  // Grenzfälle: Themen außerhalb IT-Hilfe müssen abgelehnt werden.
  {
    frage: "Können Sie mir bei der Medikamenteneinnahme helfen?",
    erwartetGefunden: false,
  },
  {
    frage: "Ich brauche eine rechtliche Einschätzung zu meinem Mietvertrag.",
    erwartetGefunden: false,
  },
];

async function main() {
  let bestanden = 0;

  for (const fall of TESTFAELLE) {
    const antwort = await beantworteFrage(fall.frage);
    const gefundenOk = antwort.gefunden === fall.erwartetGefunden;
    const quelleOk =
      !fall.erwarteteQuelle || antwort.quelle === fall.erwarteteQuelle;
    const ok = gefundenOk && quelleOk;

    if (ok) bestanden++;
    console.log(`${ok ? "✅" : "❌"} "${fall.frage}"`);
    console.log(
      `   erwartet: gefunden=${fall.erwartetGefunden}${
        fall.erwarteteQuelle ? `, quelle="${fall.erwarteteQuelle}"` : ""
      }`
    );
    console.log(`   erhalten: gefunden=${antwort.gefunden}, quelle=${antwort.quelle ?? "null"}`);
    console.log("");
  }

  console.log(`Ergebnis: ${bestanden}/${TESTFAELLE.length} bestanden`);
  if (bestanden < TESTFAELLE.length) process.exitCode = 1;
}

main();
