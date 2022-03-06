const router = require('express').Router();
const {
  getRoomChat,
  getMessagesChat,
  getMessageChat,
  createMessageChat
} = require('../controllers/chat');

router.get('/getRoomChat', getRoomChat);
router.get('/getMessagesChat', getMessagesChat);
router.get('/getMessageChat', getMessageChat);
router.post('/createMessageChat', createMessageChat);

module.exports = router;