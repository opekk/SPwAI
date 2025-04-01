const express = require('express')
const path = require('path')
const router = express.Router()
const isAuthorized = require('../middleware/autoryzacja')



router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
})

router.get('/result', (req, res) => {

    let username = req.query.username
    let password = req.query.password

    if(!username || !password) {
        res.status(401).send('Uzupelnij dane!')
    }
    if(isAuthorized(password)){
        res.send(`Uzytkownik: ${username} <br />
        Hasło: ${password}  `)
    }
    return res.status(401).send(`Dostęp zabroniony`)

})

router.get('/form2', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'form2.html'));
})

router.get('/result2', (req, res) => {

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

module.exports = router