
export const install = {
  header: {
    txt: "Instalacje gazowe LPG"
  },
  content: [
    {
      tag:"theme",
      value: {
        txt:"Cennik instalacji gazowych"
      }
    },
    {
      tag:"table",
      value: [
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
      ]
    },
    {
      tag:"ul",
      value: {
        txt:"Przesyłając zapytanie odnośnie montażu instalacji gazowej, prosimy podać następujące informacje:",
        li: [
          "marka, model samochodu",
          "pojemność silnika",
          "moc silnika – KM",
          "rok produkcji"
        ]
      }
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
    },
    {
      tag:"theme",
      value: {
        txt:"LPG dla benzyny"
      }
    },
    {
      tag:"ul",
      value: {
        txt:"W dniu montażu instalacji LPG nasi Klienci otrzymują:",
        li: [
          "dokumentację niezbędną do otrzymania wpisu w Wydziale Komunikacji",
          "książkę gwarancyjną",
          "książkę serwisową",
          "certyfikat na zbiornik",
          "wyciąg ze świadectwa homologacji",
          "fakturę"
        ]
      }
    },
    {
      tag:"p",
      value: {
        txt:"Po montażu, prowadzimy bezpłatny instruktaż z zakresu podstawowej obsługi samochodu z instalacją LPG oraz informujemy o procedurze uzyskania wpisu w dowodzie rejestracyjnym pojazdu."
      }
    },
    {
      tag:"theme",
      value: {
        txt:"LPG dla diesla"
      }
    },
    {
      tag:"p",
      value: {
        txt:"Szczegółowe informacje znajdą Państwo na stronie producenta",
        a:"STAG – www.ac.com.pl",
        href:"https://www.ac.com.pl/"
      }
    },
    {
      tag:"theme",
      value: {
        txt:"Oblicz korzyści z instalacji gazowej"
      }
    },
    {
      tag:"simulator",
      value: {
        txt:"Włącz symulator obliczania korzyści z instalacji gazowej"
      }
    }
  ]
}