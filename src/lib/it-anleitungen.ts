// Lädt alle IT-Anleitungen aus src/content/it-anleitungen. Reines
// Server-Modul (nutzt Node-"fs") – darf nie von einer "use client"-Datei
// importiert werden.
import fs from "fs";
import path from "path";

const ORDNER = path.join(process.cwd(), "src/content/it-anleitungen");

export type Anleitung = {
  titel: string;
  inhalt: string;
};

export function ladeAnleitungen(): Anleitung[] {
  const dateien = fs.readdirSync(ORDNER).filter((d) => d.endsWith(".md"));

  return dateien.map((datei) => {
    const inhalt = fs.readFileSync(path.join(ORDNER, datei), "utf-8");
    // Der Titel ist die erste "# "-Überschrift der Datei.
    const erste_zeile = inhalt.split("\n")[0] ?? "";
    const titel = erste_zeile.replace(/^#\s*/, "").trim() || datei;
    return { titel, inhalt };
  });
}
