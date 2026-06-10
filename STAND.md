# Projektstand HalloHilfe

_Letzter Stand: 10.06.2026_

## ✅ Fertig
- Öffentlicher Bereich komplett: Start, Leistungen, Anfrage, Danke, Über-mich, Kontakt.
- Supabase angebunden:
  - Zugangsdaten in `.env.local` (URL + öffentlicher Schlüssel).
  - Verbindung im Code: `src/lib/supabase.ts`.
  - Tabelle `anfragen` in Supabase mit Zugriffsschutz (RLS):
    - Jeder darf eine Anfrage **absenden**.
    - **Lesen** ist gesperrt (öffnen wir später nur für den Admin-Login).
- Das Anfrageformular speichert echte Anfragen in der Datenbank → **getestet, funktioniert**.

## ▶️ Als Nächstes: Admin-Bereich
- **A:** Admin-Benutzer in Supabase anlegen + Leserecht für Angemeldete freischalten.
- **B:** Login-Seite `/admin/login`.
- **C:** Dashboard `/admin` mit Anfragen-Liste + Status-Filter.
- **D:** Detailansicht `/admin/anfragen/:id` mit Status ändern + interne Notizen.

## ❓ Offene Entscheidung (für Schritt A)
Wie soll sich der Admin einloggen?
- **E-Mail + Passwort** (Empfehlung, einfach) — oder
- **Magic Link** (Login per E-Mail-Link, kein Passwort).

## 💡 Wie morgen weitermachen
Claude Code im Projektordner starten und z. B. sagen:
> „Lass uns am Admin-Bereich weitermachen. Login per E-Mail + Passwort."
