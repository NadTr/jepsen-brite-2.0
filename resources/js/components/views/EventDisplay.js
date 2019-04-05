import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  componentDidUpdate(){
    console.log("render", this.props.package);
  }
  render() {
    console.log("render", this.props);
    return(
      <>
        <div>
          <Card className="text-center">
            <Card.Header> {this.props.name} {this.props.author} {this.props.date}</Card.Header>
            <Card.Body>
              <Card.Text>{this.props.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Link to={"/event-edit-"+this.props.id}>
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
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </>
    )
  }
}
