const Event = require('../models/event.model');

exports.getAllEvents = () => {
  return Event.find({}).exec();
}

exports.getEvents = (latMin, latMax, longMin, longMax) => {
  return Event.find({ latitude: { $lte: latMax, $gte: latMin }, longitude: { $lte: longMax, $gte: longMin } }).exec();
}

exports.getEvent = (eventId) => {
  return Event.findById(eventId).exec();
}

exports.deleteOne = (eventId) => {
  return Event.findByIdAndDelete(eventId).exec();
}