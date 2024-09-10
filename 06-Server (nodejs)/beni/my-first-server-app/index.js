const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(`New request from ip: ${req.ip}, method: ${req.method}, endpoint: ${req.url}.`);
  res.send("Hello World!");
});

app.get("/obj", (req, res) => {
  console.log(`New request from ip:${req.ip}, method: ${req.method}, endpoint: ${req.url}.`);
  const obj = {
    first_name: "Beni",
    last_name: "Jaichenco",
  };
  res.send(obj);
});

app.get("/arr", (req, res) => {
  console.log(`New request from ip:${req.ip}, method: ${req.method}, endpoint: ${req.url}.`);
  const arr = ["Beni", "Jaichenco"];
  res.send(arr);
});

app.get("/json", (req, res) => {
  console.log(`New request from ip:${req.ip}, method: ${req.method}, endpoint: ${req.url}.`);
  const arrWithObj = [{ first_name: "Beni" }, { last_name: "Jaichenco" }];
  res.json(arrWithObj);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
