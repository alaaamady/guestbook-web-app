import React from "react";
import { useForm } from "../hooks/useform";
import axios from "axios";

function CreateMessage() {
  const [values, handleChange, resetValues] = useForm({
    title: "",
    content: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(`Message Title ${values.title}`);
    console.log(`Message Content: ${values.content}`);

    const newMessage = {
      message_title: values.title,
      message_content: values.content,
    };

    axios
      .post("http://localhost:5000/messages/create", newMessage)
      .then((res) => {
        resetValues();
        console.log(res.data);
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
