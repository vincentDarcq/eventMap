const storage = require('../upload/multer');
const router = require('express').Router();
const { getAll, create, modify, deleteOne, uploadImages } = require('../controllers/event');


router.post('/create', create);
router.post('/uploadImages', storage.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]),
  uploadImages)
router.put('/modify', modify);
router.get('/getAll', getAll);
router.delete('/deleteOne', deleteOne);

module.exports = router;