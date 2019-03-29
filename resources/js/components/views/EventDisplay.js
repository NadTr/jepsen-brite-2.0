import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Event description</p>
          <Link to={"/event-edit"}>
            <Button variant="secondary">Edit Event</Button>
          </Link>
          <div><ConfirmModalContainer
            variant="danger"
            label="Erase"
            message="Do you want to delete this event ?"/>
          </div>

        </div>
      </React.Fragment>
    )
  }
}
