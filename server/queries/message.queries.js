const Message = require("../models/message.model");

exports.findMessagesPerEventId = (eventId) => {
  return Message.find({ eventId: eventId }).exec();
};

exports.createMessageEvent = (message) => {
  const newMessage = new Message(message);
  return newMessage.save();
};

exports.deleteMessageEvent = (messageId) => {
  return Message.findByIdAndDelete(messageId).exec();
}