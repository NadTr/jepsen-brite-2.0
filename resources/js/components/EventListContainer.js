import React, { Component } from "react";

//import components
import EventList from "./views/EventList";
import { getAllEvents } from "./Api";


export default class EventListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            current_page: 1,
            last_page: 1,

        };
    }

    async componentDidMount() {
        const events = await getAllEvents(this.props.match.params.page);
        this.setState({
            events: events.data,
            current_page: events.current_page,
            last_page: events.last_page,

        });
    }

    render() {
        return <EventList
          package={this.state.events}
          current_page={this.state.current_page}
          last_page={this.state.last_page}
          route={'/events'}

         />;
    }
}
