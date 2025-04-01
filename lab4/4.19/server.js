const exrpess = require('express')
const app = exrpess();

app.get('/', (req, res) => { 

    var color = req.query.color

    res.send(`<html>
            <head>
                <title>Dynamiczne Tło</title>
            </head>
            <body style="background-color: ${color}">
            </body>
        </html>
    `)
})


app.listen(3000 , () => console.log(`Serwer dziala na porcie 3000`))