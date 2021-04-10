const router = require('express').Router();

const { signin, refresh_token, signup, isLoggedIn, user, editPass} = require('../controllers/authentication')

router.get('/refresh-token', refresh_token);
router.get('/current', isLoggedIn);
router.get('/user', user);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/editPass', editPass);
router.delete('/delete');

module.exports = router;