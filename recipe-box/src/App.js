import React, { Component } from 'react';
import { Button, Panel, ButtonGroup, Popover, Tooltip, Modal, OverlayTrigger, FormGroup,
        ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';
import './App.css';
import AddRecipe from './AddRecipe';
import Ingredients from './Ingredients'


const wellStyles = {maxWidth: 700, margin: '100px auto'};

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      showModal: false,
      value: ''
    }
    this.close = this.close.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openPanel = this.openPanel.bind(this);
  }
  getInitialState() {
    return { showModal: false,
              value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  close() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  openPanel() {
    this.setState(prevState => ({
      open: !prevState.open
    }))
    
  }

  render() {

 
    return (
      <div className="app__container" style={wellStyles}>
      <Ingredients open={this.state.open}
                   openPanel={this.openPanel}/>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.openModal}
        >
          Add Recipe
        </Button>
        <AddRecipe openModal={() => this.openModal()}
                   close={() => this.close()}
                   handleChange={() => this.handleChange()}
                   getInitialState={() => this.getInitialState()}
                   showModal={this.state.showModal}

        />
      </div>
      
    );
  }
}

export default App;
