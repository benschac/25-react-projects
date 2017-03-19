import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import deepFreeze from 'deepfreeze';
import './index.css';

const todos = (state = [], action ) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          type: action.type,
          id: action.id,
          text: action.text
        },
      ]
    default:
      return state;
  }
}

const testAddToDo = () => {
  const stateBefore = [];
  const stateAfter = [{
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toBe(stateAfter);
}


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hello From App.js</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
