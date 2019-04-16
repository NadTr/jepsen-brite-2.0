import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CardLayout from './CardLayout';
import CardDeck from 'react-bootstrap/CardDeck';
import Moment from 'react-moment';

//import components


export default class EventList extends Component {

  render() {
    console.log(this.props.current_page);
    return(
      <>
        <div onScroll={this.handleScroll}>
          <div className="container py-5">
            <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i>Next events</h1>
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
            {/* Start pagination */}
            <div className="container mt-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-end">
                  {parseInt(this.props.current_page) > 1 &&
                    <li className="page-item">
                      <a className="page-link" href={this.props.route+"/page="+(parseInt(this.props.current_page)-1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                  }
                  {parseInt(this.props.current_page) > 1 &&
                    <li className="page-item"><a className="page-link" href={this.props.route+"/page="+(parseInt(this.props.current_page)-1)}>{parseInt(this.props.current_page)-1}</a></li>
                  }
                  <li className="page-item"><a className="page-link page-link-active" href={this.props.route+"/page="+(parseInt(this.props.current_page))}>{parseInt(this.props.current_page)}</a></li>
                  {parseInt(this.props.current_page) < parseInt(this.props.last_page) &&
                    <li className="page-item"><a className="page-link"href={this.props.route+"/page="+(parseInt(this.props.current_page)+1)}>{parseInt(this.props.current_page)+1}</a></li>
                  }
                  {parseInt(this.props.current_page) < parseInt(this.props.last_page) &&
                    <li className="page-item">
                      <a className="page-link" href={this.props.route+"/page="+(parseInt(this.props.current_page)+1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  }
                </ul>
              </nav>
              <Link to={this.props.route+"/page=1"}>
                <Button className="navButton" variant="#207A8E">Back to the Past</Button>
              </Link>
            </div>
            {/* End pagination */}
          </div>

        </div>
      </>
    );
  }
}
