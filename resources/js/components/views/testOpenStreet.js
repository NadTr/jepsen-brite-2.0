import React, { Component } from 'react';

import EmbededOpenStreetMap from 'EmbededOpenStreetMap';


export default class testOpenStreet extends Component {
  render() {
    return(
      <div>
        Example.js says : {this.props.message}
        <p>"You're god damn right !"</p>
      </div>
    )
  }
}
