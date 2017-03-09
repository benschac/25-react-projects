import React, { Component, PropTypes } from 'react';
import { Button, Panel, ButtonGroup } from 'react-bootstrap';
const wellStyles = {maxWidth: 700, margin: '100px auto'};
const title = (
      <h3>Panel title</h3>
    );  
class Ingredients extends Component {
    render() {
        return (
            <section className="well" style={wellStyles}>
            <Panel header={title} 
                    onClick={() => this.props.openPanel() } 
                    collapsible expanded={this.props.open}
                    bsStyle="success">
            <h3>Ingredients</h3>
            <ButtonGroup vertical block>
                <Button>Pumpkin Puree</Button>
                <Button>Sweetened Condensed Milk</Button>
                <Button>Eggs</Button>
                <Button>Pumpkin Pie Spice</Button>
                <Button>Pie Crust</Button>
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