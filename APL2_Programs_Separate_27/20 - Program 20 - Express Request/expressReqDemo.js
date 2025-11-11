const express = require('express');
const app = express();
app.use(express.json());
app.get('/info', (req, res) => {
  const demo = {
    method: req.method,
    url: req.url,
    path: req.path,
    query: req.query,
    headers: req.headers,
    ip: req.ip
  };
  res.json(demo);
});
app.listen(3001, ()=> console.log('http://localhost:3001/info'));
