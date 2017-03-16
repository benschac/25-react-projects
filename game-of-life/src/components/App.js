import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';


// Add conway's rules.  Need to think about pixels on the edges.
// Add Buttons to Controls

let gen;

// Todo: Move this and use pixel component.
function Pixel(alive,x,y) {
  this.alive = alive;
  this.x = x;
  this.y = y;
  return this;
}

function getNeighbors(i,size,total){
  let neighbors = [];
  //top row
  if(Math.floor(i/size) === 0){

  //bottom row
  } else if (Math.floor(i/size) === size-1){

  }
  //left column
  if(i%size === 0){

  //right column
  } else if (i % size === size-1){

  }
  return neighbors.filter(o => o > 0 && o < total);
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
        pixels.push(new Pixel(aliveOrDead()),j,i);
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

  startStop = () => {
    if(this.state.isEvolving){
      clearInterval(gen);
    } else {
      gen = setInterval(() => {
        this.evolve()
      }, this.state.speed);
    }
    this.setState({
      isEvolving: !this.state.isEvolving
    })
  }

  evolve = () => {
    this.setState({
      generation: this.state.generation + 1
    })
  }

  render() {
    const { size, pixels, pixelSize, generation } = this.state;
    return (
      <div className="app">
        <BoardContainer 
          size={size}
          pixels={pixels}
          pixelSize={pixelSize}
          toggleLife={this.toggleLife} />
        <Controls 
          startStop={this.startStop}
          generation={generation}/>
      </div>
    );
  }
}

export default App;
