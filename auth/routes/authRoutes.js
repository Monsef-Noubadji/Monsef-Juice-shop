const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
const { requireAuth } = require('../middlewares/authMiddleware')

router.get('/', authController.home);
router.get('/login', authController.loginView);
router.post('/login', authController.login);
router.get('/signup', authController.signupView);
router.post('/signup', authController.signup);
router.get('/smoothies', requireAuth, authController.smoothies);
router.get('/logout', authController.logout);

module.exports = router;