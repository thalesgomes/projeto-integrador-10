const express = require('express');
const router = express.Router();
const topicosController = require('../controllers/topicosController');

router.post('/:disciplina_id/topicos', topicosController.store);

module.exports = router;