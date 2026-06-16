import type { Metadata } from "next";
import Link from "next/link";

// Eigener Seitentitel fürs Impressum (erscheint im Browser-Tab / bei Google).
export const metadata: Metadata = {
  title: "Impressum – HalloHilfe",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link wie auf den anderen Unterseiten */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Impressum</h1>

      {/* Pflichtangaben nach § 5 Digitale-Dienste-Gesetz (DDG) */}
      <section className="mt-6 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Angaben gemäß § 5 DDG</h2>
        <p className="mt-2 text-tinte">
          Kai Siegfried
          <br />
          Wiesenstr. 25
          <br />
          78462 Konstanz
        </p>
      </section>

      {/* Kontaktmöglichkeiten */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Kontakt</h2>
        <p className="mt-2 text-tinte">
          Telefon:{" "}
          <a href="tel:+4975312099788" className="text-burgund underline">
            07531 2099788
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:kai.siegfried@gmail.com"
            className="text-burgund underline"
          >
            kai.siegfried@gmail.com
          </a>
        </p>
      </section>

      {/* Hinweis: privates, nicht-gewerbliches Angebot */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Art des Angebots</h2>
        <p className="mt-2 text-tinte">
          HalloHilfe ist ein privates, nicht-gewerbliches Projekt. Es besteht
          keine Gewinnerzielungsabsicht. HalloHilfe bietet keine Pflege, keine
          medizinischen Leistungen und keine Rechtsberatung.
        </p>
      </section>

      {/* Verantwortlich für den Inhalt nach Medienstaatsvertrag */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h2>
        <p className="mt-2 text-tinte">
          Kai Siegfried (Anschrift wie oben)
        </p>
      </section>

      {/* Kurzer Standard-Haftungsausschluss */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Haftung für Inhalte und Links</h2>
        <p className="mt-2 text-tinte">
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
          jedoch keine Gewähr übernommen werden. Diese Website enthält keine
          Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben.
        </p>
      </section>
    </main>
  );
}
