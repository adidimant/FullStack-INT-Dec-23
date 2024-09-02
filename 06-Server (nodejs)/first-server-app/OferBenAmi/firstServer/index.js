const express = require('express')


const app = express();
const port = 3000;

const keysFromDB = ['a','b','c','d','e','g',];

app.get('/', (req, res) =>{
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}`);
    console.log(req.headers)
    res.send('hello world')
})

app.get('/api/key', (req, res) =>{
    res.send(keysFromDB)
})

app.post('/formParams',  (req,res) =>{
    const formParams = req.query;
    console.log(`data recived from user: ${JSON.stringify(formParams)}`)

    if(Object.keys(formParams).length > 0) {
        res.status(200).send('form data successfully send to the server')
    }
    else{
        res.status(406).send('form is empty')
    }
})


app.delete('/api/key', (req, res) =>{
    const itemsToDelete = req.query;
    const keysToDelete = Object.keys(itemsToDelete);
    let keysDeleted = [];
    keysToDelete.forEach(key =>{
        keysFromDB.forEach((keyFromDB, index) => {
            if(key === keyFromDB) {
                keysFromDB.splice(index, 1);
                keysDeleted.push(key);
            }
        })
    })

    res.status(200).send(`keys ${keysDeleted} were deleted from the database`)
})



app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})

// 1) based on your own server, create at least 3 more endpoints that return different responses to the client
//  NOTE - endpoint is defined by HTTP method + path (for example: GET '/', POST '/login')
//  * one of the responses should be an array / json object - read in the internet how you response in express with an object/array
// 2) Establish new server on the same port - see what's happening (you don't have to write another index.js.. just opena new terminal in parralal and write again `node index.js`)
// 3) Read about HTTP methods - GET, POST, PUT, DELETE
// 4) Read about HTTP status codes (1xx, 2xx, 3xx, 4xx, 5xx)
// 5) [Bonus] Find the commands in terminal that shows you:
//   a) All the open ports
//   b) All the processes that runs on specific port (for example port 80 or port 3000)
