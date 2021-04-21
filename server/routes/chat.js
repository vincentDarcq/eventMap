const router = require('express').Router();
const { deleteMessage } = require('../controllers/chat');

router.delete('/deleteMessage', deleteMessage);

module.exports = router;