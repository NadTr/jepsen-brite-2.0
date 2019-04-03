import React, { Component } from 'react';

//import components
import EventDisplay from './views/EventDisplay';
import { getOneEvent, deleteEvent } from './Api';

export default class EventDisplayContainer extends Component {
  constructor (props) {
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      event: []
    }
  }

  handleDelete() {
    deleteEvent(this.state.event.id)
    this.props.history.push('/')
  }

  async componentDidMount() {
    console.log("awaiting getOne");
    console.log(this.props.match.params.id);
      const event = await getOneEvent(this.props.match.params.id);

      this.setState({
       event: event
     })
     console.log(event);
   }

  render() {
    return(
    <EventDisplay package={this.state.event} onClick={this.handleDelete}/>

    )
  }
}
