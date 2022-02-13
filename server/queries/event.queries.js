const Event = require('../models/event.model');

exports.getAllEvents = () => {
  return Event.find({}).exec();
}

exports.getEvents = (latMin, latMax, longMin, longMax) => {
  return Event.find({ latitude: { $lte: latMax, $gte: latMin }, longitude: { $lte: longMax, $gte: longMin } }).exec();
}

exports.findEventsForNamesStartWith = (value) => {
  return Event.find({ "name": { $regex: "^" + value } }).exec();
}

exports.getEvent = (eventId) => {
  return Event.findById(eventId).exec();
}

exports.isEventExist = (event) => {
  return Event.find(
    {
      "name": event.name,
      "lieu": event.lieu,
      "latitude": event.latitude,
      "longitude": event.longitude,
      "description": event.description,
      "type": event.type,
      "space_and_time": event.space_and_time,
      "dateDebut": event.dateDebut,
      "dateFin": event.dateFin
    }).exec();
}

exports.getEventByUser = (userMail) => {
  return Event.find({ emailCreateur: userMail }).exec();
}

exports.deleteOne = (eventId) => {
  return Event.findByIdAndDelete(eventId).exec();
}

exports.findByIdAndUpdate = (id, event) => {
  return Event.findByIdAndUpdate({ _id: id }, event)
}