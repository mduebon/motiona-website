/**
 * Kinetik 02 — Beispiele.
 *
 * Inhalt aus 02-beispiele.md, Texte beider Sprachen in texte.ts. Aufbauten aus
 * der Entwicklung, als Belege für die Behauptungen der Übersicht.
 *
 * Jedes Beispiel trägt neben der Überschrift eine Marke, ob es real steht oder
 * simuliert läuft. CLAUDE.md verlangt das, und der Grund ist handfest: Wer ein
 * simuliertes Video für eine reale Anlage hält und es später merkt, zweifelt
 * danach an allem anderen auf der Seite auch.
 */

/** Kleine Marke neben der Überschrift: realer Aufbau oder Simulation. */
function Herkunft({ text }: { text: string }) {
  if (!text) return null;
  return <p className="section-label mt-2 text-muted-foreground">{text}</p>;
}

import { Link } from "wouter";
import VideoEmbed from "@/components/VideoEmbed";
import { DAUER } from "@/lib/video-dauer";
import KinetikLayout from "./KinetikLayout";
import { SPALTE } from "./seiten";
import { useKinetikTexte } from "./texte";

export default function Beispiele() {
  const t = useKinetikTexte();
  const s = t.beispiele;

  return (
    <KinetikLayout segment="beispiele">
      <p className={`mt-8 ${SPALTE} leading-relaxed text-foreground/90`}>
        {/* Das kursive „ist" trägt die Aussage des Satzes und steht deshalb im
            Markup, nicht im Text — sonst müsste texte.ts Auszeichnung führen. */}
        {s.einleitungVor}
        <em>{s.einleitungIst}</em>
        {s.einleitungNach}
      </p>

      <div className="mt-16 max-w-4xl space-y-16">
        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.pendelchorH}
          </h2>
          <Herkunft text={s.pendelchorArt} />
          <img
            src="/images/kinetik/pendelchor.webp"
            alt={s.pendelchorAlt}
            width={1400}
            height={934}
            className="my-6 w-full rounded-sm border border-border"
            loading="lazy"
          />
          <p className={`${SPALTE} leading-relaxed text-foreground/90`}>
            {s.pendelchorText}
          </p>
          {/* TODO: Videolink Pendel·Chor fehlt noch */}
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.omniwheelH}
          </h2>
          <Herkunft text={s.omniwheelArt} />
          <VideoEmbed
            className="mt-6"
            id="wHljyL7Wgjs"
            titel={s.omniwheelVideoTitel}
            dauer={DAUER.wHljyL7Wgjs}
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            {s.omniwheelText}
          </p>
        </article>

        {/*
          Ersetzt das frühere Video „Dieselbe Aufgabe auf Cobot, Delta und
          SCARA". Dasselbe Argument, besserer Beleg: Dort sah man drei
          Industriemaschinen etwas tun und musste glauben, dass es dieselbe
          Aufgabe ist. Hier entsteht dreimal sichtbar dasselbe Herz, und die
          Aufgabe steht als Satz daneben.
        */}
        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.herzH}
          </h2>
          <Herkunft text={s.herzArt} />
          <VideoEmbed
            className="mt-6"
            id="RgzSc_ilglc"
            titel={s.herzVideoTitel}
            dauer={DAUER.RgzSc_ilglc}
          />
          {s.herzText.map((absatz, i) => (
            <p
              key={i}
              className={`${i === 0 ? "mt-6" : "mt-4"} ${SPALTE} leading-relaxed text-foreground/90`}
            >
              {absatz}
            </p>
          ))}
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.koerperH}
          </h2>
          <Herkunft text={s.koerperArt} />
          <VideoEmbed
            className="mt-6"
            id="rFl7ppj2kE8"
            titel={s.koerperVideoTitel}
            dauer={DAUER.rFl7ppj2kE8}
          />
          {s.koerperText.map((absatz, i) => (
            <p
              key={i}
              className={`${i === 0 ? "mt-6" : "mt-4"} ${SPALTE} leading-relaxed text-foreground/90`}
            >
              {absatz}
            </p>
          ))}
        </article>
      </div>

      {/*
        Verweis auf die öffentliche Videosammlung — ausdrücklich als
        industriell beschriftet. Unbeschriftet wäre es eine Falle: Dieser
        Bereich ist für Künstlerinnen und Ausstellungsbüros gemacht, die
        Videoseite nicht. Beschriftet ist es ein Beleg — wer wissen will, ob
        hinter der Arbeit ein tragfähiges Produkt steht, findet dort die
        Antwort, und wer das nicht sucht, klickt nicht.
      */}
      <p className={`mt-16 ${SPALTE} text-sm text-muted-foreground`}>
        {s.mehrVideosVor}
        <Link href="/videos" className="underline hover:text-foreground">
          {s.mehrVideosLink}
        </Link>
        {s.mehrVideosNach}
      </p>
    </KinetikLayout>
  );
}
