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
      title: '',
      ingredients: []
    }
    this.close = this.close.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);


  }
  getInitialState() {
    return { showModal: false,
              value: '' };
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleIngredientsChange(e) {
    
    let ingredientsArray = e.target.value.split(',');
    console.log(ingredientsArray)
    this.setState({ ingredients: e.target.value });
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
                   handleIngredientsChange={this.handleIngredientsChange}
        />
      </div>
      
    );
  }
}

export default App;
