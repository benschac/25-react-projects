import React, { Component, PropTypes } from 'react';
import { Button, Modal, FormGroup,
        ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';

    

class AddRecipe extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>Add a Recipe</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                    <FormGroup
                        controlId="formBasicText"
        
                    >
                        <ControlLabel>Recipe</ControlLabel>
                        <FormControl
                        type="text"
                        value={this.props.value}
                        placeholder="Khao Soi"
                        onChange={(e) => this.props.handleTitleChange(e)}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Ingredients</ControlLabel>
                        <FormControl componentClass="textarea"
                                     placeholder="Condensed Milk, ..."
                        />
                    </FormGroup>

                    </form>

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={(e) => this.props.addEditRecipe(e)}>Add Recipe</Button>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
                </Modal> 
            </div>
        );
    }
}

AddRecipe.propTypes = {

};

export default AddRecipe;