import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'

import { adminActions } from './store/actions/adminActions'
import { footerActions } from './store/actions/footerActions'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [state, setState] = useState([
    {
      id: new Date().getTime(),
      tag:"logo",
      name:"Nazwa Firmy",
      image:"https://autogaz.bzdrive.com/images/logo/lineLogo-R-light-2.png"
    },
    {
      tag:"menu", to:"/", txt:"Uslugi",
      header:[
        {
          tag:"slider",
          images: [
            {
              txt:"Stacja kontroli pojazdów",
              src:"https://autogaz.bzdrive.com/images/slider/stacja-kontroli-pojazdow-wejherowo.jpg"
            },
            {
              txt:"Montaż instalacji gazowych LPG",
              src:"https://autogaz.bzdrive.com/images/slider/f170edbf843e293379c3.jpg"
            },
            {
              txt:"Autoryzowany serwis STAG",
              src:"https://autogaz.bzdrive.com/images/slider/bf0356580be9fe620fb6.jpg"
            },
            {
              txt:"Instalacje gazowe do samochodów osobowych, terenowych i dostawczych wszystkich marek",
              src:"https://autogaz.bzdrive.com/images/slider/instalacje-lpg-wejherowo.jpg"
            },
            {
              txt:"Profesjonalna diagnostyka komputerowa",
              src:"https://autogaz.bzdrive.com/images/slider/860dbc80788dcc103c99.png"
            },
            {
              txt:"Serwis klimatyzacji samochodowej",
              src:"https://autogaz.bzdrive.com/images/slider/6f2123e952542f94637a.jpg"
            }
          ]
        }
      ],
      subMenu:[
        {
          tag:"theme", to:"/repairs", txt:"Naprawy mechaniczne",
          content:[
            {
              tag:"h1",
              txt:"Szanowni Państwo"
            },
            {
              tag:"p",
              txt:"Ponad 10-letnie doświadczenie w branży instalacji gazowych pozwala nam zagwarantować pełen profesjonalizm i najwyższą jakość usług. Systematyczne szkolenia i egzaminy zapewniają wysokie kwalifikacje montażystów. Nasz warsztat jest wyposażony w profesjonalne narzędzia i urządzenia do montażu oraz serwisu instalacji LPG. Jednocześnie zapewniamy naprawy mechaniczne samochodów osobowych, terenowych i dostawczych wszystkich marek. Zapewniamy bezpłatne auto zastępcze."
            },
            {
              tag:"p",
              txt:"Ogólnopolska gwarancja zapewnia Państwu komfort korzystania z ponad 180 serwisów STAG w całej Polsce. Przedłużona gwarancja daje możliwość bezpłatnej naprawy usterek, nielimitowaną liczbę napraw oraz wymianę sterownika w przypadku braku możliwości jego naprawy."
            },
            {
              tag:"p",
              txt:"Autoryzowany serwis STAG to najlepszy wybór."
            },
            {
              tag:"img",
              width:20,
              src:"https://autogaz.bzdrive.com/images/warranty.png"
            },
            {
              tag:"p",
              txt:"Zapewniamy Państwu również kompleksową obsługę układu klimatyzacji: naprawy mechaniczne oraz diagnostyka i serwis w samochodach wszystkich marek."
            },
            {
              tag:"p",
              txt:"Serwisujemy także innych producentów, tj. KME, AEB, BRC, AG Centrum, Elpigaz i inni. Na życzenie Klienta jesteśmy w stanie zamontować instalacje wymienionych firm. Używamy jedynie znanych i atestowanych przez TDT zbiorników: Tytangaz, Stako, GZWM, Bormech. Zapewniamy wysoką jakość montażu, estetykę wykonania oraz profesjonalny serwis instalacji LPG różnych firm w konkurencyjnych cenach."
            },
            {
              tag:"p",
              txt:"Zapraszamy do współpracy."
            },
            {
              tag:"ul",
              txt:"Naprawy mechaniczne",
              li: [
                "wymiana układów rozrządu",
                "naprawy silnika",
                "wymiana sprzęgieł",
                "wymiana elementów sterowania",
                "wymiana amortyzatorów",
                "wymiana wahaczy",
                "wymiana łożysk i piast",
                "naprawa układu kierowniczego",
                "wymiana klocków hamulcowych",
                "wymiana tarcz hamulcowych",
                "wymiana szczęk",
                "naprawa układu wydechowego"
              ]
            }
          ]
        },
        {
          tag:"theme", to:"/convergence", txt:"Zbieznosc",
          content:[
            {
              tag:"p",
              txt:"Cos tam na temat zbieznosci..."
            }
          ]
        },
        {
          tag:"theme", to:"/conditioning", txt:"Serwis kimatyzacji",
          content:[
            {
              tag:"p",
              txt:"Warsztat AUTO-GAZ M.A.K. oferuje Państwu kompleksową obsługę w zakresie serwisowania, naprawy oraz przeglądu układów klimatyzacji w samochodach osobowych i terenowych. Bogate doświadczenie merytoryczne, jak i praktyczne pozwala świadczyć usługi na najwyższym poziomie."
            },
            {
              tag:"p",
              txt:"Jeżeli Państwa klimatyzacja działa nieprawidłowo (ponieważ w jej układzie jest zbyt mała/duża ilość czynnika chłodzącego lub brakuje oleju), możemy Państwu w tym pomóc."
            },
            {
              tag:"p",
              txt:"Wykonywanie corocznych przeglądów gwarantuje długoletnią pracę bez większej ingerencji w układ, dlatego zachęcamy do ich przeprowadzania."
            },
            {
              tag:"wrapper",
              itemWidth:45,
              items: [
                {
                  tag:"ul",
                  txt:"Podstawowy pakiet serwisowy obejmuje następujące czynności:",
                  li: [
                    "kontrola temperatury chłodzenia przed przeglądem",
                    "wizualna kontrola przewodów",
                    "sprawdzenie zużycia paska klinowego",
                    "podciśnieniowe sprawdzenie szczelności klimatyzacji",
                    "wymiana czynnika chłodzącego R-134a",
                    "dopełnienie czynnikiem w przypadku stwierdzenia ubytku (bezpłatne pierwsze 150g)",
                    "kontrola lub wymiana filtra przeciwpyłowego (koszt filtra nie jest zawarty w cenie)",
                    "odgrzybianie metodą ozonowania",
                    "końcowy pomiar ciśnień",
                    "kontrola temperatury chłodzenia po przeglądzie"
                  ]
                },
                {
                  tag:"ul",
                  txt:"Pakiet zaawansowany obejmuje dodatkowo:",
                  li: [
                    "osuszenie układu",
                    "wprowadzenie czynnika UV umożliwiającego lokalizację nieszczelności"
                  ]
                },
                {
                  tag:"ul",
                  txt:"Serwis klimatyzacji",
                  li: [
                    "diagnostyka",
                    "napełnianie czynnikiem R-134a",
                    "naprawa układu",
                    "odgrzybianie klimatyzacji ozonem"
                  ]
                }
              ]
            },
            {
              tag:"img",
              width:50,
              src:"https://autogaz.bzdrive.com/images/klima.png"
            }
          ]
        },
        {
          tag:"theme", to:"/tireservice", txt:"Serwis ogumienia",
          content:[
            {
              tag:"p",
              txt:"Cos tam na temat ogumienia..."
            }
          ]
        },
        {
          tag:"theme", to:"/electrician", txt:"Elektryka samochodowa",
          content:[
            {
              tag:"ul",
              txt:"Nasza firma zajmuje się montażem",
              li: [
                "haków holowniczych",
                "czujników parkowania",
                "auto alarmów"
              ]
            },
            {
              tag:"ul",
              txt: "Diagnostyka komputerowa",
              li: [
                "posiadamy profesjonalny tester diagnostyczny do pojazdów z europy, azji i USA",
                "możliwość wydruku kodów błędu, parametrów i wykresów",
                "możliwość obserwacji parametrów rzeczywistych na wykresach oraz możliwość ich nagrywania",
                "pełny podgląd parametrów rzeczywistych z możliwością zapisania stanu aktualnego oraz nagrywania ich zmian",
                "pełny opis kodu błędu z możliwością wykasowania",
                "mnóstwo funkcji specjalnych w tym kodowania wtryskiwaczy, kalibracje, regeneracje filtrów cząstek stałych i wiele innych",
                "możliwość przetestowania/przesterowania większości podzespołów (pompy, wtryskiwacze, zawory, cewki, etc.)"
              ]
            }
          ]
        },
        {
          tag:"theme", to:"/doortodoor", txt:"Usluga Door-to-Door",
          content:[
            {
              tag:"p",
              txt:"Door to door, to usługa polegająca na zleceniu naprawy pojazdu  bez konieczności udawania się  do punktu serwisowego."
            },
            {
              tag:"p",
              txt:"Samochód odbierany jest przez mechanika lub pracownika serwisu i po wykonanej naprawie dostarczany na miejsce, z którego był odebrany. Auto może być dostarczone również pod inny adres, wskazany przez klienta. Natomiast płatność po wykonanej usłudze może być zrealizowana w formie bezgotówkowej - przelewem. W przypadku naprawy klient musi zgłosić awarię lub konieczność przeprowadzenia przeglądu  telefonicznie lub online, np. wypełniając formularz na stronie internetowej lub pisząc maila."
            },
            {
              tag:"p",
              txt:"Jest to usługa z pewnością bardzo wygodna, oszczędzająca mnóstwo czasu, ale również, w obecnej sytuacji, o wiele bardziej bezpieczna, dzięki ograniczeniu kontaktu do niezbędnego minimum lub jego eliminacji."
            },
            {
              tag:"p",
              txt:"Warto nadmienić, że dla mechanika wracającego autem klienta do warsztatu jest to okazja do przeprowadzenia wstępnej diagnostyki samochodu. Auto może zostać również dostarczone do serwisu na lawecie."
            }
          ]
        },
        {
          tag:"theme", to:"/replacement", txt:"Samochod zastepczy",
          content:[
            {
              tag:"p",
              txt:"Cos tam na temat Samochodu zastepczego..."
            }
          ]
        },
        {
          tag:"theme", to:"/glass", txt:"Glass Service",
          content:[
            {
              tag:"p",
              txt:"Cos tam na temat Glass Service..."
            }
          ]
        },
        {
          tag:"theme", to:"/price", txt:"Cennik",
          content:[
            {
              tag:"table",
              lines: [
                {col1:{txt:"usługa", width:40}, col2:{txt:"cena", width:10}},
                {col1:"Podstawowa diagnostyka silnika", col2:"od 50,00 zł"},
                {col1:"Wymiana oleju silnikowego", col2:"od 70,00 zł"},
                {col1:"Wymiana klocków hamulcowych", col2:"od 70,00 zł"},
                {col1:"Wymiana tarcz hamulcowych", col2:"od 150,00 zł"},
                {col1:"Wymiana amortyzatorów", col2:"od 100,00 zł"},
                {col1:"Wymiana płynu chłodzącego", col2:"od 50,00 zł"},
                {col1:"SWymiana płynu hamulcowego", col2:"od 120,00 zł"},
                {col1:"Wymiana paska rozrządu", col2:"od 120,00 zł"},
                {col1:"Podłączenie urządzenia, sprawdzenie ilości czynnika w układzie", col2:"150,00 zł"},
                {col1:"Każde 100g uzupełnienia czynnika (R-134a)", col2:"35,00 zł"},
                {col1:"Naprawa układu klimatyzacji", col2:"od 50,00 zł"},
                {col1:"Dezynfekcja układu", col2:"od 50,00 zł"},
                {col1:"Wymiana filtra kabinowego", col2:"od 10,00 zł"},
                {col1:"Montaż haka holowniczego", col2:"od 350,00 zł"},
                {col1:"Montaż świateł dziennych", col2:"od 200,00 zł"},                
                {col1:"Sprawdzenie auta przed zakupem", col2:"od 150,00 zł"},
                {col1:"Zbieżność", col2:"od 90,00 zł"},
                {col1:"Geometria", col2:"od 150,00 zł"}
              ]
            }
          ]
        }
      ]
    },
    {
      tag:"menu", to:"/bmw", txt:"Serwis BMW",
      subMenu:[
        {
          tag:"theme", to:"/bmw_repairs", txt:"Naprawy mechaniczne",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_convergence", txt:"Zbieznosc",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_conditioning", txt:"Serwis kimatyzacji",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_tireservice", txt:"Serwis ogumienia",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_electrician", txt:"Elektryka samochodowa",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_doortodoor", txt:"Usluga Door-to-Door",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_replacement", txt:"Samochod zastepczy",
          content:[]
        },
        {
          tag:"theme", to:"/bmw_glass", txt:"Glass Service",
          content:[]
        }
      ]
    },
    {
      tag:"menu", to:"/gas", txt:"Instalacje gazowe",
      subMenu:[
        {
          tag:"theme", to:"/gas_offer", txt:"Oferta",
          content:[
            {
              tag:"wrapper",
              itemWidth:45,
              items: [
                {
                  tag:"ul",
                  txt:"Nasza firma zajmuje się montażem i serwisem instalacji gazowych wszystkich marek do samochodów osobowych, terenowych oraz dostawczych",
                  li: [
                    "gwarancyjny i pogwarancyjny",
                    "wymiana filtrów",
                    "sprawdzanie szczelności",
                    "kalibracja komputerowa",
                    "naprawa/wymiana podzespołów gazowych"
                  ]
                }
              ]
            },
            {
              tag:"wrapper",
              itemWidth:15,
              items: [
                {
                  tag:"img",
                  width:10,
                  src:"https://autogaz.bzdrive.com/images/service/stag.png"
                },
                {
                  tag:"img",
                  width:10,
                  src:"https://autogaz.bzdrive.com/images/service/ag.png"
                },
                {
                  tag:"img",
                  width:10,
                  src:"https://autogaz.bzdrive.com/images/service/landirenzo.png"
                },
                {
                  tag:"img",
                  width:10,
                  src:"https://autogaz.bzdrive.com/images/service/brc.png"
                },
                {
                  tag:"img",
                  width:10,
                  src:"https://autogaz.bzdrive.com/images/service/kme.png"
                }
              ]
            },
            {
              tag:"h1",
              txt:"Instalacje gazowe LPG"
            },
            {
              tag:"theme",
              txt:"Cennik instalacji gazowych"
            },
            {
              tag:"table",
              lines: [
                {col1:{txt:"usługa", width:40}, col2:{txt:"cena", width:10}},
                {col1:"Montaż instalacji LPG ( sekwencja )", col2:"od 2400,00 zł"},
                {col1:"Montaż instalacji LPG ( II generacji )", col2:"od 1800,00 zł"},
                {col1:"Wymiana zbiornika LPG", col2:"od 580,00 zł"},
                {col1:"Przegląd instalacji LPG", col2:"od 120,00 zł"},
                {col1:"Regulacja instalacji LPG", col2:"od 50,00 zł"},
                {col1:"Samochody z sekwencyjnym wtryskiem gazu IV generacji 4 cylindry", col2:"od 2300,00 zł"},
                {col1:"Samochody z sekwencyjnym wtryskiem gazu IV generacji 6 cylindrów", col2:"od 3200,00 zł"},
                {col1:"Samochody z sekwencyjnym wtryskiem gazu IV generacji 8 cylindrów", col2:"od 4200,00 zł"},
                {col1:"Regulacja samochodu", col2:"od 20,00 zł"},
                {col1:"Wymiana filtra fazy ciekłej", col2:"20,00 zł"},
                {col1:"Wymiana filtra fazy lotnej", col2:"50,00 zł"},
              ]
            },
            {
              tag:"ul",
              txt:"Przesyłając zapytanie odnośnie montażu instalacji gazowej, prosimy podać następujące informacje:",
              li: [
                "marka, model samochodu",
                "pojemność silnika",
                "moc silnika – KM",
                "rok produkcji"
              ]
            },
            {
              tag:"p",
              txt:"Są to informacje niezbędne do podania konkretnej ceny instalacji gazowej."
            },
            {
              tag:"p",
              txt:"Instalacje gazowe posiadają ogólnopolską gwarancję. Istnieje możliwość",
              a:"sprzedaży ratalnej",
              href:"http://www.autogaz-mak.pl/#raty"
            },
            {
              tag:"p",
              txt:"Podane ceny brutto są orientacyjne, gdyż każdą instalację LPG ustala się indywidualnie w zależności od potrzeb i wymogów klienta. Cennik nie stanowi oferty handlowej w rozumieniu art. 66 § 1 Kodeksu cywilnego. W celu uzyskania dokładnej wyceny prosimy o wysłanie zapytania:"
            },
            {
              tag:"p",
              txt:"- drogą e-mail na adres",
              a:"biuro@autogaz-mak.pl",
              href:"mailto:biuro@autogaz-mak.pl"
            },
            {
              tag:"p",
              txt:"- telefonicznie",
              a:"664 461 635",
              href:"tel:+48664461635"
            },
            {
              tag:"p",
              txt:"- bądź osobiście pod adresem",
              a:"84-242 Luzino, ul. Żołnierzy Niezłomnych 4",
              href:"https://www.google.com/maps/place/%C5%BBo%C5%82nierzy+Niez%C5%82omnych+4,+84-242+Luzino/@54.5534593,18.0983538,17z"
            },
            {
              tag:"iframe",
              title:"iframe-google.maps",
              style:{border:"0", width:"1200px", height:"450px"},
              allowfullscreen:"",
              loading:"lazy",
              src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2313.86760536042!2d18.0983538!3d54.5534593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbf3d3ba11729%3A0xd73e4ee319c1ecd3!2s%C5%BBo%C5%82nierzy%20Niez%C5%82omnych%204%2C%2084-242%20Luzino!5e0!3m2!1suk!2spl!4v1613909539100!5m2!1spl!2sen"
            },
            {
              tag:"theme",
              txt:"LPG dla benzyny"
            },
            {
              tag:"ul",
              txt:"W dniu montażu instalacji LPG nasi Klienci otrzymują:",
              li: [
                "dokumentację niezbędną do otrzymania wpisu w Wydziale Komunikacji",
                "książkę gwarancyjną",
                "książkę serwisową",
                "certyfikat na zbiornik",
                "wyciąg ze świadectwa homologacji",
                "fakturę"
              ]
            },
            {
              tag:"p",
              txt:"Po montażu, prowadzimy bezpłatny instruktaż z zakresu podstawowej obsługi samochodu z instalacją LPG oraz informujemy o procedurze uzyskania wpisu w dowodzie rejestracyjnym pojazdu."
            },
            {
              tag:"theme",
              txt:"LPG dla diesla"
            },
            {
              tag:"p",
              txt:"Szczegółowe informacje znajdą Państwo na stronie producenta",
              a:"STAG – www.ac.com.pl",
              href:"https://www.ac.com.pl/"
            }
          ]
        },
        {
          tag:"theme", to:"/gas_calculator", txt:"Oblicz korżyści",
          content:[
            {
              tag:"iframe",
              title:"iframe-gazeo",
              style:{border:"0", width:"700px", minHeight:"20vw"},
              allowfullscreen:"",
              loading:"lazy",
              src:"http://gazeo.pl/ajax/widget_preview.php?theme=new2&amp;type=pb&amp;width=800&amp;color1=2&amp;color2=6&amp;color3=7&amp;lang=pl&amp;nomove=1"
            }
          ]
        },
        {
          tag:"theme", to:"/gas_gallery", txt:"Galerija",
          content:[
            {
              tag:"p",
              txt:"Cos tam na temat Galeriji..."
            }
          ]
        },
        {
          tag:"theme", to:"/gas_installments", txt:"Raty",
          content:[
            {
              tag:"theme",
              txt:"Możliwość sprzedaży ratalnej! Zdolność w 10 minut, bez zaświadczeń!"
            },
            {
              tag:"wrapper",
              itemWidth:30,
              items: [
                {
                  tag:"img",
                  width:25,
                  src:"https://autogaz.bzdrive.com/images/credit/getinbank.png"
                },
                {
                  tag:"img",
                  width:25,
                  src:"https://autogaz.bzdrive.com/images/credit/santander.png"
                },
                {
                  tag:"img",
                  width:25,
                  src:"https://autogaz.bzdrive.com/images/credit/sygma.png"
                }
              ]
            },
            {
              tag:"theme",
              txt:"Poniżej przedstawiamy 8 symulacji sprzedaży ratalnej w zależności od kwoty, liczby rat oraz firmy"
            },
            {
              tag:"table",
              lines: [
                {
                  col1:{txt:"Koszt usługi", width:10},
                  col2:{txt:"Liczba rat", width:10},
                  col3:{txt:"Kwota raty Getin Bank", width:15},
                  col4:{txt:"Kwota raty Santander", width:15},
                },
                {col1:"1600,00", col2:"12", col3:"152,54 zł", col4:"155,33 zł"},
                {col1:"1600,00", col2:"24", col3:"85,87 zł", col4:"89,25 zł"},
                {col1:"2000,00", col2:"12", col3:"190,68 zł", col4:"194,16 zł"},
                {col1:"2000,00", col2:"24", col3:"107,33 zł", col4:"111,56 zł"},
                {col1:"2200,00", col2:"12", col3:"209,74 zł", col4:"213,58 zł"},
                {col1:"2200,00", col2:"24", col3:"118,07 zł", col4:"122,72 zł"},
                {col1:"2800,00", col2:"12", col3:"266,94 zł", col4:"271,83 zł"},
                {col1:"2800,00", col2:"24", col3:"150,27 zł", col4:"156,19 zł"}
              ]
            },
            {
              tag:"ul",
              txt:"Raty można rozłożyć maksymalnie na 48 miesięcy. Koszt montażu instalacji gazowej ustala się indywidualnie, w zależności od:",
              li: [
                "rodzaju generacji instalacji gazowej",
                "producenta instalacji gazowej"
              ]
            },
            {
              tag:"img",
              width:40,
              src:"https://autogaz.bzdrive.com/images/credit/offer.png"
            }
          ]
        }
      ]
    },
    {
      tag:"menu", to:"/skp", txt:"Przeglady rejestracyjne",
      header:[
        {
          tag:"theme",
          txt:"Serwis samochodowy Wejherowo"
        },
        {
          tag:"img",
          width:30,
          src:"https://autogaz.bzdrive.com/images/partners/ats.png"
        },
        {
          tag:"theme",
          txt:"Polska niezależna sieć warsztatów samochodowych"
        },
        {
          tag:"img",
          width:30,
          src:"https://autogaz.bzdrive.com/images/partners/fenski.png"
        },
        {
          tag:"theme",
          txt:"Wyceny nieruchomości"
        },
        {
          tag:"img",
          width:30,
          src:"https://autogaz.bzdrive.com/images/partners/festimo.jpg"
        }
      ]
    },
    {
      tag:"menu", to:"/gallery", txt:"Galeria",
      header:[
        {
          tag:"gallery",
          images: [
            "https://autogaz.bzdrive.com/images/gallery/001-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/002-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/003-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/004-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/005-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/006-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/007-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/008-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/009-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/010-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/011-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/012-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/014-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/015-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/016-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/017-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/018-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/019-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/020-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/021-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/022-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/023-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/024-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/025-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/026-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/027-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/028-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/029-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/030-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/031-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/032-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/033-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/034-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/035-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/036-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/037-1024x576.png",
            "https://autogaz.bzdrive.com/images/gallery/038-1024x576.png"
          ]
        }
      ]
    },
    {
      tag:"menu", to:"/contacts", txt:"Kontakty",
      header:[
        {tag:"theme", txt:"Kontakty"}
      ]
    },
    {
      tag:"footer",
      info: {
        txt:"Kontakty",
        lines: [
          {
            name:"Auto-Gaz M.A.K Marcin Kaszuba"
          },
          {
            name:"adres: 84-242 Luzino, Żołnierzy Niezłomnych 4",
            href:"https://www.google.com/maps/place/%C5%BBo%C5%82nierzy+Niez%C5%82omnych+4,+84-242+Luzino/@54.5534593,18.0983538,17z"
          },
          {
            name:"tel: 664 461 635",
            href:"tel:+48664461635"
          },
          {
            name:"e-mail: biuro@autogaz-mak.pl",
            href:"mailto:biuro@autogaz-mak.pl"
          },
          {
            name:"NIP: 8441878121"
          },
          {
            name:"REGON: 221040801"
          }
        ]
      },
      opened: {
        txt:"Godziny otwarcia",
        lines: [
          {day:"Poniedziałek", hours:"8:00 - 18:00"},
          {day:"Wtorek", hours:"8:00 - 18:00"},
          {day:"Środa", hours:"8:00 - 18:00"},
          {day:"Czwartek", hours:"8:00 - 18:00"},
          {day:"Piątek", hours:"8:00 - 18:00"},
          {day:"Sobota (co druga)", hours:"8:00 - 14:00"}
        ]
      },
      cookieline: {
        active: true,
        txt: "Strona korzysta z plików cookies",
        link: {to:"/cookie", txt: "Więcej informacji"},
        btn: "Akceptuję"
      }
    },
    {
      tag:"cookie",
      object: [
        {
          tag:"h1",
          txt:"Polityka plików cookies"
        },
        {
          tag:"theme",
          txt:"1. Czym są pliki cookies."
        },
        {
          tag:"p",
          txt:"Ciasteczka (ang. „cookies”) to niewielkie pliki danych (pliki tekstowe), zapisywane na urządzeniu użytkownika przeglądającego strony internetowe. Pliki te pozwalają jednoznacznie rozpoznać urządzenie i odpowiednio wyświetlić stronę internetową, dostosowując ją do preferencji użytkownika. „Cookies” zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu oraz unikalny identyfikator sesji. Więcej informacji na temat ciasteczek można przeczytać w",
          a:"Wikipedii.",
          href:"http://pl.wikipedia.org/wiki/HTTP_cookie"
        },
        {
          tag:"theme",
          txt:"2. Z jakich rodzajów plików cookies korzystamy."
        },
        {
          tag:"ul",
          txt:"Strona internetowa firmy Auto-Gaz M.A.K. Marcin Kaszuba korzysta z następujących rodzajów plików cookies:",
          li: [
            "cookies „sesyjne” – pliki tymczasowe, które pozostają na twoim urządzeniu, aż do wylogowania ze strony internetowej lub wyłączenia przeglądarki internetowej",
            "cookies „stałe” – pliki pozostają na twoim urządzeniu przez czas określony w parametrach plików „cookies” albo do momentu ich ręcznego usunięcia",
            "cookies podmiotów zewnętrznych – wykorzystywane w celach statystycznych, umożliwiają również dostosowanie wyświetlanej strony do twoich preferencji"
          ]
        },
        {
          tag:"theme",
          txt:"3. Do czego używamy plików cookies."
        },
        {
          tag:"p",
          txt:"Pliki „cookies” używane są w celach statystycznych, marketingowych oraz w celu dostosowania zawartości stron internetowych do preferencji użytkownika. Pliki cookies przechowują informację o geolokalizacji, języku odwiedzającego stronę, oraz losowe dane dotyczące identyfikatorów sesji. Gromadzone dane pomagają zrozumieć, w jaki sposób użytkownik korzysta ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości."
        },
        {
          tag:"p",
          txt:"Pozyskane informacje pomagają nam budować statystyki dotyczące liczby nowych i stałych użytkowników oraz umożliwiają nam analizę odwiedzanych podstron. Dzięki tym informacjom nieustannie polepszamy i poprawiamy jakość oferowanych usług."
        },
        {
          tag:"theme",
          txt:"4. Usuwanie i wyłączanie plików cookies."
        },
        {
          tag:"p",
          txt:"Możesz w dowolnym momencie zmienić ustawienia przeglądarki, by nie akceptowała plików cookies lub informowała o ich przesyłaniu. Należy jednak pamiętać, iż nieakceptowanie plików cookie może spowodować utrudnienia w korzystaniu ze strony internetowej."
        },
        {
          tag:"p",
          txt:"Oprogramowanie służące do przeglądania stron internetowych domyślnie dopuszcza umieszczanie plików „cookies” na urządzeniu użytkownika. Ustawienia przeglądarki mogą zostać zmienione w taki sposób, aby blokować automatyczną obsługę plików „cookies” lub informować o ich każdorazowym przesłaniu na urządzenie użytkownika. Więcej informacji o wyłączeniu automatycznego zapisu plików „cookies” można odnaleźć w ustawieniach przeglądarki internetowej lub na stronie Wikipedii w sekcji",
          a:"Blokowanie cookie.",
          href:"http://pl.wikipedia.org/wiki/HTTP_cookie#Blokowanie_cookie"
        }
      ]
    },
    {
      tag:"error",
      object: [
        {
          tag:"h1",
          txt:"ERROR!!!"
        },
        {
          tag:"p",
          txt:"Strony nie znaleziono!"
        },
        {
          tag:"theme",
          txt:"HTTP 404"
        }
      ]
    }
  ])

  // console.log('unix', new Date().getTime())

  const act = ({addr, type, payload})=>{
    // switch(addr){

    //   case "mode":        return( admin.adminMode );

    //   case "admin":       adminActions( type, payload, admin, setAdmin );     break;
    //   case "footer":      footerActions( type, payload, footer, setFooter );  break;

    //   default: break;
    // }
  }


  return (
    <HashRouter className="App" >

      <Header state={state} act={act} />

      <Main state={state} act={act} />

      <Footer state={state} act={act} />

    </HashRouter>
  )
}

export default App
