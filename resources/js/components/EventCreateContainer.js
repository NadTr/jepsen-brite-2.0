import React, { Component } from 'react';

//import components
import EventCreate from './views/EventCreate';
import { createEvent } from './Api';
import {SessionProvider, SessionContext} from './providers/SessionProvider';

export default class EventCreateContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReminder = this.onChangeReminder.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      date: "",
      description: "",
      reminder: ""
    }
  }

  onChangeName(input){
    this.setState({
     name: input.target.value
   });
  }

  onChangeDate(input){
    this.setState({
     date: input.target.value
   });
  }

  onChangeDescription(input){
    this.setState({
     description: input.target.value
   });
  }

  onChangeReminder(input){
      this.setState({
        reminder: input.target.value
      });
  }

  onSubmit(data){
    data.preventDefault();
    const obj = {
      "name": this.state.name,
      "date": this.state.date+":00",
      "description": this.state.description,
      "reminder": this.state.reminder+":00",
      "u too late":"false"
    }
    createEvent(obj, this.context.state.token);
    this.props.history.push('/');
  }

  render() {
    return(
      <EventCreate
        onChangeName={this.onChangeName}
        onChangeDate={this.onChangeDate}
        onChangeDescription={this.onChangeDescription}
        onChangeReminder={this.onChangeReminder}
        onClick={this.onSubmit}
      />
    )
  }
}

EventCreateContainer.contextType=SessionContext
