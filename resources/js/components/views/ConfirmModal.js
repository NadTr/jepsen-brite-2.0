import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ConfirmModal extends Component {
  render() {
    return(
      <React.Fragment>
        <Button  id="modalBtn" variant={this.props.variant} style={this.props.style} onClick={this.props.handleShow}>
          {this.props.label}
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation required</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.message}</Modal.Body>
          <Modal.Footer>
            <Button style={{background: "#207A8E" }} onClick={this.props.handleClose}>
              No
            </Button>
            <Button style={{background: "#207A8E" }} onClick={this.props.onClick}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}
