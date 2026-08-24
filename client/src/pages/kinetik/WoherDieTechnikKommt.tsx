/**
 * Kinetik 04 — Woher die Technik kommt.
 *
 * Inhalt aus 04-woher-die-technik-kommt.md, Texte beider Sprachen in texte.ts.
 * Die Herkunft als Argument dafür, dass eine Installation über Jahre läuft.
 */

import KinetikLayout from "./KinetikLayout";
import { SPALTE } from "./seiten";
import { useKinetikTexte } from "./texte";

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
  const t = useKinetikTexte();
  const s = t.herkunft;

  return (
    <KinetikLayout segment="woher-die-technik-kommt">
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.dauerbetriebH}
        </h2>
        {s.dauerbetrieb.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
        <p className="mt-6 leading-relaxed text-foreground/90">
          {s.praegtEinleitung}
        </p>

        <dl className="mt-8 space-y-6">
          {s.eigenschaften.map(e => (
            <Eigenschaft key={e.titel} titel={e.titel} text={e.text} />
          ))}
        </dl>
      </section>

      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.expertensystemH}
        </h2>
        {s.expertensystem.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
      </section>

    </KinetikLayout>
  );
}
