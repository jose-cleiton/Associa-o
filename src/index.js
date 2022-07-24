const express = require('express');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const usersRoute = require('./routes/usersRoute');
const petsRoute = require('./routes/petsRoute');

const app = express();
app.use(express.json());

app.use('/users', usersRoute);
app.use('/pets', petsRoute);

app.use(errorHandlerMiddleware);

app.listen(3000, () => console.log('rodando na porta 3000'));