# 📋 HalloHilfe – Projektübersicht

_Stand: 11.06.2026_

> Diese Datei ist eine kompakte Gesamtübersicht für Menschen (und zum Übertragen
> ins Miro-Board). Den tagesaktuellen Detailstand findest du in `STAND.md`.

---

## 🟢 1. Was ist bisher umgesetzt?

### Öffentlicher Bereich (fertig ✅)
- Startseite
- Leistungen
- Anfrage-Formular
- Danke-Seite
- Über mich
- Kontakt

### Datenbank-Anbindung (fertig ✅)
- Supabase verbunden
- Tabelle `anfragen` angelegt
- Zugriffsschutz aktiv (RLS): Jeder darf absenden, Lesen gesperrt
- Anfrageformular speichert echte Anfragen → getestet & funktioniert

### Als Nächstes (offen ▶️)
- Admin-Bereich: Login-Seite `/admin/login`
- Dashboard `/admin` mit Anfragen-Liste
- Detailansicht je Anfrage + Status ändern + interne Notizen
- ❓ Offene Frage: Login per E-Mail+Passwort oder Magic-Link

---

## 🔵 2. Frameworks & Tools

| Tool | Wofür |
|---|---|
| **Next.js 16** | Web-Framework (Seiten & Logik) |
| **React 19** | Bausteine der Oberfläche |
| **TypeScript** | Programmiersprache (sicherer Code) |
| **Tailwind CSS 4** | Gestaltung/Design der Seiten |
| **Supabase** | Datenbank + Login (Anfragen speichern) |
| **ESLint** | Prüft Code auf Fehler |
| **Git** | Versionsverwaltung (Verlauf) |

---

## 🟡 3. Wo liegen die Dateien?

**Hauptordner:** `C:\Users\kai_s\Code\HalloHilfe`

```
HalloHilfe/
├── src/app/        → die Seiten (page.tsx je Seite)
│   ├── anfrage/, danke/, kontakt/
│   ├── leistungen/, ueber-mich/
│   └── layout.tsx, globals.css
├── src/lib/        → Hilfscode
│   └── supabase.ts → DB-Verbindung
├── public/         → Bilder & feste Dateien
├── docs/           → Konzepte, PRD, Strategiepapiere
├── .env.local      → geheime Zugangsdaten (Supabase)
├── package.json    → Liste aller Tools
└── STAND.md        → aktueller Projektstand
```

**Merksatz:** Seiten → `src/app/` · Design → `globals.css` · Datenbank → `src/lib/supabase.ts`

---

## 🟣 4. Wo liegt das „Wissen" über das Projekt?

### Im Projekt selbst (für Menschen & Claude)
- `STAND.md` → aktueller Fortschritt & nächste Schritte
- `CLAUDE.md` / `AGENTS.md` → Anweisungen an Claude
- `docs/` → PRD, Strategiekonzept, Zielgruppe
- `docs/PROJEKT-UEBERSICHT.md` → diese Übersicht

### Claudes eigenes Gedächtnis (automatisch, sitzungsübergreifend)
- Ort: `…\.claude\projects\C--Users-kai-s-Code\memory\`
- Datei: `hallohilfe-stand.md` → merkt sich Projektstand zwischen Sitzungen
- Index: `MEMORY.md` → Übersicht aller Notizen

**Kurz:** Faktenwissen steht in `STAND.md` + `docs/`. Das „Langzeitgedächtnis"
zwischen Sitzungen liegt im `memory`-Ordner.
