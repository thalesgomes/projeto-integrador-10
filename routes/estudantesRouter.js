const express = require('express');
const router = express.Router();
const estudantesController = require('../controllers/estudantesController');

router.post('/', estudantesController.store);

module.exports = router;