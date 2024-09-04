const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
    console.log("New request from ip: " + req.ip);
  res.send('Hello World!')
})
app.get('/loginn', (req, res) => {
    //console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
    console.log("New request from ip: " + req.ip);
  res.send('Loginn page!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})