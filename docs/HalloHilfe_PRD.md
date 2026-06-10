# Product Requirements Document (PRD)
# HalloHilfe – Persönliche Alltagshilfe für Senior:innen

## 1. Produktübersicht

**HalloHilfe** ist eine mobile-first Web-App für einen persönlichen Dienstleistungsservice für Senior:innen. Die App ermöglicht es Senior:innen und Angehörigen, unkompliziert Alltagshilfe anzufragen – zum Beispiel Einkaufshilfe, Rasenmähen, Begleitung zu Amtsgängen, kleine Erledigungen oder einfache IT-Hilfe.

Die App dient gleichzeitig als Verwaltungs-Dashboard für den Anbieter, um Anfragen, Kund:innen, Termine, Status und interne Notizen übersichtlich zu verwalten.

**Wichtig:** HalloHilfe bietet keine Pflege, keine medizinischen Leistungen und keine Rechtsberatung an.

---

## 2. Ziel des MVP

Der MVP soll eine funktionierende, präsentierbare und realistisch nutzbare Web-App sein, mit der:

1. Senior:innen oder Angehörige Alltagshilfe anfragen können.
2. Der Anbieter eingehende Anfragen im Dashboard verwalten kann.
3. Leistungen klar erklärt und von Pflegeleistungen abgegrenzt werden.
4. Die App auf mobilen Geräten besonders einfach bedienbar ist.
5. Das Projekt später als Grundlage für ein echtes Dienstleistungsbusiness genutzt werden kann.

---

## 3. Zielgruppen

### Senior:innen

Senior:innen, die Unterstützung im Alltag benötigen, aber keine Pflegeleistung suchen.

**Bedürfnisse:**

- einfache Bedienung
- grosse Buttons
- klare Sprache
- persönliche Rückmeldung
- Vertrauen
- schnelle Kontaktaufnahme

### Angehörige

Angehörige, die für Eltern, Grosseltern oder nahestehende Personen Unterstützung organisieren möchten.

**Bedürfnisse:**

- Hilfe aus der Ferne anfragen
- klare Leistungsübersicht
- einfache Kontaktaufnahme
- seriöser Anbieter
- transparente Abgrenzung zu Pflege und medizinischen Leistungen

### Anbieter / Admin

Der Dienstleister, der Anfragen prüft, Termine organisiert und Kund:innen betreut.

**Bedürfnisse:**

- neue Anfragen schnell sehen
- Status verwalten
- Kundendaten einsehen
- interne Notizen erfassen
- Überblick über offene und erledigte Aufträge behalten

---

## 4. Positionierung

> **HalloHilfe ist eine einfache App für persönliche Alltagshilfe ohne Pflegeleistungen – gemacht für Senior:innen und Angehörige, die schnell, verständlich und vertrauensvoll Unterstützung organisieren möchten.**

---

## 5. Kernproblem

Viele Senior:innen brauchen praktische Unterstützung im Alltag, aber keine klassische Pflege. Angehörige möchten helfen, sind aber oft nicht vor Ort. Gleichzeitig sind digitale Lösungen für ältere Menschen häufig zu kompliziert, unpersönlich oder nicht vertrauenswürdig genug.

Anfragen über Telefon, WhatsApp oder Notizzettel sind für den Anbieter schwer zu strukturieren und nachzuverfolgen.

---

## 6. Produktlösung

HalloHilfe löst dieses Problem mit einer einfachen mobilen Web-App:

- klare Leistungsübersicht
- einfaches Anfrageformular
- persönliche Rückmeldung statt automatischer Buchung
- Admin-Dashboard zur Anfrageverwaltung
- seniorenfreundliches Design
- klare Abgrenzung zu Pflege, Medizin und Rechtsberatung

---

## 7. MVP-Scope

### In Version 1 enthalten

#### Öffentlicher Bereich

- Startseite
- Leistungsübersicht
- Anfrageformular
- Bestätigungsseite
- Über-mich-/Vertrauensbereich
- Kontaktbereich
- Rechtliche Abgrenzung: keine Pflege, keine medizinischen Leistungen, keine Rechtsberatung

#### Admin-Bereich

- Login für Anbieter/Admin
- Dashboard mit allen Anfragen
- Detailansicht pro Anfrage
- Statusverwaltung
- Kund:inneninformationen
- interne Notizen
- einfache Termin- oder Wunschdatum-Übersicht

### Nicht in Version 1 enthalten

