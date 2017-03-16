import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';

// To do, set interval generations.
// Show Counter Generations
// Add conway's rules.  Need to think about pixels on the edges.
// Add Buttons to Controls


// Todo: Move this and use pixel component.
function Pixel(alive) {
  this.alive = alive;
  return this;
}

const aliveOrDead = () => {
  return Math.floor(Math.random() * 2) ? true : false;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 20,
      isEvolving: false,
      generation: 0,
      speed: 1000,
      pixelSize: 20,
      pixels: []
    }
  }

  componentWillMount(){
    let pixels = [];
    _.times(this.state.size, i=>{
      _.times(this.state.size, j=>{
        
        pixels.push(new Pixel(aliveOrDead()));
      });
    });
    this.setState({
      pixels
    });
  }

  toggleLife = (position) => {
    
      // ToDo: Don't mutate object in state. Spread and replace.
      const { pixels, size } = this.state;
      pixels[position.y*size + position.x].alive = !pixels[position.y*size + position.x].alive;
      this.setState({
        pixels
      })
  }

  render() {
    const { size, pixels, pixelSize } = this.state;
    return (
      <div className="app">
        <BoardContainer 
          size={size}
          pixels={pixels}
          pixelSize={pixelSize}
          toggleLife={this.toggleLife} />
        <Controls />
      </div>
    );
  }
}

export default App;
