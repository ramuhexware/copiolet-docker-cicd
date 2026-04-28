// simple app which listens to port 3000 and responds with "Hello World!" to all requests

const express = require('express');

const app = express();
const port = 3000;

app.get('*', (req, res) => {
  res.send('Hello World! From Docker CI/CD pipeline');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

