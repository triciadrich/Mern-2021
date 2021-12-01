import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import String from './components/String';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Number path ="/:id"/>
        <String path ="/:string"/>
        <Color path ="/:word/:text/:background"/>
      </Router>
    </div>
  );
}

export default App;
