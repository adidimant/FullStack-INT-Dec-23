const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}, headers: ${req.headers}`);
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})