const http = require('http')
const url = require('url')

const port = 3000;

http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        let q = url.parse(req.url, true).query
        let txt = q.b1 + " " + q.b2 + " " + q.b3

        let a = Math.abs(parseFloat(q.b1)), b = Math.abs(parseFloat(q.b2)), c = Math.abs(parseFloat(q.b3))    

        if(a+b > c && b + c > a && c+a > b){
            let p =  (a + b + c) / 2
        let S = Math.sqrt(p * (p - a) * (p - b) * (p - c))

        let ans = S.toString()

        res.end(`wynik to: ${ans}`)
        }
        else {
            res.end(`nie mozna stworzyc trojkata.`)
        }


    }).listen(port)

    console.log(`Serwer działa na porcie: ${port}`)