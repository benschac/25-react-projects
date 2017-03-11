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
        modal: false,
        recipes: {
          recipe1: {
            open: false,
            title: 'Pizza',
            items: ["Cheese", "Tomato", "Dough"]
          },
          recipe2: {
            open: false,
            title: 'PBJ',
            items: ["Bread", "Peanut Butter", "Jelly"]
          },
          recipe3: {
            open: false,
            title: 'Ramen',
            items: ["Egg", "Veggies", "Noodles", "Broth", "Mushrooms"]
          },
          recipe4: {
            open: false,
            title: 'Burger',
            items: ["Buns", "Beef Patty", "Tomato", "Lettuce", "Onions"]
          }
        }
    }

    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    
  }

  // Create recipe!
  addRecipe(recipe) {
    const recipes = {...this.state.recipes};
    const last = Object.keys(recipes).length + 1;
    recipes[`recipe${last}`] = recipe; 
    this.setState({recipes});
  }

  // Delete Recipe!
  deleteRecipe(recipe) {
    const recipes = {...this.state.recipes};
    recipes[recipe] = null;
    this.setState({recipes});
  }
  
  // Edit Recipe!
  editRecipe(key, recipe) {
    const recipes = {...this.state.recipes};
    recipes[key] = recipe;
    this.setState({recipes});
  }

  getInitialState() {

  }

  render() {

 
    return (
      <div className="app__container" style={wellStyles}>
      
      </div>
      
    );
  }
}

export default App;
