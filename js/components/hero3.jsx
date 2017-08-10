import React from "react";
import ReactDOM from 'react-dom';

import {Footer} from './footer.jsx';
import {Title} from './title.jsx';
import {Who} from './who.jsx';
import {Hero} from './hero.jsx';
import {Redactor} from './redactor.jsx';
import ScrollUpButton from "react-scroll-up-button";
import Slider from 'react-slick';
import Starowka1 from '../../images/starowka/starowka1.jpg';
import Starowka2 from '../../images/starowka/starowka2.jpg';
import Starowka3 from '../../images/starowka/starowka3.jpg';
import Starowka4 from '../../images/starowka/starowka4.jpg';
import Starowka5 from '../../images/starowka/starowka5.jpg';
import Starowka6 from '../../images/starowka/starowka6.jpg';

export class Hero3 extends React.Component {
  render() {
      let settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
      }
    return (
        <section>
            <div className="who" id="starowka">
                <div className="container">
                    <div className="fot">
                        <Who imag="./images/Likiernik.jpg"/>
                    </div>
                    <div className="characteristic">
                        <Title tit="Stanisław Likiernik" color="black" />
                        <p>
                            ur. 1923 r., pseudonim "Stach"
                        </p>
                        <p>
                            Był żołnierzem Kolegium A Kedywu Okręgu Warszawskiego AK. W czasie okupacji dodatkowym zagrożeniem dla Stanisława Likiernika było jego żydowskie pochodzenie. Podczas Powstania Warszawskiego walczył w elitarnym Zgrupowaniu Radosław. Brał udział w starciach m.in. na Woli i Starym Mieście. Po wojnie wyjechał na stałe do Francji.
                        </p>
                    </div>
                </div>
            </div>

            <div className="interview" id="interview">
                <div className="container">
                    <Title tit='Wywiad' color="white" />

                    <div className="talk">
                        <Redactor question='Wielokrotnie podkreślał pan, że największą tragedią powstania było to, że powstańcy nie mieli wystarczającej ilości broni. Także dlatego, że 7 lipca 1944 r., na miesiąc przed jego wybuchem, z Warszawy wywieziono na Wschód broń - 900 "błyskawic" z amunicją.'/>

                        <Hero answer='Dokładnie nie wiem, jak to wyglądało, ale nawet jakby jej nie wywieziono, uzbrojenie było niewystarczające. Nasz oddział miał trochę broni zdobycznej, m.in. w akcji na "Panienkę", ale to było 10 karabinów maszynowych. To nie było dobre na czołgi albo na zdobywanie szkoły, w której byli niemieccy żandarmi, uzbrojeni po zęby. Niektóre zadania, jakie przed nami stawiano, były niewykonalne, jak np. utrzymanie trasy wschód-zachód, mostu Kierbedzia. To było marzenie ściętej głowy, że tam wytrwamy i zatrzymamy całe siły niemieckie, które chciały tamtędy przejść.'/>

                        <Redactor question='A jednak powstanie trwało bardzo długo, aż 63 dni, choć w zamyśle dowódców opór miał potrwać tylko 2-3 dni.'/>

                        <Hero answer='Gdyby Niemcy mieli do dyspozycji takie siły jak w Stalingradzie, nie wytrwalibyśmy tak długo. Ludzie nawet bezbronni dzielnie walczyli przeciwko Niemcom. Ale to, co było w Śródmieściu, to nie było to samo, co na Starym Mieście i jeszcze co innego niż na Czerniakowie. Jak przedzieraliśmy się do Śródmieścia, Niemcy mieli się rozstąpić jak Morze Czerwone, ale nie udało się im tego wytłumaczyć. Wielu zabitych było przy placu Bankowym, nam się udało, bo szliśmy górą przez Ogród Saski. Uratowały nas zdobyte 1 sierpnia na Stawkach niemieckie panterki. Kiedy zatrzymał nas niemiecki wartownik naprzeciwko Pasty, przy Zielnej czy Marszałkowskiej i poprosił o hasło, uwierzył, że idziemy na Polaków, a hasło jest w drugą stronę. Jak dotarliśmy do Śródmieścia tam wciąż stały domy, podczas gdy na Starym Mieście był już tylko gruz do kolan, wszystko rozbite w pył. Dla nas to był szok.'/>

                        <Redactor question='Musiały być momenty, kiedy miał pan nadzieję na sukces powstania.'/>

                        <Hero answer='Zdobycie koszarów SS i składów różnych materiałów na Stawkach pierwszego dnia powstania to był jeden z momentów egzaltujących. Później, jak przechodziliśmy ze Stawek na Wolę, obok garbarni, w której pracowałem w 1943 r., jeden z robotników mnie rozpoznał. Zobaczyli Wojsko Polskie, patrzyli na nas z zachwytem, byłem taki dumny! Na Woli była eksplozja radości. Entuzjazm ludności był niesamowity. Kolejną wspaniałą chwilą było, kiedy atakowaliśmy koszary żandarmerii przy szpitalu św. Zofii, budynek był otoczony murem, który wysadzaliśmy, a wtedy nagle ktoś zaczął grać na harmonii. To było niesamowite. Wtedy na początku wszystko było jeszcze jakoś skoordynowane.'/>

                        <Redactor question='Zaraz potem został pan po raz pierwszy ranny.'/>

                        <Hero answer='Wylądowałem w szpitalu w budynku sądów na Lesznie. Miałem w plecach odłamki od wybuchu granatu. Kawałki cienkiej blachy weszły mi w skórę, to było bardzo nieprzyjemne, w nodze miałem ranę na wylot. Lekarz operował mnie bez znieczulenia, cztery dziewczyny mnie trzymały, a ja kląłem jak dorożkarz, potem przepraszałem te dziewczyny i tak w kółko, ale to mi pomagało. Do szpitala trafiłem w pięknym mundurze, ale wszystko ze mnie zdjęto i potem leżałem zupełnie nago. Potem jedna z pielęgniarek mnie rozpoznała, twierdziła, że tańczyliśmy razem na potańcówce.'/>

                        <Redactor question='Dzień później ta dziewczyna uratowała panu życie.'/>

                        <Hero answer='Kiedy Niemcy sforsowali obronę Woli i ruszali na Śródmieście, razem z koleżanką złapały mnie na nosze i przeniosły trzy kilometry przez barykady, pod ostrzałem, do Szpitala Maltańskiego. Gdybym tam został pół godziny dłużej, Niemcy by mnie wykończyli. Jednym słowem trzeba tańczyć, bo tańce mogą uratować życie. W życiu miałem więcej szczęścia niż rozumu.'/>

                        <Redactor question='Wielokrotnie wychodził pan cało z dramatycznych sytuacji.'/>

                        <Hero answer='Pewnego razu z fałszywą kenkartą, którą wyrobiłem dla matki wsiadłem do tramwaju. Wagon był zupełnie pusty, bo trwała łapanka, ale ja tego nie zauważyłem, dopiero później dostrzegłem Niemców, którzy zatrzymywali ruch. Wrzuciłem kopertę z kenkartą pod ławkę, żeby jej nie znaleźli, a wtedy motorniczy przyspieszył, tak, że Niemcy odskoczyli na bok i zawiózł mnie na pl. Narutowicza. Znów fuksem trafiłem na odważnego człowieka, który skapował się, że coś jest nie tak.'/>

                        <Redactor question='Na Starym Mieście był pan świadkiem straszliwej masakry na ul. Kilińskiego. W wyniku wybuchu niemieckiego "konia trojańskiego", małego czołgu wypełnionego ładunkami wybuchowymi, zginęło 300 osób. W swoich wspomnieniach stwierdził pan, że kiedy jest pytany o sens powstania, widzi pan przed oczami właśnie tę tragedię.'/>

                        <Hero answer='Byłem, że tak powiem, na pierwszym planie, kiedy to się stało. Jak tylko zacząłem chodzić, dokuśtykałem się ze szpitala Maltańskiego na Stare Miasto do szpitala urządzonego na rogu Długiej i Kilińskiego. Wcześniej musiałem sobie zorganizować jakąś garderobę, bo wciąż byłem nagi. Chodziłem w samym kocu po szpitalu, zapytałem siostrę, czy może mi przynieść spodnie, koszulę i buty, a ona odburknęła, żebym jej nie zawracał głowy. No więc rozchyliłem koc i pytam, czy tak mam iść. Zaraz ubranie się znalazło. 11 sierpnia poszedłem na Stare Miasto, dotarłem do jeszcze pustego szpitala, zaraz obstąpiły mnie pielęgniarki.'/>

                        <Redactor question='Dwa dni później powstańcy zdobyli czołg, który okazał się pułapką.'/>

                        <Hero answer='Leżałem na łóżku, wtem słyszę olbrzymi huk, tynk spadł mi na głowę. Ten czołg wybuchł dosłownie pod moim oknem. To, co widziałem było tak straszliwe, że nigdy tego nie opowiadam. Koszmar, wszędzie szczątki ludzkie, na balkonach, oknach, ścianach, płaty mięsa, ludzie bez rąk i nóg, i jakiś mężczyzna wołający: "Gdzie jest moja córka?".'/>

                        <Redactor question='Na Starym Mieście, tak doświadczona ludność cywilna, na widok powstańców nie reagowała już tak pozytywnie jak to miało miejsce na początku, na Woli. To musiało podkopywać morale.'/>

                        <Hero answer='Przechodziliśmy z jednego domu do drugiego przez wypalone mieszkania, między którymi były przebite ściany, zamiast górą, gdzie leciały bomby. Starałem się nie schodzić do piwnic, bo cywile krzyczeli: "Wariaci, durnie, coście najlepszego zrobili". Tam był tłok nie do wytrzymania, na szczęście było co jeść, bo były olbrzymie ilości jedzenia ze Stawek, z magazynów, które zdobyliśmy pierwszego dnia. Pamiętam walki w okolicach szpitala dla obłąkanych na Bonifraterskiej, róg Konwiktorskiej. Pacjenci powydostawali się ze swoich pokoi, wałęsali się w białych koszulach, jak jakieś zjawy z horroru. Niemcy strzelali do nich, niektórzy byli ranni, wyli. Ci nienormalni ludzie także trafiali do piwnic. To było straszne, co cywile tam przeżywali, to nie miało nic wspólnego z tym, czego my doświadczaliśmy, bo my przynajmniej się broniliśmy, a oni siedzieli i czekali. Wycieńczeni.'/>
                    </div>
                </div>
            </div>

            <div className="slider" id="gallery">
                <div className="container">
                    <Title tit="Galeria" color="black" />
                    <Slider {...settings}>
                        <li><img src={Starowka1} /></li>
                        <li><img src={Starowka2} /></li>
                        <li><img src={Starowka3} /></li>
                        <li><img src={Starowka4} /></li>
                        <li><img src={Starowka5} /></li>
                        <li><img src={Starowka6} /></li>
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
