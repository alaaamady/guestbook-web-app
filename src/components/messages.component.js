import React, { useEffect, useState } from "react";
import Message from "./message.component";
import { useMessages } from "../hooks/useMessages";
import { Link } from "react-router-dom";

function Messages() {
  const [messages, isLoading] = useMessages();

  const messageList = messages.map((currentMessage, i) => (
    <Message message={currentMessage} key={i} />
  ));

  return (
    <>
      <h3>Messages</h3>
      <Link to={"/create"}>Create New Message</Link>
      {messageList}
    </>
  );
}

export default Messages;
