const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    let value = parseFloat(req.query.value)
    let toRad = req.query.toRad === 'true'
    var ans = 0

    if(toRad){
        ans = (Math.PI / 180) * value
        res.send(`${value} stopni to ${ans} radianów`)
    }
    else{
        ans = (value * 180) / Math.PI
        res.send(`${value} radianów to ${ans} stopni`)
    }

})



app.listen(3000, () => console.log(`Serwer dziala na porcie ${port}`))
