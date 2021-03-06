const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

const BillingControllers = require('../controller/billing');

router.get('/',checkAuth,BillingControllers.billing);
router.post('/payment',checkAuth,BillingControllers.order);
router.get('/test',checkAuth,BillingControllers.billing);

module.exports = router;