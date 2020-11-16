import React, { useState } from "react";
import "./ChatScreen";
import Message from "./Message";
import db from "../config/firebase";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Brooklyn",
      image:
        "https://images.squarespace-cdn.com/content/v1/5dffce94f13123324492e3e5/1580495451615-J5QOQQRRWMIYDMXH5LD9/ke17ZwdGBToddI8pDm48kL4WrIntsHuCODFzGytxs8sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcw31z2cKmL83lZVTgYf1Shcnt0pzT4b-h8WwoQ3rX-86z0Q_QpJgDA4jmv5AtYw-J/Facetune_29-11-2019-19-32-17.jpg",
      message: "Whats up ❤️?",
    },
    {
      id: 2,
      name: "Brooklyn",
      image:
        "https://images.squarespace-cdn.com/content/v1/5dffce94f13123324492e3e5/1580495451615-J5QOQQRRWMIYDMXH5LD9/ke17ZwdGBToddI8pDm48kL4WrIntsHuCODFzGytxs8sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcw31z2cKmL83lZVTgYf1Shcnt0pzT4b-h8WwoQ3rX-86z0Q_QpJgDA4jmv5AtYw-J/Facetune_29-11-2019-19-32-17.jpg",
      message: "Hows It Going!",
    },
    {
      id: 3,
      message: "Hi! How Are You Brooklyn",
    },
  ]);

  const handleClick = (e) => {
    let id = messages[messages.length - 1].id;
    e.preventDefault();
    setMessages([...messages, { id: id + 1, message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      {messages.map((message) => {
        return (
          <Message
            key={message.id}
            message={message.message}
            image={message.image}
            name={message.name}
          />
        );
      })}
      <form className="chatScreen__form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a Message..."
          className="chatScreen__input"
        />
        <button type="submit" onClick={handleClick}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
