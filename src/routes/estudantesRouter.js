const express = require('express');
const estudantesController = require('../controllers/estudantesController');

const router = express.Router();

// CADASTRO DE DISCIPLINA FEITO PELO ESTUDANTE
router.post(
  '/disciplinas/:id_disciplina/professores/:id_professor/inscricao',
  estudantesController.inscreverDisciplina,
);

module.exports = router;
