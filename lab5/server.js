const express = require('express')
const path = require('path')
const handleBars = require('handlebars')
const exphbs = require('express-handlebars')
const StudentController = require('./controllers/StudentControllers.js')
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access")
const db = require('./db')

const app = express()

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

