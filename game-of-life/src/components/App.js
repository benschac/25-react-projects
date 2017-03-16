import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';


// Add conway's rules.  Need to think about pixels on the edges.
// Add Buttons to Controls

let gen;

// Todo: Move this and use pixel component.
function Pixel(alive,x,y,size) {
  this.alive = alive;
  this.x = x;
  this.y = y;
  this.neighbors = getNeighbors(x,y,size);
  return this;
}

function getNeighbors(x,y,size){
  let neighbors = [];
  //top row
  let cases = [[x-1,y-1],[x,y-1],[x+1,y-1],
               [x-1,y],[x+1,y],
               [x-1,y+1],[x,y+1],[x+1,y+1]];
  _.forEach(cases, i => {
    if(i[0] >= 0 && i[1] >= 0 && i[0] < size && i[1] < size){
      neighbors.push(i);
    }
  })
  return neighbors;
}

function shouldBeAlive(neighbors, status){
  let alive = 0,
      dead = 0;
  _.forEach(neighbors, n=>{
    n.alive ? alive += 1 : dead += 1;
  })
  return (status && alive === 2) || (alive === 3);
}

const aliveOrDead = () => {
  return Math.random() < .5;
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
    let {size} = this.state
    _.times(size, i=>{
      _.times(size, j=>{
        pixels.push(new Pixel(aliveOrDead(),j,i,size));
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
    const oldPixels = [...this.state.pixels]
    let pixels = [...this.state.pixels]
    _.forEach(pixels, p=>{
      let neighbors = p.neighbors.map(i => oldPixels[ i[1] * this.state.size + i[0] ])
      p.alive = shouldBeAlive(neighbors, p.alive);
    })
    this.setState({
      generation: this.state.generation + 1,
      pixels: pixels
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
