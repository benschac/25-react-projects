import React, { Component, PropTypes } from 'react';
import { Button, Modal, FormGroup,
        ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';

    

class RecipeModal extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {

    }
   
    render() {
    console.log(this.ref);     
        return (
            <div>
                <Modal show={this.props.modal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form ref={(e) => this.ref = e }>
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Ingredients</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    </FormGroup>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close}>Close</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

RecipeModal.propTypes = {

};

export default RecipeModal;