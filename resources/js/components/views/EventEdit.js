import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventEdit extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p>Edit this event.</p>
        </div>
        <div>
          <ConfirmModalContainer
            variant="info"
            label="Submit change"
            message="Do you want to change this event ?"/>
        </div>

      </React.Fragment>
    )
  }
}
