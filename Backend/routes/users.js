var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var { body } = require('express-validator');
var authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
  body('name').isLength({ min: 4 }).withMessage(' name must be 4 characters long'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 7 }).withMessage('Password must be at least 7 characters long'),
],
  userController.register
)

router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.login)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout', authMiddleware.authUser, userController.logoutUser);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.post('/verify-otp', userController.verifyOTP);

module.exports = router;
