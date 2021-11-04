const express = require('express');
const router = express.Router();

router.post('/signup', userCtrl.signup);

module.exports = router;
