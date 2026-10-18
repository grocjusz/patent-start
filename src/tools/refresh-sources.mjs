// Oblicza odciski źródeł oznaczonych jako PENDING (zmienionych po przeglądzie
// merytorycznym) i zapisuje je w app/assets/bank.json.
// Uruchamiaj na komputerze z dostępem do serwisów PZSS i Sejmu, przed podpisaniem pakietu:
//   node tools/refresh-sources.mjs
// Odcisków innych źródeł skrypt nie zmienia. Wymiana odcisku istniejącego źródła
// bez przeglądu pytań byłaby ukryciem zmiany przepisów, a nie jej naprawą.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { sourceFingerprint } from './source-fingerprint.mjs';
import { PENDING } from './audit-corrections.mjs';

const root = path.resolve(import.meta.dirname, '..');
const file = path.join(root, 'app/assets/bank.json');
const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
const pending = bank.sources.filter(s => s.fingerprint === PENDING);
if (!pending.length) { console.log('Brak źródeł do obliczenia.'); process.exit(0); }

const rows = [];
const wait = ms => new Promise(r => setTimeout(r, ms));
// Serwer PZSS ogranicza liczbę żądań (HTTP 429). Czekamy między plikami,
// ponawiamy z rosnącą przerwą i zapisujemy wynik po każdym źródle.
async function download(url) {
  for (let attempt = 1; attempt <= 6; attempt++) {
    const response = await fetch(url, { signal: AbortSignal.timeout(60000), headers: { 'User-Agent': 'PatentStart/1.0 source-monitor' } });
    if (response.ok) return Buffer.from(await response.arrayBuffer());
    if (response.status !== 429 && response.status < 500) throw Error(`HTTP ${response.status} dla ${url}`);
    const delay = Math.max(Number(response.headers.get('retry-after')) || 0, 15 * attempt) * 1000;
    console.log(`  serwer odpowiedział ${response.status}, ponowienie za ${delay / 1000} s (próba ${attempt} z 6)`);
    await wait(delay);
  }
  throw Error('Serwer nie odpowiada poprawnie: ' + url);
}
const cache = new Map();
for (const s of pending) {
  const bytes = cache.get(s.url) || await download(s.url);
  cache.set(s.url, bytes);
  s.fingerprint = sourceFingerprint(s, bytes);
  rows.push({ id: s.id, url: s.url, kind: s.kind, fingerprint: s.fingerprint, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), at: new Date().toISOString() });
  console.log(`${s.id}: ${s.kind} = ${s.fingerprint}`);
  fs.writeFileSync(file, JSON.stringify(bank, null, 2));
  await wait(5000);
}
fs.writeFileSync(file, JSON.stringify(bank, null, 2));
const logFile = path.join(root, 'tools/source-refresh-log.json');
const log = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf8')) : [];
fs.writeFileSync(logFile, JSON.stringify(log.concat(rows), null, 2));
console.log(`Zapisano ${rows.length} odcisków. Otwórz pobrane dokumenty i potwierdź, że to wersje sprawdzone w przeglądzie.`);