- Kund:innen-Login
- direkte Online-Terminbuchung
- Online-Zahlung
- Bewertungen
- Chat zwischen Kund:innen und Anbieter
- GPS-Ortung
- echte Notfallfunktion
- Kalender-Synchronisation
- komplexe KI-Funktionen
- automatische Rechnungsstellung
- Mehranbieter-Plattform
- Vermittlung fremder Helfer:innen

---

## 8. Kernfunktionen

### 8.1 Startseite

**Ziel:** Sofort vermitteln, worum es geht und wie Nutzer:innen Hilfe anfragen können.

**Inhalte:**

- kurze Begrüssung
- klare Positionierung
- Haupt-Call-to-Action: **Hilfe anfragen**
- Leistungsbuttons:
  - Einkaufshilfe
  - Gartenhilfe
  - Amtsgänge
  - IT-Hilfe
  - Kleine Erledigungen
  - Sonstige Hilfe
- Hinweis: **Keine Pflegeleistungen**

**UX-Anforderungen:**

- mobile-first
- grosse Buttons
- kurze Texte
- hohe Kontraste
- keine verschachtelte Navigation

### 8.2 Leistungsübersicht

**Ziel:** Nutzer:innen sollen schnell verstehen, welche Hilfe angeboten wird und welche Leistungen ausgeschlossen sind.

**Leistungen:**

#### Einkaufshilfe

Unterstützung beim Einkaufen oder Übernahme kleiner Einkäufe nach Absprache.

#### Gartenhilfe

Einfache Gartenarbeiten wie Rasenmähen, Giessen oder leichte Unterstützung im Aussenbereich.

#### Amtsgänge

Begleitung zu Behörden, organisatorische Unterstützung und Hilfe beim Vorbereiten einfacher Unterlagen.

**Wichtig:** Keine Rechtsberatung.

#### IT-Hilfe

Unterstützung bei einfachen technischen Fragen rund um Handy, Tablet, WhatsApp, E-Mail, WLAN oder Videoanrufe.

#### Kleine Erledigungen

Hilfe bei alltäglichen Aufgaben wie Post, Abholungen, Botengängen oder kleinen organisatorischen Dingen.

#### Sonstige Hilfe

Freitext-Anfrage für individuelle Anliegen, die manuell geprüft werden.

### 8.3 Anfrageformular

**Ziel:** Nutzer:innen sollen mit möglichst wenig Aufwand eine strukturierte Anfrage senden können.

| Feld | Pflichtfeld | Beschreibung |
|---|---:|---|
| Name | Ja | Name der anfragenden Person |
| Telefonnummer | Ja | Rückrufnummer |
| E-Mail | Nein | Optionaler Kontaktweg |
| Hilfe für | Ja | Für mich selbst / Für eine andere Person |
| Name der hilfebedürftigen Person | Bedingt | Nur bei Hilfe für andere Person |
| Gewünschte Leistung | Ja | Auswahl aus Service-Kategorien |
| Ort / Region | Ja | Einsatzort |
| Wunschdatum | Nein | Gewünschter Termin oder Zeitraum |
| Beschreibung | Ja | Kurze Beschreibung des Anliegens |
| Zustimmung zur Kontaktaufnahme | Ja | Checkbox |
| Hinweis akzeptiert | Ja | Keine Pflege, keine Medizin, keine Rechtsberatung |

**Verhalten:**

- Nach Absenden wird eine neue Anfrage gespeichert.
- Danach Weiterleitung auf die Bestätigungsseite.
- Kund:innen erhalten keine automatische Buchungsbestätigung, sondern den Hinweis auf persönliche Rückmeldung.

### 8.4 Bestätigungsseite

**Ziel:** Sicherheit und Vertrauen nach Absenden der Anfrage schaffen.

**Beispieltext:**

> Vielen Dank für Ihre Anfrage. Ich prüfe Ihr Anliegen und melde mich persönlich bei Ihnen, um alles Weitere zu besprechen.

### 8.5 Admin-Dashboard

**Ziel:** Der Anbieter soll alle Anfragen strukturiert verwalten können.

**Funktionen:**

- Liste aller Anfragen
- Filter nach Status
- Detailansicht pro Anfrage
- Status ändern
- interne Notizen hinzufügen
- Kund:inneninformationen sehen
- Anfrage als erledigt markieren

**Anfrage-Status:**

