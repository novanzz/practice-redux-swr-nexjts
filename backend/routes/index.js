const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

const index = require('../controller/index');

router.get('/listorder',checkAuth,index.order);
router.post('/detailorder',checkAuth,index.detailOrder);
router.post('/search',checkAuth,index.searchOrder);
router.get('/key',index.test);

module.exports = router;