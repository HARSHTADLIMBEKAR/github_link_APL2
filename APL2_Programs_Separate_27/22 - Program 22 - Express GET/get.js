const express = require('express');
const app = express();
app.get('/greet', (req, res) => res.json({ msg: `Hello ${req.query.name || 'World'}` }));
app.listen(3003, ()=> console.log('GET http://localhost:3003/greet?name=Harsh'));