| Status | Bedeutung |
|---|---|
| Neu | Anfrage ist neu eingegangen |
| In Prüfung | Anbieter prüft die Anfrage |
| Bestätigt | Auftrag wurde bestätigt |
| Erledigt | Auftrag wurde abgeschlossen |
| Abgelehnt | Anfrage wurde abgelehnt |

---

## 9. User Stories

| Rolle | User Story | Akzeptanzkriterium |
|---|---|---|
| Senior:in | Ich möchte schnell Alltagshilfe anfragen. | Ich kann über grosse Buttons eine Leistung auswählen und ein Formular absenden. |
| Senior:in | Ich möchte verstehen, welche Hilfe angeboten wird. | Jede Leistung wird einfach und verständlich erklärt. |
| Senior:in | Ich möchte wissen, dass es keine Pflege-App ist. | Die Abgrenzung ist gut sichtbar kommuniziert. |
| Angehörige:r | Ich möchte Hilfe für eine andere Person anfragen. | Im Formular kann ich „Für eine andere Person“ auswählen. |
| Angehörige:r | Ich möchte eine Rückmeldung erhalten. | Nach Absenden weiss ich, dass persönliche Kontaktaufnahme folgt. |
| Anbieter | Ich möchte neue Anfragen sehen. | Neue Anfragen erscheinen im Admin-Dashboard. |
| Anbieter | Ich möchte Anfragen verwalten. | Ich kann Status und interne Notizen bearbeiten. |
| Anbieter | Ich möchte Kund:inneninformationen einsehen. | In der Detailansicht sehe ich alle relevanten Kontaktdaten. |

---

## 10. Datenmodell

### 10.1 User

| Feld | Typ | Beschreibung |
|---|---|---|
| id | UUID | Eindeutige ID |
| name | Text | Name |
| email | Text | E-Mail |
| phone | Text | Telefonnummer |
| role | Enum | admin, customer, relative |
| address | Text | Adresse oder Region |
| created_at | Timestamp | Erstellungsdatum |

### 10.2 ServiceType

| Feld | Typ | Beschreibung |
|---|---|---|
| id | UUID | Eindeutige ID |
| name | Text | Name der Leistung |
| slug | Text | URL-freundlicher Name |
| description | Text | Beschreibung |
| is_active | Boolean | Sichtbar oder nicht sichtbar |

**Standardwerte:**

- Einkaufshilfe
- Gartenhilfe
- Amtsgänge
- IT-Hilfe
- Kleine Erledigungen
- Sonstige Hilfe

### 10.3 ServiceRequest

| Feld | Typ | Beschreibung |
|---|---|---|
| id | UUID | Eindeutige ID |
| requester_name | Text | Name der anfragenden Person |
| requester_phone | Text | Telefonnummer |
| requester_email | Text | Optionale E-Mail |
| request_for | Enum | self, other |
| senior_name | Text | Name der hilfebedürftigen Person |
| service_type_id | UUID | Gewählte Leistung |
| location | Text | Ort / Region |
| preferred_date | Date/Text | Wunschdatum oder Zeitraum |
| description | Text | Beschreibung |
| status | Enum | new, reviewing, confirmed, completed, rejected |
| consent_contact | Boolean | Zustimmung zur Kontaktaufnahme |
| disclaimer_accepted | Boolean | Hinweis akzeptiert |
| internal_notes | Text | Notizen für Admin |
| created_at | Timestamp | Erstellungsdatum |
| updated_at | Timestamp | Letzte Änderung |

### 10.4 Appointment

| Feld | Typ | Beschreibung |
|---|---|---|
| id | UUID | Eindeutige ID |
| service_request_id | UUID | Verknüpfte Anfrage |
| appointment_date | DateTime | Termin |
| duration_minutes | Number | Dauer |
| status | Enum | planned, completed, cancelled |
| notes | Text | Terminnotizen |
| created_at | Timestamp | Erstellungsdatum |

### 10.5 AdminNote

| Feld | Typ | Beschreibung |
|---|---|---|
| id | UUID | Eindeutige ID |
| service_request_id | UUID | Verknüpfte Anfrage |
| note | Text | Interne Notiz |
| created_at | Timestamp | Erstellungsdatum |

---

## 11. Seitenstruktur für Lovable

### Öffentliche Seiten

