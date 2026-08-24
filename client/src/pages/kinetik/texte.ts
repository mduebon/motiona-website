/**
 * Alle Texte des Kinetik-Bereichs, deutsch und englisch.
 *
 * Der Bereich war bewusst einsprachig deutsch. Er wird inzwischen auch an
 * Studios und Künstler außerhalb des deutschsprachigen Raums verschickt
 * (Random International, Troika, Marco Barotti) — eine englische Fassung ist
 * damit kein Zusatz, sondern Voraussetzung dafür, dass der Link dort überhaupt
 * etwas nützt.
 *
 * Warum eine eigene Datei und nicht `lib/translations.ts`: Die dortige Struktur
 * gehört zum öffentlichen Auftritt. Der Kinetik-Bereich ist unverlinkt, hat
 * eigene Regeln (siehe CLAUDE.md) und wird unabhängig davon überarbeitet. Beide
 * Sprachen stehen hier nebeneinander, damit eine Änderung am deutschen Text
 * sofort sichtbar macht, welcher englische Satz nachzuziehen ist.
 *
 * Die Sprache selbst kommt aus dem globalen LanguageContext — der Umschalter im
 * Kopf schaltet also denselben Zustand wie auf den öffentlichen Seiten.
 *
 * Übersetzungsregeln, damit Seite, Mails und Folien zusammenpassen:
 *   Weltmodell            → world model
 *   Bezugssystem          → reference frame
 *   Beschreibung          → description  (nie „script" oder „program")
 *   Bewegung beschreiben statt programmieren
 *                         → Describing motion instead of programming it
 *   FrameGraph/ActionGraph bleiben unübersetzt.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

interface Miniatur {
  titel: string;
  text: string;
  beschreibung: string;
}

interface TitelText {
  titel: string;
  text: string;
}

export interface KinetikTexte {
  /** Navigationsname und Überschrift je Seite, in der Reihenfolge von SEITEN. */
  seiten: { kurz: string; titel: string }[];

  layout: {
    /** „Teil 2 von 5" — die Ziffern setzt das Layout ein. */
    teil: (nummer: number, gesamt: number) => string;
    navSeiten: string;
    navWeiter: string;
    zurueck: string;
    weiter: string;
    impressum: string;
    datenschutz: string;
    sprache: string;
  };

  uebersicht: {
    kernsatz: string;
    einleitung: string;
    worumH: string;
    worum: string[];
    rolleTitel: string;
    rolle: string;
    videoHinweis: string;
    videoTitel: string;
    videoText: string;
    beschreibbarH: string;
    beschreibbarText: string;
    beschreibungLabel: string;
    miniaturen: Miniatur[];
    nennerTitel: string;
    nennerText: string;
    zusammenarbeitH: string;
    schritte: TitelText[];
    zusammenarbeitSchluss: string;
    kontaktH: string;
    kontakt: string[];
    signatur: string;
    /**
     * Förderband, prominent auf der Einstiegsseite direkt unter dem Aufmacher.
     * Förderungen sind Referenzen — BSFZ, MFG und Covision belegen, dass die
     * Entwicklung geprüft und getragen wird, und das schafft Vertrauen, bevor
     * irgendein technisches Argument gelesen wird. Deshalb weit oben und nicht
     * als Fußnote.
     */
    foerderLabel: string;
    foerderText: string;
  };

  beispiele: {
    einleitungVor: string;
    /** Steht kursiv zwischen den beiden Hälften: „der Simulator *ist* die Steuerung". */
    einleitungIst: string;
    einleitungNach: string;
    pendelchorH: string;
    pendelchorAlt: string;
    pendelchorText: string;
    cobotH: string;
    cobotText: string[];
    cobotVideoTitel: string;
    omniwheelH: string;
    omniwheelVideoTitel: string;
    omniwheelText: string;
    kinematikenH: string;
    kinematikenVideoTitel: string;
    kinematikenText: string;
    koerperH: string;
    koerperVideoTitel: string;
    koerperText: string[];
  };

  technik: {
    mechanikH: string;
    mechanik1: string;
    mechanikBetont: string;
    mechanik2: string;
    mechanik3: string;
    mechanik4: string;
    verweisVor: string;
    verweisNach: string;
    modelleH: string;
    frameGraphTitel: string;
    frameGraphText: string;
    actionGraphTitel: string;
    actionGraphText: string;
    modelleSchluss: string;
    simulationH: string;
    simulation: string[];
    simulationVideoTitel: string;
  };

  herkunft: {
    dauerbetriebH: string;
    dauerbetrieb: string[];
    praegtEinleitung: string;
    eigenschaften: TitelText[];
    expertensystemH: string;
    expertensystem: string[];
  };

  aufwand: {
    budgetH: string;
    budgetEinleitung: string;
    punkte: TitelText[];
    budgetSchluss: string;
    perspektiveH: string;
    perspektive: string[];
    kontaktH: string;
    kontakt: string;
    signatur: string;
  };
}

