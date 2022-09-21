const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
const { requireAuth } = require('../middlewares/authMiddleware')
const cmntController = require('../controllers/cmntController')

router.get('/', authController.home);
router.get('/login', authController.loginView);
router.post('/login', authController.login);
router.get('/signup', authController.signupView);
router.post('/signup', authController.signup);
router.get('/smoothies', requireAuth, authController.smoothies);
router.get('/logout', authController.logout);
router.get('/:id', requireAuth, authController.deleteUser)
router.post('/search/:key', requireAuth, authController.searchUser)
router.post('/edit/:id', requireAuth, authController.editUser)
router.get('/edit/:id', requireAuth, authController.getEditUser)
router.post('/smoothies', requireAuth, cmntController.createComment)

module.exports = router;