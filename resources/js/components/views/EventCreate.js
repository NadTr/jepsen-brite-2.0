import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventCreate extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Create a new Event.</p>
        </div>
        <div><ConfirmModalContainer
          variant="success"
          label="Submit"
          message="Do you want to create this event ?"/>
        </div>
      </React.Fragment>
    )
  }
}
