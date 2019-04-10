import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Logo from '../../assets/FoodTruck.png';

export default class EventHistory extends Component {
  render() {
    return(
      <>
        <div onScroll={this.handleScroll}>
          <div className="logoContainer">
            <img src={Logo} alt="logo" id="foodTruck"/>
          </div>
          <div className="centre">
            {this.props.package.map(event =>
            <Card style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3", border:"solid 1.50px #40C0DD" }} key={event.id}>
              <Card.Body>
                <Card.Title>
                  <h3>{event.name}</h3>
                </Card.Title>
                <Card.Text>
                  {event.description}
                </Card.Text>
                <Card.Text>
                  {event.date}
                </Card.Text>
                <Link to={"/event-display-"+event.id}>
                  <Button id="btn" style={{background: "#207A8E" }}>More info</Button>
                </Link>
              </Card.Body>
            </Card>
          )}
          </div>
        </div>
      </>
    )
  }
}


