import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';


class App extends Component {
  deleteTask(index) {
    console.log(index);
    this.props.delete(index);
  }
  render() {
    return (
      <div className="item__list">
        {this.props.tasks.map((item, index) => {
          return (
            <li key={index}>{item}<button onClick={(index) => this.deleteTask(index)}>Delete!</button></li>
          )
        })}
      </div>
    );
  }
}

export default App;
