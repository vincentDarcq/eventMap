const router = require('express').Router();
const auth = require('./auth');
const event = require('./event');
const network = require('./network');
const music_story = require('./music_story');

router.use('/api/auth', auth);
router.use('/api/event', event);
router.use('/api/network', network);
router.use('/api/music_story', music_story)

module.exports = router;
