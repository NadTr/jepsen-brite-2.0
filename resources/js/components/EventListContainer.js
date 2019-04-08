import React, { Component } from "react";

//import components
import EventList from "./views/EventList";
import { getAllEvents } from "./Api";

export default class EventListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    async componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        const events = await getAllEvents();
        this.setState({
            events: events
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(event) {
        console.log(window.scrollY);
        let img = document.getElementById("foodTruck");
        console.log(img);

        img.style.left =
            (window.scrollY /
                (document.body.offsetHeight - window.innerHeight)) *
                (document.body.offsetWidth - img.offsetWidth) +
            "px";
        let scrollTop = event.srcElement.body.scrollTop;
        console.log(
            (window.scrollY /
                (document.body.offsetHeight - window.innerHeight)) *
                document.body.offsetWidth
        );
        console.log(event);

        /*this.setState({
        transform: itemTranslate
      });*/
    }

    render() {
        return <EventList package={this.state.events} />;
    }
}