const de: KinetikTexte = {
  seiten: [
    // Die Überschrift trägt den Gedanken, der Fließtext das Problem. Die
    // frühere Fassung („Bewegung, die bisher zu aufwendig war") schrieb den
    // Aufwand der Bewegung zu statt der Steuerung.
    { kurz: "Übersicht", titel: "Bewegung beschreiben statt programmieren" },
    { kurz: "Beispiele", titel: "So sieht das konkret aus" },
    { kurz: "Technik", titel: "Wie das funktioniert" },
    { kurz: "Herkunft", titel: "Woher die Technik kommt" },
    { kurz: "Aufwand", titel: "Aufwand und Perspektive" },
  ],

  layout: {
    teil: (nummer, gesamt) => `Teil ${nummer} von ${gesamt}`,
    navSeiten: "Seiten dieses Bereichs",
    navWeiter: "Weiter im Bereich",
    zurueck: "Zurück",
    weiter: "Weiter",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    sprache: "Sprache",
  },

  uebersicht: {
    kernsatz:
      "MotionA ist eine Steuerung, die ein Modell des Raums mitführt. Beschrieben wird nicht ein fest programmierter Weg, sondern eine Beziehung zwischen Objekten — und daraus ergibt sich die Bewegung.",
    einleitung:
      "Damit werden Arbeiten umsetzbar, die bisher weniger an der Idee als am Steuerungsaufwand gescheitert sind: in Kunst und Kunst am Bau, in Ausstellungen, auf der Bühne. Viele Achsen, mehrere Mechaniken, Licht, Sensorik und Besucher gehören dabei in ein Modell statt in fünf getrennte Systeme.",
    worumH: "Worum es auf dieser Seite geht",
    worum: [
      "Diese Seite ist kein Prospekt. Sie sammelt ein paar Informationen über MotionA, damit im Gespräch schnell klar wird, worüber wir eigentlich reden.",
      "Gesucht sind Künstlerinnen und Künstler mit Ideen für komplexe Bewegungen — gern solche, die bisher als zu aufwendig, zu speziell oder schlicht als nicht steuerbar zurückgestellt wurden. Es muss dafür kein Roboter aus dem Katalog sein: Eigene Kinematiken lassen sich beschreiben und fahren. Eine Skulptur, die einen Flügelschlag ausführt. Eine Gliederpuppe, die tanzt. Ein Mechanismus, den es so noch nicht gibt.",
      "Ebenso angesprochen sind Ausstellungsbüros, Kuratorinnen und Kuratoren, Bühnenbild, Museen und Werkstätten, die für ein Vorhaben die Bewegungstechnik suchen.",
    ],
    rolleTitel: "Wo unser Beitrag endet:",
    rolle:
      " bei den Motoren. Steuerung, räumliches Modell, Choreografie, Simulation und Inbetriebnahme kommen von uns. Die Mechanik selbst — Gestell, Gelenke, Anlenkung, Material, Statik — bauen wir nicht. Dabei können wir beraten und früh mitdenken, damit die Bewegung später auch wirklich funktioniert, aber gefertigt werden muss sie von anderer Seite.",
    videoHinweis:
      "Zu den Videos: Sie sind ungeschnitten und zeigen Testaufbauten, kein Werbematerial. Sie sollen nur veranschaulichen, was möglich ist.",
    videoTitel: "Eine Drohne lenkt eine kinetische Installation in Echtzeit aus",
    videoText:
      "Eine Drohne fliegt frei durch den Raum, die Installation reagiert in Echtzeit. Die Position der Drohne kommt aus der Sensorik und wird während der Ausführung Teil des Systems. Es gibt keine hinterlegte Choreografie, auf die zurückgegriffen wird.",
    beschreibbarH: "Was sich damit beschreiben lässt",
    beschreibbarText:
      "Fünf Beispiele — nicht als Vorschlag für ein bestimmtes Werk, sondern um zu zeigen, wie kurz die Beschreibung wird, wenn sie eine Beziehung meint statt einer Bahn.",
    beschreibungLabel: "Beschreibung: ",
    miniaturen: [
      {
        titel: "Der ruhende Punkt",
        text: "Eine Skulptur dreht sich vollständig. Mehrere Lichtquellen auf eigenen Achsen zielen dabei auf denselben Punkt im Raum. Der Punkt selbst steht absolut still.",
        beschreibung:
          "Der Zielknoten hängt am Raum. Die erforderlichen Bewegungen der Achsen ergeben sich daraus.",
      },
      {
        titel: "Dasselbe Werk, andere Aussage",
        text: "Derselbe Aufbau, aber das Ziel hängt nun an einem der bewegten Elemente. Der Punkt wandert, die übrigen Elemente verfolgen ihn.",
        beschreibung:
          "derselbe Knoten, aber ein anderes Elternsystem. Geändert wird nur die räumliche Zuordnung.",
      },
      {
        titel: "Verschachtelte Rotation",
        text: "Bewegte Träger sitzen auf anderen bewegten Trägern, an den äußersten Enden befinden sich Lichtpunkte. Die entstehenden Muster werden nicht einzeln animiert, sondern ergeben sich aus der Geometrie.",
        beschreibung: "die Kette der Träger und jeweils eine Drehzahl.",
      },
      {
        titel: "Rendezvous",
        text: "Zwei unabhängige Systeme bewegen sich mit Perioden, die nicht ganzzahlig zueinander stehen. Nur selten kommen sich bestimmte Punkte nahe — und genau dann reichen sie etwas weiter aus oder leuchten gemeinsam auf.",
        beschreibung:
          "eine Bedingung über den Abstand zweier Knoten, keine vorab gesetzte Zeitmarke. Dadurch entsteht kein kurzer, erkennbarer Wiederholungszyklus.",
      },
      {
        titel: "Spiel zwischen real und virtuell",
        text: "Auf einer projizierten Spielfläche steuern Besucher reale Fahrzeuge gegen ein Team aus virtuellen Fahrzeugen. Beide Seiten spielen denselben virtuellen Ball zurück.",
        beschreibung:
          "Spielfeld, reale und virtuelle Fahrzeuge sowie Ball befinden sich im selben räumlichen Modell und können dadurch unmittelbar miteinander interagieren.",
      },
    ],
    nennerTitel: "Der gemeinsame Nenner:",
    nennerText:
      " Weil eine Beziehung beschrieben wird und kein Weg, bedeutet auch eine Änderung an der Geometrie — ein Montagepunkt 20 Millimeter weiter außen, ein etwas längerer Arm — lediglich einen geänderten Wert und keine neue Bahnprogrammierung.",
    zusammenarbeitH: "Wie eine Zusammenarbeit beginnt",
    schritte: [
      {
        titel: "Mit einer Idee, nicht mit einer Konstruktion.",
        text: "Eine Skizze genügt, und sie darf technisch unausgegoren sein. Was sich bewegen soll, wie es sich anfühlen soll, worauf es reagieren soll — das ist der Ausgangspunkt.",
      },
      {
        titel:
          "Dann klären wir gemeinsam, was mechanisch dahinterstehen muss.",
        text: "Welche Achsen, welche Antriebe, wo Gelenke sitzen, was sich überhaupt lohnt. Hier ist der beste Zeitpunkt für Einwände: Änderungen an einer Zeichnung kosten nichts, Änderungen an einer geschweißten Konstruktion schon.",
      },
      {
        titel:
          "Die Bewegung entsteht im Modell, bevor die Mechanik existiert.",
        text: "Choreografie, Erreichbarkeit, Kollisionen und Timing lassen sich simulieren und ansehen, solange noch nichts gebaut ist.",
      },
      {
        titel: "Erst danach muss real gefertigt werden",
        text: "— von einer Werkstatt, einem Metallbauer oder wem auch immer Sie vertrauen. Wir kommen ab dem Motor wieder dazu.",
      },
    ],
    zusammenarbeitSchluss:
      "Das funktioniert bei einem Objekt mit drei Achsen ebenso wie bei einer raumfüllenden Installation. Wenn Sie unsicher sind, ob Ihre Idee zu klein oder zu groß ist: fragen Sie einfach.",
    kontaktH: "Kontakt",
    kontakt: [
      "Wenn Sie eine Idee haben, deren Bewegung bisher an der Technik hängt: melden Sie sich gern.",
      "Eine Skizze, ein Video, eine Bewegungsbeschreibung oder eine grobe Idee genügt. Technisch ausgearbeitet muss sie nicht sein — das klären wir gemeinsam.",
    ],
    signatur: "Matthias Dübon · Dübon Engineering GmbH · Kusterdingen",
    foerderLabel: "Unterstützt und gefördert durch",
    foerderText:
      "Die Entwicklung an MotionA ist im Rahmen der Forschungszulage als Forschung und Entwicklung anerkannt (BSFZ) und wird von Covision und der MFG Baden-Württemberg unterstützt. Dübon Engineering ist seit 2017 eine GmbH, inhabergeführt.",
  },

  beispiele: {
    einleitungVor:
      "Aufbauten aus der Entwicklung. Einige stehen real, andere laufen in der Simulation — was hier kein Abstrich ist: Der Simulator ",
    einleitungIst: "ist",
    einleitungNach:
      " die Steuerung, nur mit anderer Hardware-Anbindung. Zu sehen ist also die tatsächliche Berechnung und keine Animation eines geplanten Ergebnisses.",
    pendelchorH: "Pendel·Chor",
    pendelchorAlt:
      "Vier leuchtende Pendel an einer Traverse, daneben ein Bedienterminal",
    pendelchorText:
      "Vier beleuchtete Pendel reagieren auf Besucher und sind als ein Bewegungsstück choreografiert. „Lass die Pendel schwingen wie Schilf im Wind, wenn jemand näher kommt“ wird zu einer geprüften Beschreibung, im digitalen Zwilling verifiziert und auf der Installation ausgeführt.",
    cobotH: "Zwei Cobots docken aneinander an",
    cobotText: [
      "Ein Cobot dreht das Ziel, der zweite muss andocken, während es sich dreht. Die Andockpose ist dabei nie in Weltkoordinaten definiert, sondern im Koordinatensystem des rotierenden Objekts. Die Bahn im Raum ist ein Ergebnis des Modells, keine programmierte Trajektorie.",
      "Ändert sich die Drehzahl oder die Geometrie, funktioniert das Andocken weiter. Nichts muss neu eingelernt werden.",
    ],
    cobotVideoTitel:
      "Andockmanöver zweier Cobots — eine Hommage an Interstellar, in der Simulation",
    omniwheelH: "Omniwheel-Plattform",
    omniwheelVideoTitel:
      "Omniwheel-Plattform: holonome Bewegung aus dem Modell",
    omniwheelText:
      "Eine Omniwheel-Plattform fährt holonom, also in jede Richtung bei gleichzeitiger Drehung. Die Radgeschwindigkeiten ergeben sich aus dem Modell; kommandiert wird im Bezugssystem, das gerade zählt — der Plattform, dem Raum oder einem anderen bewegten Objekt.",
    kinematikenH: "Dieselbe Aufgabe auf Cobot, Delta und SCARA",
    kinematikenVideoTitel: "Dieselbe Aufgabe auf Cobot, Delta und SCARA",
    kinematikenText:
      "Dass daneben auch klassische Robotik läuft, ist der Beleg dafür, dass der Ansatz trägt: drei verschiedene Kinematiken, dieselbe Bewegungslogik. Kommandiert wird in Bezugssystemen und Zielen, nicht in Gelenkwinkeln — deshalb ändert sich an der Aufgabe nichts, wenn die Maschine wechselt.",
    koerperH: "Mehrere Körper in einem Modell",
    koerperVideoTitel: "Eine Drohnenformation als ein System",
    koerperText: [
      "Eine Drohnenformation als ein System: keine parallel laufenden Einzelprogramme, sondern Beziehungen in einem Modell, zur Laufzeit aufgelöst. Formation, Abstände oder Anzahl ändern sich — die Einzelbahnen folgen daraus, statt einzeln geschrieben zu werden.",
      "Derselbe Grundsatz gilt für mehrachsige Mechanik, kinetische Installationen und jeden Aufbau, in dem mehrere bewegte Teile in definierter Beziehung zueinander bleiben müssen.",
    ],
  },

  technik: {
    mechanikH: "Welche Mechanik dahinterstecken kann",
    mechanik1:
      "Der interessante Fall sind Mechaniken, die es so nicht zu kaufen gibt. Drehteller, Traversen auf Traversen, Seilzüge, Pendel, Fahrzeuge, ein Flügelschlag, eine Gliederpuppe, eigens gebaute Achskonfigurationen.",
    mechanikBetont:
      "Für solche Aufbauten existiert kein fertiger Controller, weil es das Produkt nicht gibt.",
    mechanik2:
      " Genau dort entsteht der Aufwand, an dem Ideen scheitern — und genau dort setzt MotionA an: Wer die Kinematik beschreiben kann, kann sie fahren. Die Mechanik darf mit dem Werk entstehen, statt sich nach dem zu richten, wofür es zufällig eine Steuerung gibt.",
    mechanik3:
      "Daneben werden Delta, SCARA, Portal, Cobot und Sechsachs-Arme direkt unterstützt. Jede Maschine wird einmal beschrieben — Struktur, Gelenke, Grenzen. Kommandiert wird danach in Bezugssystemen und Zielen, nicht in Gelenkwinkeln. Dieselbe Bewegungslogik läuft deshalb auf allen.",
    mechanik4:
      "Vorhandene Steuerungen müssen dabei nicht ersetzt werden. Wo ein Roboter mit funktionierendem Controller steht, kann er bleiben — MotionA bildet ihn gemeinsam mit den übrigen Achsen, Licht und Sensorik in einem Modell ab.",
    verweisVor:
      "Wie das in echten Aufbauten aussieht — Omniwheel-Plattform, dieselbe Aufgabe auf Cobot, Delta und SCARA — steht unter ",
    verweisNach: ".",
    modelleH: "Zwei Modelle",
    frameGraphTitel: "FrameGraph — wo sich etwas befindet.",
    frameGraphText:
      " Alle Bezugssysteme und ihre Beziehungen zueinander, live geführt. Ein laufendes Band, ein zweiter Roboter, eine getrackte Person: jeweils ein weiteres Bezugssystem, kein Sonderfall im Programm.",
    actionGraphTitel: "ActionGraph — wann etwas passiert.",
    actionGraphText:
      " Aktionen, Reihenfolgen, parallele Zweige, Ereignisse, Fehlerfälle. Licht, Klappen und Projektionen gehören in dieselbe Beschreibung, nicht in ein zweites System.",
    modelleSchluss:
      "Beides ist stark abstrahiert und trotzdem echtzeitfähig. Weil die Beschreibung strukturiert ist, ist sie prüfbar — und das ist auch der Punkt, an dem KI sinnvoll ansetzt: Ein Sprachmodell erzeugt keinen Robotercode, sondern eine Beschreibung, die vor der Ausführung verifiziert wird.",
    simulationH: "Simulation ist keine zweite Implementierung",
    simulation: [
      "Der Simulator ist kein Modell der Steuerung, er ist die Steuerung — nur mit anderer Hardware-Anbindung. Dieselbe Beschreibung, derselbe Ausführungspfad.",
      "Deshalb lassen sich reale und virtuelle Teile mischen: einzelne Achsen real fahren, während der Rest simuliert bleibt. Und deshalb ist eine Anlage entwickelbar, bevor sie existiert.",
    ],
    simulationVideoTitel:
      "Entwicklersicht: Weltmodell, Koordinatensysteme, Ausführung, Timing, Debugging",
  },

  herkunft: {
    dauerbetriebH: "Was Dauerbetrieb verlangt",
    dauerbetrieb: [
      "Eine Installation im Foyer, im Museum oder auf der Bühne muss über Jahre laufen, ohne dass jemand danebensteht. Das ist eine andere Anforderung als ein Aufbau, der zur Eröffnung funktioniert.",
      "MotionA kommt aus fünfzehn Jahren Embedded-Entwicklung, von Mikrocontrollern bis zu Linux-Echtzeitsystemen. Dübon Engineering baut Steuerungstechnik für Industriekunden — Geräte, die in Serie gehen und über Jahre im Feld laufen, ohne dass jemand danebensteht. Für MotionA gelten dieselben Maßstäbe.",
    ],
    praegtEinleitung: "Das prägt, wie MotionA gebaut ist:",
    eigenschaften: [
      {
        titel: "Deterministische Ausführung",
        text: "Eine Echtzeit-VM mit vorhersagbarem Zeitverhalten, keine Skriptumgebung mit Best-Effort-Timing. Bewegungen laufen morgen so wie heute.",
      },
      {
        titel: "Prüfung vor der Ausführung",
        text: "Ungültige Zustandsübergänge und Ressourcenkonflikte fallen in der statischen Analyse auf, Erreichbarkeit und Kollisionen im digitalen Zwilling — bevor sich etwas bewegt.",
      },
      {
        titel: "KI fasst die Echtzeitebene nicht an",
        text: "Ein Sprachmodell erzeugt eine Beschreibung, die geprüft, simuliert und getestet wird. Die Ausführungsschicht bleibt davon unberührt.",
      },
      {
        titel: "Vom Mikrocontroller bis zum Multicore-System",
        text: "Dieselbe Sprache, dasselbe Ausführungsmodell. Ein größerer Aufbau bedeutet andere Hardware, keine Neuentwicklung.",
      },
    ],
    expertensystemH: "Vom Expertensystem zur Beschreibung",
    expertensystem: [
      "Genau diese Herkunft ist die Voraussetzung dafür, dass Bewegungssteuerung überhaupt zugänglich werden kann. Eine Technologie wird nicht dadurch allgemein verfügbar, dass man sie vereinfacht, sondern dadurch, dass das Schwierige daran verlässlich automatisiert wird: Koordinatentransformationen, Zeitverhalten, Ressourcenkonflikte, Kollisionen.",
      "Was heute ein Expertensystem ist, für das man einen Spezialisten pro Anlage braucht, wird damit zu einer Beschreibung, die auch jemand ändern kann, der kein Robotiker ist.",
    ],
  },

  aufwand: {
    budgetH: "Das Budget kann in das Werk gehen",
    budgetEinleitung:
      "Bei Einzelstücken steckt das Geld selten in der Hardware. Es steckt in Ingenieurstunden — und die teuersten davon fallen am Ende an, wenn alle gleichzeitig vor Ort sind.",
    punkte: [
      {
        titel: "Ein System statt fünf",
        text: "Keine getrennten Steuerungswelten für Mechanik, Zusatzachsen, Licht und Sensorik, und damit auch keine Kopplung dazwischen. Die Schnittstellen zwischen den Gewerken sind erfahrungsgemäß der Teil, der die Zeitplanung sprengt.",
      },
      {
        titel: "Änderungen sind Werte, keine Neuprogrammierung",
        text: "Ein Montagepunkt 20 Millimeter weiter außen, ein längerer Arm, eine andere Drehzahl: ein geänderter Wert im Modell. Genau solche Änderungen kommen in der Aufbauphase, wenn die Zeit am knappsten ist.",
      },
      {
        titel: "Die Arbeit beginnt vor dem Aufbau",
        text: "Choreografie, Erreichbarkeit, Kollisionen und Timing sind geprüft, bevor die Mechanik existiert. Die Zeit vor Ort — im Museum, in der Halle, auf der Bühne — ist die teuerste und knappste im ganzen Projekt.",
      },
      {
        titel: "Die Hardware darf einfach bleiben",
        text: "Dieselbe Software läuft auf einem Mikrocontroller wie auf EtherCAT-Servoantrieben. Ein teurer Robotercontroller pro Achsgruppe ist eine Option, keine Voraussetzung.",
      },
    ],
    budgetSchluss:
      "Unterm Strich verschiebt sich der Anteil, der sonst in Integration und Nacharbeit geht, in Richtung dessen, was am Ende zu sehen ist.",
    perspektiveH: "Wo wir damit hinwollen",
    perspektive: [
      "Damit die Ausgangslage klar ist: MotionA ist ein Produkt, das wir mittel- und langfristig verkaufen wollen. Der Hauptmarkt dafür ist die Industrie.",
      "Kunst, Kunst am Bau und Bildung sind für uns trotzdem nicht nur ein Anwendungsfeld zum Ausprobieren. Wir sehen dort eigenständige kommerzielle Möglichkeiten — etwa wiederverwendbare Aufbauten, Vermietung, Lizenzen oder ein gemeinsam entwickeltes Produkt.",
      "Wenn sich aus einer Zusammenarbeit so etwas ergibt, ist das ausdrücklich erwünscht. Voraussetzung ist es nicht. Ein einzelnes Werk, das gut wird, ist für uns genauso interessant.",
    ],
    kontaktH: "Kontakt",
    kontakt:
      "Eine Skizze, ein Video oder eine grobe Bewegungsbeschreibung genügt, um anzufangen.",
    signatur: "Matthias Dübon · Dübon Engineering GmbH · Kusterdingen",
  },
};

