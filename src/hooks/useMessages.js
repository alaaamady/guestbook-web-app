import React, { useState, useEffect } from "react";
import axios from "axios";

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/messages")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { messages, setLoading };
};
