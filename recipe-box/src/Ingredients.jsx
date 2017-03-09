import React, { Component, PropTypes } from 'react';
import { Button, Panel, ButtonGroup } from 'react-bootstrap';
const wellStyles = {maxWidth: 700, margin: '100px auto'};
const title = (
      <h3>Panel title</h3>
    );  
const IngredientsButtons = (e) => {
        console.log(e)
        {
            e.recipe.map((item) => {
                <h1>{item}</h1>
            })
        }
    }

class Ingredients extends Component {
    
    render() {
    
    const recipes = this.props.recipes.map((recipe, index) => {

        return (
            <Panel key={index} header={title} 
                    onClick={() => this.props.openPanel() } 
                    collapsible expanded={this.props.open}
                    bsStyle="success">
            <h3>Ingredients</h3>
            <ButtonGroup vertical block>
                
                <Button>
                    something here
                </Button>
            </ButtonGroup>
            <Button bsStyle="danger">Delete</Button>
            <Button>Edit</Button>
            </Panel>
        );
        
    })
        return (
            <section className="well" style={wellStyles}>
            {recipes}
            
        </section>
        );
    }
}

Ingredients.propTypes = {

};

export default Ingredients;