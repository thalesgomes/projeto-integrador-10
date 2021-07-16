const express = require('express');
const professoresController = require('./controllers/professoresController');

const router = express.Router();

// ROTAS PARA PROFESSORES
router.get('/professores', professoresController.index);
router.post('/professores', professoresController.store);

module.exports = router;
