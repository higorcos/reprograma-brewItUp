const express = require('express');
const router = express.Router();
const cervejariasController = require('../controllers/cervejariasController');

router.get('/', cervejariasController.get);
router.post('/', cervejariasController.post);

module.exports = router;