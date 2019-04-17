import React, { Component } from 'react';

//import components
import EventDisplay from './views/EventDisplay';
import {SessionProvider, SessionContext} from './providers/SessionProvider';
import { getOneEvent, deleteEvent, registerEvent, unregisterEvent } from './Api';

export default class EventDisplayContainer extends Component {
  constructor (props) {
    super (props);

    this.isAttending = this.isAttending.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.optInEvent = this.optInEvent.bind(this);
    this.optOutEvent = this.optOutEvent.bind(this);

    this.state = {
      event: {},
      attendees: [],
    }
  }

  isAttending() {
    return this.state.attendees.map(attendee => attendee.id).includes(this.context.state.session.id);
  }
  handleDelete() {
    deleteEvent(this.state.event.id, this.context.state.token)
    this.props.history.push('/')
  }

  // fct to subscribe to an events
  async optInEvent() {
    await registerEvent(this.props.match.params.id, this.context.state.token)
    this.props.history.push('/');
  }

  // fct to unsubscribe to an events
  async optOutEvent() {
    await unregisterEvent(this.props.match.params.id, this.context.state.token)
    this.props.history.push('/');
  }

  async componentDidMount() {
      const event = await getOneEvent(this.props.match.params.id);
      console.log(event.attendees);
      this.setState({
       event: event,
       attendees: event.attendees,
     })
   }

  render() {
    return(
      <EventDisplay
        package={this.state.event}
        attendees={this.state.attendees}
        onClick={this.handleDelete}
        isAttending={this.isAttending}
        optInEvent={this.optInEvent}
        optOutEvent={this.optOutEvent}
      />
    )
  }
}

EventDisplayContainer.contextType=SessionContext
