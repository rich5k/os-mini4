const express = require('express');

const PermCtrl = require('../controllers/permissions-ctrl');

const router = express.Router();

router.get('/permissions',PermCtrl.displayPermissions);

module.exports = router;