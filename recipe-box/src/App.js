import React, { Component } from 'react';
import { Button, Panel, ButtonGroup, Popover, Tooltip, Modal, OverlayTrigger, FormGroup,
        ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';
import './App.css';

const wellStyles = {maxWidth: 700, margin: '100px auto'};

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      showModal: false,
      value: ''
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  getInitialState() {
    return { showModal: false,
              value: '' };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const title = (
      <h3>Panel title</h3>
    );

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    
    return (
      
      
    
      <div className="app__container" style={wellStyles}>
       <section className="well" style={wellStyles}>
        <Panel header={title} 
                onClick={ ()=> this.setState({ open: !this.state.open })} 
                collapsible expanded={this.state.open}
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
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title><strong>Add a Recipe</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Recipe</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Khao Soi"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Condensed Milk, ..." />
              </FormGroup>

            </form>

            
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.close}>Add Recipe</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    );
  }
}

export default App;
