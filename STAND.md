# Projektstand HalloHilfe

_Letzter Stand: 08.07.2026 (KI-IT-Soforthilfe live getestet + Anleitungen freigegeben, bereit für Deploy – siehe unten)_

## 🎯 Ziel
Projekt bis zum **Go-live** bringen. Angepasste Roadmap (11 Meilensteine):
1–2 Fundament + Admin-Login ✅ · 3 Dashboard **+ Filter** ✅ · 4 Detailansicht ✅ ·
5 E-Mail-Benachrichtigung ✅ · 6 Anfrageformular ✅ (geprüft, bewusst schlank gehalten) ·
7 Recht: Datenschutz + Impressum ✅ · 8 Spam-Schutz (Honeypot) ✅ · 9 Design/SEO/Favicon/404 ✅ ·
10 Test & Korrekturen ✅ · **11 Veröffentlichung ✅ (live auf Vercel!)**

➡️ **Alle 11 Meilensteine erledigt – die App ist live.** Offen bleibt nur die
eigene Domain (ALL-INKL per DNS auf Vercel), das macht Kai später selbst.

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

## ✅ Meilenstein 11: Veröffentlichung (18.06.) — LIVE auf Vercel
App läuft online unter **https://hallo-hilfe.vercel.app**. Erledigt:
1. Vercel-Konto mit GitHub verbunden, Repo `kaisiegfried-lab/HalloHilfe` importiert.
2. Umgebungsvariablen in Vercel eingetragen: `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `RESEND_API_KEY`.
3. Deployt, Live-URL geprüft (Start, Anfrage, Admin-Login laden fehlerfrei).
- **Build-Fix nötig:** `docs`-Ordner in `tsconfig.json` von der TypeScript-Prüfung
  ausgeschlossen (`"exclude": ["node_modules", "docs"]`), weil fremde Dateien in
  `docs/bmad` (BMAD-METHOD) den Production-Build abbrechen ließen.
**Noch offen (Kai, später):** eigene Domain bei ALL-INKL per DNS auf Vercel zeigen.
Hinweis: Resend läuft im Test-Modus (sendet nur an kai.siegfried@gmail.com) – für echten
Versand an andere Adressen später eigene Domain bei Resend verifizieren.

## ✅ Anfragen archivieren & löschen (18.06.)
Im Admin-Bereich können alte Anfragen jetzt **archiviert** (umkehrbar) und **endgültig
gelöscht** (mit Sicherheits-Rückfrage, z. B. für durchgerutschte Bot-Anfragen) werden.
- DB: neue Spalte **`archiviert`** (boolean, Standard `false`) in Tabelle `anfragen`.
  Neue **DELETE-Policy** „Admin darf Anfragen loeschen" für Rolle `authenticated`.
- `src/app/admin/page.tsx`: neuer Filter **„Archiv"**; übrige Filter blenden archivierte aus.
- `src/app/admin/anfragen/[id]/page.tsx`: Buttons „Archivieren"/„Aus Archiv holen",
  abgesetzter Bereich „Endgültig löschen" (mit `window.confirm`), Schild „Archiviert".

## ✅ Bestätigungs-Mail an Kunden (19.06.)
Wer eine Anfrage absendet **und eine E-Mail-Adresse angibt**, bekommt automatisch
eine freundliche Bestätigung („Anfrage angekommen, melde mich innerhalb von 24 h",
Absender „Kai Siegfried von HalloHilfe").
- Nur **eine Datei** geändert: `src/app/api/notify/route.ts` — schickt nach der
  Admin-Benachrichtigung zusätzlich eine zweite Mail an `a.email` (in try/catch;
  scheitert sie, bleibt Anfrage + Admin-Mail unberührt, Antwort weiter `ok: true`).
- Formular unverändert (schickt die Daten ohnehin schon an `/api/notify`).
- **Achtung Test-Modus:** Kommt beim Kunden erst an, wenn die eigene Domain bei
  Resend verifiziert ist. Bis dahin Test mit eigener Adresse → zwei Mails erwartet.
- **Lokal getestet (19.06.):** Mit `kai.siegfried@gmail.com` im Formular kamen beide
  Mails an (Admin-Benachrichtigung + Kunden-Bestätigung).
- **✅ Erledigt & deployt (19.06.):** Nach `main` gemergt (`9048835`) und zu GitHub
  gepusht → Vercel deployt automatisch. Live-Seite geprüft (HTTP 200, `/api/notify`
  vorhanden). Damit ist die Bestätigungs-Mail abgeschlossen und online.

## ✅ Anfrage: Ruhige Fehlermeldung statt alert() (05.07.)
Wenn das Speichern einer Anfrage in Supabase fehlschlägt, erscheint statt des
technischen `alert()` jetzt ein **ruhiger Hinweis-Block direkt im Formular**
(Markenfarben burgund/gold/creme, `role="alert"`).
- Nur **eine Datei** geändert: `src/app/anfrage/page.tsx` — neuer State `fehler`,
  `setFehler(false)` am Anfang von `handleSubmit`, im `if (error)`-Zweig
  `setFehler(true)` statt `alert` (das `console.error` bleibt).
- Der Block bietet einen **menschlichen Rückfallweg**: anklickbarer Telefon-Link
  (`tel:`) und WhatsApp-Link (`https://wa.me/`), Nummer `+49 151 12345678`.
  Falls sich die Kontaktnummer ändert: an vier Stellen anpassen (je `href` +
  sichtbarer Text).

