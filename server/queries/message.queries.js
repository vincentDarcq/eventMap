const Message = require("../models/message.model");

exports.findMessagesPerRoomId = (roomId) => {
  return Message.find({ event: roomId }).exec();
};

exports.createMessage = (message) => {
  const newMessage = new Message(message);
  return newMessage.save();
};

exports.deleteMessage = (messageId) => {
  Message.findByIdAndDelete(messageId).exec();
}