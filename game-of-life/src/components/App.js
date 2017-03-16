import React from 'react';
import BoardContainer from './BoardContainer';
import _ from 'lodash';

import Controls from './Controls';
import './App.css';


// Add conway's rules.  Need to think about pixels on the edges.
// Add Buttons to Controls

let gen;
let time;

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

function conwayRules(neighbors, status){  
  let alive = neighbors.reduce((t,v)=> t+v,0);
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
      speed: 250,
      pixelSize: 30,
      pixels: []
    }
  }

  componentWillMount(){
    this.setBoard(this.state.size);
  }

  setBoard = (size) => {
    let pixels = [];
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

  clear = () => {
    clearInterval(gen);
    let pixels = [...this.state.pixels]
    _.forEach(pixels, p=>{
      p.alive = false;
    })
    this.setState({
      pixels,
      generation: 0
    })
  }

  evolve = () => {
    const oldPixels = _.cloneDeep(this.state.pixels);
    let pixels = [...this.state.pixels]
    _.forEach(pixels, p=>{
      let neighbors = p.neighbors.map(i => oldPixels[ i[1] * this.state.size + i[0] ].alive)
      p.alive = conwayRules(neighbors, p.alive);
    })
    this.setState({
      generation: this.state.generation + 1,
      pixels
    })
  }

  updateSizeSpeed = (size, speed) => {
    size = size || this.state.size;
    speed = 1000*speed || this.state.size;    
    this.setState({
      size,
      speed,
      pixelSize: 600/size
    })
    if(this.state.isEvolving) {
      clearInterval(gen);
      gen = setInterval(() => {
        this.evolve()
      }, this.state.speed);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.size !== this.state.size) {
      this.setBoard(nextState.size);
    }
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
          clear={this.clear}
          updateSizeSpeed={this.updateSizeSpeed}
          generation={generation}/>
      </div>
    );
  }
}

export default App;
