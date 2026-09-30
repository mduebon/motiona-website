/**
 * Videos — Sammlung nach Kategorien.
 *
 * Die Einträge stehen als Liste in `lib/translations.ts` unter
 * `videos.eintraege`: `kategorie`, `titel`, `text` und `varianten`. Ein neues
 * Video ist ein Listeneintrag in beiden Sprachen, ein Standbild unter
 * `public/images/video/<id>.webp` und eine Zeile in DAUER — sonst nichts.
 *
 * Warum jeder Eintrag `varianten` hat, auch wenn es nur eine ist: Damit alle
 * Einträge dieselbe Form haben. Bei gemischten Formen wäre der Typ eine
 * Vereinigung, und jeder Zugriff müsste erst prüfen, welche Sorte vorliegt.
 *
 * Die Reihenfolge der Kategorien steht hier, weil sie eine Gestaltungsfrage
 * ist und keine Textfrage. Leere Kategorien werden übersprungen, damit keine
 * Überschrift ohne Inhalt dasteht.
 *
 * Layout: Standbild links, Text rechts. Untereinander war ein Eintrag 900
 * Pixel hoch, man sah nie mehr als ein Video, und rechts blieben 384 Pixel
 * ungenutzt.
 */

import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";
import SeitenLayout, { SPALTE } from "@/components/SeitenLayout";
import { useLanguage } from "@/contexts/LanguageContext";

/** Reihenfolge der Abschnitte. Produkte zuerst, freie Arbeiten zuletzt. */
const REIHENFOLGE = ["produkt", "anwendung", "art"] as const;

/**
 * Spieldauer je Video, einmal von YouTube abgelesen.
 *
 * Steht hier und nicht in translations.ts: Es ist eine Zahl und kein Text, in
 * beiden Sprachen dieselbe — doppelt gepflegt liefe sie irgendwann
 * auseinander. Fehlt ein Eintrag, bleibt die Marke einfach weg.
 */
const DAUER: Record<string, string> = {
  // Zwei Schlüssel stehen in Anführungszeichen, weil YouTube-IDs mit einer
  // Ziffer beginnen oder einen Bindestrich enthalten dürfen — beides ist als
  // blosser Bezeichner kein gültiges JavaScript. Bei den übrigen entfernt
  // Prettier die Zeichen wieder; einfach immer welche setzen und es sortiert
  // sich von selbst.
  Qjs5bP1fkxQ: "2:05",
  e_F5ZE4q62g: "1:02",
  jy2JHnxqBMk: "0:39",
  "_FT1h6zr-58": "0:39",
  P_YaWyQ40ng: "0:39",
  RgzSc_ilglc: "0:22",
  "7BnUx9JtsB4": "0:51",
};

/** "2:05" -> 125. Für die Gesamtdauer im Index. */
function sekunden(mmss: string) {
  const [m, s] = mmss.split(":").map(Number);
  return m * 60 + s;
}

/** 377 -> "6:17". */
function alsDauer(sek: number) {
  return `${Math.floor(sek / 60)}:${String(sek % 60).padStart(2, "0")}`;
}

/**
 * Ein Eintrag. Bei mehreren Varianten steht über dem Standbild eine Reihe
 * Schalter; der Wechsel tauscht Video und Standbild an Ort und Stelle.
 *
 * Das ist der Grund für den Umschalter: Delta, SCARA und Cobot waren drei
 * Einträge mit zu 91 Prozent gleichem Text. Untereinander gelesen wirkte das
 * wie Streckung — dabei ist genau das der Beleg: dieselben dreißig Zeilen auf
 * drei Kinematiken. Als ein Eintrag zum Durchschalten kann man es ausprobieren
 * statt es dreimal zu lesen.
 */
function Eintrag({
  titel,
  text,
  varianten,
}: {
  titel: string;
  text: string[];
  varianten: { id: string; label: string }[];
}) {
  const [aktiv, setAktiv] = useState(0);
  const v = varianten[aktiv];
  const mehrere = varianten.length > 1;

  return (
    <article className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
      <div>
        {mehrere && (
          <div
            role="group"
            aria-label={titel}
            className="mb-3 flex flex-wrap gap-2"
          >
            {varianten.map((w, i) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setAktiv(i)}
                aria-pressed={i === aktiv}
                className={
                  i === aktiv
                    ? "section-label rounded-sm bg-primary px-3 py-1.5 text-primary-foreground"
                    : "section-label rounded-sm border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {w.label}
              </button>
            ))}
          </div>
        )}
        {/* key: Beim Wechsel soll die Komponente neu aufgebaut werden, sonst
            bliebe ein bereits geladener Player des vorigen Videos stehen. */}
        <VideoEmbed
          key={v.id}
          id={v.id}
          titel={titel}
          dauer={DAUER[v.id]}
          titelImFeld={false}
          bildunterschrift={false}
        />
      </div>

      <div>
        <h3 className="font-display text-xl font-bold tracking-tight">
          {titel}
        </h3>
        {text.map((absatz, i) => (
          <p
            key={i}
            className={`mt-4 ${SPALTE} leading-relaxed text-foreground/90`}
          >
            {absatz}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function Videos() {
  const { t } = useLanguage();
  const s = t.videos;

  const gesamtSekunden = Object.values(DAUER).reduce(
    (summe, d) => summe + sekunden(d),
    0
  );
  const anzahlVideos = Object.keys(DAUER).length;

  return (
    <SeitenLayout titel={s.title} kernsatz={s.kernsatz} einleitung={s.intro}>
      {/*
        Index: Was liegt hier, und wie lange dauert es? Ohne ihn beginnt die
        Seite mit 5000 Pixeln Scrollen ins Ungewisse. Die Gesamtdauer wird aus
        DAUER gerechnet und nicht gepflegt, damit sie nicht veraltet.
      */}
      <nav
        aria-label={s.title}
        className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6 text-sm"
      >
        <span className="text-muted-foreground">
          {anzahlVideos} Videos · {alsDauer(gesamtSekunden)}
        </span>
        {REIHENFOLGE.map(schluessel => {
          const anzahl = s.eintraege.filter(
            e => e.kategorie === schluessel
          ).length;
          if (anzahl === 0) return null;
          return (
            <a
              key={schluessel}
              href={`#${schluessel}`}
              className="rounded-sm border border-border px-3 py-1 transition-colors hover:border-primary hover:text-primary"
            >
              {s.kategorien[schluessel]}{" "}
              <span className="text-muted-foreground">{anzahl}</span>
            </a>
          );
        })}
      </nav>

      {REIHENFOLGE.map(schluessel => {
        const eintraege = s.eintraege.filter(e => e.kategorie === schluessel);
        if (eintraege.length === 0) return null;

        return (
          <section
            key={schluessel}
            id={schluessel}
            className="mt-20 scroll-mt-8"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              {s.kategorien[schluessel]}
            </h2>

            <div className="mt-10 space-y-14">
              {eintraege.map(e => (
                <Eintrag
                  key={e.varianten[0].id}
                  titel={e.titel}
                  text={e.text}
                  varianten={e.varianten}
                />
              ))}
            </div>
          </section>
        );
      })}
    </SeitenLayout>
  );
}
