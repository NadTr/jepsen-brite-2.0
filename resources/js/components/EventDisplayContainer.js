import React, { Component } from 'react';

//import components
import EventDisplay from './views/EventDisplay';
import { getOneEvent } from './Api';

export default class EventDisplayContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      event: []
    }
  }

  async componentDidMount() {
      const event = await getOneEvent(this.props.match.params.id);
      this.setState({
       event: event
     })
   }

   // componentDidUpdate() {
   //     console.log(this.state.event);
   // }

  render() {
    return(
    <EventDisplay package={this.state.event}/>
    )
  }
}
