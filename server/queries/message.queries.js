const Message = require("../models/message.model");

exports.findMessagesPerEventId = (eventId) => {
  return Message.find({ eventId: eventId }).exec();
};

exports.createMessage = (message) => {
  const newMessage = new Message(message);
  return newMessage.save();
};

exports.deleteMessage = (messageId) => {
  Message.findByIdAndDelete(messageId).exec();
}