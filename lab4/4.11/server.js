const express = require('express')
const {check, validationResult} = require('express-validator')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', [
    check('nazwisko').isLength({ min: 3, max: 25 }).isAlpha().withMessage('komunikat o błędzie'),
    check('email').isEmail().withMessage('komunikat o błędzie'),
    check('wiek').isInt({ min: 0, max: 110}).isNumeric().withMessage('komunikat o błędzie')
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const nazwisko = req.body.nazwisko;
    const email = req.body.email.normalize();
    const wiek = req.body.wiek;

    res.send(`Uzytkownik: ${nazwisko} <br /> Email: ${email} <br /> Wiek: ${wiek}`);
});





app.listen(port, () => console.log(`Serwer dziala na porcie ${port}`))