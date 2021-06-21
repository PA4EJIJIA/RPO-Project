import React from 'react';
import './App.css';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

function App() {
  return (
      <div className = "App">
        <Router history = { createBrowserHistory() }>
        </Router>
      </div>
  );
}

export default App;