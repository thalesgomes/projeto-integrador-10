const express = require('express');
const path = require('path');
const session = require('express-session');

// import of routers
const renderRouter = require('./routes/renderRouter');
const professoresRouter = require('./routes/professoresRouter');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public directory setup
app.use(express.static(path.resolve(__dirname, '../', 'public')));

// express-session setup
app.use(session({
  secret: 'saber Digital',
  resave: true,
  saveUninitialized: false,
}));

// routes and middlewares
app.use('/', renderRouter);
app.use('/', professoresRouter);

module.exports = app;
