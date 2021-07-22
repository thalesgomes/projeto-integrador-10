const express = require('express');
const professoresController = require('../controllers/professoresController');

const router = express.Router();

// RENDERIZAÇÃO DO DASHBOARD
router.get('/professor/dashboard', professoresController.dashboardRender);

module.exports = router;
