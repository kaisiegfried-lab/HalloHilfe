# Abschluss-Präsentation HalloHilfe — Entwurf

_Vibe Coding Bootcamp · finaler Check-In · 10 Min Vortrag + 5 Min Q&A_
_Haltung: KEIN Verkaufs-Pitch. Ehrliche Reflexion, Kompromisse offen zeigen. Publikum = andere Bootcamp-Teilnehmende._
_Arbeitstitel: „HalloHilfe: Von der Idee zur Live-App"_
_Sprache: einfach. Fachbegriffe nur einmal nennen und sofort in einem Satz erklären._

---

## Folie 0 · Vorstellung (~0:30)
**Auf der Folie:** Titel „HalloHilfe: Von der Idee zur Live-App", dein Name, kleines Foto, Live-Adresse.

**Was du sagst:**
- „Ich bin Kai, komme aus dem Online-Marketing. Ich habe im Bootcamp HalloHilfe gebaut — eine App, die älteren Menschen im Alltag hilft. Warum gerade das, dazu gleich."

---

## Folie 1 · Die Idee (~1:00)
**Auf der Folie:** die Idee in einem Satz + ein Bild.

**Was du sagst:**
- Persönlicher Anlass: meine Mutter (77) braucht viel Unterstützung im Alltag — das hat alles ausgelöst.
- Das Problem: Viele ältere Menschen brauchen ganz praktische Hilfe — Einkauf, Garten, Amtsgänge, Technik. Kein Pflegedienst, kein Notruf: ein Mensch, der kommt und hilft.
- **Die Idee in einem Satz:** eine **Selbständigkeit in der Seniorenbetreuung** aufbauen — und die **App als Alleinstellungsmerkmal (USP)**, das mein Angebot von klassischer Alltagshilfe abhebt.
- Ehrlich dazu: Ob ich die Selbständigkeit wirklich gründe, ist noch offen — dazu am Ende mehr.

---

## Folie 2 · Meine wichtigste Annahme & was rauskam (~1:30)
**Auf der Folie:** die Annahme als ein Satz. Darunter: „geprüft durch → gelernt".

**Was du sagst:**
- Meine wichtigste Annahme (Fachwort: Hypothese): „Ein echtes KI-Feature — Technikfragen in einfacher Sprache beantworten — macht das Angebot wertvoll, OHNE die Zielgruppe zu überfordern."
- Zwei Zweifel steckten drin: (a) Trauen sich ältere Menschen überhaupt an so einen Chat? (b) Kann eine KI verlässlich und einfach genug antworten?
- Geprüft: gebaut, live gestellt, mit festen Testfragen automatisch geprüft, echte Fragen laufen rein.
- **Was sich in meinem Denken verändert hat: Vorher** dachte ich „mehr Funktionen = besseres Produkt". **Nachher:** weniger, dafür verlässlich — und ein ehrlicher Rückfallweg ist mehr wert als eine KI, die vorgibt, alles zu können.
- Außerdem gelernt: Die **einfache, kontrollierte** Lösung schlägt die komplizierte. Und ob daraus eine Selbständigkeit wird, ist bewusst noch offen — das Bauen war der erste echte Test der Idee.

---

## Folie 3 · Der Weg: erste Version → brauchbare Version → fertig (~2:00)
**Auf der Folie:** ein Zeitstrahl mit 3 Spalten, pro Spalte 2-3 Punkte. Fokus auf ENTSCHEIDUNGEN, nicht auf lange Feature-Listen.

**Was du sagst:**
- **Erste grobe Version (Prototyp):** einfache Seiten mit Test-Daten, warme „Marktstand"-Optik — bewusst erst das Aussehen und der eine wichtige Weg, noch keine Datenbank.
- **Kleinste brauchbare Version (MVP):** echte Datenbank, Anfrageformular, Admin-Bereich, E-Mail-Benachrichtigung → live im Internet erreichbar.
- **Fertig:** die KI-Technikhilfe, eine transparente Preisseite, diese öffentliche Vortragsseite.
- **Wichtige Entscheidungen / Kurswechsel:**
  - Erst mit Test-Daten, dann echte Datenbank — so war schnell etwas Sichtbares da.
  - Kontaktwege vereinfacht: von 3 gleich großen Knöpfen → 1 großer „Anrufen" + 2 kleine. Für ältere Menschen ist zu viel Auswahl eher Stress.
  - „Termin buchen" bewusst gestrichen — das würde einen festen Termin versprechen, den es so nicht gibt.
- **Bewusst weggelassen:** kein Nutzer-Login, Formular schlank gehalten, keine selbstständig handelnde KI.

