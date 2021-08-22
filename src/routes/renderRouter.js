const express = require('express');

const router = express.Router();

router.get('/topicos', (req, res) => {
  res.render('pages/topicos_professor');
});

router.get('/aulas', (req, res) => {
  res.render('pages/aulas_em_curso');
});

module.exports = router;
