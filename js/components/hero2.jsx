import React from "react";
import ReactDOM from 'react-dom';

import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import {Who} from './who.jsx';
import {Hero} from './hero.jsx';
import {Redactor} from './redactor.jsx';
import ScrollUpButton from "react-scroll-up-button";
import Slider from 'react-slick';
import Lacznosc1 from '../../images/lacznosc/lacznosc1.jpg';
import Lacznosc2 from '../../images/lacznosc/lacznosc2.jpg';
import Lacznosc3 from '../../images/lacznosc/lacznosc3.jpg';
import Lacznosc4 from '../../images/lacznosc/lacznosc4.jpg';
import Lacznosc5 from '../../images/lacznosc/lacznosc5.jpg';
import Lacznosc6 from '../../images/lacznosc/lacznosc6.jpg';

export class Hero2 extends React.Component {
  render() {
      let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    return (
        <section>
            <div className="who" id="laczniczka">
                <div className="container">
                    <div className="fot">
                        <Who imag="./images/leszczynska.jpg"/>
                    </div>
                    <div className="characteristic">
                        <Title tit="Irena Leszczyńska" color="black"/>
                        <p>
                            ur. 1926 r., pseudonim "Kubuś"
                        </p>
                        <p>
                            W czasie Powstania Warszawskiego pełniła funkcję łączniczki-telefonistki. Była żołnierzem Okręgu Żoliborz AK. W momencie koncentracji została przydzielona do Zgrupowania „Żaglowiec”. W okresie okupacji, przed Powstaniem Warszawskim, Irena Leszczyńska była harcerką i zajmowała się pomocą ludziom szczególnie dotkniętym przez los.
                        </p>
                    </div>
                </div>
            </div>

            <div className="interview" id="interview">
                <div className="container">
                    <Title tit='Wywiad' color="white"/>

                        <div className="talk">
                            <Redactor question='Jaką funkcję pani pełniła?'/>

                            <Hero answer='Pełniłam służbę łączniczki-telefonistki, do czego byłam wcześniej przygotowana na szkoleniach organizowanych w ramach Wojskowej Służby Kobiet AK, której podporządkowana została podziemna żeńska organizacja Związku Harcerstwa Polskiego, celem przeszkolenia harcerek do prac specjalistycznych na potrzeby wojska. Należałam do żoliborskiej 4. Żeńskiej Drużyny Harcerskiej „Knieje” pod komenda harcmistrza Niny Rostańskiej. Wszystkie dziewczęta tej drużyny przechodziły szkolenie łącznościowe.'/>

                            <Redactor question='Jak pani pamięta początek Powstania? Czy były jakieś przygotowania? Jak wyglądał 1 sierpnia?'/>

                            <Hero answer='Odgórna decyzja, ustalająca godzinę „W”, jako moment rozpoczęcia walki, zapadła rano 1 sierpnia 1944 roku, chociaż pierwsza koncentracja oddziałów powstańczych została zarządzona i potem odwołana już kilka dni wcześniej. Dobrze pamiętam wielkie napięcie w przeżywaniu tamtych ostatnich dni lipca oraz nastrój podniecenia i niepokoju, panujący w jednostkach powstańczych, stacjonujących przez wiele godzin w miejscach wyczekiwania, czuwających w pogotowiu. Miejscem koncentracji plutonu łączności numer 201 było duże mieszkanie prywatne w bloku przy placu Inwalidów i tam, w dniu 1 sierpnia zgromadziła się ponad pięćdziesięcioosobowa grupa ludzi. Około godziny trzynastej otrzymałam od przełożonego plutonu, porucznika „Gamy” polecenie dostarczenia do dowództwa regionu – meldunku. Byłam wówczas bardzo dumna z możliwości przeniesienia pierwszego „prawdziwego” meldunku służbowego. Ruszyłam w drogę, ale po nagłym usłyszeniu w pobliżu odgłosów strzelaniny i wybuchów granatów, zmieniłam kierunek, aby okrężną drogą, przez tereny nad Wisłą, dotrzeć do celu i wykonać zadanie.'/>

                            <Redactor question='Gdzie trzymała pani meldunek?'/>

                            <Hero answer='Meldunek schowałam w zakończeniu krawata przy bluzce. Wtedy nie wiedziałam, że właśnie na Żoliborzu nastąpiło starcie jednego z oddziałów akowskich z przypadkowym patrolem niemieckim, co dało początek walce zbrojnej jeszcze przed godziną „W”, dezorientując wszystkich. Nad Wisłą dołączyłam do spotkanej grupy osób zdążającej w tym samym kierunku co ja: dwie kobiety oraz dwóch lub trzech mężczyzn. Nagle zaskoczył nas kilkuosobowy patrol zdenerwowanych żołnierzy niemieckich i poczułam przerażający strach. Po próbie tłumaczenia, że tą drogą wracamy z pracy do domów, Niemcy zawrócili, popędzając szybko przed sobą kobiety. Po chwili, z tyłu za nami, padła salwa strzałów wskazująca na zastrzelenie mężczyzn.'/>

                            <Redactor question='Była pani świadkiem tego?'/>

                            <Hero answer='Byłam świadkiem... Zostałyśmy doprowadzone do pobliskiej niemieckiej fabryki zbrojeniowej zwanej „Blaszanką” i umieszczone w służbówce przy wartowni. Fabryka ta zatrudniała również sporo polskich pracowników. Od razu wyczuwało się panującą tam atmosferę wyjątkowego napięcia. Korzystając z toalety, spotkałam pracującą w fabryce koleżankę szkolną, która pomogła mi włączyć się do grupy pracowników opuszczających zakład i wyjść na zewnątrz. Znajdowałam się na Marymoncie, było już ciemno i padał ulewny deszcz. Nie wiedziałam co się dzieje na Żoliborzu. Dotarłam do plebanii księdza Trószyńskiego, kapelana AK, przy ulicy Gdańskiej. Plebania była zawsze otwarta dla potrzebujących schronienia. Aktualnie też zastałam tam kilkanaście osób, jak się okazało niedobitków z pierwszego dnia walk żoliborskich. Od nich dowiedziałam się o stratach powstańczych podczas „południowego” starcia z wrogiem i o tragicznych skutkach ataków dokonanych na placówki niemieckie już po godzinie „W”, które wobec czynnika zaskoczenia, nie miały żadnych szans powodzenia. Dowiedziałam się też o wymarszu do Puszczy Kampinoskiej żoliborskich oddziałów powstańczych wraz z dowództwem. W takiej sytuacji mój niedoniesiony meldunek, z dopiero wtedy poznaną treścią: „Pluton łączności na miejscu w gotowości” – stracił swoją aktualność. Tam przesiedzieliśmy do rana, bo już na Marymoncie byli Niemcy. Rano 2 sierpnia… cisza, głucho, pusto. Dotarłam na podwórko, gdzie wiedziałam, że muszę ten meldunek złożyć. Okazało się, że [tam] nikogo w ogóle nie ma. Przemykając przez zupełnie puste i ciche podwórka bloków żoliborskich, dotarłam do domu.'/>

                            <Redactor question='Jak było dalej po 1 sierpnia?'/>

                            <Hero answer='Żoliborz przez kilka dni był opustoszały. Niemcy, zdezorientowani sytuacją, wycofali wszystkie czołgi, samochody i jednostki uzbrojone do swoich umocnionych punktów na obrzeżach dzielnicy. Straszyły tylko sporadycznie przejeżdżające główną arterią Żoliborza – i to z niezwykłą szybkością – samochody, których równie wystraszone załogi posyłały „na oślep” serie karabinowe w boczne ulice.'/>

                            <Redactor question='Jak pani przyłączyła się do Powstania?'/>

                            <Hero answer='Aby „coś robić”, zgłosiłam się do znanego mi z konspiracyjnej przeszłości punktu kontaktowego i tam pomagałam przy powielaniu, na bardzo przestarzałym urządzeniu z wałkiem i farbą drukarską, lokalnego „Biuletynu Informacyjnego”. 4 sierpnia nastąpił powrót oddziałów AK z Kampinosu. Po zabarykadowaniu arterii przelotowych, dla uniemożliwienia Niemcom przejazdów, zorganizowano budowę rowów dobiegowych dla komunikacji wewnątrz dzielnicy, jako zabezpieczenia przed ostrzałem. Żoliborz stał się odciętą od reszty dzielnic Warszawy jednostką obronną, z możliwością dojścia wyłącznie kanałami. Było to jakby samoistne miasteczko, z własną administracją i organizacją życia, zarówno od strony wojskowej, jak i cywilnej. Wszyscy powstańcy zostali zaopatrzeni w biało-czerwone opaski z wydrukiem liter WP oraz orzełkiem i ewentualnie numerem oddziału. Przez dłuższy czas Żoliborz nie był tak mocno atakowany jak inne dzielnice, trwały tylko naloty lotnicze i ostrzeliwania artyleryjskie. Walk w centrum dzielnicy nie było, jedynie starcia z wrogiem na obrzeżach, związane z utrzymaniem placówek zabezpieczających.'/>

                            <Redactor question='Po kilku dniach przyłączyła się pani do swojego oddziału. Gdzie on się znajdował? Czy cały czas na tej samej ulicy?'/>

                            <Hero answer='Po trzech dniach, jak nasze wojsko wróciło i zajmowali już pozycje, to wróciłam do swojego oddziału. Znajdował się na ulicy Pogonowskiego. To był specjalny pluton łączności przy komendzie Zgrupowania „Żaglowiec”. Miejscem stacjonowania było kilka willi przy ulicy Pogonowskiego. W skład plutonu wchodziły męskie patrole telefoniczne i gońcy, saperzy i służba gospodarcza oraz sześć łączniczek-telefonistek. Naszym głównym zadaniem była obsługa centrali telefonicznej i przenoszenie meldunków do dowódców około dziesięciu placówek bojowych, rozmieszczonych w południowej części Żoliborza (wzdłuż linii kolejowej) i podległych kapitanowi „Żaglowcowi”. Ilość placówek bojowych ulegała zmianie, zależnie od stanu osobowego całego zgrupowania. Jako grupa łączniczek pełniłyśmy służbę zmianowo: dwie przy telefonach, dwie – roznoszenie meldunków, dwie – „odpoczynek”. Wykonywałyśmy też wiele prac gospodarczych i socjalnych, na przykład pomoc w kuchni, aprowizacji, przy odbiorze przydziałów żywnościowych, czy starania o miejsca do snu po służbie. Trzy z nas były harcerkami ze stażem, przeto charakteryzowała nas postawa samarytańska i służebna. Sprawy zaopatrzenia organizowała wojskowa służba kwatermistrzowska, już wcześniej gromadząc zapasy żywności w różnych zakonspirowanych magazynach na terenie dzielnicy, w oparciu i przy współpracy z legalnie istniejącymi organizacjami jak PCK czy RGO oraz szkołami i zakładami produkcyjnymi. Pomagałyśmy przy aprowizacji, była wspólna piekarnia, która wypiekała chleb, chodziło się po przydział kaszy, czy czegoś do ugotowania zupy, bo gotowaliśmy u siebie. Jeden z mężczyzn był kucharzem i codziennie któraś z nas pomagała jemu przy gotowaniu zupy. Przeważnie tylko zupa była.'/>

                            <Redactor question='Jak pani była ubrana? Czy miała pani strój powstańczy?'/>

                            <Hero answer='Nie. Ja zawsze byłam ubrana na sportowo. Nosiłam, i zimą, i latem, długie skarpetki, buty na płaskim obcasie. Miałam spódniczkę-spodnie i jakąś wiatróweczkę, koszule męskie.'/>

                            <Redactor question='I biało-czerwoną opaskę?'/>

                            <Hero answer='Biało-czerwoną opaskę noszoną na prawym ramieniu. To jest bardzo ważne, że Powstańcy nosili na prawym ramieniu. A teraz w filmach albo w opowiadaniach mówi się, że na lewym. Na prawym ramieniu. Opaska miała tylko orzełka i numer plutonu.'/>

                            <Redactor question='Była pani w jakiś sposób uzbrojona?'/>

                            <Hero answer='Nie. Szkolono nas, owszem. Nawet uczono nas strzelania. Ale ja za każdym razem odwracałam głowę i nie byłam w stanie. Natomiast najgorszym dniem dla mnie był ten ostatni, już w dniu kapitulacji, ponieważ chodziłam też z meldunkami i dano mi maleńką „piątkę”, Walthera chyba... Ja ją miałam za pasem i szłam sztywno jak świeca. Bałam się tego panicznie. To był najgorszy i najtrudniejszy okres Powstania, gdy musiałam mieć broń przy sobie. Ale to było bardzo krótko. W ten ostatni dzień, też było dla mnie bardzo przykre, została zwołana konferencja, odprawa wszystkich dowódców i mój dowódca wziął sobie mnie jako łączniczkę, żebym wróciła potem z jakimś meldunkiem. Na tej odprawie dowiedzieliśmy się już o kapitulacji i ja musiałam ten meldunek przynieść do naszego plutonu. Jak to powiedziałam, to myślałam, że oni mnie zamordują, ci chłopcy wszyscy. Naprawdę, to była straszna rozpacz i złość. Bardzo to przeżyłam... Bo ode mnie musieli się dowiedzieć, że cały wysiłek na marne...'/>

                            <Redactor question='Nie powitali tej decyzji z ulgą?'/>

                            <Hero answer='Ach skąd! Ze mną był też chłopak, łącznik dowódcy. Razem staliśmy pod drzwiami, gdzie się odbywała odprawa. On dostał prawie ataku histerii, rozpłakał się jak małe dziecko.'/>

                            <Redactor question='Z jakimi trudnościami i z jakim ryzykiem wiązała się pani służba? Co było najtrudniejsze?'/>

                            <Hero answer='Praca łączniczek w terenie wymagała umiejętności szybkiego przemieszczania się przez różne podwórkowe zakamarki, przejścia i rowy łącznikowe, z równoczesnym skrywaniem się przed snajperami. Prace tę czynił niebezpieczną stale zagrażający ostrzał pociskami tak zwanej "szafy" lub "krowy". Przez tory kolejowe, oddzielające Żoliborz od reszty miasta, Niemcy, okupujący Dworzec Gdański, cały czas przetaczali wagon pancerny z urządzeniem wysyłającym w obie strony serie pocisków. Grozę siał przenikliwy zgrzyt podobny do ryku, słyszany przed wybuchem pocisków.'/>

                            <Redactor question='Jaka atmosfera panowała w pani oddziale?'/>

                            <Hero answer='Pełnienie służby w Zgrupowaniu „Żaglowiec” było w pewnym sensie zaszczytem. Kadrę zgrupowania tworzyli oficerowie i podoficerowie wywodzący się ze sławnego, zasłużonego w bojach i mającego swój wkład w historię kraju 21. Pułku Piechoty „Dzieci Warszawy”, który przed 1939 rokiem stacjonował w warszawskiej Cytadeli. W plutonie łączności byłyśmy w otoczeniu większości mężczyzn starszych od nas wiekiem i doświadczeniem, traktujących nas „po ojcowsku”, ale zawsze z szacunkiem dla naszego zaangażowania w służbę. Atmosfera była cudowna, bardzo przyjemna.'/>
                        </div>
                </div>
            </div>

            <div className="slider" id="gallery">
                <div className="container">
                    <Title tit="Galeria" color="black" />
                    <Slider {...settings}>
                        <li><img src={Lacznosc1} /></li>
                        <li><img src={Lacznosc2} /></li>
                        <li><img src={Lacznosc3} /></li>
                        <li><img src={Lacznosc4} /></li>
                        <li><img src={Lacznosc5} /></li>
                        <li><img src={Lacznosc6} /></li>
                    </Slider>
                </div>
            </div>

            <div className="foot">
                <div className="container">
                    <Footer />
                </div>
            </div>
            <ScrollUpButton
                  StopPosition={0}
                  TransitionBtnPosition={150}
                  EasingType='easeOutCubic'
                  AnimationDuration={500}
                  ContainerClassName='ScrollUpButton__Container'
                  TransitionClassName='ScrollUpButton__Toggled'
            />
        </section>
    )
    }
}
