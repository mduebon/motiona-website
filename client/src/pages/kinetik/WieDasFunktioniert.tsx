/**
 * Kinetik 03 — Wie das funktioniert.
 *
 * Inhalt aus 03-wie-das-funktioniert.md, Texte beider Sprachen in texte.ts.
 * Welche Mechanik in Frage kommt, die zwei Modelle dahinter, und warum die
 * Simulation keine zweite Implementierung ist.
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
import { useKinetikTexte } from "./texte";

export default function WieDasFunktioniert() {
  const t = useKinetikTexte();
  const s = t.technik;

  return (
    <KinetikLayout segment="wie-das-funktioniert">
      {/* ------------------------------------------------ Mechanik */}
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.mechanikH}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">{s.mechanik1}</p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          <span className="font-semibold">{s.mechanikBetont}</span>
          {s.mechanik2}
        </p>
        <p className="mt-6 leading-relaxed text-foreground/90">{s.mechanik3}</p>
        <p className="mt-6 leading-relaxed text-foreground/90">{s.mechanik4}</p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {s.verweisVor}
          <Link
            href={pfad(SEITEN[1])}
            className="font-medium text-primary hover:underline"
          >
            {t.seiten[1].kurz}
          </Link>
          {s.verweisNach}
        </p>
      </section>

      {/* ------------------------------------------------ Zwei Modelle */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.modelleH}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          <span className="font-semibold">{s.frameGraphTitel}</span>
          {s.frameGraphText}
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          <span className="font-semibold">{s.actionGraphTitel}</span>
          {s.actionGraphText}
        </p>
        <p className="mt-4 leading-relaxed text-foreground/90">
          {s.modelleSchluss}
        </p>
      </section>

      {/* ------------------------------------------------ Simulation */}
      <section className="mt-24">
        <h2
          className={`${SPALTE} font-display text-2xl font-bold tracking-tight md:text-3xl`}
        >
          {s.simulationH}
        </h2>
        {s.simulation.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} ${SPALTE} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}

        <div className="mt-10 max-w-4xl">
          <VideoEmbed id="hQIq_sJLczw" titel={s.simulationVideoTitel} />
        </div>
      </section>
    </KinetikLayout>
  );
}
