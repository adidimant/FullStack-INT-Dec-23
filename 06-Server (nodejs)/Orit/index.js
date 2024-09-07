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

// 1. GET /about - returns a simple text response
app.get('/about', (req, res) => {
  console.log("New request from IP: " + req.ip);
  res.send('This is the about page');
});

// 2. POST /submit - returns a JSON object
app.post('/submit', (req, res) => {
  console.log("New POST request from IP: " + req.ip);
  const responseObject = { message: 'Form submitted successfully', status: 'OK' };
  res.json(responseObject);
});

// 3. GET /data - returns an array of items as JSON
app.get('/data', (req, res) => {
  console.log("New request from IP: " + req.ip);
  const dataArray = [1, 2, 3, 4, 5, { name: 'Item 6', value: 'Six' }];
  res.json(dataArray);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})