// Narzędzie autora: wykrywa nowe lub usunięte dokumenty na stronach PZSS.
// Aplikacja kontroluje konkretne pliki, więc nowy dokument (np. nowy regulamin)
// nie wstrzyma pytań sam z siebie — trzeba go zauważyć i przejrzeć. Do tego służy ten skrypt.
// Linki z menu (rankingi, zestawienia medali) są pomijane filtrem `include`.
//   node tools/watch-pages.mjs          — raport; kod wyjścia 2, gdy coś się zmieniło
//   node tools/watch-pages.mjs --init   — zapisuje bieżące listy jako znane (po przeglądzie)
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const file = path.join(root, 'tools/watch-pages.json');
const pages = JSON.parse(fs.readFileSync(file, 'utf8'));
const init = process.argv.includes('--init');
let changed = false, wrote = false;
for (const p of pages) {
  const response = await fetch(p.page, { signal: AbortSignal.timeout(45000), headers: { 'User-Agent': 'PatentStart/1.0 source-monitor' } });
  if (!response.ok) { console.log(`${p.id}: HTTP ${response.status}`); changed = true; continue; }
  const html = await response.text();
  const found = [...new Set([...html.matchAll(/href\s*=\s*['"]([^'"]+\.(?:pdf|docx?)(?:\?[^'"]*)?)['"]/gi)]
    .map(m => m[1].replaceAll('&amp;', '&').trim())
    .filter(h => p.include.some(i => h.includes(i)))
    .map(h => decodeURIComponent(h.split('?')[0].split('/').pop())))].sort();
  if (init || !p.known) { p.known = found; wrote = true; console.log(`${p.id}: zapisano ${found.length} dokumentów jako znane`); continue; }
  const added = found.filter(f => !p.known.includes(f)), removed = p.known.filter(f => !found.includes(f));
  if (added.length || removed.length) changed = true;
  console.log(`${p.id}: ${added.length ? 'NOWE: ' + added.join(', ') : 'bez nowych'}${removed.length ? ' · USUNIĘTE: ' + removed.join(', ') : ''}`);
}
if (wrote) fs.writeFileSync(file, JSON.stringify(pages, null, 2) + '\n');
if (changed && !init) process.exitCode = 2;
