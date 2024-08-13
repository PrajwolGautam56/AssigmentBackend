const express = require('express');
const { registerUser, loginUser, getProfile, requestPasswordReset, resetPassword } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Profile route (protected)
router.get('/getProfile', authMiddleware, (req, res) => {
    res.json(req.user);
  });


router.post('/request-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
  

module.exports = router;
