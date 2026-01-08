const express = require("express");
const controller = require('../controllers/spotsController.js');
const reviewRouter = require('./reviews.js');
const router = express.Router();

router.get('/', controller.getSpots);
router.get('/:id', controller.getSpotById);
router.post('/', controller.createSpot);

router.use('/:spotId/reviews', reviewRouter);
module.exports = router;