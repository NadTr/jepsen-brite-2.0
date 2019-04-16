import React, { Component } from 'react';

//import components
import EventCreate from './views/EventCreate';
import { createEvent } from './Api';
import {SessionProvider, SessionContext} from './providers/SessionProvider';

export default class EventCreateContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReminder = this.onChangeReminder.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      date: "",
      description: "",
      reminder: ""
    }
  }

  onChangeTitle(input){
    this.setState({
     title: input.target.value
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
      "event_title": this.state.title,
      "event_time": this.state.date+":00",
      "event_description": this.state.description,
      "event_city": 'Liège', //this.state.city,
      "event_location": 'Rue de Mulhouse 36', // this.state.location,
      "event_image": this.state.image,
      "event_video": null, //this.state.video,
      "reminder": this.state.reminder+":00"
    }
    createEvent(obj, this.context.state.token);
    this.props.history.push('/');
  }

  render() {
    return(
      <EventCreate
        onChangeTitle={this.onChangeTitle}
        onChangeDate={this.onChangeDate}
        onChangeDescription={this.onChangeDescription}
        onChangeReminder={this.onChangeReminder}
        onClick={this.onSubmit}
      />
    )
  }
}

EventCreateContainer.contextType=SessionContext
