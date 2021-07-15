const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinasController');

router.get('/:professor_id/disciplinas', disciplinasController.index);
router.post('/:professor_id/disciplinas', disciplinasController.store);

module.exports = router;