// server.js
const express = require("express");
const getDate = require("./server-files/getDate");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${getDate()} --- Klient wysłał zapytanie o plik ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Witaj na stronie głównej!");
});

app.get("/scripts/script.js", (req, res) => {
    res.send("Zawartość script.js");
});

app.get("/styles/css/style.css", (req, res) => {
    res.send("Zawartość style.css");
});

app.get("/index.html", (req, res) => {
    res.send("<h1>To jest index.html</h1>");
});

app.listen(PORT, () => {
    console.log(`${getDate()} --- Serwer zostaje uruchomiony na porcie ${PORT}.`);
});

