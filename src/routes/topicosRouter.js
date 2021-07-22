const express = require('express');
const topicosController = require('../controllers/topicosController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DO FORMULÁRIO
router.get('/disciplinas/:id_disciplina/topicos/form', topicosController.formRender);

// OBTER TODOS OS TÓPICOS DE DETERMINADA DISCIPLINA
router.get('/disciplinas/:id_disciplina/topicos', topicosController.show);

// CADASTRAR UM TÓPICO DE DETERMINADA DISCIPLINA
router.post('/disciplinas/:id_disciplina/topicos', topicosController.store);

module.exports = router;
