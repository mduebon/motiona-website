/**
 * Kinetik 01 — Übersicht.
 *
 * Inhalt aus 01-startseite.md, Texte beider Sprachen in texte.ts. Trägt die
 * Rollenklärung („unser Beitrag endet bei den Motoren"), die fünf Miniaturen
 * und den Ablauf einer Zusammenarbeit.
 */

import { Mail } from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import KinetikLayout from "./KinetikLayout";
import { KONTAKT_MAIL, SPALTE, SPALTE_EINGERUECKT } from "./seiten";
import { useKinetikTexte } from "./texte";

/**
 * Förderer. Dieselben Logodateien wie im Supporter-Strip der Startseite (siehe
 * `supporters` in lib/translations.ts), damit beide Auftritte dasselbe sagen.
 *
 * Feste Box je Logo statt einheitlicher Höhe: Die drei Marken haben sehr
 * unterschiedliche Formate — Covision ist breit, BSFZ ein rundes Zeichen. Bei
 * gleicher Höhe dominiert Covision und BSFZ schrumpft auf einen Punkt. Weißer
 * Grund, weil mindestens ein Logo eine weiße Fläche mitbringt und sonst als
 * Kasten im Seitenhintergrund steht.
 */
/** Steht an zwei Stellen: Einbettung und Verweis auf die Beschreibung. */
const VIDEO_TEXT_ZU_BEWEGUNG = "sFoopxDGA3s";

const FOERDERER = [
  { name: "Covision", logo: "/images/covision-logo.jpg" },
  { name: "MFG", logo: "/images/mfg-logo.png" },
  { name: "BSFZ", logo: "/images/bsfz-logo.png" },
];

/** Ein Beispiel aus „Was sich damit beschreiben lässt". */
function Miniatur({
  titel,
  text,
  beschreibungLabel,
  beschreibung,
}: {
  titel: string;
  text: string;
  beschreibungLabel: string;
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
        <span className="font-medium text-foreground">{beschreibungLabel}</span>
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
  const t = useKinetikTexte();
  const s = t.uebersicht;

  return (
    <KinetikLayout segment="">
      <section className={SPALTE}>
        <p className="mt-8 text-xl font-medium leading-snug">{s.kernsatz}</p>
        <p className="mt-6 leading-relaxed text-foreground/90">
          {s.einleitung}
        </p>
      </section>

      {/*
        Förderband weit oben, direkt unter dem Aufmacher: Förderungen sind
        Referenzen. Dass die Entwicklung geprüft und getragen wird, schafft
        Vertrauen, bevor das erste technische Argument gelesen wird — deshalb
        hier und nicht als Fußnote auf einer späteren Seite.
      */}
      <section className="mt-12">
        <p className="section-label text-muted-foreground">{s.foerderLabel}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {FOERDERER.map(f => (
            <div
              key={f.name}
              className="flex h-16 w-36 items-center justify-center rounded-sm border border-border bg-white px-4"
            >
              <img
                src={f.logo}
                alt={f.name}
                className="max-h-10 w-auto max-w-full object-contain"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <p
          className={`mt-5 ${SPALTE} text-sm leading-relaxed text-muted-foreground`}
        >
          {s.foerderText}
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
          {s.worumH}
        </h2>
        {s.worum.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
        <div className="mt-8 border-l-2 border-primary pl-6">
          <p className="leading-relaxed text-foreground/90">
            <span className="font-semibold">{s.rolleTitel}</span>
            {s.rolle}
          </p>
        </div>
        <p className="mt-8 text-sm italic leading-relaxed text-muted-foreground">
          {s.videoHinweis}
        </p>
      </section>

      {/* ------------------------------------------------ Erstes Video */}
      <div className="mt-16 max-w-4xl">
        <VideoEmbed id="nheEumA4-cI" titel={s.videoTitel} />
        <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
          {s.videoText}
        </p>
      </div>

      {/* ------------------------------------------------ Fünf Miniaturen */}
      <section className="mt-24">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.beschreibbarH}
        </h2>
        <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
          {s.beschreibbarText}
        </p>

        <div className="mt-10">
          {s.miniaturen.map(m => (
            <Miniatur
              key={m.titel}
              titel={m.titel}
              text={m.text}
              beschreibungLabel={s.beschreibungLabel}
              beschreibung={m.beschreibung}
            />
          ))}
        </div>

        <p className={`mt-10 ${SPALTE} leading-relaxed text-foreground/90`}>
          <span className="font-semibold">{s.nennerTitel}</span>
          {s.nennerText}
        </p>

        {/*
          Text zu Bewegung. Steht bewusst direkt hinter den Miniaturen: dort hat
          der Leser fünfmal gesehen, wie kurz eine Beschreibung ausfällt — hier
          sieht er, wie aus einer Beschreibung Bewegung wird.

          Bewusst nicht als Aufmacher der Seite. Der Text beginnt mit „kein
          Rendering"; ganz oben wäre das eine Bitte um Vertrauen, an dieser
          Stelle ist es eine Bestätigung.
        */}
        <div className="mt-16 max-w-4xl">
          <h3
            className={`${SPALTE} font-display text-xl font-bold tracking-tight`}
          >
            {s.textZuBewegungH}
          </h3>
          <VideoEmbed
            className="mt-6"
            id={VIDEO_TEXT_ZU_BEWEGUNG}
            titel={s.textZuBewegungVideoTitel}
          />
          {s.textZuBewegung.map((absatz, i) => (
            <p
              key={i}
              className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}
            >
              {absatz}
            </p>
          ))}
          {/*
            Verweis auf die Videobeschreibung. Wer das Video hier einbettet
            sieht sie nicht — der eingebettete Player zeigt nur das Bild.
            Deshalb der ausdrückliche Weg nach YouTube. Ein Link löst keinen
            Request aus, solange niemand ihn anklickt.
          */}
          <p
            className={`mt-6 ${SPALTE} text-sm leading-relaxed text-muted-foreground`}
          >
            {s.textZuBewegungHinweis}{" "}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_TEXT_ZU_BEWEGUNG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {s.textZuBewegungLink}
            </a>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ Zusammenarbeit */}
      <section className={`mt-24 ${SPALTE}`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.zusammenarbeitH}
        </h2>
        {/* list-decimal explizit: das Preflight von Tailwind setzt
            list-style: none, sonst wäre die Reihenfolge nur im Markup vorhanden
            und nicht zu sehen. */}
        <ol className="mt-8 list-decimal space-y-6 pl-6 marker:font-semibold marker:text-primary">
          {s.schritte.map(schritt => (
            <Schritt
              key={schritt.titel}
              titel={schritt.titel}
              text={schritt.text}
            />
          ))}
        </ol>
        <p className="mt-8 leading-relaxed text-foreground/90">
          {s.zusammenarbeitSchluss}
        </p>
      </section>

      {/* ------------------------------------------------ Kontakt */}
      <section className={`mt-24 ${SPALTE} border-t border-border pt-12`}>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {s.kontaktH}
        </h2>
        {s.kontakt.map((absatz, i) => (
          <p
            key={i}
            className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
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
