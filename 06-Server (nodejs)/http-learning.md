* HTTP methods:
GET - getting data (without any change), no body allowed in the request - all the data/parameters are transferred in the url through query params / endpoint params
POST - creating/updating existing data, the data points to update are transferred in the body object
PUT - updating/creating new data, the data points needed of the new object are transferred in the body object
DELETE - deleting existing resource/data, the data points needed of the deletion are transferred in the body object or as query params

app.get('/', (req, res) => {
  res.send('Hello World!')
})
Respond to POST request on the root route (/), the application’s home page:

app.post('/', (req, res) => {
  res.send('Got a POST request')
})
Respond to a PUT request to the /user route:

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
Respond to a DELETE request to the /user route:

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

a way to simulate http request from terminal: curl -x POST http://localhost:3000/endpoint1

Request structure:
http://localhost:3000/someEndpoint/.../?queryParam1=value1&queryParam2=value2
  headers: {
    user-agent: ...,
    cookies: ...
    Content-Type: 'application/json'
  }
  body: {
    ...
  }

in POST /login:
body: {
  username: 'asd',
  password: 123456
}

in POST /task:
body: {
  name: 'support new endpoint for a customer",
  creator: 'adi.dim@walla.com',
  assignee: 'ziv-elharar',
  description: 'this is the most difficult task we had so far',
  dueDate: '01/10/2024',
}

- In fetch (browser):
await fetch("http://localhost:3000/tasks")  // creating a GET request that brings me all the tasks
await fetch("https://localhost:3000/task", {  // Creating a post request that creates task
  method: "POST",
  body: JSON.stringify({ name, creator, assignee, description, dueDate }),
})
- In axios library:
(all of them - using: `await axios.get` or `await axios.post` etc.)

* HTTP status code of responses:
- 2xx group - success:
  - 200 - general success, the data is in the response body
  - 201 - created successfully
- 3xx - further action needs to be taken by the user agent in order to fulfill a request
  - 301,302 - Moved Permanently/Not Found - the address/content you request is exist but on another place (and in the response - we give in the 'location' header the another url for the browser/user to get the content)
  - 304 - the content that you requested wasn't changed since last time you requested, get it from your browser cache
- 4xx
  - 400 - Bad request (missing params for the endpoint to be executed)
  - 401 - unauthorized, missing credentials (like token), or that the user isn't allowed to do such action
  - 403 - forbidden, the server understand the request & how is making it, but for some reason refuses to give answer. example: VPM restriction in a company that gives the proper response only if your VPN turned on.
  - 404 - not found, examples: the website wasn't found, the endpoint isn't exist in the server, or the resource (data) isn't exist in the db
  - 429 - rate limit exeed in the server
- 5xx - server error (our fault)

`app.use` has two usages:
1) app.use(someMiddlewareFunction) => performing some global middleware above any endpoint
2) app.use('/some-endpoint', (req, res) => { ... }); => acting as an endpoint - the order here is important
  - in (2) - you can use also app.use('*', (req,res) => {...}) - it means that is serves every endpoint and every http method (if not served before)

on the `res` parameter we learned the following functions:
1) res.status(400) => sets the status code on the response to 400 (not sending yet)
  - normally we use it like: `res.status(401).send('Unauthorized for this action!');`
2) res.send('some-string') - sends the response with 'some-string' (default status code - 200) 
3) res.json - for a response with some object payload (default status code - 200)
4) res.sendStatus - sends immediately the response with a status code and 'OK'
4) res.render('not-found') - sends the response as html view for the client side (the 'not-found' view should be defined as file)