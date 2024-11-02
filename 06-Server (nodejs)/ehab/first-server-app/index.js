const express = require('express');
const app = express()
const port = 3000
app.use(express.json()); // for parsing application/json
const users = {}

app.get('/', (req, res) => {
    console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
    res.send('Hello World!')
})

//1. Display users - GET request
app.get('/users', (req, res) => {
    res.json(users);
})

//2. Add user - POST request
app.post('/users', (req, res) => {
    const id = Date.now().toString(); // generate a simple unique ID
    const user = req.body;
    users[id] = user;
    res.status(201).json({ id, ...user });
});

//3. Delete user - DELETE request
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    if (users[id]) {
        delete users[id];
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// 4. Update user - PUT request
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    if (users[id]) {
        users[id] = req.body;
        res.json({ id, ...users[id] });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/*
2) Establish new server on the same port - see what's happening 
   (you don't have to write another index.js.. just opena new terminal in parralal and write again `node index.js`)


const _app = express()
_app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


Example app listening on port 3000
node:events:497
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (node:net:1904:16)
    at listenInCluster (node:net:1961:12)
    at Server.listen (node:net:2063:7)
    at Function.listen (C:\Users\Ehab Hassoun\Documents\fullstack2023\FullStack-INT-Dec-23\06-Server (nodejs)\ehab\first-server-app\node_modules\express\lib\application.js:635:24)
    at Object.<anonymous> (C:\Users\Ehab Hassoun\Documents\fullstack2023\FullStack-INT-Dec-23\06-Server (nodejs)\ehab\first-server-app\index.js:22:6)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1940:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'EADDRINUSE',
  errno: -4091,
  syscall: 'listen',
  address: '::',
  port: 3000
}

Node.js v20.17.0


3) Read about HTTP methods - GET, POST, PUT, DELETE
GET     - Retrieve data from the server.
POST    - Submit data to the server, usually to create a new resource.
PUT     - Update an existing resource or create a resource if it doesn't exist.
DELETE  - Remove a resource from the server.

5) [Bonus] Find the commands in terminal that shows you:
  a) All the open ports
    On Windows: netstat -ano | findstr LISTENING
    On Linux: sudo netstat -tuln
    On macOS: sudo netstat -anp tcp | grep LISTEN
  b) All the processes that runs on specific port (for example port 80 or port 3000)
    On Windows: netstat -aon | findstr :443
    On Linux: sudo netstat -tuln | grep :443
    On macOS: sudo netstat -anp tcp | grep :443
*/

