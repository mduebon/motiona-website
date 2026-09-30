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
 */

import VideoEmbed from "@/components/VideoEmbed";
import SeitenLayout, { SPALTE } from "@/components/SeitenLayout";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Reihenfolge der Abschnitte auf der Seite. Produkte zuerst: MotionA Measure ist ein eigenes Produkt und keine
 * Anwendung eines fremden — das zu vermischen wäre die falsche Auskunft.
 */
const REIHENFOLGE = ["produkt", "anwendung", "art"] as const;

export default function Videos() {
  const { t } = useLanguage();
  const s = t.videos;

  return (
    <SeitenLayout titel={s.title} einleitung={s.intro}>
      {REIHENFOLGE.map(schluessel => {
        const eintraege = s.eintraege.filter(e => e.kategorie === schluessel);
        if (eintraege.length === 0) return null;

        return (
          <section key={schluessel} className="mt-20">
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              {s.kategorien[schluessel]}
            </h2>

            <div className="mt-10 max-w-4xl space-y-16">
              {eintraege.map(e => (
                <article key={e.id}>
                  <VideoEmbed id={e.id} titel={e.titel} />
                  {e.text.map((absatz, i) => (
                    <p
                      key={i}
                      className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}
                    >
                      {absatz}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </SeitenLayout>
  );
}
