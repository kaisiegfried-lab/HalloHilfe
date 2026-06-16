# Projektstand HalloHilfe

_Letzter Stand: 16.06.2026_

## 🎯 Ziel
Projekt bis zum **Go-live** bringen. Angepasste Roadmap (11 Meilensteine):
1–2 Fundament + Admin-Login ✅ · 3 Dashboard **+ Filter** ✅ · 4 Detailansicht ✅ ·
5 E-Mail-Benachrichtigung ✅ · 6 Anfrageformular ✅ (geprüft, bewusst schlank gehalten) ·
7 Recht: Datenschutz + Impressum ✅ · 8 Spam-Schutz (Honeypot) ✅ · 9 Design/SEO/Favicon/404 ✅ ·
10 Test & Korrekturen ✅ · **11 Veröffentlichung 🟡 (als Nächstes – letzter Schritt!)**

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

## ✅ Meilenstein 8: Spam-Schutz (Honeypot)
Im Anfrageformular (`src/app/anfrage/page.tsx`) ein für Menschen unsichtbares Feld `website`
(absolut aus dem Bild geschoben, `aria-hidden`, `tabIndex={-1}`). Ist es beim Absenden
ausgefüllt → Bot: nichts speichern, keine Mail, aber zur Danke-Seite leiten (Bot merkt nichts).

## ✅ Meilenstein 9: Design/SEO/Favicon/404
- SEO-Titel + Beschreibung je öffentlicher Seite (leistungen, ueber-mich, kontakt, danke).
  `/danke` zusätzlich `robots: index false`. `/anfrage` ist Client Component → Titel via
  neues `src/app/anfrage/layout.tsx`. Start erbt Root-Titel.
- Eigenes Favicon `src/app/icon.svg` (burgundes „H" auf Gold, Markenfarben). Altes
  Next.js-`favicon.ico` gelöscht (mit Kais Zustimmung).
- Freundliche 404-Seite `src/app/not-found.tsx` (Statuscode 404 bestätigt).
- Design/UX-Durchgang: Seiten sind konsistent. Zwei kosmetische Punkte bewusst SO GELASSEN
  (Kai-Entscheidung): öffentlicher Footer erscheint auch im Admin; Startseiten-Ende hat
  Abschluss-Satz direkt über dem Footer.

## ✅ Meilenstein 10: Test & Korrekturen (16.06.)
Kompletter Durchgang bestanden: alle Seiten laden, keine toten Links, Anfrage→Speichern+Mail,
Admin (Login/Filter/Status/Notiz/Abmelden), 404, Honeypot (Code geprüft), mobile Ansicht.
Gefundener + behobener Fehler: `/ueber-mich` war verwaist (kein Link) → jetzt verlinkt über
Anbieter-Karte auf Startseite + Footer-Link.

## 🟡 ALS NÄCHSTES — Meilenstein 11: Veröffentlichung (letzter Schritt!)
App online stellen bei **Vercel** (kostenlos, nativ für Next.js). Schritte grob:
1. Vercel-Konto (mit GitHub verbinden), Repo `kaisiegfried-lab/HalloHilfe` importieren.
2. **Umgebungsvariablen** in Vercel eintragen (aus `.env.local`): `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`. (Kai macht das, .env ist gesperrt.)
3. Deployen → Test-URL prüfen.
4. Domain bei ALL-INKL per DNS auf Vercel zeigen lassen.
Hinweise: Resend läuft im Test-Modus (sendet nur an kai.siegfried@gmail.com) – für echten
Versand an andere Adressen später eigene Domain bei Resend verifizieren.

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
