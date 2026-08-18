# Textquellen des Kinetik-Bereichs

Die fünf Dateien hier sind die **Inhaltsquelle** für `client/src/pages/kinetik/`.
Sie werden nicht gebaut und nicht ausgeliefert — es gibt im Projekt keine
Markdown-Verarbeitung. Sie liegen hier, damit Texte ohne React lesbar und
redigierbar bleiben und nachvollziehbar ist, woher der Inhalt einer Komponente
stammt.

| Datei | Seite | Komponente |
|---|---|---|
| `01-startseite.md` | 01 Übersicht | `Uebersicht.tsx` |
| `02-beispiele.md` | 02 Beispiele | `Beispiele.tsx` |
| `03-wie-das-funktioniert.md` | 03 Technik | `WieDasFunktioniert.tsx` |
| `04-woher-die-technik-kommt.md` | 04 Herkunft | `WoherDieTechnikKommt.tsx` |
| `05-aufwand-und-perspektive.md` | 05 Aufwand | `AufwandUndPerspektive.tsx` |

Beim Ändern eines Textes **beide** Stellen anfassen, sonst laufen Quelle und
Seite auseinander. Wer das dauerhaft nicht will, muss die Dateien zur Laufzeit
rendern — das wäre eine eigene Entscheidung mit eigenen Kosten (Markdown-Parser,
Umgang mit Videos und Bildunterschriften, Verlust der typisierten Komponenten).

Abweichungen der Komponenten von diesen Quellen, bewusst:

- **Bildpfade.** Die Quellen zeigen auf `../bild-*.png`, die Komponenten auf
  `/images/kinetik/*.png` — dort liegen die Bilder im Projekt, siehe die
  Hinweisdatei in jenem Ordner. Die drei Bilder fehlen noch.
- **Firmenname.** `04` schreibt „Dübon Engineering", die Komponente „Dübon
  Engineering GmbH" — so verlangt es `CLAUDE.md`.
- **Überschrift.** Die `# `-Zeile jeder Datei setzt das Layout als `h1`, sie
  steht deshalb nicht noch einmal in der Komponente.
- **Kontaktadresse.** Die Quellen schreiben sie aus, die Komponenten nehmen
  `KONTAKT_MAIL` aus `pages/kinetik/seiten.ts` — dort steht sie einmal für
  beide Kontaktabschnitte.
