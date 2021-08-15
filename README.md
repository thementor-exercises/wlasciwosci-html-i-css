# wlasciwosci-html-i-css

Zadanie ma na celu stworzenie template'a który prezentuje screenshoot preview.png. Przycisk "Dodaj nowy box" ma dodawać nowy box obok poprzedniego o takim samym wyglądzie i funkcjonalności. Domyślnie Pierwszy box ma być widoczny.

- Każdy z boxów ma mieć margines 20px
- Wielkość marginesu ma być widoczna za pomocą zwizualizowania go kolorem "rgb(242, 209, 148)"
- Oprócz tego box ma mieć padding 20px który jest widoczny za pomocą koloru "rgb(183, 236, 183)"
- Oraz border 20px o stylu solid który ma mieć kolor "sandybrown"
- Wewnątrz boxa ma być napis "box" wyśrodkowany jak na Screenie
- Wnętrze ma mieć kolor #FFFFFF
- Każdy z boxów ma mieć pod spodem kontrolki input i checkbox
- Inputy mają kontrolować szerokość i wysokość box'a wyrażoną w pikselach
- Checkbox ma z kolei dodawać CSS property "box-sizing" o wartości - podczas zaznaczenia "border-box", a odznaczony "content-box" do boxa z borderem
- Kontrolki nie mogą się wylewać poza szerokość box'a (żeby to osiągnąć nie trzeba im ustalać konkretnej szerokości) tak jak na screenie

Wskazówka:
Mówiąc box mam na myśli zespół elementów tworzących figurę widoczną na screenie z kolorami, napisem i kontrolkami. Jeden element html nie będzie w stanie spełnić wszystkich zależności opisanych w zadaniu.

Żeby odpalić serwer należy najpierw zainstalować zależności "npm install", a później odpalić go komendą "npm start". W pliku styles.css należy umieścić niezbędne style, scripts.js skrypty obsługujące kontrolki, a w index.html niezbędne elementy html.
