const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

/** http://localhost:3000/usuarios/cadastro */
router.get('/cadastro', usuariosController.cadastro);
// router.post('/cadastro', usuariosController.salvar);
router.post('/cadastro', usuariosController.salvarNovo);

/** http://localhost:3000/usuarios/login */
router.get('/login', usuariosController.login);
router.post('/login', usuariosController.autenticacao);


module.exports = router;