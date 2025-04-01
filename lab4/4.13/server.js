const express = require('express')
const app = express()
const port = 3000



let metoda = (req, res, next) => {
    console.log("Metoda", req.method)
    let sciezka = "Sciezka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(sciezka)
    next()
}

app.use(metoda)

app.use('/', (req, res) => {
    res.send(`
        Metoda: ${req.method} </br>
        Sciezka: " + ${req.protocol} + "://" + ${req.get('host')} + ${req.originalUrl}`)
})


app.listen(port, () => console.log(`Serwer dziala na porcie ${port}`))