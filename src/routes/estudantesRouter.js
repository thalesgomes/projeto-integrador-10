const express = require('express');
const estudantesController = require('../controllers/estudantesController');

const router = express.Router();

// RENDERIZAÇÃO DO DASHBOARD
router.get('/aluno/dashboard', estudantesController.dashboardRender);

module.exports = router;
