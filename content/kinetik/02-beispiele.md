# So sieht das konkret aus

Aufbauten aus der Entwicklung. Einige stehen real, andere laufen in der Simulation — was hier kein Abstrich ist: Der Simulator *ist* die Steuerung, nur mit anderer Hardware-Anbindung. Zu sehen ist also die tatsächliche Berechnung und keine Animation eines geplanten Ergebnisses.

---

## Pendel·Chor

![Vier leuchtende Pendel an einer Traverse, daneben ein Bedienterminal](../bild-pendelchor.png)

Vier beleuchtete Pendel reagieren auf Besucher und sind als ein Bewegungsstück choreografiert. „Lass die Pendel schwingen wie Schilf im Wind, wenn jemand näher kommt" wird zu einer geprüften Beschreibung, im digitalen Zwilling verifiziert und auf der Installation ausgeführt.

`[Video-Link]`

---

## Zwei Cobots docken aneinander an

<!-- Bild vorerst herausgenommen, Datei fehlt noch:
     ![Zwei Sechsachs-Cobots beim Andockmanöver](../bild-cobot-docking.png) -->

Ein Cobot dreht das Ziel, der zweite muss andocken, während es sich dreht. Die Andockpose ist dabei nie in Weltkoordinaten definiert, sondern im Koordinatensystem des rotierenden Objekts. Die Bahn im Raum ist ein Ergebnis des Modells, keine programmierte Trajektorie.

Ändert sich die Drehzahl oder die Geometrie, funktioniert das Andocken weiter. Nichts muss neu eingelernt werden.

`https://youtu.be/o2zGbPmoGO0` — eine Hommage an das Andockmanöver aus *Interstellar*, in der Simulation.

---

## Omniwheel-Plattform

`https://youtu.be/wHljyL7Wgjs`

Eine Omniwheel-Plattform fährt holonom, also in jede Richtung bei gleichzeitiger Drehung. Die Radgeschwindigkeiten ergeben sich aus dem Modell; kommandiert wird im Bezugssystem, das gerade zählt — der Plattform, dem Raum oder einem anderen bewegten Objekt.

---

## Dieselbe Aufgabe auf Cobot, Delta und SCARA

`https://youtu.be/ga-MwbPIehQ`

Dass daneben auch klassische Robotik läuft, ist der Beleg dafür, dass der Ansatz trägt: drei verschiedene Kinematiken, dieselbe Bewegungslogik. Kommandiert wird in Bezugssystemen und Zielen, nicht in Gelenkwinkeln — deshalb ändert sich an der Aufgabe nichts, wenn die Maschine wechselt.

---

## Mehrere Körper in einem Modell

`https://youtu.be/kN12YCLY-9U`

Eine Drohnenformation als ein System: keine parallel laufenden Einzelprogramme, sondern Beziehungen in einem Modell, zur Laufzeit aufgelöst. Formation, Abstände oder Anzahl ändern sich — die Einzelbahnen folgen daraus, statt einzeln geschrieben zu werden.

Derselbe Grundsatz gilt für mehrachsige Mechanik, kinetische Installationen und jeden Aufbau, in dem mehrere bewegte Teile in definierter Beziehung zueinander bleiben müssen.
