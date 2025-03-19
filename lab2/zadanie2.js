const listaZadan = [
    {
        id: 1,
        tekst: "Zrobienie zakupów",
        zrealizowano: true,
    },
    {
        id: 2,
        tekst: "Przegląd techniczny samochodu",
        zrealizowano: false,
    },
    {
        id: 3,
        tekst: "Wizyta u dentysty",
        zrealizowano: false
    },
]

listaZadan.forEach(zadanie => console.log(zadanie.tekst));                  // 2.1
console.log('-----------------------------------')
const listaZadan2 = listaZadan.map(arrayMap => arrayMap.tekst);
console.log(listaZadan2)                                                    // 2.2
console.log('-----------------------------------')
console.log(listaZadan.filter(zadanie => zadanie.zrealizowano == true));    // 2.3