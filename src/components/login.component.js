import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const user = {
      username: form[0].value,
      password: form[1].value,
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? navigate("/messages") : null));
  }

  useEffect(() => {
    fetch("http://localhost:5000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isLoggedIn) {
          navigate("/messages");
        }
      });
  }, [navigate]);

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholde="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
