import React, { Component } from "react";

//import components
import Home from "./views/Home";
import { getHomepage } from "./Api";


export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],

        };
    }

    async componentDidMount() {
        const events = await getHomepage();
        console.log(events);
        this.setState({
            events: events

        });
    }

    render() {
        return <Home
          package={this.state.events}
          route={'/events'}

         />;
    }
}
