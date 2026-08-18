/**
 * Der Kinetik-Bereich — fünf unverlinkte Seiten für ausgewählte Empfänger.
 *
 * Hier steht der nicht erratbare Basispfad. Er muss mit NOINDEX_PREFIXE in
 * server/index.ts übereinstimmen — der Server setzt für alles unterhalb dieses
 * Pfades X-Robots-Tag: noindex. Bewusst NICHT in robots.txt eintragen, die
 * Datei ist öffentlich abrufbar und würde den Pfad gerade verraten.
 *
 * Die Unterseiten haben absichtlich sprechende Segmente. Sie sind nur erreichbar,
 * wer den Basispfad schon kennt, und für den ist ein lesbarer Pfad hilfreicher
 * als eine zweite Zufallsfolge.
 */

export const KINETIK_BASIS = "/kinetik-7f3c9a2e41";

/**
 * Die Textspalte des Bereichs.
 *
 * Bewusst rem und nicht ch: auf den Seiten stehen mehrere Schriftgrößen, und ch
 * rechnet je Element mit der eigenen. Ein einheitliches „62ch" ergab dadurch
 * Spalten zwischen 468 und 620 Pixeln — die rechten Ränder liefen sichtbar
 * auseinander. Mit rem liegen alle Ränder auf einer Linie, und der Fließtext
 * bleibt bei etwa 63 Zeichen je Zeile.
 *
 * Breite Medien (Videos, Bilder) stehen absichtlich außerhalb dieser Spalte in
 * max-w-4xl und überragen sie nach rechts.
 */
export const SPALTE = "max-w-[34rem]";

/** Um die Einrückung einer Listenziffer (pl-6) verringerte Spalte. */
export const SPALTE_EINGERUECKT = "max-w-[32.5rem]";

/**
 * Kontaktadresse des Bereichs. Steht bewusst nur hier — beide Kontaktabschnitte
 * (Seite 01 und 05) holen sie von dieser Stelle.
 */
export const KONTAKT_MAIL = "matthias.duebon@duebon-engineering.de";

export interface Seite {
  /** Pfadsegment unter dem Basispfad. Leer für die Einstiegsseite. */
  segment: string;
  /** Kurzform für die Seitennavigation im Kopf. */
  kurz: string;
  /** Überschrift der Seite. Wird vom Layout als h1 gesetzt. */
  titel: string;
}

/** Reihenfolge des Bereichs. Sie bestimmt Navigation und „Weiter"-Verweise. */
export const SEITEN: Seite[] = [
  {
    segment: "",
    kurz: "Übersicht",
    // Die Überschrift trägt den Gedanken, der Fließtext das Problem. Die
    // frühere Fassung („Bewegung, die bisher zu aufwendig war") schrieb den
    // Aufwand der Bewegung zu statt der Steuerung und nahm damit den zweiten
    // Absatz vorweg, der es genauer sagt.
    titel: "Bewegung beschreiben statt programmieren",
  },
  {
    segment: "beispiele",
    kurz: "Beispiele",
    titel: "So sieht das konkret aus",
  },
  {
    segment: "wie-das-funktioniert",
    kurz: "Technik",
    titel: "Wie das funktioniert",
  },
  {
    segment: "woher-die-technik-kommt",
    kurz: "Herkunft",
    titel: "Woher die Technik kommt",
  },
  {
    segment: "aufwand-und-perspektive",
    kurz: "Aufwand",
    titel: "Aufwand und Perspektive",
  },
];

export function pfad(seite: Seite) {
  return seite.segment ? `${KINETIK_BASIS}/${seite.segment}` : KINETIK_BASIS;
}
