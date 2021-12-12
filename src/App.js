import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import Messages from "./components/messages.component";
import EditMessage from "./components/edit-message.component";
import CreateMessage from "./components/create-message.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Signup />} exact path="/" />
        <Route element={<Login />} exact path="/login" />
        <Route element={<Messages />} exact path="/messages" />
        <Route element={<EditMessage />} exact path="/edit/:id" />
        <Route element={<CreateMessage />} exact path="/create" />
      </Routes>
    </Router>
  );
}

export default App;
