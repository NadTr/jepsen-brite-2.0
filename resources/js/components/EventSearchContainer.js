import React, { Component } from "react";

//import components
import EventList from "./views/EventList";
import { getAllEvents } from "./Api";


export default class EventSearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    async componentDidMount() {
        const events = await searchEvent('test');
        this.setState({
            events: events.data
        });
    }

    render() {
        return <EventList package={this.state.events} />;
    }
}
