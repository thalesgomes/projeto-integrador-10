const { request, response } = require('express');
var express = require('express');
var router = express.Router();

router.get('/biblioteca', function(req, res) {
  res.render('biblioteca');
});

router.get('/cadastro', function(req, res) {
  res.render('cadastro-usuario');
});

router.get('/curso', function(req, res) {
  res.render('criar-curso');
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard-aluno');
});

router.get('/login', (resquest, response) => {
  response.render('login');
});

router.get('/forum-geral', (resquest, response) => {
  response.render('forum-geral')
});

router.get('/home-aula', (request, response) => {
  response.render('home-aula')
})

router.get('/home-curso', (request, response) => {
  response.render('home-curso')
})

router.get('/forum-materia', (request, response) => {
  response.render('subtela-forum-materia')
});

module.exports = router;
