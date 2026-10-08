import React from "react";
import socket from "./config/socket";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [senData, setSendData] = useState("");
  const [recivedMessages, setReciveMessages] = useState([]);

  let roomID = "gamingRoom";

  //roomID
  useEffect(() => {
    socket.emit("join-room", roomID);

    return () => {
      socket.off("recive-message");
    };
  }, []);

  //sendMessage

  const senMessage = () => {
    if (!senData.trim()) return;

    socket.emit("send-message", { roomID, msg: senData });

    setSendData("");
  };

  //recive-message
  useEffect(() => {
    socket.on("recive-message", (data) => {
      setReciveMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("recive-message");
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Chat</h1>

      <h2>Room: {roomID}</h2>

      {/* <hr /> */}

      <h2>Messages</h2>

      <br />
      <br />

      {recivedMessages.map((msg, index) => (
        <div key={index}>
          <p>{msg.msg}</p>
        </div>
      ))}

      <br />
      <br />

      <input
        type="text"
        value={senData}
        onChange={(e) => setSendData(e.target.value)}
        placeholder="Enter message"
      />

      <button onClick={senMessage}>Send</button>

      <p>Press Enter to send</p>
    </div>
  );
};

export default App;
