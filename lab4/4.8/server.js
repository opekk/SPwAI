const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('PROSTY SERWER OPARTY NA SZKIELECIE PROGRAMISTYCZNYM EXPRESS')
})

app.get('/about', (req, res) => {
    res.send('Autor strony: Jan Kowalski')
})

app.listen(3000)