import { readdir, stat } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('../client/public/images/', import.meta.url);
const QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const fmt = (b) => (b / 1024).toFixed(1) + ' KB';
const rows = [];
let totalIn = 0, totalOut = 0;

for await (const png of walk(ROOT.pathname.replace(/^\//, ''))) {
  if (extname(png).toLowerCase() !== '.png') continue;
  const webp = png.replace(/\.png$/i, '.webp');
  await sharp(png).webp({ quality: QUALITY, effort: 6 }).toFile(webp);
  const [inSize, outSize] = await Promise.all([stat(png), stat(webp)]);
  totalIn += inSize.size;
  totalOut += outSize.size;
  rows.push({
    file: relative(ROOT.pathname.replace(/^\//, ''), png),
    png: fmt(inSize.size),
    webp: fmt(outSize.size),
    saved: ((1 - outSize.size / inSize.size) * 100).toFixed(0) + '%',
  });
}

console.table(rows);
console.log(`\nTotal: ${fmt(totalIn)} -> ${fmt(totalOut)}  (saved ${fmt(totalIn - totalOut)}, ${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`);
