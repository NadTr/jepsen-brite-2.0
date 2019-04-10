import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventCreate extends Component {
  render() {
    return(
      <>
        <Form id="formulaire" >
          <Form.Group controlId="createForm.ControlInput1" >
            <Form.Label>Name of the event:</Form.Label>
            <Form.Control type="text" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} onChange={this.props.onChangeName}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput2">
            <Form.Label>Date of the event:</Form.Label>
            <Form.Control type="text" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} onChange={this.props.onChangeDate} defaultValue="yyyy-mm-dd hh:mm"/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput3">
            <Form.Label>Set a reminder:</Form.Label>
            <Form.Control type="text" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} onChange={this.props.onChangeReminder} defaultValue="yyyy-mm-dd hh:mm"/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput4">
            <Form.Label>Description of the event:</Form.Label>
            <Form.Control as="textarea" rows="8" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} onChange={this.props.onChangeDescription}/>
          </Form.Group>

          <div><ConfirmModalContainer
            style={{background:"#207A8E", border:"solid 1.50px #40C0DD"}}
            variant="success"
            label="Submit"
            message="Do you want to create this event ?"
            onClick={this.props.onClick}/>
          </div>
        </Form>
        <footer>
          <h2>Event Food</h2>
        </footer>
      </>
    )
  }
}
