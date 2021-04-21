const mongoose = require("mongoose");
const schema = mongoose.Schema;

const roomSchema = schema({
  eventId: { type: schema.Types.ObjectId, ref: "event" },
});

const EventRoom = mongoose.model("eventRoom", roomSchema);

module.exports = EventRoom;
