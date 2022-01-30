const socketio = require("socket.io");
const {
  findMessages,
  createMessage
} = require('../queries/chatMessage.queries');
const {
  generateKey,
  encrypt,
  decrypt
} = require('./openpgp');

module.exports.initChat = (roomName, user) => {
  let namespaceOn = false;
  const nsps = [...globalThis.ios._nsps];
  if (nsps[1]) {
    for (let nsp of nsps[1]) {
      if (nsp.name === "/" + roomName && nsp.user === user) {
        namespaceOn = true;
      }
    }
  }
  if (!namespaceOn) {
    const r = globalThis.ios.of(`/${roomName}`);
    for (let i = 0; i < [...globalThis.ios._nsps][1].length; i++) {
      if ([...globalThis.ios._nsps][1][i].name === "/" + roomName) {
        [...globalThis.ios._nsps][1][i].user = user;
      }
    }
    r.on("connect", async (nsSocket) => {
      nsSocket.on("joinRoom", async ({ roomName }) => {
        let messages = [];
        const messagesEncrypted = await findMessages(roomName);
        for (let msg of messagesEncrypted) {
          const message = await decrypt(msg.message, msg.pri);
          const mess = {
            message: message,
            user: msg.user,
            friend: msg.friend,
            createdAt: msg.createdAt
          }
          messages.push(mess);
        }
        nsSocket.emit("history", messages);
      });
      nsSocket.on("message", async ({ message, user, friend, roomName }) => {
        const keys = await generateKey(user.name, user.email);
        const msgEncrypted = await encrypt(message, keys.publicKey);
        await createMessage(msgEncrypted, user, friend, roomName, keys.privateKey, keys.publicKey);
        nsSocket.emit("message", { message: message, user: user, friend: friend });
      });
      nsSocket.on("leaveRoom", (roomName) => {
        console.log("leave")
        nsSocket.leave(`/${roomName}`);
        const nsps = [...globalThis.ios._nsps][1];
        for (let nsp of nsps) {
          if (nsp.name === "/" + roomName) {
            nsp._eventsCount = 0;
            nsp._events = {};
            nsp.user = "";
          }
        }
      });
      nsSocket.on("disconnect", (roomName) => {
        console.log("disconnect")
      });
    });
  }
}

module.exports.initSocketServer = (server) => {
  globalThis.ios = socketio(server, {
    allowEIO3: true // false by default
  });

  globalThis.ios.on('connection', (socket) => {
    console.log("connexion ios ok");

    socket.on("disconnect", (socket) => {
    });
  });
};
