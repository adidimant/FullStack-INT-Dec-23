/**
1) based on your own server, create at least 3 more endpoints that return different responses to the client
 NOTE - endpoint is defined by HTTP method + path (for example: GET '/', POST '/login')
 * one of the responses should be an array / json object - read in the internet how you response in express with an object/array
2) Establish new server on the same port - see what's happening (you don't have to write another index.js.. just opena new terminal in parralal and write again `node index.js`)
 */

const express = require('express');
const app = express();
const port = 3000;

// Endpoint 1: Root Endpoint
app.get('/', (req, res) => {
    console.log(`New request from IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.url}. Headers: ${JSON.stringify(req.headers)}`);
    res.send('Hello World!');
});

// Endpoint 2: GET /greet
app.get('/greet', (req, res) => {
    res.send('Hello, welcome to our API!');
});

// Endpoint 3: POST /data
app.post('/data', (req, res) => {
    const responseData = {
        message: 'Data received successfully',
        status: 'success',
        timestamp: new Date(),
    };
    res.json(responseData);
});

// Endpoint 4: GET /items
app.get('/items', (req, res) => {
    const items = [
        { id: 1, name: 'Item 1', price: 10.99 },
        { id: 2, name: 'Item 2', price: 5.49 },
        { id: 3, name: 'Item 3', price: 20.00 },
    ];
    res.json(items);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});






/**
 3) Read about HTTP methods - GET, POST, PUT, DELETE
4) Read about HTTP status codes (1xx, 2xx, 3xx, 4xx, 5xx)
 */

// HTTP Methods:
// - GET: Retrieve data from a server (safe and idempotent) - should not have side effects on the server (e.g., read data) - can be cached and bookmarked - no request body - query parameters in URL 
// - POST: Send data to a server to create a new resource (not idempotent) - can have side effects on the server (e.g., write data) - no query parameters - request body
// - PUT: Send data to a server to update an existing resource (idempotent) - update or create a resource - request body - usually used to update a specific resource with a known URI 
// - DELETE: Send a request to a server to delete a resource (idempotent) - request body - usually used to delete a specific resource with a known URI

// HTTP Status Codes:
// - 1xx: Informational - request received and processing continues (e.g., 100 Continue) - indicates that the server has received the request headers and the client should proceed to send the request body
// - 2xx: Success - request was successfully received, understood, and accepted (e.g., 200 OK, 201 Created, 204 No Content) - indicates that the request was successful
// - 3xx: Redirection - further action needs to be taken to complete the request (e.g., 301 Moved Permanently, 302 Found, 304 Not Modified) - indicates that the client must take additional action to complete the request
// - 4xx: Client Error - request contains bad syntax or cannot be fulfilled (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found) - indicates that there was an error in the request
// - 5xx: Server Error - server failed to fulfill a valid request due to an error on the server (e.g., 500 Internal Server Error, 503 Service Unavailable) - indicates that there was an error on the server

// Get Example: GET /items
// - Request: GET /items
// - Response: 200 OK (Success) - returns an array of items

// Post Example (Create): POST /items
// - Request: POST /data { name: 'New Item', price: 15.99 }
// - Response: 201 Created (Success) - returns a message that the item was created successfully

// Put Example (Update): PUT /items/1
// - Request: PUT /items/1 { name: 'Updated Item', price: 20.00 }
// - Response: 200 OK (Success) - returns a message that the item was updated successfully

// Delete Example: DELETE /items/1
// - Request: DELETE /items/1
// - Response: 204 No Content (Success) - returns a message that the item was deleted successfully


/**
 5) [Bonus] Find the commands in terminal that shows you:
  a) All the open ports
  b) All the processes that runs on specific port (for example port 80 or port 3000)
 */

// a) All the open ports:
// - Command: netstat -tuln
// - Description: Displays all listening ports and active connections

// b) All the processes that runs on specific port:
// - Command: lsof -i :port
// - Description: Displays all processes that are using a specific port (replace 'port' with the desired port number)

// Example: lsof -i :3000
// Output: 
// COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME 
// node    12345 user   12u  IPv4 123456      0t0  TCP *:3000 (LISTEN)
// node    12345 user   13u  IPv6 123457      0t0  TCP *:3000 (LISTEN)
// - Shows the process ID (PID) and user of the process running on port 3000
// - The process is a node server listening on port 3000
// - The process is listening on both IPv4 and IPv6 addresses
// - The process is running as the user
// - The process is listening for incoming connections on port 3000
