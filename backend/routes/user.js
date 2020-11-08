const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const router = express.Router();

const user = require('../controller/user');

router.post('/login',checkAuth,user.index);
router.post('/user',checkAuth,user.getUser);

module.exports = router;