import React, { Component } from 'react';

//import components
import EventForm from './views/EventForm';
import { createEvent } from './Api';
import {SessionProvider, SessionContext} from './providers/SessionProvider';

export default class EventCreateContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onChangeReminder = this.onChangeReminder.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      time: "",
      date: "",
      description: "",
      city: "",
      location: "",
      image: "",
      video: "",
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

  onChangeTime(input){
    this.setState({
     time: input.target.value
   });
  }

  onChangeDescription(input){
    this.setState({
     description: input.target.value
   });
  }

  onChangeCity(input){
    this.setState({
     city: input.target.value
   });
  }
  onChangeLocation(input){
    this.setState({
     location: input.target.value
   });
  }
  onChangeImage(input){
    this.setState({
     image: input.target.value
   });
  }
  onChangeVideo(input){
    this.setState({
     video: input.target.value
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
      "event_time": this.state.date+' '+this.state.time,
      "event_description": this.state.description,
      "event_city": this.state.city,
      "event_location": this.state.location,
      "event_media": this.state.image,
      "reminder": this.state.reminder
    }
    createEvent(obj, this.context.state.token);
    this.props.history.push('/');
  }

  render() {
    return(
      <EventForm
        method={'create'}
        onChangeTitle={this.onChangeTitle}
        onChangeDate={this.onChangeDate}
        onChangeTime={this.onChangeTime}
        onChangeDescription={this.onChangeDescription}
        onChangeCity={this.onChangeCity}
        onChangeLocation={this.onChangeLocation}
        onChangeImage={this.onChangeImage}
        onChangeVideo={this.onChangeVideo}
        onChangeReminder={this.onChangeReminder}
        onClick={this.onSubmit}
      />
    )
  }
}

EventCreateContainer.contextType=SessionContext
