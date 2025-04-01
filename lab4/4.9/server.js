const express = require('express')

const app = express()

app.get('/name/:imie1/:imie2', (req, res) => {
    res.send(`Cześć ${req.params.imie1} i ${req.params.imie2}`)
})


app.listen(3000, () => console.log(`Serwer dziala na porcie 3000`))