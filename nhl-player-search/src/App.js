import React, { Component } from 'react';
import Filter from './Filter';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Filter />
      <List />
      </div>
    );
  }
}

export default App;
