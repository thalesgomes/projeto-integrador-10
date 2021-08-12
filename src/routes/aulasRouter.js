const express = require('express');
const aulasController = require('../controllers/aulasController');

const router = express.Router();

// RENDERIZAÇÃO DO FORMULÁRIO
router.get('/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/aulas/form', aulasController.renderizarFormulario);

// RENDERIZAÇÃO DA VIEW DAS AULAS
router.get('/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/aulas/:id_aula?', aulasController.assistir);

// CADASTRO DE AULA
router.post('/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/aulas', aulasController.cadastrar);

module.exports = router;
