const express = require('express')
const port = 3000
const app = express()
const users = require('./users')


app.use(express.json())

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id))

  if (!found){
    res.status(400).json({msg: `User o id ${req.params.id} nie został znaleziony`})
  }
  else{
    res.json(found)
  }
})

app.post('/api/users/add', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: "aktwyny"
    }

    if(!newUser.name || !newUser.email){
        res.status(400).json({msg: "Wprowadz nazwe oraz email!"})
    }

    users.push(newUser)
    res.json(users)

})

app.patch('/api/users/update/:id', (req,res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if(found){
        const updateUser = req.body
        users.forEach(user => {
        if(user.id === parseInt(req.params.id)){
            user.name = updateUser.name ? updateUser.name : user.name
            user.email = updateUser.email ? updateUser.email : user.email

            res.json({ 
                msg: "Dane zaktualizowane", user 
            })
        }
    })

    }
    else {
        res.status(400).json({ 
            msg: `Uzytkownik o id ${req.params.id} nie istnieje!`
        })
    }
})


app.patch('/api/users/delete/:id', (req,res) => {
    const userId = parseInt(req.params.id)

    const index = users.findIndex(user => user.id === userId)

    if(index !== -1){
        users.splice(index,1)
        res.status(200).json({ 
            msg: "Usunieto pomyslnie uzytkownika!", users
        })
    }
    else{
        res.status(400).json({ 
            msg: "Nie ma takiego uzytkownika!", users
        })
    }

})




app.listen(port, () => console.log(`Serwer dziala na porcie ${port}`))