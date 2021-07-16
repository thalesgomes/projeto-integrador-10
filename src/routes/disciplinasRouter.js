const express = require('express');
const disciplinasController = require('../controllers/disciplinasController');

const router = express.Router();

// OBTER TODAS AS DISCIPLINAS
router.get('/disciplinas/', disciplinasController.show);

// OBTER APENAS UMA DISCIPLINA
// router.get('/disciplinas/:id_disciplina/', disciplinasController.index);

// CADASTRAR UM DISCIPLINA
router.post('/disciplinas/', disciplinasController.store);

// ATUALIZAR UM DISCIPLINA
// router.post('/disciplinas/:id_disciplina/', disciplinasController.update);

// DELETAR UM DISCIPLINA
// router.post('/disciplinas/:id_disciplina/', disciplinasController.delete);

module.exports = router;
