/**
 * Über uns — Firma, Förderungen, Kontakt.
 *
 * Abgrenzung zum Impressum: Das Impressum ist die rechtliche Pflichtangabe und
 * bleibt, wie es ist. Diese Seite erzählt — was die Firma macht, wer sie
 * trägt, wie man sie erreicht. Die Registerdaten stehen trotzdem kurz mit
 * drauf, weil sie hier jemand sucht, und darunter der Verweis aufs Impressum.
 *
 * Die Förderlogos sind dieselben Dateien wie im Supporter-Strip der Startseite
 * und im Förderband des Kinetik-Bereichs (`supporters.partners` in
 * translations.ts), damit alle drei Auftritte dasselbe zeigen.
 */

import { Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import SeitenLayout, { SPALTE } from "@/components/SeitenLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const s = t.about;

  return (
    <SeitenLayout titel={s.title} einleitung={s.intro}>
      {/* ------------------------------------------------ Was wir machen */}
      <section className={`mt-20 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.werH}
        </h2>
        {s.wer.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
      </section>

      {/* ------------------------------------------------ Förderungen */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.foerderH}
        </h2>
        {/*
          Feste Box je Logo statt einheitlicher Höhe: Die drei Marken haben sehr
          unterschiedliche Formate — Covision ist breit, BSFZ ein rundes
          Zeichen. Bei gleicher Höhe dominiert Covision und BSFZ schrumpft auf
          einen Punkt. Weißer Grund, weil mindestens ein Logo eine weiße Fläche
          mitbringt und sonst als Kasten im Seitenhintergrund steht.
        */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {t.supporters.partners.map(p => (
            <div
              key={p.name}
              className="flex h-16 w-36 items-center justify-center rounded-sm border border-border bg-white px-4"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-10 w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <p className={`mt-5 ${SPALTE} leading-relaxed text-foreground/90`}>
          {s.foerderText}
        </p>
      </section>

      {/* ------------------------------------------------ Vertrieb */}
      {/*
        Steht vor dem Kontakt, nicht danach: Wer wissen will, was das Geraet
        kostet, soll es kaufen koennen, ohne vorher eine Mail zu schreiben.
        Der Preis selbst steht nicht hier, sondern wird auf RBTX gepflegt.
      */}
      <section className={`mt-20 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.vertriebH}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/90">
          {s.vertriebText}
        </p>
        <a
          href={t.rbtx.partner}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-medium text-primary hover:underline"
        >
          {s.vertriebLink}
        </a>
      </section>

      {/* ------------------------------------------------ Kontakt */}
      <section className={`mt-20 ${SPALTE} border-t border-border pt-12`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.kontaktH}
        </h2>

        <address className="mt-6 not-italic leading-relaxed text-foreground/90">
          <span className="font-semibold">{s.firma}</span>
          <br />
          {s.strasse}
          <br />
          {s.ort}
          <br />
          {s.land}
        </address>

        <div className="mt-6 flex flex-col gap-2">
          <a
            href={`tel:${s.telefon.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <Phone className="h-4 w-4" />
            {s.telefon}
          </a>
          <a
            href={`mailto:${s.mail}`}
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {s.mail}
          </a>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">{s.registerH}: </span>
          {s.register}
          {" · "}
          <Link href="/imprint" className="text-primary hover:underline">
            {s.impressumHinweis}
          </Link>
        </p>
      </section>
    </SeitenLayout>
  );
}
