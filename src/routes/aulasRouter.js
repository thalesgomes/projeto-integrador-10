const express = require('express');
const aulasController = require('../controllers/aulasController');

const router = express.Router();

// RENDERIZAÇÃO DO FORMULÁRIO
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas/form',
  aulasController.renderizarFormulario,
);

// (PROFESSOR) LISTAR AULAS
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas/:id_aula?',
  aulasController.listar,
);

// CADASTRO DE AULA
router.post(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas',
  aulasController.cadastrar,
);

// RENDERIZAÇÃO DO FORMULÁRIO DE EDIÇÃO DA AULA
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas/:id_aula/form',
  aulasController.renderizarFormEdicao,
);

// EDIÇÃO DA AULA
router.post(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas/:id_aula',
  aulasController.editar,
);

// EXCLUIR AULA
router.delete(
  '/disciplinas/:id_disciplina/topicos/:id_topico/aulas/:id_aula',
  aulasController.excluir,
);

// (PROFESSOR) LISTAR AULAS
router.get(
  '/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/aulas/:id_aula?',
  aulasController.listar,
);

module.exports = router;
