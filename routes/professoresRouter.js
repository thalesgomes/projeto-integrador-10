const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

router.get('/', professoresController.index);
router.post('/', professoresController.store);

module.exports = router;