import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMessages } from "../hooks/useMessages";

function Message(props) {
  const [messages, isLoading] = useMessages();
  console.log(messages);
  return (
    <div>
      <h4>{props.message.message_title}</h4>
      <p>{props.message.message_content}</p>
      <Link to={"/edit/" + props.message._id}>Edit Message</Link>
    </div>
  );
}

export default Message;
