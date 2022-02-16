const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const event = require('./event');
const network = require('./network');
const music_story = require('./music_story');
const chat = require('./chat');

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/event', event);
router.use('/api/music_story', music_story);
router.use('/api/chat', chat);
router.use('/api/network', network);

module.exports = router;
