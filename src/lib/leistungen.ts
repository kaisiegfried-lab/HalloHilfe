// Leistungsdaten zentral an einer Stelle – von der Startseite, der
// Leistungsübersicht und den einzelnen Leistungs-Unterseiten genutzt.
export type Leistung = {
  slug: string;
  icon: string;
  name: string;
  // Kurzer Ein-Zeiler für Kacheln und Übersichtsliste.
  kurztext: string;
  // Etwas ausführlicherer Text für die eigene Unterseite.
  text: string;
  // Nur bei Technik: zeigt zusätzlich den Button zum IT-Hilfe-Chat.
  technikChat?: boolean;
};

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "einkauf",
    icon: "🛒",
    name: "Einkauf",
    kurztext: "Hilfe beim Einkaufen oder kleine Besorgungen",
    text: "Ich erledige für Sie den Wocheneinkauf oder kleinere Besorgungen – ganz nach Ihrer Einkaufsliste. Auch das Abholen von Medikamenten in der Apotheke oder kleine Botengänge sind möglich. Sie sagen mir, was Sie brauchen, ich bringe es Ihnen persönlich vorbei.",
  },
  {
    slug: "garten",
    icon: "🌿",
    name: "Garten",
    kurztext: "Rasenmähen, Gießen, leichte Gartenarbeiten",
    text: "Ich übernehme einfache Gartenarbeiten wie Rasenmähen, Gießen, Unkraut jäten und Heckenschneiden. Auch das Zusammenkehren von Laub im Herbst gehört dazu. Größere Arbeiten wie Baumfällungen biete ich nicht an – dafür empfehle ich Ihnen gerne einen Fachbetrieb.",
  },
  {
    slug: "technik",
    icon: "💻",
    name: "Technik",
    kurztext: "Handy, WLAN, Drucker oder Fernseher",
    text: "Ob Handy, Tablet, WhatsApp, E-Mail, WLAN oder Videoanrufe mit der Familie – ich helfe Ihnen geduldig und in einfachen Worten weiter, persönlich vor Ort oder direkt am Telefon.",
    technikChat: true,
  },
  {
    slug: "begleitung",
    icon: "🚶",
    name: "Begleitung",
    kurztext: "Mitfahren oder Begleitung zu Terminen",
    text: "Ich begleite Sie zu Arztterminen, Behördengängen und anderen Terminen, damit Sie nicht allein unterwegs sind. Auch beim Ausfüllen von Formularen helfe ich gerne. Ein gemeinsamer Spaziergang oder die Begleitung zu einer Veranstaltung ist ebenfalls möglich. Hinweis: keine Rechtsberatung.",
  },
  {
    slug: "kleine-erledigungen",
    icon: "📦",
    name: "Kleine Erledigungen",
    kurztext: "Botengänge",
    text: "Post aufgeben, ein Päckchen abholen oder ein kleiner Botengang zwischendurch: Für alles, was gerade nicht in Ihren Tag passt, bin ich gerne für Sie unterwegs.",
  },
];
