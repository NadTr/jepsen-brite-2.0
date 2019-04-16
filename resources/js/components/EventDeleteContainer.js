import React, { Component } from 'react';

//import components
import { deleteEvent } from './Api';
import Sheep from './views/Sheep';

import {SessionProvider, SessionContext} from './providers/SessionProvider';

export default class EventDeleteContainer extends Component {
  constructor(props){
    super(props);

  }



  onSubmit(){

    deleteEvent(obj, this.context.state.token);
    this.props.history.push('/');
  }

  render() {
    return(
      <Sheep/>
    )
  }
}

EventDeleteContainer.contextType=SessionContext
