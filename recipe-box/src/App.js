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
        showModal: false,
        recipes: [
          {
            open: false,
            title: 'Pizza',
            items: ["Cheese", "Tomato", "Dough"]
          },
          {
            open: false,
            title: 'PBJ',
            items: ["Bread", "Peanut Butter", "Jelly"]
          },
          {
            open: false,
            title: 'Ramen',
            items: ["Egg", "Veggies", "Noodles", "Broth", "Mushrooms"]
          }
        ]
    }
    this.close = this.close.bind(this);
    this.openPanel = this.openPanel.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
   3
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

  openPanel(e) {
    console.log(e.target.innerHTML)
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


  render() {

 
    return (
      <div className="app__container" style={wellStyles}>
      <Ingredients
                   openPanel={this.openPanel}
                   title={this.state.title}
                   recipes={this.state.recipes}
                   deleteRecipe={this.deleteRecipe}
                   
                   />

        
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.openModal}
        >
          Add Recipe
        </Button>

        <RecipeModal openModal={this.props.openModal}
                        close={this.props.close}
                        getInitialState={this.props.getInitialState}
                        showModal={this.props.showModal}
        
            />
      </div>
      
    );
  }
}

export default App;
