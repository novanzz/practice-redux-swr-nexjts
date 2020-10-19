const express = require('express');
const router = express.Router();

const index = require('../controller/index');

router.get('/listorder',index.order);
router.post('/detailorder',index.detailOrder);

module.exports = router;