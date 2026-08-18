/**
 * Kinetik 04 — Woher die Technik kommt.
 *
 * Inhalt aus 04-woher-die-technik-kommt.md. Die Herkunft als Argument dafür,
 * dass eine Installation über Jahre läuft.
 */

import KinetikLayout from "./KinetikLayout";
import { SPALTE } from "./seiten";

/** Eine Eigenschaft aus „Das prägt, wie MotionA gebaut ist". */
function Eigenschaft({ titel, text }: { titel: string; text: string }) {
  return (
    <div>
      <dt className="font-semibold">{titel}</dt>
      <dd className="mt-1 leading-relaxed text-foreground/90">{text}</dd>
    </div>
  );
}

export default function WoherDieTechnikKommt() {
  return (
    <KinetikLayout segment="woher-die-technik-kommt">
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Was Dauerbetrieb verlangt
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Eine Installation im Foyer, im Museum oder auf der Bühne muss über
          Jahre laufen, ohne dass jemand danebensteht. Das ist eine andere
          Anforderung als ein Aufbau, der zur Eröffnung funktioniert.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          MotionA ist nicht aus einem Kunstprojekt entstanden, sondern aus
          fünfzehn Jahren Embedded-Entwicklung: EtherCAT, CANopen,
          Mikrocontroller bis Linux-Echtzeitsysteme. Dübon Engineering GmbH
          entwickelt daneben Steuerungstechnik für Industriekunden — Geräte, die
          in Serie gehen und über Jahre im Feld laufen müssen.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Das prägt, wie MotionA gebaut ist:
        </p>

        <dl className="mt-8 space-y-6">
          <Eigenschaft
            titel="Deterministische Ausführung"
            text="Eine Echtzeit-VM mit vorhersagbarem Zeitverhalten, keine Skriptumgebung mit Best-Effort-Timing. Bewegungen laufen morgen so wie heute."
          />
          <Eigenschaft
            titel="Prüfung vor der Ausführung"
            text="Ungültige Zustandsübergänge und Ressourcenkonflikte fallen in der statischen Analyse auf, Erreichbarkeit und Kollisionen im digitalen Zwilling — bevor sich etwas bewegt."
          />
          <Eigenschaft
            titel="KI fasst die Echtzeitebene nicht an"
            text="Ein Sprachmodell erzeugt eine Beschreibung, die geprüft, simuliert und getestet wird. Die Ausführungsschicht bleibt davon unberührt."
          />
          <Eigenschaft
            titel="Vom Mikrocontroller bis EtherCAT"
            text="Dieselbe Sprache, dasselbe Ausführungsmodell. Ein größerer Aufbau bedeutet andere Hardware, keine Neuentwicklung."
          />
        </dl>
      </section>

      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Vom Expertensystem zur Beschreibung
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Genau diese Herkunft ist die Voraussetzung dafür, dass
          Bewegungssteuerung überhaupt zugänglich werden kann. Eine Technologie
          wird nicht dadurch allgemein verfügbar, dass man sie vereinfacht,
          sondern dadurch, dass das Schwierige daran verlässlich automatisiert
          wird: Koordinatentransformationen, Zeitverhalten, Ressourcenkonflikte,
          Kollisionen.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Was heute ein Expertensystem ist, für das man einen Spezialisten pro
          Anlage braucht, wird damit zu einer Beschreibung, die auch jemand
          ändern kann, der kein Robotiker ist.
        </p>
      </section>
    </KinetikLayout>
  );
}
