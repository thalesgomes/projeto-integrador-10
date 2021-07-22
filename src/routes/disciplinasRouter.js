const express = require('express');
const disciplinasController = require('../controllers/disciplinasController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DO FORMULÁRIO
router.get('/disciplinas/form', disciplinasController.formRender);

// CADASTRAR UM DISCIPLINA
router.post('/disciplinas/', disciplinasController.store);

module.exports = router;
