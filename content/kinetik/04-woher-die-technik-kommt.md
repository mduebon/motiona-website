# Woher die Technik kommt

## Was Dauerbetrieb verlangt

Eine Installation im Foyer, im Museum oder auf der Bühne muss über Jahre laufen, ohne dass jemand danebensteht. Das ist eine andere Anforderung als ein Aufbau, der zur Eröffnung funktioniert.

MotionA ist nicht aus einem Kunstprojekt entstanden, sondern aus fünfzehn Jahren Embedded-Entwicklung: EtherCAT, CANopen, Mikrocontroller bis Linux-Echtzeitsysteme. Dübon Engineering entwickelt daneben Steuerungstechnik für Industriekunden — Geräte, die in Serie gehen und über Jahre im Feld laufen müssen.

Das prägt, wie MotionA gebaut ist:

**Deterministische Ausführung.** Eine Echtzeit-VM mit vorhersagbarem Zeitverhalten, keine Skriptumgebung mit Best-Effort-Timing. Bewegungen laufen morgen so wie heute.

**Prüfung vor der Ausführung.** Ungültige Zustandsübergänge und Ressourcenkonflikte fallen in der statischen Analyse auf, Erreichbarkeit und Kollisionen im digitalen Zwilling — bevor sich etwas bewegt.

**KI fasst die Echtzeitebene nicht an.** Ein Sprachmodell erzeugt eine Beschreibung, die geprüft, simuliert und getestet wird. Die Ausführungsschicht bleibt davon unberührt.

**Vom Mikrocontroller bis EtherCAT.** Dieselbe Sprache, dasselbe Ausführungsmodell. Ein größerer Aufbau bedeutet andere Hardware, keine Neuentwicklung.

---

## Vom Expertensystem zur Beschreibung

Genau diese Herkunft ist die Voraussetzung dafür, dass Bewegungssteuerung überhaupt zugänglich werden kann. Eine Technologie wird nicht dadurch allgemein verfügbar, dass man sie vereinfacht, sondern dadurch, dass das Schwierige daran verlässlich automatisiert wird: Koordinatentransformationen, Zeitverhalten, Ressourcenkonflikte, Kollisionen.

Was heute ein Expertensystem ist, für das man einen Spezialisten pro Anlage braucht, wird damit zu einer Beschreibung, die auch jemand ändern kann, der kein Robotiker ist.
