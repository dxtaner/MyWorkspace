const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const {
    createBusiness,
    getAllBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,
} = require('../controllers/businessController');

const router = express.Router();

router.get('/', getAllBusinesses);
router.get('/:id', getBusinessById);

router.post('/', authMiddleware, createBusiness);
router.put('/:id', authMiddleware, updateBusiness);
router.delete('/:id', authMiddleware, deleteBusiness);

module.exports = router;
