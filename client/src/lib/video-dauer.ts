/**
 * Spieldauer je Video, einmal von YouTube abgelesen.
 *
 * Eine Tabelle für die ganze Website, nicht je Bereich eine: Das Herz-Video
 * steht sowohl in der öffentlichen Videosammlung als auch im Kinetik-Bereich.
 * Zwei Tabellen hiessen zwei Stellen, an denen dieselbe Zahl gepflegt wird —
 * und irgendwann zwei verschiedene Angaben zum selben Video.
 *
 * Das ist eine Zahl und kein Text: in beiden Sprachen dieselbe, deshalb hier
 * und nicht in translations.ts oder kinetik/texte.ts.
 *
 * Fehlt ein Eintrag, bleibt die Marke am Standbild einfach weg.
 *
 * Einige Schlüssel stehen in Anführungszeichen, weil YouTube-IDs mit einer
 * Ziffer beginnen oder einen Bindestrich enthalten dürfen — beides ist als
 * blosser Bezeichner kein gültiges JavaScript. Bei den übrigen entfernt
 * Prettier die Zeichen wieder; einfach immer welche setzen und es sortiert
 * sich von selbst.
 */

export const DAUER: Record<string, string> = {
  // Öffentliche Videosammlung (/videos)
  Qjs5bP1fkxQ: "2:05",
  e_F5ZE4q62g: "1:02",
  jy2JHnxqBMk: "0:39",
  "_FT1h6zr-58": "0:39",
  P_YaWyQ40ng: "0:39",
  dkIKtRiM0uQ: "0:39",
  "7BnUx9JtsB4": "0:51",

  // In beiden Bereichen
  RgzSc_ilglc: "0:22",

  // Kinetik-Bereich
  "nheEumA4-cI": "2:17",
  sFoopxDGA3s: "1:43",
  o2zGbPmoGO0: "3:40",
  wHljyL7Wgjs: "1:01",
  "ga-MwbPIehQ": "0:24",
  rFl7ppj2kE8: "0:40",
  hQIq_sJLczw: "1:43",
};
