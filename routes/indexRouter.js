const express = require('express');
const router = express.Router();


router.get('/dashboard', (req, res) => {
  let dadosUser = req.session.usuarioLogado;
  res.render('dashboard', {dadosUser}); 
});

router.get('/aulas/biblioteca', (req, res) => {
  res.render('aulas_biblioteca');
});

router.get('/aulas/topicos', (req, res) => {
  res.render('aulas_topicos');
});

router.get('/aulas/edicao', (req, res) => {
  res.render('aulas_edicao');
});

router.get('/aulas/emcurso', (req, res) => {
  res.render('aulas_em_curso');
});

router.get('/forum', (req, res) => {
  res.render('forum');
});

router.get('/forum/topicos', (req, res) => {
  res.render('forum_topicos');
});

module.exports = router;
