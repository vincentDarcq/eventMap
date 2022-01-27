const ChatRoom = require('../models/chatRoom.model');

exports.deleteRoom = (roomName) => {
  return ChatRoom.deleteOne({ roomName: roomName }).exec();
}

exports.findRoom = (user1, user2) => {
  return ChatRoom.find({ roomName: user1 + user2 }).exec();
}