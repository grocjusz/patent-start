# Zmiany treści 1.2.1 (pakiet 6) — do akceptacji autora

Poprawki wynikają z audytu z 2026-10-18 i zostały sprawdzone przez niezależnego recenzenta ze źródłami. Każde zmienione pytanie ma nową rewizję i pole `review` ze statusem „do akceptacji”. Treść poprawek jest w `tools/audit-corrections.mjs`; po zmianie uruchom `node tools/apply-corrections.mjs` na bazie z pakietu 5.

Klucz (poprawna odpowiedź) jest pogrubiony i zawsze pierwszy; kolejność w aplikacji jest losowana.

## B011 — istotny (rewizja 3 → 4)

Powód: Punkt o alkoholu usunięto z obowiązujących zasad PZSS; zakaz wynika z regulaminu strzelnicy.

**Uzasadnienie** — było: Zakaz nie ogranicza się do osób strzelających.

**Uzasadnienie** — jest: Regulamin strzelnicy zakazuje przebywania na jej terenie osób pod wpływem alkoholu lub środków odurzających. Zakaz nie dotyczy wyłącznie strzelających.

**Podstawa** — było: § 3 pkt 18

**Podstawa** — jest: wzorcowy regulamin strzelnic, zał., rozdz. 1 ust. 2 pkt 3

**Źródła** — było: safety, official-list, official-index

**Źródła** — jest: range, official-list, official-index

## B012 — istotny (rewizja 2 → 3)

Powód: W obowiązującej wersji zasad PZSS to § 3 pkt 18 z nowym brzmieniem.

**Warianty — było:**

1. **Pod bezpośrednim nadzorem rodzica lub opiekuna.**
1. Pod ogólnym nadzorem prowadzącego, bez opiekuna.
1. Pod nadzorem uczestnika, któremu nie powierzono opieki.

**Warianty — jest:**

1. **Pod bezpośrednim nadzorem rodzica, opiekuna prawnego lub osoby wyznaczonej do opieki.**
1. Pod ogólnym nadzorem prowadzącego strzelanie, bez osoby opiekującej się dzieckiem.
1. Pod nadzorem dowolnego uczestnika, któremu nie powierzono opieki nad dzieckiem.

**Uzasadnienie** — było: Zasady wymagają bezpośredniego nadzoru.

**Uzasadnienie** — jest: Zasady PZSS (§ 3 pkt 18) wymagają bezpośredniego nadzoru opiekunów prawnych lub osób wyznaczonych do opieki na podstawie innych przepisów. Regulamin strzelnicy mówi o rodzicach lub opiekunach.

**Podstawa** — było: § 3 pkt 19

**Podstawa** — jest: Ogólne zasady bezpieczeństwa PZSS § 3 pkt 18; wzorcowy regulamin strzelnic, zał., rozdz. 3 ust. 7

**Źródła** — było: safety

**Źródła** — jest: safety, range

## P026 — krytyczny (rewizja 2 → 3)

Powód: Wariant „pozwolenia wydane do tego samego celu” można było uznać za poprawny obok klucza.

**Pytanie** — było: Czy osoby fizyczne mogą zbywać między sobą broń i amunicję do niej?

**Pytanie** — jest: Kiedy osoba fizyczna może zbyć swoją broń innej osobie fizycznej bez pośrednictwa przedsiębiorcy?

**Warianty — było:**

1. **Tak, jeśli mają pozwolenia na ten sam rodzaj broni.**
1. Tak, jeśli mają pozwolenia wydane do tego samego celu.
1. Tak, jeśli co najmniej nabywca ma pozwolenie na ten rodzaj broni.

**Warianty — jest:**

1. **Gdy obie osoby mają pozwolenie na ten sam rodzaj broni.**
1. Gdy nabywca ma pozwolenie na broń, nawet innego rodzaju.
1. Gdy obie są pełnoletnie i zawrą umowę na piśmie.

**Uzasadnienie** — było: Uprawnienia muszą odpowiadać transakcji; nabycie broni następuje w granicach pozwolenia i na właściwe zaświadczenie.

**Uzasadnienie** — jest: Art. 21 ust. 1 dopuszcza zbywanie broni i amunicji między osobami posiadającymi pozwolenie na ten sam rodzaj broni. Zbywca niezwłocznie powiadamia pisemnie właściwy organ Policji (art. 21 ust. 2). Pytanie nie dotyczy zbycia za pośrednictwem przedsiębiorcy uprawnionego do obrotu bronią.

