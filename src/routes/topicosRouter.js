const express = require('express');
const topicosController = require('../controllers/topicosController');

const router = express.Router();

// RENDERIZAÇÃO DO FORMULÁRIO DE CADASTRO DE UM TÓPICO
router.get(
  '/disciplinas/:id_disciplina/topicos/form',
  topicosController.renderizarFormulario,
);

// (PROFESSOR) LISTAR TÓPICOS
router.get('/disciplinas/:id_disciplina/topicos', topicosController.listar);

// CADASTRAR TÓPICO
router.post('/disciplinas/:id_disciplina/topicos', topicosController.cadastrar);

// RENDERIZAÇÃO DO FORMULÁRIO DE EDIÇÃO DE UM TÓPICO
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/form',
  topicosController.renderizarFormEdicao,
);

// EDITAR TÓPICO
router.post(
  '/disciplinas/:id_disciplina/topicos/:id_topico',
  topicosController.editar,
);

// EXCLUIR TÓPICO
router.delete(
  '/disciplinas/:id_disciplina/topicos/:id_topico',
  topicosController.excluir,
);

// (ESTUDANTE) LISTAR TÓPICOS
router.get(
  '/disciplinas/:id_disciplina/professores/:id_professor/topicos',
  topicosController.listar,
);

module.exports = router;
