/**
 * Springt beim Laden der Seite zum Anker aus der Adresse (`/videos#art`).
 *
 * Nötig, weil der Browser seinen eigenen Sprungversuch längst hinter sich hat,
 * wenn React den Inhalt aufbaut: Beim Aufruf ist das Dokument leer, das
 * Zielelement entsteht erst danach, und ein zweites Mal versucht es niemand.
 * Innerhalb der Seite funktionieren Ankerlinks ohne Zutun — dort steht der
 * Inhalt schon. Nur der von aussen verschickte Link lief ins Leere.
 *
 * Der Aufruf gehört nach App, nicht in die einzelne Seite: Effekte der Kinder
 * laufen vor denen der Eltern, das Ziel ist also sicher da. Und so gilt es für
 * jede Seite, auch für später hinzukommende.
 */

import { useEffect } from "react";

export default function useAnker() {
  useEffect(() => {
    // decodeURIComponent, weil ein Anker mit Umlaut in der Adresse
    // prozentkodiert ankommt, die id im Markup aber nicht.
    const ziel = decodeURIComponent(window.location.hash.slice(1));
    if (!ziel) return;

    const element = document.getElementById(ziel);
    if (!element) return;

    // Ohne Bildlauf-Animation: Der Besucher hat die Seite gerade erst
    // aufgerufen, ein Flug über 1200 Pixel wäre eine Bewegung ohne Anlass.
    element.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);
}
