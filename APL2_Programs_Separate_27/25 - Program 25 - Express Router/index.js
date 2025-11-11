const express = require('express');
const usersRouter = require('./routes/users');
const app = express();
app.use(express.json());
app.use('/users', usersRouter);
app.listen(3006, ()=> console.log('http://localhost:3006/users'));
