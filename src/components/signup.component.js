import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <>
      <form className="form" onSubmit={handleSignup}>
        <h1 className="sign-title">Sign up</h1>
        <label className="form-label" for="username">
          Username
        </label>
        <input className="form-input" type="text" name="username" required />
        <label className="form-label" for="password">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          required
        />
        <button className="form-button" type="submit">
          Sign up
        </button>
        <Link to={"/login"}>Already a user? Login here!</Link>
      </form>
    </>
  );
}

export default Signup;
