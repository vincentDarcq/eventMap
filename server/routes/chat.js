const router = require('express').Router();
const { getRoomChat, getMessagesChat } = require('../controllers/chat');

router.get('/getRoomChat', getRoomChat);
router.get('/getMessagesChat', getMessagesChat);

module.exports = router;