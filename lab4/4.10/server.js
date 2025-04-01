const express = require('express')
const path = require('path')
const port = 3000

const app = express()

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
})

app.get('/result', (req, res) => {

    let username = req.query.username
    let password = req.query.password

    if(!username || !password) {
        res.send('Uzupelnij dane!')
    }
    else {
        res.send(`Uzytkownik: ${username} <br />
                Hasło: ${password}  `)
        }    
})


app.get('/form2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form2.html'));
})

app.get('/result2', (req, res) => {

    let name = req.query.name
    let languages = [req.query.languages]

    if(!name ) {
        res.send('Uzupelnij dane!')
    }
    else {
        res.send(`Uzytkownik: ${name} <br />
                Jezyki: ${languages}  `)
        }    
})

app.listen(port, () => console.log(`Serwer dziala na porcie ${port}`))