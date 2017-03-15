import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';

function Pixel(alive) {
  this.alive = alive;
  return this;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 20,
      isEvolving: false,
      generation: 0,
      speed: 1000,
      pixels: []
    }
  }

  componentWillMount(){
    var pixels = [];
    _.times(this.state.size, i=>{
      _.times(this.state.size, j=>{
        pixels.push(new Pixel(false));
      });
    });
    this.setState({
      pixels
    });
  }

  render() {
    return (
      <div className="App">
        <BoardContainer 
          size={this.state.size}
          pixels={this.state.pixels} />
        <Controls />
      </div>
    );
  }
}

export default App;
