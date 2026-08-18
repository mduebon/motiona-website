/**
 * Kinetik 01 — Übersicht.
 *
 * Inhalt aus 01-startseite.md. Trägt die Rollenklärung („unser Beitrag endet bei
 * den Motoren"), die fünf Miniaturen und den Ablauf einer Zusammenarbeit.
 */

import { Mail } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import KinetikLayout from "./KinetikLayout";
import { KONTAKT_MAIL, SPALTE, SPALTE_EINGERUECKT } from "./seiten";

/** Ein Beispiel aus „Was sich damit beschreiben lässt". */
function Miniatur({
  titel,
  text,
  beschreibung,
}: {
  titel: string;
  text: string;
  beschreibung: string;
}) {
  return (
    <div className="border-t border-border py-8 first:border-t-0">
      <h3 className="font-display text-xl font-bold tracking-tight">{titel}</h3>
      <p className={`mt-3 ${SPALTE} leading-relaxed text-foreground/90`}>
        {text}
      </p>
      {/* Dass diese Zeile kürzer ist als der Absatz darüber, ist das Argument
          des ganzen Bereichs. Deshalb steht sie abgesetzt und nicht als
          Fließtext. */}
      <p
        className={`mt-4 ${SPALTE} border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground`}
      >
        <span className="font-medium text-foreground">Beschreibung: </span>
        {beschreibung}
      </p>
    </div>
  );
}

/**
 * Ein Schritt aus „Wie eine Zusammenarbeit beginnt".
 *
 * Die Breite ist um die Einrückung der Ziffer (pl-6, 1.5rem) verringert, damit
 * der rechte Rand auf derselben Linie liegt wie der Fließtext ringsum.
 */
function Schritt({ titel, text }: { titel: string; text: string }) {
  return (
    <li className={`${SPALTE_EINGERUECKT} leading-relaxed`}>
      <span className="font-semibold">{titel}</span> {text}
    </li>
  );
}

