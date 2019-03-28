import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class EventList extends Component {
  render() {
    return(
      <div>
        <p>Liste des évènements</p>
        <Link to={"/event-create"}>
        <Button variant="secondary">Create Event</Button>
        </Link>
        <Link to={"/event-display"}>
        <Button variant="secondary">More info</Button>
        </Link>
      </div>
    )
  }
}
