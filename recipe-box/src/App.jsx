import React, { Component } from 'react';
import './App.css';



function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
       value: '',
        recipes: {
          recipe1: {
            edit: false,
            title: 'Pizza',
            items: ["Cheese", "Tomato", "Dough"]
          },
          recipe2: {
            edit: false,
            title: 'PBJ',
            items: ["Bread", "Peanut Butter", "Jelly"]
          },
          recipe3: {
            edit: false,
            title: 'Ramen',
            items: ["Egg", "Veggies", "Noodles", "Broth", "Mushrooms"]
          },
          recipe4: {
            edit: false,
            title: 'Burger',
            items: ["Buns", "Beef Patty", "Tomato", "Lettuce", "Onions"]
          }
        }
    }
    
  }

  // Create recipe!
  addRecipe = (recipe) =>  {
    // To do time stamp so old state doesn't got over written.
    const recipes = {...this.state.recipes};
    const last = Date.now()
    recipes[`recipe${last}`] = recipe; 
    console.log(last)
    this.setState({recipes});
  }

  createRecipe = (event) => {
    event.preventDefault();
    let items = this.textarea.value.trim().split(',');

    const recipe = {
      title: this.title.value,
      items
    }
    
    this.addRecipe(recipe);
  }

  // Delete Recipe!
  deleteRecipe = (recipe) => {
    const recipes = {...this.state.recipes};
    delete recipes[recipe];
    this.setState({recipes});
  }

  // Edit Recipe!
  editRecipe = (event, key) => {
    console.log(key)
    event.preventDefault();
    const recipes = {...this.state.recipes}
    console.log(this.editTitle.value, this.editTextarea.value.split(','))
    recipes[key] = {
      title: this.editTitle.value,
      items: this.editTextarea.value.split(',')
    }



    this.setState({recipes})

  }

  editToggle = (key) => {
    let recipes = {...this.state.recipes}
    recipes[key].edit = !recipes[key].edit
    
    this.setState({recipes});
  }

  componentWillUpdate(nextProps, nextState) {
    if(storageAvailable('localStorage')) {
      const ref = localStorage.setItem('recipes', JSON.stringify(nextState.recipes))
      
    } else {
      console.error('Your browser doesn\'t support local storage');
    }
  }

  componentWillMount() {
    if(storageAvailable('localStorage')) {
        const localRef = localStorage.getItem('recipes', JSON.stringify(this.state.recipes))
        console.log(localRef)
        if(localRef) {
          this.setState({
            recipes: JSON.parse(localRef)
          })
        }
        
    } else {
      console.error('Your browser doesn\'t support local storage');
    }
    
  }
  render() {
    let recipes = {...this.state.recipes};
 
    return (
      <div className="app__container">
      {
        Object.keys(recipes).map((recipe, index) => {
          return (
            <div>
              <h2 key={recipe}
                  onClick={() => console.log(recipes[recipe].title)}>
                  {recipes[recipe].title}</h2>
              <ul>
                {
                  
                  recipes[recipe].items.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })
                }
              </ul> 
              <button onClick={() => this.deleteRecipe(recipe)} >Delete</button>
              <button onClick={() => this.editToggle(recipe)}>Edit</button>
              {
                recipes[recipe].edit ?
              <form ref={(input) => this.editForm = input } onSubmit={(e) => this.editRecipe(e, recipe)}>
                <label>Title</label>
                <input defaultValue={recipes[recipe].title} ref={(input) => this.editTitle = input }/>
                <label>Ingredients</label>
                <textarea defaultValue={recipes[recipe].items.join(',')} ref={(input) => this.editTextarea = input}></textarea>
                <button type="submit" value="Submit">Submit</button>
            </form> :
              null

              } 
            </div>
            )
          }
        )
      }
      <form ref={(input) => this.form = input }onSubmit={this.createRecipe}>
        <label>Title</label>
        <input ref={(input) => this.title = input }/>
        <label>Ingredients</label>
        <textarea ref={(input) => this.textarea = input}></textarea>
        <button type="submit" value="Submit" >Submit</button>
      </form>
      </div>
      
    );
  }
}

export default App;
