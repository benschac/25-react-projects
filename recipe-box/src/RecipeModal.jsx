import React, { Component, PropTypes } from 'react';
import { Button, Modal, FormGroup,
        ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';

    

class RecipeModal extends Component {
    render() {
        
        return (
            <div>
                <Modal show={this.props.modal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>



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