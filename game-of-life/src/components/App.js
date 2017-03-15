import React from 'react';
import BoardContainer from './BoardContainer';

import Controls from './Controls';
import './App.css';

function Pixel() {
  return (
    <div className></div>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 20,
      isEvolving: false,
      generation: 0,
      speed: 1000,
      pixels: [
        {}
      ]
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
