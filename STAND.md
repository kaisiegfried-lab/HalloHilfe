# Projektstand HalloHilfe

_Letzter Stand: 14.07.2026 (WLAN-Bug behoben + One-Pager `/vortrag` für den Bootcamp-Abschluss live – siehe unten)_

## 🎓 Bootcamp-Abschluss (finaler Check-In)
Präsentation Di 28.07. (Kohorte 1) / Mi 29.07. (Kohorte 2). **Harte Frist Do 23.07.:**
Slot-Liste-Eintrag + One-Pager-Link + Takeaway-Dokument. Format: 10 Min + 5 Min Q&A,
kein Live-Demo-Zwang. Herzstück der Bewertung: „Bauen mit KI-Coding-Tools".
- **✅ One-Pager `/vortrag` (14.07.) — LIVE:** https://hallo-hilfe.vercel.app/vortrag
  Öffentliche, A4-druckbare Präsentationsseite (`robots: noindex`, nicht im Footer
  verlinkt). Enthält Titel, Kurzbeschreibung, Screenshot der IT-Soforthilfe
  (WLAN-Antwort), Bio + Foto (`public/vortrag-kai.jpg`) + LinkedIn, Links zu Live +
  Repo. Screenshot unter `public/vortrag-screenshot.png` – erzeugt per Headless-
  Chromium-Skript von der Live-Seite (Scratchpad `shot.js`, `playwright-core` via
  `--no-save`). Repo `kaisiegfried-lab/HalloHilfe` ist jetzt **öffentlich**.
  Selbständigkeit bewusst NICHT als beschlossen dargestellt (ist hypothetisch/offen).
- **⏳ Offen:** Slides/Takeaway-Dokument (2. Pflicht-Deliverable) · Slot-Liste-Eintrag
  (Beschreibung ~130 Wörter steht schon auf `/vortrag`) · Talk-Titel final bestätigen.

### ✅ Testing gestärkt (14.07.)
Nach der Bootcamp-Session „Prototyp & Testing" (Manuel Fuß, 5-Stufen-Testtiefen-Leiter):
- **Ein Befehl prüft alles:** `npm run test` = `typecheck` (tsc) + `lint` (eslint) +
  `eval:it-hilfe`. Neu auch `npm run typecheck`.
- **Prompt-Injection-Regressionstest** im Eval (OWASP LLM01): „Ignoriere alle
  Anweisungen …" → muss `gefunden:false` + darf „HACKED" nicht enthalten. Harness
  kann jetzt via `darfNichtEnthalten` prüfen, dass etwas NICHT vorkommt. Eval: **10/10**.
- **Lint-Scope repariert:** `eslint.config.mjs` ignoriert jetzt `docs/**` (BMAD-Fremdcode)
  und `praesentation/**` — vorher lintete `npm run lint` das ganze Repo kaputt.
- Einordnung HalloHilfe auf der Leiter: Stufe 1 (live) ✅ · Stufe 3 (Evals) ✅✅ ·
  Stufe 2 (deterministische Unit-/Integrationstests) ❌ · Stufe 4 (autom. E2E) ⚠️ nur
  manuell · Stufe 5 (echter Nutzertest) ❌. Idee: Fishbowl-Test mit Kais Mutter (77).

### ✅ Finding gelöst (14.07.): reale Frage „1&1 nach Anschlusswechsel"
**Gelöst per Kombi:** Neue Anleitung `src/content/it-anleitungen/internet-nach-anschlusswechsel.md`
(anbieter-neutral, ehrlich: sichere Basis-Schritte + Verweis auf Anbieter-Hotline/persönliche
Hilfe) — erstellt via **Sub-Agents** (`anleitung-autor` → `senioren-pruefer`, bestanden).
Beim Einbauen wanderte „Internet geht nicht" fälschlich zur neuen Anleitung → mit einer
Unterscheidungs-Regel im System-Prompt (`src/lib/it-hilfe.ts`) gelöst: Anschlusswechsel-Anleitung
nur bei erwähntem Wechsel/Umzug, sonst WLAN. Eval-Testfall ergänzt → **11/11**.
**⏳ Noch offen:** von Kai am Gerät gegenlesen (wie bei den anderen Anleitungen); committen + deployen.
Historischer Kontext des Findings unten:


