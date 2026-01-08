//nested router from spots router
const express = require("express");
const controller = require('../controllers/authController.js');
const router = express.Router();

// considering GET/POST /api/auth/
router.post('/signup', controller.signup);

router.post('/login', controller.login);

module.exports = router;