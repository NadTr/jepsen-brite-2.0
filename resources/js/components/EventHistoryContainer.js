import React, { Component } from 'react';

//import components
import EventHistory from './views/EventHistory';
import { getOldEvents } from './Api';

export default class EventHistoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const events = await getOldEvents();
    this.setState({
     events: events
   })
 }
 componentWillUnmount() {
  window.removeEventListener("scroll", this.handleScroll);
}

handleScroll(event) {
  let img = document.getElementById("foodTruck");

  img.style.left =
      (window.scrollY /
          (document.body.offsetHeight - window.innerHeight)) *
          (document.body.offsetWidth - img.offsetWidth) +
      "px";
  let scrollTop = event.srcElement.body.scrollTop;

}

  render() {
    return(
      <EventHistory package={this.state.events} />
    )
  }
}