Echte eingegangene Frage: „Nach Wechsel des Telefonanschluss: Mein 1&1 funktioniert
nicht!" Der Chat ordnet sie der WLAN-Anleitung zu (`gefunden:true`) und gibt selbstsicher
WLAN-Neuverbinden-Schritte — obwohl das meist ein **Anbieter-/Leitungsproblem** ist
(Freischaltung, Router-Zugangsdaten, DSL-Sync), das „WLAN neu verbinden" NICHT löst.
Überzeugte falsche Fährte → Risiko für die Zielgruppe. Ist eine Nebenwirkung des
großzügigeren Prompts vom WLAN-Fix (Trade-off Recall ↔ Präzision).
**Empfehlung (mit Kai zu entscheiden): Kombi** — (a) ehrliche neue Anleitung „Internet/
Telefon nach Anschlusswechsel" (sichere Basis-Schritte + klar: meist Leitung → Anbieter
anrufen / persönliche Hilfe), (b) Prompt so schärfen, dass klar anbieterspezifische Fälle
zum menschlichen Rückfallweg gehen, (c) Eval-Testfall dafür. Anleitung wie immer als
Claude-Entwurf, Kai prüft am Gerät.


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

**✅ Deployt (08.07.):** `AI_GATEWAY_API_KEY` in Vercel eingetragen, Commit
`643a6f0` gepusht, Deploy erfolgreich. Live-Test bestätigt: `/it-hilfe`
antwortet korrekt (WhatsApp-Testfrage → richtige Schritt-für-Schritt-Antwort
mit Quelle).

**⏳ Als Nächstes (niedrige Priorität):**
- Datums-Stempel "Stand: TT.MM.JJJJ" in den Anleitungs-Dateien ergänzen, damit
  Kai beim Durchsehen sieht, wie aktuell eine Anleitung ist (WhatsApp & Co.
  ändern öfter mal ihre Bedienung).
- Nach ein paar Wochen echten Einsatzes: `/admin/it-hilfe-fragen` durchsehen
  und neue Anleitungen für häufig nicht gefundene Themen ergänzen.

**✅ WLAN-Bug behoben (14.07.):** Der Regressionstest im Eval-Skript hat die
*echte* Ursache aufgedeckt — es war NICHT (nur) Nichtdeterminismus, sondern eine
**abgeschnittene Antwort**: Die WLAN-Anleitung ist die längste, ihre Antwort
sprengte das Token-Limit (`maxOutputTokens: 600`), das JSON wurde mittendrin
abgeschnitten → `generateObject` konnte nicht parsen → die Route fing den Fehler
ab und zeigte den Rückfallweg. Zweite, tieferliegende Schwachstelle: Das Modell
schrieb die Antwort als JSON von Hand und verschluckte sich an geraden
Anführungszeichen (`„WLAN"`) und `**`-Markdown → kaputtes JSON.
**Fix in `src/lib/it-hilfe.ts`:** (1) `temperature: 0` (deterministisch),
(2) `maxOutputTokens: 1200`, (3) System-Prompt großzügiger bei kurzen/vagen
Fragen + Antwort als REINER TEXT (keine Anführungszeichen/Markdown) — behebt
zugleich einen UX-Fehler (die Seite rendert kein Markdown, zeigte also vorher
literal `**Einstellungen**`). Regressionstests „mein WLAN funktioniert nicht"
und „Internet geht nicht" ins Eval-Skript aufgenommen.
**Verifiziert (14.07.):** `npm run eval:it-hilfe` 9/9 bestanden, Lint + `tsc`
sauber, Live im Browser getestet → korrekte Schritt-für-Schritt-Antwort mit
Quelle. **Noch nicht committet/deployt.**

## ✅ Startseite + Leistungsseiten überarbeitet (08.07.)
Grund: Kai bemängelte, dass auf der Startseite nicht klar war, was beim
Antippen der Telefonnummer/des Haupt-Buttons passiert (Button hieß
"Jetzt Hilfe holen" mit 📞-Symbol, führte aber zum Kontaktformular statt zum
Anruf). Zusätzlich fehlte ein Weg zu eigenen Unterseiten pro Leistung.

