const express = require('express');
const request = require('request');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/*', (req, res) => {
  const url = `https://query1.finance.yahoo.com${req.originalUrl.replace('/api', '')}`;
  console.log(`Proxying request to: ${url}`);
  req.pipe(request({ url })).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
