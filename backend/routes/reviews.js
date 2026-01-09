//nested router from spots router
const express = require("express");
const controller = require('../controllers/reviewsController.js');
const router = express.Router({ mergeParams: true });

// considering GET/POST /api/spots/:spotId/reviews
router.get('/', controller.getReviews);

router.post('/', controller.createReview);

module.exports = router;