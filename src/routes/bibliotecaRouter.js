const express = require('express');
const bibliotecaController = require('../controllers/bibliotecaController');

const router = express.Router();

// LISTAR DISCIPLINAS
router.get('/disciplinas', bibliotecaController.listarDisciplinas);

// LISTAR PROFESSORES DE UMA DISCIPLINA
router.get('/disciplinas/:id_disciplina/professores', bibliotecaController.listarProfessores);

module.exports = router;
