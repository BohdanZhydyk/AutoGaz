
export const conditioning = {
  name:"conditioning",
  object: [
    {
      tag:"h1",
      txt:"Serwis klimatyzacji"
    },
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
      tag:"theme",
      txt:"Cennik klimatyzacji"
    },
    {
      tag:"table",
      lines: [
        {col1:{txt:"usługa", width:40}, col2:{txt:"cena", width:10}},
        {col1:"Pakiet podstawowy (cena zawiera 150g czynnika R-134a)", col2:"100,00 zł"},
        {col1:"Pakiet zaawansowany (cena zawiera 150g czynnika R-134a)", col2:"130,00 zł"},
        {col1:"Naprawa układu klimatyzacji", col2:"od 50,00 zł"},
        {col1:"Dezynfekcja układu", col2:"od 50,00 zł"},
        {col1:"Wymiana filtra kabinowego", col2:"od 10,00 zł"}
      ]
    },
    {
      tag:"img",
      width:50,
      src:"https://autogaz.bzdrive.com/images/klima.png"
    }
  ]
}