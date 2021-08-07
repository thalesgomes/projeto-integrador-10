const express = require('express');
const bibliotecaController = require('../controllers/bibliotecaController');

const router = express.Router();

// BUSCA POR DISCIPLINAS
router.get('/biblioteca', bibliotecaController.show);

router.get('/biblioteca/disciplinas', bibliotecaController.show_disciplinas);

module.exports = router;
