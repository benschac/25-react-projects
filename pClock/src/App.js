import React, { Component } from 'react';
import Clock from './components/Clock.js';
import UserLoginControl from './components/UserLoginControl.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <UserLoginControl />
      </div>
    );
  }
}

export default App;
