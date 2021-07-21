const express = require('express');
const topicosController = require('../controllers/topicosController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DO FORMULÁRIO
router.get('/professores/:id_professor/disciplinas/:id_disciplina/topicos/form', topicosController.formRender);

// OBTER TODOS OS TÓPICOS DE DETERMINADA DISCIPLINA
router.get('/professores/:id_professor/disciplinas/:id_disciplina/topicos', topicosController.show);

// OBTER APENAS UM TÓPICO DE DETERMINADA DISCIPLINA
// router.get('/disciplinas/:id_disciplina/topicos/:id_topico', topicosController.index);

// CADASTRAR UM TÓPICO DE DETERMINADA DISCIPLINA
router.post('/professores/:id_professor/disciplinas/:id_disciplina/topicos', topicosController.store);

// ATUALIZAR UM TÓPICO DE DETERMINADA DISCIPLINA
// router.post('/disciplinas/:id_disciplina/topicos/:id_topico', topicosController.update);

// DELETAR UM TÓPICO DE DETERMINADA DISCIPLINA
// router.post('/disciplinas/:id_disciplina/topicos/:id_topico', topicosController.delete);

module.exports = router;
