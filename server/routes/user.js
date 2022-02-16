const router = require('express').Router();
const storage = require('../upload/multer');

const {
  getUser,
  editPass,
  deleteUser,
  uploadPicture
} = require('../controllers/user')

router.get('/getUser', getUser);
router.post('/editPass', editPass);
router.post('/uploadImages', storage.fields([{ name: 'picture' }]), uploadPicture)
router.delete('/delete', deleteUser);

module.exports = router;