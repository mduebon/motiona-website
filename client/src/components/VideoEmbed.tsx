/**
 * VideoEmbed — YouTube-Einbettung ohne Vorab-Request.
 *
 * Vor dem Klick geht kein einziger Request an Google raus: keine Thumbnails,
 * keine Skripte, keine Cookies. Erst der Klick lädt den Player, und zwar über
 * youtube-nocookie.com.
 */

import { useState } from "react";
import { Play } from "lucide-react";

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
           * Der Titel steht im Feld und nicht nur darunter. Ein Vorschaubild
           * von YouTube käme nicht in Frage — das wäre ein Request an
           * i.ytimg.com und damit genau das, was diese Komponente verhindert.
           * Also füllt der Titel die Fläche, die das gesperrte Thumbnail sonst
           * gefüllt hätte.
           */
          <button
            type="button"
            onClick={() => setGeladen(true)}
            aria-label={`Video abspielen: ${titel}`}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 transition-colors hover:bg-secondary/60 sm:gap-4 sm:px-6"
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
              Video laden
            </span>
          </button>
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
          Wird erst nach Klick von YouTube geladen.
        </figcaption>
      )}
    </figure>
  );
}
