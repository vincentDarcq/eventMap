const EventRoom = require("../models/eventRoom.model");

exports.getEventRooms = () => {
  return EventRoom.find({}).exec();
};

exports.createEventRoom = (eventId) => {
  const eventRoom = new EventRoom({
    eventId: eventId
  });
  eventRoom.save((err) => {
    if (err) { res.status(500).json(err) }
  });
}

exports.deleteEventRoom = (eventId) => {
  return EventRoom.findOneAndDelete({ eventId: eventId }).exec()
}