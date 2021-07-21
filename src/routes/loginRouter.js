const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// RENDERIZAÇÃO DA TELA DE LOGIN
router.get('/login', loginController.loginRender);

router.post('/login', loginController.auth);

module.exports = router;
