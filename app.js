/* eslint-disable linebreak-style */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/indexRouter');
const routes = require('./routes');
// const usuariosRouter = require('./routes/usuarios');
// const estudantesRouter = require('./routes/estudantesRouter');
// const topicosRouter = require('./routes/topicosRouter');
// const disciplinasRouter = require('./routes/disciplinasRouter');
// const professoresRouter = require('./routes/professoresRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'saber Digital',
  resave: true,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/', routes);
// app.use('/usuarios', usuariosRouter);
// app.use('/estudantes', estudantesRouter);
// app.use('/professores', professoresRouter);
// app.use('/professores', disciplinasRouter);
// app.use('/disciplinas', topicosRouter);


module.exports = app;
