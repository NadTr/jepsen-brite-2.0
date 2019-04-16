import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

//import components

export default class CardLayout extends Component {

  render() {
    return(
      <>
        <Card style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3", border:"solid 1.50px #40C0DD" }} >
          <Card.Body className="p-2 text-center">
            <Link to={"/event/"+this.props.event.id}>
              <Card.Img src={this.props.event.event_image} />
            </Link>
            <Card.Title>
              <h3>{this.props.event.event_title}</h3>
            </Card.Title>
            <Card.Text>
              {this.props.event.event_description}
            </Card.Text>
            <Card.Text>
              {this.props.event.event_time}
            </Card.Text>
            <Link to={"/event/"+this.props.event.id}>
              <Button id="btn" style={{background:"#207A8E" }}>More</Button>
            </Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}
