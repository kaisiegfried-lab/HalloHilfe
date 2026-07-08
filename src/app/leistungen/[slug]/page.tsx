import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LEISTUNGEN } from "@/lib/leistungen";
import { KontaktButtons } from "@/components/KontaktButtons";

export function generateStaticParams() {
  return LEISTUNGEN.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const leistung = LEISTUNGEN.find((l) => l.slug === slug);
  if (!leistung) return {};

  return {
    title: `${leistung.name} – HalloHilfe`,
    description: leistung.text,
  };
}

export default async function LeistungDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leistung = LEISTUNGEN.find((l) => l.slug === slug);
  if (!leistung) notFound();

  return (
    <main className="mx-auto w-full max-w-md px-5 py-6">
      <Link href="/leistungen" className="text-burgund font-semibold">
        ← Zurück zu allen Leistungen
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-creme-dunkel text-2xl">
          <span aria-hidden>{leistung.icon}</span>
        </div>
        <h1 className="text-3xl font-bold">{leistung.name}</h1>
      </div>

      <p className="mt-4 text-lg text-tinte-hell">{leistung.text}</p>

      {/* Nur bei Technik: eigener, getrennt ausgewiesener Weg zum
          automatischen IT-Hilfe-Chat, zusätzlich zu den normalen
          Kontaktwegen unten. */}
      {leistung.technikChat && (
        <Link
          href="/it-hilfe"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border-2 border-burgund bg-white px-6 py-4 text-center text-xl font-bold text-burgund shadow-sm transition-colors hover:bg-burgund/5"
        >
          <span aria-hidden>⚡</span> IT-Hilfe-Chat starten
        </Link>
      )}

      {/* Weg zur Preisseite – wer die Leistung anschaut, fragt sich als
          Nächstes, was sie kostet. */}
      <p className="mt-6 text-tinte-hell">
        Was kostet das?{" "}
        <Link href="/preise" className="font-semibold text-burgund underline">
          Alle Preise ansehen
        </Link>
      </p>

      <div className="mt-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tinte-hell">
          So erreichen Sie mich
        </p>
        <KontaktButtons />
      </div>
    </main>
  );
}
