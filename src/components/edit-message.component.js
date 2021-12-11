import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "../hooks/useform";

import axios from "axios";
import { useParams } from "react-router-dom";

function EditMessage() {
  const [values, handleChange, resetValues] = useForm({
    title: "",
    content: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/messages/${id}`)
      .then((res) => {
        handleChange({
          target: { name: "title", value: res.data.message_title },
        });
        handleChange({
          target: { name: "content", value: res.data.message_content },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);
  const onSubmit = (e) => {
    e.preventDefault();

    const updatedMessage = {
      message_title: values.title,
      message_content: values.content,
    };

    axios
      .post(`http://localhost:5000/messages/edit/${id}`, updatedMessage)
      .then((res) => {
        resetValues();
        navigate("http://localhost:5000/messages/");
      });
  };

  return (
    <>
      <h3>Edit Message</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          value={values.content}
          onChange={handleChange}
        />
        <button type="submit">Update Message</button>
      </form>
    </>
  );
}

export default EditMessage;
