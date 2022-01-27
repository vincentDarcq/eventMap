const router = require('express').Router();
const { deleteMessage, initChat, getRoomChat } = require('../controllers/chat');

router.delete('/deleteMessage', deleteMessage);
router.get('/initChat', initChat);
router.get('/getRoomChat', getRoomChat);

module.exports = router;