---

## Folie 4 · ★ Bauen mit KI-Werkzeugen — das Herzstück (~3:00)
**Auf der Folie:** 4 Blöcke: Arbeitsweise · Was die KI zu sehen bekommt · Automatische Tests · Der eine Bug. Wenig Text, beim Reden vertiefen.

**Was du sagst:**
- **Werkzeug:** Claude Code — eine KI, die direkt im Projekt arbeitet: Dateien lesen und schreiben, Befehle ausführen. **Warum:** Sie ändert und testet direkt im Projekt — dadurch eine schnelle Bau-und-Prüf-Schleife, statt ständig zwischen Chat und Editor hin- und herzukopieren.
- **Arbeitsweise, die funktioniert hat:**
  - `STAND.md` als lebendes Übergabe-Dokument zwischen den Arbeits-Sitzungen — „wo stehe ich, was kommt als Nächstes". Die KI liest es am Anfang und schreibt es am Ende fort. Mein wichtigster Trick, damit die KI den Faden nicht verliert.
  - `CLAUDE.md` als „Steckbrief" des Projekts (Ziel, Zielgruppe, Technik, Arbeitsweise) — einmal geschrieben, bei jeder Anfrage automatisch dabei.
  - Erst Plan zeigen, dann bauen. Kleine Schritte. Auf Deutsch.
