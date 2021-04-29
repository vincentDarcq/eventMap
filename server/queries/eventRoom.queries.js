const EventRoom = require("../models/eventRoom.model");

exports.getEventRooms = () => {
  return EventRoom.find({}).exec();
};

exports.createEventRoom = async (eventId) => {
  const eventRoom = new EventRoom({
    eventId: eventId
  });
  await eventRoom.save();
}

exports.deleteEventRoom = (eventId) => {
  return EventRoom.findOneAndDelete({ eventId: eventId }).exec();
}