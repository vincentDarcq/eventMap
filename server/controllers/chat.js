const {
  findRoom,
  findAllRooms
} = require('../queries/chat.queries');
const {
  findMessages,
  findLastMessage,
  createMessage
} = require('../queries/chatMessage.queries');

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

exports.getMessageChat = async (req, res, next) => {
  try {
    const messages = await findLastMessage(req.query.roomName, req.query.date);
    res.status(200).json(messages);
  } catch (e) {
    throw e;
  }
}

exports.createMessageChat = async (req, res, next) => {
  try {
    const message = await createMessage(
      req.body.message,
      req.body.user,
      req.body.friend,
      req.body.roomName
    );
    res.status(200).json(message);
  } catch (e) {
    throw e;
  }
}

exports.getAllChatRooms = async () => {
  const rooms = await findAllRooms();
  return rooms;
}