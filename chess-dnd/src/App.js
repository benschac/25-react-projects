import React, { Component } from 'react';
import Board from './Board';
import Knight from './Knight.js';
import Square from './Square.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Square black={true}>
        <Knight />
      </Square>
      </div>
    );
  }
}

export default App;
