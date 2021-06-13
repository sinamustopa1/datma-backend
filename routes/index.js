const express = require('express');
const router = express.Router();
const datmaController = require('../controllers/DatmaController');

router.get('/datma', datmaController.getMahasiswa);
router.get('/datma/:npm', datmaController.getMahasiswa);
router.get('/recommendation', datmaController.getSuggestion);
router.get('/search', datmaController.getSearch);

module.exports = router;