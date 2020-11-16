import React from "react";
import { Avatar } from "@material-ui/core";
import "./Message.css";

function Message({ image, name, message }) {
  return (
    <div className={`message ${!image && !name ? "user" : ""}`}>
      {image ? <Avatar src={image} alt={name} /> : null}
      <p>{message}</p>
    </div>
  );
}

export default Message;
