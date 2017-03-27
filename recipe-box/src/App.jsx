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
        recipes: {
          recipe1: {
            edit: false,
            title: 'Pizza',
            items: ["Cheese", "Tomato", "Dough"],
            hidden: true
          },
          recipe2: {
            edit: false,
            title: 'PBJ',
            items: ["Bread", "Peanut Butter", "Jelly"],
            hidden: true
          },
          recipe3: {
            edit: false,
            title: 'Ramen',
            items: ["Egg", "Veggies", "Noodles", "Broth", "Mushrooms"],
            hidden: true
          },
          recipe4: {
            edit: false,
            title: 'Burger',
            items: ["Buns", "Beef Patty", "Tomato", "Lettuce", "Onions"],
            hidden: true
          }
        }
    }
    
  }

  // Create recipe!
  addRecipe = (recipe) =>  {
    const recipes = {...this.state.recipes};
    const last = Date.now()
    recipes[`recipe${last}`] = recipe; 
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
    event.preventDefault();
    const recipes = {...this.state.recipes}
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

  toggleItems = (key) => {
    let recipes = {...this.state.recipes}

    recipes[key].hidden = !recipes[key].hidden
    this.setState({recipes})
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
        <div className="page-header">
          <h1>Recipe Box</h1>
        </div>
      {
        Object.keys(recipes).map((recipe, index) => {
          return (
            <div className="well">
              <h2 onClick={() => this.toggleItems(recipe)} key={recipe}>
                  {recipes[recipe].title}</h2>
                  {
                    recipes[recipe].hidden ? 
                    <ul>
                      {
                        
                        recipes[recipe].items.map((item, index) => {
                          return <li className="list-group-item" key={index}>{item}</li>
                        })
                      }
                    </ul> : ""
                  }
              <button className="btn btn-danger" onClick={() => this.deleteRecipe(recipe)} ><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete</button>
              <button className="btn btn-default" onClick={() => this.editToggle(recipe)}>Edit <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></button>
              {
                recipes[recipe].edit ?
              <form className="input-group" ref={(input) => this.editForm = input } onSubmit={(e) => this.editRecipe(e, recipe)}>
                <div>
                  <label>Title</label>
                  <br />
                  <input className="form-control" defaultValue={recipes[recipe].title} ref={(input) => this.editTitle = input }/>
                </div>
                <div>
                  <label>Ingredients</label>
                  <br />
                <textarea className="form-control" defaultValue={recipes[recipe].items.join(',')} ref={(input) => this.editTextarea = input}></textarea>
                </div>
                <button className="btn btn-primary" type="submit" value="Submit"> Submit <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
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
        <input className="form-control" ref={(input) => this.title = input }/>
        <label>Ingredients</label>
        <textarea className="form-control" ref={(input) => this.textarea = input}></textarea>
        <button className="btn btn-primary" type="submit" value="Submit" >Submit</button>
      </form>
      </div>
      
    );
  }
}

export default App;
