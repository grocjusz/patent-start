// Poprawki z audytu z 2026-10-18 (wersja 1.2.0 → 1.2.1, pakiet 6).
// Każda zmiana pytania podnosi jego rewizję o 1. Dawne wyniki nie liczą się więc
// jako opanowanie nowej treści. Zmiany oznaczone `review.status = 'do akceptacji'`
// czekają na przegląd autora przed publikacją pakietu.
//
// Odciski nowych źródeł mają wartość PENDING. Oblicza je dopiero
// `node tools/refresh-sources.mjs` na komputerze z dostępem do serwisów PZSS i Sejmu.
// `sign-pack.mjs` odmawia podpisania pakietu z odciskiem PENDING.

export const PENDING = 'PENDING';
export const REVIEWED_AT = '2026-10-18';

const PZSS = 'https://www.pzss.org.pl/assets/files/';

// Źródła. Kontrola listy linków (`links`) liczyła odcisk także z menu strony
// (rankingi z numerem wersji w nazwie), więc każda aktualizacja rankingu blokowała
// egzamin i ponad 200 pytań. Zastępujemy ją kontrolą konkretnych plików (sha256).
// Identyfikatory źródeł zostają, więc pytania nie wymagają nowych rewizji.
// Pojawienie się nowych dokumentów na stronach PZSS wykrywa narzędzie autora
// (`tools/monitor.mjs`, sekcja watchPages), a nie aplikacja.
export const sourceChanges = [
  { id: 'patent', title: 'Regulamin patentu PZSS — tekst jednolity (uchw. nr 47/2025)', url: PZSS + 'licencyjno-patentowa/regulamin-patentowy-tekst-jednolity-uchw-47.pdf', kind: 'sha256' },
  { id: 'patent-index', title: 'PZSS — załączniki do regulaminu patentu (m.in. zał. nr 7)', url: PZSS + 'licencyjno-patentowa/zalaczniki_regulamin_patent.pdf', kind: 'sha256' },
  { id: 'official-index', title: 'PZSS — regulamin patentu, do którego odnosi się wykaz pytań', url: PZSS + 'licencyjno-patentowa/regulamin-patentowy-tekst-jednolity-uchw-47.pdf', kind: 'sha256' },
  { id: 'safety', title: 'Ogólne zasady bezpieczeństwa PZSS (zał. nr 7 do regulaminu patentu)', url: PZSS + 'licencyjno-patentowa/ogolne-zasady-bezpieczenstwa.pdf', kind: 'sha256' },
  { id: 'storage', title: 'Przechowywanie, noszenie i ewidencjonowanie broni — tekst jednolity', url: 'https://api.sejm.gov.pl/eli/acts/DU/2023/364', kind: 'meta' },
  { id: 'issf-index', title: 'ISSF 2026 — Ogólne przepisy techniczne (tłum. PZSS)', url: PZSS + 'dokumenty/przepisy/kolegium-sedziow/issf/issf-2026/6_general_2.pdf', kind: 'sha256' },
  { id: 'other-index', title: 'PZSS — zbiór regulaminów konkurencji poza ISSF 2025–2028 (kontrola dodatkowa)', url: PZSS + 'regulaminy/zbior-reg.-pzss-vi2025-dla-konkurencji-nieobjetych-przepisami-issf-vi-2025.pdf', kind: 'sha256' }
];

// Źródło spoza listy domen aplikacji 1.1.x. Gdy zostaje w pakiecie, aplikacja 1.1.x
// odrzuca cały pakiet, a po wygaśnięciu pakietu 4 (2026-11-16) zostaje bez pytań.
// Zależne pytania wracają w pakiecie z polem minApp (wymaga aplikacji ≥ 1.2.1),
// gdy użytkownicy przejdą na nową wersję.
export const removeSources = ['cz457'];
export const withdraw = {
  reason: 'Tymczasowo wycofane: jedynym źródłem jest instrukcja producenta CZ 457 spoza listy domen aplikacji 1.1.x; B061–B065 miały też błędnie oznaczoną podstawę (punkty instrukcji opisane jako zasady PZSS).',
  ids: ['T056', 'T057', 'T058', 'T059', 'T060', 'T061', 'T062', 'B061', 'B062', 'B063', 'B064', 'B065']
};
export const removeTopics = ['sport-rifle', 'safe-equipment'];

