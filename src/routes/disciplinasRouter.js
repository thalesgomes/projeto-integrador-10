const express = require('express');
const disciplinasController = require('../controllers/disciplinasController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DO FORMULÁRIO
router.get('/professores/:id_professor/disciplinas/form', disciplinasController.formRender);

// OBTER TODAS AS DISCIPLINAS
// router.get('/disciplinas/', disciplinasController.show);

// OBTER APENAS UMA DISCIPLINA
// router.get('/disciplinas/:id_disciplina/', disciplinasController.index);

// CADASTRAR UM DISCIPLINA
router.post('/professores/:id_professor/disciplinas/', disciplinasController.store);

// ATUALIZAR UM DISCIPLINA
// router.post('/disciplinas/:id_disciplina/', disciplinasController.update);

// DELETAR UM DISCIPLINA
// router.post('/disciplinas/:id_disciplina/', disciplinasController.delete);

module.exports = router;