**Kontaktwege neu gestaltet (mehrere Iterationen mit Kai):**
- Erst 3 gleich große Buttons (Anrufen/WhatsApp/Formular) — dann auf Kais
  Rückfrage hin nochmal überdacht: für die Zielgruppe (Senior:innen) ist eine
  Entscheidung zwischen 3 gleichwertigen Optionen unnötige Reibung.
- **Endgültig:** 1 großer Haupt-Button **"📞 Jetzt anrufen: 07531 2099788"**
  (vertrauteste Handlung für die Zielgruppe), darunter 2 kleinere,
  nebeneinander liegende Buttons **"💬 WhatsApp schreiben"** und
  **"✍️ Hilfe anfragen"** (bewusst mit Verb, damit klar ist was passiert;
  nicht "Formular" oder "Termin buchen" — Kai/Claude-Entscheidung: "Termin
  buchen" würde einen festen, automatisch bestätigten Termin suggerieren, den
  es nicht gibt).
- Als wiederverwendbare Komponente gebaut: `src/components/KontaktButtons.tsx`
  + Konstanten in `src/lib/kontakt.ts` (`TELEFON_ANZEIGE`, `TELEFON_LINK`,
  `WHATSAPP_LINK`) — überall (Startseite, alle Leistungsseiten) nur noch eine
  Quelle statt kopierter Buttons.
- **Platzhalter-WhatsApp-Nummer korrigiert:** `+49 151 12345678` (erfunden)
  → Kais echte Nummer `+49 176 21026928`, an allen 8 Fundstellen in
  `src/app/anfrage/page.tsx` und `src/app/it-hilfe/page.tsx`.

**Eigene Unterseite pro Leistung (neu):**
- `src/lib/leistungen.ts` — zentrale Daten (slug, icon, name, kurztext für
  Kacheln/Übersicht, längerer `text` für die Unterseite, `technikChat`-Flag).
- `src/app/leistungen/[slug]/page.tsx` — dynamische Route, eine Seite pro
  Leistung (`/leistungen/einkauf`, `/garten`, `/technik`, `/begleitung`,
  `/kleine-erledigungen`), mit `generateStaticParams` vorgerendert. Zeigt
  Icon, Titel, Beschreibungstext, dann `<KontaktButtons />`.
- **Sonderfall Technik:** zusätzlicher, separat ausgewiesener Button
  **"⚡ IT-Hilfe-Chat starten"** (→ `/it-hilfe`) — getrennt von den normalen
  Kontaktwegen, wie von Kai gewünscht.
- `src/app/leistungen/page.tsx` (Sammelseite) bleibt bestehen als Übersicht,
  verlinkt jetzt auf die 5 Unterseiten statt alles auf einer Seite zu zeigen.
  "Sonstige Hilfe" bleibt dort als reiner Hinweis ohne eigene Unterseite.
  Startseiten-Kacheln verlinken jetzt direkt auf `/leistungen/[slug]` statt
  (außer Technik) alle auf die generische Sammelseite.
