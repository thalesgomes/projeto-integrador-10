const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinasController');

router.post('/', disciplinasController.store);

module.exports = router;