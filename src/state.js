
export const initialState = {
  header: {
    menu: [
      {to:"about", txt:"O nas"},
      {to:"affer", txt:"Oferta"},
      {to:"instalacje", txt:"Instalacje gazowe"},
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
    }
  },
  footer:false
}