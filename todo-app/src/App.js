import React, { Component } from 'react';
import './App.css';
import InputCreate from './InputCreate';
import TaskList from './TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: 'sdfgsdfg',
      tasks: ['Sample Task One', 'Sample Task Two', 'Sample Task Three']
    };
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  updateTask(task) {
    this.setState({task});
  }

  deleteTask(index) {
    var tasks = [...this.state.tasks.slice(0, index -1), ...this.state.tasks.slice(index, this.state.tasks.length)];
    console.log(tasks);
    this.setState({tasks});
  }

  addTask(task) {
    var tasks = this.state.tasks;
    tasks.push(task);
    this.setState(tasks);
  }


  render() {
    return (
      <div className="App">
        <InputCreate tasks={this.state.tasks}
                    addTask={this.addTask}
                    updateTask={this.updateTask}
                    task={this.state.task}/>
        <TaskList tasks={this.state.tasks}
                  delete={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
