const express = require('express');
const arquivosRouter = require('../controllers/arquivosController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DE ARQUIVOS (PROFESSOR)
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/arquivos',
  arquivosRouter.listar,
);

// EXCLUSÃO DE UM ARQUIVO
router.delete(
  '/disciplinas/:id_disciplina/topicos/:id_topico/arquivos/:filename',
  arquivosRouter.excluir,
);

// RENDERIZAÇÃO DA VIEW DE ARQUIVOS (ESTUDANTE)
router.get(
  '/disciplinas/:id_disciplina/professores/:id_professor/topicos/:id_topico/arquivos',
  arquivosRouter.listar,
);

module.exports = router;
