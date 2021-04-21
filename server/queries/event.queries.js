const Event = require('../models/event.model');

exports.getEvents = () => {
  return Event.find({}).exec();
}

exports.getEvent = (eventId) => {
  return Event.findById(eventId).exec();
}

exports.deleteOne = (eventId) => {
  return Event.findByIdAndDelete(eventId).exec();
}