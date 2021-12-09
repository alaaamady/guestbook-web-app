import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Messages from './components/messages.component';
import EditMessage from './components/edit-message.component';
import CreateMessage from './components/create-message.component';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <Route path="/" exact component={Messages} />
      <Route path="/edit/:id" exact component={EditMessage} />
      <Route path="/create" exact component={CreateMessage} />
    </Router>
  );
}

export default App;
