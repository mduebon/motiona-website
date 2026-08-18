/**
 * Kinetik 05 — Aufwand und Perspektive.
 *
 * Inhalt aus 05-aufwand-und-perspektive.md. Wohin das Budget geht, und mit
 * welcher Absicht wir das Feld überhaupt betreten.
 */

import { Mail } from "lucide-react";
import KinetikLayout from "./KinetikLayout";
import { KONTAKT_MAIL, SPALTE } from "./seiten";

/** Ein Punkt aus „Das Budget kann in das Werk gehen". */
function Punkt({ titel, text }: { titel: string; text: string }) {
  return (
    <div>
      <dt className="font-semibold">{titel}</dt>
      <dd className="mt-1 leading-relaxed text-foreground/90">{text}</dd>
    </div>
  );
}

export default function AufwandUndPerspektive() {
  return (
    <KinetikLayout segment="aufwand-und-perspektive">
      {/* ------------------------------------------------ Budget */}
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Das Budget kann in das Werk gehen
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Bei Einzelstücken steckt das Geld selten in der Hardware. Es steckt in
          Ingenieurstunden — und die teuersten davon fallen am Ende an, wenn
          alle gleichzeitig vor Ort sind.
        </p>

        <dl className="mt-8 space-y-6">
          <Punkt
            titel="Ein System statt fünf"
            text="Keine getrennten Steuerungswelten für Mechanik, Zusatzachsen, Licht und Sensorik, und damit auch keine Kopplung dazwischen. Die Schnittstellen zwischen den Gewerken sind erfahrungsgemäß der Teil, der die Zeitplanung sprengt."
          />
          <Punkt
            titel="Änderungen sind Werte, keine Neuprogrammierung"
            text="Ein Montagepunkt 20 Millimeter weiter außen, ein längerer Arm, eine andere Drehzahl: ein geänderter Wert im Modell. Genau solche Änderungen kommen in der Aufbauphase, wenn die Zeit am knappsten ist."
          />
          <Punkt
            titel="Die Arbeit beginnt vor dem Aufbau"
            text="Choreografie, Erreichbarkeit, Kollisionen und Timing sind geprüft, bevor die Mechanik existiert. Die Zeit vor Ort — im Museum, in der Halle, auf der Bühne — ist die teuerste und knappste im ganzen Projekt."
          />
          <Punkt
            titel="Die Hardware darf einfach bleiben"
            text="Dieselbe Software läuft auf einem Mikrocontroller wie auf EtherCAT-Servoantrieben. Ein teurer Robotercontroller pro Achsgruppe ist eine Option, keine Voraussetzung."
          />
        </dl>

        <p className="mt-8 leading-relaxed text-foreground/90">
          Unterm Strich verschiebt sich der Anteil, der sonst in Integration und
          Nacharbeit geht, in Richtung dessen, was am Ende zu sehen ist.
        </p>
      </section>

      {/* ------------------------------------------------ Perspektive */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Wo wir damit hinwollen
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Damit die Ausgangslage klar ist: MotionA ist ein Produkt, das wir
          mittel- und langfristig verkaufen wollen. Der Hauptmarkt dafür ist die
          Industrie.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Kunst, Kunst am Bau und Bildung sind für uns trotzdem nicht nur ein
          Anwendungsfeld zum Ausprobieren. Wir sehen dort eigenständige
          kommerzielle Möglichkeiten — etwa wiederverwendbare Aufbauten,
          Vermietung, Lizenzen oder ein gemeinsam entwickeltes Produkt.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Wenn sich aus einer Zusammenarbeit so etwas ergibt, ist das
          ausdrücklich erwünscht. Voraussetzung ist es nicht. Ein einzelnes
          Werk, das gut wird, ist für uns genauso interessant.
        </p>
      </section>

      {/* ------------------------------------------------ Kontakt */}
      <section className={`mt-24 ${SPALTE} border-t border-border pt-12`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Kontakt
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Eine Skizze, ein Video oder eine grobe Bewegungsbeschreibung genügt,
          um anzufangen.
        </p>
        <a
          href={`mailto:${KONTAKT_MAIL}?subject=MotionA`}
          className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <Mail className="h-4 w-4" />
          {KONTAKT_MAIL}
        </a>
        <p className="mt-6 text-sm text-muted-foreground">
          Matthias Dübon · Dübon Engineering GmbH · Kusterdingen
        </p>
      </section>
    </KinetikLayout>
  );
}
