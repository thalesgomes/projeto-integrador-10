const express = require('express');
const professoresController = require('../controllers/professoresController');

const router = express.Router();

// RENDERIZAÇÃO DA VIEW DE EDIÇÃO
router.get('/professores/:id_professor', professoresController.renderizarPerfilEdicao);

// EDIÇÃO DO PERFIL
router.post('/professores/:id_professor', professoresController.editarPerfil);

module.exports = router;
