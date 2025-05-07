const express = require('express')
const path = require('path')
const reactEngine = require('express-react-views')


const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', reactEngine.createEngine())

app.get('/about', (req, res) => {
    res.render('about', 
        {
            nazwisko: "Nowak",
            email: "nowak@gmail.com",
            wiek: 24
        }
    )
})

app.listen(3000, () => console.log(`Serwer dziala na porcie 3000`))