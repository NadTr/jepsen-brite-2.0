import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventDisplay extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Description de l'évènement</p>
          <Link to={"/"}>
            <Button variant="secondary">Return</Button>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