## ✅ KI-IT-Soforthilfe live getestet + Anleitungen freigegeben (08.07.)
Grund: Bootcamp-Abschluss in 2-3 Wochen, dieses Feature zeigt sichtbare
Entwicklung seit dem letzten Check-in. Senior:innen tippen eine Technikfrage
(Handy, Tablet, WhatsApp, E-Mail, WLAN), bekommen eine Schritt-für-Schritt-
Antwort in einfacher Sprache. Kais Entscheidungen: Context Injection (kein RAG,
kein Fine-tuning), Anleitungen als Claude-Entwürfe (Kai prüft am Gerät), volle
Version inkl. Eval-Skript.

**Dateien:**
- `src/content/it-anleitungen/*.md` — 3 Anleitungen (WhatsApp-Foto, WLAN neu
  verbinden, E-Mail-Anhang öffnen). **Von Kai am Gerät geprüft und freigegeben
  (08.07.)** — gelten jetzt als final, keine Platzhalter mehr.
- `src/lib/it-anleitungen.ts` — lädt alle `.md`-Dateien aus dem Ordner.
- `src/lib/it-hilfe.ts` — `beantworteFrage()`: baut Anleitungen als Kontext in
  den Prompt, `generateObject` (Paket `ai`) liefert
  `{ gefunden, antwort, quelle }`. Modell-Konstante `MODELL` =
  `anthropic/claude-haiku-4.5` (Go-live-Modell, Achtung: Punkt nicht
  Bindestrich bei Gateway-Modell-Slugs). Das ursprünglich für Tests geplante
  Gemini-Modell ist für Vercel-Free-Tier-Konten gesperrt (auch mit Guthaben)
  — deshalb direkt mit dem Ziel-Modell getestet.
- `src/app/api/it-hilfe/route.ts` — Route, weist leere/zu lange Fragen (>500
  Zeichen) ohne Modellaufruf ab, fängt Gateway-Fehler (402/429) sauber ab.
  Protokolliert jede beantwortete Frage in Supabase (siehe unten).
- `src/app/it-hilfe/page.tsx` + `layout.tsx` — Formular-Seite im Stil von
  `/anfrage`, gleicher Telefon/WhatsApp-Rückfallweg bei `gefunden:false` oder
  Fehler.
- `scripts/it-hilfe-eval.ts` — 7 Testfragen (3 abgedeckt, 2 nicht abgedeckt,
  2 Grenzfälle wie Pflege-/Rechtsfragen), Start mit
  `npm run eval:it-hilfe` (Skript liest `.env.local` über Node-Flag
  `--env-file`, da `tsx` das nicht automatisch tut wie der Next-Dev-Server).
  **08.07. mit echtem Gateway-Schlüssel gelaufen: 7/7 bestanden.**
- `next.config.ts`: `outputFileTracingIncludes` für `/api/it-hilfe` ergänzt,
  damit Vercel den Anleitungen-Ordner beim Deploy mitpackt.
- Verlinkung: „Technik"-Karte auf Start- und Leistungsseite zeigt jetzt auf
  `/it-hilfe`.
- Neue Pakete: `ai`, `zod` (Structured Output), `tsx` (Dev, fürs Eval-Skript).

**Neu (08.07.) — Unbeantwortete Fragen mitloggen:**
Idee: Anleitungen bedarfsgesteuert erweitern (welche Fragen kommen wirklich?),
statt alle WhatsApp-Anleitungen aus dem Netz reinzukopieren (würde Kais
Qualitätskontrolle aushebeln + bei Context Injection jede Anfrage teurer/
langsamer machen).
- Neue Supabase-Tabelle `it_hilfe_fragen` (Spalten: `frage`, `gefunden`,
  `quelle`, `created_at`). RLS: `anon` darf nur einfügen, nur eingeloggte
  Admins dürfen lesen.
- `route.ts` speichert nach jeder Antwort einen Log-Eintrag (fire-and-forget,
  Fehler beim Loggen brechen die Antwort an die Nutzer:in nie ab).
- Neue Admin-Seite `src/app/admin/it-hilfe-fragen/page.tsx` — zeigt alle
  gestellten Fragen, nicht gefundene zuerst. Verlinkt von `/admin`.
- Getestet: Testfrage ohne passende Anleitung wurde protokolliert und war für
  Kai im Admin-Bereich sichtbar (08.07.).

**Lokal getestet (08.07., mit echtem Gateway-Schlüssel + Guthaben):**
Formular lädt, Zeichenlimit + Zähler funktionieren, Validierung (leer/zu lang)
liefert 400 ohne Modellaufruf, Eval-Skript 7/7 bestanden, echte Frage im
Browser getestet (WhatsApp-Foto) → korrekte Schritt-für-Schritt-Antwort mit
Quelle. Logging getestet und im Admin-Bereich bestätigt.

**⏳ Als Nächstes:**
1. Deploy auf Vercel (Env-Var `AI_GATEWAY_API_KEY` dort eintragen, Git push,
   SQL für `it_hilfe_fragen` auch in der Produktions-Datenbank ausführen falls
   getrennt von der Dev-Datenbank) — wie immer nur auf Kais Wunsch.

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
