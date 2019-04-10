import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventCreate extends Component {
  render() {
    return(
      <>
        <Form>
          <Form.Group controlId="createForm.ControlInput1">
            <Form.Label>Name of the event:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeName}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput2">
            <Form.Label>Date of the event:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeDate} defaultValue="yyyy-mm-dd hh:mm:ss"/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput3">
            <Form.Label>Set a reminder:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeReminder} defaultValue="yyyy-mm-dd hh:mm:ss"/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput4">
            <Form.Label>Description of the event:</Form.Label>
            <Form.Control type="text" onChange={this.props.onChangeDescription}/>
          </Form.Group>
        </Form>
        <div><ConfirmModalContainer
          variant="success"
          label="Submit"
          message="Do you want to create this event ?"
          onClick={this.props.onClick}/>
        </div>
      </>
    )
  }
}
