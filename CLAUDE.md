# CLAUDE.md — MotionA Website

## Was das ist

Die Website zu MotionA, dem Bewegungssteuerungs-Produkt der
**Dübon Engineering GmbH** (Kusterdingen). Eine React-Single-Page-Anwendung,
ausgeliefert von einem schlanken Express-Server.

Wichtig: Es gibt keine separate Firma „MotionA GmbH" oder „MotionA-Art". Alles
läuft unter Dübon Engineering GmbH. Der Firmenname wird immer so geschrieben —
nicht DueBon, nicht Duebon.

## Technischer Stack

- **React 18 + TypeScript**, Bundler **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`), Komponenten aus **shadcn/ui**
  unter `client/src/components/ui/`
- **wouter** für Routing (nicht React Router)
- **lucide-react** für Icons
- **Express** als Server (`server/index.ts`), SPA-Fallback auf `index.html`
- Paketmanager **pnpm**
- Ursprünglich mit Manus aufgesetzt (`vite-plugin-manus-runtime`)

## Verzeichnisse

```
client/
  index.html
  public/images/        Bilder, überwiegend .webp
  src/
    App.tsx             Routen
    main.tsx            Einstiegspunkt
    index.css           Design-Tokens, Farben, Schriften
    pages/              Home, ProductDetail, Imprint, PrivacyPolicy,
                        NotFound
    pages/kinetik/      der unverlinkte Kinetik-Bereich, fünf Seiten
    components/         eigene Komponenten
    components/ui/      shadcn/ui, nicht von Hand ändern
    contexts/           LanguageContext (en/de), ThemeContext
    lib/                translations.ts, privacy-translations.ts,
                        products.ts, utils.ts
    hooks/
