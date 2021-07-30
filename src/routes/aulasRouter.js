const express = require('express');
const aulasController = require('../controllers/aulasController');

const router = express.Router();

// BUSCA POR AULAS
router.get('/disciplinas/:id_disciplina/topicos/:id_topico/aulas/form', aulasController.render);
router.post('/disciplinas/:id_disciplina/topicos/:id_topico/aulas', aulasController.store);

module.exports = router;