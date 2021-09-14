const express = require('express');
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');
const morgan = require('morgan');
const multer = require('multer');
const sessionStore = require('./database/sessionStore/index');
const multerConfig = require('./config/multer');

// import of routers
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const homeRouter = require('./routes/homeRouter');
const dashboardRouter = require('./routes/dashboardRouter');
const bibliotecaRouter = require('./routes/bibliotecaRouter');
const estudantesRouter = require('./routes/estudantesRouter');
// const professoresRouter = require('./routes/professoresRouter');
// const disciplinasRouter = require('./routes/disciplinasRouter');
const topicosRouter = require('./routes/topicosRouter');
const aulasRouter = require('./routes/aulasRouter');
const arquivosRouter = require('./routes/arquivosRouter');

// import of middlewares
const authMid = require('./middlewares/authMid');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, '../', 'frontend', 'views'));
app.set('view engine', 'ejs');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public directory setup
app.use(express.static(path.resolve(__dirname, '../', 'public')));

// express-session setup
app.use(
  session({
    secret: 'saber Digital',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  }),
);

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HTTP request logger middleware for node.js
app.use(morgan('dev'));

// routes and middlewares
app.use('/', cadastroRouter);
app.use('/', loginRouter);
app.use('/', homeRouter);
app.use('/', authMid, dashboardRouter);
app.use('/', authMid, bibliotecaRouter);
app.use('/', authMid, estudantesRouter);
// app.use('/', authMid, professoresRouter);
// app.use('/', authMid, disciplinasRouter);
app.use('/', authMid, topicosRouter);
app.use('/', authMid, multer(multerConfig).single('file'), aulasRouter);
app.use('/', authMid, arquivosRouter);

module.exports = app;
