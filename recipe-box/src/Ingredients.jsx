import React, { Component, PropTypes } from 'react';
import { Button, Panel, ButtonGroup } from 'react-bootstrap';
const wellStyles = {maxWidth: 700, margin: '100px auto'};
const title = (
      <h3>Panel title</h3>
    );  


class Ingredients extends Component {
    
    render() {
    const ingredients = this.props.ingredients.map((el, index) => {
        return <Button key={index}>{el}</Button>
    })
        console.log(this.props.ingredients)
        return (
            <section className="well" style={wellStyles}>
            <Panel header={this.props.title} 
                    onClick={() => this.props.openPanel() } 
                    collapsible expanded={this.props.open}
                    bsStyle="success">
            <h3>Ingredients</h3>
            <ButtonGroup vertical block>
                {ingredients}
            </ButtonGroup>
            <Button bsStyle="danger">Delete</Button>
            <Button>Edit</Button>
            </Panel>
        </section>
        );
    }
}

Ingredients.propTypes = {

};

export default Ingredients;