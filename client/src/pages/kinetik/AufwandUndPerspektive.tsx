/**
 * Kinetik 05 — Aufwand und Perspektive.
 *
 * Inhalt aus 05-aufwand-und-perspektive.md, Texte beider Sprachen in texte.ts.
 * Wohin das Budget geht, und mit welcher Absicht wir das Feld überhaupt
 * betreten.
 */

import { Mail } from "lucide-react";
import KinetikLayout from "./KinetikLayout";
import { KONTAKT_MAIL, SPALTE } from "./seiten";
import { useKinetikTexte } from "./texte";

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
  const t = useKinetikTexte();
  const s = t.aufwand;

  return (
    <KinetikLayout segment="aufwand-und-perspektive">
      {/* ------------------------------------------------ Budget */}
      <section className={`mt-8 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.budgetH}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          {s.budgetEinleitung}
        </p>

        <dl className="mt-8 space-y-6">
          {s.punkte.map(p => (
            <Punkt key={p.titel} titel={p.titel} text={p.text} />
          ))}
        </dl>

        <p className="mt-8 leading-relaxed text-foreground/90">
          {s.budgetSchluss}
        </p>
      </section>

      {/* ------------------------------------------------ Perspektive */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.perspektiveH}
        </h2>
        {s.perspektive.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
      </section>

      {/* ------------------------------------------------ Kontakt */}
      <section className={`mt-24 ${SPALTE} border-t border-border pt-12`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.kontaktH}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">{s.kontakt}</p>
        <a
          href={`mailto:${KONTAKT_MAIL}?subject=MotionA`}
          className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <Mail className="h-4 w-4" />
          {KONTAKT_MAIL}
        </a>
        <p className="mt-6 text-sm text-muted-foreground">{s.signatur}</p>
      </section>
    </KinetikLayout>
  );
}
