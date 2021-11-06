const express = require('express');
const router = express.Router();

const userConstrollers = require('../controllers/users');

router.route("/").get(userConstrollers.login).post(userConstrollers.signup);

router.route("/:id").get(postConstrollers.getUserbyId);

module.exports = router;
