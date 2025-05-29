const express = require('express');
const router = express.Router();
const businessImageController = require('../controllers/businessImageController');
const { authMiddleware } = require('../middleware/auth');

router.get('/business/:businessId', businessImageController.getBusinessImages);

router.post('/', authMiddleware, businessImageController.addBusinessImage);

router.delete('/:id', authMiddleware, businessImageController.deleteBusinessImage);

module.exports = router;
