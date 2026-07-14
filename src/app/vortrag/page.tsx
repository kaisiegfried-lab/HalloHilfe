import type { Metadata } from "next";
import Link from "next/link";

// One-Pager / Präsentationsseite für den finalen Bootcamp-Check-In.
// Öffentlich erreichbar, auf einer A4-Seite druckbar (Browser → Drucken → PDF).
// Bewusst NICHT im Footer verlinkt und per robots ausgeschlossen, damit sie
// nicht in Suchmaschinen zum Geschäft HalloHilfe auftaucht.
export const metadata: Metadata = {
  title: "Vortrag: HalloHilfe – Vibe Coding Bootcamp",
  description:
    "One-Pager zum Abschluss-Vortrag über HalloHilfe: eine mit KI gebaute App für persönliche Alltagshilfe für Senior:innen.",
  robots: { index: false, follow: false },
};

// ─── PERSÖNLICHE ANGABEN — bitte prüfen/ergänzen (PLATZHALTER) ──────────────
const SPRECHER = {
  name: "Kai Siegfried",
  bio: "Beruflich bin ich seit Jahren im Online-Marketing zu Hause. Die Idee zu HalloHilfe entstand durch meine Mutter: Mit 77 muss sie noch einmal umziehen und braucht auch sonst viel Unterstützung im Alltag. Im Vibe-Coding-Bootcamp habe ich gelernt, daraus mit KI eine echte, live nutzbare App zu bauen.",
  linkedin: "https://www.linkedin.com/in/kaisiegfried/",
  // TODO Kai: kleines Foto von dir unter public/vortrag-kai.jpg ablegen.
  fotoUrl: "/vortrag-kai.jpg",
};

const TALK = {
  // TODO Kai: Titel final wählen (siehe Vorschläge im Chat).
  titel: "HalloHilfe: Von der Idee zur Live-App",
  untertitel: "Mit KI eine App für eine übersehene Zielgruppe bauen",
  kurzbeschreibung:
    "HalloHilfe ist eine mobile-first Web-App für persönliche Alltagshilfe für Senior:innen und ihre Angehörigen. Ihr Herzstück: ein KI-Assistent, der einfache Technikfragen in verständlicher Sprache beantwortet.",
  // Fließtext (~130 Wörter) – passt auch als Beschreibung für die Slot-Liste.
  beschreibung:
    "In diesem Vortrag nehme ich euch mit auf meinen Weg vom ersten Prototyp zur fertigen, live deployten App. HalloHilfe hilft älteren Menschen ganz praktisch im Alltag – vom Einkauf über Gartenhilfe bis zu Technikfragen. Das Herzstück meiner Erfahrung war das Bauen mit KI-Coding-Tools: Wie ich meinen Workflow strukturiert habe, welche Entscheidungen ich bewusst getroffen (und wieder verworfen) habe und was gut funktioniert hat. Ich zeige ehrlich, wo ich Umwege gegangen bin – zum Beispiel bei meinem KI-Feature, das Technikfragen in einfacher Sprache beantwortet, und einem Bug, dessen wahre Ursache erst ein Test-Harness aufdeckte. Am Ende teile ich, was ich als Nächstes bauen würde und was ich anderen empfehlen kann.",
};

const LINKS = {
  live: "https://hallo-hilfe.vercel.app",
  // TODO Kai: Repo ist aktuell privat. Für die Frist entweder öffentlich
  // schalten oder einen anderen Link angeben.
  repo: "https://github.com/kaisiegfried-lab/HalloHilfe",
};
// ────────────────────────────────────────────────────────────────────────────

export default function VortragPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-8 print:py-4">
      {/* Kopf: Projektname + Talk-Titel */}
      <header className="rounded-2xl bg-burgund px-6 py-6 text-creme print:bg-white print:text-tinte print:border print:border-creme-dunkel">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          Vibe Coding Bootcamp · Finaler Check-In
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-creme print:text-tinte">
          {TALK.titel}
        </h1>
        <p className="mt-1 text-lg text-creme/90 print:text-tinte-hell">
          {TALK.untertitel}
        </p>
      </header>

      {/* Kurzbeschreibung */}
      <p className="mt-5 text-lg text-tinte">{TALK.kurzbeschreibung}</p>

      {/* Screenshot der App (IT-Soforthilfe mit WLAN-Antwort – zeigt das
          KI-Feature in Aktion). Hochformat wie auf dem Handy. */}
      <div className="mt-5 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vortrag-screenshot.png"
          alt="Screenshot der IT-Soforthilfe mit einer Schritt-für-Schritt-Antwort auf eine WLAN-Frage"
          className="max-h-[520px] w-auto rounded-2xl border border-creme-dunkel shadow-sm"
        />
      </div>

      {/* Über den Vortrag */}
      <section className="mt-6">
        <h2 className="text-xl font-bold">Worum geht es?</h2>
        <p className="mt-2 text-tinte">{TALK.beschreibung}</p>
      </section>

      {/* Sprecher */}
      <section className="mt-6 rounded-2xl border border-creme-dunkel bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Über mich</h2>
        <div className="mt-3 flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SPRECHER.fotoUrl}
            alt={`Foto von ${SPRECHER.name}`}
            className="h-20 w-20 shrink-0 rounded-full border border-creme-dunkel bg-creme-dunkel object-cover"
          />
          <div>
            <p className="text-lg font-bold">{SPRECHER.name}</p>
            <p className="mt-1 text-sm text-tinte-hell">{SPRECHER.bio}</p>
            {SPRECHER.linkedin && (
              <a
                href={SPRECHER.linkedin}
                className="mt-2 inline-block font-semibold text-burgund underline"
              >
                LinkedIn-Profil
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={LINKS.live}
          className="flex-1 rounded-xl bg-gold px-5 py-4 text-center text-lg font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
        >
          🌐 Live-Version ansehen
        </a>
        <a
          href={LINKS.repo}
          className="flex-1 rounded-xl border border-gold px-5 py-4 text-center text-lg font-bold text-burgund transition-colors hover:bg-gold/10"
        >
          💻 Code auf GitHub
        </a>
      </section>

      {/* dezenter Zurück-Link, nur am Bildschirm */}
      <div className="mt-8 print:hidden">
        <Link href="/" className="text-sm text-tinte-hell hover:text-burgund">
          ← Zur HalloHilfe-Startseite
        </Link>
      </div>
    </main>
  );
}
