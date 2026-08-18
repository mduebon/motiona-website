/**
 * Kinetik 03 — Wie das funktioniert.
 *
 * Inhalt aus 03-wie-das-funktioniert.md. Welche Mechanik in Frage kommt, die
 * zwei Modelle dahinter, und warum die Simulation keine zweite Implementierung
 * ist.
 *
 * Hier stehen nur Erläuterungen. Die Videos zu Omniwheel-Plattform und zu
 * „dieselbe Aufgabe auf Cobot, Delta und SCARA" zeigen Aufbauten und keine
 * Technik — sie liegen deshalb in Beispiele.tsx. Einzige Ausnahme ist die
 * Entwicklersicht am Ende: die zeigt tatsächlich das Werkzeug.
 */

import { Link } from "wouter";
import VideoEmbed from "@/components/VideoEmbed";
import KinetikLayout from "./KinetikLayout";
import { SEITEN, SPALTE, pfad } from "./seiten";

export default function WieDasFunktioniert() {
  return (
    <KinetikLayout segment="wie-das-funktioniert">
      {/* ------------------------------------------------ Mechanik */}
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Welche Mechanik dahinterstecken kann
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Der interessante Fall sind Mechaniken, die es so nicht zu kaufen gibt.
          Drehteller, Traversen auf Traversen, Seilzüge, Pendel, Fahrzeuge, ein
          Flügelschlag, eine Gliederpuppe, eigens gebaute Achskonfigurationen.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          <span className="font-semibold">
            Für solche Aufbauten existiert kein fertiger Controller, weil es das
            Produkt nicht gibt.
          </span>{" "}
          Genau dort entsteht der Aufwand, an dem Ideen scheitern — und genau
          dort setzt MotionA an: Wer die Kinematik beschreiben kann, kann sie
          fahren. Die Mechanik darf mit dem Werk entstehen, statt sich nach dem
          zu richten, wofür es zufällig eine Steuerung gibt.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Daneben werden Delta, SCARA, Portal, Cobot und Sechsachs-Arme direkt
          unterstützt. Jede Maschine wird einmal beschrieben — Struktur,
          Gelenke, Grenzen. Kommandiert wird danach in Bezugssystemen und
          Zielen, nicht in Gelenkwinkeln. Dieselbe Bewegungslogik läuft deshalb
          auf allen.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Vorhandene Steuerungen müssen dabei nicht ersetzt werden. Wo ein
          Roboter mit funktionierendem Controller steht, kann er bleiben —
          MotionA bildet ihn gemeinsam mit den übrigen Achsen, Licht und
          Sensorik in einem Modell ab.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Wie das in echten Aufbauten aussieht — Omniwheel-Plattform, dieselbe
          Aufgabe auf Cobot, Delta und SCARA — steht unter{" "}
          <Link
            href={pfad(SEITEN[1])}
            className="font-medium text-primary hover:underline"
          >
            Beispiele
          </Link>
          .
        </p>
      </section>

      {/* ------------------------------------------------ Zwei Modelle */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Zwei Modelle
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          <span className="font-semibold">
            FrameGraph — wo sich etwas befindet.
          </span>{" "}
          Alle Bezugssysteme und ihre Beziehungen zueinander, live geführt. Ein
          laufendes Band, ein zweiter Roboter, eine getrackte Person: jeweils
          ein weiteres Bezugssystem, kein Sonderfall im Programm.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          <span className="font-semibold">
            ActionGraph — wann etwas passiert.
          </span>{" "}
          Aktionen, Reihenfolgen, parallele Zweige, Ereignisse, Fehlerfälle.
          Licht, Klappen und Projektionen gehören in dieselbe Beschreibung,
          nicht in ein zweites System.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Beides ist stark abstrahiert und trotzdem echtzeitfähig. Weil die
          Beschreibung strukturiert ist, ist sie prüfbar — und das ist auch der
          Punkt, an dem KI sinnvoll ansetzt: Ein Sprachmodell erzeugt keinen
          Robotercode, sondern eine Beschreibung, die vor der Ausführung
          verifiziert wird.
        </p>
      </section>

      {/* ------------------------------------------------ Simulation */}
      <section className="mt-24">
        <h2
          className={`${SPALTE} font-display text-2xl font-bold tracking-tight md:text-3xl`}
        >
          Simulation ist keine zweite Implementierung
        </h2>
        <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
          Der Simulator ist kein Modell der Steuerung, er ist die Steuerung —
          nur mit anderer Hardware-Anbindung. Dieselbe Beschreibung, derselbe
          Ausführungspfad.
        </p>
        <p className={`mt-4 ${SPALTE} leading-relaxed text-foreground/90`}>
          Deshalb lassen sich reale und virtuelle Teile mischen: einzelne Achsen
          real fahren, während der Rest simuliert bleibt. Und deshalb ist eine
          Anlage entwickelbar, bevor sie existiert.
        </p>

        <div className="mt-10 max-w-4xl">
          <VideoEmbed
            id="hQIq_sJLczw"
            titel="Entwicklersicht: Weltmodell, Koordinatensysteme, Ausführung, Timing, Debugging"
          />
        </div>
      </section>
    </KinetikLayout>
  );
}
