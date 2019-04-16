import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import CardLayout from './CardLayout';
import CardDeck from 'react-bootstrap/CardDeck';


//import components



export default class EventList extends Component {

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
            {/* Start pagination */}
            <div className="container mt-3 mb-7">
              <nav aria-label="Page navigation example mr-4">
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
            </div>
            {/* End pagination */}
          </div>

        </div>
      </>
    );
  }
}
