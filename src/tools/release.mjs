// Wydanie na komputerze autora (z kluczami w PATENT_SECRET_DIR):
//   node tools/release.mjs
// Kolejność: odciski nowych źródeł → testy → podpis pakietu → testy → APK → kopia stron do katalogu publikacji.
// Klucze nigdy nie trafiają do repozytorium; skrypt tylko z nich korzysta.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const root = path.resolve(import.meta.dirname, '..');
const site = path.resolve(root, '..');
const step = (title, script, args = []) => {
  console.log('\n== ' + title);
  const r = spawnSync(process.execPath, [path.join(root, 'tools', script), ...args], { stdio: 'inherit', env: process.env });
  if (r.status !== 0) { console.error('Przerwano na kroku: ' + title); process.exit(r.status || 1); }
};
if (!process.env.PATENT_SECRET_DIR) {
  console.error('Ustaw PATENT_SECRET_DIR na folder z content-private.pem, android-release.p12 i android-password.txt.');
  process.exit(1);
}
step('Odciski źródeł zmienionych po przeglądzie', 'refresh-sources.mjs');
step('Testy przed podpisem', 'test.mjs');
step('Podpis pakietu treści', 'sign-pack.mjs');
step('Testy po podpisie', 'test.mjs');
step('Budowa i podpis APK', 'build.mjs');
console.log('\n== Kopia stron do ' + site);
for (const name of fs.readdirSync(path.join(root, 'public'))) {
  fs.copyFileSync(path.join(root, 'public', name), path.join(site, name));
  console.log('  ' + name);
}
console.log('\nGotowe. Sprawdź APK na telefonie, zatwierdź zmiany i opublikuj (git commit, git push).');
