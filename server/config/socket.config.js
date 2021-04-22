const socketio = require("socket.io");
const { server } = require("../app");
const { getEventRooms } = require("../queries/eventRoom.queries");
const {
  findMessagesPerRoomId,
  createMessage,
} = require("../queries/message.queries");

const initEventRooms = async () => {
  try {
    eventRooms = await getEventRooms();
    for (let eventRoom of eventRooms) {
      const er = ios.of(`/${eventRoom._id}`);
      er.on("connect", async (nsSocket) => {
        nsSocket.on("joinRoom", async (roomId) => {
          try {
            nsSocket.join(`/${roomId}`);
            const messages = await findMessagesPerRoomId(roomId);
            nsSocket.emit("history", messages);
          } catch (e) {
            throw e;
          }
        });
        nsSocket.on("leaveRoom", (roomId) => {
          nsSocket.leave(`/${roomId}`);
        });
        nsSocket.on("message", async ({ text, roomId, userId, userName }) => {
          try {
            const message = await createMessage({
              data: text,
              event: roomId,
              author: userId,
              authorName: userName,
            });
            er.to(`/${roomId}`).emit("message", message);
          } catch (e) {
            throw e;
          }
        });
      });
    }
  } catch (e) {
    throw e;
  }
};

const initSocketServer = () => {
  ios = socketio(server, {
    allowEIO3: true // false by default
  });
  ios.on("connect", (socket) => {
    console.log("connexion ios ok");
    socket.emit("eventRooms", eventRooms);
  });

  ios.on("close", (socket) => {
    socket.disconnect(true);
  });
  initEventRooms();
};

initSocketServer();