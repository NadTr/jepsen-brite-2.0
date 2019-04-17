import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import TextTruncate from 'react-text-truncate';

//import components

export default class CardLayout extends Component {

  render() {
    let url = this.props.event_media;
    let videoID;
    let mediaHolder;
    if (url == undefined){

    }else if(url.startsWith('data')){
      console.log(this.props.event_media)
      mediaHolder = document.getElementById("mediaHolder2").innerHTML = "<img class=\"small-card-img\" src=\"" + url + "\" />"
      }

    return(
      <>
        <div className="card small-card" style={{ width: '100%', marginBottom: '0.5rem', background: "#D6E5E3", border:"solid 1.50px #40C0DD" }} >
          <div className="card-body p-2 text-center d-flex justify-content-center flex-column">
            <div className="bg-white">
            <div className="card-title">
              <Link to={"/event/"+this.props.event.id} style={{zIndex: '1', position: 'relative'}}>
                <h3 style={{zIndex: '1', position: 'relative'}}>{this.props.event.event_title}</h3>
              </Link>
            </div>
              <TextTruncate
                     line={2}
                     truncateText="…"
                     text={this.props.event.event_description}
                     textTruncateChild={<Link to={"/event/"+this.props.event.id} onClick={() => reload(this.props.event.id)}>Read more</Link>} />
             <div className="card-text" style={{zIndex: '1', position: 'relative'}}>
              <Moment format="DD MMM YYYY - H:mm">{this.props.event.date}</Moment>
            </div>
            </div>
            <div id="mediaHolder2">
            </div>
          </div>
        </div>
      </>
    )
  }
}
