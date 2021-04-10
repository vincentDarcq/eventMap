const path = require('path');
// Gérer les fichiers
const multer = require('multer');
const storage = multer(
  {
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../upload'));
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      }
    })
  });

const router = require('express').Router();
const { getAll, create, modify, deleteOne, uploadImages } = require('../controllers/event');

router.post('/create', create);
router.post('/uploadImages', storage.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]),
  uploadImages)
router.put('/modify', modify);
router.get('/getAll', getAll);
router.delete('/deleteOne', deleteOne);

module.exports = router;