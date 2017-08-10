import React from "react";
import ReactDOM from 'react-dom';

import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import {Who} from './who.jsx';
import {Hero} from './hero.jsx';
import {Redactor} from './redactor.jsx';
import ScrollUpButton from "react-scroll-up-button";
import Slider from 'react-slick';
import Szpital1 from '../../images/szpital/szpital1.jpg';
import Szpital2 from '../../images/szpital/szpital2.jpg';
import Szpital3 from '../../images/szpital/szpital3.jpg';
import Szpital4 from '../../images/szpital/szpital4.jpg';
import Szpital5 from '../../images/szpital/szpital5.jpg';
import Szpital6 from '../../images/szpital/szpital6.jpg';

export class Hero4 extends React.Component {
  render() {
      let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    return (
        <section>
            <div className="who" id="szpital">
                <div className="container">
                    <div className="fot">
                        <Who imag="./images/Gutowska_sm.png"/>
                    </div>
                    <div className="characteristic">
                        <Title tit="Prof. Maria Gutowska" color="black"/>
                        <p>
                            ur. 1920 r., pseudonim "Mulka"
                        </p>
                        <p>
                            Była lekarką w powstańczym szpitalu „Blaszanka” na Czerniakowie. W pierwszych dniach Powstania została uwięziona przez Niemców w podziemiach Muzeum Narodowego. Po uwolnieniu pracowała najpierw w punkcie medycznym przy ul. Nowogrodzkiej, a następnie, aż do kapitulacji, leczyła rannych powstańców w szpitalu „Blaszanka”.
                        </p>
                    </div>
                </div>
            </div>

            <div className="interview" id="interview">
                <div className="container">
                    <Title tit='Wywiad' color="white"/>

                    <div className="talk">
                        <Redactor question='Jak się zaczęło dla pani powstanie?'/>

                        <Hero answer='Zaczęło się od tego, że 1 sierpnia Niemcy wzięli mnie jako zakładniczkę. O godz. 15 miałam się zgłosić na ul. Hożą do por. Bronisława Smoleńskiego „Surmy” z pięcioma wyszkolonymi przeze mnie sanitariuszkami. Stamtąd poszliśmy w miejsce, gdzie po wojnie wzniesiono gmach KC PZPR, obok Muzeum Narodowego. Przed wojną mieścił się tam budynek Wydziału Pomiarów Zarządu Miejskiego. Mieliśmy tam czekać na broń. Na miejscu zastaliśmy kilkudziesięciu chłopaków z naszej 23 kompanii batalionu „Kryski”.'/>

                        <Redactor question='Byliście kompletnie bezbronni?'/>

                        <Hero answer='Ktoś miał jednego visa, poza tym było kilka butelek z benzyną. To wszystko. W międzyczasie razem z innymi dziewczynami nastawiłam w wielkim kotle do prania bielizny mięso, które mieliśmy w zapasie na powstanie. Ostatecznie ani broni się nie doczekaliśmy, ani też nie zdążyliśmy się posilić. Wieczorem budynek otoczyli Niemcy. Z takim uzbrojeniem nie było sensu walczyć z nimi. Wyprowadzili nas na zewnątrz i ustawili nas pod ścianą...'/>

                        <Redactor question='Takie emocje chyba nigdy się nie zacierają w pamięci?'/>

                        <Hero answer='Nie sposób tego zapomnieć, to była chwila potwornego napięcia. Niemcy już się szykowali do rozstrzelania nas, ale... pojawił się jakiś oficer, który odwołał egzekucję! Okazało się, że Niemcom potrzebnych było jeszcze więcej zakładników. Zaprowadzili nas wszystkich do podziemi Muzeum Narodowego. Piwnice pełne były ludzi, potem gdzieś czytałam, że było nas tam w sumie ponad trzy tysiące osób. Ścisk niemożliwy, ja spałam na gipsowych figurkach Józefa Piłsudskiego.'/>

                        <Redactor question='Po co was tam trzymali?'/>

                        <Hero answer='Niemcy wyciągali z piwnic głównie mężczyzn i pędzili ich na barykady – jedna była na Brackiej, druga na Nowym Świecie. Jednym z zakładników był mój przyszły szwagier, którego wtedy jeszcze nie znałam. Opowiadał potem, że jak ich doprowadzono do barykady na Brackiej, to leżeli przed nimi zabici i konający, których zabrano wcześniej z piwnic Muzeum Narodowego. Nie wiedzieć czemu, Niemcy nie puścili jednak tej drugiej fali zakładników i mój szwagier przeżył. W piwnicach panował potworny ścisk, a mimo to Niemcy zaczęli nam znosić rannych z okolicy. Tylko jak my mieliśmy im pomagać, skoro nawet jedzenia nie było? Było za to potwornie gorąco i trudno się oddychało, ponieważ tuż obok nas płonęły kamienice. W takich warunkach niewiele mogłyśmy zrobić dla ciężej rannych, chociaż ludzie mieszkający po sąsiedzku bardzo nam wtedy pomagali. Przynosili do nas swoje domowe apteczki, prześcieradła, obrusy na opatrunki.'/>

                        <Redactor question='Jakie pani miała wówczas doświadczenie medyczne?'/>

                        <Hero answer='W 1944 roku miałam za sobą dwa lata medycyny (w tym rok studiów na tajnym Uniwersytecie Ziem Zachodnich), skończoną dwu i pół letnią szkołę pielęgniarską (w czasie okupacji to było maksimum, jeżeli chodzi o edukację medyczną dla Polaków), a do tego miałam za sobą staż w szpitalu w Żyrardowie, który odbyłam w latach 1939-1940. We wrześniu 1939 roku trafiło do nas przeszło tysiąc rannych z pola bitwy nad Bzurą. Od razu zostałam rzucona na głęboką wodę. Tak więc w czasie powstania miałam już spore doświadczenie w medycynie.'/>

                        <Redactor question='Jak długo była pani więziona w piwnicach Muzeum Narodowego?'/>

                        <Hero answer='Około czterech dni. Przez cały ten czas Niemcy przychodzili po kolejnych zakładników i pędzili ich na śmierć. W końcu uwolnili tylko kobiety, dzieci i starców. Kazali nam iść z białą flagą do Śródmieścia i powiedzieć, że powstańcy mają się poddać, bo inaczej Niemcy zabiją pozostałych mężczyzn. Było nas chyba z tysiąc. Musiałyśmy się pożegnać z naszymi kolegami z oddziału, to były bardzo dramatyczne chwile. Prosili nas, żeby przekazać informacje o nich ich rodzicom. Mnie poprosił o to por. „Surma”, który ostatecznie przeżył wojnę.'/>

                        <Redactor question='Jak długo zajęło pani znalezienie nowego przydziału?'/>

                        <Hero answer='Od razu zaczęłam pracę w ambulatorium na Wspólnej. Na tej samej ulicy mieszkali wtedy moi rodzice, którzy zresztą przeżyli powstanie. Pomagałyśmy na Wspólnej ludziom chorym i rannym przebywającym w kamienicach po wschodniej stronie Alej Ujazdowskich. Z uwagi na mocny ostrzał musiałyśmy biegać wykopem zrobionym w poprzek alej. Natomiast już kamienice po drugiej stronie były połączone ze sobą otworami wyrąbanymi w murach, więc nie trzeba było chodzić po ostrzeliwanych chodnikach.'/>

                        <Redactor question='Cały czas była pani sanitariuszką?'/>

                        <Hero answer='Tak, raz jeden tylko poszłam jako łączniczka. Dostałam rozkaz przedostać się z meldunkiem na Stare Miasto. To było w okolicach 8 sierpnia. Pamiętam, jak bardzo byłam zdumiona, gdy po dotarciu na Rynek Starego Miasta zobaczyłam babcie siedzące spokojnie na ławkach z dziećmi, starsze dzieciaki jeżdżące dla zabawy na rowerach. Dopiero pięć dni później rozpoczęło się tam piekło okrążenia, które trwało do końca sierpnia i zakończyło się kompletną zagładą tego rejonu miasta. W ambulatorium na Wspólnej pracowałam tylko kilka dni, ponieważ dostałam, wraz z doktorem Eugeniuszem Zarzyckim, przydział do nowo utworzonego Szpitala Polowego Nr 1 „Blaszanka” na Czerniakowie, przy ul. Przemysłowej 19. Szpital mieścił się w hali fabrycznej, gdzie przed wojną robiono konserwy rybne, stąd nazwa. Był to szpital polowy Zgrupowania Kryska. Patrząc przez dziurę między murami widziałam stamtąd stadion Legii pełen Niemców. „Blaszanka” mieściła się na pierwszej linii frontu, w związku z tym stacjonowali u nas żołnierze AK. Kiedyś nawet wybuchł u nas granat. Lekko ranny został komendant szpitala dr. Piotr Załęski, „Karolek” i jego syn. Ja byłam tylko lekko draśnięta w łydkę, ale straciłam wtedy swoją młodzieńczą wiarę, że jestem nietykalna. Co ciekawe, nasz komendant był ftyzjatrą. Dziś na tę specjalność mówi się: pulmonolog.'/>

                        <Redactor question='W szpitalu polowym jego specjalność pewnie nie na wiele mu się przydała?'/>

                        <Hero answer='To prawda. U nas była przede wszystkim chirurgia, głównie przeprowadzaliśmy amputacje rąk i nóg. Mieliśmy kilka takich operacji dziennie. Drugim lekarzem był chirurg, Eugeniusz Zarzycki ps. "Łysy". Towarzyszyłam cały czas dr „Łysemu” jako instrumentariuszka. Służbę w szpitalu pełnił jeszcze młody lekarz, 24-letni Janusz Stoczewski, „Brodzic”.'/>

                        <Redactor question='Jakie mieliście warunki?'/>

                        <Hero answer='W „Blaszance” nie było autoklawu, więc narzędzia musiałam gotować w maszynce spirytusowej. Z pobliskich aptek przysłano nam gaziki, watę, środki dezynfekcyjne i przeciwbólowe, ale w niewystarczających ilościach. Dużym problemem był brak rentgena i surowicy przeciwtężcowej. To były XIX-wieczne warunki.'/>

                        <Redactor question='Trafiało coś do was ze zrzutów?'/>

                        <Hero answer='13 września nadleciały nad nasz teren sowieckie samoloty. Zrzucili nam worki z lekami i materiałami opatrunkowymi. Wszystko to było jednak zrzucone bez spadochronów, więc w nasze ręce trafiła bezwartościowa miazga. Wcześniej Anglicy zrzucali nam pomoc, ale mało celnie – większość trafiła w ręce Niemców.'/>

                        <Redactor question='Jak wiele nauczyła się pani w czasie służby w tym szpitalu polowym? Da się to w ogóle porównać do pani stażu w szpitalu w Żyrardowie?'/>

                        <Hero answer='Już w Żyrardowie było ciężko, ale w czasie powstania było nieporównanie gorzej. To właśnie w „Blaszance” nauczyłam się, jak poprawnie przeprowadzać amputacje: jak dużo skóry trzeba zostawić nad kością, żeby po amputacji zaszyć potem odpowiednio ranę. To ja wybierałam miejsce do cięcia. Usypiałam też pacjentów.'/>

                        <Redactor question='Chloroformem?'/>

                        <Hero answer='Tak, ale nie na długo nam starczyły zapasy chloroformu. Chyba nie muszę tłumaczyć, z czym to się potem wiązało...'/>

                        <Redactor question='Jak duża była „Blaszanka”?'/>

                        <Hero answer='Myślę, że maksymalnie było u nas około dwustu pacjentów. Przy takim nawale pracy prawie nie spałam, a i tak nie dawaliśmy rady zająć się wszystkimi potrzebującymi. Ten kto tego nie przeżył, nie zrozumie czym naprawdę jest bezradność. Pamiętam, że pod koniec sierpnia pojawiły się biegunki wśród chorych i personelu. To już było prawdziwe pandemonium.'/>

                        <Redactor question='Co jeszcze robiliście w „Blaszance” oprócz amputacji?'/>

                        <Hero answer='Drugą najczęstszą operacją było usuwanie odłamków. Poza tym wielokrotnie musieliśmy zajmować się ciężkimi oparzeniami po wybuchach tzw. „krów”. Bardzo często musieliśmy również opatrywać ropiejące rany podudzi. To było charakterystyczne obrażenie u łączniczek. Brało się to stąd, że Niemcy byli na tyle perfidni, że oprócz zrzucania do kanałów granatów, wrzucali tam też zwoje drutu kolczastego...'/>

                        <Redactor question='Spotykała się pani z presją ze strony powstańców?'/>

                        <Hero answer='Szczególnie pamiętam jedną taką historię. To już było we wrześniu. Dwaj powstańcy: Tadeusz Grigo „Kur” i Tadeusz Jakubowski „Junior” przynieśli do nas ciężko rannego kolegę Zygmunta Iwanickiego „Skałę”. Dr „Łysy” stwierdził, że operacja nic już nie da. Ja jednak, widząc błagalne spojrzenia kolegów „Skały”, uprosiłam jakoś dr "Łysego", żeby mimo wszystko spróbował.'/>

                        <Redactor question='Udało się?'/>

                        <Hero answer='Nie, „Skała” zmarł na stole pomiędzy amputacją ręki a amputacją nogi. Doktor „Łysy” prawidłowo ocenił sytuację, mnie natomiast poniosły wtedy emocje.'/>

                        <Redactor question='Jak wyglądał wasz koniec? Dotrwaliście do samego końca obrony Czerniakowa?'/>

                        <Hero answer='We wrześniu, gdy powstańcy byli na Czerniakowie masakrowani i w szpitalu zaczęło brakować miejsc, część rannych umieściliśmy w sąsiadującym z „Blaszanką” kościele NMP. Kościół został jednak po kilku dniach zbombardowany, stając się w ten sposób grobem dla kilkudziesięciu naszych chorych... W związku z tym, że Niemcy byli już bardzo blisko, zapadła decyzja o ewakuacji naszego szpitala do budynków fabryki „Citroen” przy Czerniakowskiej 199. Właśnie wtedy podczas transportu chorego przeżyłam nieprawdopodobną historię. Z koleżanką sanitariuszką niosłam nosze z chorym, obok nas szedł dr „Łysy”, który był kulawy. Na wysokości skrzyżowania Czerniakowskiej i Fabrycznej na niebie nad nami pojawił się niemiecki samolot. Latał bardzo nisko, widzieliśmy twarz wychylającego się lotnika. My oczywiście mieliśmy na sobie białe fartuchy z opaskami czerwonego krzyża.'/>

                        <Redactor question='Mimo to zaatakował?'/>

                        <Hero answer='Tak, puścił w naszym kierunku serię z działka. Odruchowo położyliśmy się wszyscy na kupie na tym rannym. Zaraz zawrócił i znów zaczął do nas strzelać. Ciekawa sprawa: byliśmy widoczni jak na dłoni, a jednak nikt z nas nie został trafiony. Myślę, że ten pilot po prostu nie chciał nas trafić i tylko markował atak. Było to dla mnie paraliżujące przeżycie, ale musiałam jeszcze kilka razy przenosić tą trasą chorych tego dnia. Nawiasem mówiąc „Kryska” przyznał mi za to przenoszenie chorych Krzyż Walecznych. Potem do „Citroenki” wpadła „krowa”. Wybuchł pożar, zaczęły się palić bandaże na chorych. Trzeba było kocami gasić płonące opatrunki...'/>

                        <Redactor question='Czyli kolejna ewakuacja. Gdzie tym razem?'/>

                        <Hero answer='Do piwnic. Potem doszło przez to do epidemii tężca, bo okazało się, że przed węglem, na którym położyliśmy rannych, przechowywano tam ziemniaki... Nie mogliśmy pomóc chorym wobec braku surowicy. Myślę, że zmarła wtedy 1/3 chorych.'/>

                        <Redactor question='Jak wyglądało zajęcie szpitala przez Niemców? Wiadomo przecież, że Niemcy szczególnie okrutnie zachowywali się właśnie wobec rannych leżących w szpitalach.'/>

                        <Hero answer='15 września wpadli do nas esesmani. Doktor Przyżycki, próbował im wyjaśnić, że leżą u nas jedynie ranni cywile, ponieważ wycofujący się powstańcy zabrali swoich ludzi. Mieliśmy wtedy dwóch rannych Niemców, którym zmieniałam opatrunki. Wcześniej nasi chłopcy z AK chcieli ich zabić, ale nie pozwoliłam na to – to byli moi chorzy, więc byli pod moją ochroną. Potwierdzili, że leżą u nas sami cywile. Może dzięki temu nas wszystkich wtedy nie zabili? W każdym razie Niemcy zrobili sobie u nas w „Citroence” bazę. Przez tydzień stracili około połowy ludzi. Były dni, że po powrocie z akcji w odwecie za swoje straty wyciągali naszych rannych i ich rozstrzeliwali... 22 września skończyło się piekło - walka na Przyczółku Czerniakowskim. Nam kazano czekać w piwnicach „Citroenki”. Wreszcie 26 września Niemcy rozkazali nam wyjść z lżej rannymi. Około czterdziestu ciężko rannych musieliśmy zostawić w „Citroence”. Nie wiadomo, co się z nimi stało.'/>

                        <Redactor question='Z pani wspomnień wynika, że te dwa miesiące to autentycznie był sam pot, krew i łzy. Tylko takie ma pani wspomnienia?'/>

                        <Hero answer='Były też inne momenty, np. niezapomniany 15 sierpnia. Tak się składa, że to były też moje imieniny, dlatego tym bardziej utkwiło mi to w pamięci. Podczas mszy świętej zaśpiewaliśmy wszyscy „Boże coś Polskę” tak doniośle, że na pewno usłyszeli nas Niemcy na stadionie Legii.  Warto żyć dla takich momentów, takiej dumy z bycia Polką chyba nigdy nie czułam jak właśnie wtedy. Dlatego też nie do końca podoba mi się pomnik powstańców na placu Krasińskich. Powstańcy nie byli ludźmi, którzy jak szczury wynurzają się ruin. Proszę mi wierzyć, że to byli ludzie z wyprostowanymi kręgosłupami.'/>
                    </div>
                </div>
            </div>
            <div className="slider" id="gallery">
                <div className="container">
                    <Title tit="Galeria" color="black" />
                    <Slider {...settings}>
                        <li><img src={Szpital1} /></li>
                        <li><img src={Szpital2} /></li>
                        <li><img src={Szpital3} /></li>
                        <li><img src={Szpital4} /></li>
                        <li><img src={Szpital5} /></li>
                        <li><img src={Szpital6} /></li>
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
