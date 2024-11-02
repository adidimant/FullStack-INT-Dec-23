
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}. headers: ${JSON.stringify(req.headers)}`);
  res.send('Hello World!');
});

app.put('/task', (req, res) => {
  const body = req.body;
  console.log("body:", body);

  const { name } = req.body;

  if (!name) {
    res.status(400).send("Bad request - parameter `name` is missing");
  }

  // use the body data to create the task in the db

  res.status(201).send(`The task '${name}' was created successfully`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});