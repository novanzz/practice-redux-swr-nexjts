const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

const PackageControllers = require('../controller/package');

router.get('/', checkAuth,PackageControllers.package);
router.post('/payment', checkAuth,PackageControllers.order);

module.exports = router;