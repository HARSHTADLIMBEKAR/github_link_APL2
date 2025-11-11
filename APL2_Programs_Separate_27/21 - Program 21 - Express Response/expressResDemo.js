const express = require('express');
const app = express();
app.get('/res', (req, res) => {
  res.status(201);
  res.set('X-Demo','1');
  res.type('text').send('Created');
});
app.listen(3002, ()=> console.log('http://localhost:3002/res'));