- **Agentisch war der Bau — nicht das Produkt:** Beim Bauen plant die KI, führt Befehle aus und testet selbst (das ist „agentisch"). **Konkret genutzt:** Für eine neue Anleitung (echte Frage „1&1 geht nach Anschlusswechsel nicht") habe ich zwei kleine spezialisierte Helfer-KIs eingesetzt (Fachwort: Sub-Agents) — ein „Anleitung-Autor" schrieb den Entwurf, ein „Senioren-Prüfer" prüfte ihn streng gegen eine Senioren-Checkliste. Das *Produkt* selbst bleibt bewusst ohne selbstständige KI.
- **Was die KI zu sehen bekommt (bewusste Entscheidung):** Ich gebe der KI meine handgeprüften Anleitungen direkt als „Beipackzettel" mit in die Frage (Fachwort: Context Injection). Ich habe bewusst NICHT die aufwendigere Technik genommen, bei der die KI sich Texte selbst sucht (Fachwort: RAG), und ihr auch nichts fest antrainiert (Fachwort: Fine-tuning) — für ein paar geprüfte Anleitungen einfacher und verlässlicher.
- **Automatische Tests:** Ein kleines Prüf-Skript stellt der KI immer dieselben Fragen und kontrolliert, ob die Antworten stimmen (auf Knopfdruck). Grundsatz: Jeder Fehler, der einmal auftrat, wird zu einem festen Dauertest — so kann er nicht heimlich zurückkommen.
- **Der eine Bug (ehrlicher Star-Moment):** Live kam bei „mein WLAN geht nicht" der Rückfallweg statt der Antwort. Erste Vermutung: Zufall der KI. Als ich genau diese Frage als festen Test einbaute, kam die **wahre Ursache** raus: die Antwort war zu lang und wurde mittendrin abgeschnitten → für die App unlesbar → Rückfallweg. Die Tests haben mir gezeigt, wo ich falsch geraten hatte.
- **Ehrliche Abwägung (mit Auflösung):** Mein WLAN-Fix („großzügiger zuordnen") half beim WLAN — sorgte aber dafür, dass „1&1 geht nach Anschlusswechsel nicht" selbstsicher eine WLAN-Antwort bekam, obwohl das ein Anbieter-Problem ist. Mehr Treffer, dafür weniger Genauigkeit. Gelöst: eine eigene, ehrliche Anleitung dafür + eine kleine Unterscheidungs-Regel im Prompt. Beim Einbauen tauchte prompt eine neue Zweideutigkeit auf („Internet geht nicht" landete falsch) — **der automatische Test fing es sofort**, dann korrigiert. Genau dieser Kreislauf (ändern → Test → nachschärfen) ist der Kern.
- **Empfehlung an andere:** Ein Kontext-Dokument pflegen (STAND.md), in kleinen Schritten arbeiten, und für das riskante Teil (die KI) so ein Prüf-Skript bauen — nicht alles testen, aber das Unsichere.

---

## Folie 5 · Die KI im Produkt (~1:00)
**Auf der Folie:** Screenshot der Technikhilfe (WLAN-Antwort) + 3 Punkte.

**Was du sagst:**
- Was: Ältere Menschen tippen eine Technikfrage → sie bekommen eine Schritt-für-Schritt-Antwort in einfacher Sprache, mit Quelle. Passt keine Anleitung: ehrlicher Rückfallweg (anrufen / WhatsApp).
- Bewusst **keine selbstständig planende KI** (Fachwort: Agent): ein einzelner, gut kontrollierter Aufruf mit meinen geprüften Anleitungen — verlässlicher und passend für die Zielgruppe.
- Lernschleife: Fragen, für die es keine Anleitung gibt, werden mitgeschrieben → ich ergänze Anleitungen nach echtem Bedarf. Dazu ein Test, der prüft, dass man die KI nicht mit versteckten Befehlen austricksen kann (Fachwort: Prompt Injection).

---

## Folie 6 · Ausblick & nächste Schritte (~1:00)
**Auf der Folie:** 3 nächste Schritte + ein Satz Ausblick.

**Was du sagst:**
- Nächste Schritte: neue Anleitungen aus echten Fragen; ein echter Test mit der Zielgruppe (eine Person löst eine Aufgabe, ich schaue nur zu — Kandidatin: meine Mutter); eine eigene Internet-Adresse.
- Offene Frage (ehrlich): Wird daraus wirklich eine Selbständigkeit in der Seniorenbetreuung? Das Bauen war der erste Realitäts-Test — die Entscheidung steht noch aus.
- Ausblick in einem Satz: „Eine vertrauenswürdige, lokale Anlaufstelle für Alltagshilfe, bei der Technik hilft statt zu überfordern."

---

## Q&A (5:00) — eigene Startfragen vorbereiten
Bring 1-2 eigene Fragen mit, um die Runde zu öffnen, z. B.:
- „Hätte ich die KI weglassen und ganz auf persönliche Hilfe setzen sollen?"
- „Wie weit würdet ihr bei so einer Zielgruppe mit KI gehen — oder bewusst nicht?"

**Sei vorbereitet auf Fragen zu:** Produkt-Entscheidungen (warum keine selbstständige KI?), Technik (wie die KI die Anleitungen nutzt, welche KI/welches Modell), Arbeitsweise (STAND.md, automatische Tests), Herausforderungen (der WLAN-Bug, „viele Treffer vs. genaue Treffer").

---

## Timing-Check (Ziel 10:00, besser 9:00)
| Abschnitt | Zeit |
|---|---|
| 0 Vorstellung | 0:30 |
| 1 Die Idee | 1:00 |
| 2 Wichtigste Annahme | 1:30 |
| 3 Der Weg | 2:00 |
| 4 ★ KI-Werkzeuge | 3:00 |
| 5 KI im Produkt | 1:00 |
| 6 Ausblick | 1:00 |
| **Summe** | **10:00** |

## Format
Ziel: **Google Slides.** Umsetzung: Ich erzeuge eine fertige PowerPoint-Datei (.pptx) aus diesem Entwurf; du lädst sie in Google Drive hoch und öffnest sie mit Google Slides (oder „Datei → Folien importieren"). Danach frei bearbeitbar.

---

## Anhang · Spickzettel für den Vortragstag
_Aus den Guide-Tipps — abzuhaken._

**Vorher (24.–27.07.):**
- [ ] Slot-Liste eingetragen (bis 23.07.): Name, Titel, Beschreibung ≤150 Wörter, One-Pager-Link
- [ ] 1× Generalprobe **mit Timer** — Ziel unter 10 Min (besser 9)
- [ ] Ohne Unterbrechung laut durchsprechen, gern mit Aufnahme
- [ ] Kein neuer Code/keine neuen Folien mehr ab ~1 Tag vorher

**Setup:**
- [ ] Gutes Licht (Gesicht sichtbar), Mikro vorher testen, stabiles Internet
- [ ] Fallback bereit (Handy-Hotspot, Laptop-Mikro)
- [ ] Bildschirm-Teilen geübt; unnötige Tabs/Programme geschlossen
- [ ] In Screenshots/Folien reinzoomen, damit alles lesbar ist

**Am Tag (28./29.07., 10:00):**
- [ ] Pünktlich da, Technik final geprüft
- [ ] Alle Materialien offen: Slides, Live-Seite (hallo-hilfe.vercel.app), One-Pager (/vortrag)
- [ ] 1–2 eigene Q&A-Startfragen bereit
- [ ] Als Zuschauer:in bei der anderen Kohorte: Fragen für die anderen überlegen

**Kurz-Verweise für die Demo (kein Live-Demo-Zwang, aber gut zur Hand):**
- Live-App: https://hallo-hilfe.vercel.app · Technikhilfe: /it-hilfe · One-Pager: /vortrag
