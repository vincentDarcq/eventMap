const router = require('express').Router();
const { getRoomChat } = require('../controllers/chat');

router.get('/getRoomChat', getRoomChat);

module.exports = router;