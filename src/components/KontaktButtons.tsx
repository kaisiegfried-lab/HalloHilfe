import Link from "next/link";
import { TELEFON_ANZEIGE, TELEFON_LINK, WHATSAPP_LINK } from "@/lib/kontakt";

// Anrufen ist die eine klare Haupt-Aktion (für die Zielgruppe die
// vertrauteste, einfachste Handlung – kein Tippen nötig). WhatsApp und
// Kontaktformular sind bewusst kleiner und nebeneinander als sekundäre
// Alternativen angeboten, damit nicht bei jedem Besuch eine
// "welchen von drei gleich großen Buttons nehme ich"-Entscheidung ansteht.
export function KontaktButtons() {
  return (
    <div className="flex flex-col gap-3">
      <a
        href={TELEFON_LINK}
        className="flex items-center justify-center gap-2 rounded-xl bg-burgund px-6 py-4 text-center text-xl font-bold text-creme shadow-sm transition-colors hover:bg-burgund-dunkel"
      >
        <span aria-hidden>📞</span> Jetzt anrufen: {TELEFON_ANZEIGE}
      </a>
      <div className="grid grid-cols-2 gap-3">
        <a
          href={WHATSAPP_LINK}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-3 py-3 text-center text-sm font-bold leading-tight text-white shadow-sm transition-colors hover:bg-green-700"
        >
          <span aria-hidden>💬</span> WhatsApp schreiben
        </a>
        <Link
          href="/anfrage"
          className="flex items-center justify-center gap-2 rounded-xl bg-gold px-3 py-3 text-center text-sm font-bold leading-tight text-tinte shadow-sm transition-colors hover:bg-gold-dunkel"
        >
          <span aria-hidden>✍️</span> Hilfe anfragen
        </Link>
      </div>
    </div>
  );
}
