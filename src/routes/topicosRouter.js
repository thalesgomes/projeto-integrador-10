const express = require('express');
const topicosController = require('../controllers/topicosController');

const router = express.Router();

// RENDERIZAÇÃO DO FORMULÁRIO DE CADASTRO DE UM TÓPICO
router.get('/disciplinas/:id_disciplina/professores/:id_professor/topicos/form', topicosController.renderizarFormulario);

// LISTAR TÓPICOS DE DETERMINADA DISCIPLINA DE UM PROFESSOR ESPECÍFICO
router.get('/disciplinas/:id_disciplina/professores/:id_professor/topicos', topicosController.listar);

// CADASTRAR TÓPICO DE DETERMINADA DISCIPLINA DE UM PROFESSOR ESPECÍFICO
router.post('/disciplinas/:id_disciplina/professores/:id_professor/topicos', topicosController.cadastrar);

// LISTAR TÓPICOS DE DETERMINADA DISCIPLINA DE UM PROFESSOR ESPECÍFICO PARA EDIÇÃO
router.get('/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/form', topicosController.RenderizarFormEdicao);

// EDITAR NOME DE DETERMINADO TÓPICO
router.post('/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico', topicosController.EditarNomeTopico);

module.exports = router;
