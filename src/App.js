import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Messages from './components/messages.component';
import EditMessage from './components/edit-message.component';
import CreateMessage from './components/create-message.component';

function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>Guestbook</li>
              <li><Link to='/messages'>Messages</Link></li>
              <li><Link to='/create'>Create Message</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/messages" element={<Messages />}  />
            <Route path="/edit/:id" element={<EditMessage/>} />
            <Route path="/create" element={<CreateMessage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
