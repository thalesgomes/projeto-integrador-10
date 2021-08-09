const express = require('express');
const dashboardController = require('../controllers/dashboardController');

const router = express.Router();

// RENDERIZAÇÃO DO DASHBOARD
router.get('/dashboard', dashboardController.renderizarDashboard);

module.exports = router;
