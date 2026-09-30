/**
 * Videos — Sammlung nach Kategorien.
 *
 * Bewusst einfach gehalten: Die Einträge stehen als Liste in
 * `lib/translations.ts` unter `videos.eintraege`, jeder mit `id`, `kategorie`,
 * `titel` und `text`. Ein neues Video ist damit ein Listeneintrag in beiden
 * Sprachen und ein Standbild unter `public/images/video/<id>.webp` — sonst
 * nichts.
 *
 * Die Reihenfolge der Kategorien steht hier, weil sie eine Gestaltungsfrage
 * ist und keine Textfrage. Leere Kategorien werden übersprungen: Solange es
 * für „Kunst und Bühne" noch keinen Eintrag gibt, taucht die Überschrift gar
 * nicht erst auf, statt als leeres Versprechen dazustehen.
 *
 * Layout: Standbild links, Text rechts. Vorher stand beides untereinander in
 * voller Breite — ein Eintrag war dann 900 Pixel hoch, man sah nie mehr als
 * ein Video auf einmal, und rechts blieben 384 Pixel ungenutzt. Nebeneinander
 * fällt die Eintragshöhe auf etwa 350 Pixel, und eine Sammlung sieht auch wie
 * eine aus.
 */

import VideoEmbed from "@/components/VideoEmbed";
import SeitenLayout, { SPALTE } from "@/components/SeitenLayout";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Reihenfolge der Abschnitte auf der Seite. Produkte zuerst: MotionA Measure ist ein eigenes Produkt und keine
 * Anwendung eines fremden — das zu vermischen wäre die falsche Auskunft.
 */
const REIHENFOLGE = ["produkt", "anwendung", "art"] as const;

/**
 * Spieldauer je Video, einmal von YouTube abgelesen.
 *
 * Steht hier und nicht in translations.ts: Es ist eine Zahl und kein Text, in
 * beiden Sprachen dieselbe — doppelt gepflegt liefe sie irgendwann
 * auseinander. Fehlt ein Eintrag, bleibt die Marke einfach weg.
 */
const DAUER: Record<string, string> = {
  GFF37Meparc: "2:05",
  eFuo1gsnpqs: "1:02",
  p2cG7OkNGHc: "0:39",
};

export default function Videos() {
  const { t } = useLanguage();
  const s = t.videos;

  return (
    <SeitenLayout titel={s.title} kernsatz={s.kernsatz} einleitung={s.intro}>
      {REIHENFOLGE.map(schluessel => {
        const eintraege = s.eintraege.filter(e => e.kategorie === schluessel);
        if (eintraege.length === 0) return null;

        return (
          <section key={schluessel} className="mt-20">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              {s.kategorien[schluessel]}
            </h2>

            <div className="mt-10 space-y-14">
              {eintraege.map(e => (
                <article
                  key={e.id}
                  className="grid items-start gap-8 md:grid-cols-2 md:gap-10"
                >
                  {/* Titel steht rechts, deshalb nicht noch einmal im Feld —
                      und ohne Text im Bild braucht es auch keinen Schleier. */}
                  <VideoEmbed
                    id={e.id}
                    titel={e.titel}
                    dauer={DAUER[e.id]}
                    titelImFeld={false}
                  />

                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {e.titel}
                    </h3>
                    {e.text.map((absatz, i) => (
                      <p
                        key={i}
                        className={`mt-4 ${SPALTE} leading-relaxed text-foreground/90`}
                      >
                        {absatz}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </SeitenLayout>
  );
}
