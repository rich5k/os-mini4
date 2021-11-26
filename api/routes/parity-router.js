const express = require('express');

const ParityCtrl = require('../controllers/parity-ctrl');

const router = express.Router();

router.get('/parity',ParityCtrl.getParityBits);

module.exports = router;