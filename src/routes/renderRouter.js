const express = require('express');

const router = express.Router();

router.get('/cadastro', (req, res) => {
  res.render('pages/cadastro');
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.get('/inicial', (req, res) => {
  res.render('pages/inicial');
});

router.get('/topicos', (req, res) => {
  res.render('pages/topicos_professor');
});

router.get('/aulas', (req, res) => {
  res.render('pages/aulas_em_curso');
});

module.exports = router;
