const express = require("express");
const controller = require('../controllers/reviewsController.js');
const router = express.Router();

router.get('/:spot_id', controller.getReviews);
router.post('/', controller.createReview);

module.exports = router;