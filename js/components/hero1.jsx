import React from "react";
import ReactDOM from 'react-dom';

import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import {Who} from './who.jsx';
import {Hero} from './hero.jsx';
import {Redactor} from './redactor.jsx';
import ScrollUpButton from "react-scroll-up-button";
import Slider from 'react-slick';
import Barykada1 from '../../images/barykada/barykada1.jpg';
import Barykada2 from '../../images/barykada/barykada2.jpg';
import Barykada3 from '../../images/barykada/barykada3.jpg';
import Barykada4 from '../../images/barykada/barykada4.jpg';
import Barykada5 from '../../images/barykada/barykada5.jpg';
import Barykada6 from '../../images/barykada/barykada6.jpg';

export class Hero1 extends React.Component {
  render() {
      let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    return (
        <section>
            <div className="who" id="barykada">
                <div className="container">
                    <div className="fot">
                        <Who imag="../../images/zapalowski.jpg" />
                    </div>
                    <div className="characteristic">
                        <Title tit="Tadeusz Zapałowski" color="black"/>
                        <p>
                            ur. 1926 r., pseudonim "Michał"
                        </p>
                        <p>
                             Służył w Kedywie Okręgu Warszawskiego AK, walczył w 8 kompanii batalionu „Kiliński”. W czasie Powstania Warszawskiego bronił kluczowej barykady w Alejach Jerozolimskich, która była jedynym przejściem pomiędzy północną i południową częścią Śródmieścia. Barykada, utrzymana do kapitulacji Powstania, przecinała kluczową arterię, którą Niemcy wykorzystywali do przerzutu swoich sił przez Most Poniatowskiego.
                        </p>
                    </div>
                </div>
            </div>

            <article className="interview" id="interview">
                <div className="container">
                    <Title tit='Wywiad' color="white"/>

                    <div className="talk">
                        <Redactor question='„Niech przyjadą tu, do Warszawy, i niech poznają historię powstania warszawskiego. (…) To wąskie przejście zadecydowało o kontynuacji powstania. (…) Przesmyk przez Al. Jerozolimskie wymagał ciągłej obrony, naprawy i umocnień. Jednak wola obrońców, nawet w obliczu śmierci, była niezachwiana; przejście istniało do ostatnich dni powstania” – powiedział m.in. o panu Donald Trump. Jakim cudem utrzymaliście tę barykadę do końca?'/>

                        <Hero answer='Bardzo mnie ucieszyły te słowa, ponieważ nawet w Polsce to właściwie zapomniana sprawa. Tymczasem w całej Warszawie nie było wtedy ważniejszej barykady, to ona była pod największym ostrzałem. Codziennie przeżywaliśmy tam piekło, ale nie mogliśmy poddać tego przejścia. Tylko dzięki niemu utrzymywane było bowiem połączenie między dwiema częściami powstańczej Warszawy: Śródmieściem Płd. i Śródmieściem Płn. Przecięliśmy też w ten sposób bardzo ważną dla Niemców arterię wschód-zachód, którą przerzucali oni wojska pancerne. Odkąd postawiliśmy barykadę w al. Jerozolimskich, żaden niemiecki czołg tamtędy nie przejechał. I dlatego tak bardzo chcieli nas stamtąd wyrzucić.'/>

                        <Redactor question='Ile czasu spędził pan na tym – jak to ujął Donald Trump – „przyczółku cywilizacji”?'/>

                        <Hero answer='Broniłem go od początku, czyli od 5 sierpnia aż do kapitulacji powstania. Mieliśmy mały bunkier przy bramie w Al. Jerozolimskich 22. Dyżurowaliśmy po osiem godzin, za każdym razem po trzech.'/>

                        <Redactor question='Było was tylko trzech?'/>

                        <Hero answer='Proszę jednak pamiętać, że w domu za nami przebywało w stałej gotowości jakichś trzydziestu żołnierzy. Oczywiście po drugiej stronie ulicy, pod numerem 17 również byli powstańcy.'/>

                        <Redactor question='Al. Jerozolimskie to bardzo szeroka arteria. Pod względem usytuowania wasza pozycja była naprawdę nie do pozazdroszczenia...'/>

                        <Hero answer='Faktycznie, nie wyglądało to wesoło. Byliśmy ostrzeliwani z obu stron: z zachodu Niemcy strzelali do nas z hotelu Polonia, a ze wschodu z budynku BGK.'/>

                        <Redactor question='Jak duży był ruch na tym przejściu?'/>

                        <Hero answer='Dwadzieścia cztery godziny na dobę ciągnęli tamtędy ludzie. Po obu stronach tworzyły się kolejki! Ludzie stali w nich czasem nawet po kilka godzin, żeby przejść na drugą stronę. Przechodzili tamtędy żołnierze, ranni, łączniczki, zaopatrzenie, wreszcie ludzie również w czasie powstania odwiedzali swoich bliskich w innych częściach Warszawy. Cały czas płynął tamtędy strumień ludzi, którym trzeba było zapewnić osłonę.'/>

                        <Redactor question='Skoro ta barykada była tak ważna, to – jak rozumiem – wbrew powszechnemu wyobrażeniu o powstańcach, akurat wam broni nie brakowało. Tym bardziej, że byliście przecież żołnierzami Kedywu...'/>

                        <Hero answer='Byliśmy uzbrojeni doskonale – przykładowo ja miałem pistolet maszynowy błyskawica, produkowany w podziemnym zakładzie, gdzie notabene rusznikarzem był mój ojciec. Z kolei mój serdeczny kolega z barykady, Jurek Chlistunoff, miał niemieckiego bergmana. Już tylko dwóch nas zostało z osłony barykady od naszej strony. Zazdrościłem mu tego bergmana, bo to był jednak lepszy sprzęt od mojej błyskawicy. Na szczęście mieliśmy też karabin maszynowy wymontowany z niemieckiego czołgu, który własnoręcznie unieruchomił drugi mój kolega, Tadeusz Cisowski.'/>

                        <Redactor question='Podczas walk na barykadzie?'/>

                        <Hero answer='Nie, to było jeszcze zanim barykada powstała. 2 sierpnia byliśmy w kamienicy przy placu Napoleona, dziś to plac Powstańców Warszawy. To było w trakcie natarcia na Pocztę Główną. Naraz pod naszymi oknami pojawił się niemiecki czołg. Pierwszy rzucił filipinkę właśnie Tadziu. Zrobił to genialnie – wybuch rozerwał gąsienicę. Koledzy z parteru zajęli się załogą czołgu, która postanowiła się ewakuować ze swojej maszyny. Po wszystkim wymontowaliśmy ten karabin i przenieśliśmy go na barykadę. Bardzo nam się przydała jego siła ognia.'/>

                        <Redactor question='„Noc w noc, pod ciężkim ogniem z broni maszynowej, Polacy znosili worki z piaskiem, aby bronić swojego wąskiego przejścia przez Al. Jerozolimskie. Dzień w dzień wróg je niszczył.” Dobrze to opisał Donald Trump?'/>

                        <Hero answer='Tak właśnie było: barykada cały czas była niszczona nieprzyjacielskim ogniem i cały czas trzeba było ją odbudowywać. Prezydent Trump miał świetne informacje.'/>

                        <Redactor question='Jak było na początku?'/>

                        <Hero answer='Potwornie ciężko. Najpierw trzeba było po kolei zająć kamienice na tym odcinku Alej Jerozolimskich. Wcześniej łączność między tymi dwiema objętymi powstaniem częściami Śródmieścia odbywała się za pomocą sznurka przeciągniętego na wysokości pierwszego piętra, po którym przesyłano puszki z wiadomościami. Przebiegnięcie tak szerokiej arterii było bardzo trudne z uwagi na ciągły niemiecki ostrzał. Bardzo wiele osób tam zginęło, szczególnie na początku. Ja z kolegami zająłem budynek pod nr 22. Kamienice obok były już „czyste”. Po nieparzystej stronie alej, naprzeciwko nas, akowcy ze Śródmieścia południowego również opanowali kilka budynków. Można było teraz zrobić przejście. Barykada biegła spod nr 22 do 17. Saperzy kilofami wyrąbywali przejście. Początkowo trzeba było się czołgać, żeby dostać się na drugą stronę, ale z każdym kolejnym dniem przejście było udoskonalane, umacniane, aż w końcu dwie dorosłe osoby mogły się minąć i przez większość odcinak mogły iść wyprostowane.'/>

                        <Redactor question='Budowniczy cały czas byli jednak ostrzeliwani. Co robiliście, żeby ich osłonić?'/>

                        <Hero answer='Szczególnie silny był niemiecki ogień z budynku pod nr 25, w którym okopali się Niemcy z Ordnungspolizei i Sicherheitspolizei. W nocy z 6/7 sierpnia udało nam się go zdobyć. Moja drużyna wspomagała kolegów z południowej strony alej. Razem opanowaliśmy ten budynek. To wtedy zostałem ranny po raz pierwszy, ale było to tylko lekkie zranienie.'/>

                        <Redactor question='Dlaczego wykopanie rowu przez aleje nie było takie proste, jak to się może nam dziś wydawać?'/>

                        <Hero answer='Pierwszą przeszkodą były tory tramwajowe. Był to jednak niewielki kłopot w porównaniu do drugiego problemu: tunelu kolei średnicowej, który biegł akurat pod alejami. W związku z tym na tym odcinku nie dało się tak po prostu wykopać głębokiego rowu. Poza tym baliśmy się, że Niemcy mogą wykorzystać ten tunel.'/>

                        <Redactor question='Żeby was wysadzić?'/>

                        <Hero answer='Otóż to. Dlatego to nasi saperzy dokonali w końcu kontrolowanego wybuchu i zniszczyli tunel pod nami. W ten sposób udało się pogłębić rów. Barykada cały czas pięła się w górę. Do budowy służyły płyty chodnikowe, worki z piaskiem i kawałki blachy. Wykorzystaliśmy też w tym celu niemieckie pojazdy, które zniszczyliśmy. Jednym z nich był goliat, czyli zdalnie sterowany pojazd gąsienicowy wypełniony materiałami wybuchowymi. Kolega z barykady przeciął kabel zanim Niemcy zdążyli wysadzić goliata i w ten sposób mieliśmy do dyspozycji kupę żelastwa i mnóstwo materiału wybuchowego. Najgorsze były właśnie ataki czołgów. Niemcy byli na tyle perfidni, że czasem otaczali swoje pojazdy pancerne żywymi tarczami.'/>

                        <Redactor question='I co wtedy?'/>

                        <Hero answer='Trzeba było tak walczyć, tak celować, żeby nie zrobić krzywdy tym biednym zakładnikom. To były potworne sytuacje...'/>

                        <Redactor question='Czym walczyliście z czołgami?'/>

                        <Hero answer='Początkowo głównie filipinkami, ale szybko doszła specjalistyczna broń z zrzutów. Pewnego razu w nocy słyszymy nad sobą warkot samolotu. Ależ trafił ze zrzutem! Za chwilę widzę, jak jakieś 30 metrów od barykady spada na spadochronie zasobnik. Poszedłem w tamto miejsce wraz z kolegą. Chociaż właściwie nie poszedłem, tylko przeczołgałem się. Przetoczyliśmy zasobnik na barykadę, chyba z 50 kg ważył. W środku był PIAT – brytyjski granatnik przeciwpancerny wraz z kilkoma pociskami. Poza tym kilka sztuk broni krótkiej, jakieś papiery, a nawet kawa i czekolada. Wszystko nam odebrali, tylko PIATA wyrwaliśmy dla siebie.'/>

                        <Redactor question='Karabiny przeciwpancerne?'/>

                        <Hero answer='Ruscy nam to zrzucali. Tylko że z tymi ich zrzutami było więcej kłopotów niż pożytku. Te ich kukuruźniki zrzucały zaopatrzenie bez spadochronów. Zrzucali nam np. worki z amunicją do pepeszy, których my nie używaliśmy. Pamiętam też, jak zrzucili karabin przeciwpancerny z jednym pociskiem, albo przeterminowane o kilka lat konserwy, który i tak upadając na ziemię roztrzaskiwały się.'/>

                        <Redactor question='Cały czas bronił pan barykady?'/>

                        <Hero answer='Nie, w międzyczasie byliśmy angażowani do różnych innych akcji. Najgoręcej było w nocy z 31 sierpnia na 1 września, gdy chcieliśmy pomóc żołnierzom próbującym wydostać się ze Starego Miasta do Śródmieścia. Uderzyliśmy wtedy na Niemców stacjonujących w Ogrodzie Saskim. Dostałem przy tej okazji w walce wręcz kolbą w twarz. Niemcy byli zbyt silni i nie byliśmy w stanie pomóc akowcom ze Starego Miasta. Pod koniec tej akcji razem z kolegą Stefanem Jędrzejczakiam „Gałgankiem” zostaliśmy odcięci od reszty oddziału i schowaliśmy się w palmiarni. Proszę sobie wyobrazić, że w środku znaleźliśmy... panzerfaust. Obok nas stanęło akurat działo samobieżne. Nie mieliśmy pojęcia jak obsługuje się ten wihajster. Po omacku majstrowaliśmy przy panzerfauście i w pewnej chwili jakoś odpaliliśmy pocisk, który trafił w gąsienicę. Naraz ogień, krzyki! Niemcy zorientowali się skąd został wystrzelony pocisk i pokryli budynek palmiarni ogniem. Leżeliśmy tam cały dzień. Dopiero następnej nocy udało nam się wrócić do swoich. Poza tym w dniach 19 i 20 sierpnia braliśmy udział w ataku na gmach PAST-y. Ja akurat nie walczyłem wtedy bezpośrednio, ponieważ zabezpieczaliśmy zaplecze tego gmachu. Z kolei któregoś dnia w kamienicy na rogu ul. Zgoda i Złotej zlikwidowaliśmy gniazdo tzw. gołębiarzy, czyli snajperów. Pojmaliśmy wtedy dwóch Niemców i udało się zabezpieczyć kilka sztuk broni długiej z lunetami. Jeńców przekazaliśmy Państwowemu Korpusowi Bezpieczeństwa. Nie wiem, co się z nimi później stało.'/>

                        <Redactor question='Jak pan wspomina los niemieckich jeńców z czasów powstania?'/>

                        <Hero answer='Różnie to wyglądało. Nigdy nie zapomnę, jak zdobyliśmy siedzibę Sonderdienstu przy ul. Moniuszki. To było 2 sierpnia. W tej formacji służyli sami bandyci, to było takie drugie SS.  Wyprowadziliśmy stamtąd około 20 Niemców. Doprowadziliśmy ich na ul. Jasną do kwatery Antoniego Chruściela „Montera”.'/>

                        <Redactor question='Co ich czekało?'/>

                        <Hero answer='Śmierć, ale to nie my mieliśmy wykonać wyrok. Niemcy pobledli, nie widać było już ich buty, jak zorientowali się, co ich czeka. Wtedy przykrą rzecz przeżyłem. Jeden z Niemców poprosił mnie, żebym do niego podszedł. Dał mi swój zegarek i poprosił, żeby przekazać go ojcu mieszkającemu w Gdańsku. Ten Niemiec nazywał się Bruno Schneider, jego ojciec był kolejarzem.'/>

                        <Redactor question='Co pan z tym zrobił?'/>

                        <Hero answer='Zegarek szybko straciłem, bo mi go po wojnie Ruscy zabrali. Zresztą mój własny zegarek też mi wtedy ukradli. Na ślad tego ojca trafiłem lata po wojnie, podczas podróży po Zachodzie. Jednak w ostatniej chwili wycofałem się, nie byłem w stanie rozmawiać z tym człowiekiem. Bo co ja właściwie miałem mu powiedzieć?'/>

                        <Redactor question='Co się stało z pańską rodziną w czasie powstania?'/>

                        <Hero answer='Rodzice mnie pobłogosławili przed wyjściem na powstanie, siostra mnie ucałowała. Wszyscy oni zostali niedługo potem zamordowani. Ojciec pierwszy, 3 sierpnia podczas walk ulicznych, natomiast mama i siostra zostały zamordowane 6 września w naszym własnym domu na Powiślu. Został mi tylko starszy brat, który również walczył w powstaniu i przeżył wojnę.'/>

                        <Redactor question='Co ciekawe, pańska służba powstańcza wcale nie skończyła się dla pana 2 października.'/>

                        <Hero answer='To mało znana sprawa. Po kapitulacji mój oddział nie poszedł od razu do niewoli. Zostaliśmy przemianowani na tzw. kompanię osłonową. Dostałem do pary pewnego starego Niemca i chodziłem z nim od mieszkania do mieszkania, od gruzowiska do gruzowiska i szukaliśmy pozostałej ludności cywilnej. O dziwo, to był bardzo porządny człowiek. Traktował mnie jak syna. Raz nawet, jak mój kolega został postrzelony i pilnie potrzebowaliśmy gipsu, to ten Niemiec zaprowadził mnie na Dworzec Główny, gdzie było pełno Niemców, do lekarza i załatwił to, co było potrzebne.'/>

                        <Redactor question='Dalej był obóz w Ożarowie?'/>

                        <Hero answer='Tak, 10 października poszedłem do niewoli. Ale szybko uciekłem z obozu i poszedłem do partyzantki. Najpierw na kielecczyźnie, potem na zamojszczyźnie byłem w ROAK. Broń ostatecznie złożyłem w sierpniu 1945 roku.'/>

                        <Redactor question='Trzy miesiące po wojnie...'/>

                        <Hero answer='Ale przez ten czas nie strzelałem się z nikim. Być może zostałbym w lesie dłużej, ale mój dowódca mówił, że jestem zbyt młody na partyzantkę, żebym poszedł do szkoły i spróbował nadrobić stracony czas. I tak właśnie zrobiłem.'/>
                        </div>
                </div>
            </article>
            <div className="slider" id="gallery">
                <div className="container">
                    <Title tit="Galeria" color="black" />
                    <Slider {...settings}>
                        <li><img src={Barykada1} /></li>
                        <li><img src={Barykada2} /></li>
                        <li><img src={Barykada3} /></li>
                        <li><img src={Barykada4} /></li>
                        <li><img src={Barykada5} /></li>
                        <li><img src={Barykada6} /></li>
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
