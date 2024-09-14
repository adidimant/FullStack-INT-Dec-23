const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
  res.send('Hello World!')
})

app.post('/Register', (req, res) => {
  const user = {
    name: 'ita', 
    email: 'bmgf123@gmail.com',
    userName: "ita123456"
  };
  res.json(user);
  console.log(`New request from ip: ${req.ip}, method: ${req.method}`);
  res.send(`Received registration data: ${JSON.stringify(user)}`)
})

app.get('/login/:userName', (req, res) => {
  console.log(`New request from ip: ${req.ip}`);
  res.send(`Hello, ${userName}! Welcome back!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*
GET- מחזיר נתונים,
POST- שולח נתונים חדשים, 
PUT-מעדכן נתונים, 
DELETE- מוחק נתונים


*/ 