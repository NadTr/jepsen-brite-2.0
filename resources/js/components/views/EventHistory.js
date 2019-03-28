import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventHistory extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Events history</p>
          <Link to={"/"}>
          <Button variant="secondary">Return</Button>
          </Link>
          <Link to={"/event-display"}>
          <Button variant="secondary">More info</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}