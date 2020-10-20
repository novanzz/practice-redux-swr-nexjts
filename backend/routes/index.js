const express = require('express');
const router = express.Router();

const index = require('../controller/index');

router.get('/listorder',index.order);
router.post('/detailorder',index.detailOrder);
router.post('/search',index.searchOrder);

module.exports = router;