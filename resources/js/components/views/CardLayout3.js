import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import TextTruncate from 'react-text-truncate';

//import components

export default class CardLayout extends Component {

  componentDidMount(){
    let url = this.props.event.event_media;
    let mediaHolder;
    if (url == undefined){
    } else if(url.startsWith('data')){
      mediaHolder = document.getElementById("mediaHolder"+ this.props.event.id).innerHTML = "<img class=\"image-display\" src=\"" + url + "\" />"
    }
  }

  render() {
    let eventId = this.props.event.id ? this.props.event.id : '';
    return(
      <>
      <div id={"mediaHolder"+eventId}></div>
      <div className="card mb-3 small-card-bg text-center" style={{maxWidth: '100%', maxHeight: '270px'}}>
        <div className="row no-gutters">
          <div className="col-md-10">
            <div className="card-body">
              <h2 className="card-title"><Link to={"/event/"+this.props.event.id}>{this.props.event.event_title}</Link></h2>
              <TextTruncate className="card-text"
                 line={2}
                 truncateText="…"
                 text={this.props.event.event_description}
                 textTruncateChild={<Link to={"/event/"+this.props.event.id} onClick={() => reload(this.props.event.id)}><br/>Read more</Link>} />
               <p className="card-text text-muted mt-2"><Moment format="DD MMM YYYY - H:mm">{this.props.event.date}</Moment></p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
