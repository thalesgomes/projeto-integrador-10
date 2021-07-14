const express = require('express');
const router = express.Router();
const topicosController = require('../controllers/topicosController');

router.get('/:disciplina_id/topicos', topicosController.index);
router.post('/:disciplina_id/topicos', topicosController.store);

module.exports = router;