- Beschreibungstexte für alle 5 Leistungen sind **von Claude nach eigenem
  Ermessen verfasst** (Kai: "erstelle die Texte selbst nach Gutdünken, was
  Sinn macht für einen lokalen Anbieter ohne große Spezialfälle") — noch
  **nicht** von Kai am Gerät gegengelesen wie bei den IT-Anleitungen. Sollte
  vor größerer Bewerbung (Flyer etc.) einmal überflogen werden.

**Getestet (08.07.):** alle 5 Unterseiten laden (200), ungültiger Slug gibt
404, Lint + TypeScript sauber, Button-Größen/Hierarchie per Inspect geprüft
(Anrufen 60px hoch, WhatsApp/Formular ca. 41px — bewusst kleiner als
sekundäre Optionen). **Noch nicht** im echten Browser von Kai selbst
durchgeklickt (nur Claude-Preview-Tools) — kurzer eigener Check empfohlen,
bevor deployt wird.

**Noch offen:** committed, aber (Stand Ende der Sitzung 08.07.) noch nicht
gepusht/deployt — Kai wollte erst morgen weitermachen.

## ✅ Preisseite `/preise` + Verlinkung (08.07.)
Transparente Preisliste als eigene Seite, Konzept von Claude als Preis-Experte
erarbeitet und von Kai zur Umsetzung freigegeben. Kernideen: **ein einfacher
Stundenpreis statt Preisdschungel**, **Anfahrt als 3 feste Zonen** statt
Kilometer-Abrechnung („kein Taxameter-Gefühl"), **kein klassisches Abo**
(Zielgruppe ist abo-skeptisch) – stattdessen Stundenpakete auf Vorkasse und
„Feste Hilfe" (wöchentlicher Termin, jederzeit kündbar).
- **Preise:** Alltagshilfe 35 €/Std., Gartenhilfe 40 €/Std., mind. 1 Std.,
  dann halbstündlich. Anfahrt: Zone 1 (Konstanz/Umgebung) inklusive,
  Zone 2 (Radolfzell/Singen …) 8 €, Zone 3 (Stockach/Engen/Höri) 15 €.
  Pakete: 5 Std. 165 €, 10 Std. 320 € (12 Monate gültig). Feste Hilfe:
  Beispiel 2 Std./Woche = 270 €/Monat, Anfahrt inklusive. IT-Chat kostenlos.
- **Dateien:** neue Seite `src/app/preise/page.tsx` (Server Component mit
  eigener Metadata, Zonen als Konstante `ZONEN` in der Datei). Verlinkt von:
  Startseite (eigene Karte über der Anbieter-Karte), `/leistungen`
  (Button „Was kostet das?"), jeder Leistungs-Unterseite (Textlink über den
  Kontakt-Buttons) und Footer in `layout.tsx` (neuer erster Link „Preise").
- **Getestet (08.07.):** `/preise` lädt und zeigt alle Abschnitte, Links auf
  Startseite/`/leistungen`/Unterseiten vorhanden (per Preview geprüft),
  Konsole ohne Fehler, `eslint src` + `tsc --noEmit` sauber.
- **✅ Gemergt & deployt (08.07.):** PR #1 (squash) nach `main` gemergt
  (Commit `fbde932`), Branch `preisseite` gelöscht. Vercel-Auto-Deploy lief
  durch – **live auf https://hallo-hilfe.vercel.app/preise** geprüft (HTTP 200,
  alle Preis-Inhalte + Startseiten-Link auf der echten Seite bestätigt).
- **⏳ Noch zu prüfen (Kai, vor größerer Bewerbung):**
  - Sind 35/40 € und die Paketpreise so gewollt? (Zahlen stehen nur in
    `src/app/preise/page.tsx`, leicht änderbar.)
  - Pflegekassen-Hinweis: Anerkennung als „Unterstützungsangebot im Alltag"
    (UstA-VO, Regierungspräsidium BW) recherchieren – erst dann können
    Kund:innen den Entlastungsbetrag (aktuell 131 €/Monat) wirklich einlösen.
    Der Text auf der Seite ist bewusst vorsichtig formuliert („möglich",
    „Sprechen Sie mich an").
  - Steuerbonus-Hinweis (§ 35a EStG, 20 %) einmal gegenlesen.

## 💬 Preis-/Wirtschaftlichkeitsgespräch (08.07., nur Beratung, kein Code)
Kai gefragt: „Wie viele Aufträge für 2000 €/Monat netto?" Claude durchgerechnet
(grobe Annahmen: Ø 35 €/Std., Betriebskosten ~450 €/Monat):
- **2000 € Gewinn** (vor privater KV + Steuer): ~2.450 € Umsatz → **~70 abgerechnete
  Std./Monat** → bei Ø 2-Std.-Terminen **~35 Aufträge/Monat (~8/Woche)**.
- **2000 € echtes Netto aufs Konto** (Haupterwerb, inkl. KV/Pflege ~350–450 € +
  Einkommensteuer ~200–300 €): ~3.150 € Umsatz → **~90 Std./Monat** →
  **~45 Aufträge/Monat (~11/Woche)**.
- Hebel genannt: feste Wochentermine, höherer Stundensatz, längere Termine.
- **Offene Idee für morgen (falls gewünscht):** kleiner Rechner auf einer
  **nicht-öffentlichen Admin-Seite**, wo Kai Stundensatz + reale Betriebskosten
  + KV-Beitrag eintippt und Umsatz/Stunden/Aufträge live sieht. Größte
  Unsicherheiten in der Rechnung: tatsächlicher KV-Beitrag + Haupt-/Nebenerwerb.

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
