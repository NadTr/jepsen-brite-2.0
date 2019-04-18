import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CardLayout from './CardLayout';
import CardDeck from 'react-bootstrap/CardDeck';

//import components



export default class Home extends Component {

  render() {
    return(
      <>
        <div onScroll={this.handleScroll}>
          <div className="container my-5">
            <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> 3 Next events</h1>
            {this.props.package.map(event =>
              <CardLayout key={event.id} event={event} />
            )}
          </div>

        </div>
      </>
    );
  }
}
