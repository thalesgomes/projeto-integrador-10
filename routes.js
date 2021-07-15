const express = require('express');
const router = express.Router();
const disciplinasController = require('./controllers/disciplinasController');
const estudantesController = require('./controllers/estudantesController');
const professoresController = require('./controllers/professoresController');
const topicosController = require('./controllers/topicosController');

// ROTAS PARA ESTUDANTES
router.get('/estudantes', estudantesController.store);
router.post('/estudantes', estudantesController.store);

// ROTAS PARA PROFESSORES
router.get('/professores', professoresController.index);
router.post('/professores', professoresController.store);

// ROTAS PARA DISCIPLINAS
router.get('/disciplinas', disciplinasController.index);
router.post('/professores/:professor_id/disciplinas', disciplinasController.store);

// ROTAS PARA TÓPICOS
router.get('/disciplinas/:disciplina_id/topicos', topicosController.index);
router.post('/disciplinas/:disciplina_id/topicos', topicosController.store);

module.exports = router;