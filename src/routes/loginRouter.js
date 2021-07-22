const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// RENDERIZAÇÃO DA TELA DE LOGIN
router.get('/usuarios/login', loginController.loginRender);

// PROCESSO DE AUTENTICAÇÃO
router.post('/usuarios/login', loginController.auth);

module.exports = router;