export const bankMeta = {
  version: 6,
  releaseDate: '2026-10-18',
  notice: 'Poprawki po audycie z 18.10.2026. Jeśli masz aplikację w wersji 1.1.x lub 1.2.0, zainstaluj wersję 1.2.1 ze strony grocjusz.github.io/patent-start. Autorskie pytania w pięciu działach egzaminu, w tym zakres 142 pozycji wykazu PZSS. Wykaz PZSS nie jest gwarancją zamkniętej puli przyszłych egzaminów. Ucz się uzasadnień i źródeł, nie samych liter odpowiedzi.'
};

const ISSF_NOTE = 'Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.';

export const questions = [
  {
    id: 'P100', fromRevision: 1, severity: 'krytyczny',
    note: 'Dotychczasowy klucz był błędny: art. 22 ust. 1a mówi o pozbawieniu broni cech użytkowych, a zniszczenie w depozycie (art. 23 ust. 2) nie jest zbyciem.',
    fields: {
      ref: 'art. 22 ust. 1a, 3–4; art. 23 ust. 2',
      q: 'Osoba, która utraciła uprawnienie do posiadania broni, nie zbyła jej w ciągu 30 dni. Co musi zrobić?',
      answers: [
        'Złożyć broń i amunicję do depozytu właściwego organu Policji; później nadal może je zbyć.',
        'Złożyć broń i amunicję do depozytu Policji; od tej chwili zbycie broni nie jest już możliwe.',
        'Oddać broń Policji do zniszczenia, bo po 30 dniach zniszczenie zastępuje obowiązek zbycia.'
      ],
      why: 'Po 30 dniach broń i amunicję składa się do depozytu (art. 22 ust. 3), a depozyt nie wyklucza późniejszego zbycia (art. 22 ust. 4). Zniszczenie broni w depozycie następuje na wniosek albo za zgodą składającego (art. 23 ust. 2). Obowiązek zbycia wykonuje także pozbawienie broni cech użytkowych (art. 22 ust. 1a).'
    }
  },
  {
    id: 'P026', fromRevision: 2, severity: 'krytyczny',
    note: 'Wariant „pozwolenia wydane do tego samego celu” można było uznać za poprawny obok klucza.',
    fields: {
      ref: 'art. 21 ust. 1–2',
      q: 'Między jakimi osobami ustawa dopuszcza zbywanie broni i amunicji do niej?',
      answers: [
        'Wyłącznie między osobami, które posiadają pozwolenie na ten sam rodzaj broni.',
        'Między dowolnymi osobami, jeżeli pozwolenie na ten rodzaj broni ma nabywca.',
        'Między dowolnymi osobami, jeżeli zbywca zawiadomi Policję w ciągu 14 dni.'
      ],
      why: 'Art. 21 ust. 1 wymaga, by pozwolenie na ten sam rodzaj broni miały obie strony. Zbywca niezwłocznie powiadamia pisemnie właściwy organ Policji (art. 21 ust. 2), a nie w terminie 14 dni.'
    }
  },
  {
    id: 'B026', fromRevision: 2, severity: 'krytyczny',
    note: 'Przepis mówi „naboju(ów) i/lub magazynka”, więc dawny wariant C (pusty magazynek, otwarty mechanizm) też spełniał przepis.',
    fields: {
      ref: 'ISSF, Ogólne przepisy techniczne 6.2.2.6; 6.2.2.2',
      q: 'Kiedy przepisy ISSF pozwalają odłożyć broń na stanowisku?',
      answers: [
        'Po usunięciu nabojów i magazynka oraz dopiero po otwarciu mechanizmu.',
        'Po usunięciu nabojów i magazynka, przy zamkniętym mechanizmie.',
        'Po wyjęciu magazynka, z nabojem w komorze i otwartym mechanizmem.'
      ],
      why: 'Przepis 6.2.2.6 pozwala odłożyć broń dopiero po usunięciu naboju(ów) i/lub magazynka oraz otwarciu mechanizmu. Broń z nabojem w komorze albo z zamkniętym mechanizmem nie spełnia tego warunku. Wskaźniki bezpieczeństwa reguluje 6.2.2.2.'
    }
  },
  {
    id: 'B025', fromRevision: 2, severity: 'istotny',
    note: 'Klucz łączył komendę ROZŁADUJ (§ 3 pkt 10) z kontrolą prowadzącego po zakończeniu strzelania (§ 3 pkt 14).',
    fields: {
      ref: 'Ogólne zasady bezpieczeństwa PZSS (zał. nr 7 do regulaminu patentu), § 3 pkt 10 i 14',
      answers: [
        'Rozładować, włożyć wskaźnik bezpieczeństwa do komory i w takim stanie umieścić na stanowisku.',
        'Rozładować, zamknąć zamek bez wskaźnika bezpieczeństwa i w takim stanie umieścić na stanowisku.',
        'Rozładować, włożyć wskaźnik bezpieczeństwa do komory i od razu opuścić stanowisko z bronią.'
      ],
      why: 'Po komendzie „ROZŁADUJ” broń się rozładowuje, zabezpiecza wskaźnikiem bezpieczeństwa w komorze nabojowej (lufie) i w takim stanie umieszcza na stanowisku (§ 3 pkt 10). Przedstawienie broni do kontroli prowadzącemu to osobny obowiązek po zakończeniu strzelania, przed opuszczeniem stanowiska (§ 3 pkt 14).'
    }
  },
  {
    id: 'B011', fromRevision: 3, severity: 'istotny',
    note: 'Punkt o alkoholu usunięto z obowiązujących zasad PZSS; zakaz wynika z regulaminu strzelnicy.',
    fields: {
      sources: ['range', 'official-list', 'official-index'],
      ref: 'wzorcowy regulamin strzelnic, zał., rozdz. 1 ust. 2 pkt 3',
      why: 'Regulamin strzelnicy zakazuje przebywania na jej terenie osób pod wpływem alkoholu lub środków odurzających. Zakaz nie dotyczy wyłącznie strzelających.'
    }
  },
  {
    id: 'B045', fromRevision: 1, severity: 'istotny',
    note: 'Podstawa pochodziła z wersji zasad PZSS z 2019 r.',
    fields: {
      sources: ['range'],
      ref: 'wzorcowy regulamin strzelnic, zał., rozdz. 1 ust. 2 pkt 3',
      q: 'Czy zakaz przebywania na strzelnicy osób pod wpływem alkoholu lub środków odurzających obejmuje osobę niestrzelającą?',
      why: 'Regulamin strzelnicy zakazuje samego przebywania na jej terenie osób pod wpływem alkoholu lub środków odurzających, więc status obserwatora nie wyłącza zakazu.'
    }
  },
  {
    id: 'B012', fromRevision: 2, severity: 'istotny',
    note: 'W obowiązującej wersji zasad PZSS to § 3 pkt 18 z nowym brzmieniem.',
    fields: {
      sources: ['safety', 'range'],
      ref: 'Ogólne zasady bezpieczeństwa PZSS § 3 pkt 18; wzorcowy regulamin strzelnic, zał., rozdz. 3 ust. 7',
      answers: [
        'Pod bezpośrednim nadzorem rodzica, opiekuna prawnego lub osoby wyznaczonej do opieki.',
        'Pod ogólnym nadzorem prowadzącego strzelanie, bez osoby opiekującej się dzieckiem.',
        'Pod nadzorem dowolnego uczestnika, któremu nie powierzono opieki nad dzieckiem.'
      ],
      why: 'Zasady PZSS (§ 3 pkt 18) wymagają bezpośredniego nadzoru opiekunów prawnych lub osób wyznaczonych do opieki na podstawie innych przepisów. Regulamin strzelnicy mówi o rodzicach lub opiekunach.'
    }
  },
  {
    id: 'R058', fromRevision: 1, severity: 'istotny',
    note: 'Klucz „bezterminowo” pomijał wygaśnięcie patentu z mocy prawa (§ 6a, terminy od 2026-01-01).',
    fields: {
      ref: 'Regulamin patentu, tekst jednolity uchw. 47/2025: § 3 ust. 8, § 6a, § 26 ust. 3',
      answers: [
        'Bez terminu, ale patent wygasa, jeśli posiadacz nie występuje o licencję w terminach regulaminu.',
        'Na pięć lat; po tym czasie trzeba ponownie zdać cały egzamin patentowy przed komisją PZSS.',
        'Na czas posiadania pozwolenia na broń sportową; cofnięcie pozwolenia kończy ważność patentu.'
      ],
      why: 'Regulamin nie określa terminu ważności patentu (§ 3 ust. 8), ale zastrzega § 6 i § 6a. Patent wygasa z mocy prawa, gdy posiadacz nie wystąpi o licencję do 31 grudnia roku następującego po roku nadania albo nie odnowi licencji do 31 marca drugiego roku po jej wygaśnięciu. Terminy liczy się od 1 stycznia 2026 r. (§ 26 ust. 3).'
    }
  },
  { id: 'R026', fromRevision: 2, severity: 'istotny', note: 'Przepis 7.10 nie istnieje. ' + ISSF_NOTE, fields: { ref: '7.7.5 (tabela parametrów karabinów); 7.4.4.2 poz. M' } },
  {
    id: 'R037', fromRevision: 2, severity: 'istotny', note: 'Przepis 7.9 nie istnieje; treść nie odróżniała konkurencji 50 m od 300 m. ' + ISSF_NOTE,
    fields: { ref: '7.7.4 (tabela konkurencji karabinowych)', q: 'Na jaki dystans strzela się konkurencję karabinu małokalibrowego (5,6 mm bocznego zapłonu) 60 strzałów leżąc?' }
  },
  { id: 'R041', fromRevision: 2, severity: 'istotny', note: 'Przepis 7.9 nie istnieje. ' + ISSF_NOTE, fields: { ref: '7.7.4 (tabela konkurencji karabinowych)' } },
  { id: 'R042', fromRevision: 2, severity: 'istotny', note: '6.3 dotyczy tarcz i rzutków, 7.9 nie istnieje. ' + ISSF_NOTE, fields: { ref: '6.4.3; 7.7.4; 8.11' } },
  { id: 'R045', fromRevision: 2, severity: 'istotny', note: 'Przepis 7.9 nie istnieje. ' + ISSF_NOTE, fields: { ref: '7.7.4; 8.11' } },
  { id: 'R047', fromRevision: 2, severity: 'istotny', note: 'Przepis 7.9 nie istnieje. ' + ISSF_NOTE, fields: { ref: '7.7.4; 8.11' } }
];

