const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chatMessageSchema = schema(
  {
    type: { type: String, enum: ["text", "image", "file"], default: "text" },
    message: String,
    user: String,
    friend: String,
    roomName: String,
    pri: String,
    pub: String
  },
  { timestamps: true }
);

const ChatMessage = mongoose.model("chatMessage", chatMessageSchema);

module.exports = ChatMessage;