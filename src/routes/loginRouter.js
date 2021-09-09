const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DE LOGIN
router.get('/login', loginController.renderizarLogin);

// PROCESSO DE AUTENTICAÇÃO/LOGIN
router.post('/login', loginController.autenticar);

// PROCESSO DE LOGOUT
router.get('/usuarios/logout', loginController.sair);

module.exports = router;
