const poniedzialek =
    [
        {
            'nazwa': 'Przygotowania do zajęć z AI',
            'czas': 180
        },
        {
            'nazwa': 'Realizacja projektu z AI',
            'czas': 120
        }
    ]

    const wtorek = [
        {
            'nazwa': 'Rozbudowa swojego bloga',
            'czas': 240
        },
        {
            'nazwa': 'Administrowanie serwisem szkoły',
            'czas': 180
        },
        {
            'nazwa': 'Słuchanie koncertu online',
            'czas': 240
        }
    ]

    const ans = [poniedzialek.concat(wtorek)  
                .map(curr => curr.czas / 60)                
                .filter(curr => curr > 2)
                .map(curr => curr * 35)
                .reduce((sum, curr) => sum + curr, 0)]
                .map(curr => curr.toFixed(2) + " PLN")
                .reduce(curr => curr)

        /*
        dzielimy czasy na godziny
        odrzucamy wartosci mniejsze od 2
        mnozymy wszystkie wartosci * 35zl 
        sumujemy wszystkie wartosci
        dodajemy potem dwa miejsca zerowe i PLN

        to wszystko w tablicy, aby fukncja .map(curr => curr.toFixed(2) + " PLN") mogła działać
        i potem wyjmujemy wartosc z tablicy uzywajac reduce 
        */

    console.log(ans)
