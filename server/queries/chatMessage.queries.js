const chatMessage = require("../models/chatMessage.model");

exports.findMessages = (roomName) => {
  return chatMessage.find({ roomName: roomName }).exec();
};

exports.createMessage = (message, user, friend, roomName) => {
  const newMessage = new chatMessage({ message, user, friend, roomName });
  return newMessage.save();
};

exports.deleteMessage = (messageId) => {
  chatMessage.findByIdAndDelete(messageId).exec();
}