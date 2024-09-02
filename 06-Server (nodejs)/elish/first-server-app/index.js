const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
    res.send('hello world')
})

//object

app.get('/', (req, res)=>{
    const responseObject = {
        message: 'JSON object',
        status: 'success',
        date: {
            name: 'elisheva',
            age: '21'
        }
    };
    res.json(responseObject);
})

//array

app.get('/', (req, res)=>{
    const resposeArray = [
        {id: 1, name: 'array 1'},
        {id: 2, name: 'array 2'},
        {id: 3, name: 'array 3'}
    ];
    res.json(resposeArray);
})

//GET

app.post('/post-data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: "Data received successfully",
        data: receivedData
    });
})


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})