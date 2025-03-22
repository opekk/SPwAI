const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()
const polaczenie = process.env.connection

mongoose.connect(polaczenie, {useNewUrlParser: true})
    .then((result => {
        console.log("Polaczono z baza danych")
    })).catch((e) =>{
        console.log("nie mozna polaczyc sie z MongoDB" + e)
    })

