import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMessages } from "../hooks/useMessages";

function Message(props) {
  const [messages, isLoading] = useMessages();
  console.log(messages);
  return (
    <div className="message">
      <h4 className="message-title">{props.message.message_title}</h4>
      <p className="message-content">{props.message.message_content}</p>
      <Link to={"/edit/" + props.message._id}>Edit Message</Link>
    </div>
  );
}

export default Message;
