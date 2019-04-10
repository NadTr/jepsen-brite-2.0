import React, { Component } from 'react';

//import components
import EventDisplay from './views/EventDisplay';
import {SessionProvider, SessionContext} from './providers/SessionProvider';
import { getOneEvent, deleteEvent, registerEvent, unregisterEvent } from './Api';

export default class EventDisplayContainer extends Component {
  constructor (props) {
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      event: [],
      participants: []
    }
  }

  handleDelete() {
    deleteEvent(this.state.event.id)
    this.props.history.push('/')
  }

  // fct to subscribe to an events
  async optInEvent() {
    await registerEvent(this.props.match.params.id, this.context.state.token)
  }

  // fct to unsubscribe to an events
  async optOutEvent() {
    await unregisterEvent(this.props.match.params.id, this.context.state.token)
  }

  async componentDidMount() {
      const event = await getOneEvent(this.props.match.params.id);
      this.setState({
       event: event.event,
       participants: event.participants

     })
   }

  render() {
    console.log("container", this.props.match.params.id, this.context.state.token);
    return(
    <EventDisplay package={this.state.event} participants={this.state.participants} onClick={this.handleDelete}/>

    )
  }
}

EventDisplayContainer.contextType=SessionContext
