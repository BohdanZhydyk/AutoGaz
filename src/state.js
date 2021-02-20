
export const initialState = {
  header: {
    menu: [
      {to:"about", txt:"O nas"},
      {to:"affer", txt:"Oferta"},
      {to:"install", txt:"Instalacje gazowe"},
      {to:'kalkulator', txt:'Oblicz korżyści'},
      {to:'klimatyzacja', txt:'Klimatyzacja'},
      {to:'raty', txt:'Raty'},
      {to:'galeria', txt:'Galeria'},
      {to:'kontakt', txt:'Kontakt'}
    ]
  },
  main: {
    about:{
      slider: [ {}, {} ],
      hello: {
        header: "Szanowni Państwo",
        content: [
          {
            tag:"p",
            value:"Ponad 10-letnie doświadczenie w branży instalacji gazowych pozwala nam zagwarantować pełen profesjonalizm i najwyższą jakość usług. Systematyczne szkolenia i egzaminy zapewniają wysokie kwalifikacje montażystów. Nasz warsztat jest wyposażony w profesjonalne narzędzia i urządzenia do montażu oraz serwisu instalacji LPG. Jednocześnie zapewniamy naprawy mechaniczne samochodów osobowych, terenowych i dostawczych wszystkich marek. Zapewniamy bezpłatne auto zastępcze."
          },
          {
            tag:"p",
            value:"Ogólnopolska gwarancja zapewnia Państwu komfort korzystania z ponad 180 serwisów STAG w całej Polsce. Przedłużona gwarancja daje możliwość bezpłatnej naprawy usterek, nielimitowaną liczbę napraw oraz wymianę sterownika w przypadku braku możliwości jego naprawy."
          },
          {
            tag:"p",
            value:"Autoryzowany serwis STAG to najlepszy wybór."
          },
          {
            tag:"img",
            value:"http://www.autogaz-mak.pl/wp-content/uploads/ccfdba3ab1cdb21970bf.jpg"
          },
          {
            tag:"p",
            value:"Zapewniamy Państwu również kompleksową obsługę układu klimatyzacji: naprawy mechaniczne oraz diagnostyka i serwis w samochodach wszystkich marek."
          },
          {
            tag:"p",
            value:"Serwisujemy także innych producentów, tj. KME, AEB, BRC, AG Centrum, Elpigaz i inni. Na życzenie Klienta jesteśmy w stanie zamontować instalacje wymienionych firm. Używamy jedynie znanych i atestowanych przez TDT zbiorników: Tytangaz, Stako, GZWM, Bormech. Zapewniamy wysoką jakość montażu, estetykę wykonania oraz profesjonalny serwis instalacji LPG różnych firm w konkurencyjnych cenach."
          },
          {
            tag:"p",
            value:"Zapraszamy do współpracy."
          }
        ]
      }
    },
    offer:{
      header: {
        txt: "Oferta",
        value: "Oferujemy Państwu również sprawdzenie samochodu przed zakupem pod względem mechanicznym i diagnostycznym!"
      },
      content: [
        {
          ul: "Nasza firma zajmuje się montażem",
          li: [
            "instalacji gazowych wszystkich marek do samochodów osobowych, terenowych oraz dostawczych",
            "haków holowniczych",
            "czujników parkowania",
            "auto alarmów"
          ]
        },
        {
          ul: "Serwis klimatyzacji",
          li: [
            "diagnostyka",
            "napełnianie czynnikiem R-134a",
            "naprawa układu",
            "odgrzybianie klimatyzacji ozonem"
          ]
        },
        {
          ul: "Serwis instalacji gazowych wszystkich marek",
          li: [
            "gwarancyjny i pogwarancyjny",
            "wymiana filtrów",
            "sprawdzanie szczelności",
            "kalibracja komputerowa",
            "naprawa/wymiana podzespołów gazowych"
          ]
        },
        {
          ul: "Naprawy mechaniczne",
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
        },
        {
          ul: "Diagnostyka komputerowa",
          li: [
            "posiadamy profesjonalny tester diagnostyczny do pojazdów z europy, azji i USA",
            "możliwość wydruku kodów błędu, parametrów i wykresów",
            "możliwość obserwacji parametrów rzeczywistych na wykresach oraz możliwość ich nagrywania",
            "pełny podgląd parametrów rzeczywistych z możliwością zapisania stanu aktualnego oraz nagrywania ich zmian",
            "pełny opis kodu błędu z możliwością wykasowania",
            "mnóstwo funkcji specjalnych w tym kodowania wtryskiwaczy, kalibracje, regeneracje filtrów cząstek stałych i wiele innych",
            "możliwość przetestowania/przesterowania większości podzespołów (pompy, wtryskiwacze, zawory, cewki, etc.)"
          ],
        }
      ]
    },
    install: {
      header: "Instalacje gazowe LPG",
      content: [
        {
          theme: "Cennik instalacji gazowych",
          table: [
            {service:"Samochody gaźnikowe", price: "od 1200,00 zł"},
            {service:"Samochody z wtryskiem jednopunktowym", price:"od 1500,00 zł"},
            {
              service:"Samochody z wtryskiem wielopunktowym (sekwencyjny wtrysk gazu IV generacji)",
              subservices:[
                {service:"4 cylindry", price:"od 2300,00 zł"},
                {service:"6 cylindrów", price:"od 3200,00 zł"},
                {service:"8 cylindrów", price:"od 4200,00 zł"}
              ],
            },
            {service:"Regulacja samochodu", price:"od 20,00 zł"},
            {service:"Wymiana filtra fazy ciekłej", price:"20,00 zł"},
            {service:"Wymiana filtra fazy lotnej", price:"50,00 zł"},
            {service:"Wymiana zbiornika", price:"od 400,00 zł"}
          ],
          section: {
            tags: [
              {
                tag:"h3",
                value: "Przesyłając zapytanie odnośnie montażu instalacji gazowej, prosimy podać następujące informacje:"
              },
              {
                tag:"li",
                value: [
                  "marka, model samochodu",
                  "pojemność silnika",
                  "moc silnika – KM",
                  "rok produkcji"
                ]
              },
              {
                tag:"p",
                value: {
                  txt:"Są to informacje niezbędne do podania konkretnej ceny instalacji gazowej."
                }
              },
              {
                tag:"p",
                value: {
                  txt:"Instalacje gazowe posiadają ogólnopolską gwarancję. Istnieje możliwość",
                  a:"sprzedaży ratalnej",
                  href:"http://www.autogaz-mak.pl/#raty"
                }
              },
              {
                tag:"p",
                value: {
                  txt:"Podane ceny brutto są orientacyjne, gdyż każdą instalację LPG ustala się indywidualnie w zależności od potrzeb i wymogów klienta. Cennik nie stanowi oferty handlowej w rozumieniu art. 66 § 1 Kodeksu cywilnego."
                }
              },
              {
                tag:"p",
                value: {
                  txt:"W celu uzyskania dokładnej wyceny prosimy o wysłanie zapytania"
                }
              },
              {
                tag:"p",
                value: {
                  txt:"drogą e-mail na adres",
                  a:"biuro@autogaz-mak.pl",
                  href:"mailto:biuro@autogaz-mak.pl"
                }
              },
              {
                tag:"p",
                value: {
                  txt:"telefonicznie",
                  a:"664 461 635",
                  href:"tel:+48664461635"
                }
              },
              {
                tag:"p",
                value: {
                  txt:"bądź osobiście pod adresem",
                  a:"84-242 Luzino, ul. Żołnierzy Niezłomnych 4",
                  href:"https://www.google.com/maps/place/%C5%BBo%C5%82nierzy+Niez%C5%82omnych+4,+84-242+Luzino/@54.5534593,18.0983538,17z"
                }
              }
            ]
          }
        },
        {
          theme: "LPG dla benzyny",
          section: {
            tags: [
              {
                tag:"h3",
                value: "W dniu montażu instalacji LPG nasi Klienci otrzymują:"
              },
              {
                tag:"li",
                value: [
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
                value: {
                  txt:"Po montażu, prowadzimy bezpłatny instruktaż z zakresu podstawowej obsługi samochodu z instalacją LPG oraz informujemy o procedurze uzyskania wpisu w dowodzie rejestracyjnym pojazdu."
                }
              }
            ]
          }
        },
        {
          theme: "LPG dla diesla",
          section: {
            tags: [
              {
                tag:"p",
                value: {
                  txt:"Szczegółowe informacje znajdą Państwo na stronie producenta",
                  a:"STAG – www.ac.com.pl",
                  href:"https://www.ac.com.pl/"
                }
              }
            ]
          }
        },
        {
          theme: "Oblicz korzyści z instalacji gazowej",
          section: {
            tags: [
              {
                tag:"simulator",
                value: {
                  txt:"Włącz symulator obliczania korzyści z instalacji gazowej"
                }
              }
            ]
          }
        }
      ]
    }
  },
  footer:false
}