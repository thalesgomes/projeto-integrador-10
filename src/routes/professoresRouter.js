const express = require('express');
const professoresController = require('../controllers/professoresController');

const router = express.Router();

// OBTER TODOS OS PROFESSORES
router.get('/professores/', professoresController.show);

// OBTER APENAS UM PROFESSOR
// router.get('/professores/:id_professor/', professoresController.index);

// CADASTRAR UM PROFESSOR
router.post('/professores/', professoresController.store);

// ATUALIZAR UM PROFESSOR
// router.post('/professores/:id_professor/', professoresController.update);

// DELETAR UM PROFESSOR
// router.post('/professores/:id_professor/', professoresController.delete);

module.exports = router;
