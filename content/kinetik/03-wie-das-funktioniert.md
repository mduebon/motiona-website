# Wie das funktioniert

## Welche Mechanik dahinterstecken kann

Der interessante Fall sind Mechaniken, die es so nicht zu kaufen gibt. Drehteller, Traversen auf Traversen, Seilzüge, Pendel, Fahrzeuge, ein Flügelschlag, eine Gliederpuppe, eigens gebaute Achskonfigurationen.

**Für solche Aufbauten existiert kein fertiger Controller, weil es das Produkt nicht gibt.** Genau dort entsteht der Aufwand, an dem Ideen scheitern — und genau dort setzt MotionA an: Wer die Kinematik beschreiben kann, kann sie fahren. Die Mechanik darf mit dem Werk entstehen, statt sich nach dem zu richten, wofür es zufällig eine Steuerung gibt.

Daneben werden Delta, SCARA, Portal, Cobot und Sechsachs-Arme direkt unterstützt. Jede Maschine wird einmal beschrieben — Struktur, Gelenke, Grenzen. Kommandiert wird danach in Bezugssystemen und Zielen, nicht in Gelenkwinkeln. Dieselbe Bewegungslogik läuft deshalb auf allen.

Vorhandene Steuerungen müssen dabei nicht ersetzt werden. Wo ein Roboter mit funktionierendem Controller steht, kann er bleiben — MotionA bildet ihn gemeinsam mit den übrigen Achsen, Licht und Sensorik in einem Modell ab.

*Wie das in echten Aufbauten aussieht — Omniwheel-Plattform, dieselbe Aufgabe auf Cobot, Delta und SCARA — steht unter „Beispiele" (Seite 02).*

---

## Zwei Modelle

**FrameGraph — wo sich etwas befindet.** Alle Bezugssysteme und ihre Beziehungen zueinander, live geführt. Ein laufendes Band, ein zweiter Roboter, eine getrackte Person: jeweils ein weiteres Bezugssystem, kein Sonderfall im Programm.

**ActionGraph — wann etwas passiert.** Aktionen, Reihenfolgen, parallele Zweige, Ereignisse, Fehlerfälle. Licht, Klappen und Projektionen gehören in dieselbe Beschreibung, nicht in ein zweites System.

Beides ist stark abstrahiert und trotzdem echtzeitfähig. Weil die Beschreibung strukturiert ist, ist sie prüfbar — und das ist auch der Punkt, an dem KI sinnvoll ansetzt: Ein Sprachmodell erzeugt keinen Robotercode, sondern eine Beschreibung, die vor der Ausführung verifiziert wird.

---

## Simulation ist keine zweite Implementierung

Der Simulator ist kein Modell der Steuerung, er ist die Steuerung — nur mit anderer Hardware-Anbindung. Dieselbe Beschreibung, derselbe Ausführungspfad.

Deshalb lassen sich reale und virtuelle Teile mischen: einzelne Achsen real fahren, während der Rest simuliert bleibt. Und deshalb ist eine Anlage entwickelbar, bevor sie existiert.

`https://youtu.be/hQIq_sJLczw` — Entwicklersicht: Weltmodell, Koordinatensysteme, Ausführung, Timing, Debugging.