| Route | Seite |
|---|---|
| `/` | Startseite |
| `/leistungen` | Leistungsübersicht |
| `/anfrage` | Anfrageformular |
| `/danke` | Bestätigungsseite |
| `/ueber-mich` | Anbieterprofil / Vertrauensseite |
| `/kontakt` | Kontaktinformationen |

### Admin-Seiten

| Route | Seite |
|---|---|
| `/admin/login` | Login für Anbieter/Admin |
| `/admin` | Dashboard mit Übersicht aller Anfragen |
| `/admin/anfragen` | Tabellarische Liste aller Anfragen |
| `/admin/anfragen/:id` | Detailansicht einer Anfrage |
| `/admin/kunden` | Übersicht über Kund:innen oder wiederkehrende Kontakte |

---

## 12. Design- und UX-Anforderungen

### Grundprinzipien

- mobile-first
- barrierearm
- grosse Schrift
- grosse Buttons
- hohe Kontraste
- einfache Sprache
- wenige Klicks
- klare Rückmeldungen
- keine überladenen Screens

### Visuelle Anforderungen

#### Buttons

- gross und gut klickbar
- eindeutige Beschriftung
- Icons nur ergänzend, nie allein
- primärer CTA visuell hervorgehoben

#### Schrift

- gut lesbare Schrift
- keine sehr kleinen Textgrössen
- klare Hierarchie

#### Farben

- ruhige, vertrauenswürdige Farbwelt
- starker Kontrast für wichtige Aktionen
- keine rein farbliche Statuskommunikation ohne Text

### Sprache

**Tonalität:**

- freundlich
- ruhig
- vertrauensvoll
- respektvoll
- einfach verständlich

**Vermeiden:**

- Fachbegriffe
- komplizierte Formulierungen
- juristisch klingende Sprache
- Angst erzeugende Begriffe

---

## 13. Technische Anforderungen

### Empfohlener Stack

Für Lovable optimiert:

- Frontend: React / Next.js
- Styling: Tailwind CSS
- Backend: Supabase
- Datenbank: Supabase Postgres
- Auth: Supabase Auth nur für Admin
- Hosting: Vercel oder Lovable Deployment
- Optional KI: OpenAI API für IT-Soforthilfe

### Authentifizierung

#### Version 1

- Nur Admin benötigt Login.
- Kund:innen und Angehörige benötigen keinen Account.
- Anfrageformular ist öffentlich zugänglich.

#### Rollen

| Rolle | Zugriff |
|---|---|
| Öffentlich | Startseite, Leistungen, Anfrageformular, Kontakt |
| Admin | Dashboard, Anfragen, Kund:innen, Notizen |

### Formularlogik

- Pflichtfelder validieren
- Telefonnummer muss ausgefüllt sein
- Checkbox für Kontaktaufnahme muss akzeptiert werden
- Disclaimer muss akzeptiert werden
- Bei erfolgreicher Anfrage Weiterleitung auf `/danke`
- Anfrage wird in der Datenbank gespeichert

### Admin-Logik

Admin kann:

- alle Anfragen sehen
- Anfragen nach Status filtern
- Detailansicht öffnen
- Status ändern
- interne Notizen speichern
- Anfrage als erledigt markieren
- Anfrage ablehnen

---

## 14. Rechtliche und inhaltliche Abgrenzung

Die App muss klar kommunizieren:

- keine Pflegeleistungen
- keine medizinische Betreuung
- keine Medikamentengabe
- keine Körperpflege
- keine Rechtsberatung
- keine Notfall-App
- bei medizinischen Notfällen immer offizielle Notrufnummer verwenden

**Beispielhinweis:**

> HalloHilfe bietet praktische Alltagshilfe. Es werden keine Pflegeleistungen, keine medizinischen Leistungen und keine Rechtsberatung angeboten. Bei akuten Notfällen wenden Sie sich bitte direkt an die offizielle Notrufnummer.

---

## 15. Erfolgskriterien für den MVP

Der MVP gilt als erfolgreich, wenn:

1. Nutzer:innen auf dem Smartphone eine Anfrage ohne Erklärung absenden können.
2. Der Anbieter die Anfrage im Admin-Dashboard sieht.
3. Der Anbieter Status und Notizen bearbeiten kann.
4. Die App klar und vertrauenswürdig wirkt.
5. Die Abgrenzung zu Pflege und medizinischer Hilfe eindeutig ist.
6. Die App in einer Bootcamp-Demo verständlich präsentiert werden kann.
7. Der MVP als Grundlage für ein reales Dienstleistungsbusiness nutzbar ist.

