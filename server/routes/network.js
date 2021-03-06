const router = require('express').Router();
const {
  askFriend,
  getAsks,
  deleteAskFriend,
  acceptFriend,
  deniedFriend,
  deleteFriend,
  findUsersForNamesStartWith
} = require('../controllers/network_services')

router.post('/askFriend', askFriend);
router.get('/getAks', getAsks);
router.delete('/deleteAskFriend', deleteAskFriend);
router.get('/acceptFriend', acceptFriend);
router.get('/deniedFriend', deniedFriend);
router.get('/deleteFriend', deleteFriend);
router.get('/findUsers', findUsersForNamesStartWith);

module.exports = router;