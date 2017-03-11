import React, { Component } from 'react';
import { Button, Panel, ButtonGroup, Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const wellStyles = {maxWidth: 700, margin: '100px auto'};

class Ingredients extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getInitialState() {
        return {
            showModal: false
        }
    }

    close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e) {
    console.log(e.target.value)
  }
    
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

            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Text in a modal</h4>
                <form>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
            </Modal>
            
            <Button bsStyle="danger" 
                    onClick={() => this.props.deleteRecipe(recipe)}>Delete</Button>
            <Button onClick={this.open}>Edit</Button>
            
            
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

export default Ingredients;