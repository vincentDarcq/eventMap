const { Server } = require("socket.io");
const {
  findMessages,
  createMessage
} = require('../queries/chatMessage.queries');

module.exports.initChat = (roomName, user) => {
  const r = globalThis.ios.of(`/${roomName}`);

  r.on("connect", async (nsSocket) => {
    nsSocket.on("joinRoom", async ({ roomName }) => {
      nsSocket.join(roomName);
      const messages = await findMessages(roomName);
      nsSocket.emit("history", messages);
    });
    nsSocket.on("message", async ({ message, user, friend, roomName }) => {
      await createMessage(message, user, friend, roomName);
      nsSocket.emit("message", { message: message, user: user, friend: friend });
    });
    nsSocket.on("leaveRoom", (roomName) => {
      nsSocket.leave(roomName);
    });
    nsSocket.on("disconnecting", async (nsSocket) => {
      r.removeAllListeners();
    })
  });
}

module.exports.initSocketServer = (server) => {
  globalThis.ios = new Server(server, {
    pingTimeout: 10000,
    allowEIO3: true // false by default
  });

  globalThis.ios.on('connection', (socket) => {
    console.log("connexion ios ok");

    socket.on("disconnect", (socket) => {
      console.log("serveur socket diconnected")
    });
  });
};
