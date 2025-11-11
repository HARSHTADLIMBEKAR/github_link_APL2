const express = require('express');
const app = express();
app.use((req,res,next)=>{ console.log(req.method, req.path); next(); });
app.use('/static', express.static('public'));
app.get('/', (req,res)=> res.send('Home'));
app.listen(3007, ()=> console.log('http://localhost:3007'));
