const express = require('express');
const bibliotecaController = require('../controllers/bibliotecaController');

const router = express.Router();

// BUSCA POR DISCIPLINAS
router.get('/biblioteca', bibliotecaController.show);

module.exports = router;
