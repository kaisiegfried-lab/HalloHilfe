import Link from "next/link";

// Telefonnummer zentral definiert – wird an mehreren Stellen genutzt.
const TELEFON_ANZEIGE = "07531 · 90 22 14";
const TELEFON_LINK = "tel:+497531902214";

// Leistungen als Daten-Array. So können wir sie später auch auf der
// Leistungsseite und im Anfrageformular wiederverwenden.
const leistungen = [
  {
    icon: "🛒",
    name: "Einkauf",
    text: "Hilfe beim Einkaufen oder kleine Besorgungen",
  },
  {
    icon: "🌿",
    name: "Garten",
    text: "Rasenmähen, Gießen, leichte Gartenarbeiten",
  },
  {
    icon: "💻",
    name: "Technik",
    text: "Handy, WLAN, Drucker oder Fernseher",
  },
  {
    icon: "🚶",
    name: "Begleitung",
    text: "Mitfahren oder Begleitung zu Terminen",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      {/* 1. Burgunder Telefon-Box */}
      <div className="rounded-2xl bg-burgund px-6 py-5 text-center text-creme shadow-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          HalloHilfe · Konstanz
        </p>
        <a
          href={TELEFON_LINK}
          className="mt-1 block font-serif text-3xl font-bold tracking-wide"
        >
          {TELEFON_ANZEIGE}
        </a>
        <p className="mt-1 text-sm text-creme/80">Mo–Sa · 8 bis 19 Uhr</p>
      </div>

      {/* 2. Überschrift */}
      <h1 className="mt-7 text-center text-3xl font-bold leading-tight">
        Was kann ich
        <br />
        für Sie tun?
      </h1>

      {/* 3. Goldener Haupt-Button (führt später zum Anfrageformular) */}
      <Link
        href="/anfrage"
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-center text-xl font-bold text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
      >
        <span aria-hidden>📞</span> Jetzt Hilfe holen
      </Link>

      {/* 4. Service-Karten */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {leistungen.map((l) => (
          <Link
            key={l.name}
            href="/leistungen"
            className="rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-creme-dunkel text-xl">
              <span aria-hidden>{l.icon}</span>
            </div>
            <h2 className="mt-3 text-lg font-bold">{l.name}</h2>
            <p className="mt-1 text-sm text-tinte-hell">{l.text}</p>
          </Link>
        ))}
      </div>

      {/* Kleine Erledigungen – über volle Breite */}
      <Link
        href="/leistungen"
        className="mt-3 block rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm transition-colors hover:border-burgund"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-creme-dunkel text-xl">
          <span aria-hidden>📦</span>
        </div>
        <h2 className="mt-3 text-lg font-bold">Kleine Erledigungen</h2>
        <p className="mt-1 text-sm text-tinte-hell">Botengänge</p>
      </Link>

      {/* 5. Anbieter-Karte */}
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-creme-dunkel bg-white p-4 shadow-sm">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-tinte">
          KS
        </div>
        <div>
          <p className="font-bold">Kai Siegfried</p>
          <p className="text-sm text-tinte-hell">
            Hilft in Konstanz · Mo–Sa · 8 bis 19 Uhr
          </p>
        </div>
      </div>

      {/* 6. Footer-Satz */}
      <p className="mt-8 text-center text-sm text-tinte-hell">
        Kein Pflegedienst. Kein Notruf. Ein Mensch, der kommt und macht.
      </p>
    </main>
  );
}
