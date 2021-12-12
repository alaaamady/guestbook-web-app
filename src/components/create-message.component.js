import React from "react";
import { useForm } from "../hooks/useform";
import { useNavigate } from "react-router";
import axios from "axios";

function CreateMessage() {
  const [values, handleChange, resetValues] = useForm({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      message_title: values.title,
      message_content: values.content,
    };

    axios
      .post("http://localhost:5000/messages/create", newMessage)
      .then((res) => {
        resetValues();
        navigate("/messages/");
      });
  };

  return (
    <>
      <h3>Create New Message</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="content"
          value={values.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Share Message</button>
      </form>
    </>
  );
}

export default CreateMessage;
