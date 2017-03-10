import React, { Component } from 'react';
import { Button  } from 'react-bootstrap';
import './App.css';
import RecipeModal from './RecipeModal';
import Ingredients from './Ingredients'


const wellStyles = {maxWidth: 700, margin: '100px auto'};

class App extends Component {
  constructor() {
    super();
    this.state = {
        recipes: [
          {
            open: false,
            showModal: false,
            title: 'Pizza',
            items: ["Cheese", "Tomato", "Dough"]
          },
          {
            open: false,
            showModal: false,
            title: 'PBJ',
            items: ["Bread", "Peanut Butter", "Jelly"]
          },
          {
            open: false,
            showModal: false,
            title: 'Ramen',
            items: ["Egg", "Veggies", "Noodles", "Broth", "Mushrooms"]
          }
        ]
    }
    this.close = this.close.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.addEditRecipe = this.addEditRecipe.bind(this);
  }
  getInitialState() {
    return { showModal: false,
              value: '' };
  }

  handleTitleChange(e) {
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

  deleteRecipe(item) {
    
    const newState = this.state.recipes;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({recipes: newState})
    }
  }


  addEditRecipe(recipe) {

    console.log('fired from addEditRecipe', recipe)
    if(recipe.items.length < 1) {
      this.openModal()
          console.log('fired from addEditRecipe', recipe.items)

    }
  }

  render() {

 
    return (
      <div className="app__container" style={wellStyles}>
      <Ingredients
                   openPanel={this.openPanel}
                   title={this.state.title}
                   recipes={this.state.recipes}
                   deleteRecipe={this.deleteRecipe}
                   addEditRecipe={this.addEditRecipe}
                   openModal={this.openModal}

                   />

        
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.openModal}
        >
          Add Recipe
        </Button>
      </div>
      
    );
  }
}

export default App;
