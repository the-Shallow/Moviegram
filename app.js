const viewRouter = require('./routes/viewRoutes');
const morgan = require('morgan');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', viewRouter);

module.exports = app;