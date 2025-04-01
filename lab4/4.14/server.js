const express = require('express')
const routes = require('./api/routes')
const metoda = require('./middleware/metoda')

const port = 3000

const app = express()

app.use("/", routes, metoda)
 
app.listen(port, () => console.log(`Serwer dziala na porcie ${port}`))