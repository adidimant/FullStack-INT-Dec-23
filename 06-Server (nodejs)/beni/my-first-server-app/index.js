const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(
    `New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${
      req.url
    }. headers: ${JSON.stringify(req.headers)}`
  );
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
