import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
