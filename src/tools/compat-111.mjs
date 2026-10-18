// Odwzorowanie walidacji pakietu z aplikacji 1.1.x (UpdateManager.validateBank i install).
// Pakiet, który nie przejdzie tej kontroli, zostanie odrzucony przez starsze APK,
// a ich użytkownicy po wygaśnięciu poprzedniego pakietu zostaną bez pytań.
export const OFFICIAL_111 = ['api.sejm.gov.pl', 'eli.gov.pl', 'www.pzss.org.pl', 'csp.edu.pl', 'saami.org'];

export function validateBank111(b, now = Date.now()) {
  const fail = m => { throw Error('APK 1.1.x odrzuci pakiet: ' + m); };
  if (b.schema !== 1 || !(b.version >= 1)) fail('wersja schematu');
  const day = 86400000, released = Date.parse(b.releaseDate + 'T00:00:00'), until = Date.parse(b.reviewUntil + 'T00:00:00');
  if (!released || !until || released > now + day || until < released || until - released > 92 * day) fail('daty pakietu');
  if (b.categories.length !== 5) fail('działy');
  const e = b.exam;
  if (e.minutes < 1 || e.minutes > 120 || e.perCategory !== 2 || e.minCorrect < 1 || e.minCorrect > 10) fail('reguły egzaminu');
  if (e.criticalCategories.some(c => c < 0 || c > 4)) fail('reguły egzaminu');
  if (b.sources.length > 30) fail('za dużo źródeł');
  const srcIds = new Set();
  for (const s of b.sources) {
    if (srcIds.has(s.id)) fail('powielone źródło ' + s.id);
    srcIds.add(s.id);
    const u = new URL(s.url);
    if (u.protocol !== 'https:') fail('adres ' + s.url);
    if (!OFFICIAL_111.includes(u.hostname)) fail('źródło spoza listy domen 1.1.x: ' + u.hostname);
    if (!['meta', 'sha256', 'links'].includes(s.kind)) fail('typ kontroli ' + s.kind);
    if (s.scope && (s.scope !== 'html-main-v1' || s.kind !== 'sha256' || u.hostname !== 'saami.org')) fail('zakres kontroli ' + s.id);
    if (!s.fingerprint) fail('brak odcisku ' + s.id);
  }
  if (b.questions.length < 10 || b.questions.length > 10000) fail('liczba pytań');
  const ids = new Set(), counts = [0, 0, 0, 0, 0];
  for (const q of b.questions) {
    if (ids.has(q.id) || !(q.revision >= 1)) fail('pytanie ' + q.id);
    ids.add(q.id);
    if (q.cat < 0 || q.cat > 4) fail('dział pytania ' + q.id);
    counts[q.cat]++;
    if (q.answers.length !== 3 || q.correct < 0 || q.correct >= 3 || !q.q || !q.why || !q.ref) fail('niepełne pytanie ' + q.id);
    if (new Set(q.answers).size !== 3 || q.answers.some(a => !a)) fail('odpowiedzi ' + q.id);
    if (!q.sources.length || q.sources.some(s => !srcIds.has(s))) fail('źródła pytania ' + q.id);
  }
  if (counts.some(c => c < 2)) fail('zakres bazy');
}

/** Kontrola rewizji z install(): zmienione pytanie musi mieć wyższą rewizję niż zainstalowane. */
export function checkRevisions(previous, next) {
  const fields = ['q', 'answers', 'correct', 'cat', 'why', 'ref', 'sources'];
  for (const q of next.questions) {
    const p = previous.questions.find(x => x.id === q.id);
    if (!p) continue;
    if (q.revision < p.revision) throw Error('Cofnięcie rewizji pytania ' + q.id);
    const different = fields.some(f => JSON.stringify(q[f]) !== JSON.stringify(p[f]));
    if (different && q.revision <= p.revision) throw Error('Zmienione pytanie wymaga nowej rewizji: ' + q.id);
  }
}
