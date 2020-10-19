const express = require('express');
const router = express.Router();

const PackageControllers = require('../controller/package');

router.get('/', PackageControllers.package);
router.post('/payment', PackageControllers.order);

module.exports = router;