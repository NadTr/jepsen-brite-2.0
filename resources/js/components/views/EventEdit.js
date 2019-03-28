import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventEdit extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Edit this event.</p>
          <Link to={"/"}>
            <Button variant="secondary">Return</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}