**Podstawa** — było: art. 21 ust. 1

**Podstawa** — jest: art. 21 ust. 1–2

## B025 — istotny (rewizja 2 → 3)

Powód: Klucz łączył komendę ROZŁADUJ (§ 3 pkt 10) z kontrolą prowadzącego po zakończeniu strzelania (§ 3 pkt 14).

**Warianty — było:**

1. **Rozładować, sprawdzić, przedstawić do kontroli i pozostawić otwartą ze wskaźnikiem.**
1. Rozładować, sprawdzić, przedstawić do kontroli i pozostawić zamkniętą bez wskaźnika.
1. Rozładować, sprawdzić, wprowadzić wskaźnik i odejść bez kontroli prowadzącego.

**Warianty — jest:**

1. **Rozładować, włożyć wskaźnik bezpieczeństwa do komory i w takim stanie umieścić na stanowisku.**
1. Rozładować, zamknąć zamek bez wskaźnika bezpieczeństwa i w takim stanie umieścić na stanowisku.
1. Rozładować, włożyć wskaźnik bezpieczeństwa do komory i od razu opuścić stanowisko z bronią.

**Uzasadnienie** — było: Zachowuj kierunek bezpieczny. Dokładne czynności zależą od konstrukcji broni i poleceń prowadzącego.

**Uzasadnienie** — jest: Po komendzie „ROZŁADUJ” broń się rozładowuje, zabezpiecza wskaźnikiem bezpieczeństwa w komorze nabojowej (lufie) i w takim stanie umieszcza na stanowisku (§ 3 pkt 10). Przedstawienie broni do kontroli prowadzącemu to osobny obowiązek po zakończeniu strzelania, przed opuszczeniem stanowiska (§ 3 pkt 14).

**Podstawa** — było: zasady PZSS, komendy i zakończenie strzelania

**Podstawa** — jest: Ogólne zasady bezpieczeństwa PZSS (zał. nr 7 do regulaminu patentu), § 3 pkt 10 i 14

## B026 — krytyczny (rewizja 2 → 3)

Powód: Przepis mówi „naboju(ów) i/lub magazynka”, więc dawny wariant C (pusty magazynek, otwarty mechanizm) też spełniał przepis.

**Pytanie** — było: Kiedy przepisy ISSF pozwalają odłożyć broń?

**Pytanie** — jest: Kiedy przepisy ISSF pozwalają odłożyć broń na stanowisku?

**Warianty — było:**

1. **Po usunięciu naboju lub nabojów i magazynka, z otwartym mechanizmem.**
1. Po usunięciu naboju lub nabojów i magazynka, z zamkniętym mechanizmem.
1. Po usunięciu naboju z komory, z dołączonym pustym magazynkiem i otwartym mechanizmem.

**Warianty — jest:**

1. **Po usunięciu nabojów i/lub magazynka oraz po otwarciu mechanizmu.**
1. Po usunięciu nabojów i magazynka, przy zamkniętym mechanizmie.
1. Po zabezpieczeniu bezpiecznikiem, bez otwierania mechanizmu.

**Uzasadnienie** — było: W broni pneumatycznej musi być otwarty otwór ładowania lub mechanizm napinania; obowiązują też wskaźniki bezpieczeństwa.

**Uzasadnienie** — jest: Przepis 6.2.2.6 pozwala odłożyć broń po usunięciu naboju(ów) i/lub magazynka oraz otwarciu mechanizmu. Zamknięty mechanizm albo samo włączenie bezpiecznika nie spełnia tego warunku. Pustą komorę potwierdza wskaźnik bezpieczeństwa (6.2.2.2).

**Podstawa** — było: 6.2.2.6

**Podstawa** — jest: ISSF, Ogólne przepisy techniczne 6.2.2.6; 6.2.2.2

## R026 — istotny (rewizja 2 → 3)

Powód: Przepis 7.10 nie istnieje. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Podstawa** — było: 7.10, tabela specyfikacji karabinów

**Podstawa** — jest: 7.7.5 (tabela parametrów karabinów); 7.4.4.2 poz. M

## R037 — istotny (rewizja 2 → 3)

Powód: Przepis 7.9 nie istnieje; treść nie odróżniała konkurencji 50 m od 300 m. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Pytanie** — było: Na jaki dystans strzela się karabin 60 strzałów leżąc, kalibru 5,6 mm?

**Pytanie** — jest: Na jaki dystans strzela się konkurencję karabinu małokalibrowego (5,6 mm bocznego zapłonu) 60 strzałów leżąc?

