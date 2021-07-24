const express = require('express');
const estudantesController = require('../controllers/estudantesController');

const router = express.Router();

// RENDERIZAÇÃO DO DASHBOARD
router.get('/estudante/dashboard', estudantesController.dashboardRender);

// CADASTRO DE DISCIPLINA
router.post('/disciplinas/:id_disciplina', estudantesController.cadastrarDisciplina);

module.exports = router;
