const express = require('express');

const router = express.Router();

router.get('/biblioteca', (req, res) => {
  res.render('biblioteca');
});

router.get('/cadastro', (req, res) => {
  res.render('cadastro-usuario');
});

router.get('/curso', (req, res) => {
  res.render('criar-curso');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard-aluno');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/forum-geral', (req, res) => {
  res.render('forum-geral');
});

router.get('/home-aula', (req, res) => {
  res.render('home-aula');
});

router.get('/home-curso', (req, res) => {
  res.render('home-curso');
});

router.get('/forum-materia', (req, res) => {
  res.render('subtela-forum-materia');
});

module.exports = router;
