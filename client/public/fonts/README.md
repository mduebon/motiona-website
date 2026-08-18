# Lokale Schriften

Manrope und DM Sans als Variable Fonts, heruntergeladen von Google Fonts und
hier abgelegt, damit beim Seitenaufruf **keine** Verbindung zu
`fonts.googleapis.com` oder `fonts.gstatic.com` entsteht — ein solcher Link
überträgt die IP jedes Besuchers an Google, bevor ein Cookie-Banner überhaupt
erscheinen kann.

Eingebunden per `@font-face` am Kopf von `client/src/index.css`. Dort stehen
auch die `unicode-range`-Angaben; sie stammen unverändert von Google, damit der
Browser `latin-ext` nur nachlädt, wenn der Text es braucht.

| Datei | Familie | Subset |
|---|---|---|
| `manrope-latin.woff2` | Manrope, Gewicht 200–800 | latin |
| `manrope-latin-ext.woff2` | Manrope, Gewicht 200–800 | latin-ext |
| `dm-sans-latin.woff2` | DM Sans, Gewicht 100–1000 | latin |
| `dm-sans-latin-ext.woff2` | DM Sans, Gewicht 100–1000 | latin-ext |

Beide stehen unter der SIL Open Font License 1.1, lokales Hosten ist erlaubt.

Zum Aktualisieren: die CSS von Google mit einem modernen User-Agent abrufen,
die `woff2`-URLs herausziehen und die Dateien ersetzen. Die `@font-face`-Blöcke
müssen nur angefasst werden, wenn sich die `unicode-range` ändert.
