import React, { useEffect, useState } from "react";
import Message from "./message.component";
import { useMessages } from "../hooks/useMessages";

function Messages() {
  const [messages, isLoading] = useMessages();

  const messageList = messages.map((currentMessage, i) => (
    <Message message={currentMessage} key={i} />
  ));

  return (
    <>
      <h3>Messages</h3>
      {messageList}
    </>
  );
}

export default Messages;
