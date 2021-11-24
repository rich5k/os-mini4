const express = require('express');

const ParityCtrl = require('../controllers/parity-ctrl');

const router = express.Router();

router.get('/parity?b1=:bits1&b2=:bits2&b3=:bits3&b4=:bits4',ParityCtrl.getParityBits);

module.exports = router;