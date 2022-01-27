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
const { getUserByName } = require('../queries/user.queries');

// const initEventRooms = async () => {
//   try {
//     eventRooms = await getEventRooms();
//     for (let eventRoom of eventRooms) {
//       const er = ios.of(`/${eventRoom._id}`);
//       er.on("connect", async (nsSocket) => {
//         nsSocket.on("joinRoom", async (roomId) => {
//           try {
//             nsSocket.join(`/${roomId}`);
//             const messages = await findMessagesPerRoomId(roomId);
//             nsSocket.emit("history", messages);
//           } catch (e) {
//             throw e;
//           }
//         });
//         nsSocket.on("leaveRoom", (roomId) => {
//           nsSocket.leave(`/${roomId}`);
//         });
//         nsSocket.on("message", async ({ text, roomId, userId, userName }) => {
//           try {
//             const message = await createMessage({
//               data: text,
//               event: roomId,
//               author: userId,
//               authorName: userName,
//             });
//             er.to(`/${roomId}`).emit("message", message);
//           } catch (e) {
//             throw e;
//           }
//         });
//       });
//     }
//   } catch (e) {
//     throw e;
//   }
// };

module.exports.initChat = (roomName) => {
  const r = globalThis.ios.of(`/${roomName}`);
  r.on("connect", async (nsSocket) => {
    nsSocket.on("joinRoom", async ({ roomName, user, friend }) => {
      let messages = [];
      console.log(user, friend)
      const messagesEncrypted = await findMessages(roomName);
      for (let msg of messagesEncrypted) {
        if (msg.user === user.name) {
          const currentUser = await getUserByName(user.name);
          const keys = await generateKey(currentUser.name, currentUser.email);
          const message = await decrypt(msg.message, keys.privateKey);
          messages.push(message);
        } else {
          const f = await getUserByName(friend);
          const keys = await generateKey(f.name, f.email);
          const message = await decrypt(msg.message, keys.privateKey);
          messages.push(message);
        }
      }
      nsSocket.emit("history", messages);
    });
    nsSocket.on("message", async ({ message, user, friend, roomName }) => {
      const userFriend = await getUserByName(friend);
      const keys = await generateKey(userFriend.name, userFriend.email);
      const msgEncrypted = await encrypt(message, keys.publicKey);
      await createMessage(msgEncrypted, user, friend, roomName);
      nsSocket.emit("message", { message: message, user: user, friend: friend });
    });
    nsSocket.on("leaveRoom", (roomName) => {
      nsSocket.leave(`/${roomName}`);
      const nsps = [...globalThis.ios._nsps][1];
      for (let nsp of nsps) {
        if (nsp.name === "/" + roomName) {
          nsp._eventsCount = 0;
          nsp._events = {};
        }
      }
    });
    nsSocket.on("disconnect", (roomName) => {
    });
  });
}

module.exports.initSocketServer = (server) => {
  globalThis.ios = socketio(server, {
    allowEIO3: true // false by default
  });

  globalThis.ios.on('connection', (socket) => {
    console.log("connexion ios ok");

    socket.on("disconnect", (socket) => {
      //console.log("disconnect")
    });
  });
};
