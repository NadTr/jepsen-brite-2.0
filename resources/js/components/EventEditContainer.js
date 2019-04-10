import React, { Component } from 'react';

//import components
import EventEdit from './views/EventEdit';
import { getOneEvent, editEvent } from './Api';

export default class EventEditContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReminder = this.onChangeReminder.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
      event:[],
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

  onChangeReminder(input){
    this.setState({
     reminder: input.target.value
   });
  }

  onChangeDescription(input){
    this.setState({
     description: input.target.value
   });
  }

  onSubmit(data){
    data.preventDefault();
    const obj = {
      "name": this.state.name,
      "date": this.state.date,
      "description": this.state.description,
      "reminder": this.state.reminder
    }
    editEvent(this.props.match.params.id, obj)
    this.props.history.push('/')
  }

  async componentDidMount() {
    const event= await getOneEvent(this.props.match.params.id);
    this.setState({
      event:event,
      name: event.name,
      date: event.date,
      reminder: event.reminder,
      description: event.description
    })
  }

  render() {
    console.log("control this.state.event.event ", this.state.event.event);
    return(
      <EventEdit
        package={this.state.event.event}
        onChangeName={this.onChangeName}
        onChangeDate={this.onChangeDate}
        onChangeDescription={this.onChangeDescription}
        onChangeReminder={this.onChangeReminder}
        onClick={this.onSubmit}
      />
    )
  }
}