export default function Uebersicht() {
  return (
    <KinetikLayout segment="">
      <section className={SPALTE}>
        <p className="mt-8 text-xl font-medium leading-snug">
          MotionA ist eine Steuerung, die ein Modell des Raums mitführt.
          Beschrieben wird nicht ein fest programmierter Weg, sondern eine
          Beziehung zwischen Objekten — und daraus ergibt sich die Bewegung.
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Damit werden Arbeiten umsetzbar, die bisher weniger an der Idee als am
          Steuerungsaufwand gescheitert sind: in Kunst und Kunst am Bau, in
          Ausstellungen, auf der Bühne. Viele Achsen, mehrere Mechaniken, Licht,
          Sensorik und Besucher gehören dabei in ein Modell statt in fünf
          getrennte Systeme.
        </p>
      </section>

      {/*
        Einordnung steht bewusst VOR dem ersten Video: CLAUDE.md verlangt, dass
        die Rollenklärung („unser Beitrag endet bei den Motoren") früh und
        unmissverständlich steht. Hinter dem Video hätte man erst ein Video
        gesehen und dann erfahren, worum es geht — und der Hinweis zu den Videos
        am Ende dieses Abschnitts kommt so vor dem ersten Video statt danach.
      */}
      <section className={`mt-16 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Worum es auf dieser Seite geht
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Diese Seite ist kein Prospekt. Sie sammelt ein paar Informationen über
          MotionA, damit im Gespräch schnell klar wird, worüber wir eigentlich
          reden.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Gesucht sind Künstlerinnen und Künstler mit Ideen für komplexe
          Bewegungen — gern solche, die bisher als zu aufwendig, zu speziell
          oder schlicht als nicht steuerbar zurückgestellt wurden. Es muss dafür
          kein Roboter aus dem Katalog sein: Eigene Kinematiken lassen sich
          beschreiben und fahren. Eine Skulptur, die einen Flügelschlag
          ausführt. Eine Gliederpuppe, die tanzt. Ein Mechanismus, den es so
          noch nicht gibt.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Ebenso angesprochen sind Ausstellungsbüros, Kuratorinnen und
          Kuratoren, Bühnenbild, Museen und Werkstätten, die für ein Vorhaben
          die Bewegungstechnik suchen.
        </p>
        <div className="mt-8 border-l-2 border-primary pl-6">
          <p className="leading-relaxed text-foreground/90">
            <span className="font-semibold">Wo unser Beitrag endet:</span> bei
            den Motoren. Steuerung, räumliches Modell, Choreografie, Simulation
            und Inbetriebnahme kommen von uns. Die Mechanik selbst — Gestell,
            Gelenke, Anlenkung, Material, Statik — bauen wir nicht. Dabei können
            wir beraten und früh mitdenken, damit die Bewegung später auch
            wirklich funktioniert, aber gefertigt werden muss sie von anderer
            Seite.
          </p>
        </div>
        <p className="mt-8 text-sm italic leading-relaxed text-muted-foreground">
          Zu den Videos: Sie sind ungeschnitten und zeigen Testaufbauten, kein
          Werbematerial. Sie sollen nur veranschaulichen, was möglich ist.
        </p>
      </section>

      {/* ------------------------------------------------ Erstes Video */}
      <div className="mt-16 max-w-4xl">
        <VideoEmbed
          id="nheEumA4-cI"
          titel="Eine Drohne lenkt eine kinetische Installation in Echtzeit aus"
        />
        <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
          Eine Drohne fliegt frei durch den Raum, die Installation reagiert in
          Echtzeit. Die Position der Drohne kommt aus der Sensorik und wird
          während der Ausführung Teil des Systems. Es gibt keine hinterlegte
          Choreografie, auf die zurückgegriffen wird.
        </p>
      </div>

      {/* ------------------------------------------------ Fünf Miniaturen */}
      <section className="mt-24">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Was sich damit beschreiben lässt
        </h2>
        <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
          Fünf Beispiele — nicht als Vorschlag für ein bestimmtes Werk, sondern
          um zu zeigen, wie kurz die Beschreibung wird, wenn sie eine Beziehung
          meint statt einer Bahn.
        </p>

        <div className="mt-10">
          <Miniatur
            titel="Der ruhende Punkt"
            text="Eine Skulptur dreht sich vollständig. Mehrere Lichtquellen auf eigenen Achsen zielen dabei auf denselben Punkt im Raum. Der Punkt selbst steht absolut still."
            beschreibung="Der Zielknoten hängt am Raum. Die erforderlichen Bewegungen der Achsen ergeben sich daraus."
          />
          <Miniatur
            titel="Dasselbe Werk, andere Aussage"
            text="Derselbe Aufbau, aber das Ziel hängt nun an einem der bewegten Elemente. Der Punkt wandert, die übrigen Elemente verfolgen ihn."
            beschreibung="derselbe Knoten, aber ein anderes Elternsystem. Geändert wird nur die räumliche Zuordnung."
          />
          <Miniatur
            titel="Verschachtelte Rotation"
            text="Bewegte Träger sitzen auf anderen bewegten Trägern, an den äußersten Enden befinden sich Lichtpunkte. Die entstehenden Muster werden nicht einzeln animiert, sondern ergeben sich aus der Geometrie."
            beschreibung="die Kette der Träger und jeweils eine Drehzahl."
          />
          <Miniatur
            titel="Rendezvous"
            text="Zwei unabhängige Systeme bewegen sich mit Perioden, die nicht ganzzahlig zueinander stehen. Nur selten kommen sich bestimmte Punkte nahe — und genau dann reichen sie etwas weiter aus oder leuchten gemeinsam auf."
            beschreibung="eine Bedingung über den Abstand zweier Knoten, keine vorab gesetzte Zeitmarke. Dadurch entsteht kein kurzer, erkennbarer Wiederholungszyklus."
          />
          <Miniatur
            titel="Spiel zwischen real und virtuell"
            text="Auf einer projizierten Spielfläche steuern Besucher reale Fahrzeuge gegen ein Team aus virtuellen Fahrzeugen. Beide Seiten spielen denselben virtuellen Ball zurück."
            beschreibung="Spielfeld, reale und virtuelle Fahrzeuge sowie Ball befinden sich im selben räumlichen Modell und können dadurch unmittelbar miteinander interagieren."
          />
        </div>

        <p className={`mt-10 ${SPALTE} leading-relaxed text-foreground/90`}>
          <span className="font-semibold">Der gemeinsame Nenner:</span> Weil
          eine Beziehung beschrieben wird und kein Weg, bedeutet auch eine
          Änderung an der Geometrie — ein Montagepunkt 20 Millimeter weiter
          außen, ein etwas längerer Arm — lediglich einen geänderten Wert und
          keine neue Bahnprogrammierung.
        </p>
      </section>

      {/* ------------------------------------------------ Zusammenarbeit */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Wie eine Zusammenarbeit beginnt
        </h2>
        {/* list-decimal explizit: das Preflight von Tailwind setzt
            list-style: none, sonst wäre die Reihenfolge nur im Markup vorhanden
            und nicht zu sehen. */}
        <ol className="mt-8 list-decimal space-y-6 pl-6 marker:font-semibold marker:text-primary">
          <Schritt
            titel="Mit einer Idee, nicht mit einer Konstruktion."
            text="Eine Skizze genügt, und sie darf technisch unausgegoren sein. Was sich bewegen soll, wie es sich anfühlen soll, worauf es reagieren soll — das ist der Ausgangspunkt."
          />
          <Schritt
            titel="Dann klären wir gemeinsam, was mechanisch dahinterstehen muss."
            text="Welche Achsen, welche Antriebe, wo Gelenke sitzen, was sich überhaupt lohnt. Hier ist der beste Zeitpunkt für Einwände: Änderungen an einer Zeichnung kosten nichts, Änderungen an einer geschweißten Konstruktion schon."
          />
          <Schritt
            titel="Die Bewegung entsteht im Modell, bevor die Mechanik existiert."
            text="Choreografie, Erreichbarkeit, Kollisionen und Timing lassen sich simulieren und ansehen, solange noch nichts gebaut ist."
          />
          <Schritt
            titel="Erst danach muss real gefertigt werden"
            text="— von einer Werkstatt, einem Metallbauer oder wem auch immer Sie vertrauen. Wir kommen ab dem Motor wieder dazu."
          />
        </ol>
        <p className="mt-8 leading-relaxed text-foreground/90">
          Das funktioniert bei einem Objekt mit drei Achsen ebenso wie bei einer
          raumfüllenden Installation. Wenn Sie unsicher sind, ob Ihre Idee zu
          klein oder zu groß ist: fragen Sie einfach.
        </p>
      </section>

      {/* ------------------------------------------------ Kontakt */}
      <section className={`mt-24 ${SPALTE} border-t border-border pt-12`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          Kontakt
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Wenn Sie eine Idee haben, deren Bewegung bisher an der Technik hängt:
          melden Sie sich gern.
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          Eine Skizze, ein Video, eine Bewegungsbeschreibung oder eine grobe
          Idee genügt. Technisch ausgearbeitet muss sie nicht sein — das klären
          wir gemeinsam.
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
