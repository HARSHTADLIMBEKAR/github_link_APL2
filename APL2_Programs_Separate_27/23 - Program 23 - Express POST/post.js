const express = require('express');
const app = express();
app.use(express.json());
app.post('/echo', (req, res) => res.json({ youSent: req.body }));
app.listen(3004, ()=> console.log('POST http://localhost:3004/echo'));