server/index.ts         Express, statische Auslieferung, Header
shared/                 gemeinsame Typen
deploy.sh               git pull, pnpm install, pnpm build, pm2 reload
```

## Gestaltung

Die Gestaltungssprache ist im Kopf von `client/src/pages/Home.tsx` beschrieben
und in `client/src/index.css` als Tokens hinterlegt:

- **Swiss Precision Modernism**, 8px-Raster, strenge Ausrichtung
- Primärfarbe dunkles Waldgrün, Akzent helles Limettengrün
- Schriften: **Manrope** (Display), **Inter** (Fließtext), **DM Sans** (Labels)
- Bewegung sparsam, 250–300 ms ease-in-out
- Radius klein (`--radius: 0.25rem`)

Farben immer über die Tokens ansprechen (`text-primary`, `bg-secondary`,
`text-muted-foreground`), nie als Hex-Werte im Markup. Neue Seiten übernehmen
diese Sprache, statt eine eigene aufzumachen.

## Mehrsprachigkeit

Die Website ist zweisprachig (Englisch als Standard, Deutsch umschaltbar).
Texte liegen in `client/src/lib/translations.ts` und werden über
`useLanguage()` als `t.…` abgerufen.

Der **Kinetik-Bereich** ist ebenfalls zweisprachig, hält seine Texte aber
getrennt: `client/src/pages/kinetik/texte.ts`, abgerufen über
`useKinetikTexte()`. Grund: `lib/translations.ts` gehört zum öffentlichen
Auftritt, der Kinetik-Bereich ist unverlinkt und wird unabhängig überarbeitet.
Die Sprache selbst kommt aus demselben `LanguageContext` — der Umschalter im
Kopf des Bereichs schaltet also auch die öffentlichen Seiten.

**Startsprache über die Adresse:** `?lang=en` bzw. `?lang=de` (ausgewertet in
`LanguageContext`). Damit lässt sich ein englischer Link verschicken, ohne dass
der Empfänger erst umschalten muss. Bewusst **kein localStorage** — eine
gespeicherte Sprachwahl wäre ein Eintrag im Browser des Besuchers und damit ein
Fall für die Datenschutzerklärung. Innerhalb der Anwendung bleibt die Wahl
erhalten, weil die Navigation clientseitig läuft; verloren geht sie nur beim
harten Neuladen.

## Der unverlinkte Kinetik-Bereich

`client/src/pages/kinetik/`, erreichbar unter dem Basispfad in `KINETIK_BASIS`
(`client/src/pages/kinetik/seiten.ts`).

Zweck: Er wird gezielt an ausgewählte Künstlerinnen, Künstler und
Ausstellungsbüros verschickt und im Gespräch gemeinsam durchgegangen. Er ist
noch nicht öffentlich.

Fünf Seiten in fester Reihenfolge, definiert durch `SEITEN` in `seiten.ts`:

| # | Segment | Datei |
|---|---|---|
| 01 | *(leer)* | `Uebersicht.tsx` |
| 02 | `beispiele` | `Beispiele.tsx` |
| 03 | `wie-das-funktioniert` | `WieDasFunktioniert.tsx` |
| 04 | `woher-die-technik-kommt` | `WoherDieTechnikKommt.tsx` |
| 05 | `aufwand-und-perspektive` | `AufwandUndPerspektive.tsx` |

`KinetikLayout.tsx` trägt Kopf, Seitennavigation, Sprachumschalter, Zähler
(Teil 1 von 5), Überschrift, Weiter/Zurück und Fuß. Eine neue Seite braucht vier
Schritte: Eintrag in `SEITEN` (nur der Pfad), Navigationsname und Überschrift in
`texte.ts` unter `seiten` **an derselben Position in beiden Sprachen**,
Komponente anlegen, Route in `App.tsx`. Der Noindex-Schutz greift
automatisch, weil er auf dem Präfix sitzt.

Regeln:

- **Nicht in der Navigation der öffentlichen Seiten verlinken.** Von keiner
  anderen Seite aus.
- Der Basispfad ist absichtlich nicht erratbar. Er steht an zwei Stellen —
  `KINETIK_BASIS` in `pages/kinetik/seiten.ts` und `NOINDEX_PREFIXE` in
  `server/index.ts`. Beim Ändern beide anpassen, sonst wird der Bereich
  indexierbar. Die Segmente der Unterseiten dürfen sprechend sein; sie sind nur
  erreichbar, wer den Basispfad kennt.
- **Nicht in `robots.txt` eintragen.** Die Datei ist öffentlich abrufbar und
  würde den Pfad gerade verraten. Der Schutz läuft über den Header
  `X-Robots-Tag: noindex`, den der Express-Server für den Basispfad **und alles
  darunter** setzt (Präfix-Vergleich, damit neue Unterseiten nicht durchfallen).
- Die Textspalte des Bereichs ist `SPALTE` in `seiten.ts` (`max-w-[34rem]`).
  Bewusst rem und nicht ch — bei mehreren Schriftgrößen verschiebt ch die
  Spaltenbreite, und die rechten Ränder laufen auseinander.

Soll der Bereich später öffentlich werden: Basispfad sprechend machen, Ausnahme
im Server entfernen, Link in die Navigation aufnehmen.

## Inhaltliche Regeln für MotionA-Texte

- Der Kernsatz, der nie verschwinden darf: *„Beschrieben wird nicht ein fest
  programmierter Weg, sondern eine Beziehung zwischen Objekten — und daraus
  ergibt sich die Bewegung."*
- **„Unser Beitrag endet bei den Motoren."** Steuerung, räumliches Modell,
  Choreografie, Simulation und Inbetriebnahme kommen von uns. Mechanik
  (Gestell, Gelenke, Anlenkung, Statik) bauen wir nicht, wir beraten dabei nur.
  Diese Rollenklärung muss früh und unmissverständlich stehen.
- **Simulation ist ein Argument, keine Einschränkung.** Der Simulator *ist* die
  Steuerung mit anderer Hardware-Anbindung. Wo eine Szene simuliert ist, wird
  das gesagt — als Stärke formuliert, nie entschuldigend.
- **Nicht „sicher" im Sinne funktionaler Sicherheit behaupten** (SIL, PL,
  ISO 13849). MotionA ist dort nicht zertifiziert. Stattdessen konkret:
  deterministische Ausführung, statische Prüfung, Verifikation im Zwilling.
- **Nicht „hochverfügbar" behaupten.** Verfügbarkeit ist eine Eigenschaft einer
  betriebenen Anlage, nicht einer Software.
- **Keine Kontron-Referenz auf der Kinetik-Seite.** Bewusst entfernt, passt
  nicht zur Zielgruppe.
- **Förderungen sind Referenzen und stehen prominent.** Auf Seite 01
  („Übersicht") folgt direkt unter dem Aufmacher das Band „Unterstützt und
  gefördert durch" mit Covision, MFG und BSFZ — dieselben Logodateien wie im
  Supporter-Strip der Startseite —, darunter ein kurzer Satz zu
  Forschungszulage/BSFZ und GmbH seit 2017. Absicht: Dass die Entwicklung
  geprüft und getragen wird, schafft Vertrauen, **bevor** das erste technische
  Argument gelesen wird. Nicht kleinreden und nicht nach hinten schieben; eine
  frühere Fassung stand am Fuß von Seite 04 mit dem Zusatz „das sagt nichts
  über den künstlerischen Wert" — dieser relativierende Halbsatz ist bewusst
  entfernt.
- Keine Zahlen ohne Beleg: keine Prozentangaben zu Einsparungen, keine Preise.
- Ton: sachlich, direkt, keine Superlative, keine Ausrufezeichen. Wenn ein Satz
  eine Behauptung aufstellt, muss der nächste sie belegen. Anrede: Sie.

## Datenschutz

- Videos werden über `client/src/components/VideoEmbed.tsx` eingebunden. Die
  Komponente lädt YouTube erst nach einem Klick und über
  `youtube-nocookie.com` — vorher geht kein Request an Google, auch kein
  Vorschaubild. Videos nie per direktem `<iframe>` einbauen.
- Es gibt einen Cookie-Banner (`components/CookieConsent.tsx`) und eine
  Datenschutzseite. Neue externe Einbindungen dort berücksichtigen.
- **Google Analytics lädt ausschließlich nach Einwilligung**, über
  `lib/analytics.ts` und nie aus `index.html`. Auf nicht öffentlichen Pfaden
  (Positivliste in `analytics.ts`) lädt es gar nicht, sonst ginge der geheime
  Kinetik-Pfad als `page_view` an Google. „Ablehnen" löscht die `_ga`-Cookies.
- **Schriften liegen lokal** unter `client/public/fonts/`, eingebunden per
  `@font-face` in `index.css`. Kein Verweis auf `fonts.googleapis.com` — der
  überträgt die IP der Besucher an Google, bevor ein Banner erscheinen kann.
  Im ausgelieferten `index.html` steht deshalb **kein einziger externer
  `href` oder `src`**. Das bitte so lassen.
- Der Widerruf sitzt in Abschnitt 12 der Datenschutzseite
  (`einwilligungWiderrufen()`). Nötig, weil der Banner nur erscheint, solange
  nichts gespeichert ist — ohne die Schaltfläche gäbe es nach „Akzeptieren"
  keinen Weg zurück.

## Deployment

`deploy.sh` auf dem Server: `git pull origin main`, `pnpm install`,
`pnpm run build`, `pm2 reload motiona`, `pm2 save`. Der PM2-Prozess heißt
`motiona`.

## Offene Punkte

- [ ] Videolink Pendel·Chor fehlt, in `Beispiele.tsx` als `TODO` markiert
- [ ] Ein Bild fehlt: `cobot-docking.webp` nach
      `client/public/images/kinetik/`, siehe Hinweisdatei dort. Das `<img>` ist
      in `Beispiele.tsx` solange auskommentiert, damit kein Haarstrich
      erscheint — Markup steht im Kommentar daneben
- [ ] Von den fünf Beispielen sagt nur eines, ob es real oder simuliert ist
      (Cobots: „in der Simulation"). CLAUDE.md verlangt die Angabe — für
      Omniwheel, Cobot/Delta/SCARA und Drohnenformation nachtragen
- [ ] Der Fließtext läuft auf `system-ui`, nicht auf Inter: `--font-body` in
      `index.css` nennt Inter, geladen wurde es nie. Entweder Inter lokal
      ergänzen oder das Token an die Wirklichkeit anpassen
- [ ] Die Datenschutzseite hat ihre Absätze fest im JSX auf Englisch; nur die
      Überschriften sind übersetzt. Der deutsche Aufruf zeigt also englischen
      Rechtstext. Ausnahme ist der neue Abschnitt 12, der zweisprachig in
      `privacy-translations.ts` steht
- [ ] Datenschutzseite juristisch prüfen lassen — Abschnitt 12 beschreibt
      wahrheitsgemäß, was der Code tut, ist aber keine Rechtsberatung
