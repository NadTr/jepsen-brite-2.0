import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//import components


export default class EventList extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Event list</p>
          <Link to={"/event-display"}>
          <Button variant="secondary">More info</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
