import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Number path ="/:id"/>
      </Router>
    </div>
  );
}

export default App;
