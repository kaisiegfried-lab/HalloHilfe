import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Serifen-Schrift für Überschriften — warm und persönlich (Marktstand-Optik)
const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

// Gut lesbare Schrift für Fließtext — wichtig für Senior:innen
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HalloHilfe – Persönliche Alltagshilfe",
  description:
    "Persönliche Alltagshilfe für Senior:innen und Angehörige. Kein Pflegedienst, kein Notruf – ein Mensch, der kommt und hilft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Seiteninhalt – wächst, damit der Footer unten bleibt */}
        <div className="flex-1">{children}</div>

        {/* Gemeinsamer Footer mit den rechtlich nötigen Links.
            Erscheint auf allen Seiten, da im Root-Layout. */}
        <footer className="border-t border-creme-dunkel px-5 py-6 text-center text-sm text-tinte-hell">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/impressum" className="hover:text-burgund">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-burgund">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="hover:text-burgund">
              Kontakt
            </Link>
          </nav>
          <p className="mt-3">© {new Date().getFullYear()} HalloHilfe · Konstanz</p>
        </footer>
      </body>
    </html>
  );
}
