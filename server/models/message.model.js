const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageSchema = schema(
  {
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
    message: String,
    userId: { type: schema.Types.ObjectId, ref: "user" },
    userName: String,
    eventId: { type: schema.Types.ObjectId, ref: "event" },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);

module.exports = Message;
