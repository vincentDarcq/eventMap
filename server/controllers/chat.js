const { findRoom, findAllRooms } = require('../queries/chat.queries');

exports.getRoomChat = async (req, res, next) => {
  let room = await findRoom(req.query.user1, req.query.user2);
  if (room.length > 0) {
    res.status(200).json(room[0])
  } else {
    room = await findRoom(req.query.user2, req.query.user1);
    res.status(200).json(room[0]);
  }
}

exports.getAllChatRooms = async () => {
  const rooms = await findAllRooms();
  return rooms;
}