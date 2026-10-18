PATENT START — Android 8.0 lub nowszy

Autorska aplikacja treningowa do części teoretycznej patentu strzeleckiego.
Wydanie 1.2.0: 18.10.2026. 400 pytań, 23 zagadnienia, pięć działów.
Zakres wszystkich 142 pozycji opublikowanego wykazu PZSS ma autorskie
warianty treningowe, uzasadnienia i źródła. Wykaz nie zawiera wariantów
odpowiedzi ani klucza. Nie gwarantujemy brzmienia przyszłego egzaminu.

FUNKCJE
Nauka działami, sesje mieszane, odpowiedź z pamięci przed pokazaniem
wariantów, błędy, zapisane pytania, indywidualne terminy powtórek,
ocena pewności, statystyki, kopia i przywracanie postępów, jasny/ciemny
wygląd i symulacja zasad egzaminu: 10 pytań, 20 minut, po dwa pytania
z pięciu działów; minimum 9/10 oraz bezbłędne pierwsze cztery odpowiedzi.

AKTUALNOŚĆ
Wbudowana baza ma datę weryfikacji i termin kolejnego przeglądu.
Monitor kontroluje ELI i dokumenty PZSS/ISSF przy uruchomieniu i okresowo
w tle. Android może opóźniać zadania; działanie 24/7 nie jest gwarantowane.
Wykryta zmiana wycofuje zależne pytania. Siedem dni bez potwierdzenia
źródeł także je wstrzymuje. Upływ terminu przeglądu blokuje cały pakiet.
Monitor wykrywa zmianę, nie zastępuje przeglądu prawnego.

Nowe treści są instalowane z podpisanego pliku latest.patentpack.
Aplikacja weryfikuje podpis RSA-SHA256, wersję, strukturę bazy i rewizje.
Zmiana treści pytania wymaga podniesienia jego rewizji. Wyniki starej
rewizji nie liczą się jako opanowanie zmienionej treści.
Adres domyślny: https://grocjusz.github.io/patent-start/latest.patentpack
Kanał działa dopiero po opublikowaniu plików i aktywacji GitHub Pages.
Nie publikuj niezweryfikowanych zmian ani wygenerowanych odpowiedzi
bez sprawdzenia źródeł i dat wejścia w życie.

PRYWATNOŚĆ
Bez logowania, reklam i analityki. Postępy pozostają na urządzeniu.
Kopie postępów zapisuje użytkownik w wybranym miejscu. Odinstalowanie
usuwa dane lokalne. Serwisy odwiedzane przy kontroli źródeł i aktualizacji
mogą rejestrować adres IP. Aplikacja nie wysyła do nich odpowiedzi,
historii nauki ani innych danych o postępach.

KOMPILACJA
Narzędzia: Node.js, JDK 17, Android SDK Platform 35, Build Tools 35.0.0.
Nie wymaga Gradle ani płatnych usług.
Ustaw JAVA_HOME, ANDROID_HOME oraz PATENT_SECRET_DIR na prywatny folder.
W domyślnym układzie projektu skrypty korzystają z lokalnego work/toolchain
oraz work/keys, położonych poza folderem źródłowym.
node tools/test.mjs
node tools/build.mjs

NIE URUCHAMIAJ make-bank.mjs bez plików badawczych: służy do odtworzenia
pierwszej bazy i jej odcisków. Nie wolno odświeżać odcisków po zmianie
źródła bez merytorycznej weryfikacji pytań. Zmiana baseline nie jest
naprawą pytania.

PUBLIKACJA PAKIETU
1. Zweryfikuj zmiany źródłowe, przepisy przejściowe i terminy obowiązywania.
2. Zmień odpowiednie pytania i podnieś ich revision.
3. Podnieś version pakietu, releaseDate i reviewUntil po przeglądzie.
4. Uruchom testy, podpisz: node tools/sign-pack.mjs [bank.json] [plik-wyjściowy].
5. Opublikuj latest.patentpack na hostingu HTTPS. Nie zmieniaj nazwy pliku.
6. Sprawdź pobranie i odrzucenie pakietu z nieprawidłowym podpisem.
7. Przy przeglądzie bez zmian treści nadal podnieś wersję i daty pakietu;
   rewizje niezmienionych pytań pozostają bez zmian.

KLUCZE
Prywatny klucz treści oraz magazyn podpisu APK są przechowywane lokalnie
w work/keys, poza archiwum źródłowym i repozytorium. Należy zachować
ich prywatną kopię zapasową. Utrata klucza APK uniemożliwi zwykłe
aktualizowanie zainstalowanej aplikacji tym samym identyfikatorem.
Repozytorium może zawierać public-key.der; to klucz PUBLICZNY.
Nigdy nie dodawaj prywatnych kluczy, haseł ani kopii postępów do GitHub.

