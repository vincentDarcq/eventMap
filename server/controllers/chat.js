const { deleteMessage } = require('../queries/message.queries');
const { findRoom } = require('../queries/chat.queries');
const { initChat } = require('../config/socket.config');

exports.deleteMessage = async (req, res, next) => {
  try {
    const messageDelete = await deleteMessage({ _id: req.query.messageId });
    res.send(messageDelete);
  } catch (e) {
    next(e);
  }
}

exports.initChat = async (req, res, next) => {
  initChat(req.query.roomName, req.query.user);
  res.status(200).json({});
}

exports.getRoomChat = async (req, res, next) => {
  let room = await findRoom(req.query.user1, req.query.user2);
  if (room.length > 0) {
    res.status(200).json(room[0])
  } else {
    room = await findRoom(req.query.user2, req.query.user1);
    res.status(200).json(room[0]);
  }
}