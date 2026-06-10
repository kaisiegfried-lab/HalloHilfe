import Link from "next/link";

// Über-mich-Seite – schafft Vertrauen und gibt der Hilfe ein Gesicht.
// Die Texte sind Platzhalter und können von Kai angepasst werden.
export default function UeberMichPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Über mich</h1>

      {/* Vorstellung mit Avatar */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-xl font-bold text-tinte">
          KS
        </div>
        <div>
          <p className="text-xl font-bold">Kai Siegfried</p>
          <p className="text-tinte-hell">Persönliche Alltagshilfe in Konstanz</p>
        </div>
      </div>

      {/* Persönlicher Text (Platzhalter – bitte anpassen) */}
      <p className="mt-6 text-lg leading-relaxed">
        Hallo! Ich bin Kai und helfe Menschen in Konstanz und Umgebung im Alltag
        – dort, wo eine helfende Hand gut tut, aber kein Pflegedienst nötig ist.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Ob Einkauf, Garten, Technik oder die Begleitung zu einem Termin: Ich
        komme vorbei, packe mit an und nehme mir Zeit. Persönlich, verlässlich
        und auf Augenhöhe.
      </p>

      {/* Was mir wichtig ist */}
      <h2 className="mt-8 text-2xl font-bold">Was mir wichtig ist</h2>
      <ul className="mt-3 flex flex-col gap-2 text-lg">
        <li className="flex gap-2">
          <span aria-hidden>✓</span> Verlässlichkeit und feste Ansprechperson
        </li>
        <li className="flex gap-2">
          <span aria-hidden>✓</span> Ehrliche, einfache Absprachen
        </li>
        <li className="flex gap-2">
          <span aria-hidden>✓</span> Respekt und ein freundlicher Umgang
        </li>
      </ul>

      {/* Abgrenzung */}
      <p className="mt-8 rounded-2xl bg-creme-dunkel p-4 text-sm text-tinte-hell">
        Hinweis: Ich biete praktische Alltagshilfe – <strong>keine Pflege</strong>,
        keine medizinischen Leistungen und keine Rechtsberatung.
      </p>

      {/* Haupt-Button */}
      <Link
        href="/anfrage"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
      >
        <span aria-hidden>📞</span> Jetzt Hilfe holen
      </Link>
    </main>
  );
}
