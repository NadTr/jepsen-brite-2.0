import React, { Component } from 'react';

//import components
import EventEdit from './views/EventEdit';
import { getOneEvent } from './Api';

export default class EventEditContainer extends Component {
  constructor(props){
    super(props);

    this.state={
      event:[]
    }
  }
  async componentDidMount() {    
    const event= await getOneEvent(this.props.match.params.id);
    this.setState({
      event:event
    })
    console.log(this.state.event)
  }
  render() {
    return(
      <EventEdit package={this.state.event}/>
    )
  }
}
