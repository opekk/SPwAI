const express = require('express')
const path = require('path')
const handleBars = require('handlebars')
const exphbs = require('express-handlebars')
const StudentController = require('./controllers/StudentControllers.js')
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access")
const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const polaczenie = process.env.connection

mongoose.connect(polaczenie, {useNewUrlParser: true})
    .then((result => {
        console.log("Polaczono z baza danych")
    })).catch((e) =>{
        console.log("nie mozna polaczyc sie z MongoDB" + e)
    })


app.use(express.urlencoded({
    extended: true
}))

app.set("views", path.join(__dirname, "/views"))

app.engine(
    "hbs",
        exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handleBars),
        extname: "hbs",
        defaultLayout: "layout.hbs",
        layoutsDir: "views/layouts",
    })
)

app.set("view engine", "hbs")

app.use("/", StudentController)

app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000")
})

