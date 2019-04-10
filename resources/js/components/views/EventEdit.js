import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventEdit extends Component {
  render() {
    return(
      <>
      {this.props.package ?
        <Form>
          <Form.Group controlId="createForm.ControlInput1">
            <Form.Label>Name of the event:</Form.Label>
            <Form.Control type="text" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.package.name} onChange={this.props.onChangeName}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput2">
            <Form.Label>Date of the event:</Form.Label>
            <Form.Control  style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.package.date} onChange={this.props.onChangeDate}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput3">
            <Form.Label>Reminder:</Form.Label>
            <Form.Control  style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.package.reminder} onChange={this.props.onChangeReminder}/>
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput4">
            <Form.Label>Description of the event:</Form.Label>
            <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="text" defaultValue={this.props.package.description} onChange={this.props.onChangeDescription}/>
          </Form.Group>
        </Form>
        :
        <div></div>
      }
        <div>
          <ConfirmModalContainer
            style={{background:"#207A8E", border:"solid 1.50px #40C0DD"}}
            label="Submit"
            message="Do you want to change this event ?"
            onClick={this.props.onClick}/>
        </div>

      </>
    )
  }
}
