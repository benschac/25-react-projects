import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

const wellStyles = {maxWidth: 700, margin: '100px auto'};

class App extends Component {
  render() {
    return (
      <div className="app__container" style={wellStyles}>
       <section className="well" style={wellStyles}>

       </section>
       <Button bsStyle="primary" bsSize="large">Add Recipe</Button>
      </div>
      
    );
  }
}

export default App;
