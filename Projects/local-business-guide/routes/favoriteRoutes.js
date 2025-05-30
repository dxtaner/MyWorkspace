const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');
const { authMiddleware } = require('../middleware/auth');

router.get('/user/:userId', authMiddleware, favoriteController.getFavoritesByUser);

router.post('/', authMiddleware, favoriteController.addFavorite);

router.delete('/user/:userId/business/:businessId', authMiddleware, favoriteController.deleteFavorite);

module.exports = router;
