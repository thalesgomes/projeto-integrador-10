const express = require('express');

const router = express.Router();

router.get('/aulas/emcurso', (req, res) => {
  res.render('aulas_em_curso');
});

router.get('/forum', (req, res) => {
  res.render('forum');
});

router.get('/forum/topicos', (req, res) => {
  res.render('forum_topicos');
});

router.get('/index', (req, res) => {
  res.render('bootstrap/index');
});

module.exports = router;
