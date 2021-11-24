const express = require('express');

const PermCtrl = require('../controllers/permissions-ctrl');

const router = express.Router();

router.get('/permissions?code=:number',PermCtrl.displayPermissions);

module.exports = router;