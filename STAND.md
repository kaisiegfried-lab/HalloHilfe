# Projektstand HalloHilfe

_Letzter Stand: 16.06.2026_

## 🎯 Ziel
Projekt bis zum **Go-live** bringen. Angepasste Roadmap (11 Meilensteine):
1–2 Fundament + Admin-Login ✅ · 3 Dashboard **+ Filter** ✅ · 4 Detailansicht ✅ ·
5 E-Mail-Benachrichtigung ✅ · 6 Anfrageformular ✅ (geprüft, bewusst schlank gehalten) ·
7 Recht: Datenschutz + Impressum ✅ · **8 Spam-Schutz Formular 🟡 (als Nächstes)** ·
9 Design & UX + SEO/Favicon/Fehlerseite · 10 Test & Korrekturen · 11 Veröffentlichung.

## ✅ Fertig
- Öffentlicher Bereich komplett: Start, Leistungen, Anfrage, Danke, Über-mich, Kontakt.
- Supabase: Zugangsdaten in `.env.local`, Verbindung in `src/lib/supabase.ts`.
  - Tabelle `anfragen` (deutsche Felder) + Spalten **`status`** (Standard „neu") und **`notiz`**.
  - RLS (aufgeräumt 16.06.): **eine** INSERT-Policy „Jeder darf Anfragen absenden" für
    Rolle **`public`** (absenden für alle), authenticated **SELECT + UPDATE** (Admin).
- **Admin-Bereich komplett** (Login E-Mail + Passwort):
  - `/admin/login`, `/admin` (Liste + **Status-Filter** + Status-Schild + Abmelden),
    `/admin/anfragen/:id` (Detail: Status ändern + interne Notiz). Login-Schutz überall. Getestet.
- **Meilenstein 5: E-Mail-Benachrichtigung** — getestet & funktioniert (16.06.):
  - `src/app/api/notify/route.ts` — Server-Funktion, sendet via Resend
    (`from: onboarding@resend.dev`, `to: kai.siegfried@gmail.com`). Liest `RESEND_API_KEY`.
  - `src/app/anfrage/page.tsx` — ruft nach erfolgreichem Speichern `/api/notify` auf
    (blockiert nicht, falls Mail scheitert).
  - Stolperstein gelöst: 42501 trat auf, weil im **eingeloggten** Browser der Insert als
    `authenticated` lief (keine Insert-Policy). Fix: Insert-Policy auf Rolle `public` umgestellt.

## 🟡 ALS NÄCHSTES — Meilenstein 8: Spam-Schutz fürs Formular
Anfrageformular gegen automatische Spam-Einsendungen absichern (z.B. Honeypot-Feld als
einfachste, datenschutzfreundliche Lösung; alternativ Rate-Limit oder Captcha). Umfang
mit Kai klären — für ein kleines privates Projekt reicht meist ein Honeypot.

## ⚠️ Dev-Server (wichtig!)
- Immer nur EINEN `npm run dev` laufen lassen. Bei „Jest worker / EPIPE"-Fehlern oder
  404 auf vorhandenen Routen: alle Server stoppen, `.next` löschen, neu starten.
- Port 3000 kann als „in use" gemeldet werden (alter Socket) → Next nutzt dann 3001/3002.
- Nach Änderung an `.env.local` Server **neu starten**, sonst wird der neue Wert nicht geladen.

## ℹ️ Hinweise
- **Hosting-Entscheidung (16.06.):** App läuft auf **Vercel** (kostenlos, nativ für Next.js,
  Server-Routen wie `/api/notify` funktionieren). **Domain + E-Mail bleiben bei ALL-INKL**
  (Domain wird per DNS auf Vercel gezeigt). Deployment selbst erst in Meilenstein 11.
  → Datenschutzerklärung muss daher Vercel (Hosting), Supabase (DB) und Resend (Mailversand)
  als Auftragsverarbeiter nennen.
- Status-Werte in DB: `neu`, `in_pruefung`, `bestaetigt`, `erledigt`, `abgelehnt`.
- `docs/PRD` beschreibt ein größeres Wunsch-Schema (englische Spalten) — NICHT die echte Tabelle.
- `.env`-Dateien sind gesperrt → der User trägt Schlüssel selbst ein.
