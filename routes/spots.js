const express = require("express");
const controller = require('../controllers/spotsController.js');
const router = express.Router();

router.get('/', controller.getSpots);
router.get('/:id', controller.getSpotById);
router.post('/', controller.createSpot);

module.exports = router;