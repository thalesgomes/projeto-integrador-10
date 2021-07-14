/* eslint-disable linebreak-style */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/indexRouter');
const usuariosRouter = require('./routes/usuarios');
const estudantesRouter = require('./routes/estudantesRouter');
const topicosRouter = require('./routes/topicosRouter');
const disciplinasRouter = require('./routes/disciplinasRouter');

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
app.use('/usuarios', usuariosRouter);
app.use('/estudantes', estudantesRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/disciplinas', topicosRouter);

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
// });

module.exports = app;
