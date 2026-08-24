/**
 * Gerüst aller Kinetik-Seiten: Kopf mit Seitennavigation und Sprachumschalter,
 * Überschrift, Inhalt, Weiter-Verweis, Fuß.
 *
 * Der Bereich wird im Gespräch gemeinsam durchgegangen. Deshalb steht auf jeder
 * Seite sichtbar, wo man ist (Teil 1 von 5) und was als Nächstes kommt — beides
 * ersetzt das Scrollen durch eine Reihenfolge, der man folgen kann.
 *
 * Zweisprachig deutsch/englisch. Die Texte liegen in texte.ts, die Sprache im
 * globalen LanguageContext — der Umschalter hier schaltet also denselben
 * Zustand wie der auf den öffentlichen Seiten. Beim Wechsel bleibt man auf
 * derselben Seite: die Pfadsegmente sind bewusst nicht übersetzt, damit ein
 * einmal verschickter Link in beiden Sprachen gültig bleibt.
 */

import type { ReactNode } from "react";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";
import { KINETIK_BASIS, SEITEN, SPALTE, pfad } from "./seiten";
import { useKinetikTexte } from "./texte";

const SPRACHEN: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export default function KinetikLayout({
  segment,
  children,
}: {
  /** Pfadsegment der aktuellen Seite, siehe SEITEN in seiten.ts. */
  segment: string;
  children: ReactNode;
}) {
  const t = useKinetikTexte();
  const { language, setLanguage } = useLanguage();

  const index = SEITEN.findIndex(s => s.segment === segment);
  const vorherige = SEITEN[index - 1];
  const naechste = SEITEN[index + 1];

  // Bei einem Seitenwechsel innerhalb der SPA bleibt die Scrollposition sonst
  // stehen, und die nächste Seite beginnt in ihrer Mitte.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [segment]);

  // Ohne das behält das Dokument die im HTML gesetzte Sprache, und
  // Vorlesewerkzeuge sprechen englischen Text mit deutscher Aussprache.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b border-border">
        <div className="container flex flex-col gap-2 py-3 sm:h-16 sm:flex-row sm:items-center sm:gap-8 sm:py-0">
          <Link href={KINETIK_BASIS} className="shrink-0">
            <img
              src="/images/dubon-logo.png"
              alt="Dübon Engineering"
              className="h-10 cursor-pointer"
            />
          </Link>

          {/*
            Bewusst umbrechend und nicht seitwärts scrollend: neben dem Logo
            bleiben auf einem 375-Pixel-Gerät nur ~190 Pixel für 480 Pixel
            Navigation. Ein waagerechter Scrollcontainer zeigte davon zwei von
            fünf Einträgen, und dass er scrollt, sieht man ihm nicht an. Mit
            Umbruch stehen immer alle fünf Seiten da — auf Mobil in zwei Zeilen.
          */}
          <nav aria-label={t.layout.navSeiten} className="-mx-3 flex-1">
            <ul className="flex flex-wrap items-center gap-y-1">
              {SEITEN.map((s, i) => {
                const aktiv = s.segment === segment;
                return (
                  <li key={s.segment || "start"}>
                    <Link
                      href={pfad(s)}
                      aria-current={aktiv ? "page" : undefined}
                      className={
                        aktiv
                          ? "section-label whitespace-nowrap rounded-sm bg-secondary px-3 py-2 text-foreground"
                          : "section-label whitespace-nowrap rounded-sm px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      {t.seiten[i].kurz}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/*
            Zwei feste Schalter statt eines Umschaltknopfs: Wer die Seite in der
            falschen Sprache öffnet, sieht so sofort, dass es die andere gibt,
            ohne raten zu müssen, wohin ein Klick führt.
          */}
          <div
            role="group"
            aria-label={t.layout.sprache}
            className="flex shrink-0 items-center gap-1 self-start sm:self-auto"
          >
            {SPRACHEN.map(s => {
              const aktiv = s.code === language;
              return (
                <button
                  key={s.code}
                  type="button"
                  lang={s.code}
                  onClick={() => setLanguage(s.code)}
                  aria-pressed={aktiv}
                  className={
                    aktiv
                      ? "section-label rounded-sm bg-secondary px-2 py-1 text-foreground"
                      : "section-label rounded-sm px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="container flex-1 py-16 md:py-24">
        {/* „Teil 1 von 5" statt „01 / 05": die Ziffernform sah ruhiger aus,
            sagte aber nicht, dass dies eine Folge ist, der man folgen soll. */}
        <p className="section-label text-muted-foreground">
          {t.layout.teil(index + 1, SEITEN.length)}
        </p>
        <h1
          className={`mt-6 ${SPALTE} font-display text-4xl font-bold tracking-tight md:text-5xl`}
        >
          {t.seiten[index].titel}
        </h1>

        {children}

        {/* ------------------------------------------------ Weiter / Zurück */}
        <nav
          aria-label={t.layout.navWeiter}
          className="mt-24 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {vorherige ? (
            <Link
              href={pfad(vorherige)}
              className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>
                <span className="section-label block">
                  {t.layout.zurueck}
                </span>
                <span className="font-medium">{t.seiten[index - 1].titel}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}

          {naechste && (
            <Link
              href={pfad(naechste)}
              className="group inline-flex items-center gap-3 text-primary transition-colors hover:text-foreground sm:text-right"
            >
              <span>
                <span className="section-label block">{t.layout.weiter}</span>
                <span className="font-medium">{t.seiten[index + 1].titel}</span>
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Dübon Engineering GmbH</span>
          <Link href="/imprint" className="hover:text-foreground">
            {t.layout.impressum}
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            {t.layout.datenschutz}
          </Link>
        </div>
      </footer>
    </div>
  );
}
