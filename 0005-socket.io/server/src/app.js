import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

// !! just for spacing

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

// ?? Socket.io code

io.on("connection", (socket) => {
  console.log("connected TO Sever");
  console.log("User Id", socket.id);

  socket.on("message", (msg, id) => {
    console.log("message::::", msg);

    socket.emit("abc", "halleluya");
  });
});

// !! server is Runnig

httpServer.listen(3000, () => {
  console.log("listing on port 3000");
});
