/**
 * Kinetik 02 — Beispiele.
 *
 * Inhalt aus 02-beispiele.md, Texte beider Sprachen in texte.ts. Aufbauten aus
 * der Entwicklung, als Belege für die Behauptungen der Übersicht.
 */

import VideoEmbed from "@/components/VideoEmbed";
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
            {s.cobotH}
          </h2>
          {/*
            Bild vorerst herausgenommen: cobot-docking.webp liegt noch nicht in
            client/public/images/kinetik/, und ein fehlendes Bild fällt auf zwei
            Pixel Höhe zusammen — ein Haarstrich zwischen Überschrift und Text,
            der nach Fehler aussieht. Der Abschnitt trägt sich solange über das
            Videofeld darunter.

            Zum Wiedereinsetzen, sobald die Datei da ist (width/height an die
            echten Maße anpassen und das mt-6 am Absatz darunter entfernen):

            <img
              src="/images/kinetik/cobot-docking.webp"
              alt="Zwei Sechsachs-Cobots beim Andockmanöver"
              width={1400}
              height={934}
              className="my-6 w-full rounded-sm border border-border"
              loading="lazy"
            />
          */}
          {s.cobotText.map((absatz, i) => (
            <p
              key={i}
              className={`${i === 0 ? "mt-6" : "mt-4"} ${SPALTE} leading-relaxed text-foreground/90`}
            >
              {absatz}
            </p>
          ))}
          <VideoEmbed
            className="mt-10"
            id="o2zGbPmoGO0"
            titel={s.cobotVideoTitel}
          />
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.omniwheelH}
          </h2>
          <VideoEmbed
            className="mt-6"
            id="wHljyL7Wgjs"
            titel={s.omniwheelVideoTitel}
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            {s.omniwheelText}
          </p>
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.kinematikenH}
          </h2>
          <VideoEmbed
            className="mt-6"
            id="ga-MwbPIehQ"
            titel={s.kinematikenVideoTitel}
          />
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            {s.kinematikenText}
          </p>
        </article>

        <article className="border-t border-border pt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            {s.koerperH}
          </h2>
          <VideoEmbed
            className="mt-6"
            id="kN12YCLY-9U"
            titel={s.koerperVideoTitel}
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
    </KinetikLayout>
  );
}
