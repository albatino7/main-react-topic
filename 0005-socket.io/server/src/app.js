import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

// !! just for spacing

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

// ?? Socket.io code

// io.on("connection", (socket) => {
//   console.log("connected TO Sever");
//   console.log("User Id", socket.id);

//   socket.on("message", (msg) => {
//     console.log("message::::", msg);

//     socket.emit("abc", "halleluya");
//   });
// });

io.on("connection", (socket) => {
  //lisitng event for joining room
  socket.on("join-room", (roomId) => {
    socket.join(roomId);

    console.log(`userID ${socket.id} connected to room ${roomId}`);
  });

  //sending message to Room
  socket.on("send-message", ({ roomID, msg }) => {
    io.to(roomID).emit("recive-message", {
      msg,
      senderID: socket.id,
    });
    console.log(msg);
  });

  // disconnect from room

  socket.on("disconnect", () => {
    console.log("user id disconnected", socket.id);
  });
});

// !! server is Runnig

httpServer.listen(3000, () => {
  console.log("listing on port 3000");
});
