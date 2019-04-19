import React, { Component } from 'react';
import { Form, Accordion, Card, Button} from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventForm extends Component {
  render() {
    return(
      <>
        <div className="container mt-4 mb-5">
          <Form>
            <Form.Group controlId="createForm.ControlInput1">
              <Form.Label>Name of the event:</Form.Label>
              <Form.Control type="text" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.package ? this.props.package.event_title : ''} onChange={this.props.onChangeTitle}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput2">
              <Form.Label>Date of the event:</Form.Label>
              <Form.Control  type="date" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.date ? this.props.date: ''} onChange={this.props.onChangeDate}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput9">
              <Form.Label>Hour of the event:</Form.Label>
              <Form.Control  type="time" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.time ? this.props.time: ''} onChange={this.props.onChangeTime}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput3">
              <Form.Label>Description of the event:</Form.Label>
              <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="text" defaultValue={this.props.package ? this.props.package.event_description: ''} onChange={this.props.onChangeDescription}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput4">
              <Form.Label>City :</Form.Label>
              <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="text" defaultValue={this.props.package ? this.props.package.event_city: ''} onChange={this.props.onChangeCity}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput5">
              <Form.Label>Adress:</Form.Label>
              <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="text" defaultValue={this.props.package ? this.props.package.event_location: ''} onChange={this.props.onChangeLocation}/>
            </Form.Group>

            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" >
                  Add an image
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form.Group controlId="createForm.ControlInput7">
                      <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="file" onChange={this.props.onChangeImage}/>
                    </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Add a video
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Form.Group controlId="createForm.ControlInput8">
                      <Form.Control style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} type="text" placeholder="enter Youtube URL" defaultValue={this.props.package ? this.props.package.event_video: ''} onChange={this.props.onChangeVideo}/>
                    </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Form.Group controlId="createForm.ControlInput6">
              <Form.Label>Reminder:</Form.Label>
              <Form.Control type="date" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3",border:"solid 1.50px #40C0DD" }} defaultValue={this.props.package ? this.props.package.reminder: ''} onChange={this.props.onChangeReminder}/>
            </Form.Group>
          </Form>


          <div>
            <ConfirmModalContainer
              style={{background:"#207A8E", border:"solid 1.50px #40C0DD"}}
              label="Submit"
              message={"Do you want to "+this.props.method+" this event ?"}
              onClick={this.props.onClick}/>
            </div>
            </div>

      </>
    )
  }
}
