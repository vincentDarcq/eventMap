const { findRoom, findAllRooms } = require('../queries/chat.queries');
const { findMessages } = require('../queries/chatMessage.queries');

exports.getRoomChat = async (req, res, next) => {
  try {
    let room = await findRoom(req.query.user1, req.query.user2);
    if (room.length > 0) {
      res.status(200).json(room[0])
    } else {
      room = await findRoom(req.query.user2, req.query.user1);
      res.status(200).json(room[0]);
    }
  } catch (e) {
    throw e;
  }
}

exports.getMessagesChat = async (req, res, next) => {
  try {
    const messages = await findMessages(req.query.roomName);
    res.status(200).json(messages);
  } catch (e) {
    throw e;
  }

}

exports.getAllChatRooms = async () => {
  const rooms = await findAllRooms();
  return rooms;
}