**Podstawa** — było: 7.9, tabela konkurencji

**Podstawa** — jest: 7.7.4 (tabela konkurencji karabinowych)

## R041 — istotny (rewizja 2 → 3)

Powód: Przepis 7.9 nie istnieje. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Podstawa** — było: 7.9

**Podstawa** — jest: 7.7.4 (tabela konkurencji karabinowych)

## R042 — istotny (rewizja 2 → 3)

Powód: 6.3 dotyczy tarcz i rzutków, 7.9 nie istnieje. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Podstawa** — było: 6.3; 7.9; 8.11

**Podstawa** — jest: 6.4.3; 7.7.4; 8.11

## R045 — istotny (rewizja 2 → 3)

Powód: Przepis 7.9 nie istnieje. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Podstawa** — było: 7.9; 8.11

**Podstawa** — jest: 7.7.4; 8.11

## R047 — istotny (rewizja 2 → 3)

Powód: Przepis 7.9 nie istnieje. Rozdział 7 przepisów karabinowych ISSF 2026 kończy się na 7.8; tabela konkurencji karabinowych to 7.7.4, tabela parametrów 7.7.5, tabela konkurencji pistoletowych 8.11.

**Podstawa** — było: 7.9; 8.11

**Podstawa** — jest: 7.7.4; 8.11

## P100 — krytyczny (rewizja 1 → 2)

Powód: Dotychczasowy klucz był błędny: art. 22 ust. 1a mówi o pozbawieniu broni cech użytkowych, a zniszczenie w depozycie (art. 23 ust. 2) nie jest zbyciem.

**Pytanie** — było: Czy zniszczenie broni i amunicji przez Policję może być formą ich zbycia po utracie uprawnienia?

**Pytanie** — jest: Osoba, która utraciła uprawnienie do posiadania broni, nie zbyła jej w ciągu 30 dni. Co musi zrobić?

**Warianty — było:**

1. **Tak; zbycie może nastąpić w ten sposób.**
1. Nie; zbycie musi zawsze oznaczać sprzedaż.
1. Nie; zbycie musi zawsze oznaczać darowiznę.

**Warianty — jest:**

1. **Złożyć broń i amunicję do depozytu właściwego organu Policji; później nadal może je zbyć.**
1. Złożyć broń i amunicję do depozytu Policji; od tej chwili zbycie broni nie jest już możliwe.
1. Oddać broń Policji do zniszczenia, bo po 30 dniach zniszczenie zastępuje obowiązek zbycia.

**Uzasadnienie** — było: Ustawa przewiduje także zniszczenie broni i amunicji przez Policję.

**Uzasadnienie** — jest: Po 30 dniach broń i amunicję składa się do depozytu (art. 22 ust. 3), a depozyt nie wyklucza późniejszego zbycia (art. 22 ust. 4). Zniszczenie broni w depozycie następuje na wniosek albo za zgodą składającego (art. 23 ust. 2). Obowiązek zbycia wykonuje także pozbawienie broni cech użytkowych (art. 22 ust. 1a).

**Podstawa** — było: art. 22 ust. 1a

**Podstawa** — jest: art. 22 ust. 1a, 3–4; art. 23 ust. 2

## B045 — istotny (rewizja 1 → 2)

Powód: Podstawa pochodziła z wersji zasad PZSS z 2019 r.; dawne brzmienie powielało B011 i zdradzało odpowiedź, więc pytanie dotyczy teraz drugiej części tego samego zakazu.

**Pytanie** — było: Czy zakaz przebywania na strzelnicy pod wpływem substancji psychoaktywnych obejmuje osobę niestrzelającą?

**Pytanie** — jest: Czego, oprócz przebywania osób pod wpływem alkoholu, zakazuje ten sam punkt wzorcowego regulaminu strzelnic?

**Warianty — było:**

1. **Tak; dotyczy przebywania na strzelnicy.**
1. Nie; dotyczy wyłącznie oddawania strzałów.
1. Nie; dotyczy wyłącznie ładowania broni.

**Warianty — jest:**

1. **Spożywania alkoholu i używania środków odurzających na terenie strzelnicy.**
1. Sprzedaży napojów alkoholowych, ale nie ich spożywania przez widzów.
1. Przechowywania alkoholu w samochodach na parkingu przy strzelnicy w czasie zawodów.

**Uzasadnienie** — było: Status obserwatora nie wyłącza zakazu.

