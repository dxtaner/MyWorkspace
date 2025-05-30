const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authMiddleware } = require('../middleware/auth');

router.get('/business/:businessId', reviewController.getReviewsByBusiness);

router.post('/', authMiddleware, reviewController.addReview);

router.get('/:id', reviewController.getReviewById);

router.put('/:id', authMiddleware, reviewController.updateReview);

router.delete('/:id', authMiddleware, reviewController.deleteReview);

module.exports = router;
