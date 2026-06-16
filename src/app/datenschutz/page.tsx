import type { Metadata } from "next";
import Link from "next/link";

// Eigener Seitentitel für die Datenschutzerklärung.
export const metadata: Metadata = {
  title: "Datenschutz – HalloHilfe",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* Zurück-Link wie auf den anderen Unterseiten */}
      <Link href="/" className="text-burgund font-semibold">
        ← Zurück
      </Link>

      <h1 className="mt-3 text-3xl font-bold">Datenschutz&shy;erklärung</h1>
      <p className="mt-1 text-tinte-hell">
        Hier erfahren Sie, welche Daten wir erheben und wie wir damit umgehen.
      </p>

      {/* Wer ist verantwortlich? */}
      <section className="mt-6 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Verantwortlicher</h2>
        <p className="mt-2 text-tinte">
          Kai Siegfried
          <br />
          Wiesenstr. 25, 78462 Konstanz
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

      {/* Welche Daten werden erhoben? */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Welche Daten wir erheben</h2>
        <p className="mt-2 text-tinte">
          Wenn Sie das Anfrageformular ausfüllen, speichern wir die Angaben, die
          Sie dort machen: Ihr Name, Ihre Telefonnummer, optional Ihre E-Mail,
          für wen die Hilfe ist (ggf. der Name der betreuten Person), die
          gewünschte Leistung, Ihr Ort, ein optionaler Wunschtermin sowie Ihre
          Beschreibung des Anliegens.
        </p>
      </section>

      {/* Wofür und auf welcher Rechtsgrundlage? */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Zweck und Rechtsgrundlage</h2>
        <p className="mt-2 text-tinte">
          Wir verwenden Ihre Daten ausschließlich, um Ihre Anfrage zu bearbeiten
          und mit Ihnen Kontakt aufzunehmen. Rechtsgrundlage ist Ihre
          Einwilligung sowie die Durchführung vorvertraglicher Maßnahmen auf Ihre
          Anfrage hin (Art. 6 Abs. 1 lit. a und b DSGVO).
        </p>
      </section>

      {/* An wen werden Daten weitergegeben? (Auftragsverarbeiter) */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Dienste, die wir nutzen</h2>
        <p className="mt-2 text-tinte">
          Zur Bereitstellung dieser Website und zur Bearbeitung der Anfragen
          setzen wir sorgfältig ausgewählte Dienstleister ein, die Daten in
          unserem Auftrag verarbeiten:
        </p>
        <ul className="mt-2 list-disc pl-5 text-tinte">
          <li>
            <strong>Vercel</strong> – Hosting (Bereitstellung) der Website.
          </li>
          <li>
            <strong>Supabase</strong> – Speicherung der Anfragedaten in einer
            Datenbank.
          </li>
          <li>
            <strong>Resend</strong> – Versand der Benachrichtigungs-E-Mail über
            eine neue Anfrage.
          </li>
        </ul>
        <p className="mt-2 text-tinte">
          Dabei können Daten auch auf Servern außerhalb der EU verarbeitet
          werden. Die Anbieter sind über entsprechende Vereinbarungen zum Schutz
          Ihrer Daten verpflichtet.
        </p>
      </section>

      {/* Wie lange werden Daten gespeichert? */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Speicherdauer</h2>
        <p className="mt-2 text-tinte">
          Wir speichern Ihre Anfrage nur so lange, wie es zur Bearbeitung
          notwendig ist. Danach werden die Daten gelöscht, sofern keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      {/* Rechte der betroffenen Person */}
      <section className="mt-4 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <h2 className="text-lg font-bold">Ihre Rechte</h2>
        <p className="mt-2 text-tinte">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer Daten. Eine erteilte Einwilligung
          können Sie jederzeit widerrufen. Außerdem haben Sie das Recht, sich bei
          einer Datenschutz-Aufsichtsbehörde zu beschweren. Wenden Sie sich dazu
          einfach an die oben genannten Kontaktdaten.
        </p>
      </section>
    </main>
  );
}
