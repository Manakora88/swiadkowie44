import React from "react";
import ReactDOM from 'react-dom';

import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import {Who} from './who.jsx';
import {Hero} from './hero.jsx';
import {Redactor} from './redactor.jsx';
import ScrollUpButton from "react-scroll-up-button";
import Slider from 'react-slick';
import Walka1 from '../../images/walka/walka1.jpg';
import Walka2 from '../../images/walka/walka2.jpg';
import Walka3 from '../../images/walka/walka3.jpg';
import Walka4 from '../../images/walka/walka4.jpg';
import Walka5 from '../../images/walka/walka5.jpg';
import Walka6 from '../../images/walka/walka6.jpg';

export class Hero5 extends React.Component {
  render() {
      let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    return (
        <section>
            <div className="who" id="virturi">
                <div className="container">
                    <div className="fot">
                        <Who imag="./images/kiezun_sm.png"/>
                    </div>
                    <div className="characteristic">
                        <Title tit="Prof. Witold Kieżun" color="black" />
                        <p>
                            ur. 1922 r., pseudonim "Wypad"
                        </p>
                        <p>
                            Służył w Zgrupowaniu Pułku Baszta. Od 1944 jego mieszkanie było magazynem broni. Od sierpnia 1944 walczył w powstaniu warszawskim w stopniu kaprala podchorążego. Służył w oddziale do zadań specjalnych „Harnaś” w&nbsp;batalionie Gustaw. Uczestniczył m.in. w akcji zdobycia Poczty Głównej.
                        </p>
                    </div>
                </div>
            </div>

            <div className="interview" id="interview">
                <div className="container">
                    <Title tit='Wywiad' color="white"/>

                    <div className="talk">
                        <Redactor question='Został pan uwieczniony na filmie "Powstanie warszawskie". Jest tam pan radosny, uśmiechnięty...'/>

                        <Hero answer='Operatorzy "złapali mnie" radosnego po jednym z większych naszych zwycięstw. To była akcja zdobycia bardzo ważnych strategicznie obiektów - Komendy Policji, Kościoła Świętego Krzyża i tzw. księżówki (dom księży - przyp. red.) na Krakowskim Przedmieściu.'/>

                        <Redactor question='Jak przebiegała?'/>

                        <Hero answer='Akcja była bardzo starannie przygotowana. Pierwszy obiekt do zdobycia to księżówka, zabezpieczona bunkrem z ciężkim karabinem maszynowym. Stanowisko mojego 6-osobowego oddziału to strych domu Traugutta 3, z wybitą dziurą w dachu. Mamy brytyjskiego PIAT-a (ręczny granatnik przeciwpancerny - przyp. red.), ale tylko trzy pociski. Punkt 4 rano otwieramy ogień. Trzeci pocisk niszczy niemiecki bunkier. Wydaję rozkaz: "Całość na dół, atakujemy bezpośrednio".'/>

                        <Redactor question='Wtedy dostaliście się pod ogień.'/>

                        <Hero answer='Musieliśmy się cofnąć i wtedy wpadliśmy na pomysł, żeby spróbować zaatakować od bocznej strony budynku, od ulicy Traugutta. Podeszliśmy pod sam budynek. Okazało się, że Niemcy skoncentrowali całą obronę od strony frontu. Boczny pokój był pusty. Wywaliłem okno, wskoczyliśmy do pokoju. Dalej znajdował się korytarz i wejście do bunkra i do parterowych pokoi, w których stali Niemcy strzelający z okien. No więc z miejsca ogień! Udało nam się położyć paru. Ale kilku skoczyło na schody i uciekło na pierwsze piętro. W tym samym czasie koledzy podziemnym korytarzem, który łączył księżówkę z kościołem, dostali się pod podziemie kościoła i niespodziewanie wyskoczywszy na parter, szybko zlikwidowali jego załogę.'/>

                        <Redactor question='Tak więc mieliście już i księżówkę i kościół?'/>

                        <Hero answer='Ale zostały dwa budynki na podwórku i budynek Krakowskie Przedmieście 1. I tu się dopiero zaczęła strzelanina. Mieliśmy przygotowaną do podpalenia smołę. Specjalnie przygotowany oddział oblał smołą pierwszy budynek. Zapalił się. Wtedy Niemcy przeskoczyli do drugiego budynku, a potem do budynku głównego.'/>

                        <Redactor question='W jedynym budynku byliście Wy, a w drugim - głównym - Niemcy?'/>

                        <Hero answer='Tak. Jest godzina 10, a cała akcja trwa już od godziny czwartej. Strzelamy, okazuje się, że ich ogień maleje. Prawdopodobnie nie mieli więcej pocisków. W pewnym momencie pada rozkaz: "skaczemy". Wpadliśmy na podwórko. Niemcy strzelają z pierwszego piętra. Przebiegliśmy szybko małe podwórko i wpadliśmy do bramy wjazdowej. Zostawiam ubezpieczenie na parterze i wbiegamy schodami na pierwsze piętro. Otworzyłem drzwi na korytarz. Byli zaskoczeni, nie spodziewali się, że już tu jesteśmy. Położyliśmy prawie wszystkich. Reszta z okien skoczyła na Krakowskie Przedmieście. Zostawili ciężki karabin maszynowy.'/>

                        <Redactor question='Zabraliście go?'/>

                        <Hero answer='Zasada była taka: pierwszy, który wpadł, zdobywał broń i od razu ją przywłaszczał. Chwytam więc ciężki karabin maszynowy, naboje i granaty ładuję do torby i zbiegam na podwórko pełne rozentuzjazmowanych kolegów. Spieszę się na kwaterę na ulicy Świętokrzyskiej, żeby tam złożyć zdobyty karabin i całą pozostałą zdobycz. Jest to już trzeci karabin maszynowy zdobyty przez nasz Oddział Specjalny "Harnaś". Minąłem czterech jeńców niemieckich, którzy błagali: "towarzysze, nie mordujcie nas".'/>

                        <Redactor question='Odpowiedział im pan coś?'/>

                        <Hero answer='Krzyknąłem: "to wy mordujcie jeńców, my nie mordujemy". Wtedy też spotkałem zespół naszych filmowców. Zwycięstwo było wspaniałe, bo zdobyliśmy ważny punkt. Obsadziliśmy od razu kościół, wieżę. Ja zostałem przydzielony do Pałacu Staszica, który był niesłychanie ważnym punktem strategicznym, blokując drogę południe-północ w Warszawie. Na filmie jest też pokazane ujęcie właśnie z tego pałacu. Najpierw zbliżają się czołgi. Potem jest wybuch. Niestety, nie pokazano jednego fragmentu. Jeden członek tego zespołu, rażony odłamkiem pocisku, zginął.'/>

                        <Redactor question='Z zespołu operatorów?'/>

                        <Hero answer='Tak. Powiedzieliśmy im wtedy, że nie mogą się tak pchać w niebezpieczne miejsca. Innym razem zrobili to samo. Czołgi podjeżdżają, a oni koniecznie chcą zrobić zdjęcia. Dowodzący się zdenerwował i ostro ich upomniał. Potem się z nimi zaprzyjaźniłem.'/>

                        <Redactor question='W tamtym momencie pałętali się pod nogami, ale teraz widać, jak ważne było to, co robili. Dzięki realizatorom Powstańczych Kronik Filmowych, wykonującym rozkazy dla Biura Informacji i Propagandy Armii Krajowej, powstały bezcenne materiały pokazujące nie tylko walkę, ale także codzienne życie, a przede wszystkim ludzi, rozpoznanych i nierozpoznanych.'/>

                        <Hero answer='Oczywiście. 15 sierpnia nagrywali próbę odbicia Woli i połączenia się jej ze Starym Miastem. To była duża akcja. Mieliśmy skonstruowane przez nas wiązki granatów przeciwczołgowych i czekaliśmy, żeby je rzucić. Akurat przyszła ekipa operatorów. Ustawili się na pierwszym piętrze. Udało mi się rzucić pocisk i czołg został unieruchomiony. Wtedy zbiegli na dół i krzyczeli: "słuchajcie, świetne ujęcie!" Niestety, to zdjęcie gdzieś zginęło. Dużo z tych taśm zostało potem skonfiskowanych przez bezpiekę. Gdy pierwszy raz widziałem te taśmy, czekałem na ten moment. To przecież była wspaniała akcja. Czołg się zbliża, ja rzucam pociskiem i gąsienica zostaje zniszczona. Czołg odwrócił lufę i trzasnął w bramę. Ranił trzech kolegów. Padłem na ziemię ogłuszony i zupełnie zasypany pyłem sprawdzałem ręką, czy mam nogi. Udało się. Ale po drugiej stronie mój przyjaciel został ranny. Przetransportowaliśmy go do szpitala. Następnego dnia szpital został zbombardowany. Zginął. Gdybym został ranny, to też bym wtedy zginął w tym szpitalu.'/>

                        <Redactor question='To za tę akcję dostał pan Krzyż Walecznych?'/>

                        <Hero answer='Krzyż Walecznych dostałem przede wszystkim za wzięcie do niewoli 14 jeńców w budynku Poczty Głównej. Za cały szereg akcji zostałem osobiście udekorowany przez gen. Bora-Komorowskiego orderem Virtuti Militari. Po upadku Pałacu Staszica, w czasie obrony, straciłem kawałek ucha, odstrzelono mi je. Tak więc się nazbierało. Muszę powiedzieć, że to przypadek, że to akurat ja dostałem takie odznaczenia. W naszym oddziale wszyscy byli niesłychanie bojowi. To było zupełne oderwanie się od poczucia strachu. Była w nas taka wielka potrzeba walki.'/>

                        <Redactor question='Ciche bohaterki powstania, o których niewiele się pisze i mówi - kobiety. Jak ocenia pan ich rolę?'/>

                        <Hero answer='Napisałem artykuł "Nasze kochane sanitariuszki". Kobiety były absolutnie naszymi pełnoprawnymi towarzyszami broni. W największym niebezpieczeństwie znajdowały się łączniczki. Nigdy nie zapomnę pewnego zdarzenia. W pierwszych godzinach powstania, na ulicy Sienkiewicza, staliśmy po jednej stronie ulicy. Po drugiej stronie ulicy było wejście do komendy. Trzeba było dostarczyć tam meldunek, a ulica była pod ostrzałem karabinu maszynowego z Poczty Głównej. Staliśmy i zastanawialiśmy się, co zrobić. Z naprzeciwka krzyczeli do łączniczki: "Podaj, podaj. Pilnie czekamy". I ona skoczyła. Padła na środku. To była ogromna odwaga i poświęcenie. Innym przykładem jest moja żona Danusia - sanitariuszka "Jola". Ze Starówki przeciągnęła rannego, którego zdecydowano zostawić, bo nie chodził. Błagał ją: "pomóż". I ona go wzięła. Pięć kilometrów go ciągnęła w kanałach na plecach. Dwa razy się przewróciła. Potem poszedł do szpitala.'/>

                        <Redactor question='Co się z nim stało? Przeżył powstanie i wojnę?'/>

                        <Hero answer='Na wiele lat straciliśmy kontakt. Kiedy przebywaliśmy w Kanadzie, okazało się, że on też tam jest. Nasz wspólny kolega umówił nas na spotkanie w swoim mieszkaniu. Byliśmy pierwsi. Drzwi się otworzyły, on wszedł i padł przed moją żoną Danusią na kolana: "uratowałaś mi życie!" Kobiety w powstaniu były nadzwyczajne. Cechowała je niesamowita dzielność. Ja skończyłem powstanie z wręcz kultem kobiet. Wtedy wszystko było inaczej.'/>

                        <Redactor question='Decyzja o wybuchu powstania była od samego początku bardzo kontrowersyjna. Do dzisiaj są głosy za, ale też głosy przeciw. Jak Profesor ocenia powstanie z perspektywy czasu?'/>

                        <Hero answer='Przeciwnicy wydają opinie, nie znając naszego położenia. Sytuacja była taka, że powstanie wybuchło nie 1 sierpnia, a 28 lipca. 21, 22, 23 lipca pokonana armia niemiecka wycofuje się przez Warszawę. W strasznym stanie: na wózkach konnych, piechotą, niektórzy bez broni, brudni. A my wiemy, że powstanie ma wybuchnąć wtedy, kiedy Niemcy będą się wycofywać. Jednocześnie 22, 23 lipca w Radio Moskwa i w Radiostacji im. Tadeusza Kościuszki (też z Moskwy), mówią: "Warszawiacy, Armia Czerwona jest tuż obok. Ruszajcie natychmiast, tak jak zwykle biliście się, dalej się bijcie. Jeśli każdy z was zamorduje najbliższego Niemca, to my zaraz wam pomożemy". 24 lipca Warszawa jest pełna ulotek. W Lublinie utworzony jest już Komitet Wyzwolenia Narodowego. Armia Polska jest u obrzeży Warszawy. "Chwytajcie za wszystko, za siekierę, za łopatę, bijcie Niemców". A my nie mamy rozkazów. I teraz przychodzi 25, 26 lipca i co się dzieje? Już nie ma tych niemieckich wycofujących się maruderów. Pojawiają się zorganizowane oddziały i widzimy, że wraca administracja. Samochodami przyjeżdżają niemieccy urzędnicy, którzy uciekli. I jest 27 lipca, Warszawa jest pokryta megafonami, szczekaczkami. Co rusz słychać komunikaty niemieckie. 27 lipca jest taki komunikat: "Warszawa została ogłoszona fortecą. Będzie się bronić do ostatniego żołnierza". To nie było powiedziane, ale wiedzieliśmy, że chodzi o taką sytuację, jaka była w Mińsku Litewskim: ewakuacja całej ludności i miasto całkowicie zniszczone. W związku z tym rozkaz niemieckiego gubernatora Fischera: "Dnia 28 lipca o godz. 8.00 sto tysięcy ludzi od 16 do 65 roku życia ma się zgłosić na wyznaczonych specjalnie placach do budowy fortyfikacji. To jest wasz obowiązek. To rozkaz wojenny. Niewykonanie rozkazu będzie ukarane".'/>

                        <Redactor question='Ktoś się zgłosił?'/>

                        <Hero answer='Mamy 28 lipca, godz. 8.00. Nie zgłasza się prawie nikt, podobno suma summarum 28 czy 30 osób. A więc po raz pierwszy, w całej historii okupowanej Europy, wojenny rozkaz nie został wykonany. I w związku z tym 100 tys. warszawiaków zostało skazanych na karę śmierci. Taka była kara prawie za wszystko w okupowanej Polsce. I teraz był problem, co zrobić? W związku z tym dowództwo Armii Krajowej daje rozkaz: "mobilizacja!". O godzinie 20.00 wszyscy się zbierają w lokalach wyjściowych z bronią. I czekają na dalsze rozkazy. Ja wtedy byłem spalony po aresztowaniu trzech kolegów i utracie dokumentacji kompanii.'/>

                        <Redactor question='Dlaczego?'/>

                        <Hero answer='Mieszkałem w lokalu na Żoliborzu, w którym był skład broni. Dostałem polecenie, by o godz. 20.00 razem z dwoma kolegami przyjechać na róg ulic Marszałkowskiej i Sienkiewicza, gdzie na pierwszym piętrze znajduje się fabryka mundurów niemieckich (Niemców wtedy tam już nie było) i przywieźć broń. Więc ładujemy nasze pistolety maszynowe i naboje do walizek, ręczne pistolety do kieszeni i pod pas, zabieramy letnie płaszcze, wzywamy dorożkę i jedziemy do tego punktu. Przyjeżdżamy, a tam czeka już kilkadziesiąt osób. Nasz dowódca mówi: "Czekamy na rozkaz, będziemy się bić. Każdy się będzie bił tym, co ma. Jak nie ma broni, to czym się da". Całą noc czekamy i nie ma rozkazu wyjścia. A mój oddział ma rozkaz zdobycia komendy miasta. Godzina 8.00, przychodzi łączniczka Lusia, ukrywająca się Żydówka (2 tysiące Żydów ukrywających się w Warszawie brało udział w powstaniu warszawskim). Przynosi rozkaz: "schować broń, wracać do domu". Jeden z naszych kolegów mówi: "Nasze dowództwo chyba nas zdradziło. I co teraz? Niemcy jeszcze nie wykonali rozkazu zamordowania nas, bo jeszcze nie wróciła do sztabu cała żandarmeria i gestapo. Ale widać, że wraca. Jak nie dzisiaj, to jutro". Jesteśmy zrozpaczeni. 30 lipca dowiaduję się o tajnym rozkazie. Matka Olgierda Budrewicza była Niemką, lekarzem w szpitalu gestapowców. Niesłychanie antyhitlerowska, pozytywna pani. Uratowała wielu ludzi. Dostała rozkaz: "Wszyscy Niemcy (było ich dużo) dnia 2 sierpnia mają rano być przygotowani do ewakuacji. Przygotować żywność na dwa dni". Nasze dowództwo natychmiast się o tym dowiedziało. Sprawa była jasna.'/>
                    </div>
                </div>
            </div>
            <div className="slider" id="gallery">
                <div className="container">
                    <Title tit="Galeria" color="black" />
                    <Slider {...settings}>
                        <li><img src={Walka1} /></li>
                        <li><img src={Walka2} /></li>
                        <li><img src={Walka3} /></li>
                        <li><img src={Walka4} /></li>
                        <li><img src={Walka5} /></li>
                        <li><img src={Walka6} /></li>
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
