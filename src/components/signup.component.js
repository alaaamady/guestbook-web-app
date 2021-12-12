import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    const form = e.target;
    const user = {
      username: form[0].value,
      password: form[1].value,
    };

    fetch("http://localhost:5000/signup", {
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
    <form onSubmit={handleSignup}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
