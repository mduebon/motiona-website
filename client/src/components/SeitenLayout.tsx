/**
 * Gerüst für öffentliche Unterseiten (Über uns, Videos).
 *
 * Warum überhaupt: Die Startseite ist eine lange Seite mit klebendem Kopf,
 * ihre Navigation besteht aus Ankern (#features, #products). Auf einer eigenen
 * Route greifen die nicht. Impressum und Datenschutz haben deshalb bis heute
 * gar keinen Kopf — wer dort landet, kommt nur über den Zurück-Knopf des
 * Browsers weiter. Diese beiden neuen Seiten bekommen stattdessen einen
 * schlanken Kopf mit Logo und Sprachumschalter.
 *
 * Farben über die Tokens, nicht über slate/teal wie auf den älteren
 * Unterseiten — so steht es in CLAUDE.md.
 */

import type { ReactNode } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

/** Textspalte. rem und nicht ch, damit die Breite nicht mit der Schriftgröße springt. */
export const SPALTE = "max-w-[34rem]";

export default function SeitenLayout({
  titel,
  einleitung,
  children,
}: {
  titel: string;
  einleitung?: string;
  children: ReactNode;
}) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b border-border">
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link href="/">
            <img
              src="/images/dubon-logo.png"
              alt="Dübon Engineering"
              className="h-10 cursor-pointer"
            />
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
          >
            {language === "en" ? "DE" : "EN"}
          </Button>
        </div>
      </header>

      <main className="container flex-1 py-16 md:py-24">
        <h1
          className={`${SPALTE} font-display text-4xl font-bold tracking-tight md:text-5xl`}
        >
          {titel}
        </h1>
        {einleitung && (
          <p className={`mt-6 ${SPALTE} leading-relaxed text-foreground/90`}>
            {einleitung}
          </p>
        )}
        {children}
      </main>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Dübon Engineering GmbH</span>
          <Link href="/about" className="hover:text-foreground">
            {t.about.title}
          </Link>
          <Link href="/videos" className="hover:text-foreground">
            {t.videos.title}
          </Link>
          <Link href="/imprint" className="hover:text-foreground">
            {t.footer.imprint}
          </Link>
          {/* Es gibt keinen footer.privacy-Schlüssel; die Startseite löst das
              an ihrer Fußzeile genauso auf. */}
          <Link href="/privacy" className="hover:text-foreground">
            {language === "de" ? "Datenschutz" : "Privacy Policy"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
