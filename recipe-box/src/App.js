import React, { Component } from 'react';
import { Button  } from 'react-bootstrap';
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
      title: ''
    }
    this.close = this.close.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  getInitialState() {
    return { showModal: false,
              value: '' };
  }

  handleTitleChange(e) {
    console.log(e);
    this.setState({ title: e.target.value });
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
                   handleTitleChange={this.handleTitleChange}
                   getInitialState={() => this.getInitialState()}
                   showModal={this.state.showModal}

        />
      </div>
      
    );
  }
}

export default App;
