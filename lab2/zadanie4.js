    const firmy = [
        {nazwa:"Abasco", kategoria:"IT", poczatek:1999, koniec:2010},
        {nazwa:"Redis", kategoria:"IT", poczatek:1993, koniec:1998},
        {nazwa:"Komp", kategoria:"IT", poczatek:2003, koniec:2018},
        {nazwa:"Bosco", kategoria:"Technologie", poczatek:2011, koniec: 2014},
        {nazwa:"CCA", kategoria:"IT", poczatek:1991, koniec:1995},
        {nazwa:"Autosan", kategoria:"Auto", poczatek:2009, koniec: 2018},
        {nazwa:"Broke", kategoria:"Finanse", poczatek:1990, koniec: 1992},
        {nazwa:"Funds", kategoria:"Finanse", poczatek:2000, koniec: 2021},]

        // 4.1
        console.log(firmy.filter(firma => firma.kategoria == 'IT'));
        // 4.2
        console.log(firmy.filter(firma => firma.poczatek > 1990 && firma.koniec < 1999));
        // 4.3
        console.log(firmy.filter(firma => firma.koniec - firma.poczatek > 10));


