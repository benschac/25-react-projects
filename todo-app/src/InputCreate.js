import React, { Component } from 'react';
import './App.css';


class InputCreate extends Component {
  constructor() {
    super();
    this.updateTask = this.updateTask.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  updateTask(event) {
    this.props.updateTask(event.target.value);
  }

  createTask() {
    this.props.addTask(this.props.task);


  }

  render() {

    return (
      <div className="input--create">
        <input onChange={this.updateTask} placeholder="Create a Task"/>
        <button onClick={this.createTask}>+ Add to The List</button>
      </div>
    );
  }
}

export default InputCreate;
