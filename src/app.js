const express = require('express');
const path = require('path');
const session = require('express-session');

// import of routers
const renderRouter = require('./routes/renderRouter');
const loginRouter = require('./routes/loginRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const professoresRouter = require('./routes/professoresRouter');
const estudantesRouter = require('./routes/estudantesRouter');
const disciplinasRouter = require('./routes/disciplinasRouter');
const topicosRouter = require('./routes/topicosRouter');
const bibliotecaRouter = require('./routes/bibliotecaRouter');
const aulasRouter = require('./routes/aulasRouter');

// import of middlewares
const authMid = require('./middlewares/authMid');

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
app.use('/', cadastroRouter);
app.use('/', loginRouter);
app.use('/', authMid, renderRouter);
app.use('/', authMid, estudantesRouter);
app.use('/', authMid, professoresRouter);
app.use('/', authMid, disciplinasRouter);
app.use('/', authMid, topicosRouter);
app.use('/', authMid, bibliotecaRouter);
app.use('/', authMid, aulasRouter);

module.exports = app;
