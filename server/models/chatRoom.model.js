const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chatRoomSchema = schema({
  roomName: { type: String },
});

const ChatRoom = mongoose.model("chatRoom", chatRoomSchema);

module.exports = ChatRoom;

module.exports.newChatRoom = function (user, friend) {
  const newChatRoom = new ChatRoom({
    roomName: user + friend
  });
  return newChatRoom;
}
