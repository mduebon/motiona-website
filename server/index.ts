import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Pfad-Präfixe, die nicht in Suchmaschinen auftauchen sollen.
 *
 * Der Kinetik-Bereich ist unverlinkt und wird nur per Direktlink an ausgewählte
 * Empfänger geschickt. Der Header wirkt zuverlässiger als ein Meta-Tag, weil
 * dieses bei einer clientseitig gerenderten Seite erst nach dem JavaScript
 * existiert.
 *
 * Bewusst NICHT zusätzlich in robots.txt eintragen — die Datei ist öffentlich
 * abrufbar und würde den Pfad gerade verraten.
 *
 * Absichtlich ein Präfix und kein exakter Pfad: der Bereich hat mehrere
 * Unterseiten, und bei einem exakten Vergleich wäre jede neue davon
 * indexierbar, bis jemand daran denkt, sie hier nachzutragen.
 *
 * Muss mit KINETIK_BASIS in client/src/pages/kinetik/seiten.ts übereinstimmen.
 */
const NOINDEX_PREFIXE = ["/kinetik-7f3c9a2e41"];

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Unverlinkte Bereiche aus dem Index halten
  app.use((req, res, next) => {
    if (
      NOINDEX_PREFIXE.some(p => req.path === p || req.path.startsWith(`${p}/`))
    ) {
      res.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    }
    next();
  });

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
