import React, { Component } from "react";

//import components
import EventList from "./views/EventList";
import { searchEvent } from "./Api";


export default class EventSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    async componentDidMount() {

        const events = await searchEvent(this.props.location.search.slice(1));
        console.log(events);
        this.setState({
            events: events.data
        });
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.location != this.props.location){
          const events = await searchEvent(this.props.location.search.slice(1));
          console.log(events);
          this.setState({
              events: events.data
          });
        }
    }

    render() {
        return <EventList package={this.state.events} />;
    }
}
