import React, { Component } from 'react';
import { Button, Panel, ButtonGroup } from 'react-bootstrap';
import './App.css';

const wellStyles = {maxWidth: 700, margin: '100px auto'};

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const title = (
      <h3>Panel title</h3>
    );

    
    return (
      <div className="app__container" style={wellStyles}>
       <section className="well" style={wellStyles}>
        <Panel header={title} 
                onClick={ ()=> this.setState({ open: !this.state.open })} 
                collapsible expanded={this.state.open}
                bsStyle="success">
          <h3>Ingredients</h3>
          <ButtonGroup vertical block>
            <Button>Pumpkin Puree</Button>
            <Button>Sweetened Condensed Milk</Button>
            <Button>Eggs</Button>
            <Button>Pumpkin Pie Spice</Button>
            <Button>Pie Crust</Button>
          </ButtonGroup>
          <Button bsStyle="danger">Delete</Button>
          <Button>Edit</Button>
        </Panel>  
       </section>
       <Button bsStyle="primary" bsSize="large">Add Recipe</Button>
      </div>
      
    );
  }
}

export default App;
