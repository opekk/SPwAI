const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/about', (req, res) => {
    res.render('about', {name: "Maciek"})
})

app.get('/info', (req, res) => {
    res.render('info', 
            { 
                nazwisko: "Nowak",
                email: "nowak@gmail.com",
                wiek: 24
            }
    )
})

app.listen(3000, () => console.log(`Serwer dziala na porcie ${port}`))