const en: KinetikTexte = {
  seiten: [
    { kurz: "Overview", titel: "Describing motion instead of programming it" },
    { kurz: "Examples", titel: "What this looks like in practice" },
    { kurz: "Technology", titel: "How it works" },
    { kurz: "Origin", titel: "Where the technology comes from" },
    { kurz: "Effort", titel: "Effort and perspective" },
  ],

  layout: {
    teil: (nummer, gesamt) => `Part ${nummer} of ${gesamt}`,
    navSeiten: "Pages in this section",
    navWeiter: "Continue in this section",
    zurueck: "Back",
    weiter: "Next",
    impressum: "Imprint",
    datenschutz: "Privacy",
    sprache: "Language",
  },

  uebersicht: {
    kernsatz:
      "MotionA is a control system that carries a model of space with it. What you describe is not a fixed programmed path but a relationship between objects — and the motion follows from it.",
    einleitung:
      "This makes work feasible that used to fail less on the idea than on the control effort behind it: in art and art in architecture, in exhibitions, on stage. Many axes, several mechanisms, light, sensors and visitors belong in one model rather than in five separate systems.",
    worumH: "What this section is for",
    worum: [
      "This is not a brochure. It gathers a few facts about MotionA so that a conversation can start from a shared understanding of what we are actually talking about.",
      "We are looking for artists with ideas for complex motion — ideally the ones that were set aside as too costly, too specific or simply not controllable. It does not have to be a robot from a catalogue: custom kinematics can be described and driven. A sculpture performing a wing beat. An articulated figure that dances. A mechanism that does not exist yet.",
      "The same applies to exhibition designers, curators, stage design, museums and workshops looking for the motion technology behind a project.",
    ],
    rolleTitel: "Where our contribution ends:",
    rolle:
      " at the motors. Control system, spatial model, choreography, simulation and commissioning come from us. The mechanics themselves — frame, joints, linkage, material, structural design — we do not build. We can advise on them and think along early, so the motion actually works later, but someone else has to manufacture them.",
    videoHinweis:
      "About the videos: they are unedited and show test setups, not promotional material. They are only meant to illustrate what is possible.",
    videoTitel: "A drone steers a kinetic installation in real time",
    videoText:
      "A drone flies freely through the room and the installation responds in real time. The drone's position comes from the sensors and becomes part of the system while it runs. There is no stored choreography being played back.",
    beschreibbarH: "What can be described this way",
    beschreibbarText:
      "Five examples — not as a proposal for any particular work, but to show how short the description becomes once it means a relationship instead of a path.",
    beschreibungLabel: "Description: ",
    miniaturen: [
      {
        titel: "The point at rest",
        text: "A sculpture rotates fully. Several light sources on their own axes all aim at the same point in space. That point itself remains perfectly still.",
        beschreibung:
          "The target node is attached to the room. The required axis movements follow from that.",
      },
      {
        titel: "Same work, different statement",
        text: "The same setup, but the target is now attached to one of the moving elements. The point travels and the remaining elements follow it.",
        beschreibung:
          "the same node, but a different parent frame. Only the spatial assignment changes.",
      },
      {
        titel: "Nested rotation",
        text: "Moving carriers sit on other moving carriers, with points of light at the outermost ends. The resulting patterns are not animated one by one; they follow from the geometry.",
        beschreibung: "the chain of carriers and one rotation speed each.",
      },
      {
        titel: "Rendezvous",
        text: "Two independent systems move with periods that are not integer multiples of one another. Only rarely do certain points come close — and exactly then they reach out a little further or light up together.",
        beschreibung:
          "a condition on the distance between two nodes, not a preset point in time. As a result there is no short, recognisable repetition cycle.",
      },
      {
        titel: "Play between real and virtual",
        text: "On a projected playing surface, visitors steer real vehicles against a team of virtual ones. Both sides return the same virtual ball.",
        beschreibung:
          "the field, the real and virtual vehicles and the ball all live in the same spatial model, which is what lets them interact directly.",
      },
    ],
    nennerTitel: "The common denominator:",
    nennerText:
      " Because a relationship is described and not a path, a change to the geometry — a mounting point 20 millimetres further out, a slightly longer arm — is only a changed value, not new path programming.",
    zusammenarbeitH: "How a collaboration starts",
    schritte: [
      {
        titel: "With an idea, not a construction drawing.",
        text: "A sketch is enough, and it may well be technically half-baked. What should move, how it should feel, what it should respond to — that is the starting point.",
      },
      {
        titel: "Then we work out together what has to be there mechanically.",
        text: "Which axes, which drives, where the joints sit, what is worth doing at all. This is the best moment for objections: changing a drawing costs nothing, changing a welded structure does.",
      },
      {
        titel: "The motion takes shape in the model before the mechanics exist.",
        text: "Choreography, reachability, collisions and timing can be simulated and watched while nothing has been built yet.",
      },
      {
        titel: "Only then does anything need to be manufactured",
        text: "— by a workshop, a metal fabricator or whoever you trust. We rejoin the project at the motor.",
      },
    ],
    zusammenarbeitSchluss:
      "This works for an object with three axes just as well as for a room-filling installation. If you are unsure whether your idea is too small or too large: just ask.",
    kontaktH: "Contact",
    kontakt: [
      "If you have an idea whose motion has so far been held up by the technology, do get in touch.",
      "A sketch, a video, a description of the movement or a rough idea is enough. It does not have to be worked out technically — that is what we do together.",
    ],
    signatur: "Matthias Dübon · Dübon Engineering GmbH · Kusterdingen, Germany",
    foerderLabel: "Supported and funded by",
    foerderText:
      "Work on MotionA is recognised as research and development under the German research allowance (BSFZ) and is supported by Covision and MFG Baden-Württemberg. Dübon Engineering has been a GmbH since 2017, owner-led.",
  },

  beispiele: {
    einleitungVor:
      "Setups from our own development work. Some exist physically, others run in simulation — which is no concession here: the simulator ",
    einleitungIst: "is",
    einleitungNach:
      " the control system, only with a different hardware connection. What you see is the actual computation, not an animation of an intended result.",
    pendelchorH: "Pendulum Choir",
    pendelchorAlt:
      "Four illuminated pendulums on a truss, next to an operating terminal",
    pendelchorText:
      "Four illuminated pendulums respond to visitors and are choreographed as a single piece of motion. “Let the pendulums sway like reeds in the wind when someone comes closer” becomes a checked description, verified in the digital twin and executed on the installation.",
    cobotH: "Two cobots docking with each other",
    cobotText: [
      "One cobot rotates the target, the second has to dock while it turns. The docking pose is never defined in world coordinates but in the coordinate system of the rotating object. The path through space is a result of the model, not a programmed trajectory.",
      "If the rotation speed or the geometry changes, the docking still works. Nothing has to be taught again.",
    ],
    cobotVideoTitel:
      "Docking manoeuvre of two cobots — a nod to Interstellar, in simulation",
    omniwheelH: "Omniwheel platform",
    omniwheelVideoTitel:
      "Omniwheel platform: holonomic motion derived from the model",
    omniwheelText:
      "An omniwheel platform moves holonomically, that is in any direction while rotating at the same time. The wheel speeds follow from the model; commands are given in whichever reference frame matters at that moment — the platform, the room, or another moving object.",
    kinematikenH: "The same task on a cobot, a delta and a SCARA",
    kinematikenVideoTitel: "The same task on a cobot, a delta and a SCARA",
    kinematikenText:
      "That classic robotics runs alongside it is the evidence that the approach holds: three different kinematics, the same motion logic. Commands are given in reference frames and targets, not in joint angles — which is why nothing about the task changes when the machine does.",
    koerperH: "Several bodies in one model",
    koerperVideoTitel: "A drone formation as one system",
    koerperText: [
      "A drone formation as one system: not individual programs running in parallel, but relationships in one model, resolved at runtime. Formation, spacing or count change — the individual paths follow from that instead of being written one by one.",
      "The same principle applies to multi-axis mechanics, kinetic installations and any setup in which several moving parts have to stay in a defined relationship to one another.",
    ],
  },

  technik: {
    mechanikH: "What kind of mechanics can sit behind it",
    mechanik1:
      "The interesting case is mechanics you cannot simply buy. Turntables, trusses on trusses, cable pulls, pendulums, vehicles, a wing beat, an articulated figure, purpose-built axis configurations.",
    mechanikBetont:
      "For setups like these no off-the-shelf controller exists, because the product does not exist.",
    mechanik2:
      " That is exactly where the effort arises on which ideas fail — and exactly where MotionA starts: if you can describe the kinematics, you can drive them. The mechanics may take shape along with the work instead of conforming to whatever happens to have a controller.",
    mechanik3:
      "Alongside that, delta, SCARA, gantry, cobot and six-axis arms are supported directly. Each machine is described once — structure, joints, limits. After that, commands are given in reference frames and targets, not in joint angles. The same motion logic therefore runs on all of them.",
    mechanik4:
      "Existing controllers do not have to be replaced. Where a robot with a working controller is already in place, it can stay — MotionA represents it in one model together with the remaining axes, the light and the sensors.",
    verweisVor:
      "What that looks like in real setups — the omniwheel platform, the same task on a cobot, a delta and a SCARA — is shown under ",
    verweisNach: ".",
    modelleH: "Two models",
    frameGraphTitel: "FrameGraph — where something is.",
    frameGraphText:
      " All reference frames and their relationships to one another, maintained live. A moving conveyor, a second robot, a tracked person: each of them simply one more reference frame, not a special case in the program.",
    actionGraphTitel: "ActionGraph — when something happens.",
    actionGraphText:
      " Actions, sequences, parallel branches, events, error cases. Light, flaps and projections belong in the same description, not in a second system.",
    modelleSchluss:
      "Both are heavily abstracted and still real-time capable. Because the description is structured, it can be checked — and that is also where AI has a sensible place: a language model does not produce robot code, it produces a description that is verified before execution.",
    simulationH: "Simulation is not a second implementation",
    simulation: [
      "The simulator is not a model of the control system, it is the control system — only with a different hardware connection. The same description, the same execution path.",
      "That is why real and virtual parts can be mixed: driving individual axes for real while the rest stays simulated. And it is why a system can be developed before it exists.",
    ],
    simulationVideoTitel:
      "Developer view: world model, coordinate systems, execution, timing, debugging",
  },

  herkunft: {
    dauerbetriebH: "What continuous operation demands",
    dauerbetrieb: [
      "An installation in a foyer, a museum or on stage has to run for years without anyone standing next to it. That is a different requirement from a setup that works on opening night.",
      "MotionA comes out of fifteen years of embedded development, from microcontrollers through to Linux real-time systems. Dübon Engineering builds control technology for industrial customers — devices that go into series production and run in the field for years without anyone standing next to them. The same standards apply to MotionA.",
    ],
    praegtEinleitung: "That shapes how MotionA is built:",
    eigenschaften: [
      {
        titel: "Deterministic execution",
        text: "A real-time VM with predictable timing behaviour, not a scripting environment with best-effort timing. Movements run tomorrow the way they run today.",
      },
      {
        titel: "Checking before execution",
        text: "Invalid state transitions and resource conflicts show up in static analysis, reachability and collisions in the digital twin — before anything moves.",
      },
      {
        titel: "AI does not touch the real-time layer",
        text: "A language model produces a description that is checked, simulated and tested. The execution layer remains untouched by it.",
      },
      {
        titel: "From microcontroller to multicore system",
        text: "The same language, the same execution model. A larger setup means different hardware, not a new development.",
      },
    ],
    expertensystemH: "From expert system to description",
    expertensystem: [
      "This origin is precisely the precondition for motion control becoming accessible at all. A technology does not become generally available by being simplified, but by having the hard parts reliably automated: coordinate transformations, timing behaviour, resource conflicts, collisions.",
      "What today is an expert system, requiring one specialist per installation, thereby becomes a description that someone who is not a roboticist can change as well.",
    ],
  },

  aufwand: {
    budgetH: "The budget can go into the work itself",
    budgetEinleitung:
      "With one-off pieces the money rarely sits in the hardware. It sits in engineering hours — and the most expensive of those come at the end, when everyone is on site at the same time.",
    punkte: [
      {
        titel: "One system instead of five",
        text: "No separate control worlds for mechanics, auxiliary axes, light and sensors, and therefore no coupling between them either. In our experience the interfaces between trades are the part that breaks the schedule.",
      },
      {
        titel: "Changes are values, not reprogramming",
        text: "A mounting point 20 millimetres further out, a longer arm, a different rotation speed: a changed value in the model. Changes like these arrive during assembly, when time is at its tightest.",
      },
      {
        titel: "The work begins before assembly",
        text: "Choreography, reachability, collisions and timing are checked before the mechanics exist. Time on site — in the museum, in the hall, on stage — is the most expensive and scarcest in the whole project.",
      },
      {
        titel: "The hardware is allowed to stay simple",
        text: "The same software runs on a microcontroller and on EtherCAT servo drives. An expensive robot controller per axis group is an option, not a prerequisite.",
      },
    ],
    budgetSchluss:
      "On balance, the share that would otherwise go into integration and rework shifts towards what is actually visible in the end.",
    perspektiveH: "Where we want to take this",
    perspektive: [
      "So that the starting point is clear: MotionA is a product we intend to sell in the medium and long term. Its main market is industry.",
      "Even so, art, art in architecture and education are not merely a field to try things out in. We see genuine commercial possibilities there — reusable setups, rental, licensing, or a jointly developed product.",
      "If something like that comes out of a collaboration, it is expressly welcome. It is not a precondition. A single work that turns out well is just as interesting to us.",
    ],
    kontaktH: "Contact",
    kontakt:
      "A sketch, a video or a rough description of the movement is enough to start.",
    signatur: "Matthias Dübon · Dübon Engineering GmbH · Kusterdingen, Germany",
  },
};

const TEXTE: Record<Language, KinetikTexte> = { de, en };

/** Die Texte des Bereichs in der global gewählten Sprache. */
export function useKinetikTexte(): KinetikTexte {
  const { language } = useLanguage();
  return TEXTE[language];
}
