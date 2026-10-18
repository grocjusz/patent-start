// Własne warianty: pomyłki w terminie, zakresie przepisu, organie lub parametrze.
// Nie kopiujemy kluczy ani zestawów odpowiedzi komercyjnych serwisów.
const rows=`
P001|Komendant wojewódzki Policji właściwy dla miejsca stałego pobytu.|Komendant powiatowy Policji właściwy dla miejsca stałego pobytu.|Komendant wojewódzki Policji właściwy dla miejsca zakupu broni.
P002|Na czas nieokreślony.|Na okres pięciu lat.|Na okres dziesięciu lat.
P003|Członkostwo w stowarzyszeniu strzeleckim, kwalifikacje sportowe i licencja związku.|Członkostwo w stowarzyszeniu strzeleckim, kwalifikacje sportowe i uprawnienia prowadzącego.|Członkostwo w stowarzyszeniu strzeleckim, licencja związku i udokumentowane zagrożenie osobiste.
P004|Nie; potwierdza kwalifikacje do ubiegania się o pozwolenie sportowe.|Tak; zastępuje pozwolenie na broń w dyscyplinach wpisanych do patentu.|Tak; po uzyskaniu licencji daje prawo posiadania broni bez decyzji Policji.
P005|Decyzją administracyjną organu.|Postanowieniem administracyjnym.|Zaświadczeniem wydanym przez organ.
P006|W ciągu 5 dni od nabycia.|W ciągu 7 dni od nabycia.|W ciągu 14 dni od nabycia.
P007|Dowód nabycia konkretnego egzemplarza broni.|Zaświadczenie uprawniające do nabycia broni.|Decyzja o udzieleniu pozwolenia na broń.
P008|Do broni wskazanej w legitymacji posiadacza broni.|Do rodzajów broni objętych jego pozwoleniem.|Do broni w dyscyplinach wskazanych w jego patencie.
P009|Niezwłocznie, najpóźniej w ciągu 24 godzin od stwierdzenia utraty.|Niezwłocznie, najpóźniej w ciągu 48 godzin od stwierdzenia utraty.|Niezwłocznie, najpóźniej w ciągu 7 dni od stwierdzenia utraty.
P010|Pisemnie, w ciągu 14 dni, organowi właściwemu dla nowego miejsca.|Pisemnie, w ciągu 14 dni, organowi właściwemu dla poprzedniego miejsca.|Pisemnie, w ciągu 7 dni, organowi właściwemu dla nowego miejsca.
P011|Posiadaczowi pozwolenia sportowego lub łowieckiego.|Posiadaczowi pozwolenia sportowego lub kolekcjonerskiego.|Posiadaczowi pozwolenia łowieckiego lub pamiątkowego.
P012|Uniemożliwiać dostęp osobom nieuprawnionym.|Uniemożliwiać dostęp osobom niepełnoletnim.|Uniemożliwiać dostęp osobom bez patentu strzeleckiego.
P013|S1 według PN-EN 14450.|S2 według PN-EN 14450.|Klasa 0 według PN-EN 1143-1.
P014|Wyłącznie na terenie strzelnic.|Na strzelnicach i terenach klubowych.|Na strzelnicach i w obwodach łowieckich.
P015|Nie; ustawa zwalnia takie używanie z obowiązku własnego pozwolenia.|Tak; zwolnienie obejmuje broń pneumatyczną, a nie broń palną.|Tak; zwolnienie obejmuje zawody, ale nie zwykły trening sportowy.
P016|21 lat.|18 lat.|20 lat.
P017|Jak broń lub amunicję, także gdy występują oddzielnie.|Jak broń lub amunicję dopiero po zmontowaniu w sprawną całość.|Jak broń lub amunicję dopiero po nadaniu numeru i zarejestrowaniu.
P018|Urządzenie miotające pocisk sprężonym gazem z lufy, o energii wylotowej ponad 17 J.|Urządzenie miotające pocisk sprężonym gazem z lufy, o energii wylotowej co najmniej 17 J.|Urządzenie miotające pocisk sprężonym gazem z lufy, o energii wylotowej nie większej niż 17 J.
P019|Każdy sposób przemieszczania załadowanej broni przez jej posiadacza.|Każdy sposób przemieszczania rozładowanej broni poza miejscem przechowywania.|Przemieszczanie broni przez posiadacza wyłącznie z nabojem w komorze.
P020|Zgoda właściwego organu Policji na noszenie broni.|Ważna licencja zawodnicza posiadacza broni.|Europejska karta broni palnej posiadacza broni.
P021|Naboje przeznaczone do strzelania z broni palnej.|Naboje i wszystkie oddzielne składniki naboju.|Naboje do broni palnej i śrut do pneumatycznej.
P022|Z pociskiem wypełnionym materiałem wybuchowym.|Z pociskiem pełnopłaszczowym z rdzeniem ołowianym.|Z pociskiem ołowianym typu wadcutter do strzelań tarczowych.
P023|Samoczynna broń palna zdolna razić cele na odległość.|Samopowtarzalna broń palna zdolna razić cele na odległość.|Powtarzalna broń palna centralnego zapłonu z magazynkiem wymiennym.
P024|Pozwolenie na broń, z wyjątkami wskazanymi w ustawie.|Pozwolenie albo patent sportowy, zależnie od przeznaczenia broni.|Pozwolenie albo karta rejestracyjna, według wyboru posiadacza.
P025|Karta rejestracyjna broni pneumatycznej.|Legitymacja posiadacza broni pneumatycznej.|Świadectwo broni pneumatycznej.
P026|Tak, jeśli mają pozwolenia na ten sam rodzaj broni.|Tak, jeśli mają pozwolenia wydane do tego samego celu.|Tak, jeśli co najmniej nabywca ma pozwolenie na ten rodzaj broni.
P027|Są zabronione; uważa się je za wyrób broni.|Są dozwolone po zawiadomieniu Policji o przeróbce.|Są dozwolone, jeśli pozostają w celu pozwolenia.
P028|Po ujawnieniu uzasadnionych okoliczności wskazujących na przesłanki zdrowotne z art. 15 ust. 1 pkt 2–4.|Dopiero po upływie pięciu lat od wydania pozwolenia, także przy ujawnieniu takich okoliczności.|Dopiero po potwierdzeniu takich okoliczności prawomocnym orzeczeniem sądu.
P029|Tak; ograniczenie lub wyłączenie potwierdza się w legitymacji posiadacza broni.|Tak; ograniczenie lub wyłączenie potwierdza się wyłącznie w Europejskiej karcie broni.|Nie; Policja może cofnąć pozwolenie, ale nie ograniczyć samego noszenia broni.
P030|Tak; po uzgodnieniu terminu z jednostką deponującą.|Tak; po uzyskaniu odrębnego czasowego pozwolenia na tę broń.|Nie; okazanie jest możliwe dopiero po przeniesieniu własności broni.
P031|Nie; cykliczne badania dotyczą pozwoleń do ochrony osobistej oraz ochrony osób i mienia.|Tak; cykliczne badania dotyczą pozwoleń sportowych oraz do ochrony osobistej.|Tak; cykliczne badania dotyczą pozwoleń sportowych oraz kolekcjonerskich.
P032|Lekarskie i psychologiczne, wydane najwyżej 3 miesiące przed wnioskiem.|Lekarskie i psychologiczne, wydane najwyżej 6 miesięcy przed wnioskiem.|Lekarskie i psychologiczne, wydane najwyżej 12 miesięcy przed wnioskiem.
P033|Może cofnąć pozwolenie na broń.|Musi cofnąć pozwolenie na broń.|Musi zawiesić pozwolenie na broń.
P034|Własny użytek posiadacza pozwolenia sportowego, łowieckiego lub kolekcjonerskiego.|Własny użytek posiadacza pozwolenia sportowego, łowieckiego lub pamiątkowego.|Własny użytek posiadacza patentu i licencji sportowej, także bez pozwolenia.
P035|Nie; samo kolekcjonerskie nie wystarcza, przepis wskazuje cel sportowy lub łowiecki.|Tak; wystarcza kolekcjonerskie, jeśli obejmuje ten sam rodzaj broni.|Tak; wystarcza kolekcjonerskie, jeśli użyczenie jest bezpłatne i pisemne.
P036|Spłonki, materiał miotający i pociski zawierające materiały wybuchowe, chemiczne lub zapalające.|Spłonki, materiał miotający i wszystkie pociski, niezależnie od ich wypełnienia.|Spłonki, materiał miotający i wszystkie łuski, niezależnie od ich stanu.
P037|Szkielet, baskila, lufa z komorą nabojową, zamek, komora zamkowa, bęben nabojowy.|Szkielet, baskila, lufa z komorą nabojową, zamek, komora zamkowa, magazynek.|Szkielet, baskila, lufa z komorą nabojową, zamek, komora zamkowa, mechanizm spustowy.
P038|Złożyć broń i amunicję do depozytu właściwego organu Policji.|Złożyć broń i amunicję do przechowania w macierzystym klubie strzeleckim.|Wystąpić do Policji o przedłużenie terminu sprzedaży zamiast złożenia do depozytu.
P039|Od ukończonych 18 lat.|Od ukończonych 17 lat.|Od ukończonych 20 lat.
P040|Członek PZSS z ważną licencją, który zdał właściwy odrębny egzamin.|Członek klubu PZSS z patentem, także bez ważnej licencji związku.|Członek klubu PZSS po szkoleniu, także bez zdanego odrębnego egzaminu.
P041|Ustawa o broni i amunicji.|Ustawa o sporcie.|Rozporządzenie o egzaminie przed komisją Policji.
P042|Noszenie broni po użyciu alkoholu.|Naruszenie terminu rejestracji broni.|Naruszenie terminu zawiadomienia o zmianie stałego pobytu.
P043|Niezwłocznie zbyć broń i amunicję; pozbawienie broni cech użytkowych też wykonuje obowiązek.|Zbyć broń i amunicję w ciągu 90 dni; w tym czasie przechowywać je na dotychczasowych zasadach.|Niezwłocznie złożyć broń i amunicję do depozytu; sprzedaż możliwa jest dopiero po 30 dniach.
P044|Uzależnionej od alkoholu lub substancji psychoaktywnych.|Prawomocnie skazanej wyłącznie za wykroczenie drogowe.|Prawomocnie skazanej wyłącznie za nieumyślne przestępstwo przeciwko mieniu.
P045|Gwintowana bocznego zapłonu do 6 mm, gwintowana centralnego do 12 mm, gładkolufowa, wyłącznie czarnoprochowa.|Gwintowana bocznego zapłonu do 6 mm, gwintowana centralnego do 12,7 mm, gładkolufowa, wyłącznie czarnoprochowa.|Gwintowana bocznego zapłonu do 5,6 mm, gwintowana centralnego do 12 mm, gładkolufowa, wyłącznie czarnoprochowa.
P046|Operatorowi pocztowemu świadczącemu usługę przesyłania broni lub amunicji.|Operatorowi pocztowemu świadczącemu dowolną usługę przesyłek rejestrowanych.|Przewoźnikowi posiadającemu koncesję na krajowy transport drogowy rzeczy.
P047|Zaświadczenie właściwego konsula RP oraz pisemne zgłoszenie organowi celnemu przy przekraczaniu granicy.|Zaświadczenie właściwego konsula RP oraz ustne zgłoszenie organowi celnemu przy przekraczaniu granicy.|Zaświadczenie właściwego konsula RP oraz pisemne zgłoszenie Policji w ciągu 14 dni po przekroczeniu granicy.
P048|Policja może cofnąć pozwolenie.|Policja musi cofnąć pozwolenie.|Policja musi zawiesić pozwolenie.
P049|Policja może cofnąć pozwolenie.|Policja musi cofnąć pozwolenie.|Policja musi zawiesić pozwolenie.
P050|Policja może cofnąć pozwolenie.|Policja musi cofnąć pozwolenie.|Policja musi zawiesić pozwolenie.
P051|Policja może cofnąć pozwolenie.|Policja musi cofnąć pozwolenie.|Policja musi zawiesić pozwolenie.
P052|Zgoda Policji; wyjątek dotyczy EKB uprawniającej do wwozu broni do państw UE.|Zgoda Policji; wyjątek dotyczy EKB uprawniającej do wwozu broni do każdego państwa docelowego.|Zgoda Policji; wyjątek dotyczy polskiej legitymacji posiadacza broni przy wywozie do UE.
P053|W legitymacji posiadacza broni lub świadectwie broni.|W karcie rejestracyjnej broni lub Europejskiej karcie broni.|W promesie do nabycia broni lub decyzji o pozwoleniu.
P054|Nie; wskazana liczba egzemplarzy wyczerpuje uprawnienie z tego zaświadczenia.|Tak; do końca miesiąca, jeśli pozwolenie obejmuje co najmniej dwie sztuki.|Tak; do upływu trzech miesięcy, jeśli pozwolenie obejmuje co najmniej dwie sztuki.
P055|Nie; nie ma terminu 3 miesięcy, obowiązują granice aktualnego uprawnienia.|Tak; po 3 miesiącach od wydania, niezależnie od utrzymania pozwolenia.|Tak; po 3 miesiącach od uprawomocnienia pozwolenia, niezależnie od wydania promesy.
P056|Niezwłocznie, pisemnie, właściwy organ Policji.|Niezwłocznie, ustnie, właściwy organ Policji.|Pisemnie, w ciągu 14 dni, właściwy organ Policji.
P057|W kaburze lub futerale; jeśli ilość i wielkość pozwala — możliwie niewidocznie, w kaburze przy ciele.|Wyłącznie w futerale zamykanym na zamek, także gdy wymiary pozwalają na kaburę.|W kaburze lub futerale; sposób możliwie niewidoczny dotyczy wyłącznie broni do ochrony osobistej.
B001|Sprawdzić rozładowanie po wzięciu broni, także po zapewnieniu poprzedniego użytkownika.|Sprawdzić rozładowanie dopiero po zajęciu stanowiska strzeleckiego.|Sprawdzić rozładowanie tylko wtedy, gdy poprzedni użytkownik tego nie zrobił.
B002|Nie; także rozładowanej broni nie kieruje się w stronę człowieka.|Tak; jeśli rozładowanie sprawdził prowadzący, a komora pozostaje otwarta.|Tak; jeśli wprowadzono wskaźnik bezpieczeństwa i wyjęto magazynek.
B003|Na stanowisku lub w miejscu wyznaczonym za zgodą prowadzącego.|Na stanowisku lub za linią strzelań, po rozładowaniu broni.|Na stanowisku lub w strefie widzów, ze wskaźnikiem bezpieczeństwa.
B004|Rozładowana broń również musi pozostawać pod dozorem.|Rozładowana broń z otwartym zamkiem może pozostać bez dozoru.|Rozładowana broń ze wskaźnikiem może pozostać bez dozoru.
B005|Zabronione, także przy włączonym bezpieczniku i zachowaniu kierunku bezpiecznego.|Dozwolone po zabezpieczeniu mechanizmu spustowego, przy zachowaniu kierunku bezpiecznego.|Dozwolone po wyjęciu magazynka bez opróżnienia komory, przy zachowaniu kierunku bezpiecznego.
B006|Na stanowisku, z lufą w kulochwyt, po komendzie prowadzącego.|Na stanowisku, z lufą w kulochwyt, od rozpoczęcia czasu przygotowawczego.|Na stanowisku, z lufą w kulochwyt, po indywidualnym zgłoszeniu gotowości.
B007|Przerwać natychmiast, także w środku rozpoczętej serii.|Przerwać po oddaniu strzału już przygotowanego do wykonania.|Przerwać po zakończeniu aktualnej serii pięciostrzałowej.
B008|Pistolety, karabiny i strzelby gładkolufowe.|Pistolety i karabiny, z wyłączeniem strzelb.|Broń palna, z wyłączeniem broni pneumatycznej.
B009|Rozładować, wprowadzić wskaźnik i przedstawić broń do kontroli.|Rozładować, zamknąć zamek i przedstawić broń do kontroli.|Wyjąć magazynek, zabezpieczyć i schować broń bez kontroli komory.
B010|Niezwłocznie powiadomić prowadzącego strzelanie.|Powiadomić prowadzącego po zakończeniu aktualnej serii.|Powiadomić prowadzącego przy końcowej kontroli broni.
B011|Nie; zakaz dotyczy także obserwatorów.|Tak; poza stanowiskami strzeleckimi.|Tak; pod opieką trzeźwego uczestnika.
B012|Pod bezpośrednim nadzorem rodzica lub opiekuna.|Pod ogólnym nadzorem prowadzącego, bez opiekuna.|Pod nadzorem uczestnika, któremu nie powierzono opieki.
B013|Każda osoba, także uczestnik lub obserwator.|Prowadzący lub sędzia, z wyłączeniem uczestników.|Prowadzący lub instruktor, z wyłączeniem obserwatorów.
B014|Po uzyskaniu zgody prowadzącego strzelanie.|Po rozładowaniu broni na własnym stanowisku.|Po zakończeniu strzelania przez sąsiadów.
B015|Na stanowisku strzeleckim lub treningowym, na polecenie prowadzącego.|Na stanowisku strzeleckim lub treningowym, po samodzielnym sprawdzeniu osi.|Na stanowisku strzeleckim lub treningowym, po rozpoczęciu przygotowania bez komendy.
B016|Komenda prowadzącego zezwalająca na rozpoczęcie strzelania.|Komenda prowadzącego zezwalająca na ładowanie broni.|Zajęcie stanowiska i zgłoszenie gotowości prowadzącemu.
B017|Zgoda osoby korzystającej z tej broni.|Zgoda samego prowadzącego strzelanie.|Pozwolenie na ten rodzaj broni.
B018|Można usunąć tę osobę ze strzelnicy.|Trzeba ją usunąć po każdym naruszeniu.|Można usunąć po trzech ostrzeżeniach.
B019|Właściciel lub zarządca strzelnicy.|Właściwy komendant powiatowy Policji.|Wójt, burmistrz lub prezydent miasta właściwy dla strzelnicy.
B020|Rozładowana, komora otwarta, bez pasów i pokrowców; pistolet lub rewolwer może być w kaburze.|Rozładowana, komora zamknięta, bez pasów i pokrowców; pistolet lub rewolwer może być w kaburze.|Rozładowana, komora otwarta, z dołączonym magazynkiem z amunicją; pistolet lub rewolwer może być w kaburze.
B021|Nie; samo towarzyszenie nie uprawnia do wejścia na stanowisko ani dotykania broni.|Tak; towarzyszący może wejść i dotykać broni po okazaniu własnego patentu.|Tak; towarzyszący może wejść i dotykać broni po sprawdzeniu jej rozładowania.
B022|Komora i magazynki puste, broń rozładowana.|Komora pusta, pełny magazynek odłączony.|Komora pusta, pełny magazynek dołączony.
B023|Zabezpieczenie przed zagrożeniem życia, zdrowia lub mienia oraz dostępem nieupoważnionych.|Zabezpieczenie przed zagrożeniem życia, zdrowia lub mienia; dostęp osoby pełnoletniej nie wymaga upoważnienia.|Zabezpieczenie przed dostępem nieupoważnionych; samo wyjęcie magazynka spełnia pozostałe wymagania przewozu.
B024|Na uwięzi i pod ścisłym nadzorem opiekuna.|Na uwięzi, bez wymogu stałego nadzoru opiekuna.|Pod ścisłym nadzorem opiekuna, bez wymogu uwięzi.
B025|Rozładować, sprawdzić, przedstawić do kontroli i pozostawić otwartą ze wskaźnikiem.|Rozładować, sprawdzić, przedstawić do kontroli i pozostawić zamkniętą bez wskaźnika.|Rozładować, sprawdzić, wprowadzić wskaźnik i odejść bez kontroli prowadzącego.
B026|Po usunięciu naboju lub nabojów i magazynka, z otwartym mechanizmem.|Po usunięciu naboju lub nabojów i magazynka, z zamkniętym mechanizmem.|Po usunięciu naboju z komory, z dołączonym pustym magazynkiem i otwartym mechanizmem.
B027|Do celów strzeleckich; bez celowania do ludzi, zwierząt i ptactwa.|Do celów i innych przedmiotów w kulochwycie bez zgody prowadzącego.|Do celów i zwierząt znajdujących się na osi strzelań.
B028|Bezpieczeństwo uczestników i towarzyszących, wyznaczenie stanowisk i bezpiecznego pobytu, rejestr.|Bezpieczeństwo uczestników, wyznaczenie stanowisk i rejestr; bezpieczeństwo towarzyszących należy tylko do nich.|Bezpieczeństwo uczestników i towarzyszących, wyznaczenie stanowisk; rejestr prowadzi się wyłącznie na zawodach.
B029|Własnoręczny podpis oświadczenia w rejestrze pobytu.|Ustne oświadczenie składane do rejestru pobytu.|Podpis prowadzącego zamiast podpisu korzystającego.
B030|Imię i nazwisko, numer i organ pozwolenia albo adres przy jego braku, podpisane oświadczenie.|Imię i nazwisko, numer patentu zamiast numeru pozwolenia, adres, podpisane oświadczenie.|Imię i nazwisko, numer i organ pozwolenia, liczba strzałów; bez oświadczenia o znajomości zasad.
R001|Przez całą długość przewodu lufy.|Od komory do połowy długości lufy.|Od wylotu do połowy długości lufy.
R002|Przez pozostawienie otwartego mechanizmu broni.|Przez zamknięcie mechanizmu i włączenie bezpiecznika.|Przez zamknięcie mechanizmu i ustne potwierdzenie pustych komór.
R003|Po kolejnej komendzie START lub READY.|Po kolejnej komendzie LOAD.|Po kolejnej komendzie UNLOAD.
R004|Zawodnik korzystający z butli.|Sędzia kontroli wyposażenia.|Organizator zawodów.
R005|10,9.|10,5.|10,0.
R006|0,5 mm.|5,0 mm.|10,4 mm.
R007|10,4 mm.|11,5 mm.|12,4 mm.
R008|100 mm.|50 mm.|150 mm.
R009|Do trzech prób.|Do dwóch prób.|Do czterech prób.
R010|Samopowtarzalne i z przeładowaniem pump action.|Powtarzalne pump action i dwulufowe z pionowym układem luf.|Samopowtarzalne i dwulufowe z poziomym układem luf.
R011|Nie; mechanizm release jest niedopuszczalny.|Tak; jeżeli opór mechanizmu wynosi co najmniej 1000 g.|Tak; jeżeli ten sam mechanizm działa na obie lufy.
R012|Nie; sprawnej strzelby nie wymienia się podczas rundy.|Tak; między stanowiskami, po zawiadomieniu sędziego.|Tak; po serii na stanowisku, przed następnym stanowiskiem.
R013|Z 10 pytań.|Z 12 pytań.|Z 15 pytań.
R014|20 minut.|15 minut.|30 minut.
R015|Niezaliczenie z powodu błędu w części wymagającej bezbłędnych odpowiedzi.|Zaliczenie po osiągnięciu wymaganego minimum dziewięciu odpowiedzi.|Zaliczenie warunkowe po ustnym poprawieniu jednej błędnej odpowiedzi.
R016|Zaliczenie; dopuszczalny jest jeden błąd poza prawem i bezpieczeństwem.|Niezaliczenie; wymagane są prawidłowe odpowiedzi na wszystkie dziesięć pytań.|Zaliczenie warunkowe; wymagane jest ustne poprawienie jednej błędnej odpowiedzi.
R017|5,6 mm (.22) Long Rifle, bocznego zapłonu.|5,6 mm (.22) WMR, bocznego zapłonu.|5,6 mm (.22) Short, bocznego zapłonu.
R018|4,5 mm (.177), z ołowiu lub podobnego miękkiego materiału.|4,5 mm (.177), w metalowym płaszczu z miękkim ołowianym rdzeniem.|5,5 mm (.22), z ołowiu lub podobnego miękkiego materiału.
R019|Karabin pneumatyczny i pistolet pneumatyczny.|Karabin pneumatyczny i pistolet standardowy 25 m.|Pistolet pneumatyczny i karabin małokalibrowy 50 m.
R020|Karabin 50 m oraz pistolet 25 m i 50 m.|Karabin 10 m oraz pistolet 25 m i 50 m.|Karabin 50 m oraz pistolet 10 m i 25 m.
R021|12; dopuszczalne są mniejsze średnice.|10; dopuszczalne są mniejsze średnice.|16; dopuszczalne są mniejsze średnice.
R022|7,62–9,65 mm (.30–.38), bez Magnum i amunicji dużej mocy.|7,62–11,43 mm (.30–.45), bez Magnum i amunicji dużej mocy.|5,6–9,65 mm (.22–.38), bez Magnum i amunicji dużej mocy.
R023|Pociski z metalowym płaszczem.|Pociski ołowiane wadcutter.|Pociski ołowiane round nose.
R024|Nie ma odrębnego limitu długości lufy.|Maksymalnie 153 mm długości lufy.|Maksymalnie 220 mm długości lufy.
R025|153 mm.|150 mm.|155 mm.
R026|5,5 kg.|5,0 kg.|6,0 kg.
R027|Nie ma odrębnego limitu masy.|Maksymalnie 1400 g.|Maksymalnie 1500 g.
R028|1400 g.|1500 g.|1300 g.
R029|Nie ma określonego minimum.|Co najmniej 500 g.|Co najmniej 1000 g.
R030|500 g.|750 g.|1000 g.
R031|1000 g.|500 g.|1500 g.
R032|300 × 150 × 50 mm.|300 × 150 × 60 mm.|300 × 200 × 50 mm.
R033|420 × 200 × 50 mm.|420 × 150 × 50 mm.|400 × 200 × 50 mm.
R034|Tak; rewolwer 5,6 mm (.22) spełniający wymagania konkurencji.|Nie; dopuszczalny jest pistolet 5,6 mm (.22), ale nie rewolwer.|Tak; rewolwer centralnego zapłonu do 9,65 mm spełniający limity masy.
R035|Jeden nabój.|Dwa naboje.|Pięć nabojów.
R036|Niskie, z odkrytą kostką i elastyczną podeszwą.|Niskie, z odkrytą kostką i sztywną podeszwą.|Wysokie, podpierające kostkę, z elastyczną podeszwą.
R037|50 m.|25 m.|100 m.
R038|Konkurencje Trap oraz Skeet.|Trap oraz ruchoma tarcza 50 m.|Skeet oraz ruchoma tarcza 10 m.
R039|Pięć nabojów.|Sześć nabojów.|Dziesięć nabojów.
R040|10, 25 i 50 m.|10, 25 i 100 m.|10, 50 i 300 m.
R041|10, 50 i 300 m.|10, 25 i 50 m.|10, 50 i 100 m.
R042|10, 25, 50 i 300 m.|10, 25, 50 i 100 m.|10, 25, 100 i 300 m.
R043|25 m.|10 m.|50 m.
R044|Pięć tarcz na 25 m.|Jedna tarcza na 25 m.|Pięć tarcz na 50 m.
R045|Karabin pneumatyczny i pistolet pneumatyczny.|Karabin pneumatyczny i pistolet standardowy.|Pistolet pneumatyczny i pistolet dowolny.
R046|Pistolet sportowy.|Pistolet dowolny.|Karabin sportowy trzy postawy.
R047|Karabin małokalibrowy i pistolet dowolny.|Karabin małokalibrowy i pistolet sportowy.|Pistolet dowolny i pistolet centralnego zapłonu.
R048|Klęcząca, leżąca i stojąca.|Siedząca, leżąca i stojąca.|Klęcząca, siedząca i stojąca.
R049|Pistolet, karabin i strzelba gładkolufowa.|Pistolet, karabin i ruchoma tarcza.|Pistolet, karabin i strzelba wyłącznie pneumatyczna.
R050|Stojąc bez podparcia, jedną ręką, bez podparcia nadgarstka.|Stojąc bez podparcia, oburącz, bez podparcia nadgarstków.|Stojąc z podparciem tułowia, jedną ręką, bez podparcia nadgarstka.
R051|Rzutki z wysokiej i niskiej budki, przelatujące w poprzek pola stanowisk.|Rzutki z maszyn w rowie przed stanowiskami, oddalające się od strzelców.|Rzutki z jednej budki za stanowiskami, lecące nad strzelcami w jednym kierunku.
R052|Rzutki z maszyn w rowie przed stanowiskami, oddalające się od strzelców.|Rzutki z wysokiej i niskiej budki, przelatujące w poprzek pola stanowisk.|Rzutki z jednej budki za stanowiskami, lecące nad strzelcami w jednym kierunku.
R053|Ostrzeżenie — żółta, odjęcie punktów — zielona, dyskwalifikacja — czerwona.|Ostrzeżenie — zielona, odjęcie punktów — żółta, dyskwalifikacja — czerwona.|Ostrzeżenie — żółta, odjęcie punktów — czerwona, dyskwalifikacja — zielona.
T001|Pocisk, łuska, spłonka, ładunek prochowy.|Pocisk, łuska, kowadełko, ładunek prochowy.|Pocisk, łuska, spłonka, kryza.
T002|Pocisk jest częścią naboju.|Nabój jest częścią pocisku.|Pocisk to nabój po usunięciu wyłącznie spłonki.
T003|Zamek.|Wyciąg.|Wyrzutnik.
T004|Osłania język spustowy przed przypadkowym naciśnięciem.|Blokuje język spustowy do chwili prawidłowego ujęcia chwytu.|Blokuje iglicę do chwili pełnego zamknięcia zamka.
T005|Nie ma czynnej spłonki ani ładunku prochowego.|Ma czynną spłonkę, ale nie ma ładunku prochowego.|Ma czynną spłonkę i ładunek prochowy, ale nie ma pocisku.
T006|Nie; ślepa zachowuje czynne elementy ogniowe, ale nie ma typowego pocisku.|Tak; ślepa i szkolna są pozbawione zarówno czynnej spłonki, jak i prochu.|Tak; ślepa i szkolna mają czynną spłonkę, ale są pozbawione prochu.
T007|Samopowtarzalna.|Samoczynna.|Powtarzalna.
T008|9 × 18 mm Makarow.|9 × 19 mm Parabellum.|9 × 17 mm Browning.
T009|Bęben nabojowy rewolweru.|Magazynek pistoletowy.|Mechanizm spustowy.
T010|Szkielet, baskila, zamek.|Szkielet, baskila, magazynek.|Szkielet, baskila, mechanizm spustowy.
T011|Przenośna broń lufowa miotająca pocisk lub substancję materiałem miotającym, także przeznaczona do tego albo możliwa do przystosowania.|Przenośna broń lufowa miotająca pocisk lub substancję materiałem miotającym, z wyłączeniem broni jedynie przeznaczonej do tego albo możliwej do przystosowania.|Przenośna broń lufowa miotająca pocisk lub substancję materiałem miotającym albo sprężonym gazem, także przeznaczona do tego albo możliwa do przystosowania.
T012|Energia sprężonego gazu.|Energia spalania prochu.|Bezpośrednia siła sprężyny.
T013|Gładki przewód lufy.|Gwintowany przewód lufy.|Przewód lufy typu paradox.
T014|Gwintowana, do 6 mm włącznie.|Gwintowana, do 5,6 mm włącznie.|Gwintowana, poniżej 6 mm bez tej wartości.
T015|12,0 mm.|12,7 mm.|11,43 mm.
T016|Spłonkę inicjującą spalanie materiału miotającego.|Opróżnioną łuskę bez spłonki i prochu.|Zwykły pocisk ołowiany bez szczególnego wypełnienia.
T017|W przestrzeni obrzeża denka łuski.|W osobnej spłonce w osi denka łuski.|W oddzielnej spłonce umieszczonej w bocznej ściance łuski.
T018|Spłonka w denku łuski, w osi naboju.|Masa inicjująca w obrzeżu denka łuski.|Spłonka w bocznej ściance łuski, poza osią naboju.
T019|12.|16.|20.
T020|Średnica wewnętrzna między przeciwległymi polami.|Średnica wewnętrzna między przeciwległymi bruzdami.|Średnica zewnętrzna lufy na wysokości komory nabojowej.
T021|Liczba kul ołowianych o średnicy lufy, dających łącznie jeden funt.|Masa w gramach jednej kuli ołowianej o średnicy lufy.|Liczba kul ołowianych o średnicy lufy, dających łącznie jeden kilogram.
K001|Pozbawienie wolności od 6 miesięcy do 8 lat.|Pozbawienie wolności od 3 miesięcy do 5 lat.|Pozbawienie wolności od roku do 10 lat.
K002|Pozbawienie wolności od roku do 10 lat.|Pozbawienie wolności od 6 miesięcy do 8 lat.|Pozbawienie wolności od 2 do 12 lat.
K003|Art. 263 § 3 KK.|Art. 263 § 2 KK.|Art. 263 § 4 KK.
K004|Grzywna, ograniczenie wolności albo pozbawienie wolności do 2 lat.|Grzywna, ograniczenie wolności albo pozbawienie wolności do roku.|Grzywna, ograniczenie wolności albo pozbawienie wolności do 3 lat.
K005|Art. 263 § 4 Kodeksu karnego.|Art. 263 § 3 Kodeksu karnego.|Art. 50 ustawy o broni i amunicji.
K006|Do roku.|Do 2 lat.|Do 3 lat.
K007|Bezpośredniego, bezprawnego, na dowolne dobro chronione prawem.|Bezpośredniego, także prawnego, na dobro chronione prawem.|Bezprawnego, także przyszłego, na dobro chronione prawem.
K008|Tak; może dotyczyć każdego dobra chronionego prawem, także cudzej osoby.|Tak; lecz tylko życia i zdrowia cudzej osoby, bez ochrony jej mienia.|Tak; lecz tylko dóbr osoby najbliższej, z wyłączeniem osób obcych.
K009|Sposób obrony niewspółmierny do niebezpieczeństwa zamachu.|Sposób obrony powodujący jakikolwiek uszczerbek u napastnika.|Sposób obrony przy użyciu narzędzia innego niż użyte przez napastnika.
K010|Nie podlega karze z mocy przepisu.|Sąd musi nadzwyczajnie złagodzić karę.|Sąd może odstąpić od wymierzenia kary.
K011|Niebezpieczeństwa nie można uniknąć w inny sposób.|Wybrany sposób jest szybszy od innych dostępnych sposobów.|Wybrany sposób wymaga mniejszego wysiłku niż inne dostępne sposoby.
K012|Poświęcone dobro ma wartość niższą od ratowanego.|Poświęcone dobro ma wartość równą ratowanemu.|Poświęcone dobro ma wartość wyższą od ratowanego.
K013|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K014|Grzywna, ograniczenie wolności albo pozbawienie wolności do 2 lat.|Grzywna, ograniczenie wolności albo pozbawienie wolności do roku.|Grzywna, ograniczenie wolności albo pozbawienie wolności do 3 lat.
K015|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K016|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K017|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K018|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K019|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K020|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K021|Areszt albo grzywna.|Grzywna albo ograniczenie wolności.|Wyłącznie grzywna.
K022|Grzywna, ograniczenie wolności albo pozbawienie wolności do roku.|Grzywna, ograniczenie wolności albo pozbawienie wolności do 2 lat.|Grzywna, ograniczenie wolności albo pozbawienie wolności do 3 lat.
K023|Usunięcie bezpośredniego niebezpieczeństwa, niemożliwego do uniknięcia inaczej, kosztem dobra o niższej wartości.|Usunięcie bezpośredniego niebezpieczeństwa, możliwego do uniknięcia inaczej, kosztem dobra o niższej wartości.|Usunięcie bezpośredniego niebezpieczeństwa, niemożliwego do uniknięcia inaczej, kosztem dobra o równej wartości.
K024|Może nadzwyczajnie złagodzić karę lub odstąpić od jej wymierzenia.|Musi nadzwyczajnie złagodzić karę lub odstąpić od jej wymierzenia.|Może nadzwyczajnie złagodzić karę, lecz nie może odstąpić od jej wymierzenia.
`;
export const answerDesign=Object.fromEntries(rows.trim().split('\n').map(line=>{const [id,...answers]=line.split('|');if(answers.length!==3)throw Error('Warianty '+id);return[id,answers];}));
export function applyAnswerDesign(questions,previous){
 if(Object.keys(answerDesign).length!==questions.length)throw Error('Niepełny przegląd wariantów');
 const old=new Map(previous.questions.map(q=>[q.id,q]));
 const stems={
  P020:'Co jest wymagane do noszenia broni posiadanej do celów kolekcjonerskich?',
  P024:'Jaka jest podstawowa podstawa posiadania broni palnej przez osobę fizyczną?',
  B004:'Które stwierdzenie o dozorze broni podczas przerwy jest zgodne z zasadami PZSS?',
  B017:'Jaki warunek wynika z zakazu używania broni innej osoby korzystającej ze strzelnicy?',
  K005:'Który przepis określa nieumyślne spowodowanie utraty legalnie posiadanej broni palnej lub amunicji?'
 };
 for(const q of questions){
  if(!answerDesign[q.id]||!old.has(q.id))throw Error('Brak oceny pytania '+q.id);
  q.answers=answerDesign[q.id];q.correct=0;if(stems[q.id])q.q=stems[q.id];
  const p=old.get(q.id),changed=['q','answers','correct','why','ref','sources','cat'].some(k=>JSON.stringify(p[k])!==JSON.stringify(q[k]));
  q.revision=p.revision+(changed?1:0);q.verifiedAt=changed?'2026-10-18':p.verifiedAt;
 }
}
