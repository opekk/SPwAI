const express = require('express');
const app = express();

const pages = ['strona1', 'strona2', 'strona3', 'strona4', 'strona5'];

pages.forEach(page => {
    app.get(`/${page}`, (req, res) => {
        res.send(page);
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));