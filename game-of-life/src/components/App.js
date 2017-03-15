import React from 'react';
import BoardContainer from './BoardContainer';

import Controls from './Controls';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 20,
      
    }
  }
  render() {
    return (
      <div className="App">
        <BoardContainer />
        <Controls />
      </div>
    );
  }
}

export default App;
