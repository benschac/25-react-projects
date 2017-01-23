import React, { Component } from 'react';
import './ListItem.css';


class InputCreate extends Component {
  render() {
    return (

      <div className="list__item">
        <ul>
          <li>Task</li>
          <li><button>Remove</button></li>
        </ul>
      </div>
    );
  }
}

export default InputCreate;
