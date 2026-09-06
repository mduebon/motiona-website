/**
 * VideoEmbed — YouTube-Einbettung ohne Vorab-Request.
 *
 * Vor dem Klick geht kein einziger Request an Google raus: keine Skripte, keine
 * Cookies, auch kein Vorschaubild. Erst der Klick lädt den Player, und zwar
 * über youtube-nocookie.com.
 *
 * Das Standbild kommt deshalb vom eigenen Server: `/images/video/<id>.webp`,
 * einmal von YouTube geholt und nach webp gewandelt. Ein Bild direkt von
 * i.ytimg.com wäre ein Request an Google und damit genau das, was diese
 * Komponente verhindert.
 *
 * Der Pfad folgt aus der Video-ID, damit die Aufrufstellen nichts übergeben
 * müssen. Fehlt die Datei, blendet onError das Bild aus und es bleibt beim
 * ruhigen Feld mit Titel — kein kaputtes Bild.
 *
 * Nachteil, bewusst in Kauf genommen: Die Standbilder sind eingefroren. Wird
 * auf YouTube ein anderes Vorschaubild gesetzt, zieht die Seite nicht nach.
 */

import { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Beschriftungen der Klickfläche.
 *
 * Sie stehen hier und nicht in texte.ts: Die Komponente liegt in components/
 * und darf nicht auf pages/kinetik zeigen. Es sind Bedienelemente, keine
 * Inhalte — dieselbe Kategorie wie ein Knopftext in einer UI-Komponente.
 *
 * Vorher waren sie fest deutsch. Seit der Kinetik-Bereich zweisprachig ist,
 * stand im englischen Aufruf „Video laden" und „Wird erst nach Klick von
 * YouTube geladen." — sichtbar für genau die Empfänger, für die die englische
 * Fassung gemacht wurde.
 */
const BESCHRIFTUNG = {
  de: {
    laden: "Video laden",
    hinweis: "Wird erst nach Klick von YouTube geladen.",
    abspielen: (titel: string) => `Video abspielen: ${titel}`,
  },
  en: {
    laden: "Load video",
    hinweis: "Only loaded from YouTube once you click.",
    abspielen: (titel: string) => `Play video: ${titel}`,
  },
} as const;

interface VideoEmbedProps {
  /** YouTube-Video-ID, z. B. "nheEumA4-cI" */
  id: string;
  /** Bildunterschrift und Beschriftung für Screenreader */
  titel: string;
  /**
   * Abstände kommen von außen. Die Komponente setzt bewusst keine eigenen
   * vertikalen Margins: sie würden mit denen des umgebenden Elements
   * kollabieren, und die aufrufende Seite bekäme nicht den Abstand, den sie
   * hinschreibt.
   */
  className?: string;
}

export default function VideoEmbed({ id, titel, className }: VideoEmbedProps) {
  const [geladen, setGeladen] = useState(false);
  const [standbildDa, setStandbildDa] = useState(true);
  const { language } = useLanguage();
  const b = BESCHRIFTUNG[language] ?? BESCHRIFTUNG.de;

  return (
    <figure className={className}>
      <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-border bg-secondary">
        {geladen ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={titel}
            allow="accelerometer; autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          /*
           * Der Titel steht zusätzlich im Feld, nicht nur darunter: Er sagt,
           * was einen erwartet, bevor man einen Klick investiert — das
           * Standbild allein verrät bei Simulatoraufnahmen wenig.
           */
          <>
            {standbildDa && (
              <img
                src={`/images/video/${id}.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={1280}
                height={720}
                onError={() => setStandbildDa(false)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {/* Schleier über dem Standbild: Die Aufnahmen sind teils sehr hell,
                ohne ihn wäre der Titel darauf nicht zu lesen. Beim Überfahren
                wird er dünner — das Bild tritt hervor und zeigt, dass hier
                etwas passiert. */}
            <button
              type="button"
              onClick={() => setGeladen(true)}
              aria-label={b.abspielen(titel)}
              className={`group absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 transition-colors sm:gap-4 sm:px-6 ${
                standbildDa
                  ? "bg-background/75 hover:bg-background/55"
                  : "hover:bg-secondary/60"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/40 transition-colors group-hover:border-primary group-hover:bg-primary sm:h-16 sm:w-16">
                <Play className="ml-0.5 h-4 w-4 fill-current text-foreground transition-colors group-hover:text-primary-foreground sm:ml-1 sm:h-6 sm:w-6" />
              </span>
              {/*
              Das Feld ist 16:9 und wächst nicht mit. Bei 320 Pixeln Breite ist
              es nur 162 Pixel hoch — hier passen Kreis, drei Titelzeilen und
              der Hinweis gerade hinein. Wesentlich längere Titel als die
              bisherigen (max. 78 Zeichen) würden anstoßen.
            */}
              <span className="max-w-[34rem] text-center font-display text-sm font-medium leading-snug text-foreground sm:text-lg">
                {titel}
              </span>
              <span className="section-label text-muted-foreground">
                {b.laden}
              </span>
            </button>
          </>
        )}
      </div>
      {/* Die Beschriftung erscheint erst nach dem Laden — vorher trägt sie das
          Feld selbst, und beides zugleich wäre eine Dopplung. Für Screenreader
          steht der Titel ohnehin im aria-label des Knopfes. */}
      {geladen ? (
        <figcaption className="mt-3 max-w-[34rem] text-sm text-muted-foreground">
          {titel}
        </figcaption>
      ) : (
        <figcaption className="mt-3 max-w-[34rem] text-xs text-muted-foreground/80">
          {b.hinweis}
        </figcaption>
      )}
    </figure>
  );
}
