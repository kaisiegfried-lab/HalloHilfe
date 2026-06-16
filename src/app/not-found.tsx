import Link from "next/link";

// 404-Seite: erscheint automatisch, wenn eine Adresse nicht existiert.
// Bewusst freundlich und mit klaren Wegen zurück (wichtig für ältere Nutzer).
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col items-center px-5 py-16 text-center">
      {/* Großes, ruhiges Symbol statt technischer Fehlermeldung */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-creme-dunkel text-3xl">
        🔍
      </div>

      <h1 className="mt-6 text-3xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-3 text-lg text-tinte-hell">
        Diese Seite gibt es leider nicht. Vielleicht hilft Ihnen einer dieser
        Wege weiter:
      </p>

      {/* Hauptweg: zurück zur Startseite */}
      <Link
        href="/"
        className="mt-6 w-full rounded-xl bg-gold px-6 py-4 text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
      >
        Zur Startseite
      </Link>

      {/* Nebenweg: direkt eine Anfrage stellen */}
      <Link href="/anfrage" className="mt-4 text-burgund font-semibold underline">
        Oder direkt eine Anfrage stellen
      </Link>
    </main>
  );
}
