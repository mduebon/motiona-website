# MotionA Website

Website zu MotionA, dem Bewegungssteuerungs-Produkt der Dübon Engineering GmbH.
React-Single-Page-Anwendung mit Vite und Tailwind, ausgeliefert von einem
Express-Server.

## Entwickeln

```bash
pnpm install
pnpm dev      # Vite-Entwicklungsserver, http://localhost:3000
pnpm build    # Produktionsbuild nach dist/
```

Die genauen Skriptnamen stehen in `package.json` — bei Abweichungen gilt die
Datei, nicht diese Zeilen.

## Aufbau

```
client/
  index.html
  public/images/        Bilder (überwiegend .webp)
  src/
    App.tsx             Routen (wouter)
    index.css           Design-Tokens: Farben, Schriften, Radius
    pages/              Home, ProductDetail, Imprint, PrivacyPolicy,
                        NotFound, Kinetik
    components/         eigene Komponenten
    components/ui/      shadcn/ui — nicht von Hand ändern
    contexts/           LanguageContext (en/de), ThemeContext
    lib/                translations.ts, products.ts, …
server/index.ts         Express: statische Auslieferung, SPA-Fallback, Header
shared/                 gemeinsame Typen
deploy.sh               Deployment auf dem Server
```

## Texte ändern

Die zweisprachigen Seiten holen ihre Texte aus
`client/src/lib/translations.ts` über `useLanguage()`. Produktdaten stehen in
`client/src/lib/products.ts`.

Ausnahme: der Bereich `pages/kinetik/` ist einsprachig deutsch, die Texte stehen
dort direkt in den Komponenten.

## Videos einbinden

Nicht per `<iframe>`, sondern über die Komponente:

```tsx
<VideoEmbed id="nheEumA4-cI" titel="Beschreibung für Bildunterschrift und Screenreader" />
```

Sie zeigt zunächst nur eine Klickfläche und lädt den Player erst nach dem Klick
über `youtube-nocookie.com`. Vorher geht kein Request an Google — auch kein
Vorschaubild.

## Der unverlinkte Kinetik-Bereich

`pages/kinetik/` sind fünf deutschsprachige Seiten für ausgewählte Empfänger.
Sie sind nirgends verlinkt und laufen unter einem nicht erratbaren Basispfad
(`KINETIK_BASIS` in `pages/kinetik/seiten.ts`). Der Express-Server setzt für
diesen Pfad und alles darunter `X-Robots-Tag: noindex, nofollow, noarchive`.

Reihenfolge, Kurztitel und Basispfad stehen in `pages/kinetik/seiten.ts`,
das gemeinsame Gerüst in `KinetikLayout.tsx`. Eine neue Seite braucht einen
Eintrag in `SEITEN`, eine Komponente und eine Route in `App.tsx`.

Der Basispfad steht an zwei Stellen: `seiten.ts` und `NOINDEX_PREFIXE` in
`server/index.ts`. Beim Ändern **beide** anpassen. Nicht in `robots.txt`
eintragen — die Datei ist öffentlich und würde den Pfad verraten.

## Deployment

Auf dem Server `./deploy.sh`: holt den aktuellen Stand, installiert, baut und
lädt den PM2-Prozess `motiona` neu.

## Offene Punkte

Siehe `CLAUDE.md`, Abschnitt „Offene Punkte".
