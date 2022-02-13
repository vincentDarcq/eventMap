const { Server } = require("socket.io");
const {
  findMessages,
  createMessage
} = require('../queries/chatMessage.queries');
const { getAllEvents } = require('../queries/event.queries');
const {
  findMessagesPerEventId,
  createMessageEvent,
  deleteMessage
} = require('../queries/message.queries');
const { getAllChatRooms } = require('../controllers/chat');

initNamespaceChat = (room) => {
  try {
    const r = globalThis.ios.of(`/${room.roomName}`);
    r.on("connect", async (nsSocket) => {
      try {
        const messages = await findMessages(room.roomName);
        nsSocket.emit("history", messages);
      } catch (e) {
        throw e;
      }
      nsSocket.on("message", async ({ message, user, friend, roomName }) => {
        try {
          await createMessage(message, user, friend, roomName);
          r.emit("message", { message: message, user: user, friend: friend });
        } catch (e) {
          throw e;
        }
      });
      nsSocket.on("close", (user) => {
        nsSocket.removeAllListeners();
      })
    });
  } catch (e) {
    throw e;
  }
}

module.exports.initOneChat = async (room) => {
  initNamespaceChat(room);
}

initAllChats = async () => {
  const rooms = await getAllChatRooms();
  for (const room of rooms) {
    initNamespaceChat(room);
  }
}

initNamespaceEvent = async (eventId) => {
  try {
    const e = globalThis.ios.of(`/${eventId}`);
    e.on("connect", async (nsSocket) => {
      const messages = await findMessagesPerEventId(eventId);
      nsSocket.emit("history", messages);
      nsSocket.on("message", async ({ message, userId, userName, eventId }) => {
        try {
          const msg = await createMessageEvent({
            message: message,
            eventId: eventId,
            userId: userId,
            userName: userName,
          });
          e.emit("message", msg);
        } catch (e) {
          throw e;
        }
      });
      nsSocket.on("deleteMessage", async ({ id }) => {
        try {
          const deletedMessage = await deleteMessage(id);
          e.emit("deleteMessage", deletedMessage);
        } catch (e) {
          throw e;
        }
      })
      nsSocket.on("close", () => {
        nsSocket.removeAllListeners();
      })
    });
  } catch (e) {
    throw e;
  }
}

module.exports.initChatEvent = (eventId) => {
  try {
    initNamespaceEvent(eventId);
  } catch (e) {
    throw e;
  }
}

initAllChatEvents = async () => {
  try {
    events = await getAllEvents();
    for (let event of events) {
      initNamespaceEvent(event._id);
    }
  } catch (e) {
    throw e;
  }
}

module.exports.initSocketServer = (server) => {
  globalThis.ios = new Server(server, {
    allowEIO3: true // false by default
  });

  globalThis.ios.on('connection', (socket) => {
    console.log("connexion ios ok");
  });

  globalThis.ios.on("close", (socket) => {
    socket.disconnect(true);
  });

  initAllChatEvents();
  initAllChats();
};
