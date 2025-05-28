const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { getAllUsers, getUserDetails, updateUser, registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/me', authMiddleware, getUserDetails);
router.put('/update', authMiddleware, updateUser);

router.get('/', authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
