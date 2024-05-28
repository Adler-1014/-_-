const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

router.post('/create', contractController.createContract);
router.get('/:id', contractController.getContract);
router.post('/complete', contractController.completeContract);

module.exports = router;