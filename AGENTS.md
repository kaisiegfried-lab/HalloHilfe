<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# HalloHilfe – Projektkontext

## Was ist das Projekt?
HalloHilfe ist eine mobile-first Web-App für persönliche Alltagshilfe für
Senior:innen und Angehörige (z. B. Einkaufshilfe, Gartenhilfe, Amtsgänge,
IT-Hilfe). Keine Pflege, keine medizinischen Leistungen, keine Rechtsberatung.

## Tech-Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 fürs Design
- Supabase (Datenbank + Admin-Login)

## Wo liegt was?
- Seiten: `src/app/<name>/page.tsx`
- Layout & globale Styles: `src/app/layout.tsx`, `src/app/globals.css`
- Datenbank-Verbindung: `src/lib/supabase.ts`
- Geheime Zugangsdaten: `.env.local` (nicht ins Git!)
- Konzept/PRD & Übersicht: `docs/`

## Arbeitsweise in diesem Projekt
- Aktueller Stand & nächste Schritte stehen immer in `STAND.md` – dort
  zuerst nachsehen und nach getaner Arbeit aktualisieren.
- Auf Deutsch antworten, einfache Sprache, kleine Schritte, vor dem Coden
  einen Plan zeigen.
- Zielgruppe sind ältere Menschen: große Buttons, hohe Kontraste, klare
  Sprache, mobile-first.
