import React, { Component } from 'react';
import list from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        list.map((item, i) => {
          return (
            <li key={i}>{item.title}</li>
          )
        })
      }
        <h1>Something here</h1>
      </div>
    );
  }
}



export default App;
