const http = require('http')
const port = 3000;

const server = http.createServer((req, res) =>{
        res.statusCode = 200
        switch (req.url){
            case "/home":
                res.end(`
                    <html>
                        <body>
                        <h1>Strona domowa</h1>
                        </body>
                    </html>`)
            break
            case "/about":
                res.end(`
                    <html>
                        <body>
                        <h1>Strona o mnie</h1>
                        </body>
                    </html>`)
            break
            default:
                res.end(`
                    <html>
                        <body>
                        <h1>Nie znaleziono</h1>
                        </body>
                  </html>`)
            break

            

        }
    })
    server.listen(port, () => {});
    console.log(`Serwer działa na porcie ${port}`);