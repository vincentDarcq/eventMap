const storage = require('../upload/multer');
const router = require('express').Router();
const {
  getAll,
  get,
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
router.get('/getAll', getAll);
router.post('/get', get);
router.delete('/deleteOne', deleteOne);
router.get('/getMessages', getMessages);
router.post('/saveMessage', createMessage);

module.exports = router;