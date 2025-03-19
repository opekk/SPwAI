const http = require('http')

const server = http.createServer((req, res) => {
        res.statusCode = 200; 
        res.setHeader("Content-Type", "text/html"); 
      
        res.end(`
          <html>
            <body>
              <h1>Aplikacja w Node</h1>
              <h2>To jest odpowiedz HTML</h2>
              <ol>
                <li>First point</li>
                <li>Second point</li>
                <li>Third point</li>
              </ol>
            </body>
          </html>
        `);
      });
            server.listen(3000, () => {
        console.log('Serwer działa na porcie 3000');
      });