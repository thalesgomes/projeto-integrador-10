const express = require('express');
const cadastroController = require('../controllers/cadastroController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW
router.get('/usuarios/cadastro', cadastroController.cadastroRender);

// CADASTRAR ESTUDANTE
router.post('/usuarios/cadastro', cadastroController.cadastrar);

module.exports = router;
