const storage = require('../upload/multer');
const router = require('express').Router();
const {
  get,
  find,
  create,
  modify,
  deleteOne,
  uploadImages,
  createMessage,
  getMessages } = require('../controllers/event');


router.post('/create', create);
router.post('/uploadImages', storage.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]),
  uploadImages)
router.put('/modify', modify);
router.post('/get', get);
router.post('/find', find);
router.delete('/deleteOne', deleteOne);
router.get('/getMessages', getMessages);
router.post('/saveMessage', createMessage);

module.exports = router;