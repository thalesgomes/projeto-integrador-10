const express = require('express');
const bibliotecaController = require('../controllers/bibliotecaController');

const router = express.Router();

// LISTAR DISCIPLINAS
router.get('/disciplinas', bibliotecaController.listar);

module.exports = router;
