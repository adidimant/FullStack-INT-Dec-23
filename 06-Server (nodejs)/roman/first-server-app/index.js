const express = require('express')
const app = express()
const port = 3000

let theArray = [{
        id: '123441234',
        name: 'Joe',
        age: 21
    },
    {
        id: '458834',
        name: 'Steve',
        age: 28
    }
]



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Login!')
})
app.get("/array", (req,res) => {

    res.send(
      theArray.map(user =>
        `<h1>Name:${user.name}</h1><br>
        <h5>Age:${user.age}</h5>
        `
      ).join('')
    )
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})