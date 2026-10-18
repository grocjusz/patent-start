// Nanosi poprawki z tools/audit-corrections.mjs na app/assets/bank.json.
// Użycie: node tools/apply-corrections.mjs
import fs from 'node:fs';
import path from 'node:path';
import { applyAuditCorrections } from './audit-corrections.mjs';
const root = path.resolve(import.meta.dirname, '..');
const file = path.join(root, 'app/assets/bank.json');
const bank = JSON.parse(fs.readFileSync(file, 'utf8'));
const log = applyAuditCorrections(bank);
fs.writeFileSync(file, JSON.stringify(bank, null, 2));
console.log(log.length ? log.join('\n') : 'Brak zmian: poprawki były już naniesione.');
console.log('Pytań:', bank.questions.length, '· pakiet', bank.version);
