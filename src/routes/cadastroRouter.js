const express = require('express');
const cadastroController = require('../controllers/cadastroController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DE CADASTRO DO USUÁRIO
router.get('/cadastro', cadastroController.renderizarFormulario);

// CADASTRO DO USUÁRIO
router.post('/cadastro', cadastroController.cadastrar);

module.exports = router;
