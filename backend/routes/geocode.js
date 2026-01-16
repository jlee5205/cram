const express = require("express");
const controller = require('../controllers/geocodeController.js');
const router = express.Router();

router.get('/', controller.geocodeAddress());

module.exports = router;