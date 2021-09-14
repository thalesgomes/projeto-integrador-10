const express = require('express');
const arquivosRouter = require('../controllers/arquivosController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DE ARQUIVOS
router.get(
  '/disciplinas/:id_disciplina/topicos/:id_topico/arquivos',
  arquivosRouter.listar,
);

// EXCLUSÃO DE UM ARQUIVO
router.delete(
  '/disciplinas/:id_disciplina/topicos/:id_topico/arquivos/:filename',
  arquivosRouter.excluir,
);

module.exports = router;
