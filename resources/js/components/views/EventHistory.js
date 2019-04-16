import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CardLayout from './CardLayout';
import CardDeck from 'react-bootstrap/CardDeck';

export default class EventHistory extends Component {
  render() {
    return(
      <>
      <div onScroll={this.handleScroll}>
        <div className="container py-5">
          <CardDeck>
          {this.props.package.map((event, index) =>
            index < 3 ?
            <CardLayout key={event.id} event={event}/> : ''
          )}
          </CardDeck>
          <CardDeck>
          {this.props.package.map((event, index) =>
            index >= 3 ?
            <CardLayout key={event.id} event={event}/> : ''
          )}
          </CardDeck>
        </div>

      </div>
      </>
    )
  }
}
