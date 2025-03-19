const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000;

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const fullPath = path.join(__dirname, '..', filePath); // Cofamy się do głównego folderu projektu

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            console.error(`Błąd ładowania pliku ${fullPath}:`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('500 - Błąd wewnętrzny serwera');
        }
        res.writeHead(responseCode, { 'Content-Type': contentType });
        res.end(data);
    });
}

    const server = http.createServer((req, res) => {
        switch(req.url){
            case '/':
                serveStaticFile(res, '/public/home.html', 'text/html')
                break
            case '/about':
                serveStaticFile(res, '/public/about.html', 'text/html')
                break
            case '/img':
                serveStaticFile(res, '/img/logo.png', 'image/png')
                break
            default:
                serveStaticFile(res, '/public/404.html', 'text/html')
                break
        }
    })

    server.listen(port, () => console.log(`Server dziala na porcie ${port}; `))