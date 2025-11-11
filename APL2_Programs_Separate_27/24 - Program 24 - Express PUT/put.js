const express = require('express');
const app = express();
app.use(express.json());
app.put('/users/:id', (req, res) => {
  res.json({ id: req.params.id, updated: req.body });
});
app.listen(3005, ()=> console.log('PUT http://localhost:3005/users/1'));
