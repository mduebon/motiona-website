/**
 * Kinetik 02 — Beispiele.
 *
 * Inhalt aus 02-beispiele.md. Aufbauten aus der Entwicklung, als Belege für die
 * Behauptungen der Übersicht.
 */

import VideoEmbed from "@/components/VideoEmbed";
import KinetikLayout from "./KinetikLayout";
import { SPALTE } from "./seiten";

export default function Beispiele() {
  return (
    <KinetikLayout segment="beispiele">
      <p className={`mt-8 ${SPALTE} leading-relaxed text-foreground/90`}>
        Aufbauten aus der Entwicklung. Einige stehen real, andere laufen in der
        Simulation — was hier kein Abstrich ist: Der Simulator <em>ist</em> die
        Steuerung, nur mit anderer Hardware-Anbindung. Zu sehen ist also die
        tatsächliche Berechnung und keine Animation eines geplanten Ergebnisses.
      </p>

      <div className="mt-16 max-w-4xl space-y-16">
        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Pendel·Chor
          </h2>
          <img
            src="/images/kinetik/pendelchor.webp"
            alt="Vier leuchtende Pendel an einer Traverse, daneben ein Bedienterminal"
            width={1400}
            height={934}
            className="my-6 w-full rounded-sm border border-border"
            loading="lazy"
          />
          <p className={`${SPALTE} leading-relaxed text-foreground/90`}>
            Vier beleuchtete Pendel reagieren auf Besucher und sind als ein
            Bewegungsstück choreografiert. „Lass die Pendel schwingen wie Schilf
            im Wind, wenn jemand näher kommt" wird zu einer geprüften
            Beschreibung, im digitalen Zwilling verifiziert und auf der
            Installation ausgeführt.
          </p>
          {/* TODO: Videolink Pendel·Chor fehlt noch */}
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Zwei Cobots docken aneinander an
          </h2>
          {/*
            Bild vorerst herausgenommen: cobot-docking.webp liegt noch nicht in
            client/public/images/kinetik/, und ein fehlendes Bild fällt auf zwei
            Pixel Höhe zusammen — ein Haarstrich zwischen Überschrift und Text,
            der nach Fehler aussieht. Der Abschnitt trägt sich solange über das
            Videofeld darunter.

            Zum Wiedereinsetzen, sobald die Datei da ist (width/height an die
            echten Maße anpassen und das mt-6 am Absatz darunter entfernen):

            <img
              src="/images/kinetik/cobot-docking.webp"
              alt="Zwei Sechsachs-Cobots beim Andockmanöver"
              width={1400}
              height={934}
              className="my-6 w-full rounded-sm border border-border"
              loading="lazy"
            />
          */}
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            Ein Cobot dreht das Ziel, der zweite muss andocken, während es sich
            dreht. Die Andockpose ist dabei nie in Weltkoordinaten definiert,
            sondern im Koordinatensystem des rotierenden Objekts. Die Bahn im
            Raum ist ein Ergebnis des Modells, keine programmierte Trajektorie.
          </p>
          <p className={`mt-4 ${SPALTE} leading-relaxed text-foreground/90`}>
            Ändert sich die Drehzahl oder die Geometrie, funktioniert das
            Andocken weiter. Nichts muss neu eingelernt werden.
          </p>
          <VideoEmbed
            className="mt-10"
            id="o2zGbPmoGO0"
            titel="Andockmanöver zweier Cobots — eine Hommage an Interstellar, in der Simulation"
          />
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Omniwheel-Plattform
          </h2>
          <VideoEmbed
            className="mt-6"
            id="wHljyL7Wgjs"
            titel="Omniwheel-Plattform: holonome Bewegung aus dem Modell"
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            Eine Omniwheel-Plattform fährt holonom, also in jede Richtung bei
            gleichzeitiger Drehung. Die Radgeschwindigkeiten ergeben sich aus
            dem Modell; kommandiert wird im Bezugssystem, das gerade zählt — der
            Plattform, dem Raum oder einem anderen bewegten Objekt.
          </p>
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Dieselbe Aufgabe auf Cobot, Delta und SCARA
          </h2>
          <VideoEmbed
            className="mt-6"
            id="ga-MwbPIehQ"
            titel="Dieselbe Aufgabe auf Cobot, Delta und SCARA"
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            Dass daneben auch klassische Robotik läuft, ist der Beleg dafür,
            dass der Ansatz trägt: drei verschiedene Kinematiken, dieselbe
            Bewegungslogik. Kommandiert wird in Bezugssystemen und Zielen, nicht
            in Gelenkwinkeln — deshalb ändert sich an der Aufgabe nichts, wenn
            die Maschine wechselt.
          </p>
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Mehrere Körper in einem Modell
          </h2>
          <VideoEmbed
            className="mt-6"
            id="kN12YCLY-9U"
            titel="Eine Drohnenformation als ein System"
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            Eine Drohnenformation als ein System: keine parallel laufenden
            Einzelprogramme, sondern Beziehungen in einem Modell, zur Laufzeit
            aufgelöst. Formation, Abstände oder Anzahl ändern sich — die
            Einzelbahnen folgen daraus, statt einzeln geschrieben zu werden.
          </p>
          <p className={`mt-4 ${SPALTE} leading-relaxed text-foreground/90`}>
            Derselbe Grundsatz gilt für mehrachsige Mechanik, kinetische
            Installationen und jeden Aufbau, in dem mehrere bewegte Teile in
            definierter Beziehung zueinander bleiben müssen.
          </p>
        </article>
      </div>
    </KinetikLayout>
  );
}
