const chatMessage = require("../models/chatMessage.model");

exports.findMessages = (roomName) => {
  return chatMessage.find({ roomName: roomName }).exec();
};

exports.createMessage = (message, user, friend, roomName, pri, pub) => {
  const newMessage = new chatMessage({ message, user, friend, roomName, pri, pub });
  return newMessage.save();
};

exports.deleteMessage = (messageId) => {
  return chatMessage.findByIdAndDelete(messageId).exec();
}