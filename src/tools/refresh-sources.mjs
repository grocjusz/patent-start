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
for (const s of pending) {
  const response = await fetch(s.url, { signal: AbortSignal.timeout(60000), headers: { 'User-Agent': 'PatentStart/1.0 source-monitor' } });
  if (!response.ok) throw Error(`${s.id}: HTTP ${response.status} dla ${s.url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  s.fingerprint = sourceFingerprint(s, bytes);
  rows.push({ id: s.id, url: s.url, kind: s.kind, fingerprint: s.fingerprint, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), at: new Date().toISOString() });
  console.log(`${s.id}: ${s.kind} = ${s.fingerprint}`);
}
fs.writeFileSync(file, JSON.stringify(bank, null, 2));
const logFile = path.join(root, 'tools/source-refresh-log.json');
const log = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf8')) : [];
fs.writeFileSync(logFile, JSON.stringify(log.concat(rows), null, 2));
console.log(`Zapisano ${rows.length} odcisków. Otwórz pobrane dokumenty i potwierdź, że to wersje sprawdzone w przeglądzie.`);