---

## 16. Akzeptanzkriterien

### Öffentlicher Bereich

- Die Startseite lädt auf mobilen Geräten sauber.
- Nutzer:innen sehen sofort den Hauptnutzen.
- Alle Leistungen sind verständlich beschrieben.
- Anfrageformular kann vollständig ausgefüllt und abgeschickt werden.
- Pflichtfelder werden validiert.
- Nach erfolgreichem Absenden erscheint eine Bestätigungsseite.

### Admin-Bereich

- Admin kann sich einloggen.
- Admin sieht neue Anfragen.
- Admin kann Anfrage-Details öffnen.
- Admin kann Status ändern.
- Admin kann interne Notizen speichern.
- Admin kann erledigte Anfragen erkennen.

### UX

- Hauptaktionen sind auch für ältere Nutzer:innen leicht auffindbar.
- Buttons sind gross und eindeutig beschriftet.
- Texte sind kurz und verständlich.
- Keine Seite wirkt überladen.
- Die wichtigsten Aktionen sind mit maximal 2 bis 3 Klicks erreichbar.

---

## 17. Priorisierung

### Must-have

- Startseite
- Leistungsübersicht
- Anfrageformular
- Bestätigungsseite
- Admin-Login
- Admin-Dashboard
- Anfrage-Detailansicht
- Statusverwaltung
- interne Notizen
- mobile-first Design
- rechtliche Abgrenzung

### Should-have

- Über-mich-Seite
- Kontaktseite
- Kund:innenübersicht
- Filter im Dashboard
- einfache Terminnotiz
- E-Mail-Feld optional
- Status-Badges

### Nice-to-have

- KI-IT-Soforthilfe
- FAQ-Bereich
- kleine Animationen
- Export von Anfragen
- E-Mail-Benachrichtigung an Admin
- automatische Bestätigungsmail an Kund:innen

### Nicht geplant für MVP

- Kund:innenkonto
- Online-Zahlung
- automatische Terminbuchung
- Bewertungen
- Live-Chat
- GPS-Ortung
- Notrufsystem
- Mehranbieter-Plattform

---

## 18. Beispiel-Prompt für Lovable

```text
Create a mobile-first web app called HalloHilfe.

HalloHilfe is a personal everyday assistance service for seniors and relatives. Users can request practical help such as grocery shopping, gardening, administrative errands, small everyday tasks, and basic IT help. The service does not provide care work, medical support, legal advice, emergency services, or nursing.

Build a simple, trustworthy, senior-friendly interface with large buttons, high contrast, clear German copy, and very few navigation steps.

The app should include:
- Public homepage with clear positioning and CTA
- Services overview
- Request form
- Thank-you confirmation page
- About/contact section
- Admin login
- Admin dashboard
- Service request list
- Service request detail view
- Status management
- Internal admin notes

Request form fields:
- requester name
- phone number
- optional email
- request for: self or another person
- senior name if request is for another person
- service type
- location
- preferred date
- description
- consent to be contacted
- disclaimer acceptance

Request statuses:
- new
- reviewing
- confirmed
- completed
- rejected

Use Supabase for database and admin authentication. Customers do not need accounts in version 1. Store all requests in the database and show them in the admin dashboard.

Design style:
- mobile-first
- calm and trustworthy
- large buttons
- readable typography
- clear German labels
- accessible layout
- no clutter

Important disclaimer:
HalloHilfe offers practical everyday assistance only. It does not offer nursing, medical services, legal advice, medication handling, body care, or emergency response.
```

---

## 19. Offene Punkte für spätere Versionen

- Preislogik definieren
- E-Mail-Benachrichtigungen einbauen
- Terminbuchung prüfen
- wiederkehrende Aufträge ermöglichen
- Kund:innenprofile erweitern
- KI-IT-Hilfe testen
- rechtliche Rahmenbedingungen für Selbständigkeit prüfen
- Versicherungsfragen klären
- regionale Verfügbarkeit definieren

---

## 20. Kurzfazit

HalloHilfe startet als schlanker, realistischer MVP für eine persönliche Senioren-Alltagshilfe. Der Fokus liegt auf einem einfachen Anfrageprozess, klarer Leistungsübersicht und einem praktischen Admin-Dashboard. Dadurch ist das Produkt technisch gut umsetzbar, für Lovable geeignet und gleichzeitig eine solide Grundlage für ein reales Dienstleistungsbusiness.
