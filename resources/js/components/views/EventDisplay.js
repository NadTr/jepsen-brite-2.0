import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  componentDidUpdate(){
  }
  render() {
    return(
      <>
        <div>
          <Card className="text-center">
            <Card.Header> {this.props.package.eventName} {this.props.package.eventUsername} {this.props.package.eventDate}</Card.Header>
            <Card.Body>
              <Card.Text>{this.props.package.eventDescr}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Link to={"/event-edit-"+this.props.package.eventId}>
                <Button variant="secondary">Edit Event</Button>
              </Link>
              <div><ConfirmModalContainer
                variant="danger"
                label="Erase"
                message="Do you want to delete this event ?"
                onClick={this.props.onClick}/>
              </div>
            </Card.Footer>
          </Card>
        </div>
        <CardDeck>
          {this.props.participants.map(participant =>
            <Card key={Math.random()}>
              <Card.Body>
                <Card.Title>{participant.pseudo}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          )}
        </CardDeck>
      </>
    )
  }
}
