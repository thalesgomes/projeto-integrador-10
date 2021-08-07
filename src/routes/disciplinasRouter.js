const express = require('express');
const disciplinasController = require('../controllers/disciplinasController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DO FORMULÁRIO
router.get('/disciplinas/form', disciplinasController.formRender);

// CADASTRAR UM DISCIPLINA
router.post('/disciplinas/', disciplinasController.store);

router.get('/disciplina/:id_disciplina/professores', disciplinasController.listar_professores)

module.exports = router;
