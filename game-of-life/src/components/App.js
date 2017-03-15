import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';

// Todo: Move this and use pixel component.
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
      pixelSize: 20,
      pixels: []
    }
  }

  componentWillMount(){
    let pixels = [];
    _.times(this.state.size, i=>{
      _.times(this.state.size, j=>{
        pixels.push(new Pixel(false));
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
