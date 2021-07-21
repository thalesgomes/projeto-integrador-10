const express = require('express');

const router = express.Router();

router.get('/aulas/biblioteca', (req, res) => {
  res.render('aulas_biblioteca');
});

router.get('/aulas/emcurso', (req, res) => {
  res.render('aulas_em_curso');
});

router.get('/aulas/edicao', (req, res) => {
  res.render('aulas_edicao');
});

router.get('/forum', (req, res) => {
  res.render('forum');
});

router.get('/forum/topicos', (req, res) => {
  res.render('forum_topicos');
});

router.get('/usuarios/cadastro', (req, res) => {
  res.render('usuarios_cadastro');
});

module.exports = router;
