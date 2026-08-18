/**
 * Google Analytics — erst nach Einwilligung.
 *
 * Vorher stand gtag.js fest im <head> von client/index.html. Damit gingen beim
 * ersten Aufruf Requests an googletagmanager.com, region1.analytics.google.com,
 * stats.g.doubleclick.net und google.de/ads/ga-audiences raus — noch bevor der
 * Cookie-Banner sichtbar war. Der Banner schrieb seine Entscheidung zwar in den
 * localStorage, gelesen hat sie aber niemand: „Ablehnen" hatte keine Wirkung.
 *
 * Hier liegt jetzt der einzige Ort, an dem gtag.js geladen wird, und er prüft
 * vorher zwei Dinge: die Einwilligung und den Pfad.
 */

/** Mess-ID der Property. */
const MESS_ID = "G-8594372D0H";

/** Schlüssel, unter dem CookieConsent die Entscheidung ablegt. */
export const EINWILLIGUNG_KEY = "cookieConsent";

/**
 * Nur diese Pfade werden an Google gemeldet.
 *
 * Bewusst eine Positivliste und keine Ausnahmeliste: die unverlinkte
 * Kinetik-Seite hat einen absichtlich nicht erratbaren Pfad, und ein page_view
 * würde genau diesen Pfad an Google übertragen — der Sinn des Pfades wäre
 * damit weg. Mit einer Positivliste ist jede nicht öffentliche Seite von
 * vornherein ausgenommen, ohne dass der geheime Pfad hier ein drittes Mal im
 * Code auftauchen muss (er steht in App.tsx und server/index.ts).
 */
const OEFFENTLICHE_PFADE = [
  /^\/$/,
  /^\/product\/[^/]+\/?$/,
  /^\/imprint\/?$/,
  /^\/privacy\/?$/,
  /^\/404\/?$/,
];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let geladen = false;

function istOeffentlich(pfad: string) {
  return OEFFENTLICHE_PFADE.some(muster => muster.test(pfad));
}

/**
 * Lädt gtag.js, sofern eine Einwilligung vorliegt und der aktuelle Pfad
 * öffentlich ist. Mehrfache Aufrufe sind unschädlich.
 *
 * Wer auf einer nicht öffentlichen Seite einsteigt, wird für den Rest des
 * Besuchs nicht gemessen, auch wenn er danach auf eine öffentliche Seite
 * wechselt. Das ist der gewollte Preis dafür, dass auf diesen Seiten gar keine
 * Verbindung zu Google zustande kommt.
 */
export function analyticsLaden() {
  if (geladen) return;
  if (localStorage.getItem(EINWILLIGUNG_KEY) !== "accepted") return;
  if (!istOeffentlich(window.location.pathname)) return;

  geladen = true;

  const skript = document.createElement("script");
  skript.async = true;
  skript.src = `https://www.googletagmanager.com/gtag/js?id=${MESS_ID}`;
  document.head.appendChild(skript);

  window.dataLayer = window.dataLayer || [];

  /*
   * Bewusst eine klassische Funktion mit arguments und kein Rest-Parameter:
   * gtag.js erkennt einen Befehl nur an einem arguments-Objekt. Ein echtes
   * Array wird still verworfen — das Skript lädt dann, sendet aber kein
   * einziges Ereignis. Der Fehler fällt nicht auf, weil nichts bricht.
   */
  function gtag() {
    window.dataLayer!.push(arguments);
  }
  window.gtag = gtag as unknown as (...args: unknown[]) => void;

  window.gtag("js", new Date());
  window.gtag("config", MESS_ID);
}

/**
 * Entfernt die von Google gesetzten Cookies.
 *
 * Nötig beim Ablehnen und beim Widerruf: solange gtag.js ungefragt lief, hat
 * jeder bisherige Besucher schon _ga-Cookies bekommen. Ohne dieses Aufräumen
 * bliebe die Kennung trotz „Ablehnen" im Browser liegen.
 */
export function analyticsAufraeumen() {
  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    // Bei www.beispiel.de auch die registrierbare Domain, auf die GA setzt.
    `.${window.location.hostname.split(".").slice(-2).join(".")}`,
  ];

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^(_ga|_gid|_gat|_gac_)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
