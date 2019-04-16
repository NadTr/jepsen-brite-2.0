import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardLayout from './CardLayout';
import CardDeck from 'react-bootstrap/CardDeck';

//import components



export default class Home extends Component {

  render() {
    console.log(this.props.current_page);
    return(
      <>
        <div onScroll={this.handleScroll}>
          <div className="container my-5">
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
    );
  }
}