**Uzasadnienie** — jest: Wzorcowy regulamin strzelnic w jednym punkcie zakazuje spożywania alkoholu lub używania środków odurzających oraz przebywania na terenie strzelnicy osób będących pod ich wpływem (zał., rozdz. 1 ust. 2 pkt 3). Samo przebywanie pod wpływem obejmuje też obserwatorów (zob. B011).

**Podstawa** — było: § 3 pkt 18

**Podstawa** — jest: wzorcowy regulamin strzelnic, zał., rozdz. 1 ust. 2 pkt 3

**Źródła** — było: safety

**Źródła** — jest: range

## R058 — istotny (rewizja 1 → 2)

Powód: Klucz „bezterminowo” pomijał wygaśnięcie patentu z mocy prawa (§ 6a, terminy od 2026-01-01).

**Warianty — było:**

1. **Bezterminowo.**
1. Na pięć lat.
1. Na jeden rok.

**Warianty — jest:**

1. **Bez terminu, ale patent wygasa, jeśli posiadacz nie występuje o licencję w terminach regulaminu.**
1. Na pięć lat; po tym czasie trzeba ponownie zdać cały egzamin patentowy przed komisją PZSS.
1. Na czas posiadania pozwolenia na broń sportową; cofnięcie pozwolenia kończy ważność patentu.

**Uzasadnienie** — było: Nie należy mylić patentu z okresowymi uprawnieniami lub ważnością EKB.

**Uzasadnienie** — jest: Regulamin nie określa terminu ważności patentu (§ 3 ust. 8), ale zastrzega § 6 i § 6a. Według § 6a ust. 1 patent wygasa z mocy prawa, gdy posiadacz nie wystąpi o żadną licencję w roku nadania ani do 31 grudnia roku następnego albo gdy po wygaśnięciu ostatniej licencji nie wystąpi o jej wydanie lub przedłużenie do 31 marca drugiego roku po wygaśnięciu. Przepis przejściowy (§ 26 ust. 3) liczy terminy wygaszania od 1 stycznia 2026 r.; odsyła przy tym do „§ 6 ust. 1”, co wygląda na błąd redakcyjny regulaminu.

**Podstawa** — było: § 3 ust. 8

**Podstawa** — jest: Regulamin patentu, tekst jednolity uchw. 47/2025: § 3 ust. 8, § 6a ust. 1, § 26 ust. 3

## Wycofane tymczasowo (12)

T056–T062 (karabinek CZ 457) i B061–B065. Jedynym źródłem jest instrukcja producenta z domeny spoza listy aplikacji 1.1.x, a B061–B065 miały błędnie opisaną podstawę („zasady bezpieczeństwa pkt …” to punkty instrukcji CZ 457). Pytania mogą wrócić w pakiecie z polem `minApp: 6` (wymaga aplikacji 1.2.1) po poprawieniu podstaw.

## Źródła

- `storage`: meta https://api.sejm.gov.pl/eli/acts/DU/2014/1224 → meta https://api.sejm.gov.pl/eli/acts/DU/2023/364
- `patent`: sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/regulamin-patent-strzelecki-2025.pdf → sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/regulamin-patentowy-tekst-jednolity-uchw-47.pdf
- `safety`: sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/ogolne-zasady-bezpieczenstwa-w-sporcie-strzeleckim.pdf → sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/ogolne-zasady-bezpieczenstwa.pdf
- `issf-index`: links https://www.pzss.org.pl/sedziowie/przepisy-issf-i-interpretacje → sha256 https://www.pzss.org.pl/assets/files/dokumenty/przepisy/kolegium-sedziow/issf/issf-2026/6_general_2.pdf
- `patent-index`: links https://www.pzss.org.pl/patenty-licencje/terminy-egzaminow → sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/zalaczniki_regulamin_patent.pdf
- `official-index`: links https://www.pzss.org.pl/patenty-licencje/patent-strzelecki → sha256 https://www.pzss.org.pl/assets/files/licencyjno-patentowa/regulamin-patentowy-tekst-jednolity-uchw-47.pdf
- `other-index`: links https://www.pzss.org.pl/komisje/komisja-konkurencji-strzeleckich-nie-objetych-przepisami-issf → sha256 https://www.pzss.org.pl/assets/files/regulaminy/zbior-reg.-pzss-vi2025-dla-konkurencji-nieobjetych-przepisami-issf-vi-2025.pdf
- `cz457`: usunięte razem z zależnymi pytaniami.