OGRANICZENIA WALIDACJI
Testy logiki nauki i oceny egzaminu, podpisu pakietu oraz interfejsu
w przeglądarce nie zastępują testu na fizycznym telefonie. Weryfikacja
APK przez apksigner potwierdza poprawność podpisu, nie całe działanie
systemu Android. Przed poleganiem na aplikacji sprawdź instalację,
źródła, kopie danych i zachowanie na swoim telefonie.

WYDANIE 1.1.2 / PAKIET 4 — 18.10.2026
Przegląd konstrukcji 185 pytań. W 183 zmieniono treść wariantów;
2 pytania z poprawnymi wariantami liczbowymi zachowano. Rewizję podniesiono
wyłącznie dla zmienionych pytań. Wyników ze starych, łatwiejszych wersji
nie uznaje się za opanowanie nowych wariantów.

Wzory konstrukcji przejrzano w serwisach:
https://egzaminpatentstrzelecki.pl/pytania/54
https://egzaminpatentstrzelecki.pl/pytania/279
https://testna.pl/testy-na-patent-strzelecki/
https://vislipno.pl/VIS-html/egzamin/patent_pytania.pdf
Starszy PDF zawiera nieaktualne informacje, dlatego posłużył tylko do
analizy konstrukcji, nie do ustalania bieżących zasad lub klucza.
Zasady oceny jakości pytań: NBME Item-Writing Guide, reguła 4 — spójne,
wiarygodne warianty bez podpowiedzi w formie odpowiedzi:
https://www.nbme.org/sites/default/files/2021-02/NBME_Item%20Writing%20Guide_R_6.pdf
Nie skopiowano komercyjnej bazy ani kluczy. Opracowanie jest autorskie.

Warianty odnoszą się do tego samego zagadnienia. Pomyłki dotyczą np.
terminu, właściwego organu, warunku ustawowego, rodzaju pozwolenia,
parametru sprzętu lub różnicy „może” / „musi”. Zachowano jeden klucz
w każdym pytaniu; kolejność A/B/C jest losowana w sesji.
Kontrola długości to pomoc redakcyjna, nie empiryczna kalibracja trudności.
Rzeczywistą trudność można ocenić dopiero na podstawie rozwiązywania pytań.

MONITOR: porównano stare i nowe strony trzech definicji SAAMI. Zmieniły
się wersja CSS oraz techniczne tokeny poza główną treścią, nie definicje.
Nowy monitor porównuje całą zawartość jednoznacznej sekcji main z tytułem
i treścią hasła. Brak lub powielenie sekcji powoduje błąd kontroli;
zmiana treści nadal wywołuje alarm. Zachowano URL-e i kontrolę domen.
Zgodność Java/Node sprawdzono dla 8 przypadków. Ta poprawka wymaga
aktualizacji APK do 1.1.2; na starszym APK te 4 pytania mogą pozostać
wstrzymane. Nie wyłączono ochrony aktualności.
Pozostałe monitorowane źródła bez zmian. Przegląd komunikatów PZSS, strony
patentu i przepisów ISSF nie wykazał nowej zmiany wpływającej na bazę.
Znana nowelizacja depozytów 2026/1317 od 24.10.2026 zmienia § 10,
nie sprawdzaną w pytaniu P030 zasadę dostępu z § 8.
Daty przeglądu całej bazy nie przedłużono: reviewUntil = 2026-11-16.

WYDANIE 1.2.0 / PAKIET 5 — 18.10.2026
Dodano 215 własnych pytań: definicje i wyjątki, pozwolenia, obowiązki,
EKB i obrót, przechowywanie, sytuacje bezpieczeństwa, transport, ISSF,
PZSS poza ISSF (zbiór 2025–2028), mechanizmy i balistyka, karabinek
CZ 457 oraz materialne prawo karne. Każde pytanie ma źródło i uzasadnienie.
23 zagadnienia można ćwiczyć osobno. Wcześniejsze 185 pytań zachowuje
rewizje i postępy. Pełny generator jest odtwarzalny.
Nie skopiowano zewnętrznych banków; wykorzystano je do analizy zakresu.
400 pytań nie jest oficjalną zamkniętą pulą ani gwarancją zdania.
Nowy APK jest potrzebny do obsługi dodatkowej domeny producenta CZ
oraz menu zagadnień. Starszy APK może odrzucić pakiet 5 z nowym źródłem.
Termin pełnego przeglądu pozostaje 16.11.2026; nie przedłużono go.