/** Nanosi poprawki na bazę. Powtórne wywołanie na poprawionej bazie nic nie zmienia. */
export function applyAuditCorrections(bank) {
  const log = [];
  for (const change of sourceChanges) {
    const s = bank.sources.find(x => x.id === change.id);
    if (!s) throw Error('Brak źródła ' + change.id);
    if (s.url !== change.url || s.kind !== change.kind) {
      Object.assign(s, change, { fingerprint: PENDING });
      delete s.scope;
      log.push('źródło ' + change.id + ' → ' + change.url);
    } else if (s.title !== change.title) s.title = change.title;
  }
  const withdrawn = bank.questions.filter(q => withdraw.ids.includes(q.id));
  if (withdrawn.length) {
    bank.questions = bank.questions.filter(q => !withdraw.ids.includes(q.id));
    log.push('wycofano ' + withdrawn.map(q => q.id).join(', '));
  }
  for (const id of removeSources) {
    if (bank.questions.some(q => q.sources.includes(id))) throw Error('Źródło ' + id + ' jest nadal używane');
    if (bank.sources.some(s => s.id === id)) { bank.sources = bank.sources.filter(s => s.id !== id); log.push('usunięto źródło ' + id); }
  }
  if (bank.topics) bank.topics = bank.topics.filter(t => !removeTopics.includes(t.id));
  for (const c of questions) {
    const q = bank.questions.find(x => x.id === c.id);
    if (!q) throw Error('Brak pytania ' + c.id);
    if (q.revision === c.fromRevision + 1 && q.review?.audit === REVIEWED_AT) continue;
    if (q.revision !== c.fromRevision) throw Error(`Pytanie ${c.id} ma rewizję ${q.revision}, oczekiwano ${c.fromRevision}`);
    Object.assign(q, c.fields, {
      revision: c.fromRevision + 1,
      verifiedAt: REVIEWED_AT,
      review: { audit: REVIEWED_AT, severity: c.severity, note: c.note, status: 'do akceptacji' }
    });
    log.push('pytanie ' + c.id + ' → rewizja ' + q.revision);
  }
  Object.assign(bank, bankMeta);
  if (bank.answerDesign) bank.answerDesign.reviewedCount = bank.questions.length;
  return log;
}
