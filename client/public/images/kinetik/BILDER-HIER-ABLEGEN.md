# Bilder für die Kinetik-Seite

Diese drei Dateien werden von `client/src/pages/kinetik/Beispiele.tsx` referenziert und
müssen hier liegen. Sie stammen aus dem MotionA-Pitch und sind im Chat als
Download verfügbar.

| Dateiname hier      | Inhalt                                                 | Status |
|---------------------|--------------------------------------------------------|--------|
| `pendelchor.webp`   | Vier leuchtende Pendel an der Traverse, Bedienterminal  | liegt hier |
| `cobot-docking.webp`| Zwei Sechsachs-Cobots beim Andockmanöver, aus der Simulation | **fehlt** |

Das `<img>` für `cobot-docking` ist in `Beispiele.tsx` vorerst auskommentiert —
ein fehlendes Bild fällt dort auf zwei Pixel Höhe zusammen und sieht nach Fehler
aus. Das fertige Markup steht im Kommentar an Ort und Stelle; sobald die Datei
hier liegt, nur einkommentieren und `width`/`height` anpassen.

Das frühere `foerderband-twin-real` ist entfallen — der Abschnitt „Aufnehmen von
einem laufenden Band" wurde aus `Beispiele.tsx` entfernt.

Die Originale sind 1,9 bis 2,5 MB groß und bis zu 2556 px breit. Vor dem
Veröffentlichen verkleinern und wie die übrigen Bilder im Projekt als `.webp`
ablegen — dann in `Beispiele.tsx` die Dateiendungen anpassen.
