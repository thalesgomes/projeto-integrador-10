const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunosController');

router.post('/', alunosController.store);

module.exports = router;