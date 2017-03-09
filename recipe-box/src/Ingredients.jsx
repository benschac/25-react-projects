import React, { Component, PropTypes } from 'react';
import { Button, Panel, ButtonGroup } from 'react-bootstrap';
const wellStyles = {maxWidth: 700, margin: '100px auto'};
const title = (
      <h3>Panel title</h3>
    );  

class Ingredients extends Component {
    
    render() {
    
    const recipes = this.props.recipes.map((recipe, index) => {
       
        return (
            <Panel key={index} header={recipe.title} 
                    onClick={(e) => this.props.openPanel(e) } 
                    collapsible expanded={this.props.open}
                    bsStyle="success">
            <h3>Ingredients</h3>
            <ButtonGroup vertical block>
                {
                     recipe.items.map((item, index) => {
                         return <Button key={index}>{item}</Button>
                         
                     })
                }
            </ButtonGroup>
            <Button bsStyle="danger" 
                    onClick={() => this.props.deleteRecipe(recipe)}>Delete</Button>
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