import Link from "next/link";

// Kontaktseite – die einfachsten Wege, mich zu erreichen.
const TELEFON_ANZEIGE = "07531 · 90 22 14";
const TELEFON_LINK = "tel:+497531902214";
const EMAIL = "kontakt@hallohilfe.de";

export default function KontaktPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Kontakt</h1>
      <p className="mt-1 text-tinte-hell">
        Am einfachsten erreichen Sie mich telefonisch.
      </p>

      {/* Burgunder Telefon-Box (wie auf der Startseite) */}
      <div className="mt-6 rounded-2xl bg-burgund px-6 py-5 text-center text-creme shadow-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Anrufen
        </p>
        <a
          href={TELEFON_LINK}
          className="mt-1 block font-serif text-3xl font-bold tracking-wide"
        >
          {TELEFON_ANZEIGE}
        </a>
        <p className="mt-1 text-sm text-creme/80">Mo–Sa · 8 bis 19 Uhr</p>
      </div>

      {/* Weitere Kontaktwege */}
      <div className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <p className="text-lg font-semibold">E-Mail</p>
        <a href={`mailto:${EMAIL}`} className="text-burgund underline">
          {EMAIL}
        </a>
      </div>

      <div className="mt-3 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <p className="text-lg font-semibold">Einsatzgebiet</p>
        <p className="text-tinte-hell">Konstanz und Umgebung</p>
      </div>

      {/* Hinweis aufs Formular */}
      <p className="mt-6 text-center text-tinte-hell">
        Lieber schriftlich? Schicken Sie mir einfach eine Anfrage:
      </p>
      <Link
        href="/anfrage"
        className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
      >
        Anfrage schreiben
      </Link>
    </main>
  );
}
